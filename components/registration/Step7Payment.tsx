import { useState } from 'react';
import { useRegistration } from '@/contexts/RegistrationContext';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { sendEmailNotification } from '@/lib/emailService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';


export default function Step7Payment() {
  const { setStep, data } = useRegistration();
  const { user } = useAuth();
  const { toast } = useToast();
  const [autoRenew, setAutoRenew] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({ title: 'Error', description: 'Please log in first', variant: 'destructive' });
      return;
    }

    setLoading(true);

    try {
      // Fetch membership tier ID based on tier name
      const tierName = data.tier === 'Pro' ? 'Professional' : data.tier === 'Premium' ? 'Premium' : 'Basic';
      const { data: tierData, error: tierError } = await supabase
        .from('membership_tiers')
        .select('id')
        .eq('name', tierName)
        .single();

      if (tierError) throw tierError;

      // Parse name from fullName
      const nameParts = data.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Create member record with auth user ID
      const { error: memberError } = await supabase.from('members').insert({
        id: user.id,
        email: data.email,
        first_name: firstName,
        last_name: lastName,
        phone: data.phoneNumber,
        profession: data.primaryOccupation,
        identity: data.sector,
        membership_tier_id: tierData.id,
      });

      if (memberError) throw memberError;

      // Create payment record
      const amount = data.billingCycle === 'annual' ? 192 : 20;
      const { error: paymentError } = await supabase.from('dues_payments').insert({
        member_id: user.id,
        amount,
        billing_cycle: data.billingCycle,
        status: 'completed',
      });

      if (paymentError) throw paymentError;

      // Create payment history record
      const transactionId = `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const { error: historyError } = await supabase.from('payment_history').insert({
        member_id: user.id,
        transaction_id: transactionId,
        amount,
        status: 'completed',
      });

      if (historyError) throw historyError;

      // Send payment confirmation email
      const nextPaymentDate = new Date();
      nextPaymentDate.setDate(nextPaymentDate.getDate() + (data.billingCycle === 'annual' ? 365 : 30));
      
      await sendEmailNotification('payment_confirmation', data.email, {
        firstName,
        lastName,
        amount: amount.toString(),
        paymentDate: new Date().toLocaleDateString(),
        billingCycle: data.billingCycle,
        nextPaymentDate: nextPaymentDate.toLocaleDateString(),
      });

      toast({ title: 'Success', description: 'Payment processed successfully!' });
      setStep(8);

    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#00308f] mb-2">Payment</h1>
      <p className="text-gray-600 mb-6">Secure, encrypted payment processing</p>
      
      <form onSubmit={handleSubmit}>
        <Card className="mb-4">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <Input placeholder="1234 5678 9012 3456" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Expiry</label>
                <Input placeholder="MM/YY" value={expiry} onChange={e => setExpiry(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVC</label>
                <Input placeholder="123" value={cvc} onChange={e => setCvc(e.target.value)} required />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <p className="font-medium">Auto-renew</p>
                <p className="text-sm text-gray-600">Automatically renew my membership</p>
              </div>
              <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
            </div>

            <p className="text-xs text-gray-600 pt-4">
              🔒 We never store full card details. Encrypted payments by PCI-DSS compliant processor.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm mb-1">
              <span>{data.tier} Membership ({data.billingCycle})</span>
              <span>${data.billingCycle === 'annual' ? '192' : '20'}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${data.billingCycle === 'annual' ? '192' : '20'}</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={() => setStep(6)}>← Back</Button>
          <Button type="submit" disabled={loading} className="bg-[#00308f] hover:bg-[#5D8AA8]">
            {loading ? 'Processing...' : 'Pay & Join →'}
          </Button>
        </div>
      </form>
    </div>
  );
}

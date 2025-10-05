import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { sendEmailNotification } from '@/lib/emailService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function PaymentRemindersPage() {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [upcomingDues, setUpcomingDues] = useState<any[]>([]);
  const [expiringMemberships, setExpiringMemberships] = useState<any[]>([]);

  useEffect(() => {
    if (isAdmin) {
      fetchUpcomingDues();
      fetchExpiringMemberships();
    }
  }, [isAdmin]);

  const fetchUpcomingDues = async () => {
    const { data, error } = await supabase
      .from('dues_payments')
      .select('*, members(email, first_name, last_name)')
      .eq('status', 'pending')
      .gte('next_payment_date', new Date().toISOString())
      .lte('next_payment_date', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString());

    if (!error && data) setUpcomingDues(data);
  };

  const fetchExpiringMemberships = async () => {
    const { data, error } = await supabase
      .from('members')
      .select('*, membership_tiers(name, monthly_price)')
      .gte('membership_end_date', new Date().toISOString())
      .lte('membership_end_date', new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString());

    if (!error && data) setExpiringMemberships(data);
  };

  const sendPaymentReminders = async () => {
    setLoading(true);
    let successCount = 0;

    for (const payment of upcomingDues) {
      const dueDate = new Date(payment.next_payment_date);
      const daysUntilDue = Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

      const result = await sendEmailNotification('payment_reminder', payment.members.email, {
        firstName: payment.members.first_name,
        lastName: payment.members.last_name,
        amount: payment.amount.toString(),
        dueDate: dueDate.toLocaleDateString(),
        daysUntilDue,
        billingCycle: payment.billing_cycle,
      });

      if (result.success) successCount++;
    }

    setLoading(false);
    toast({ title: 'Success', description: `Sent ${successCount} payment reminders` });
  };

  const sendRenewalReminders = async () => {
    setLoading(true);
    let successCount = 0;

    for (const member of expiringMemberships) {
      const expiryDate = new Date(member.membership_end_date);
      const daysUntilExpiry = Math.ceil((expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

      const result = await sendEmailNotification('renewal_reminder', member.email, {
        firstName: member.first_name,
        lastName: member.last_name,
        membershipTier: member.membership_tiers?.name || 'Active Member',
        expirationDate: expiryDate.toLocaleDateString(),
        daysUntilExpiry,
        renewalAmount: member.membership_tiers?.monthly_price?.toString() || '20',
      });

      if (result.success) successCount++;
    }

    setLoading(false);
    toast({ title: 'Success', description: `Sent ${successCount} renewal reminders` });
  };

  if (!user || !isAdmin) return <Navigate to="/" />;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Email Notifications</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              {upcomingDues.length} members have payments due in the next 7 days
            </p>
            <Button onClick={sendPaymentReminders} disabled={loading || upcomingDues.length === 0}>
              {loading ? 'Sending...' : 'Send Payment Reminders'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Renewal Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              {expiringMemberships.length} memberships expiring in the next 30 days
            </p>
            <Button onClick={sendRenewalReminders} disabled={loading || expiringMemberships.length === 0}>
              {loading ? 'Sending...' : 'Send Renewal Reminders'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

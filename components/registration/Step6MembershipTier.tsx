import { useRegistration } from '@/contexts/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tiers = [
  { id: 'basic', name: 'Basic', price: 10, features: ['Newsletters', 'Alerts', 'Community access'] },
  { id: 'pro', name: 'Pro', price: 20, features: ['All Basic', 'Training discounts', 'Templates', 'Priority support'] },
  { id: 'plus', name: 'Plus', price: 35, features: ['All Pro', 'Legal clinic hours', 'Benefits marketplace'] },
];

export default function Step6MembershipTier() {
  const { setStep, data, updateData } = useRegistration();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#00308f] mb-2">Choose Your Tier</h1>
      <p className="text-gray-600 mb-6">Select the membership level that fits your needs</p>
      
      <div className="flex justify-center gap-4 mb-6">
        <Button variant={data.billingCycle === 'monthly' ? 'default' : 'outline'} onClick={() => updateData({ billingCycle: 'monthly' })}>Monthly</Button>
        <Button variant={data.billingCycle === 'annual' ? 'default' : 'outline'} onClick={() => updateData({ billingCycle: 'annual' })}>
          Annual <Badge className="ml-2">Save 20%</Badge>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {tiers.map(tier => (
          <Card key={tier.id} className={`cursor-pointer transition ${data.tier === tier.id ? 'ring-2 ring-[#00308f]' : ''}`} onClick={() => updateData({ tier: tier.id })}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#00308f] mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold mb-4">
                ${data.billingCycle === 'annual' ? Math.round(tier.price * 12 * 0.8) : tier.price}
                <span className="text-sm text-gray-600">/{data.billingCycle === 'annual' ? 'year' : 'month'}</span>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {tier.features.map((f, i) => <li key={i}>✓ {f}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setStep(5)}>← Back</Button>
        <Button onClick={() => setStep(7)} className="bg-[#00308f] hover:bg-[#5D8AA8]">Proceed to Payment →</Button>
      </div>
    </div>
  );
}

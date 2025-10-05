import { useRegistration } from '@/contexts/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function Step8Confirmation() {
  const { data } = useRegistration();
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    // Send welcome email when component mounts
    const sendWelcomeEmail = async () => {
      try {
        const response = await fetch('https://hhqhvusswlvwgmjdnxal.supabase.co/functions/v1/send-welcome-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            duesType: data.duesType || 'monthly',
            membershipTier: data.tier || 'Active Member'
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const result = await response.json();
        
        if (result.success) {
          setEmailSent(true);
        } else {
          setEmailError(true);
        }
      } catch (error) {
        console.error('Error sending welcome email:', error);
        setEmailError(true);
      }
    };

    if (data.email) {
      sendWelcomeEmail();
    }
  }, [data.email, data.firstName, data.lastName, data.duesType, data.tier]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-[#00308f] mb-2">Welcome to the Community!</h1>
        <p className="text-gray-600">Your membership is now active</p>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Receipt Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Membership Tier:</span><span className="font-medium">{data.tier}</span></div>
            <div className="flex justify-between"><span>Billing Cycle:</span><span className="font-medium">{data.billingCycle}</span></div>
            <div className="flex justify-between"><span>Amount Paid:</span><span className="font-medium">${data.billingCycle === 'annual' ? '192' : '20'}</span></div>
            <div className="flex justify-between"><span>Next Renewal:</span><span className="font-medium">{new Date(Date.now() + (data.billingCycle === 'annual' ? 365 : 30) * 24 * 60 * 60 * 1000).toLocaleDateString()}</span></div>
          </div>
          <Button variant="outline" className="w-full mt-4">Download PDF Receipt</Button>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <div className="space-y-3">
            <Button className="w-full bg-[#00308f] hover:bg-[#5D8AA8]">Join Community Space</Button>
            <Button variant="outline" className="w-full">Browse Training Resources</Button>
            <Button variant="outline" className="w-full">Access Benefits Portal</Button>
            <Button variant="outline" className="w-full">Set Up Alerts & Goals</Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm">
        {emailSent && (
          <p className="text-green-600 flex items-center justify-center gap-2">
            <span>✓</span> Confirmation email sent to {data.email}
          </p>
        )}
        {emailError && (
          <p className="text-amber-600">
            Note: There was an issue sending the confirmation email. Please contact support if you don't receive it within 24 hours.
          </p>
        )}
        {!emailSent && !emailError && (
          <p className="text-gray-600">
            Sending confirmation email to {data.email}...
          </p>
        )}
      </div>

    </div>
  );
}

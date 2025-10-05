import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function VerificationPendingPage() {
  const { resendVerificationEmail } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get('email') || '');
  }, []);

  const handleResend = async () => {
    if (!email) {
      toast({ title: 'Error', description: 'Email address not found', variant: 'destructive' });
      return;
    }
    
    setLoading(true);
    const { error } = await resendVerificationEmail(email);
    setLoading(false);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setResent(true);
      toast({ title: 'Success', description: 'Verification email sent!' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-[#00308f]" />
          </div>
          <CardTitle className="text-2xl text-[#00308f]">Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            We've sent a verification email to <strong>{email}</strong>
          </p>
          <p className="text-center text-gray-600">
            Please check your inbox and click the verification link to activate your account.
          </p>
          
          {resent && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800">Verification email sent successfully!</span>
            </div>
          )}
          
          <div className="pt-4 space-y-3">
            <Button 
              onClick={handleResend} 
              disabled={loading || resent}
              variant="outline"
              className="w-full"
            >
              {loading ? 'Sending...' : 'Resend Verification Email'}
            </Button>
            
            <Button 
              onClick={() => window.location.href = '/login'}
              variant="ghost"
              className="w-full"
            >
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function EmailVerificationPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session) {
          setStatus('success');
          setMessage('Email verified successfully!');
          setTimeout(() => navigate('/dashboard'), 2000);
        } else {
          setStatus('error');
          setMessage('Verification failed. Please try again.');
        }
      } catch (error: any) {
        setStatus('error');
        setMessage(error.message || 'Verification failed');
      }
    };

    verifyEmail();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            {status === 'verifying' && <Loader2 className="w-8 h-8 text-[#00308f] animate-spin" />}
            {status === 'success' && <CheckCircle2 className="w-8 h-8 text-green-600" />}
            {status === 'error' && <XCircle className="w-8 h-8 text-red-600" />}
          </div>
          <CardTitle className="text-2xl text-[#00308f]">Email Verification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">{message}</p>
          
          {status === 'success' && (
            <p className="text-center text-sm text-gray-500">
              Redirecting to dashboard...
            </p>
          )}
          
          {status === 'error' && (
            <div className="space-y-3">
              <Button onClick={() => navigate('/verification-pending')} className="w-full">
                Resend Verification Email
              </Button>
              <Button onClick={() => navigate('/login')} variant="outline" className="w-full">
                Back to Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

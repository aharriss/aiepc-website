import { useState } from 'react';
import { useRegistration } from '@/contexts/RegistrationContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Step3CreateAccount() {
  const { setStep, updateData } = useRegistration();
  const { signUp, signInWithOAuth } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) return;
    setLoading(true);
    
    const { data, error } = await signUp(email, password);
    setLoading(false);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      updateData({ email, authMethod: 'email' });
      toast({ title: 'Success', description: 'Account created! Please check your email to verify.' });
      // Redirect to verification pending page
      window.location.href = `/verification-pending?email=${encodeURIComponent(email)}`;
    }
  };


  const handleSSO = async (provider: 'google' | 'azure' | 'apple') => {
    const { error } = await signInWithOAuth(provider);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      updateData({ authMethod: provider });
      setStep(4);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#00308f] mb-2">Create Account</h1>
      <p className="text-gray-600 mb-6">We'll use this only to secure your account and send your receipt.</p>
      
      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <Input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignUp} disabled={!email || !password || loading} className="w-full bg-[#00308f] hover:bg-[#5D8AA8]">
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or continue with</span></div>
          </div>
          
          <Button variant="outline" onClick={() => handleSSO('google')} className="w-full">Google</Button>
          <Button variant="outline" onClick={() => handleSSO('azure')} className="w-full">Microsoft</Button>
          <Button variant="outline" onClick={() => handleSSO('apple')} className="w-full">Apple</Button>
        </CardContent>
      </Card>

      <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
    </div>
  );
}


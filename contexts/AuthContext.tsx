import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signInWithOAuth: (provider: 'google' | 'azure' | 'apple') => Promise<any>;
  signOut: () => Promise<void>;
  resendVerificationEmail: (email: string) => Promise<any>;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('members')
      .select('is_admin')
      .eq('id', userId)
      .single();
    
    setIsAdmin(data?.is_admin || false);
  };

  const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/verify-email`
      }
    });
  };


  const resendVerificationEmail = async (email: string) => {
    return await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/verify-email`
      }
    });
  };


  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  };

  const signInWithOAuth = async (provider: 'google' | 'azure' | 'apple') => {
    const redirectTo = `${window.location.origin}/dashboard`;
    return await supabase.auth.signInWithOAuth({ 
      provider,
      options: {
        redirectTo
      }
    });
  };


  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isAdmin, signUp, signIn, signInWithOAuth, signOut, resendVerificationEmail }}>
      {children}
    </AuthContext.Provider>
  );


};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, LogIn, Mail, Lock, AlertCircle, KeyRound } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failsafeCode, setFailsafeCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showFailsafe, setShowFailsafe] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        toast({ title: 'Logged in successfully' });
        navigate('/admin');
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFailsafe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('admin-failsafe', {
        body: { code: failsafeCode },
      });

      if (fnError || !data?.success) {
        setError(data?.error || fnError?.message || 'Invalid failsafe code');
        setIsLoading(false);
        return;
      }

      // Use the hashed token to verify OTP and establish session
      const { error: otpError } = await supabase.auth.verifyOtp({
        email: data.email,
        token_hash: data.token_hash,
        type: 'magiclink',
      });

      if (otpError) {
        setError(otpError.message);
      } else {
        toast({ title: 'Failsafe access granted', description: 'Welcome back, Guardian.' });
        navigate('/admin');
      }
    } catch (err: any) {
      setError(err?.message || 'Failsafe error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md glass-card border-primary/30">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl rainbow-text">Admin Login</CardTitle>
            <CardDescription className="text-foreground/70">
              Sign in to access the LTCreations Admin Dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showFailsafe ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/50"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-background/50"
                    required
                  />
                </div>
                <Button type="submit" className="w-full cosmic-button" disabled={isLoading}>
                  <LogIn className="w-4 h-4 mr-2" />
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                <button
                  type="button"
                  onClick={() => { setShowFailsafe(true); setError(''); }}
                  className="w-full text-xs text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  <KeyRound className="w-3 h-3 inline mr-1" />
                  Miracle Override
                </button>
              </form>
            ) : (
              <form onSubmit={handleFailsafe} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}
                <p className="text-sm text-muted-foreground text-center">
                  Enter your Miracle Override code to regain admin access.
                </p>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Failsafe code"
                    value={failsafeCode}
                    onChange={(e) => setFailsafeCode(e.target.value)}
                    className="pl-10 bg-background/50"
                    required
                  />
                </div>
                <Button type="submit" className="w-full cosmic-button" disabled={isLoading}>
                  <Shield className="w-4 h-4 mr-2" />
                  {isLoading ? 'Verifying...' : 'Activate Override'}
                </Button>
                <button
                  type="button"
                  onClick={() => { setShowFailsafe(false); setError(''); }}
                  className="w-full text-xs text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  Back to normal login
                </button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;

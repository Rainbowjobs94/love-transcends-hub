import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Coins, LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          setError(error.message);
        } else {
          toast({ title: 'Account created! Check your email to verify, then sign in.' });
          setIsSignUp(false);
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          toast({ title: 'Welcome to MiracleCoin!' });
          navigate('/mining');
        }
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred');
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
            <div className="mx-auto w-16 h-16 rounded-full bg-cosmic-gold/20 flex items-center justify-center mb-2">
              <Coins className="w-8 h-8 text-cosmic-gold" />
            </div>
            <CardTitle className="text-2xl rainbow-text">
              {isSignUp ? 'Create Account' : 'MiracleCoin Portal'}
            </CardTitle>
            <CardDescription className="text-foreground/70">
              {isSignUp
                ? 'Sign up to experience MCL mining simulation'
                : 'Sign in to mine MiracleCoin (MCL) in simulation mode'}
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full cosmic-button" disabled={isLoading}>
                <LogIn className="w-4 h-4 mr-2" />
                {isLoading
                  ? (isSignUp ? 'Creating...' : 'Signing in...')
                  : (isSignUp ? 'Sign Up' : 'Sign In')}
              </Button>
            </form>
            <p className="text-center text-sm text-foreground/70 mt-4">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
                className="text-primary hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UserLogin;

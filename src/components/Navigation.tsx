import { Link } from 'react-router-dom';
import miracleLogo from '@/assets/logos/miracle-network-logo.jpeg';
import { MediaControls } from './MediaControls';
import { Button } from '@/components/ui/button';
import { Heart, LogIn, Pickaxe, Shield, LogOut, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const Navigation = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Left: Media Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <MediaControls />
          </div>

          {/* Center: Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink min-w-0">
            <img
              src={miracleLogo}
              alt="Love Transcends Reality"
              className="w-8 h-8 rounded-full cosmic-glow transition-transform group-hover:scale-110 shrink-0"
            />
            <span className="font-bold text-sm rainbow-text hidden lg:block truncate">
              Love Transcends Reality
            </span>
          </Link>

          {/* Right: Auth-aware buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href="https://ltsocial.net"
              target="_blank"
              rel="noopener noreferrer"
              className="v3-launch-btn inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
            >
              🚀 V3
            </a>
            <Button asChild size="sm" variant="outline" className="hidden lg:inline-flex border-cosmic-teal/50 text-cosmic-teal hover:bg-cosmic-teal/10 h-8 px-2.5 text-xs">
              <a href="https://ltreality.net" target="_blank" rel="noopener noreferrer">
                <Globe className="w-3.5 h-3.5 mr-1" /> LTR
              </a>
            </Button>
            <Button asChild size="sm" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-semibold h-8 px-2.5 text-xs">
              <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
                <Heart className="w-3.5 h-3.5 mr-1" /> Donate
              </a>
            </Button>
            <Button asChild size="sm" className="bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,40%)] text-white font-semibold hidden lg:inline-flex h-8 px-2.5 text-xs">
              <a href="https://paypal.me/jstrongman47" target="_blank" rel="noopener noreferrer">
                PayPal
              </a>
            </Button>

            {user ? (
              <>
                <Button asChild size="sm" variant="outline">
                  <Link to="/mining">
                    <Pickaxe className="w-4 h-4 mr-1" /> Mining
                  </Link>
                </Button>
                {isAdmin && (
                  <Button asChild size="sm" variant="outline">
                    <Link to="/admin">
                      <Shield className="w-4 h-4 mr-1" /> Admin
                    </Link>
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={signOut}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button asChild size="sm" variant="outline">
                <Link to="/login">
                  <LogIn className="w-4 h-4 mr-1" /> Login
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

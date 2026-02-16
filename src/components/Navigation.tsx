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
        <div className="flex items-center justify-between h-16">
          {/* Left: Media Controls */}
          <div className="flex items-center gap-2">
            <MediaControls />
          </div>

          {/* Center: Logo */}
          <Link to="/" className="flex items-center gap-3 group absolute left-1/2 transform -translate-x-[55%]">
            <img
              src={miracleLogo}
              alt="Love Transcends Reality"
              className="w-10 h-10 rounded-full cosmic-glow transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg rainbow-text hidden md:block">
              Love Transcends Reality
            </span>
          </Link>

          {/* Right: Auth-aware buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://ltsocial.net"
              target="_blank"
              rel="noopener noreferrer"
              className="v3-launch-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              🚀 V3 Beta
            </a>
            <Button asChild size="sm" variant="outline" className="hidden md:inline-flex border-cosmic-teal/50 text-cosmic-teal hover:bg-cosmic-teal/10">
              <a href="https://ltreality.net" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-1" /> LTR
              </a>
            </Button>
            <Button asChild size="sm" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-semibold">
              <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
                <Heart className="w-4 h-4 mr-1" /> Donate
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

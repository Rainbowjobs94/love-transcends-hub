import { Link } from 'react-router-dom';
import miracleLogo from '@/assets/logos/miracle-network-logo.jpeg';
import { MediaControls } from './MediaControls';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Main Navigation Row - Logo + Media Controls Only */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Media Controls (Play + Back) */}
          <div className="flex items-center gap-2">
            <MediaControls />
          </div>

          {/* Center: Logo as Home Link */}
          <Link to="/" className="flex items-center gap-3 group absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={miracleLogo} 
              alt="Love Transcends Reality" 
              className="w-10 h-10 rounded-full cosmic-glow transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg rainbow-text hidden md:block">
              Love Transcends Reality
            </span>
          </Link>

          {/* Right: Empty space for balance (panels have their own triggers) */}
          <div className="w-24" />
        </div>
      </div>
    </nav>
  );
};

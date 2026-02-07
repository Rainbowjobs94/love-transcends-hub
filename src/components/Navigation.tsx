import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import miracleLogo from '@/assets/logos/miracle-network-logo.jpeg';
import { MediaControls } from './MediaControls';

const navLinks = [
  { name: 'Story', path: '/story' },
  { name: 'Shift Coin', path: '/shift-coin' },
  { name: 'Investors', path: '/investors' },
  { name: 'LTSUMN', path: '/ltsumn' },
  { name: 'LTSANP', path: '/ltsanp' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Social Universe', path: '/socialuniverse' },
  { name: 'LT Social', path: '/ltsocial' },
  { name: 'Miracle Mining', path: '/miraclemining' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Right: Mobile Menu Button for Navigation Tabs */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Tab Drawer - Opens when hamburger is clicked */}
        {isOpen && (
          <div className="py-4 border-t border-border/30 animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-center text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

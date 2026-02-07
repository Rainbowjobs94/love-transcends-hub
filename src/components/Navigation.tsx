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
  { name: 'Social Universe', path: '/social-universe' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Main Navigation Row */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Media Controls */}
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

          {/* Right: Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary Navigation Row (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-6 pb-2">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

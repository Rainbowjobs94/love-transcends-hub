import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import miracleLogo from '@/assets/logos/miracle-network-logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Story', path: '/story' },
  { name: 'Shift Coin', path: '/shift-coin' },
  { name: 'Investors', path: '/investors' },
  { name: 'LTSUMN', path: '/ltsumn' },
  { name: 'LTSANP', path: '/ltsanp' },
  { name: 'Gallery', path: '/gallery' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={miracleLogo} 
              alt="Love Transcends Reality" 
              className="w-10 h-10 rounded-full cosmic-glow transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg rainbow-text hidden sm:block">
              Love Transcends Reality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-teal group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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

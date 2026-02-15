import { Link } from 'react-router-dom';
import { Phone, Instagram, Youtube } from 'lucide-react';
import miracleFlag from '@/assets/logos/miracle-network-flag.jpeg';

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const links = {
  platforms: [
    { name: 'LTSocial', url: 'https://www.ltsocial.net' },
    { name: 'Miracle Mining', url: 'https://www.miraclemining.network' },
    { name: 'Social Universe', url: 'https://www.socialuniverse.love' },
    { name: 'Rainbow Jobs', url: 'https://www.rainbowjobs.love' },
  ],
  pages: [
    { name: 'Home', path: '/' },
    { name: 'Legacy', path: '/#legacy' },
    { name: 'Shift Coin Protocol', path: '/shift-coin' },
    { name: 'Investors', path: '/investors' },
    { name: 'LTSUMN', path: '/ltsumn' },
    { name: 'LTSANP', path: '/ltsanp' },
    { name: 'Media Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ],
  connect: [
    { name: 'Instagram', url: 'https://instagram.com/rainbowstrongman', icon: Instagram },
    { name: 'TikTok', url: 'https://tiktok.com/@rainbowjobs', icon: TikTokIcon },
    { name: 'YouTube', url: 'https://youtube.com/@rainbowstrongman', icon: Youtube },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="cosmic-divider" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={miracleFlag} 
                alt="Miracle Network" 
                className="w-16 h-16 rounded-lg cosmic-glow"
              />
              <div>
                <h3 className="font-bold text-xl rainbow-text">Love Transcends Reality</h3>
                <p className="text-sm text-muted-foreground">A Social Miracle Mining Network</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Building a family-first, creator-focused platform where love, innovation, 
              and financial freedom converge. Since 2013.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Pages</h4>
            <ul className="space-y-2">
              {links.pages.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Platforms */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Platforms</h4>
            <ul className="space-y-2">
              {links.platforms.map((link) => (
                <li key={link.url}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:369-888-1000"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  369-888-1000
                </a>
              </li>
              {links.connect.map((link) => (
                <li key={link.url}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Love Transcends Reality LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Copyrights & Trademarks since 2013 w/ Patent Development Pending
          </p>
          <Link to="/privacy" className="text-xs text-accent hover:underline mt-1 inline-block">
            Privacy & Trademarks Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

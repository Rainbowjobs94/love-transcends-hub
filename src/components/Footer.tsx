import { Link } from 'react-router-dom';
import miracleFlag from '@/assets/logos/miracle-network-flag.jpeg';

const links = {
  platforms: [
    { name: 'LTSocial', url: 'https://www.ltsocial.com' },
    { name: 'Miracle Mining', url: 'https://www.miraclemining.network' },
    { name: 'Social Universe', url: 'https://www.socialuniverse.love' },
    { name: 'Rainbow Jobs', url: 'https://www.rainbowjobs.love' },
  ],
  pages: [
    { name: 'Home', path: '/' },
    { name: 'Full Story', path: '/story' },
    { name: 'Shift Coin Protocol', path: '/shift-coin' },
    { name: 'Investors', path: '/investors' },
    { name: 'LTSANP', path: '/ltsanp' },
    { name: 'Media Gallery', path: '/gallery' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="cosmic-divider" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Love Transcends Reality LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Copyrights & Trademarks since 2013 w/ Patent Development Pending
          </p>
        </div>
      </div>
    </footer>
  );
};

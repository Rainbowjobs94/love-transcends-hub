import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const platforms = [
  {
    abbr: 'LT',
    name: 'LTSocial',
    tagline: 'IaGuardian Protected Family Network',
    description: 'A family-first social platform with AI Guardian protection, three-tier connections, and mental health focus. 75% creator revenue share.',
    internalPath: '/ltsocial',
    externalUrl: 'https://www.ltsocial.com',
    color: 'from-rainbow-violet to-rainbow-blue',
  },
  {
    abbr: 'MN',
    name: 'LTMiracleMining',
    tagline: 'Smart Contracts Protecting IP for Life',
    description: 'Revolutionary Shift Coin Protocol mining Reality Coins ($1 stable) and Miracle Coins ($1M target). Zero gas fees, instant transactions.',
    internalPath: '/miraclemining',
    externalUrl: 'https://www.miraclemining.network',
    color: 'from-rainbow-yellow to-rainbow-orange',
  },
  {
    abbr: 'SU',
    name: 'LTSocialUniverse',
    tagline: 'A Miracle in Reality',
    description: 'The complete ecosystem bringing together social networking, cryptocurrency mining, and creator empowerment in one unified experience.',
    internalPath: '/socialuniverse',
    externalUrl: 'https://www.socialuniverse.love',
    color: 'from-rainbow-green to-rainbow-blue',
  },
];

const additionalLinks = [
  { name: 'Rainbow Jobs', url: 'https://www.rainbowjobs.love' },
  { name: 'Love Transcends Reality', url: 'https://www.lovetranscendsreality.org' },
];

export const SubSitesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="rainbow-text">Network Pillars</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three interconnected platforms working together to create the future of social connection and financial freedom.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform) => (
            <div 
              key={platform.abbr}
              className="glass-card rounded-2xl p-8 group hover:cosmic-glow transition-all duration-300"
            >
              {/* Abbreviation Badge */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl font-bold text-white">{platform.abbr}</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
              <p className="text-accent font-medium mb-4">{platform.tagline}</p>
              <p className="text-muted-foreground text-sm mb-6">{platform.description}</p>

              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link to={platform.internalPath}>Learn More</Link>
                </Button>
                <Button asChild size="sm" className="cosmic-button text-white">
                  <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer">
                    Visit <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {additionalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 rounded-full text-muted-foreground hover:text-foreground hover:cosmic-glow transition-all duration-300 flex items-center gap-2"
            >
              {link.name} <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

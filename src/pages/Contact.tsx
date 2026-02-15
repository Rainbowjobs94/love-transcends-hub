import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Mail, Phone, Instagram, Youtube, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import rainbowPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';
import johnPortrait from '@/assets/about/john-strongman-portrait.png';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <section className="text-center mb-16">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="rainbow-text">Contact Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the Love Transcends Reality team. We'd love to hear from you.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* Team Bios */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Rainbow Strongman */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <img
                src={rainbowPortrait}
                alt="Rainbow Strongman"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg shadow-cosmic-purple/40 border-2 border-primary/30"
              />
              <h2 className="text-2xl font-bold text-foreground mb-1">Rainbow Strongman</h2>
              <p className="text-accent font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Visionary behind Love Transcends Reality, Rainbow Strongman is a survivor, innovator, and advocate
                for family-first technology. Their mission: build platforms where love, safety, and creator
                empowerment come first — powered by AI guardianship and blockchain transparency.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:Rainbow@rainbowjobs.love" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> Rainbow@rainbowjobs.love
                </a>
                <a href="mailto:Rainbowstrongman@ltsocial.net" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> Rainbowstrongman@ltsocial.net
                </a>
                <a href="tel:369-888-1001" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" /> 369-888-1001
                </a>
              </div>
            </div>

            {/* John Strongman */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <img
                src={johnPortrait}
                alt="John Strongman"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg shadow-cosmic-gold/40 border-2 border-cosmic-gold/30"
              />
              <h2 className="text-2xl font-bold text-foreground mb-1">John Strongman</h2>
              <p className="text-cosmic-gold font-medium mb-4">Co-Founder & Legacy Advisor</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Former World Bank leader and patriarch of the Strongman legacy, John Strongman brings
                decades of global leadership experience. His vision for ethical finance and family heritage
                forms the foundation of the LT ecosystem's mission to create lasting, generational impact.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:Johnjasper@rainbowjobs.love" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> Johnjasper@rainbowjobs.love
                </a>
                <a href="tel:369-888-1002" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" /> 369-888-1002
                </a>
              </div>
            </div>
          </section>

          {/* General Contact */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">General Inquiries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Reach Us</h3>
                <a href="tel:369-888-1000" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" /> 369-888-1000 (Main)
                </a>
                <a href="mailto:Rainbow@rainbowjobs.love" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" /> Rainbow@rainbowjobs.love
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Follow Us</h3>
                <a href="https://instagram.com/rainbowstrongman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" /> @RainbowStrongman
                </a>
                <a href="https://tiktok.com/@rainbowjobs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <TikTokIcon className="w-5 h-5" /> @RainbowJobs
                </a>
                <a href="https://youtube.com/@rainbowstrongman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Youtube className="w-5 h-5" /> Rainbow Strongman
                </a>
              </div>
            </div>
          </section>

          {/* Our Domains */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Our Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Rainbow Jobs', url: 'https://www.rainbowjobs.love' },
                { name: 'Social Universe', url: 'https://www.socialuniverse.love' },
                { name: 'LTSocial', url: 'https://www.ltsocial.net' },
                { name: 'Miracle Mining', url: 'https://www.miraclemining.network' },
                { name: 'LT Reality', url: 'https://www.lovetranscendsreality.org' },
                { name: 'LTSocial.com', url: 'https://www.ltsocial.com' },
              ].map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-background/30 border border-border/30 text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  {site.name}
                </a>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

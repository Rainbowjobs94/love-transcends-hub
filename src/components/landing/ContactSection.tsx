import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

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

export const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="rainbow-text">Contact Us</span>
          </h2>
          <div className="cosmic-divider w-48 mx-auto" />
        </div>

        {/* Main Contact Line */}
        <div className="text-center mb-8">
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 rounded-full">
            <Phone className="w-5 h-5 text-cosmic-teal" />
            <span className="text-muted-foreground">Main Line:</span>
            <a href="tel:369-888-1000" className="font-semibold text-foreground hover:text-cosmic-teal transition-colors">
              369-888-1000
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Rainbow Strongman */}
          <div className="glass-card rounded-2xl p-8 hover:cosmic-glow transition-all duration-300">
            <h3 className="text-2xl font-bold rainbow-text mb-2">Rainbow Strongman</h3>
            <p className="text-sm text-muted-foreground mb-6">
              CEO, Founder, Survivor Influencer & Historian
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cosmic-teal flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Love Transcends Reality LLC</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cosmic-teal flex-shrink-0" />
                <a href="tel:369-888-1001" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  369-888-1001
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cosmic-teal flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="mailto:Rainbow@rainbowjobs.love" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Rainbow@rainbowjobs.love
                  </a>
                  <a href="mailto:Rainbowstrongman@ltsocial.net" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Rainbowstrongman@ltsocial.net
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-3">Follow Rainbow Strongman:</p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://instagram.com/rainbowstrongman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cosmic-purple transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="hidden sm:inline">@RainbowStrongman</span>
                  </a>
                  <a 
                    href="https://tiktok.com/@rainbowjobs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <TikTokIcon className="w-5 h-5" />
                    <span className="hidden sm:inline">@RainbowJobs</span>
                  </a>
                  <a 
                    href="https://youtube.com/@rainbowstrongman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="hidden sm:inline">Rainbow Strongman</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* John Strongman */}
          <div className="glass-card rounded-2xl p-8 border border-cosmic-gold/20 hover:gold-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-cosmic-gold mb-2">John Strongman</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Co-founder, Inspiration, Role Model, Former World Leader
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
                <a href="tel:369-888-1002" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  369-888-1002
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
                <a href="mailto:Johnjasper@rainbowjobs.love" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Johnjasper@rainbowjobs.love
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                Copyrights & Trademarks since 2013 w/ Patent Development Pending
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

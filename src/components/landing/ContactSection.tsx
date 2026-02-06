import { Mail, Phone, MapPin } from 'lucide-react';

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
                  <p>219 Sheridan Ave, Longwood, FL 32750</p>
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

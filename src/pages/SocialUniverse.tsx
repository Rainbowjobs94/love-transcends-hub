import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import socialUniverseGlobe from '@/assets/hero/social-universe-globe.png';

const SocialUniverse = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <img 
              src={socialUniverseGlobe} 
              alt="LT Social Universe" 
              className="w-64 h-64 mx-auto mb-6 floating"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">LTSocialUniverse</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Miracle in Reality — The complete ecosystem bringing together social networking, 
              cryptocurrency mining, and creator empowerment.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Three Pillars, One Universe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/ltsocial" className="glass-card rounded-xl p-8 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-violet to-rainbow-blue mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">LT</span>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">Social</h3>
                <p className="text-muted-foreground text-sm">Family-first network with AI protection</p>
              </Link>

              <Link to="/miraclemining" className="glass-card rounded-xl p-8 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-yellow to-rainbow-orange mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">MN</span>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">Mining</h3>
                <p className="text-muted-foreground text-sm">Shift Coin Protocol & Reality Coins</p>
              </Link>

              <Link to="/" className="glass-card rounded-xl p-8 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-blue mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SU</span>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">Universe</h3>
                <p className="text-muted-foreground text-sm">Complete ecosystem integration</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://www.socialuniverse.love" target="_blank" rel="noopener noreferrer">
                  Visit SocialUniverse.love
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialUniverse;

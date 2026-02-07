import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import socialUniverseGlobe from '@/assets/hero/social-universe-globe.png';

const SocialUniverse = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-28 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-8">
            <img 
              src={socialUniverseGlobe} 
              alt="LT Social Universe" 
              className="w-48 h-48 mx-auto mb-6 floating"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="rainbow-text">LTSocialUniverse</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              A Miracle in Reality — The complete ecosystem bringing together social networking, 
              cryptocurrency mining, and creator empowerment.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "A safer social universe - with proof, rewards, and real-world services."
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* Demo Login CTA */}
          <section className="mb-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-4 text-foreground">Experience the Platform</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                  <a href="https://miraclemining.network/app" target="_blank" rel="noopener noreferrer">
                    Demo Login
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.socialuniverse.love" target="_blank" rel="noopener noreferrer">
                    Visit SocialUniverse.love
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
              Three Pillars, One Universe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/ltsocial" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-violet to-rainbow-blue mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">LT</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Social</h3>
                <p className="text-muted-foreground text-sm">Family-first network with AI protection</p>
              </Link>

              <Link to="/miraclemining" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-yellow to-rainbow-orange mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">MN</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Mining</h3>
                <p className="text-muted-foreground text-sm">Shift Coin Protocol & Reality Coins</p>
              </Link>

              <Link to="/" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-blue mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">SU</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Universe</h3>
                <p className="text-muted-foreground text-sm">Complete ecosystem integration</p>
              </Link>
            </div>
          </section>

          {/* 5-Feed System */}
          <section className="mb-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">5-Feed Visibility System</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { name: 'Public', desc: 'Open to all' },
                  { name: 'Fanship', desc: 'Subscribers only' },
                  { name: 'Friendly', desc: 'Mutual connections' },
                  { name: 'Inner Circle', desc: 'Trusted contacts' },
                  { name: 'Creator Rooms', desc: 'Premium access' },
                ].map((feed) => (
                  <div key={feed.name} className="text-center p-3 bg-background/30 rounded-lg">
                    <p className="font-semibold text-sm text-foreground">{feed.name}</p>
                    <p className="text-xs text-muted-foreground">{feed.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Engagement demotion: &lt;20 engagements in 3+ months = inactive status (gray picture). 
                After 1 year 3 months = auto-removed. Inner Circle exempt.
              </p>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialUniverse;

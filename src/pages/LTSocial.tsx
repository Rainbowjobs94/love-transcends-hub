import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Shield, Users, Heart, Brain, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import socialUniverseLogo from '@/assets/logos/social-universe-logo.jpeg';

const LTSocial = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <img src={socialUniverseLogo} alt="LT Social Universe" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg shadow-cosmic-purple/30" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">LTSocial</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              IaGuardian Protected Family Network — A family-first social platform 
              where creators earn 75% and safety comes standard.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <Shield className="w-12 h-12 text-rainbow-violet mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">AI Guardian Protection</h3>
                <p className="text-muted-foreground">Gemini AI-powered moderation keeps your family safe from harmful content.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Users className="w-12 h-12 text-rainbow-blue mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Three-Tier Connections</h3>
                <p className="text-muted-foreground">Unique connection model for family, friends, and community levels.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Heart className="w-12 h-12 text-rainbow-red mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Family-First Design</h3>
                <p className="text-muted-foreground">Parental controls, safe filtering, and multi-user family plans.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Brain className="w-12 h-12 text-rainbow-green mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Mental Health Focus</h3>
                <p className="text-muted-foreground">AI + human mental health services integrated directly into the platform.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Sparkles className="w-12 h-12 text-rainbow-yellow mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">75% Creator Revenue</h3>
                <p className="text-muted-foreground">Industry-leading creator share with direct USD payouts.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Lock className="w-12 h-12 text-rainbow-orange mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">No Wallet Required</h3>
                <p className="text-muted-foreground">Direct USD payouts without crypto complexity for non-crypto users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://www.ltsocial.net" target="_blank" rel="noopener noreferrer">
                  Visit LTSocial.net
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

export default LTSocial;

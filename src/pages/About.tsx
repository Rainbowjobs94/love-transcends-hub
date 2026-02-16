import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Link } from 'react-router-dom';
import { Heart, Dna, Crown, Globe, Shield, Landmark, Users, Sparkles, Target, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import rainbowPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';
import johnPortrait from '@/assets/about/john-strongman-portrait.png';
import fatherSon from '@/assets/about/father-son-strongman.jpeg';
import missionImg from '@/assets/about/mission-statement.jpeg';
import queenMemorial from '@/assets/about/queen-memorial-photo.jpeg';
import dnaHeritage from '@/assets/about/dna-heritage.jpeg';

const About = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-16">
            <Heart className="w-14 h-14 text-rainbow-red mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="rainbow-text">About Love Transcends Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A family-first technology empire built on love, resilience, and the unbreakable
              Strongman legacy — bridging cryptocurrency, creator empowerment, and AI safety
              for humanity's future.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-8" />
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <Target className="w-8 h-8 text-accent mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create the world's safest, most empowering digital ecosystem — where families
                are protected by AI guardianship, creators earn 75% of revenue, and blockchain
                transparency ensures every transaction is fair, immutable, and secure.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-primary/20 overflow-hidden relative">
              <img
                src={missionImg}
                alt="Mission Statement"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
              />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 text-cosmic-gold mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A $3 billion "North Star" valuation built on a 75/25 revenue split favoring
                  creators, with a mandatory 7-year founder control clause ensuring the mission
                  never wavers. We're building technology that transcends reality itself.
                </p>
              </div>
            </div>
          </section>

          {/* The Strongman Legacy */}
          <section className="glass-card rounded-2xl p-8 mb-12 border border-cosmic-gold/20">
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-8 h-8 text-cosmic-gold" />
              <h2 className="text-3xl font-bold text-foreground">The Strongman Legacy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Rainbow */}
              <div className="text-center">
                <img
                  src={rainbowPortrait}
                  alt="Rainbow Strongman"
                  className="w-40 h-40 rounded-2xl mx-auto mb-4 object-cover cosmic-glow"
                />
                <h3 className="text-xl font-bold text-foreground">Rainbow Strongman</h3>
                <p className="text-accent text-sm mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Survivor, visionary, and advocate for family-first technology. Born
                  JohnJasper RiverAlexander Strongman (JJarvex) — each name carries divine
                  meaning: John (faithful apostle), Jasper (foundation stone of heaven),
                  River (the River of Life), Alexander (darkness forgiven).
                </p>
                <Link to="/rainbow-strongman">
                  <Button variant="outline" size="sm" className="mt-4">View Full Bio →</Button>
                </Link>
              </div>

              {/* John */}
              <div className="text-center">
                <img
                  src={johnPortrait}
                  alt="John Strongman"
                  className="w-40 h-40 rounded-2xl mx-auto mb-4 object-cover gold-glow"
                />
                <h3 className="text-xl font-bold text-foreground">John Strongman</h3>
                <p className="text-cosmic-gold text-sm mb-3">Co-Founder & Legacy Advisor</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  46-year World Bank leader and humanitarian. His career spanned continents,
                  creating frameworks for sustainable economic growth. His values of service,
                  sacrifice, and love became the foundation of the LT vision.
                </p>
                <Link to="/john-strongman">
                  <Button variant="outline" size="sm" className="mt-4">View Full Bio →</Button>
                </Link>
              </div>
            </div>

            {/* Father & Son */}
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <img
                src={fatherSon}
                alt="John and Rainbow Strongman — Father and Son"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6 bg-background/30">
                <p className="text-center text-muted-foreground italic">
                  "The family acronym <strong className="text-foreground">Jesus Strongman</strong> represents
                  a 'born again' mission to save the world — carrying forward the legacy of service,
                  sacrifice, and unconditional love."
                </p>
              </div>
            </div>
          </section>

          {/* Royal Heritage & DNA */}
          <section className="glass-card rounded-2xl p-8 mb-12 border border-rainbow-violet/20">
            <div className="flex items-center gap-3 mb-6">
              <Dna className="w-8 h-8 text-rainbow-violet" />
              <h2 className="text-3xl font-bold text-foreground">Royal Heritage & DNA Legacy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Verified through 23andMe genetic documentation, the Strongman lineage carries the
                  <strong className="text-foreground"> E-P252 Y-haplogroup</strong> (West African roots)
                  and <strong className="text-foreground">H mtDNA</strong> (Neolithic European origins),
                  connecting US, German, and Celtic ancestry.
                </p>
                <p>The documented heritage traces direct lineage to:</p>
                <ul className="space-y-3 ml-1">
                  <li className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-cosmic-gold mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">King Richard III</strong> — English monarch and last Plantagenet king</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-rainbow-orange mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Pharaoh Ramesses III</strong> — Prince of Egypt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-rainbow-blue mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">The Spencer Dynasty</strong> — Noble British lineage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-rainbow-violet mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">The Current Royal Family</strong> — Living connection to the throne</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src={dnaHeritage}
                  alt="DNA Heritage Documentation"
                  className="w-full md:w-56 rounded-xl object-cover cosmic-glow"
                />
                <img
                  src={queenMemorial}
                  alt="Queen Memorial Photo"
                  className="w-full md:w-56 rounded-xl object-cover cosmic-glow"
                />
              </div>
            </div>
          </section>

          {/* The Ecosystem */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              The <span className="rainbow-text">LT Ecosystem</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Globe, title: 'LTSocial & Social Universe', desc: 'IaGuardian-protected family social network with creator monetization', color: 'text-rainbow-blue', link: '/socialuniverse' },
                { icon: Shield, title: 'IaGuardian AI', desc: 'AI-powered content moderation and family safety technology', color: 'text-rainbow-green', link: '/genetic-ai' },
                { icon: Landmark, title: 'Miracle Mining Network', desc: 'MiracleCoin dual mining with 50/50 payout and 3-year reserves', color: 'text-cosmic-gold', link: '/miraclemining' },
                { icon: Sparkles, title: 'Shift Coin Protocol', desc: 'Zero-gas multi-chain cryptocurrency with auto-network selection', color: 'text-cosmic-purple', link: '/shift-coin' },
                { icon: Heart, title: 'LTSANP Nonprofit', desc: 'Sponsorship & advertisement fund redistributing up to $1M in citizen aid', color: 'text-rainbow-red', link: '/ltsanp' },
                { icon: BookOpen, title: 'Rainbow Jobs', desc: 'Employment platform and the Crypto-to-Amazon Gateway mission', color: 'text-rainbow-orange', link: '/ltopportunity' },
              ].map((item) => (
                <Link key={item.title} to={item.link}>
                  <Card className="glass-card border-border/30 hover:border-primary/40 transition-all h-full hover:scale-[1.02]">
                    <CardContent className="p-5">
                      <item.icon className={`w-7 h-7 ${item.color} mb-3`} />
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="glass-card rounded-2xl p-8 text-center border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-3">Join the Mission</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you're a creator, investor, miner, or someone who believes technology
              should serve families first — there's a place for you in the LT ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/investors">
                <Button className="cosmic-button text-white">Investor Info</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Create Account</Button>
              </Link>
            </div>
          </section>

          {/* Back */}
          <div className="text-center mt-8">
            <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

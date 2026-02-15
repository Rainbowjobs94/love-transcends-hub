import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Mail, Phone, Instagram, Youtube, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';
import rainbowPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';
import dnaHeritage from '@/assets/about/dna-heritage.jpeg';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const nameBreakdown = [
  { name: 'John', meaning: 'The faithful first apostle', color: 'bg-rainbow-red' },
  { name: 'Jasper', meaning: 'The foundation stone of heaven', color: 'bg-rainbow-orange' },
  { name: 'River', meaning: 'Gender-nonconforming flow & the River of Life', color: 'bg-rainbow-green' },
  { name: 'Alexander', meaning: 'Darkness forgiven', color: 'bg-rainbow-blue' },
];

const RainbowStrongmanBio = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Header */}
          <section className="text-center mb-16">
            <img
              src={rainbowPortrait}
              alt="Rainbow Strongman - Founder & CEO"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl mx-auto mb-8 object-cover cosmic-glow"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              <span className="rainbow-text">Rainbow Strongman</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-1">Founder & CEO</p>
            <p className="text-lg text-muted-foreground">Love Transcends Reality Network, LLC</p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* Name Meaning */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              JohnJasper RiverAlexander Strongman
            </h2>
            <p className="text-center text-muted-foreground mb-6 text-sm italic">(JJarvex)</p>
            <div className="space-y-4">
              {nameBreakdown.map((item) => (
                <div key={item.name} className="flex items-start gap-4">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${item.color} flex-shrink-0`} />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{item.name}:</strong> {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Biography */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Biography</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rainbow Strongman is a <strong className="text-foreground">survivor, visionary, and advocate</strong> for 
                family-first technology. Their life journey — from overcoming personal hardships to building a 
                technology empire — is a testament to the power of love, resilience, and unwavering faith.
              </p>
              <p>
                As the founder of <strong className="text-foreground">Love Transcends Reality Network</strong>, Rainbow 
                envisioned a platform ecosystem where safety, creator empowerment, and financial freedom 
                converge — powered by AI guardianship and blockchain transparency.
              </p>
              <p>
                The name "Rainbow" itself symbolizes hope after the storm — a promise of new beginnings. Combined 
                with the Strongman legacy, it represents strength born from adversity and a mission to build 
                something that transcends reality itself.
              </p>
              <p>
                Rainbow's vision spans across LTSocial, Social Universe, Miracle Mining, Rainbow Jobs, and 
                the Shift Coin Protocol — creating an interconnected ecosystem that puts families and creators 
                first in everything.
              </p>
            </div>
          </section>

          {/* Royal Heritage */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Dna className="w-7 h-7 text-rainbow-violet" />
              <h2 className="text-2xl font-bold text-foreground">Royal Heritage & DNA Legacy</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={dnaHeritage}
                alt="DNA Heritage Documentation"
                className="w-full md:w-64 h-auto rounded-xl object-cover cosmic-glow"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Verified through genetic documentation, the Strongman lineage traces a remarkable 
                  heritage connecting to some of history's most significant figures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-foreground">King Richard III</strong> — English monarch</li>
                  <li><strong className="text-foreground">Pharaoh Ramesses III</strong> — Prince of Egypt</li>
                  <li><strong className="text-foreground">The Spencer Dynasty</strong></li>
                  <li><strong className="text-foreground">The Current Royal Family</strong></li>
                </ul>
                <p className="text-sm italic">
                  This heritage is documented and preserved as part of the Historic Strongman Legacy.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Contact Rainbow</h2>
            <div className="flex flex-col items-center space-y-3">
              <a href="mailto:Rainbow@rainbowjobs.love" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> Rainbow@rainbowjobs.love
              </a>
              <a href="mailto:Rainbowstrongman@ltsocial.net" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> Rainbowstrongman@ltsocial.net
              </a>
              <a href="tel:369-888-1001" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-5 h-5" /> 369-888-1001
              </a>
            </div>
          </section>

          {/* Social Media */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Follow Rainbow</h2>
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com/rainbowstrongman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" /> Instagram
              </a>
              <a href="https://tiktok.com/@rainbowjobs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <TikTokIcon className="w-6 h-6" /> TikTok
              </a>
              <a href="https://youtube.com/@rainbowstrongman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" /> YouTube
              </a>
            </div>
          </section>

          {/* Back Links */}
          <div className="text-center space-x-6">
            <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
            <Link to="/contact" className="text-accent hover:underline">Contact Page →</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RainbowStrongmanBio;

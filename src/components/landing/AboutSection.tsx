import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Scroll, Heart, BookOpen, Sparkles } from 'lucide-react';
import queenMemorialPhoto from '@/assets/about/queen-memorial-photo.jpeg';
import dnaHeritage from '@/assets/about/dna-heritage.jpeg';
import rainbowStrongmanPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';

export const AboutSection = () => {
  const coreValues = [
    'Compassion', 'Equity', 'Community', 'Justice', 'Love', 
    'Honesty', 'Transparency', 'Empathy', 'Remorse', 
    'Inclusivity', 'Uniqueness', 'Honor'
  ];

  return (
    <section id="legacy" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="premium-badge mb-4 inline-block">Legacy of Historic Strongmans</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="rainbow-text">The Strongman Dynasty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From adversity to advocacy — a story of resilience and transformative love.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Photo Grid */}
          <div className="space-y-6">
            {/* Rainbow Strongman Portrait */}
            <div className="relative group">
              <img 
                src={rainbowStrongmanPortrait} 
                alt="Rainbow Strongman - Founder" 
                className="rounded-2xl w-full max-w-md mx-auto cosmic-glow transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm font-semibold text-foreground">Rainbow Strongman</p>
                <p className="text-xs text-muted-foreground">Founder & CEO — Love Transcends Reality</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <img 
                  src={queenMemorialPhoto} 
                  alt="Rainbow Strongman at Queen Elizabeth Memorial" 
                  className="rounded-xl w-full h-40 object-cover cosmic-glow transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 glass-card rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Queen Elizabeth II Memorial</p>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src={dnaHeritage} 
                  alt="23andMe DNA Heritage Results" 
                  className="rounded-xl w-full h-40 object-cover cosmic-glow transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 glass-card rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Royal DNA Heritage</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-cosmic-teal" />
                <h3 className="text-lg font-bold text-foreground">Core Values</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {coreValues.map((value) => (
                  <span 
                    key={value}
                    className="text-sm font-medium px-4 py-1.5 rounded-full bg-cosmic-purple/15 text-foreground border border-cosmic-purple/40 hover:bg-cosmic-purple/25 hover:border-cosmic-purple/60 transition-colors"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Biography */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-cosmic-gold" />
                <h3 className="text-xl font-bold text-foreground">About Rainbow Strongman</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Survivor. Advocate. Visionary.</strong> A survivor of trafficking 
                  and institutional abuse, now a leading advocate for systemic change.
                </p>
                <p>
                  Founded <strong className="text-cosmic-gold">Love Transcends</strong> in 2013 with a mission to transform 
                  corporate advertising extraction into a force for universal basic income and systemic care.
                </p>
                <p>
                  <strong className="text-foreground">Education:</strong> Attended San Bernardino College and Crafton Hills 
                  College for Psychology, Arts, Theatre, and Business.
                </p>
                <p>
                  <strong className="text-foreground">Advocacy:</strong> HIV/AIDS awareness, mental health reform advocate, 
                  and Smart Recovery Lifestyle practitioner since 2013.
                </p>
              </div>
              <div className="mt-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30">
                <p className="text-sm italic text-foreground text-center">
                  "Love Transcends Adversity"
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-cosmic-gold" />
                <h3 className="text-xl font-bold text-foreground">Royal Lineage</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                DNA-verified descendant of King Richard III, Pharaoh Ramesses III, and Princess Diana's 
                Spencer bloodline. A heritage that spans from ancient Egypt to modern-day social innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-cosmic-gold/20 text-cosmic-gold">King Richard III</span>
                <span className="text-xs px-2 py-1 rounded-full bg-cosmic-purple/20 text-cosmic-purple">Ramesses III</span>
                <span className="text-xs px-2 py-1 rounded-full bg-cosmic-teal/20 text-cosmic-teal">Spencer Dynasty</span>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-8 h-8 text-cosmic-purple" />
                <h3 className="text-xl font-bold text-foreground">The Name's Meaning</h3>
              </div>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Rainbow</strong> — Born during a storm, a rainbow appeared at the exact moment of birth.
                <br /><br />
                <strong className="text-foreground">Strong</strong> — Descended from generations of physical and spiritual strength.
                <br /><br />
                <strong className="text-foreground">Man</strong> — The duty to stand for humanity, equality, and love.
              </p>
            </div>

            {/* Manifesto Preview */}
            <div className="glass-card rounded-xl p-6 border border-cosmic-gold/30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-cosmic-gold" />
                <h3 className="text-xl font-bold text-cosmic-gold">From the Autobiography</h3>
              </div>
              <blockquote className="text-muted-foreground italic border-l-4 border-cosmic-gold pl-4 mb-4">
                "Love Transcends is a survivor-founded social enterprise transforming corporate 
                advertising extraction into a force for universal basic income and systemic care. 
                We are recapturing 75% of global advertising revenue and redistributing it directly 
                to the citizens who create the value. Every view, text, and interaction is a mining event."
              </blockquote>
              <Button asChild className="w-full bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" /> Purchase Full Autobiography
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link to="/story">
                  <Heart className="w-4 h-4 mr-2" /> Read Full Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import queenMemorialPhoto from '@/assets/about/queen-memorial-photo.jpeg';
import dnaHeritage from '@/assets/about/dna-heritage.jpeg';
import whitehouseLetter from '@/assets/about/whitehouse-letter-collage.jpeg';

const Story = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">The Full Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The autobiography of JohnJasper RiverAlexander Strongman — 
              Survivor, Founder, CEO, Historian, and Philanthropist.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Dedication */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Dedication</h2>
              <p className="text-muted-foreground italic text-lg">
                "To my father, John Strongman — whose 46 years at the World Bank 
                taught me that true success is measured not in wealth, 
                but in the lives we touch and the legacy we leave behind."
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img 
                  src={queenMemorialPhoto} 
                  alt="Rainbow Strongman at Queen Elizabeth II Memorial" 
                  className="w-full rounded-2xl cosmic-glow"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Rainbow Strongman at Queen Elizabeth II Memorial
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold rainbow-text">
                  JohnJasper RiverAlexander Strongman
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    A name carries power. Each part of my name was chosen with purpose, 
                    reflecting the mission I was born to fulfill.
                  </p>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-4">The Meaning Behind the Name:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-rainbow-violet flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-rainbow-violet">John:</span>
                          <span className="text-muted-foreground"> "God is gracious" — A foundation of divine favor and blessing that guides every endeavor.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-rainbow-blue flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-rainbow-blue">Jasper:</span>
                          <span className="text-muted-foreground"> "Treasurer" — Guardian and protector of precious things, whether treasure, truth, or human dignity.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-rainbow-green flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-rainbow-green">River:</span>
                          <span className="text-muted-foreground"> "Flowing water" — Life, renewal, and constant motion toward something greater.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-rainbow-yellow flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-rainbow-yellow">Alexander:</span>
                          <span className="text-muted-foreground"> "Defender of the people" — Protection, leadership, and the courage to stand for those who cannot stand alone.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">
                Royal Heritage
              </h2>
              
              <div className="glass-card rounded-2xl p-8 border border-cosmic-gold/20">
                <img 
                  src={dnaHeritage} 
                  alt="23andMe DNA Heritage Results" 
                  className="w-full rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="font-bold text-foreground text-xl mb-3">Verified Lineage</h3>
                  <p className="text-muted-foreground">
                    23andMe DNA analysis confirms direct descent from <strong className="text-cosmic-gold">King Richard III</strong> of England 
                    and <strong className="text-cosmic-gold">Pharaoh Ramesses III</strong> of Egypt — 
                    connecting modern innovation with ancient royal legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* John Strongman Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">
                The Inspiration: John Strongman
              </h2>
              
              <img 
                src={whitehouseLetter} 
                alt="White House Letter Recognition" 
                className="w-full rounded-2xl gold-glow mb-8"
              />

              <div className="glass-card rounded-2xl p-8 border border-cosmic-gold/20">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">
                    My father, <strong className="text-cosmic-gold">John Strongman</strong>, dedicated 46 years of his life 
                    to the World Bank, working tirelessly to improve the lives of people across the globe.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-cosmic-gold/5">
                      <h4 className="font-bold text-foreground mb-2">46-Year World Bank Legacy</h4>
                      <p className="text-sm">A career dedicated to global financial development and economic empowerment.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cosmic-gold/5">
                      <h4 className="font-bold text-foreground mb-2">Saved African Lives</h4>
                      <p className="text-sm">Programs that directly impacted millions of women and children across Africa.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cosmic-gold/5">
                      <h4 className="font-bold text-foreground mb-2">White House Recognition</h4>
                      <p className="text-sm">Acknowledged by the U.S. government for his humanitarian contributions.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cosmic-gold/5">
                      <h4 className="font-bold text-foreground mb-2">Co-founder of LTR</h4>
                      <p className="text-sm">Now bringing his wisdom and experience to Love Transcends Reality.</p>
                    </div>
                  </div>

                  <div className="p-6 bg-cosmic-gold/10 rounded-xl border border-cosmic-gold/20 text-center">
                    <p className="italic text-foreground">
                      "After giving everything to help others around the world, he now faces 
                      his own financial hardships — yet continues to inspire and support 
                      the mission of Love Transcends Reality."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold rainbow-text mb-6">The Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Love Transcends Reality was born from a simple yet profound belief: 
                that technology should serve humanity, not exploit it. That creators 
                deserve fair compensation. That families deserve safe spaces. 
                That love, indeed, transcends reality.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">Family First</span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">Creator Economy</span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">Financial Freedom</span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">Mental Health</span>
                <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">AI Protection</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Story;

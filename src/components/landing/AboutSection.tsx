import queenMemorialPhoto from '@/assets/about/queen-memorial-photo.jpeg';
import dnaHeritage from '@/assets/about/dna-heritage.jpeg';

export const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet <span className="rainbow-text">Rainbow Strongman</span>
          </h2>
          <div className="cosmic-divider w-48 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={queenMemorialPhoto} 
                alt="Rainbow Strongman at Queen Elizabeth II Memorial" 
                className="w-full max-w-md mx-auto rounded-2xl cosmic-glow"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Rainbow Strongman at Queen Elizabeth II Memorial
              </p>
            </div>
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-teal/20 rounded-2xl blur-3xl -z-10" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              JohnJasper RiverAlexander Strongman
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">CEO, Founder, Survivor Influencer & Historian</strong> 
                — A visionary building the future of social connection, cryptocurrency, and family-first platforms.
              </p>
              
              <div className="glass-card rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-3">The Meaning Behind the Name:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-rainbow-violet">John:</strong> "God is gracious" — Divine favor and blessing</li>
                  <li><strong className="text-rainbow-blue">Jasper:</strong> "Treasurer" — Guardian of precious things</li>
                  <li><strong className="text-rainbow-green">River:</strong> "Flowing water" — Life, renewal, constant motion</li>
                  <li><strong className="text-rainbow-yellow">Alexander:</strong> "Defender of the people" — Protection and leadership</li>
                </ul>
              </div>

              <p>
                A survivor who transformed personal struggles into a mission to create platforms 
                that protect families, empower creators, and redistribute wealth fairly.
              </p>
            </div>

            {/* DNA Heritage Panel */}
            <div className="glass-card rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-3 text-lg">Royal Lineage</h4>
              <img 
                src={dnaHeritage} 
                alt="23andMe DNA Heritage Results" 
                className="w-full rounded-lg mb-3"
              />
              <p className="text-xs text-muted-foreground">
                Verified descendant of King Richard III and Pharaoh Ramesses III through 23andMe DNA analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import whitehouseLetter from '@/assets/about/whitehouse-letter-collage.jpeg';
import { useState } from 'react';

export const JohnStrongmanTribute = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-cosmic-gold">John Strongman</span>
          </h2>
          <p className="text-xl text-muted-foreground">Co-founder, Inspiration, Role Model, Former World Leader</p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* White House Letter */}
          <div className="relative mb-8">
            <img 
              src={whitehouseLetter} 
              alt="White House Letter and Miracle Network Recognition" 
              className={`w-full rounded-2xl gold-glow cursor-pointer transition-transform duration-300 ${isExpanded ? 'scale-100' : 'hover:scale-105'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Click to {isExpanded ? 'minimize' : 'expand'} • White House Recognition
            </p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 border border-cosmic-gold/20">
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cosmic-gold flex-shrink-0" />
                <p>
                  <strong className="text-foreground">46-Year World Bank Legacy:</strong> A career dedicated to 
                  global financial development and economic empowerment across nations.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cosmic-gold flex-shrink-0" />
                <p>
                  <strong className="text-foreground">Saved African Women & Children:</strong> His work directly 
                  impacted the lives of millions, creating sustainable programs for education, 
                  healthcare, and economic opportunity.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cosmic-gold flex-shrink-0" />
                <p>
                  <strong className="text-foreground">The Inspiration Behind Love Transcends:</strong> His values 
                  of service, sacrifice, and love for humanity became the foundation upon which 
                  this entire vision was built.
                </p>
              </div>

              <div className="mt-8 p-6 bg-cosmic-gold/5 rounded-xl border border-cosmic-gold/20">
                <p className="italic text-foreground text-center">
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
  );
};

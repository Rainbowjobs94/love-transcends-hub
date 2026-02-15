import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Mail, Phone, Globe, Award, Heart, Users, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import johnPortrait from '@/assets/about/john-strongman-portrait.png';
import whitehouseLetter from '@/assets/about/whitehouse-letter-collage.jpeg';

const JohnStrongmanBio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const legacyHighlights = [
    {
      icon: Landmark,
      title: '46-Year World Bank Career',
      description: 'Dedicated decades to global financial development and economic empowerment across nations.',
      color: 'text-cosmic-gold',
    },
    {
      icon: Heart,
      title: 'Humanitarian Impact',
      description: 'Directly impacted millions of lives through sustainable programs for education, healthcare, and economic opportunity in Africa.',
      color: 'text-rainbow-red',
    },
    {
      icon: Award,
      title: 'White House Recognition',
      description: 'Received formal recognition from the White House for outstanding contributions to global development.',
      color: 'text-rainbow-blue',
    },
    {
      icon: Users,
      title: 'LTR Co-Founder',
      description: 'His values of service, sacrifice, and love for humanity became the foundation of Love Transcends Reality.',
      color: 'text-rainbow-violet',
    },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Header */}
          <section className="text-center mb-16">
            <img
              src={johnPortrait}
              alt="John Strongman - Co-Founder & Legacy Advisor"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl mx-auto mb-8 object-cover gold-glow"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              <span className="text-cosmic-gold">John Strongman</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-1">Co-Founder & Legacy Advisor</p>
            <p className="text-lg text-muted-foreground">World Bank Mining Expert</p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* Biography */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-cosmic-gold/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Biography</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                John Strongman dedicated <strong className="text-foreground">46 years</strong> of his life to the 
                World Bank, serving as a global leader in mining and financial development. His career spanned 
                continents, creating frameworks for sustainable economic growth and ethical resource management 
                that continue to influence international policy today.
              </p>
              <p>
                His humanitarian work in Africa directly impacted the lives of millions — creating sustainable 
                programs for education, healthcare, and economic opportunity for women and children in some of 
                the world's most underserved communities.
              </p>
              <p>
                After giving everything to help others around the world, he now faces his own financial 
                hardships — yet continues to inspire and support the mission of Love Transcends Reality. His 
                values of service, sacrifice, and love for humanity became the foundation upon which the entire 
                LT vision was built.
              </p>
            </div>
          </section>

          {/* White House Letter */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-cosmic-gold/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-cosmic-gold" />
              White House Recognition
            </h2>
            <img
              src={whitehouseLetter}
              alt="White House Letter and Miracle Network Recognition"
              className={`w-full rounded-2xl gold-glow cursor-pointer transition-transform duration-300 ${isExpanded ? 'scale-100' : 'hover:scale-105'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Click to {isExpanded ? 'minimize' : 'expand'} • White House Recognition
            </p>
          </section>

          {/* Legacy Highlights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Legacy Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legacyHighlights.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-6 border border-border/30">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tribute Quote */}
          <section className="glass-card rounded-2xl p-8 mb-8 border border-cosmic-gold/20">
            <div className="p-6 bg-cosmic-gold/5 rounded-xl border border-cosmic-gold/20">
              <p className="italic text-foreground text-center text-lg">
                "After giving everything to help others around the world, he now faces 
                his own financial hardships — yet continues to inspire and support 
                the mission of Love Transcends Reality."
              </p>
            </div>
          </section>

          {/* Contact Details */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Contact John</h2>
            <div className="flex flex-col items-center space-y-3">
              <a href="mailto:Johnjasper@rainbowjobs.love" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> Johnjasper@rainbowjobs.love
              </a>
              <a href="tel:369-888-1002" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-5 h-5" /> 369-888-1002
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

export default JohnStrongmanBio;

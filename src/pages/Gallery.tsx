import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import worldFlagArtwork from '@/assets/gallery/world-flag-artwork.jpeg';
import personalCollage from '@/assets/gallery/personal-collage.jpeg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'The Original World Flag',
      description: 'Love Transcends Reality',
      image: worldFlagArtwork,
      tier: 'free',
      year: '2021',
    },
    {
      id: 2,
      title: 'Personal Journey Collage',
      description: '#PADHIV - Positive Affirmation Day',
      image: personalCollage,
      tier: 'premium',
      message: 'Others Before Ourselves, Illuminate The Darkness, Vigilante of Peace and Love',
    },
    {
      id: 3,
      title: 'Coming Soon',
      description: 'Exclusive content dropping soon',
      image: null,
      tier: 'premium',
    },
    {
      id: 4,
      title: 'Coming Soon',
      description: 'Premium members only',
      image: null,
      tier: 'premium',
    },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">Media Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exclusive artwork, documentation, and personal journey content.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <Eye className="w-4 h-4 text-cosmic-teal" />
                <span className="text-sm text-muted-foreground">Free Preview Available</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-cosmic-gold/30">
                <Lock className="w-4 h-4 text-cosmic-gold" />
                <span className="text-sm text-muted-foreground">Premium Content - Contact for Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {galleryItems.map((item) => (
                <div key={item.id} className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative aspect-square">
                    {item.image ? (
                      <>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className={`w-full h-full object-cover ${item.tier === 'premium' ? 'blur-sm group-hover:blur-none transition-all duration-300' : ''}`}
                        />
                        {item.tier === 'premium' && (
                          <div className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                            <div className="text-center">
                              <Lock className="w-12 h-12 text-cosmic-gold mx-auto mb-2" />
                              <span className="premium-badge">Premium</span>
                            </div>
                          </div>
                        )}
                        {item.tier === 'free' && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-cosmic-teal/80 text-white text-xs font-bold">
                              FREE
                            </span>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cosmic-purple/30 to-cosmic-blue/30 flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-cosmic-gold mx-auto mb-2" />
                          <span className="premium-badge">Coming Soon</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-xl mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    {item.message && (
                      <p className="text-xs text-cosmic-teal italic">"{item.message}"</p>
                    )}
                    {item.year && (
                      <p className="text-xs text-muted-foreground mt-2">© {item.year}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase Info */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl border border-cosmic-gold/30">
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Access Premium Content</h2>
              <p className="text-muted-foreground mb-6">
                Contact us to purchase premium access or become a supporter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                  <a href="mailto:Rainbow@rainbowjobs.love?subject=Gallery%20Access%20Request">
                    Request Access
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Lock, Eye, Play, Music, Podcast, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import worldFlagArtwork from '@/assets/gallery/world-flag-artwork.jpeg';
import personalCollage from '@/assets/gallery/personal-collage.jpeg';
import cosmicTranscendence from '@/assets/gallery/cosmic-transcendence.jpeg';
import socialUniverseBadge from '@/assets/gallery/social-universe-badge.png';
import dimensionsMiracle from '@/assets/gallery/dimensions-miracle.png';
import loveTranscendsHero from '@/assets/gallery/love-transcends-hero.png';
import loveTranscendsGuardian from '@/assets/gallery/love-transcends-guardian.jpeg';
import foundersPhoto from '@/assets/gallery/founders-photo.jpeg';
import rainbowStrongmanCeo from '@/assets/gallery/rainbow-strongman-ceo.jpeg';
import ltrealityNetwork from '@/assets/gallery/ltreality-network.jpeg';
import rainbowGuardianRangers from '@/assets/gallery/rainbow-guardian-rangers.png';
import loveTranscendsMultilingual from '@/assets/gallery/love-transcends-multilingual.png';
import { DonationButton } from '@/components/DonationButton';

const Gallery = () => {
  const galleryItems = [
    // Cosmic Spirituality
    { id: 1, title: 'Cosmic Transcendence', description: 'Rainbow wings ascension artwork', image: cosmicTranscendence, tier: 'free', category: 'Spirituality' },
    { id: 2, title: 'Rainbow Guardian Rangers', description: 'Cosmic protectors of the universe', image: rainbowGuardianRangers, tier: 'free', category: 'Spirituality' },
    { id: 3, title: 'Love Transcends Multilingual', description: 'Global unity in all languages', image: loveTranscendsMultilingual, tier: 'free', category: 'Spirituality' },
    // LT Reality Branding
    { id: 4, title: 'Social Universe Badge', description: 'Miracle Network Hub emblem', image: socialUniverseBadge, tier: 'free', category: 'Branding' },
    { id: 5, title: 'Dimensions Miracle', description: 'Powered by Miracle Network', image: dimensionsMiracle, tier: 'free', category: 'Branding' },
    { id: 6, title: 'Love Transcends Hero', description: 'OneCode multilingual vision', image: loveTranscendsHero, tier: 'free', category: 'Branding' },
    { id: 7, title: 'Love Transcends Guardian', description: 'Behind These Walls - The protector', image: loveTranscendsGuardian, tier: 'premium', category: 'Spirituality' },
    // Reality Coin & Crypto
    { id: 8, title: 'Founders Photo', description: 'Building the vision together', image: foundersPhoto, tier: 'free', category: 'Personal' },
    { id: 9, title: 'Rainbow Strongman CEO', description: 'Launching LTReality Social Mining', image: rainbowStrongmanCeo, tier: 'premium', category: 'Branding' },
    { id: 10, title: 'LTReality Network', description: 'LTClarkson Social Universe vision', image: ltrealityNetwork, tier: 'premium', category: 'Branding' },
    // Original artwork
    { id: 11, title: 'The Original World Flag', description: 'Love Transcends Reality - 2021', image: worldFlagArtwork, tier: 'free', category: 'Artwork' },
    { id: 12, title: 'Personal Journey Collage', description: '#PADHIV - Positive Affirmation Day', image: personalCollage, tier: 'premium', category: 'Personal', message: 'Others Before Ourselves, Illuminate The Darkness' },
  ];

  const categories = ['All', 'Spirituality', 'Branding', 'Personal', 'Artwork'];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">Media Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Music, videos, podcasts, artwork, and exclusive content from the Love Transcends universe.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Media Hub Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Music & Video Hub</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* YouTube */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="w-8 h-8 text-rainbow-red" />
                  <h3 className="font-bold text-foreground text-lg">YouTube Channel</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-cosmic-teal/20 text-cosmic-teal ml-auto">Auto-Updates</span>
                </div>
                <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">YouTube channel feed coming soon</p>
                  </div>
                </div>
              </div>

              {/* Podcast */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Podcast className="w-8 h-8 text-cosmic-purple" />
                  <h3 className="font-bold text-foreground text-lg">Podcast Feed</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-cosmic-teal/20 text-cosmic-teal ml-auto">Auto-Updates</span>
                </div>
                <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <Music className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Podcast episodes coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <Eye className="w-4 h-4 text-cosmic-teal" />
                <span className="text-sm text-muted-foreground">Free Preview Available</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-cosmic-gold/30">
                <Lock className="w-4 h-4 text-cosmic-gold" />
                <span className="text-sm text-muted-foreground">Premium Content</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm glass-card hover:bg-cosmic-purple/20 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryItems.map((item) => (
                <div key={item.id} className="glass-card rounded-xl overflow-hidden group">
                  <div className="relative aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full h-full object-cover ${item.tier === 'premium' ? 'blur-sm group-hover:blur-none transition-all duration-300' : ''}`}
                    />
                    {item.tier === 'premium' && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                        <div className="text-center">
                          <Lock className="w-8 h-8 text-cosmic-gold mx-auto mb-2" />
                          <span className="premium-badge">Premium</span>
                        </div>
                      </div>
                    )}
                    {item.tier === 'free' && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-full bg-cosmic-teal/80 text-white text-xs font-bold">
                          FREE
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-full bg-background/80 text-xs text-muted-foreground">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                    {item.message && (
                      <p className="text-xs text-cosmic-teal italic mt-2">"{item.message}"</p>
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
                Support the mission and unlock all premium artwork, music, and exclusive content.
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
      <DonationButton />
    </div>
  );
};

export default Gallery;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Music, Image, Youtube, Podcast } from 'lucide-react';

export const MediaGalleryPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="premium-badge mb-4 inline-block">Music & Video</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="rainbow-text">Media Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Music, videos, podcasts, and visual art from the Love Transcends universe.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        {/* Media Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-red to-rainbow-orange mx-auto mb-4 flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Videos</h3>
            <p className="text-sm text-muted-foreground">Documentary clips & promos</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-violet to-rainbow-blue mx-auto mb-4 flex items-center justify-center">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Music</h3>
            <p className="text-sm text-muted-foreground">Original tracks & collaborations</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-teal mx-auto mb-4 flex items-center justify-center">
              <Podcast className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Podcasts</h3>
            <p className="text-sm text-muted-foreground">Weekly updates & interviews</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-yellow to-rainbow-orange mx-auto mb-4 flex items-center justify-center">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">Artwork</h3>
            <p className="text-sm text-muted-foreground">Visual art & brand assets</p>
          </div>
        </div>

        {/* YouTube & Podcast Embed Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* YouTube */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-8 h-8 text-rainbow-red" />
              <h3 className="font-bold text-foreground text-lg">Latest from YouTube</h3>
            </div>
            <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center border border-border/50">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">YouTube channel coming soon</p>
                <p className="text-xs text-muted-foreground mt-1">Auto-updates enabled</p>
              </div>
            </div>
          </div>

          {/* Podcast */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Podcast className="w-8 h-8 text-cosmic-purple" />
              <h3 className="font-bold text-foreground text-lg">Latest Podcast</h3>
            </div>
            <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center border border-border/50">
              <div className="text-center">
                <Music className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Podcast feed coming soon</p>
                <p className="text-xs text-muted-foreground mt-1">Auto-updates enabled</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="cosmic-button text-white font-semibold">
            <Link to="/gallery">View Full Media Gallery →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

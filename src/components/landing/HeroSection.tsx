import { StarField } from '../StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import miracleLogo from '@/assets/logos/miracle-network-logo.jpeg';
import cosmicBackground from '@/assets/hero/cosmic-lt-social.png';

const heroVideos = [
  '/videos/hero-video-1.mp4',
  '/videos/hero-video-2.mp4',
  '/videos/hero-video-3.mp4',
  '/videos/hero-video-4.mp4',
];

export const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      {/* Video Background */}
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      <StarField />
      
      {/* Cosmic Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${cosmicBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Floating Logo */}
          <div className="mb-8 floating">
            <img 
              src={miracleLogo} 
              alt="Miracle Network" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full cosmic-glow"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="rainbow-text">LOVE TRANSCENDS</span>
            <br />
            <span className="text-foreground">REALITY</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A Social Miracle Mining Network
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card rounded-xl p-6 hover:cosmic-glow transition-all duration-300">
              <div className="text-3xl font-bold rainbow-text mb-2">SU</div>
              <h3 className="font-semibold text-foreground mb-1">LTSocialUniverse</h3>
              <p className="text-sm text-muted-foreground">IaGuardian Protected Family Network</p>
            </div>
            <div className="glass-card rounded-xl p-6 hover:cosmic-glow transition-all duration-300">
              <div className="text-3xl font-bold rainbow-text mb-2">MN</div>
              <h3 className="font-semibold text-foreground mb-1">LTMiracleMining</h3>
              <p className="text-sm text-muted-foreground">Smart Contracts Protecting IP for Life</p>
            </div>
            <div className="glass-card rounded-xl p-6 hover:cosmic-glow transition-all duration-300">
              <div className="text-3xl font-bold rainbow-text mb-2">LTR</div>
              <h3 className="font-semibold text-foreground mb-1">LTReality</h3>
              <p className="text-sm text-muted-foreground">A Miracle in Reality</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="cosmic-button text-white font-semibold px-8">
              <Link to="/investors">View Investment Opportunities</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cosmic-teal text-cosmic-teal hover:bg-cosmic-teal/10">
              <Link to="/story">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

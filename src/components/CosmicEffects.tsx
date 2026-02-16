import { useEffect, useState, useCallback } from 'react';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  duration: number;
  delay: number;
  length: number;
}

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: { angle: number; distance: number; size: number }[];
}

const COLORS = [
  'hsl(0, 85%, 60%)',
  'hsl(25, 95%, 55%)',
  'hsl(50, 95%, 55%)',
  'hsl(140, 70%, 45%)',
  'hsl(210, 90%, 55%)',
  'hsl(280, 80%, 60%)',
  'hsl(45, 90%, 55%)',
];

export const CosmicEffects = () => {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // Shooting stars on scroll
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);

    // Spawn shooting star on scroll
    if (Math.random() > 0.85) {
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 60,
        angle: 30 + Math.random() * 30,
        duration: 0.6 + Math.random() * 0.8,
        delay: 0,
        length: 80 + Math.random() * 120,
      };
      setShootingStars((prev) => [...prev.slice(-8), newStar]);
    }

    // Spawn firework bursts occasionally
    if (Math.random() > 0.95) {
      const particles = Array.from({ length: 12 }, () => ({
        angle: Math.random() * 360,
        distance: 30 + Math.random() * 60,
        size: 2 + Math.random() * 3,
      }));
      const fw: Firework = {
        id: Date.now() + Math.random(),
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 50,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        particles,
      };
      setFireworks((prev) => [...prev.slice(-4), fw]);

      // Remove after animation
      setTimeout(() => {
        setFireworks((prev) => prev.filter((f) => f.id !== fw.id));
      }, 1500);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Clean old shooting stars
  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars((prev) => prev.slice(-6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute shooting-star-trail"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            '--angle': `${star.angle}deg`,
            '--duration': `${star.duration}s`,
            '--length': `${star.length}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Firework Bursts */}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="absolute"
          style={{ left: `${fw.x}%`, top: `${fw.y}%` }}
        >
          {fw.particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full firework-particle"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: fw.color,
                '--fw-angle': `${p.angle}deg`,
                '--fw-distance': `${p.distance}px`,
                boxShadow: `0 0 6px ${fw.color}, 0 0 12px ${fw.color}`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

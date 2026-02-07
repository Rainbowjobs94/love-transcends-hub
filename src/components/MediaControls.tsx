import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Square, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videoTracks = [
  { id: 1, title: 'Hero Video 1', src: '/videos/hero-video-1.mp4' },
  { id: 2, title: 'Hero Video 2', src: '/videos/hero-video-2.mp4' },
  { id: 3, title: 'Hero Video 3', src: '/videos/hero-video-3.mp4' },
  { id: 4, title: 'Hero Video 4', src: '/videos/hero-video-4.mp4' },
];

interface MediaControlsProps {
  onVideoChange?: (src: string) => void;
}

export const MediaControls = ({ onVideoChange }: MediaControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLVideoElement | null>(null);

  const currentTrack = videoTracks[currentTrackIndex];

  useEffect(() => {
    if (onVideoChange) {
      onVideoChange(currentTrack.src);
    }
  }, [currentTrackIndex, onVideoChange, currentTrack.src]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleBack = () => {
    const newIndex = currentTrackIndex === 0 ? videoTracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(false);
  };

  const handleSkip = () => {
    const newIndex = (currentTrackIndex + 1) % videoTracks.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Hidden video element for audio playback */}
      <video
        ref={audioRef}
        src={currentTrack.src}
        className="hidden"
        onEnded={handleSkip}
      />

      {/* Left Controls */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlay}
          className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
          aria-label="Previous track"
        >
          <SkipBack size={16} />
        </Button>
      </div>

      {/* Now Playing Display - Center */}
      <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
        <Music size={12} className="text-cosmic-teal" />
        <span className="max-w-[120px] truncate">
          {currentTrack.title} ({currentTrackIndex + 1}/{videoTracks.length})
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSkip}
          className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
          aria-label="Next track"
        >
          <SkipForward size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleStop}
          className="h-8 w-8 text-foreground hover:text-primary hover:bg-primary/10"
          aria-label="Stop"
        >
          <Square size={16} />
        </Button>
      </div>
    </>
  );
};

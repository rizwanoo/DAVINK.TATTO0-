import React from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({ src, className }) => {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
        <video
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className={className}
        />
      {/* Subtle video icon */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-80 pointer-events-none">
        <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-red-500" />
      </div>
    </div>
  );
};

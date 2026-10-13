import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({ src, className }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load slightly before coming into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      {isInView ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className={className}
        />
      ) : (
        <div className="w-full h-full bg-neutral-950 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
          </div>
        </div>
      )}

      {/* Subtle video icon */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-80 pointer-events-none">
        <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-red-500" />
      </div>
    </div>
  );
};

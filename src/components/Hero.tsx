import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Instagram, Volume2, VolumeX } from 'lucide-react';
import { ARTIST_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="home" className="relative min-h-[94vh] lg:min-h-screen text-white flex flex-col justify-between overflow-hidden bg-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={ARTIST_INFO.heroPoster}
          className="w-full h-full object-cover brightness-120 contrast-105 saturate-110 scale-100"
        >
          <source src={ARTIST_INFO.heroVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Overlays: Video stays ultra-bright & clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Floating Ember Glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[170px] pointer-events-none"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-32 sm:pt-40 lg:pt-44 pb-10 sm:pb-12 my-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Animated Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl flex flex-col gap-5 sm:gap-6 w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[0.94] sm:leading-[0.92] font-sans drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] text-slate-100 break-words"
          >
            {t.hero.title1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-600">
              {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg md:text-xl text-neutral-200 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] break-words"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 sm:px-9 py-3.5 sm:py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_35px_rgba(220,38,38,0.5)] transition-colors text-center justify-center flex items-center"
            >
              {t.hero.bookBtn}
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-black/70 hover:bg-neutral-900 text-slate-100 font-bold text-xs tracking-[0.2em] uppercase rounded-full border border-neutral-700 hover:border-red-600/60 transition-colors text-center justify-center flex items-center"
            >
              {t.hero.exploreBtn}
            </motion.a>

            {/* Audio Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSound}
              className="p-3.5 sm:p-4 rounded-full bg-black/60 hover:bg-black/85 border border-neutral-700 text-neutral-200 hover:text-red-400 transition-colors self-center sm:self-auto shrink-0"
              title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-500" />}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider text-neutral-300 pt-2 drop-shadow"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>{t.hero.location}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 hidden sm:inline-block" />
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 font-medium text-slate-200"
            >
              <Instagram className="w-3.5 h-3.5 text-red-500" />
              <span>{ARTIST_INFO.instagramHandle}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Status Quote & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-300 drop-shadow w-full"
        >
          <div className="flex items-center gap-3 overflow-hidden max-w-full sm:max-w-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm italic tracking-wider text-slate-200 font-light break-words">
              {t.hero.quote}
            </p>
          </div>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-red-400 transition-colors tracking-[0.2em] uppercase text-[11px] font-bold group shrink-0"
          >
            <span>{t.hero.scroll}</span>
            <ArrowDown className="w-3.5 h-3.5 text-red-500 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

      </div>

    </section>
  );
};

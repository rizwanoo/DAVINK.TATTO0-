import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO } from '../data/mockData';
import { Instagram, Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#040404] text-slate-100 relative overflow-hidden border-t border-neutral-900/60">
      {/* Ambient Red Aura */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Borderless Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column: Slide 3 Photo with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black group max-w-md mx-auto lg:max-w-none">
              <img
                src={ARTIST_INFO.aboutPhoto}
                alt="David Pérez - Tatuador Colombiano"
                className="w-full h-auto object-cover contrast-110 brightness-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Quotes written directly in front of the photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 w-full"
          >
            
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-red-500 font-bold">
              <Quote className="w-4 h-4 rotate-180" />
              <span>Artist Philosophy</span>
            </div>

            {/* Primary Quote */}
            <blockquote className="space-y-4 sm:space-y-6">
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white leading-snug sm:leading-[1.15] break-words">
                “Un encendedor también puede ser un pequeño lienzo. El arte y la tinta trascienden el tiempo.”
              </p>
              
              <p className="text-base sm:text-xl lg:text-2xl font-light text-neutral-300 italic leading-relaxed break-words">
                “La piel no es solo un cuerpo, es una historia permanente donde cada sombra, cada línea y cada textura cobran vida eterna.”
              </p>
            </blockquote>

            {/* Artist Attribution & Details */}
            <div className="pt-6 border-t border-neutral-800/80 space-y-4 w-full">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-slate-100 break-words">
                  David Pérez
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-red-500 font-bold mt-1 break-words">
                  Tatuador Colombiano • Haines City & Davenport, FL
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl break-words">
                Especialista en tatuajes personalizados, realismo en escala de grises y transformación de piezas antiguas. Sesiones privadas individuales diseñadas exclusivamente a tu medida.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <motion.a
                  href="#consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-colors text-center justify-center flex items-center"
                >
                  Book A Tattoo
                </motion.a>
                <motion.a
                  href={ARTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/5 border border-neutral-800 hover:border-red-600/50 text-neutral-300 hover:text-white font-semibold text-xs tracking-[0.2em] uppercase rounded-full transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Instagram className="w-3.5 h-3.5 text-red-500" />
                  <span>{ARTIST_INFO.instagramHandle}</span>
                </motion.a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

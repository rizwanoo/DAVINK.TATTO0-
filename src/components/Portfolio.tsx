import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { X, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { LazyVideo } from './LazyVideo';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const toggleModalAudio = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setModalMuted(modalVideoRef.current.muted);
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-28 bg-black text-slate-100 relative overflow-hidden border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-2">
              {t.portfolio.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[0.1em] uppercase font-sans text-white break-words">
              PORT<span className="text-red-600">FOLIO</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wider uppercase max-w-md break-words">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Clean 16-Item Gallery Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden cursor-pointer aspect-[9/16] bg-neutral-950 rounded-xl"
            >
              {item.type === 'video' ? (
                <LazyVideo
                  src={item.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full relative">
                  <img
                    src={item.src}
                    alt="David Tattoo Artwork"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Minimalist hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={false}
                  className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform"
                >
                  <Maximize2 className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Consultation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-colors"
          >
            {t.portfolio.cta}
          </motion.a>
        </motion.div>

      </div>

      {/* Lightbox Fullscreen Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-colors z-20 border border-neutral-700"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Sound toggle for videos */}
            {selectedItem.type === 'video' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleModalAudio}
                className="absolute top-6 left-6 px-4 py-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold flex items-center gap-2 z-20"
              >
                {modalMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-red-500" />
                    <span>Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-red-500" />
                    <span>Mute Audio</span>
                  </>
                )}
              </motion.button>
            )}

            {/* Media Container with Spring Physics */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="max-w-2xl max-h-[90vh] w-full flex items-center justify-center overflow-hidden"
            >
              {selectedItem.type === 'video' ? (
                <video
                  ref={modalVideoRef}
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt="David Tattoo Artwork"
                  className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

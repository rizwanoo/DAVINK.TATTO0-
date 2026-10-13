import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StudioAtmosphere: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="studio" className="py-28 bg-[#040404] text-slate-100 relative overflow-hidden border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-2">
              {t.studio.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[0.1em] uppercase font-sans text-white break-words">
              SAFETY & <span className="text-red-600">AFTERCARE</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wider uppercase max-w-md break-words">
            {t.studio.subtitle}
          </p>
        </motion.div>

        {/* Clean Borderless Hardware Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-black rounded-2xl shadow-2xl"
        >
          <img
            src="/assets/tattoo_machine_gold.jpg"
            alt="Elite Custom Rotary Tattoo Machine Setup"
            className="w-full h-full object-cover filter brightness-100 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold block mb-1">
                {t.studio.benchmark}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black font-sans text-white uppercase tracking-wide break-words">
                {t.studio.heading}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed break-words">
                {t.studio.desc}
              </p>
            </div>

            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] shrink-0 flex items-center gap-1.5"
            >
              <span>{t.studio.btn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

export const AftercareFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-black text-slate-100 relative border-t border-neutral-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Clean Editorial FAQ Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-2">
            Client Information
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-[0.1em] uppercase font-sans text-white break-words">
            FAQ
          </h2>
          <p className="text-neutral-400 text-sm font-light mt-3">
            Common questions regarding bookings, studio appointments, and tattoo process.
          </p>
        </motion.div>

        {/* Clean Borderless FAQ List with Framer Motion AnimatePresence */}
        <div className="divide-y divide-neutral-900 border-y border-neutral-900">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-6 text-left font-sans font-bold text-lg sm:text-xl text-white hover:text-red-500 transition-colors py-2"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-500 shrink-0"
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

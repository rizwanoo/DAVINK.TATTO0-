import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StickyMobileCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-red-950/60 p-3 sm:hidden flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">
          Haines City & Davenport, FL
        </span>
        <span className="text-xs font-bold text-white uppercase">
          Private Studio Sessions
        </span>
      </div>
      <a
        href="#consultation"
        className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center gap-1.5 shrink-0"
      >
        <span>{t.nav.book}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

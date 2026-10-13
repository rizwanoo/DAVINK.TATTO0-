import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

interface Custom404Props {
  onReturnHome: () => void;
}

export const Custom404: React.FC<Custom404Props> = ({ onReturnHome }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-6xl sm:text-9xl font-black font-sans text-white tracking-tighter">
          4<span className="text-red-600">0</span>4
        </h1>
        <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
          The page or artwork link you are looking for does not exist or has been removed from David's gallery.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={onReturnHome}
            className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

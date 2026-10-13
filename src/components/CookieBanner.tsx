import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('davink_cookie_consent');
    if (consent) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('davink_cookie_consent', 'true');
    setAccepted(true);
  };

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-black/95 border-t border-red-950/60 backdrop-blur-lg shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 shrink-0">
                <Cookie className="w-4 h-4" />
              </div>
              <p className="font-light leading-relaxed">
                We use cookies to optimize your browsing experience, analyze studio traffic, and secure consultation bookings in Haines City & Davenport, FL.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wider rounded-full text-[11px] transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#0a0a0d] border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 relative text-slate-100 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-colors border border-neutral-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center text-red-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black font-sans uppercase tracking-wide">
                Privacy Policy
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                At DAVINK.TATTO0, operated by David Pérez in Haines City and Davenport, Florida, your privacy and personal data security are our highest priority.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">1. Information We Collect</h4>
              <p>
                When you submit a consultation request, we collect your name, email, phone number, tattoo placement, style preferences, and concept descriptions solely to schedule and plan your bespoke tattoo session.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">2. Confidentiality & Medical Safety</h4>
              <p>
                All client consultation notes, medical waivers, and contact information remain strictly confidential. We never sell, trade, or share your data with third parties.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">3. Studio Environment</h4>
              <p>
                Our private single-client studio in Central Florida adheres to hospital-grade barrier protection and single-use sterilization protocols.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider pt-2">4. Contact</h4>
              <p>
                For any privacy inquiries, reach out directly via Instagram @davink.tatto0 or through our consultation booking form.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full transition-all"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

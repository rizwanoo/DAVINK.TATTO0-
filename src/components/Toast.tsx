import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#121217] border border-amber-500/40 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slideUp">
      <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div className="text-xs">
        <span className="block font-semibold text-white">DAVINK.TATTO0</span>
        <span className="text-neutral-300">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-neutral-400 hover:text-white p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

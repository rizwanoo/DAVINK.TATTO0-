import React from 'react';
import { ARTIST_INFO } from '../data/mockData';
import { Instagram, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#030303] text-slate-100 pt-28 pb-14 border-t border-neutral-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* ============================================================== */}
        {/* BORDERLESS "READY TO GET INKED?" CLOSING STATEMENT              */}
        {/* ============================================================== */}
        <div className="text-center max-w-4xl mx-auto pb-20 sm:pb-24 border-b border-neutral-900 w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-4">
            Private Sanctuary
          </span>

          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight font-sans text-white mb-6 break-words">
            READY TO <span className="text-red-600">GET INKED?</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed break-words px-2">
            David | DAVINK.TATTO0 — Haines City & Davenport, Florida.<br />
            Custom Tattoos • Monochromatic Black & Grey • Cover-Ups
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#consultation"
              className="w-full sm:w-auto px-10 sm:px-12 py-3.5 sm:py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_35px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/50 text-slate-200 font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-red-500" />
              <span>Instagram Profile</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Haines City & Davenport, Florida • Central FL Studio</span>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-12 border-b border-neutral-900/80 w-full">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-600/60">
                <img
                  src={ARTIST_INFO.profileImage}
                  alt={ARTIST_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black tracking-[0.2em] text-lg text-slate-100 font-sans">
                DAVINK<span className="text-red-600">.</span>TATTO0
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Bespoke black & grey realism and transformative cover-up tattoo craft by David. Private appointments only.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-red-500 font-bold mb-4">Location</h4>
            <div className="text-xs text-neutral-300 space-y-1">
              <p className="font-bold text-white">Haines City / Davenport</p>
              <p className="text-neutral-400">Central Florida Area</p>
              <p className="text-[11px] text-neutral-500">Private studio sessions.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-red-500 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-neutral-400">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About David</a></li>
              <li><a href="#portfolio" className="hover:text-red-400 transition-colors">Portfolio</a></li>
              <li><a href="#studio" className="hover:text-red-400 transition-colors">Safety & Care</a></li>
              <li><a href="#consultation" className="hover:text-red-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-red-500 font-bold mb-4">Social</h4>
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-neutral-300 hover:text-red-400 transition-colors"
            >
              <Instagram className="w-4 h-4 text-red-500" />
              <span>{ARTIST_INFO.instagramHandle}</span>
            </a>
            <p className="text-[11px] text-neutral-500 mt-2">Appointments By Consultation Only</p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} DAVINK.TATTO0 — David | All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-neutral-400 transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const StudioAtmosphere: React.FC = () => {
  return (
    <section id="studio" className="py-28 bg-[#040404] text-slate-100 relative overflow-hidden border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold block mb-2">
              Clinical Hygiene Standards
            </span>
            <h2 className="text-4xl sm:text-7xl font-black tracking-[0.1em] uppercase font-sans text-white">
              SAFETY & <span className="text-red-600">AFTERCARE</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wider uppercase max-w-md">
            100% Sterile Disposable Needles • Hospital-Grade Barriers • Carbon Black Inks
          </p>
        </div>

        {/* Clean Borderless Hardware Visual */}
        <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full bg-black">
          <img
            src="/assets/tattoo_machine_gold.jpg"
            alt="Elite Custom Rotary Tattoo Machine Setup"
            className="w-full h-full object-cover filter brightness-100 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold block mb-1">
                Studio Benchmark
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase tracking-wide">
                Bishop Rotary Hardware & Carbon Deep Black
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                Single-client private studio appointments in Haines City & Davenport, Florida. Unsealed disposable cartridges, medical barriers, and direct artist aftercare supervision.
              </p>
            </div>

            <a
              href="#consultation"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] shrink-0 flex items-center gap-1.5"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

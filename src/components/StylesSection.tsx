import React from 'react';
import { TATTOO_STYLES } from '../data/mockData';
import { ArrowUpRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';

interface StylesSectionProps {
  onOpenBookingWithStyle: (styleName: string) => void;
}

export const StylesSection: React.FC<StylesSectionProps> = ({ onOpenBookingWithStyle }) => {
  return (
    <section id="styles" className="py-24 bg-[#07070a] text-white relative overflow-hidden">
      {/* Background ambient embers glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Banner inspired directly by the Taplink reference "АВТОРСКИЕ TATTOO" */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-black via-[#111116] to-black shadow-[0_0_60px_rgba(245,158,11,0.12)] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-xs tracking-widest text-amber-400 uppercase w-fit">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Bespoke Ink Craft</span>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2 font-semibold">
                Original Artwork
              </h3>
              <h2 className="text-4xl sm:text-6xl font-black uppercase font-sans tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                CUSTOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">TATTOO</span>
              </h2>
            </div>

            <p className="text-amber-400/90 text-sm tracking-widest uppercase font-medium italic">
              "Art that stays forever on your skin."
            </p>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Every stroke is calibrated for longevity. Using state-of-the-art rotary machinery, surgical-grade disposable cartridges, and high-saturation black pigments that hold their depth for decades.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBookingWithStyle('Custom Tattoos')}
                className="px-9 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-black text-xs tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2 group w-fit"
              >
                <span>Book A Session</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Hero Visual with gloved hand & glowing machine from reference */}
          <div className="lg:col-span-6 relative h-[380px] lg:h-[500px] overflow-hidden">
            <img
              src="/assets/tattoo_machine_art.jpg"
              alt="Custom Tattoo Rotary Machine in Action"
              className="w-full h-full object-cover brightness-105 contrast-115 scale-100 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden block" />
            
            {/* Machine Badge */}
            <div className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-right">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                Precision Hardware
              </span>
              <span className="text-xs text-white font-medium">Surgical Cartridge & Micro-Volt Rotary</span>
            </div>
          </div>

        </div>

        {/* Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TATTOO_STYLES.map((style) => (
            <div
              key={style.id}
              className="group relative bg-[#0e0e14] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={style.imageUrl}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-[#0e0e14]/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-500/30 text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                  {style.id}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold font-sans tracking-wide mb-1 text-white group-hover:text-amber-400 transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-amber-500/80 mb-4 font-semibold">
                    {style.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {style.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 border-t border-white/10 pt-4">
                    {style.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBookingWithStyle(style.title)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-amber-500 hover:text-neutral-950 border border-white/15 hover:border-amber-500 font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Discuss {style.title}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

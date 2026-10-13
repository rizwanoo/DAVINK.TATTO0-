import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, ArrowUpRight, Globe } from 'lucide-react';
import { ARTIST_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.studio, href: '#studio' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.consultation, href: '#consultation' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 border-b border-white/10 py-3.5 shadow-xl backdrop-blur-md'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="w-full flex items-center justify-between px-2 sm:px-4">
        {/* Logo & Brand */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-red-600/60 shrink-0">
            <img
              src={ARTIST_INFO.profileImage}
              alt={ARTIST_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black tracking-[0.1em] text-xs sm:text-base text-white font-sans">
              DAVINK<span className="text-red-600">.</span>TATTO0
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.15em] text-neutral-400 uppercase font-medium">
              David • Central FL
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-3.5 py-2 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-bold text-neutral-200 hover:text-white hover:border-red-600/50 transition-colors flex items-center gap-1.5"
            title="Toggle Language (EN / ES)"
          >
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span className="uppercase tracking-wider">{lang === 'en' ? 'ES' : 'EN'}</span>
          </motion.button>

          <motion.a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-red-400 hover:border-red-600/50 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-7 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-colors flex items-center gap-2"
          >
            <span>{t.nav.bookTattoo}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle & Language Switcher */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 text-[11px] font-bold text-neutral-200 flex items-center gap-1"
          >
            <Globe className="w-3 h-3 text-red-500" />
            <span>{lang === 'en' ? 'ES' : 'EN'}</span>
          </button>

          <a
            href="#consultation"
            className="px-4 py-2 bg-red-600 text-white font-black text-[11px] tracking-wider uppercase rounded-full"
          >
            {t.nav.book}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-slate-200 bg-neutral-950"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black/95 backdrop-blur-lg border-b border-red-950/60 px-6 py-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-semibold text-neutral-200 hover:text-red-400 py-2 border-b border-neutral-900 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-red-500" />
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-neutral-300 hover:text-red-400"
              >
                <Instagram className="w-4 h-4 text-red-500" />
                <span>{ARTIST_INFO.instagramHandle}</span>
              </a>
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-red-600 text-white font-black text-xs tracking-widest uppercase rounded-full"
              >
                {t.nav.consultation}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { StudioAtmosphere } from './components/StudioAtmosphere';
import { ConsultationSection } from './components/ConsultationSection';
import { AftercareFAQ } from './components/AftercareFAQ';
import { ContactFooter } from './components/ContactFooter';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Custom404 } from './components/Custom404';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [show404, setShow404] = useState(false);

  if (show404) {
    return <Custom404 onReturnHome={() => setShow404(false)} />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden pb-16 sm:pb-0">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Artist Bio & Introduction */}
        <About />

        {/* Art On Skin - Master Gallery */}
        <Portfolio />

        {/* Safety & Clinical Aftercare Protocol */}
        <StudioAtmosphere />

        {/* Clean On-Page Consultation Booking */}
        <ConsultationSection />

        {/* Aftercare & FAQ */}
        <AftercareFAQ />

        {/* Ready To Get Inked & Footer */}
        <ContactFooter />

        {/* 18-Point Production Additions */}
        <StickyMobileCTA />
        <CookieBanner />
        <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

        {/* Footer trigger to demo Privacy Policy or 404 */}
        <div className="bg-black py-4 text-center border-t border-neutral-900 text-xs text-neutral-500 flex items-center justify-center gap-6">
          <button
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-neutral-300 transition-colors uppercase tracking-widest text-[10px]"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            onClick={() => setShow404(true)}
            className="hover:text-red-400 transition-colors uppercase tracking-widest text-[10px]"
          >
            Test 404 Page
          </button>
        </div>
      </div>
    </LanguageProvider>
  );
}

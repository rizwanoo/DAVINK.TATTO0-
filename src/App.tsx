/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { StudioAtmosphere } from './components/StudioAtmosphere';
import { ConsultationSection } from './components/ConsultationSection';
import { AftercareFAQ } from './components/AftercareFAQ';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Navigation (solid clean black, no blur) */}
      <Navbar />

      {/* Hero Section with exact video from Instagram */}
      <Hero />

      {/* Artist Bio & Introduction (with downloaded photo from DeJ6lltlf9T slide 3) */}
      <About />

      {/* Art On Skin - Master Gallery */}
      <Portfolio />

      {/* Safety & Clinical Aftercare Protocol */}
      <StudioAtmosphere />

      {/* Clean On-Page Consultation Booking (No Pop-Up Modal) */}
      <ConsultationSection />

      {/* Aftercare & FAQ */}
      <AftercareFAQ />

      {/* Ready To Get Inked & Footer */}
      <ContactFooter />
    </div>
  );
}

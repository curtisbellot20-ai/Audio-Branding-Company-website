'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TheProblem from '@/components/TheProblem';
import SoundJourney from '@/components/SoundJourney';
import BeforeAfter from '@/components/BeforeAfter';
import Services from '@/components/Services';
import AudioMoodSelector from '@/components/AudioMoodSelector';
import BrandQuiz from '@/components/BrandQuiz';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import HaloCursor from '@/components/HaloCursor';
import AtmosphereToggle from '@/components/AtmosphereToggle';

export default function Home() {
  const [atmosphereMode, setAtmosphereMode] = useState(false);

  useEffect(() => {
    if (atmosphereMode) {
      document.body.classList.add('atmosphere-mode');
    } else {
      document.body.classList.remove('atmosphere-mode');
    }
  }, [atmosphereMode]);

  return (
    <main className="relative">
      <HaloCursor />
      <Navigation atmosphereMode={atmosphereMode} />
      <AtmosphereToggle
        enabled={atmosphereMode}
        onToggle={() => setAtmosphereMode((v) => !v)}
      />
      <Hero />
      <TheProblem />
      <SoundJourney />
      <BeforeAfter />
      <Services />
      <AudioMoodSelector />
      <BrandQuiz />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

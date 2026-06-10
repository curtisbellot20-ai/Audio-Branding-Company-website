'use client';

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
import GrowthClub from '@/components/GrowthClub';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import HaloCursor from '@/components/HaloCursor';
import MusicButton from '@/components/AtmosphereToggle';

export default function Home() {
  return (
    <main className="relative">
      <HaloCursor />
      <Navigation atmosphereMode={false} />
      <MusicButton />
      <Hero />
      <TheProblem />
      <SoundJourney />
      <BeforeAfter />
      <Services />
      <AudioMoodSelector />
      <BrandQuiz />
      <HowItWorks />
      <Pricing />
      <GrowthClub />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

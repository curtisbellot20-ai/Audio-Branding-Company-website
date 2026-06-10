'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PositioningStrip from '@/components/PositioningStrip';
import AudioShowcase from '@/components/AudioShowcase';
import TheProblem from '@/components/TheProblem';
import Services from '@/components/Services';
import Process from '@/components/Process';
import ReusableEverywhere from '@/components/ReusableEverywhere';
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
      <PositioningStrip />
      <AudioShowcase />
      <TheProblem />
      <Services />
      <Process />
      <ReusableEverywhere />
      <FinalCTA />
      <Footer />
    </main>
  );
}

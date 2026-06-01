'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  { name: 'Restaurant', tagline: 'Every dish deserves a soundtrack.', description: 'A warm, inviting brand anthem that plays during the dining experience and across all social media. Guests started staying longer and spending more.', result: '+32% in average table duration', gradient: 'from-amber-900/40 to-orange-900/20', emoji: '🍽️' },
  { name: 'Church', tagline: 'Sound that moves the soul.', description: 'A custom inspirational anthem now opens every service and streams across their podcast. Congregation grew 40% within one year.', result: '+40% congregation growth', gradient: 'from-purple-900/40 to-indigo-900/20', emoji: '⛪' },
  { name: 'Realtor', tagline: 'Turn showings into memories.', description: 'Luxury property tour videos open with a signature sound. Listings feel premium from the first second. 3x more referral calls.', result: '3x more referral calls', gradient: 'from-blue-900/40 to-cyan-900/20', emoji: '🏡' },
  { name: 'Salon', tagline: 'Luxury from the moment they walk in.', description: 'Custom ambient music for the salon floor + a branded social media sound pack. Clients share their visit more often.', result: '+60% social media shares', gradient: 'from-pink-900/40 to-rose-900/20', emoji: '✂️' },
  { name: 'Contractor', tagline: 'Build trust before the first meeting.', description: 'A powerful radio ad with a signature brand sound made this contractor the most recognized name in their market. Inbound leads tripled.', result: '3x inbound leads in 90 days', gradient: 'from-yellow-900/40 to-stone-900/20', emoji: '🔨' },
  { name: 'Event Company', tagline: 'Make every event feel like a movie.', description: 'Custom event soundscapes and promotional music transformed their brand into an experience. Booked 6 months in advance.', result: 'Booked 6 months in advance', gradient: 'from-emerald-900/40 to-teal-900/20', emoji: '🎉' },
];

function AudioPlayerPlaceholder({ industry }: { industry: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex items-center gap-4 bg-black/30 rounded-xl p-4 border border-halo-gold/10">
      <button onClick={() => setPlaying((v) => !v)} aria-label={playing ? `Pause ${industry} demo` : `Play ${industry} demo`} className="w-10 h-10 rounded-full bg-halo-gold flex items-center justify-center flex-shrink-0 hover:bg-halo-gold-light transition-colors">
        {playing ? <Pause size={16} className="text-halo-black" /> : <Play size={16} className="text-halo-black ml-0.5" />}
      </button>
      <div className="flex-1">
        <div className="flex items-end gap-0.5 h-8">
          {[...Array(28)].map((_, i) => (
            <motion.div key={i} className="flex-1 bg-halo-gold rounded-sm"
              animate={playing ? { scaleY: [0.3, Math.random() * 0.7 + 0.3, 0.3] } : { scaleY: 0.2 }}
              transition={{ duration: 0.8 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.03, ease: 'easeInOut' }}
              style={{ height: '100%', transformOrigin: 'bottom' }} />
          ))}
        </div>
      </div>
      <span className="text-gray-500 text-xs">Demo</span>
    </div>
  );
}

export default function SoundJourney() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const scroll = (dir: 'left' | 'right') => { if (!scrollRef.current) return; scrollRef.current.scrollBy({ left: dir === 'right' ? 400 : -400, behavior: 'smooth' }); };
  return (
    <section id="sound-journey" ref={ref} className="relative py-32 overflow-hidden" aria-labelledby="journey-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10">
        <div className="px-6 max-w-7xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">The Sound Journey</span>
          </motion.div>
          <div className="flex items-end justify-between gap-4">
            <motion.h2 id="journey-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl max-w-2xl leading-tight">
              Every Industry Has a <span className="text-halo-gold">Sound Story.</span>
            </motion.h2>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => scroll('left')} aria-label="Scroll left" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-halo-gold/40 hover:text-halo-gold text-gray-400 transition-all"><ChevronLeft size={20} /></button>
              <button onClick={() => scroll('right')} aria-label="Scroll right" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-halo-gold/40 hover:text-halo-gold text-gray-400 transition-all"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="horizontal-scroll pl-6 gap-6 pb-4" role="list" aria-label="Industry sound examples">
          {industries.map((industry, i) => (
            <motion.article key={industry.name} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className={`flex-shrink-0 w-80 md:w-96 bg-gradient-to-br ${industry.gradient} bg-halo-black rounded-2xl border border-white/5 p-8 flex flex-col gap-6`} role="listitem">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={industry.name}>{industry.emoji}</span>
                <div>
                  <p className="text-halo-gold text-xs tracking-widest uppercase font-semibold">{industry.name}</p>
                  <p className="text-white font-medium text-sm mt-0.5">{industry.tagline}</p>
                </div>
              </div>
              <AudioPlayerPlaceholder industry={industry.name} />
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{industry.description}</p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Result</p>
                <p className="text-halo-gold font-semibold">{industry.result}</p>
              </div>
              <a href="#quiz" className="btn-ghost text-sm text-center py-3 px-4">Get My {industry.name} Sound &rarr;</a>
            </motion.article>
          ))}
          <div className="flex-shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

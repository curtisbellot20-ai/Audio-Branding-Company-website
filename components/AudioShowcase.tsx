'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause } from 'lucide-react';

const examples = [
  { id: 'venue', title: 'Venue Brand Audio', desc: 'A signature sonic entrance for event spaces and venues — the sound guests hear the moment they arrive.' },
  { id: 'restaurant', title: 'Restaurant / Lounge Jingle', desc: 'A warm, ambient identity that sets the mood and reinforces the experience guests remember.' },
  { id: 'tutoring', title: 'Tutoring Brand Song', desc: 'A short, encouraging brand theme that builds trust with students and parents alike.' },
  { id: 'salon', title: 'Salon / Beauty Brand Audio', desc: 'A polished, modern audio identity that mirrors the calm confidence of a premium beauty experience.' },
];

export default function AudioShowcase() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="audio-showcase" ref={ref} className="relative py-32 px-6" aria-labelledby="showcase-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/50" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Examples</span>
          <div className="w-8 h-px bg-halo-gold/50" />
        </motion.div>
        <motion.h2 id="showcase-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          Hear The Difference
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mb-16 max-w-xl mx-auto leading-relaxed">
          A small sample of the signature audio identities we&apos;ve created for businesses like yours.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((ex, i) => {
            const isPlaying = playing === ex.id;
            return (
              <motion.article key={ex.id}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                className="flex flex-col rounded-2xl border border-white/5 bg-halo-black p-7 hover:border-halo-gold/25 transition-colors duration-500"
              >
                <button
                  onClick={() => setPlaying(isPlaying ? null : ex.id)}
                  aria-label={isPlaying ? `Pause ${ex.title}` : `Play ${ex.title}`}
                  className="w-12 h-12 rounded-full border border-halo-gold/40 flex items-center justify-center mb-6 hover:border-halo-gold hover:bg-halo-gold/10 transition-colors duration-300"
                >
                  {isPlaying ? <Pause size={16} className="text-halo-gold" /> : <Play size={16} className="text-halo-gold ml-0.5" />}
                </button>
                <h3 className="font-display font-bold text-lg text-white mb-2">{ex.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{ex.desc}</p>
                <p className="text-halo-gold text-xs tracking-[0.2em] uppercase font-semibold">Built For Brand Recall</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

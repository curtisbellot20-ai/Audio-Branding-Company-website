'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause } from 'lucide-react';

const moods = [
  {
    label: 'Luxury',
    icon: '💎',
    color: '#D4AF37',
    description: 'Rich, slow, sophisticated. Like velvet for your ears.',
    bpm: '65 BPM',
    genre: 'Cinematic Ambient',
  },
  {
    label: 'Trustworthy',
    icon: '🛡️',
    color: '#4A90E2',
    description: 'Warm, steady, reliable. The sound of a handshake.',
    bpm: '80 BPM',
    genre: 'Acoustic Warmth',
  },
  {
    label: 'Energetic',
    icon: '⚡',
    color: '#FF6B35',
    description: 'Bold, fast, electric. Gets people moving.',
    bpm: '128 BPM',
    genre: 'Modern Upbeat',
  },
  {
    label: 'Inspirational',
    icon: '✨',
    color: '#9B59B6',
    description: 'Uplifting, cinematic, goosebump-worthy.',
    bpm: '90 BPM',
    genre: 'Orchestral Rise',
  },
  {
    label: 'Friendly',
    icon: '😊',
    color: '#27AE60',
    description: 'Warm, approachable, community-centered.',
    bpm: '100 BPM',
    genre: 'Indie Folk',
  },
  {
    label: 'Powerful',
    icon: '🔥',
    color: '#E74C3C',
    description: 'Commanding, bold, impossible to ignore.',
    bpm: '110 BPM',
    genre: 'Epic Cinematic',
  },
];

export default function AudioMoodSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const activeMood = moods.find((m) => m.label === selected);

  const handleSelect = (label: string) => {
    if (selected === label) {
      setPlaying((v) => !v);
    } else {
      setSelected(label);
      setPlaying(false);
    }
  };

  return (
    <section
      id="mood-selector"
      ref={ref}
      className="relative py-32 px-6"
      aria-labelledby="mood-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">
            Audio Mood Selector
          </span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2
          id="mood-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight"
        >
          What Mood Is{' '}
          <span className="text-halo-gold">Your Brand?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mb-14 max-w-lg mx-auto"
        >
          Select a mood below to hear how Halo Audio would translate your brand’s
          personality into sound.
        </motion.p>

        {/* Mood buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {moods.map((mood, i) => (
            <motion.button
              key={mood.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              onClick={() => handleSelect(mood.label)}
              aria-pressed={selected === mood.label}
              aria-label={`Select ${mood.label} mood`}
              className={`relative p-5 rounded-2xl border text-left transition-all duration-300 group ${
                selected === mood.label
                  ? 'border-halo-gold/60 bg-halo-dark shadow-[0_0_30px_rgba(212,175,55,0.1)]'
                  : 'border-white/5 bg-halo-dark hover:border-white/15'
              }`}
            >
              <div className="text-2xl mb-3" role="img" aria-label={mood.label}>
                {mood.icon}
              </div>
              <p className="font-semibold text-sm text-white mb-1">{mood.label}</p>
              <p className="text-gray-600 text-xs">{mood.genre}</p>

              {selected === mood.label && (
                <motion.div
                  layoutId="mood-indicator"
                  className="absolute inset-0 rounded-2xl border border-halo-gold/40 pointer-events-none"
                  style={{
                    boxShadow: `0 0 20px ${mood.color}20`,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Preview panel */}
        <AnimatePresence mode="wait">
          {activeMood && (
            <motion.div
              key={activeMood.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-halo-dark rounded-2xl border border-halo-gold/15 p-8"
              role="region"
              aria-label={`${activeMood.label} mood preview`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" role="img" aria-label={activeMood.label}>
                      {activeMood.icon}
                    </span>
                    <h3 className="font-display text-xl font-bold">{activeMood.label}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-halo-gold/10 text-halo-gold border border-halo-gold/20">
                      {activeMood.bpm}
                    </span>
                  </div>
                  <p className="text-gray-400">{activeMood.description}</p>
                  <p className="text-gray-600 text-sm mt-1">{activeMood.genre}</p>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  {/* Visualizer */}
                  <div className="flex items-end gap-0.5 h-10">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 rounded-sm"
                        style={{ backgroundColor: activeMood.color }}
                        animate={
                          playing
                            ? { scaleY: [0.3, Math.random() * 0.7 + 0.3, 0.3], opacity: [0.5, 1, 0.5] }
                            : { scaleY: 0.2, opacity: 0.3 }
                        }
                        transition={{
                          duration: 0.5 + Math.random() * 0.4,
                          repeat: Infinity,
                          delay: i * 0.05,
                          ease: 'easeInOut',
                        }}
                        style={{ height: '100%', transformOrigin: 'bottom', backgroundColor: activeMood.color }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setPlaying((v) => !v)}
                    aria-label={playing ? 'Pause demo' : 'Play demo'}
                    className="w-14 h-14 rounded-full bg-halo-gold flex items-center justify-center hover:bg-halo-gold-light transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    {playing ? (
                      <Pause size={20} className="text-halo-black" />
                    ) : (
                      <Play size={20} className="text-halo-black ml-1" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <p className="text-center text-gray-600 text-sm mt-6">
            Select a mood above to preview your brand’s sound.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a href="#quiz" className="btn-gold px-8 py-4 text-sm font-bold">
            Get My Custom Audio Identity
          </a>
        </motion.div>
      </div>
    </section>
  );
}

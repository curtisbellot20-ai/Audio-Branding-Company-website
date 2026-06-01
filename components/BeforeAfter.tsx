'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, CheckCircle, XCircle } from 'lucide-react';

function AudioCard({
  variant,
  playing,
  onToggle,
}: {
  variant: 'before' | 'after';
  playing: boolean;
  onToggle: () => void;
}) {
  const isBefore = variant === 'before';

  const beforePoints = [
    'Generic stock music',
    'No emotional connection',
    'Forgettable and replaceable',
    'Same as 10,000 other businesses',
    'No brand identity in sound',
  ];
  const afterPoints = [
    '100% custom audio identity',
    'Triggers emotional memory',
    'Unmistakably yours',
    'Consistent across every touchpoint',
    'Builds brand recognition over time',
  ];

  return (
    <div
      className={`relative rounded-2xl p-8 border flex flex-col gap-6 transition-all duration-500 ${
        isBefore
          ? 'bg-halo-dark border-white/5'
          : 'bg-halo-dark border-halo-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.08)]'
      }`}
    >
      {!isBefore && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)',
          }}
        />
      )}

      <div className="relative">
        <p
          className={`text-xs tracking-[0.25em] uppercase font-semibold mb-2 ${
            isBefore ? 'text-gray-600' : 'text-halo-gold'
          }`}
        >
          {isBefore ? 'Before Halo Audio' : 'After Halo Audio'}
        </p>
        <h3 className="font-display text-2xl font-bold">
          {isBefore ? 'Generic. Forgettable. Invisible.' : 'Custom. Emotional. Unforgettable.'}
        </h3>
      </div>

      {/* Fake audio player */}
      <div className="relative bg-black/30 rounded-xl p-4 border border-white/5">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            aria-label={playing ? 'Pause audio sample' : 'Play audio sample'}
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
              isBefore
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-halo-gold hover:bg-halo-gold-light'
            }`}
          >
            {playing ? (
              <Pause size={15} className={isBefore ? 'text-gray-300' : 'text-halo-black'} />
            ) : (
              <Play size={15} className={`ml-0.5 ${isBefore ? 'text-gray-300' : 'text-halo-black'}`} />
            )}
          </button>
          <div className="flex-1 flex items-end gap-0.5 h-8">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-sm ${
                  isBefore ? 'bg-gray-600' : 'bg-halo-gold'
                }`}
                animate={
                  playing
                    ? {
                        scaleY: [0.3, Math.random() * 0.7 + 0.3, 0.3],
                        opacity: [0.5, 1, 0.5],
                      }
                    : { scaleY: isBefore ? 0.15 : 0.2, opacity: isBefore ? 0.2 : 0.3 }
                }
                transition={{
                  duration: isBefore ? 2 : 0.7 + Math.random() * 0.3,
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: isBefore ? 'linear' : 'easeInOut',
                }}
                style={{ height: '100%', transformOrigin: 'bottom' }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">Demo</span>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-3" aria-label={isBefore ? 'Before Halo Audio' : 'After Halo Audio'}>
        {(isBefore ? beforePoints : afterPoints).map((point) => (
          <li key={point} className="flex items-start gap-3">
            {isBefore ? (
              <XCircle size={16} className="text-gray-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
            ) : (
              <CheckCircle size={16} className="text-halo-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
            )}
            <span className={isBefore ? 'text-gray-500 text-sm' : 'text-gray-300 text-sm'}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BeforeAfter() {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="before-after"
      ref={ref}
      className="relative py-32 px-6"
      aria-labelledby="before-after-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">
            The Difference
          </span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2
          id="before-after-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight"
        >
          Hear the Difference{' '}
          <span className="text-halo-gold">Sound Makes.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-500 text-center mb-16 max-w-xl mx-auto"
        >
          Press play on both cards. Then ask yourself which brand you’d remember tomorrow.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <AudioCard
              variant="before"
              playing={beforePlaying}
              onToggle={() => setBeforePlaying((v) => !v)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <AudioCard
              variant="after"
              playing={afterPlaying}
              onToggle={() => setAfterPlaying((v) => !v)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

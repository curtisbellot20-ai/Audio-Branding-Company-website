'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="final-cta"
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Backgrounds */}
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Halo rings */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <div
          className="halo-ring"
          style={{ width: 700, height: 700, animationDelay: '0s', opacity: 0.4 }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <div
          className="halo-ring"
          style={{ width: 450, height: 450, animationDelay: '1.5s', opacity: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-8 justify-center"
        >
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">
            Your Sound Awaits
          </span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="font-display font-bold text-5xl md:text-7xl leading-tight mb-8"
        >
          Ready To Give Your Brand
          <br />
          A Sound{' '}
          <span className="gold-shimmer">People Remember?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Your logo has a look. Your website has a design. Your brand has a story.
          <br className="hidden md:block" />
          Now it’s time to give it a{' '}
          <strong className="text-white">sound</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#quiz"
            className="btn-gold px-10 py-5 text-base font-bold tracking-wide shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            aria-label="Create my Halo audio brand"
          >
            Create My Halo →
          </a>
          <a
            href="#sound-journey"
            className="btn-ghost px-8 py-5 text-base font-semibold"
            aria-label="Hear audio examples"
          >
            Hear Examples First
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-gray-700 text-sm"
        >
          No commitment required &bull; Free Audio Branding Scorecard included &bull; 7–14 day delivery
        </motion.p>
      </div>
    </section>
  );
}

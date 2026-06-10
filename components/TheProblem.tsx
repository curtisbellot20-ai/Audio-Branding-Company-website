'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function TheProblem() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="the-problem" ref={ref} className="relative py-32 px-6" aria-labelledby="problem-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-ivory" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-8 h-px bg-halo-navy/30" />
          <span className="text-halo-navy text-xs tracking-[0.3em] uppercase font-semibold">The Gap</span>
          <div className="w-8 h-px bg-halo-navy/30" />
        </motion.div>

        <motion.h2 id="problem-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-6xl text-halo-navy mb-8 leading-tight">
          Most Brands Look Good.<br />Few Sound Memorable.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }}
          className="text-gray-600 text-lg leading-relaxed">
          Your logo, colors, and website help people recognize you visually. But sound creates
          memory, emotion, and repetition. Halo Audio turns your brand name into a reusable
          marketing asset customers can hear, remember, and repeat.
        </motion.p>
      </div>
    </section>
  );
}

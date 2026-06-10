'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PositioningStrip() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <section ref={ref} className="relative py-14 px-6 border-y border-white/5" aria-label="Who we serve">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center text-sm md:text-base text-gray-400 leading-relaxed tracking-wide"
      >
        Built for venues, restaurants, service brands, tutors, salons, nonprofits, and local
        businesses that want to sound more memorable.
      </motion.p>
    </section>
  );
}

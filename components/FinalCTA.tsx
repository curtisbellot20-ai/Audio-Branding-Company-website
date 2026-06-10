'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="final-cta" ref={ref} className="relative py-32 px-6" aria-labelledby="final-cta-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,97,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2 id="final-cta-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}
          className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
          Make Your Brand <span className="text-halo-gold">Easier To Remember.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.8 }}
          className="text-gray-400 text-lg mb-12 leading-relaxed">
          Give your business a sound people can recognize, repeat, and connect with.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
          <a href="mailto:myhaloaudio@gmail.com?subject=Audio%20Strategy%20Call" className="btn-gold inline-block px-12 py-5 text-base font-bold tracking-wide">
            Book an Audio Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}

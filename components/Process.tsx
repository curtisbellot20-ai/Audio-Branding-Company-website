'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  { num: '01', title: 'Discover', desc: 'We learn your brand, audience, offer, and customer emotion.' },
  { num: '02', title: 'Create', desc: 'We develop your signature audio direction and produce your branded asset.' },
  { num: '03', title: 'Deploy', desc: 'You receive files and guidance for using your audio across content, events, ads, and customer touchpoints.' },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="process" ref={ref} className="relative py-32 px-6" aria-labelledby="process-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-ivory" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-navy/30" />
          <span className="text-halo-navy text-xs tracking-[0.3em] uppercase font-semibold">Process</span>
          <div className="w-8 h-px bg-halo-navy/30" />
        </motion.div>
        <motion.h2 id="process-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-halo-navy text-center mb-20 leading-tight">
          A Simple Process For A Stronger Brand Sound
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              className="text-center"
            >
              <p className="font-display text-halo-gold-dim text-5xl font-bold mb-4">{step.num}</p>
              <h3 className="font-display font-bold text-2xl text-halo-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const offers = [
  {
    name: 'Halo Essentials',
    tagline: 'For businesses that need one memorable branded audio asset.',
    includes: ['Short sonic logo', '15-second brand jingle', 'Social-ready audio file', 'Commercial usage guidance'],
    cta: 'Start With Essentials',
    highlight: false,
  },
  {
    name: 'Halo Identity',
    tagline: 'For businesses that want a complete sound branding system.',
    includes: ['Sonic logo', '30–45 second brand audio', 'CTA version', 'Social media cutdowns', 'Audio usage strategy'],
    cta: 'Build My Identity',
    highlight: true,
  },
  {
    name: 'Halo Growth Club',
    tagline: 'Private member access for businesses that want ongoing audio marketing ideas and preferred pricing.',
    includes: ['Member pricing', 'Priority scheduling', 'Monthly audio marketing ideas', 'Seasonal promo concepts', 'Early access to new services'],
    cta: 'Request Access',
    highlight: false,
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="services" ref={ref} className="relative py-32 px-6" aria-labelledby="services-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/50" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Services</span>
          <div className="w-8 h-px bg-halo-gold/50" />
        </motion.div>
        <motion.h2 id="services-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          Sound Branding, <span className="text-halo-gold">Done Right.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Three focused offers — from a single signature asset to a complete sonic identity
          system, plus ongoing access to audio marketing strategy.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.article key={offer.name}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                offer.highlight
                  ? 'bg-halo-dark border-halo-gold/40 shadow-[0_0_50px_rgba(201,169,97,0.1)]'
                  : 'bg-halo-dark border-white/5 hover:border-white/15'
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs px-3 py-1 rounded-full font-bold bg-halo-gold text-halo-black">Recommended</span>
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-white mb-3">{offer.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{offer.tagline}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${offer.highlight ? 'text-halo-gold' : 'text-gray-500'}`} aria-hidden="true" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:myhaloaudio@gmail.com" className={`text-center py-3.5 px-4 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${offer.highlight ? 'btn-gold' : 'btn-ghost'}`}>
                {offer.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

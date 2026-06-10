'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Smartphone, Globe, PartyPopper, Mic, PhoneCall, Radio, Heart, Share2 } from 'lucide-react';

const useCases = [
  { icon: Instagram, label: 'Instagram Reels' },
  { icon: Smartphone, label: 'TikTok Videos' },
  { icon: Globe, label: 'Website Intros' },
  { icon: PartyPopper, label: 'Event Walk-Ins' },
  { icon: Mic, label: 'Podcast Ads' },
  { icon: PhoneCall, label: 'Phone Hold Music' },
  { icon: Radio, label: 'Radio Ads' },
  { icon: Heart, label: 'Customer Thank-You Videos' },
  { icon: Share2, label: 'Referral Campaigns' },
];

export default function ReusableEverywhere() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="everywhere" ref={ref} className="relative py-32 px-6" aria-labelledby="everywhere-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/50" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Versatility</span>
          <div className="w-8 h-px bg-halo-gold/50" />
        </motion.div>
        <motion.h2 id="everywhere-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 leading-tight">
          Built To Be Reused Everywhere
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <motion.div key={u.label}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center gap-3 rounded-xl border border-white/5 bg-halo-dark py-8 px-4 hover:border-halo-gold/25 transition-colors duration-300"
              >
                <Icon size={20} className="text-halo-gold" aria-hidden="true" />
                <span className="text-gray-300 text-sm font-medium">{u.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Headphones, Zap } from 'lucide-react';

const steps = [
  { number: '01', icon: MessageSquare, title: 'Tell Us About Your Business', description: 'Complete our brand discovery process. We learn about your industry, audience, personality, goals, and what makes your business different. No two Halos are alike.', duration: 'Takes 15 minutes' },
  { number: '02', icon: Headphones, title: 'We Create Your Halo', description: 'Our audio branding team crafts your custom sound from scratch. No templates. No stock libraries. Pure original composition designed around your brand DNA.', duration: '7–14 day production' },
  { number: '03', icon: Zap, title: 'Launch It Everywhere', description: 'Receive your full audio package: multiple formats, commercial license, and a Brand Sound Guide. Deploy across your website, social media, ads, events, and beyond.', duration: 'Unlimited use. Forever.' },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="how-it-works" ref={ref} className="relative py-32 px-6" aria-labelledby="how-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">The Process</span><div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h2 id="how-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl text-center mb-16 leading-tight">
          Simple Process.<br /><span className="text-halo-gold">Extraordinary Results.</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }} className="relative text-center">
                <div className="relative mx-auto w-20 h-20 mb-8">
                  <div className="absolute inset-0 rounded-full border border-halo-gold/20" />
                  <div className="absolute inset-0 rounded-full bg-halo-dark flex items-center justify-center"><Icon size={28} className="text-halo-gold" aria-hidden="true" /></div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-halo-gold flex items-center justify-center"><span className="text-halo-black text-xs font-bold">{i + 1}</span></div>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{step.description}</p>
                <span className="text-halo-gold text-xs tracking-wide uppercase font-semibold">{step.duration}</span>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="text-center mt-16">
          <a href="#quiz" className="btn-gold px-10 py-4 font-bold">Start My Sound Journey</a>
        </motion.div>
      </div>
    </section>
  );
}

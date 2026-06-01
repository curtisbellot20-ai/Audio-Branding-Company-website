'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Halo Starter', tagline: 'For businesses ready to be heard.', price: '$497', period: 'one-time', features: ['Brand Anthem (60 sec)', 'MP3 + WAV files', 'Commercial license', '2 revision rounds', '14-day delivery', 'Brand Sound Brief'], cta: 'Start Here', highlight: false, badge: null },
  { name: 'Halo Growth', tagline: 'For brands ready to grow through sound.', price: '$997', period: 'one-time', features: ['Everything in Starter', 'Brand Anthem (60 + 30 sec)', 'Social Sound Pack (10 clips)', 'Podcast Intro & Outro', 'Website Atmosphere track', '3 revision rounds', '10-day delivery', 'Brand Sound Guide (PDF)'], cta: 'Get Halo Growth', highlight: true, badge: 'Most Popular' },
  { name: 'Halo Signature', tagline: 'The complete sonic brand experience.', price: '$2,497', period: 'one-time', features: ['Everything in Growth', 'Radio Ad System (30 + 60 sec)', 'Hold music (2 min loop)', 'Premium Brand Sound Guide', 'Unlimited revisions', '7-day priority delivery', 'Quarterly refresh (1 year)', '1-on-1 strategy call'], cta: 'Go Signature', highlight: false, badge: 'Premium' },
  { name: 'Halo Growth Club', tagline: 'Ongoing audio for growing businesses.', price: '$297', period: '/month', features: ['2 new audio assets/month', 'Social Sound Refresh (monthly)', 'Seasonal audio campaigns', 'Priority support', 'New service early access', 'Cumulative brand audio library'], cta: 'Join the Club', highlight: false, badge: 'Subscription' },
];

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="pricing" ref={ref} className="relative py-32 px-6" aria-labelledby="pricing-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Pricing</span><div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h2 id="pricing-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          Invest In Sound.<br /><span className="text-halo-gold">Build A Legacy.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Every package includes 100% original audio, full commercial rights, and files ready to deploy across every platform.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.article key={plan.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${plan.highlight ? 'bg-halo-black border-halo-gold/40 shadow-[0_0_60px_rgba(212,175,55,0.12)]' : 'bg-halo-black border-white/5 hover:border-white/15'}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${plan.highlight ? 'bg-halo-gold text-halo-black' : plan.badge === 'Subscription' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white border border-white/20'}`}>{plan.badge}</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-white mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.tagline}</p>
              </div>
              <div className="mb-6 flex items-end gap-1">
                <span className={`font-display font-bold text-4xl ${plan.highlight ? 'text-halo-gold' : 'text-white'}`}>{plan.price}</span>
                <span className="text-gray-600 text-sm mb-1.5">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (<li key={feature} className="flex items-start gap-3"><Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-halo-gold' : 'text-gray-500'}`} aria-hidden="true" /><span className="text-gray-400 text-sm">{feature}</span></li>))}
              </ul>
              <a href="#quiz" className={`text-center py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${plan.highlight ? 'btn-gold' : 'btn-ghost'}`}>{plan.cta}</a>
            </motion.article>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="text-center text-gray-600 text-sm mt-10">
          Not sure which package? <a href="#quiz" className="text-halo-gold hover:underline">Take the quiz</a> and we’ll recommend the right fit.
        </motion.p>
      </div>
    </section>
  );
}

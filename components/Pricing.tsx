'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Halo Essential',
    tagline: 'Give Your Brand A Voice',
    price: '$497',
    period: 'one-time',
    highlight: false,
    badge: null,
    cta: 'Create My Halo',
    ctaHref: 'mailto:myhaloaudio@gmail.com',
    features: [
      '1 Custom Audio Branding Song (1–5 Minutes)',
      '1 Custom Jingle (15–45 Seconds)',
      '2 Revisions',
      'Commercial Usage Rights',
      'MP3 + WAV Delivery',
    ],
  },
  {
    name: 'Halo Signature',
    tagline: 'Build Your Complete Audio Identity',
    price: '$1,997',
    period: 'one-time',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Build My Audio Identity',
    ctaHref: 'mailto:myhaloaudio@gmail.com',
    features: [
      '8 Custom Audio Branding Songs',
      '4 Custom Jingles',
      '2 Revisions Per Song',
      'Commercial Usage Rights',
      'MP3 + WAV Delivery',
    ],
  },
  {
    name: 'Halo Growth Club',
    tagline: 'Keep Your Brand Sounding Fresh',
    price: '$150',
    period: '/month',
    highlight: false,
    badge: 'Subscription',
    cta: 'Join The Club',
    ctaHref: 'mailto:myhaloaudio@gmail.com',
    features: [
      '60% Off All Future Halo Audio Orders While Subscribed',
      'Priority Client Status',
      'Faster Project Turnaround',
      'Access To Exclusive Promotions',
      'Lock In Preferred Pricing',
    ],
    savingsNote: {
      label: 'Halo Essential',
      regular: '$497',
      member: '$198.80',
    },
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" ref={ref} className="relative py-32 px-6" aria-labelledby="pricing-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Pricing</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2 id="pricing-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          Invest In Sound.<br /><span className="text-halo-gold">Build A Legacy.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Every package includes 100% original audio, full commercial rights, and files ready to deploy across every platform.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.article key={plan.name}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                plan.highlight
                  ? 'bg-halo-black border-halo-gold/50 shadow-[0_0_60px_rgba(212,175,55,0.15)]'
                  : 'bg-halo-black border-white/5 hover:border-white/15'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    plan.highlight
                      ? 'bg-halo-gold text-halo-black'
                      : 'bg-blue-600 text-white'
                  }`}>{plan.badge}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm italic">{plan.tagline}</p>
              </div>

              <div className="mb-6 flex items-end gap-1">
                <span className={`font-display font-bold text-4xl ${
                  plan.highlight ? 'text-halo-gold' : 'text-white'
                }`}>{plan.price}</span>
                <span className="text-gray-600 text-sm mb-1.5">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${
                      plan.highlight ? 'text-halo-gold' : 'text-gray-500'
                    }`} aria-hidden="true" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Savings callout for Growth Club */}
              {'savingsNote' in plan && plan.savingsNote && (
                <div className="mb-6 rounded-xl border border-halo-gold/20 bg-halo-gold/5 p-4 text-sm">
                  <p className="text-gray-400 mb-2 font-semibold text-xs uppercase tracking-wider">Savings Example</p>
                  <p className="text-gray-300 font-semibold mb-1">{plan.savingsNote.label}</p>
                  <p className="text-gray-500 line-through text-xs">Regular Price: {plan.savingsNote.regular}</p>
                  <p className="text-halo-gold font-bold text-lg">Member Price: {plan.savingsNote.member}</p>
                  <p className="text-gray-600 text-xs mt-1">Plus applicable taxes and fees</p>
                </div>
              )}

              <a href={plan.ctaHref}
                className={`text-center py-3.5 px-4 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
                  plan.highlight ? 'btn-gold' : 'btn-ghost'
                }`}>
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-10">
          Questions? <a href="mailto:myhaloaudio@gmail.com" className="text-halo-gold hover:underline">Email us</a> or DM{' '}
          <a href="https://instagram.com/halo_audio" target="_blank" rel="noopener noreferrer" className="text-halo-gold hover:underline">@halo_audio</a> on Instagram.
        </motion.p>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Sparkles } from 'lucide-react';

const membershipBenefits = [
  '20% Off All Halo Audio Services',
  'Audio Branding Resource Library',
  'Monthly Halo Insider Newsletter',
  'Seasonal Marketing Calendars',
  'Audio Asset Usage Guides',
  'Locked-In Member Pricing',
];

const learnPoints = [
  'Get More Value From Your Audio Assets',
  'Use Audio To Increase Brand Recognition',
  'Repurpose One Song Into Weeks Of Content',
  'Improve Customer Recall',
  'Strengthen Social Media Marketing',
  'Create Better Customer Experiences',
  'Increase Referrals Through Consistent Branding',
];

const partnerTiers = [
  { name: 'Align & Innovate Clients', detail: 'Receive 10% Off Halo Audio Services.' },
  { name: 'JadaPay Merchants', detail: 'Receive 10% Off Halo Audio Services.' },
  { name: 'Halo Growth Club Members', detail: 'Receive 20% Off Halo Audio Services.' },
  { name: 'Halo Growth Club + Partner Status', detail: 'Businesses that are both Halo Growth Club members and active Align & Innovate clients and/or JadaPay merchants receive our maximum discount of 30% Off Halo Audio Services.' },
];

export default function GrowthClub() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="growth-club" ref={ref} className="relative py-32 px-6 overflow-hidden" aria-labelledby="growth-club-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,169,97,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Membership</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        {/* Title + price */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="text-center mb-4">
          <h2 id="growth-club-heading" className="font-display font-bold text-4xl md:text-5xl mb-3">
            Halo <span className="text-halo-gold">Growth Club</span>
          </h2>
          <p className="font-display text-2xl md:text-3xl text-white">
            $50<span className="text-gray-500 text-lg"> / month</span>
          </p>
        </motion.div>

        {/* Headline + description */}
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display font-bold text-2xl md:text-3xl text-center mb-6 max-w-3xl mx-auto leading-snug">
          Turn Your Audio Into A Marketing Asset
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Halo Growth Club gives business owners access to exclusive audio branding resources, marketing insights, promotional ideas, and preferred pricing on all Halo Audio services.
        </motion.p>

        {/* Benefits + Learn grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7 }}
            className="rounded-2xl border border-white/5 bg-halo-dark/60 p-8">
            <h4 className="text-halo-gold text-xs tracking-[0.25em] uppercase font-semibold mb-5">Membership Includes</h4>
            <ul className="space-y-3">
              {membershipBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-halo-gold" aria-hidden="true" />
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45, duration: 0.7 }}
            className="rounded-2xl border border-white/5 bg-halo-dark/60 p-8">
            <h4 className="text-halo-gold text-xs tracking-[0.25em] uppercase font-semibold mb-5">What You&apos;ll Learn</h4>
            <ul className="space-y-3">
              {learnPoints.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Sparkles size={14} className="mt-0.5 flex-shrink-0 text-halo-gold" aria-hidden="true" />
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Savings example */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.7 }}
          className="rounded-2xl border border-halo-gold/30 bg-gradient-to-br from-halo-gold/5 to-transparent p-8 mb-12 text-center">
          <h4 className="text-halo-gold text-xs tracking-[0.25em] uppercase font-semibold mb-4">Member Savings Example</h4>
          <p className="text-white font-display font-bold text-lg mb-2">Halo Essentials</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <p className="text-gray-500">Regular Price: <span className="line-through">$497</span></p>
            <p className="text-halo-gold font-bold text-lg">Member Price: $397.60</p>
            <p className="text-gray-400">Savings: <span className="text-white font-semibold">$99.40</span></p>
          </div>
        </motion.div>

        {/* Partner discounts */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55, duration: 0.7 }}
          className="rounded-2xl border border-white/5 bg-halo-dark/60 p-8 mb-12">
          <h4 className="text-halo-gold text-xs tracking-[0.25em] uppercase font-semibold mb-6 text-center">Partner Discounts</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {partnerTiers.map((tier) => (
              <div key={tier.name} className="flex items-start gap-3">
                <Check size={14} className="mt-1 flex-shrink-0 text-halo-gold" aria-hidden="true" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{tier.name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{tier.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Not a partner yet */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.7 }}
          className="rounded-2xl border border-white/5 bg-halo-dark/60 p-8 mb-16 text-center">
          <h4 className="text-white font-display font-bold text-xl mb-2">Not A Partner Yet?</h4>
          <p className="text-gray-400 mb-2">No problem.</p>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re not currently working with Align &amp; Innovate or JadaPay, you can still join Halo Growth Club and receive 20% Off immediately. Many members later choose to become Align &amp; Innovate clients or JadaPay merchants, allowing them to unlock the full 30% discount while gaining access to additional business growth, automation, consulting, and payment processing solutions.
          </p>
          <p className="text-halo-gold text-sm font-semibold tracking-wide">
            Help your business grow through better branding, smarter marketing, and stronger systems—all under one ecosystem.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="mailto:myhaloaudio@gmail.com?subject=Join%20Halo%20Growth%20Club" className="btn-gold px-10 py-4 text-base font-bold tracking-wide shadow-[0_0_40px_rgba(201,169,97,0.3)]">
            Join Halo Growth Club
          </a>
          <a href="mailto:myhaloaudio@gmail.com?subject=Halo%20Partner%20Benefits" className="btn-ghost px-8 py-4 text-base font-semibold">
            Ask About Partner Benefits
          </a>
        </motion.div>

        {/* Final line */}
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="text-center text-gray-500 text-sm tracking-wide">
          Your Brand Looks Good. Now Let It Be Heard.
        </motion.p>
      </div>
    </section>
  );
}

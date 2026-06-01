'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Thompson',
    role: 'Owner, Ember & Oak Restaurant',
    industry: 'Restaurant',
    before:
      'Before Halo Audio, our social media content felt just like everyone else’s. Generic background music, no personality. We blended in completely.',
    after:
      'Now every video starts with our brand anthem and people actually recognize it. Customers have told me they feel the vibe before they even walk through the door. Reservations are up 40% and we get tagged in posts every single day.',
    result: '+40% reservations',
    initials: 'MT',
  },
  {
    name: 'Pastor Denise Williams',
    role: 'Lead Pastor, Elevation Community Church',
    industry: 'Church',
    before:
      'Our Sunday streams felt amateur. The music we used was either too corporate or too generic. People weren’t sharing our content and our online presence was flat.',
    after:
      'Our custom anthem gave us an identity. Every service now opens with a sound that’s unmistakably us. Our congregation grew by over 200 people in 8 months and our podcast downloads tripled.',
    result: '+200 congregation members',
    initials: 'DW',
  },
  {
    name: 'Lena Rodriguez',
    role: 'Realtor, Lena Rodriguez Luxury Homes',
    industry: 'Real Estate',
    before:
      'My listing videos were good visually but they sounded like every other realtor. No differentiation. Clients couldn’t remember which agent they saw online.',
    after:
      'With my Halo Signature sound, every video intro instantly says “Lena Rodriguez” before they even see my face. I had 3 clients this quarter who said they found me because they recognized my sound from a previous video.',
    result: '3 referral clients from audio alone',
    initials: 'LR',
  },
  {
    name: 'Devon Blake',
    role: 'Host, The Grind & Grow Podcast',
    industry: 'Podcast',
    before:
      'I was using a royalty-free intro that 500 other podcasters were using. It was embarrassing. My show sounded like a template, not a brand.',
    after:
      'My Podcast Identity from Halo Audio is the first thing listeners compliment. I went from 800 monthly listeners to over 12,000 in 6 months. The sound made people take the content seriously.',
    result: '15x listener growth in 6 months',
    initials: 'DB',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 px-6"
      aria-labelledby="testimonials-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">
            Client Stories
          </span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 leading-tight"
        >
          Businesses That Found{' '}
          <span className="text-halo-gold">Their Sound.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
              className="relative bg-halo-dark rounded-2xl border border-white/5 p-8 hover:border-halo-gold/15 transition-all duration-500 group"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 60%)',
                }}
              />

              <Quote size={24} className="text-halo-gold/40 mb-6" aria-hidden="true" />

              {/* Before */}
              <div className="mb-4">
                <p className="text-xs text-gray-600 tracking-widest uppercase mb-2">Before</p>
                <p className="text-gray-500 text-sm leading-relaxed italic">&ldquo;{t.before}&rdquo;</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-halo-gold text-xs font-semibold tracking-widest uppercase">
                  After Halo Audio
                </span>
                <div className="flex-1 h-px bg-halo-gold/20" />
              </div>

              {/* After */}
              <div className="mb-6">
                <p className="text-white text-sm leading-relaxed">&ldquo;{t.after}&rdquo;</p>
              </div>

              {/* Result */}
              <div className="inline-block bg-halo-gold/10 border border-halo-gold/20 rounded-lg px-3 py-1.5 mb-6">
                <p className="text-halo-gold text-xs font-semibold">↗️ {t.result}</p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-halo-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-halo-gold font-bold text-sm" aria-hidden="true">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-600">
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

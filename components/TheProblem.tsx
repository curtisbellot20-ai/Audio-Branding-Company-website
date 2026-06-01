'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const problems = [
  { icon: '👁️', title: 'Every business looks the same.', desc: 'Same logo templates. Same stock photos. Same color palettes. Standing out visually is harder than ever.' },
  { icon: '🗣️', title: 'Every business sounds the same.', desc: 'Generic stock music. No brand voice. No audio identity. Customers hear nothing that makes your brand feel different or remembered.' },
  { icon: '🎯', title: 'Customers forget fast.', desc: 'Without emotional memory — triggered by sound — your brand is invisible the moment the tab closes.' },
];

export default function TheProblem() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="the-problem" ref={ref} className="relative py-32 px-6 overflow-hidden" aria-labelledby="problem-heading">
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)' }} />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">The Problem</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        {/* Main headline — moved from Hero */}
        <motion.h2
          id="problem-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl text-center mb-6 leading-tight"
        >
          Your Brand{' '}
          <span className="gold-shimmer">Looks Good.</span>
          <br />
          But What Does It{' '}
          <span className="gold-shimmer">Sound Like?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          Halo Audio creates custom music, audio branding, and emotional sound
          experiences that help businesses become{' '}
          <em className="text-white not-italic font-medium">unforgettable.</em>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-center max-w-2xl mx-auto mb-20"
        >
          You’ve invested in a logo. A website. Social media. But something is still
          missing — and your customers feel it, even if they can’t name it.
        </motion.p>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="relative bg-halo-dark rounded-2xl p-8 border border-white/5 hover:border-halo-gold/20 transition-all duration-500 group"
            >
              <div aria-hidden="true" className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)' }} />
              <div className="text-4xl mb-6">{p.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-halo-dark rounded-3xl p-12 border border-halo-gold/10 relative overflow-hidden"
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.07) 0%, transparent 60%)' }} />
          <p className="relative text-gray-400 text-sm tracking-widest uppercase mb-6">The solution</p>
          <blockquote className="relative font-display font-bold text-2xl md:text-4xl text-white leading-tight">
            &ldquo;Halo Audio creates{' '}
            <span className="text-halo-gold">emotional memory through sound.</span>
            <br />
            So your business isn’t just seen — it’s{' '}
            <span className="text-halo-gold">felt.</span>&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

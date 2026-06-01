'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HaloLogo from '@/components/HaloLogo';
import { getAnalyser } from '@/components/Hero';

function FinalSoundbar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let t = 0;
    const dataArray = new Uint8Array(128);
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const analyser = getAnalyser();
      const totalBars = 80;
      const gap = 3;
      const barW = (canvas.width - gap * (totalBars - 1)) / totalBars;
      const centerY = canvas.height / 2;
      if (analyser) analyser.getByteFrequencyData(dataArray);
      for (let i = 0; i < totalBars; i++) {
        let amp: number;
        if (analyser) {
          const binIndex = Math.floor((i / totalBars) * (dataArray.length * 0.7));
          const raw = dataArray[binIndex] / 255;
          const wave = Math.abs(Math.sin((i / totalBars) * Math.PI * 4 + t * 0.8)) * 0.15;
          amp = raw * 0.85 + wave;
        } else {
          const phase = (i / totalBars) * Math.PI * 6;
          amp = Math.abs(Math.sin(phase + t * 1.2) * 0.5 + Math.sin(phase * 0.5 + t * 0.7) * 0.3 + Math.sin(phase * 2 + t * 1.8) * 0.2);
        }
        const barH = amp * canvas.height * 0.78 + 4;
        const x = i * (barW + gap);
        const grad = ctx.createLinearGradient(x, centerY - barH, x, centerY + barH);
        grad.addColorStop(0,    'rgba(212,175,55,0)');
        grad.addColorStop(0.15, `rgba(212,175,55,${0.25 + amp * 0.35})`);
        grad.addColorStop(0.5,  `rgba(245,226,122,${0.65 + amp * 0.35})`);
        grad.addColorStop(0.85, `rgba(212,175,55,${0.25 + amp * 0.35})`);
        grad.addColorStop(1,    'rgba(212,175,55,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, centerY - barH, barW, barH * 2, 2);
        ctx.fill();
      }
      t += 0.022;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" />;
}

function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5, delay: Math.random() * 8,
    duration: Math.random() * 8 + 6, drift: Math.random() * 30 - 15,
  }));
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute rounded-full bg-halo-gold"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, p.drift, 0], x: [0, p.drift * 0.4, 0], opacity: [0.05, 0.4, 0.05] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="final-cta" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 overflow-hidden" aria-labelledby="final-cta-heading">

      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 45%, transparent 70%)' }} />

      {/* Soundbar */}
      <div aria-hidden="true" className="absolute inset-0 opacity-35"><FinalSoundbar /></div>

      {/* Rings — vmin so they stay circular on mobile */}
      {[70, 44].map((s, i) => (
        <div key={s} aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="halo-ring" style={{ width: `${s}vmin`, height: `${s}vmin`, animationDelay: `${i * 0.8}s` }} />
        </div>
      ))}

      {/* Smoke */}
      {[...Array(4)].map((_, i) => (
        <div key={i} aria-hidden="true" className="smoke-particle" style={{ width: 220 + i * 70, height: 220 + i * 70, left: `${10 + i * 20}%`, top: `${15 + i * 12}%`, animationDelay: `${i * 1.8}s`, animationDuration: `${9 + i * 2}s` }} />
      ))}

      <ParticleField />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center w-full"
        >
          <HaloLogo size="xl" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Your Sound Awaits</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2 id="final-cta-heading" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.9 }}
          className="font-display font-bold text-4xl md:text-6xl leading-tight mb-8">
          Ready To Give Your Brand<br />A Sound <span className="gold-shimmer">People Remember?</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45, duration: 0.8 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Your logo has a look. Your website has a design. Your brand has a story.<br className="hidden md:block" />
          Now it&apos;s time to give it a <strong className="text-white">sound</strong>.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#quiz" className="btn-gold px-10 py-5 text-base font-bold tracking-wide shadow-[0_0_40px_rgba(212,175,55,0.3)]">Create My Halo →</a>
          <a href="#sound-journey" className="btn-ghost px-8 py-5 text-base font-semibold">Hear Examples First</a>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.75 }}
          className="mt-8 text-gray-700 text-sm">
          No commitment required &bull; Free Audio Branding Scorecard included &bull; 7–14 day delivery
        </motion.p>
      </div>
    </section>
  );
}

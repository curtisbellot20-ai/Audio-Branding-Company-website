'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HaloLogo from '@/components/HaloLogo';

// Large animated soundbar canvas
function HeroSoundbar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const totalBars = 80;
      const gap = 3;
      const barW = (canvas.width - gap * (totalBars - 1)) / totalBars;
      const centerY = canvas.height / 2;

      for (let i = 0; i < totalBars; i++) {
        const x = i * (barW + gap);
        const phase = (i / totalBars) * Math.PI * 6;
        const wave1 = Math.sin(phase + t * 1.2) * 0.5;
        const wave2 = Math.sin(phase * 0.5 + t * 0.7) * 0.3;
        const wave3 = Math.sin(phase * 2 + t * 1.8) * 0.2;
        const amp = Math.abs(wave1 + wave2 + wave3);
        const barH = amp * canvas.height * 0.75 + 4;

        // Gradient per bar
        const grad = ctx.createLinearGradient(x, centerY - barH, x, centerY + barH);
        grad.addColorStop(0,   'rgba(212,175,55,0)');
        grad.addColorStop(0.2, `rgba(212,175,55,${0.3 + amp * 0.4})`);
        grad.addColorStop(0.5, `rgba(245,226,122,${0.7 + amp * 0.3})`);
        grad.addColorStop(0.8, `rgba(212,175,55,${0.3 + amp * 0.4})`);
        grad.addColorStop(1,   'rgba(212,175,55,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, centerY - barH, barW, barH * 2, 2);
        ctx.fill();
      }

      t += 0.022;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}

// Floating gold particle field
function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 6,
    drift: Math.random() * 30 - 15,
  }));

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-halo-gold"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, p.drift, 0],
            x: [0, p.drift * 0.4, 0],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Base dark background */}
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />

      {/* Radial gold glow behind logo */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 45%, transparent 70%)',
        }}
      />

      {/* Deep soundbar — fills full hero height, sits behind content */}
      <div aria-hidden="true" className="absolute inset-0 opacity-30">
        <HeroSoundbar />
      </div>

      {/* Halo rings */}
      {[600, 420, 260].map((s, i) => (
        <div
          key={s}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="halo-ring"
            style={{ width: s, height: s, animationDelay: `${i * 0.8}s` }}
          />
        </div>
      ))}

      {/* Smoke drifts */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="smoke-particle"
          style={{
            width:  220 + i * 70,
            height: 220 + i * 70,
            left:  `${10 + i * 20}%`,
            top:   `${15 + i * 12}%`,
            animationDelay:    `${i * 1.8}s`,
            animationDuration: `${9 + i * 2}s`,
          }}
        />
      ))}

      <ParticleField />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 pt-24 pb-20">

        {/* Logo — hero centrepiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <HaloLogo size="xl" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 mb-10"
        >
          We Create The Sound That{' '}
          <span className="text-halo-gold font-semibold">Connects. Inspires. Converts.</span>
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Your Brand{' '}
          <span className="gold-shimmer">Looks Good.</span>
          <br />
          But What Does It{' '}
          <span className="gold-shimmer">Sound Like?</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Halo Audio creates custom music, audio branding, and emotional sound
          experiences that help businesses become{' '}
          <em className="text-white not-italic font-medium">unforgettable.</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#quiz"
            className="btn-gold px-10 py-4 text-base font-bold tracking-wide shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            Get My Custom Brand Sound
          </a>
          <a href="#sound-journey" className="btn-ghost px-8 py-4 text-base font-semibold">
            Hear Examples
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="wave-bar h-5" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span>500+ Brands Transformed</span>
          </div>
          <span className="hidden sm:block text-gray-800">|</span>
          <span>Custom audio in 7–14 days</span>
          <span className="hidden sm:block text-gray-800">|</span>
          <span>100% original, never stock</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-gray-700 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-halo-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

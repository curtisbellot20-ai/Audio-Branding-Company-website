'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HaloLogo from '@/components/HaloLogo';
import { getAudioEl } from '@/components/AtmosphereToggle';

let analyser: AnalyserNode | null = null;
let audioCtx: AudioContext | null = null;
let audioSource: MediaElementAudioSourceNode | null = null;
let wired = false;

export function getAnalyser() { return analyser; }

function wireAnalyser() {
  if (wired) return;
  const el = getAudioEl();
  if (!el) return;
  wired = true;
  audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.82;
  audioSource = audioCtx.createMediaElementSource(el);
  audioSource.connect(analyser);
  analyser.connect(audioCtx.destination);
}

function HeroSoundbar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let t = 0;
    const dataArray = new Uint8Array(128);

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

      const hasRealData = analyser !== null;
      if (hasRealData) analyser!.getByteFrequencyData(dataArray);

      for (let i = 0; i < totalBars; i++) {
        let amp: number;
        if (hasRealData) {
          const binIndex = Math.floor((i / totalBars) * (dataArray.length * 0.7));
          const raw = dataArray[binIndex] / 255;
          const phase = (i / totalBars) * Math.PI * 4;
          const wave = Math.abs(Math.sin(phase + t * 0.8)) * 0.15;
          amp = raw * 0.85 + wave;
        } else {
          const phase = (i / totalBars) * Math.PI * 6;
          amp = Math.abs(
            Math.sin(phase + t * 1.2) * 0.5 +
            Math.sin(phase * 0.5 + t * 0.7) * 0.3 +
            Math.sin(phase * 2 + t * 1.8) * 0.2
          );
        }

        const barH = amp * canvas.height * 0.78 + 4;
        const x = i * (barW + gap);
        const grad = ctx.createLinearGradient(x, centerY - barH, x, centerY + barH);
        grad.addColorStop(0,   'rgba(212,175,55,0)');
        grad.addColorStop(0.15,`rgba(212,175,55,${0.25 + amp * 0.35})`);
        grad.addColorStop(0.5, `rgba(245,226,122,${0.65 + amp * 0.35})`);
        grad.addColorStop(0.85,`rgba(212,175,55,${0.25 + amp * 0.35})`);
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

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" />;
}

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
        <motion.div key={p.id} className="absolute rounded-full bg-halo-gold"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, p.drift, 0], x: [0, p.drift * 0.4, 0], opacity: [0.05, 0.4, 0.05] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    const onInteract = () => wireAnalyser();
    window.addEventListener('click', onInteract, { once: true });
    return () => window.removeEventListener('click', onInteract);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden" aria-label="Hero">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 45%, transparent 70%)' }} />

      <div aria-hidden="true" className="absolute inset-0 opacity-35"><HeroSoundbar /></div>

      {/* Two rings using vmin so they stay perfectly circular on all screen sizes */}
      {[70, 44].map((s, i) => (
        <div key={s} aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="halo-ring" style={{ width: `${s}vmin`, height: `${s}vmin`, animationDelay: `${i * 0.8}s` }} />
        </div>
      ))}

      {[...Array(4)].map((_, i) => (
        <div key={i} aria-hidden="true" className="smoke-particle" style={{ width: 220 + i * 70, height: 220 + i * 70, left: `${10 + i * 20}%`, top: `${15 + i * 12}%`, animationDelay: `${i * 1.8}s`, animationDuration: `${9 + i * 2}s` }} />
      ))}

      <ParticleField />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 flex justify-center w-full"
        >
          <HaloLogo size="xl" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-xs md:text-sm tracking-[0.28em] uppercase text-gray-500 mb-12">
          We Create The Sound That{' '}
          <span className="text-halo-gold font-semibold">Connects. Inspires. Converts.</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#quiz" className="btn-gold px-10 py-4 text-base font-bold tracking-wide shadow-[0_0_40px_rgba(212,175,55,0.3)]">Get My Custom Brand Sound</a>
          <a href="#sound-journey" className="btn-ghost px-8 py-4 text-base font-semibold">Hear Examples</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-hidden="true">{[...Array(8)].map((_, i) => (<div key={i} className="wave-bar h-5" style={{ animationDelay: `${i * 0.1}s` }} />))}</div>
            <span>500+ Brands Transformed</span>
          </div>
          <span className="hidden sm:block text-gray-800">|</span>
          <span>Custom audio in 7–14 days</span>
          <span className="hidden sm:block text-gray-800">|</span>
          <span>100% original, never stock</span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-gray-700 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="w-px h-8 bg-gradient-to-b from-halo-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}

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

function HaloBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="halo-ring absolute top-1/2 left-1/2"
        style={{ width: '70vmin', height: '70vmin', transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="halo-ring absolute top-1/2 left-1/2"
        style={{ width: '100vmin', height: '100vmin', transform: 'translate(-50%, -50%)', animationDelay: '1s' }}
      />
      <div
        className="halo-ring absolute top-1/2 left-1/2"
        style={{ width: '135vmin', height: '135vmin', transform: 'translate(-50%, -50%)', animationDelay: '2s' }}
      />
      <div
        className="smoke-particle"
        style={{ width: '40vmin', height: '40vmin', top: '20%', left: '15%' }}
      />
      <div
        className="smoke-particle"
        style={{ width: '50vmin', height: '50vmin', top: '55%', left: '65%', animationDelay: '3s' }}
      />
    </div>
  );
}

function Waveform() {
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

      const totalBars = 56;
      const gap = 5;
      const barW = (canvas.width - gap * (totalBars - 1)) / totalBars;
      const centerY = canvas.height / 2;

      if (analyser) analyser.getByteFrequencyData(dataArray);
      const hasRealData = analyser !== null;

      for (let i = 0; i < totalBars; i++) {
        let amp: number;
        if (hasRealData) {
          const binIndex = Math.floor((i / totalBars) * (dataArray.length * 0.7));
          const raw = dataArray[binIndex] / 255;
          const wave = Math.abs(Math.sin((i / totalBars) * Math.PI * 4 + t * 0.8)) * 0.12;
          amp = raw * 0.85 + wave;
        } else {
          const phase = (i / totalBars) * Math.PI * 5;
          amp = Math.abs(Math.sin(phase + t * 1.1) * 0.45 + Math.sin(phase * 0.5 + t * 0.6) * 0.25);
        }

        const barH = Math.max(amp * canvas.height * 0.7, 3);
        const x = i * (barW + gap);
        ctx.fillStyle = `rgba(201,169,97,${0.35 + amp * 0.5})`;
        ctx.beginPath();
        ctx.roundRect(x, centerY - barH / 2, barW, barH, barW / 2);
        ctx.fill();
      }

      t += 0.018;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="w-full h-16 md:h-20" />;
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
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 38%, rgba(201,169,97,0.06) 0%, transparent 70%)' }} />
      <HaloBackdrop />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10 flex justify-center w-full">
          <HaloLogo size="md" />
        </motion.div>

        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-halo-gold text-xs tracking-[0.35em] uppercase font-semibold mb-6">
          Sonic Branding Studio
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-8">
          Your Customers Remember<br className="hidden sm:block" /> What They <span className="text-halo-gold">Hear.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Halo Audio creates signature audio assets that help businesses become unforgettable
          across social media, events, ads, phone systems, and customer experiences.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full">
          <a href="#contact" className="btn-gold px-10 py-4 text-sm md:text-base font-bold tracking-wide w-full sm:w-auto text-center">
            Get In Touch
          </a>
          <a href="#audio-showcase" className="btn-ghost px-8 py-4 text-sm md:text-base font-semibold w-full sm:w-auto text-center">
            Hear Examples
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.85 }} className="w-full max-w-xl mx-auto">
          <Waveform />
        </motion.div>
      </div>
    </section>
  );
}

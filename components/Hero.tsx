'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function WaveformBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number, t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bars = 80, barWidth = canvas.width / bars;
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth + barWidth / 2;
        const phase = (i / bars) * Math.PI * 4;
        const amp = Math.sin(phase + t) * 0.4 + Math.sin(phase * 0.5 + t * 0.7) * 0.3;
        const height = Math.abs(amp) * (canvas.height * 0.35) + 4;
        const alpha = 0.15 + Math.abs(amp) * 0.35;
        const grad = ctx.createLinearGradient(x, canvas.height / 2 - height, x, canvas.height / 2 + height);
        grad.addColorStop(0, 'rgba(212,175,55,0)');
        grad.addColorStop(0.5, `rgba(212,175,55,${alpha})`);
        grad.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(x - 1.5, canvas.height / 2 - height, 3, height * 2);
      }
      t += 0.018;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full opacity-60" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden" aria-label="Hero section">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-black" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)' }} />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="halo-ring" style={{ width: 600, height: 600 }} /></div>
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="halo-ring" style={{ width: 400, height: 400, animationDelay: '1.5s' }} /></div>
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><div className="halo-ring" style={{ width: 240, height: 240, animationDelay: '0.75s' }} /></div>
      {[...Array(5)].map((_, i) => (<div key={i} aria-hidden="true" className="smoke-particle" style={{ width: 200 + i * 60, height: 200 + i * 60, left: `${15 + i * 15}%`, top: `${20 + i * 10}%`, animationDelay: `${i * 1.5}s`, animationDuration: `${8 + i * 2}s` }} />))}
      <WaveformBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">The Sound Department For Small Businesses</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          Your Brand <span className="gold-shimmer">Looks Good.</span><br />But What Does It <span className="gold-shimmer">Sound Like?</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Halo Audio creates custom music, audio branding, and emotional sound experiences that help businesses become <em className="text-white not-italic font-medium">unforgettable.</em>
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#quiz" className="btn-gold px-8 py-4 text-base font-bold tracking-wide">Get My Custom Brand Sound</a>
          <a href="#sound-journey" className="btn-ghost px-8 py-4 text-base font-semibold">Hear Examples</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-hidden="true">{[...Array(8)].map((_, i) => (<div key={i} className="wave-bar h-5" style={{ animationDelay: `${i * 0.1}s` }} />))}</div>
            <span>500+ Brands Transformed</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true" />
          <span>Custom audio in 7–14 days</span>
          <div className="hidden sm:block w-px h-4 bg-gray-700" aria-hidden="true" />
          <span>100% original, never stock</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="w-px h-8 bg-gradient-to-b from-halo-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}

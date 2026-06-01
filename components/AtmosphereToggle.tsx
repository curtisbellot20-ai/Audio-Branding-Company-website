'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

let audioEl: HTMLAudioElement | null = null;

export function getAudioEl() { return audioEl; }

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioEl) {
      audioEl = new Audio('/Halo Audio. .mp3');
      audioEl.loop = true;
      audioEl.volume = 0;
    }

    // Browsers block autoplay until the user interacts with the page.
    // Start on whichever interaction fires first, then fade in.
    const start = () => {
      if (!audioEl || playing) return;
      audioEl.play().then(() => {
        setPlaying(true);
        // Fade in from 0 to 0.55
        let vol = 0;
        const fade = setInterval(() => {
          vol = Math.min(vol + 0.01, 0.55);
          if (audioEl) audioEl.volume = vol;
          if (vol >= 0.55) clearInterval(fade);
        }, 40);
      }).catch(() => {});
    };

    window.addEventListener('scroll',  start, { once: true, passive: true });
    window.addEventListener('click',   start, { once: true });
    window.addEventListener('keydown', start, { once: true });
    window.addEventListener('touchstart', start, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll',  start);
      window.removeEventListener('click',   start);
      window.removeEventListener('keydown', start);
      window.removeEventListener('touchstart', start);
    };
  }, []);

  const toggle = () => {
    if (!audioEl) return;
    if (playing) {
      audioEl.pause();
      setPlaying(false);
    } else {
      audioEl.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      aria-label={playing ? 'Pause music' : 'Play music'}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-halo-dark border border-halo-gold/40 flex items-center justify-center shadow-lg hover:border-halo-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.svg key="pause" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.15 }}
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </motion.svg>
        ) : (
          <motion.svg key="note" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.15 }}
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M9 18V6l12-2v12" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="6" cy="18" r="3" fill="#D4AF37"/>
            <circle cx="18" cy="16" r="3" fill="#D4AF37"/>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

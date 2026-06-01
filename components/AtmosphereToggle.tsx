'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getAudioEl } from '@/components/Hero';

export default function AtmosphereToggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  const [audioMuted, setAudioMuted] = useState(false);

  const handleClick = () => {
    const el = getAudioEl();
    if (el) {
      if (!audioMuted) {
        // Fade out
        const fadeOut = setInterval(() => {
          if (!el) return clearInterval(fadeOut);
          el.volume = Math.max(0, el.volume - 0.04);
          if (el.volume <= 0) { el.pause(); clearInterval(fadeOut); }
        }, 40);
      } else {
        // Fade back in
        el.play().catch(() => {});
        const fadeIn = setInterval(() => {
          if (!el) return clearInterval(fadeIn);
          el.volume = Math.min(0.55, el.volume + 0.008);
          if (el.volume >= 0.55) clearInterval(fadeIn);
        }, 40);
      }
      setAudioMuted((v) => !v);
    }
    onToggle();
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2, duration: 0.6 }}
      onClick={handleClick}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute atmosphere music' : 'Unmute atmosphere music'}
      className={`fixed right-6 bottom-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all duration-500 ${
        enabled
          ? 'bg-halo-gold text-halo-black border-halo-gold shadow-[0_0_30px_rgba(212,175,55,0.5)]'
          : 'bg-halo-black/80 text-halo-gold border-halo-gold/30 backdrop-blur-md hover:border-halo-gold/60'
      }`}
    >
      <AnimatePresence mode="wait">
        {enabled
          ? <motion.span key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-halo-black animate-pulse" />
              🔊 Atmosphere On
            </motion.span>
          : <motion.span key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-halo-gold" />
              🔇 Atmosphere
            </motion.span>
        }
      </AnimatePresence>
    </motion.button>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AtmosphereToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function AtmosphereToggle({ enabled, onToggle }: AtmosphereToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable Atmosphere Mode' : 'Enable Atmosphere Mode'}
      className={`fixed right-6 bottom-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all duration-500 ${
        enabled
          ? 'bg-halo-gold text-halo-black border-halo-gold shadow-[0_0_30px_rgba(212,175,55,0.5)]'
          : 'bg-halo-black/80 text-halo-gold border-halo-gold/30 backdrop-blur-md hover:border-halo-gold/60'
      }`}
    >
      <AnimatePresence mode="wait">
        {enabled ? (
          <motion.span
            key="on"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-halo-black animate-pulse" />
            Atmosphere On
          </motion.span>
        ) : (
          <motion.span
            key="off"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-halo-gold" />
            Atmosphere
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

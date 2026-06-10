'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import HaloLogo from '@/components/HaloLogo';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Hear The Difference', href: '#audio-showcase' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ atmosphereMode }: { atmosphereMode: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-halo-black/95 backdrop-blur-md border-b border-halo-gold/10 py-2' : 'bg-transparent py-4'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" aria-label="Halo Audio — Home" className="hover:opacity-90 transition-opacity">
            <HaloLogo size="sm" />
          </a>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-halo-gold transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {atmosphereMode && <span className="text-xs text-halo-gold/70 animate-pulse tracking-widest uppercase">◉ Atmosphere</span>}
            <a href="#contact" className="btn-gold px-5 py-2.5 text-sm font-semibold">Contact</a>
          </div>

          <button className="md:hidden text-gray-300 hover:text-halo-gold transition-colors" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[80px] z-40 bg-halo-dark/98 backdrop-blur-xl border-b border-halo-gold/10 p-6 md:hidden"
            role="dialog" aria-modal="true">
            <div className="flex justify-center mb-6">
              <HaloLogo size="md" />
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-lg font-medium text-gray-200 hover:text-halo-gold transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</a>
              ))}
              <a href="#contact" className="btn-gold px-6 py-3 text-center font-semibold text-sm mt-2" onClick={() => setMenuOpen(false)}>Get In Touch</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

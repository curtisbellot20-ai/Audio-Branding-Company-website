'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Send } from 'lucide-react';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Inquiry — Halo Audio');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail / Instagram: ${contact}\nPhone (optional): ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:myhaloaudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6" aria-labelledby="contact-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/50" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Get In Touch</span>
          <div className="w-8 h-px bg-halo-gold/50" />
        </motion.div>

        <motion.h2 id="contact-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-3xl md:text-4xl text-center mb-4 leading-tight">
          Tell Us About Your Brand.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mb-12 max-w-lg mx-auto leading-relaxed">
          Reach us directly by email or Instagram — or leave your number below and we&apos;ll reach out to you.
        </motion.p>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}
          onSubmit={handleSubmit} className="space-y-4 mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-halo-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors"
            />
            <input
              type="text" required placeholder="Email or Instagram Handle" value={contact} onChange={(e) => setContact(e.target.value)}
              className="w-full bg-halo-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors"
            />
          </div>
          <input
            type="tel" placeholder="Phone Number (optional — we'll call you)" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-halo-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors"
          />
          <textarea
            required placeholder="Tell us a bit about your business and what you're looking for." value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
            className="w-full bg-halo-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors resize-none"
          />
          <button type="submit" className="btn-gold w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
            <Send size={15} aria-hidden="true" /> Send
          </button>
        </motion.form>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm border-t border-white/5 pt-8">
          <a href="mailto:myhaloaudio@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-halo-gold transition-colors">
            <Mail size={15} aria-hidden="true" /> myhaloaudio@gmail.com
          </a>
          <a href="https://instagram.com/halo_audio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-halo-gold transition-colors">
            <Instagram size={15} aria-hidden="true" /> @halo_audio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

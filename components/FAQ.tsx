'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: 'What exactly is audio branding?', answer: 'Audio branding is the strategic use of sound to build brand identity and emotional recognition. Just like a logo is a visual brand mark, audio branding gives your business a sonic identity — a sound people associate with your brand. This includes custom music, brand anthems, sonic logos, jingles, and any audio that represents your business.' },
  { question: 'Is this just for big companies?', answer: 'Absolutely not. Small and local businesses benefit the most from audio branding because it’s one of the most underutilized differentiators available. While major corporations have had sonic identities for decades, small businesses now have access to the same strategy at a fraction of the cost.' },
  { question: 'How long does it take to receive my audio?', answer: 'Our standard delivery is 7–14 business days depending on your package. Halo Signature clients receive priority 7-day delivery. Revisions are typically completed within 2–3 business days.' },
  { question: 'Is the music 100% original?', answer: 'Yes. Every piece of audio is 100% original and composed specifically for your brand. We never use stock music libraries, templates, or pre-made tracks. Your sound is exclusively yours.' },
  { question: 'Can I use the audio commercially?', answer: 'Yes. All packages include a full commercial use license. You can use your audio on social media, radio, YouTube, podcasts, your website, in-store, at events, and in any commercial context, indefinitely. Note: Halo Audio retains copyright ownership. You receive a perpetual commercial use license, not copyright transfer.' },
  { question: 'Do you own the copyright to the music?', answer: 'Yes. Halo Audio retains copyright ownership of all compositions. Audio is not patentable under US or international law. What you receive is a perpetual, royalty-free commercial use license — meaning you can use the audio freely for your business forever, with no additional fees. You just cannot resell it or register copyright in your name.' },
  { question: 'What if I don’t like the first version?', answer: 'Every package includes revision rounds. Starter includes 2, Growth includes 3, and Halo Signature includes unlimited revisions. We work collaboratively until you love it.' },
  { question: 'What file formats do I receive?', answer: 'You receive both MP3 (192kbps+) and WAV (lossless) versions of all audio assets, plus platform-optimized exports for social media, broadcast, and web use depending on your package.' },
  { question: 'Do you offer refunds?', answer: 'Due to the custom nature of audio production, no refunds are issued once production begins. We offer multiple revision rounds on all packages. Please review our Refund Policy before purchasing.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="faq" ref={ref} className="relative py-32 px-6" aria-labelledby="faq-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">FAQ</span><div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h2 id="faq-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl text-center mb-16 leading-tight">
          Common Questions.<br /><span className="text-halo-gold">Honest Answers.</span>
        </motion.h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }} className="border border-white/5 rounded-xl overflow-hidden">
              <dt>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-4 p-6 text-left bg-halo-black hover:bg-halo-dark transition-colors duration-200">
                  <span className="font-medium text-white text-sm md:text-base">{faq.question}</span>
                  <span className="flex-shrink-0 text-halo-gold">{open === i ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}</span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.dd initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

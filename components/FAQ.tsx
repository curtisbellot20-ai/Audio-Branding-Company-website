'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly is audio branding?',
    answer:
      'Audio branding is the strategic use of sound to build brand identity and emotional recognition. Just like a logo is a visual brand mark, audio branding gives your business a sonic identity — a sound that people associate with your brand. This includes custom music, brand anthems, sonic logos, jingles, and any audio that represents your business.',
  },
  {
    question: 'Is this just for big companies?',
    answer:
      'Absolutely not. In fact, small and local businesses benefit the most from audio branding because it’s one of the most underutilized differentiators available. While major corporations have had sonic identities for decades (think McDonald’s, Netflix, Intel), small businesses now have access to the same strategy at a fraction of the cost through Halo Audio.',
  },
  {
    question: 'How long does it take to receive my audio?',
    answer:
      'Our standard delivery time is 7–14 business days depending on your package. Halo Signature clients receive priority 7-day delivery. After delivery, revision rounds are typically completed within 2–3 business days.',
  },
  {
    question: 'Is the music 100% original?',
    answer:
      'Yes. Every piece of audio we create is 100% original and composed specifically for your brand. We never use stock music libraries, templates, or pre-made tracks. Your sound is exclusively yours.',
  },
  {
    question: 'Can I use the audio commercially?',
    answer:
      'Yes. All Halo Audio packages include a full commercial license. You can use your audio on social media, radio, YouTube, podcasts, your website, in-store, at events, and in any commercial context, indefinitely.',
  },
  {
    question: 'What if I don’t like the first version?',
    answer:
      'Every package includes revision rounds. Starter includes 2 revisions, Growth includes 3, and Halo Signature includes unlimited revisions until you love it. We work collaboratively and provide revision feedback forms to make the process smooth and clear.',
  },
  {
    question: 'Do you work with businesses outside the US?',
    answer:
      'Yes. Halo Audio serves businesses globally. All work is delivered digitally, and we collaborate via video call and email regardless of your location or time zone.',
  },
  {
    question: 'What file formats do I receive?',
    answer:
      'You receive both MP3 (192kbps+) and WAV (lossless) versions of all audio assets. Depending on your package, you may also receive platform-optimized exports for social media, broadcast, and web use.',
  },
  {
    question: 'How do I know what sound is right for my brand?',
    answer:
      'That’s exactly what our brand discovery process is designed to answer. We’ll walk you through a detailed questionnaire and strategy session (included in all packages) to identify your brand personality, target audience, and sonic goals — then create audio that perfectly matches your vision.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Due to the custom nature of all audio production, we do not offer full refunds once production has begun. However, we are committed to your satisfaction and offer unlimited revisions on Halo Signature, and multiple revision rounds on all other packages. Please review our full Refund Policy before purchasing.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-32 px-6"
      aria-labelledby="faq-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="w-8 h-px bg-halo-gold/60" />
          <span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">FAQ</span>
          <div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>

        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 leading-tight"
        >
          Common Questions.
          <br />
          <span className="text-halo-gold">Honest Answers.</span>
        </motion.h2>

        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
              className="border border-white/5 rounded-xl overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-halo-black hover:bg-halo-dark transition-colors duration-200"
                >
                  <span className="font-medium text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-halo-gold">
                    {open === i ? (
                      <Minus size={16} aria-hidden="true" />
                    ) : (
                      <Plus size={16} aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
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

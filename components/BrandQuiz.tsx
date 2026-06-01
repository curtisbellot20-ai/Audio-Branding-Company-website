'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const questions = [
  { id: 'industry', question: 'What type of business do you have?', options: ['Restaurant / Food', 'Church / Nonprofit', 'Real Estate', 'Salon / Spa', 'Contractor / Trades', 'Events / Entertainment', 'Coaching / Consulting', 'Podcast / Content', 'Retail / E-Commerce', 'Other'] },
  { id: 'audience', question: 'Who is your target audience?', options: ['Families & Parents', 'Young Professionals', 'Luxury Buyers', 'Entrepreneurs & Executives', 'Faith-Based Community', 'Local Community', 'National Audience', 'Gen Z & Millennials'] },
  { id: 'personality', question: 'Which words describe your brand personality?', options: ['Trustworthy & Professional', 'Warm & Friendly', 'Bold & Energetic', 'Luxury & Premium', 'Inspirational & Uplifting', 'Calm & Mindful'] },
  { id: 'goal', question: 'What’s your #1 goal with audio branding?', options: ['Be more memorable to customers', 'Stand out from competitors', 'Build emotional connection', 'Look & sound more professional', 'Grow my audience', 'Increase sales & conversions'] },
];

const leadSchema = z.object({ name: z.string().min(2, 'Name must be at least 2 characters').max(100), email: z.string().email('Please enter a valid email address') });
type LeadForm = z.infer<typeof leadSchema>;

export default function BrandQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LeadForm>({ resolver: zodResolver(leadSchema) });

  const currentQ = questions[step];
  const isLeadForm = step === questions.length;

  const handleOption = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: option }));
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const onSubmit = async (_data: LeadForm) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const getIdentity = () => {
    const p = answers.personality || '';
    if (p.includes('Luxury')) return { label: 'Luxury Signature Sound', color: '#D4AF37' };
    if (p.includes('Bold')) return { label: 'Power Brand Sound', color: '#FF6B35' };
    if (p.includes('Warm')) return { label: 'Community Warmth Sound', color: '#27AE60' };
    if (p.includes('Inspirational')) return { label: 'Elevation Brand Sound', color: '#9B59B6' };
    return { label: 'Professional Impact Sound', color: '#D4AF37' };
  };

  return (
    <section id="quiz" ref={ref} className="relative py-32 px-6" aria-labelledby="quiz-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Brand Sound Quiz</span><div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h2 id="quiz-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          What Does Your Business <span className="text-halo-gold">Sound Like?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-gray-500 text-center mb-12">
          Answer 4 quick questions and receive your free <strong className="text-white">Audio Branding Scorecard.</strong>
        </motion.p>
        {!submitted && (
          <div className="mb-10">
            <div className="flex justify-between text-xs text-gray-600 mb-2"><span>Step {Math.min(step + 1, questions.length + 1)} of {questions.length + 1}</span><span>{Math.round((Math.min(step, questions.length) / (questions.length + 1)) * 100)}% complete</span></div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden"><motion.div className="h-full bg-halo-gold rounded-full" animate={{ width: `${(Math.min(step, questions.length) / (questions.length + 1)) * 100}%` }} transition={{ duration: 0.4 }} /></div>
          </div>
        )}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-halo-black rounded-2xl border border-halo-gold/20 p-10 text-center" role="status" aria-live="polite">
              <CheckCircle size={48} className="text-halo-gold mx-auto mb-6" />
              <h3 className="font-display font-bold text-2xl text-white mb-3">Your Audio Branding Scorecard Is On The Way!</h3>
              <p className="text-gray-400 mb-6">Your suggested audio identity:</p>
              <div className="inline-block px-6 py-3 rounded-xl font-bold text-lg mb-6" style={{ background: `${getIdentity().color}15`, border: `1px solid ${getIdentity().color}40`, color: getIdentity().color }}>{getIdentity().label}</div>
              <p className="text-gray-500 text-sm">Check your inbox within 24 hours for your personalized Audio Branding Scorecard.</p>
            </motion.div>
          ) : isLeadForm ? (
            <motion.div key="lead" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="bg-halo-black rounded-2xl border border-halo-gold/15 p-8">
              <div className="inline-block px-4 py-2 rounded-lg text-sm font-semibold mb-6" style={{ background: `${getIdentity().color}15`, border: `1px solid ${getIdentity().color}30`, color: getIdentity().color }}>Your Audio Identity: {getIdentity().label}</div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Almost there! Where should we send your scorecard?</h3>
              <p className="text-gray-500 text-sm mb-8">Your free Audio Branding Scorecard includes your brand sound recommendations and how to get started.</p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                  <label htmlFor="quiz-name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input id="quiz-name" type="text" placeholder="Jane Smith" autoComplete="name" {...register('name')} className="w-full bg-halo-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors" />
                  {errors.name && <p className="text-red-400 text-xs mt-1" role="alert">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="quiz-email" className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input id="quiz-email" type="email" placeholder="jane@yourbusiness.com" autoComplete="email" {...register('email')} className="w-full bg-halo-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-halo-gold/50 transition-colors" />
                  {errors.email && <p className="text-red-400 text-xs mt-1" role="alert">{errors.email.message}</p>}
                </div>
                <p className="text-gray-600 text-xs">No spam, ever. Unsubscribe any time.</p>
                <button type="submit" disabled={isSubmitting} className="btn-gold w-full py-4 text-sm font-bold disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Send My Free Scorecard →'}</button>
              </form>
              <button onClick={() => setStep((s) => s - 1)} className="mt-4 flex items-center gap-1 text-sm text-gray-600 hover:text-gray-400 transition-colors mx-auto"><ChevronLeft size={14} /> Back</button>
            </motion.div>
          ) : (
            <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }} className="bg-halo-black rounded-2xl border border-white/5 p-8">
              <h3 className="font-display font-bold text-xl text-white mb-8">{currentQ.question}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option) => (
                  <button key={option} onClick={() => handleOption(option)}
                    className={`text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 ${answers[currentQ.id] === option ? 'border-halo-gold/60 bg-halo-gold/10 text-halo-gold' : 'border-white/5 bg-halo-dark text-gray-300 hover:border-white/20 hover:text-white'}`}>
                    <span className="flex items-center justify-between gap-2">{option}{answers[currentQ.id] === option && <ArrowRight size={14} className="flex-shrink-0" />}</span>
                  </button>
                ))}
              </div>
              {step > 0 && <button onClick={() => setStep((s) => s - 1)} className="mt-6 flex items-center gap-1 text-sm text-gray-600 hover:text-gray-400 transition-colors"><ChevronLeft size={14} /> Back</button>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

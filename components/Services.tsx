'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Radio, Mic2, Headphones, Podcast, Star } from 'lucide-react';

const services = [
  { icon: Star, name: 'Brand Anthem™', tagline: 'Your business. In a song.', description: 'A custom 60–120 second original composition that captures your brand’s essence. Used everywhere: intros, ads, events, videos. This is your sonic logo.', deliverables: ['Original composition', 'Multiple versions', '100% commercial license', 'WAV + MP3 files'], badge: 'Most Popular' },
  { icon: Music, name: 'Website Atmosphere™', tagline: 'Turn your website into an experience.', description: 'Ambient background music designed specifically for your website visitors. Increases time on site and creates a premium brand impression from the first second.', deliverables: ['Loopable ambient track', 'Custom mood designed for your brand', 'Mobile optimized', 'Easy embed code'], badge: null },
  { icon: Radio, name: 'Radio Ad System™', tagline: 'Be heard. Be remembered.', description: 'Full radio and podcast ad production with custom music beds, professional voiceover direction, and a signature sound that separates you from every competitor.', deliverables: ['30 and 60 second ads', 'Custom music bed', 'Voiceover production', 'Broadcast ready files'], badge: null },
  { icon: Headphones, name: 'Social Sound Pack™', tagline: 'One sound. Every platform.', description: 'A complete audio identity system for social media: Reels intros, TikTok sounds, YouTube outros, story transitions. Brand recognition in every scroll.', deliverables: ['10+ custom audio clips', 'Platform-optimized lengths', 'Branded sound effects', 'Monthly refresh option'], badge: 'New' },
  { icon: Podcast, name: 'Podcast Identity™', tagline: 'Sound like a top 10 podcast.', description: 'Custom intro, outro, and transition music that makes your podcast feel premium. Includes a theme song and branded episode stingers.', deliverables: ['Custom theme music', 'Intro & outro versions', 'Episode stingers', 'Unlimited episode use'], badge: null },
  { icon: Mic2, name: 'Halo Signature™', tagline: 'The complete audio brand experience.', description: 'Our flagship service. A full sonic brand system: Brand Anthem, Website Atmosphere, Social Pack, Radio Ads, Hold Music, and a Brand Sound Guide.', deliverables: ['Everything included', 'Brand Sound Style Guide', 'Quarterly sound refresh', 'Priority production'], badge: 'Premium' },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="services" ref={ref} className="relative py-32 px-6" aria-labelledby="services-heading">
      <div aria-hidden="true" className="absolute inset-0 bg-halo-dark" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-halo-gold/60" /><span className="text-halo-gold text-xs tracking-[0.3em] uppercase font-semibold">Services</span><div className="w-8 h-px bg-halo-gold/60" />
        </motion.div>
        <motion.h2 id="services-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }} className="font-display font-bold text-4xl md:text-5xl text-center mb-4 leading-tight">
          Every Sound Your Business <span className="text-halo-gold">Will Ever Need.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
          From your first brand anthem to a complete sonic identity system — we build the audio infrastructure that makes businesses unforgettable.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                className="group relative bg-halo-black rounded-2xl p-8 border border-white/5 hover:border-halo-gold/25 transition-all duration-500 flex flex-col">
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${service.badge === 'Premium' ? 'bg-halo-gold text-halo-black' : service.badge === 'New' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20' : 'bg-halo-gold/10 text-halo-gold border border-halo-gold/20'}`}>{service.badge}</span>
                  </div>
                )}
                <div className="mb-6"><div className="w-12 h-12 rounded-xl bg-halo-gold/10 flex items-center justify-center group-hover:bg-halo-gold/20 transition-colors duration-300"><Icon size={22} className="text-halo-gold" aria-hidden="true" /></div></div>
                <h3 className="font-display font-bold text-xl text-white mb-1">{service.name}</h3>
                <p className="text-halo-gold text-sm mb-4">{service.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((d) => (<li key={d} className="flex items-center gap-2 text-sm text-gray-400"><div className="w-1 h-1 rounded-full bg-halo-gold flex-shrink-0" aria-hidden="true" />{d}</li>))}
                </ul>
                <a href="#pricing" className="btn-ghost text-sm text-center py-3 px-4">See Pricing &rarr;</a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Assisted Audio Disclosure',
  description: 'Halo Audio disclosure on AI-assisted audio production.',
};

export default function AIDisclosure() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a>
        </div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">AI-Assisted Audio Disclosure</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Our Commitment to Transparency</h2>
            <p>Halo Audio is committed to honest communication about how our audio products are created. As AI tools have become part of the creative industry landscape, we want to be fully transparent with our clients.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Human-First Production</h2>
            <p>All Halo Audio projects are directed, supervised, and approved by human audio professionals. Our team includes composers, sound designers, and audio branding strategists who lead every project from concept to delivery.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Use of AI Tools</h2>
            <p>Like most modern production studios, we may use AI-assisted tools as part of our production workflow. These tools may assist with certain elements including reference generation, sound design exploration, or mix assistance. However, all final deliverables are reviewed, refined, and approved by human professionals.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">What This Means for Your License</h2>
            <p>Your commercial license covers the delivered audio regardless of the tools used in production. We warrant that all delivered audio is original, not copied from copyrighted works, and cleared for commercial use. If you have specific requirements about AI tool use in your project, please notify us before production begins.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Questions</h2>
            <p>For questions about our production process: <strong className="text-white">hello@haloaudio.co</strong></p>
          </section>
        </div>
      </div>
    </main>
  );
}

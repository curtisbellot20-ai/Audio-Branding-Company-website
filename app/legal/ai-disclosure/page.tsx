import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'AI-Assisted Audio Disclosure', description: 'Halo Audio AI production disclosure.' };
export default function AIDisclosure() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12"><a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a></div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">AI-Assisted Audio Disclosure</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-white font-semibold text-xl mb-3">Human-First Production</h2><p>All Halo Audio projects are directed, supervised, and approved by human audio professionals including composers, sound designers, and audio branding strategists.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">Use of AI Tools</h2><p>We may use AI-assisted tools as part of our production workflow for reference generation or sound design exploration. All final deliverables are reviewed and approved by human professionals.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">Your License</h2><p>Your commercial license covers all delivered audio regardless of production tools used. All audio is original and cleared for commercial use.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">Questions</h2><p><strong className="text-white">hello@haloaudio.co</strong></p></section>
        </div>
      </div>
    </main>
  );
}

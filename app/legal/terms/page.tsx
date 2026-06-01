import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms of Service', description: 'Halo Audio Terms of Service.' };
export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12"><a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a></div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-white font-semibold text-xl mb-3">1. Acceptance of Terms</h2><p>By accessing or using Halo Audio&rsquo;s website or purchasing any service, you agree to these Terms of Service.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">2. Services</h2><p>Halo Audio provides custom audio branding, music production, and related creative services built to your specifications.</p></section>
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Intellectual Property &amp; License</h2>
            <div className="bg-halo-dark border border-halo-gold/20 rounded-xl p-6 space-y-4">
              <p><strong className="text-white">Copyright Ownership:</strong> Halo Audio retains full copyright ownership of all compositions and audio assets created. The client does <strong className="text-white">not</strong> receive copyright ownership.</p>
              <p><strong className="text-white">Patents:</strong> Sound recordings and musical compositions are not patentable. No patent rights are granted or implied.</p>
              <p><strong className="text-white">Commercial Use License:</strong> Upon full payment, you receive a perpetual, worldwide, royalty-free, non-exclusive license to use your audio for all commercial purposes associated with your brand — with no additional fees, ever.</p>
              <p><strong className="text-white">Restrictions:</strong> You may not resell, sublicense, or register copyright in the audio under your name.</p>
            </div>
          </section>
          <section><h2 className="text-white font-semibold text-xl mb-3">4. Payment</h2><p>All prices are in USD. Payment is due in full before production begins.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">5. Limitation of Liability</h2><p>Our total liability shall not exceed the amount you paid for the specific service in question.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">6. Contact</h2><p>Legal inquiries: <strong className="text-white">legal@haloaudio.co</strong></p></section>
        </div>
      </div>
    </main>
  );
}

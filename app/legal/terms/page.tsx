import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Halo Audio Terms of Service.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a>
        </div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">

          <section aria-labelledby="terms-1">
            <h2 id="terms-1" className="text-white font-semibold text-xl mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Halo Audio&rsquo;s website or purchasing any service, you agree
              to be bound by these Terms of Service. If you do not agree, please do not use our
              services.
            </p>
          </section>

          <section aria-labelledby="terms-2">
            <h2 id="terms-2" className="text-white font-semibold text-xl mb-3">2. Services</h2>
            <p>
              Halo Audio provides custom audio branding, music production, and related creative
              services. All work is created to your specifications based on information you provide.
              Deliverables, timelines, and revision rounds are as described on our pricing page and
              in your project agreement.
            </p>
          </section>

          <section aria-labelledby="terms-3">
            <h2 id="terms-3" className="text-white font-semibold text-xl mb-3">3. Intellectual Property &amp; License</h2>
            <div className="bg-halo-dark border border-halo-gold/20 rounded-xl p-6 space-y-4">
              <p>
                <strong className="text-white">Copyright Ownership:</strong> Halo Audio retains
                full copyright ownership of all compositions, recordings, and audio assets
                created. The Licensee (you) does{' '}
                <strong className="text-white">not</strong> receive copyright ownership of any
                delivered audio.
              </p>
              <p>
                <strong className="text-white">Patents:</strong> Sound recordings and musical
                compositions are not patentable. No patent rights are granted or implied.
              </p>
              <p>
                <strong className="text-white">Commercial Use License:</strong> Upon receipt of
                full payment, Halo Audio grants you a perpetual, worldwide, royalty-free,
                non-exclusive license to use your delivered audio for commercial purposes
                associated with your brand. You may use the audio freely across advertising,
                social media, your website, radio, events, and all other brand touchpoints
                without additional fees.
              </p>
              <p>
                <strong className="text-white">Restrictions:</strong> You may not resell, redistribute,
                or sublicense the audio to third parties, register copyright in the audio under
                your name, or use the audio for purposes unrelated to your brand. See our full
                Commercial Use License page for complete terms.
              </p>
            </div>
          </section>

          <section aria-labelledby="terms-4">
            <h2 id="terms-4" className="text-white font-semibold text-xl mb-3">4. Payment</h2>
            <p>
              All prices are in USD. Payment is due in full prior to production beginning unless
              otherwise agreed in writing. We accept major credit cards and other payment methods
              displayed at checkout. Prices are subject to change; your locked-in price is what
              was displayed at the time of purchase.
            </p>
          </section>

          <section aria-labelledby="terms-5">
            <h2 id="terms-5" className="text-white font-semibold text-xl mb-3">5. Limitation of Liability</h2>
            <p>
              Halo Audio shall not be liable for indirect, incidental, special, consequential, or
              punitive damages arising from use of our services. Our total liability shall not
              exceed the amount you paid for the specific service in question.
            </p>
          </section>

          <section aria-labelledby="terms-6">
            <h2 id="terms-6" className="text-white font-semibold text-xl mb-3">6. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States. Disputes shall be
              resolved through binding arbitration or in the applicable courts of the United States.
            </p>
          </section>

          <section aria-labelledby="terms-7">
            <h2 id="terms-7" className="text-white font-semibold text-xl mb-3">7. Contact</h2>
            <p>For legal inquiries: <strong className="text-white">legal@haloaudio.co</strong></p>
          </section>

        </div>
      </div>
    </main>
  );
}

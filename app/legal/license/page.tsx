import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Use License',
  description: 'Halo Audio Commercial Use License agreement.',
};

export default function CommercialLicense() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a>
        </div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Commercial Use License</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Overview</h2>
            <p>
              All audio delivered by Halo Audio is licensed for commercial use. Clients do{' '}
              <strong className="text-white">not</strong> receive copyright ownership or any patent
              rights to the audio. Halo Audio retains all intellectual property rights, including
              copyright, in every composition produced. What you receive is a perpetual,
              royalty-free commercial use license.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">License Grant</h2>
            <p>
              Upon receipt of full payment, Halo Audio grants the purchasing entity
              (&ldquo;Licensee&rdquo;) a perpetual, non-exclusive, worldwide, royalty-free license
              to use the delivered audio assets (&ldquo;Audio&rdquo;) for commercial purposes
              associated with their brand and business operations.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Intellectual Property — Important Notice</h2>
            <div className="bg-halo-dark border border-halo-gold/20 rounded-xl p-6 space-y-3">
              <p>
                <strong className="text-white">Copyright:</strong> Halo Audio retains full copyright
                ownership of all compositions, arrangements, recordings, and audio productions
                created under this agreement. The Licensee does not acquire copyright in any
                delivered audio asset.
              </p>
              <p>
                <strong className="text-white">Patents:</strong> Audio compositions and sound
                recordings are not patentable under United States or international patent law.
                No patent rights are granted or implied by this license.
              </p>
              <p>
                <strong className="text-white">What you receive:</strong> A commercial use license
                that allows you to deploy the audio freely across your business, advertising,
                and brand touchpoints — without royalty payments, usage fees, or expiration.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Permitted Commercial Uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Social media content and paid advertising</li>
              <li>Website background music and embedded media</li>
              <li>Radio, podcast, and streaming advertisements</li>
              <li>In-store or in-person use at business locations</li>
              <li>YouTube, TikTok, Instagram, and other video platforms</li>
              <li>Trade shows, events, and presentations</li>
              <li>Phone hold music and IVR systems</li>
              <li>Any other commercial use tied directly to the Licensee&rsquo;s brand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Prohibited Uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reselling or sublicensing the Audio to third parties</li>
              <li>Distributing Audio as a standalone music product (e.g., on Spotify, iTunes)</li>
              <li>Registering copyright in the audio under the Licensee&rsquo;s name</li>
              <li>Filing any intellectual property claim over the composition</li>
              <li>Using the Audio for purposes unrelated to the Licensee&rsquo;s brand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Duration</h2>
            <p>
              This license is perpetual. It does not expire and does not require ongoing payments.
              The license survives any termination of a service agreement between the Licensee
              and Halo Audio, provided payment was received in full.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Contact</h2>
            <p>For licensing questions: <strong className="text-white">legal@haloaudio.co</strong></p>
          </section>

        </div>
      </div>
    </main>
  );
}

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
            <h2 className="text-white font-semibold text-xl mb-3">License Grant</h2>
            <p>Upon receipt of full payment, Halo Audio grants the purchasing entity (&ldquo;Licensee&rdquo;) a perpetual, non-exclusive, worldwide license to use the delivered audio assets (&ldquo;Audio&rdquo;) for commercial purposes associated with their brand and business operations.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Permitted Uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Social media content and advertising</li>
              <li>Website background music and media</li>
              <li>Radio, podcast, and streaming advertisements</li>
              <li>In-store or in-person use at business locations</li>
              <li>YouTube and video platform content</li>
              <li>Trade shows, events, and presentations</li>
              <li>Phone hold music and IVR systems</li>
              <li>Any other commercial use tied to the Licensee&rsquo;s brand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Prohibited Uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reselling or sublicensing the Audio to third parties</li>
              <li>Distributing Audio as a standalone music product</li>
              <li>Claiming authorship or sole ownership of the composition</li>
              <li>Using the Audio for purposes unrelated to the Licensee&rsquo;s brand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Ownership</h2>
            <p>Halo Audio retains underlying compositional copyright. The Licensee holds a perpetual commercial use right. This license survives termination of any service agreement.</p>
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

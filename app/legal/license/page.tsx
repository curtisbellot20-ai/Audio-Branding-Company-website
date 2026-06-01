import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Commercial Use License', description: 'Halo Audio Commercial Use License.' };
export default function CommercialLicense() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12"><a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a></div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Commercial Use License</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Overview</h2>
            <p>All audio delivered by Halo Audio is licensed for commercial use. Clients do <strong className="text-white">not</strong> receive copyright ownership or patent rights. Halo Audio retains all intellectual property rights. What you receive is a perpetual, royalty-free commercial use license.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">IP Notice</h2>
            <div className="bg-halo-dark border border-halo-gold/20 rounded-xl p-6 space-y-3">
              <p><strong className="text-white">Copyright:</strong> Retained by Halo Audio. Client does not own the copyright.</p>
              <p><strong className="text-white">Patents:</strong> Audio is not patentable. No patent rights granted or implied.</p>
              <p><strong className="text-white">What you receive:</strong> A perpetual commercial use license — no royalties, no fees, no expiration.</p>
            </div>
          </section>
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Permitted Uses</h2>
            <ul className="list-disc list-inside space-y-2"><li>Social media &amp; paid advertising</li><li>Website music &amp; embedded media</li><li>Radio, podcast &amp; streaming ads</li><li>In-store &amp; in-person business use</li><li>YouTube, TikTok, Instagram &amp; video platforms</li><li>Events, trade shows &amp; presentations</li><li>Phone hold music &amp; IVR systems</li></ul>
          </section>
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Prohibited Uses</h2>
            <ul className="list-disc list-inside space-y-2"><li>Reselling or sublicensing the audio</li><li>Distributing as a standalone music product</li><li>Registering copyright under your name</li><li>Filing any IP claim over the composition</li></ul>
          </section>
          <section><h2 className="text-white font-semibold text-xl mb-3">Contact</h2><p><strong className="text-white">legal@haloaudio.co</strong></p></section>
        </div>
      </div>
    </main>
  );
}

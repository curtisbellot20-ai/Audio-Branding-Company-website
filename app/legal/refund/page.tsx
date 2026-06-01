import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Refund Policy', description: 'Halo Audio Refund Policy.' };
export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12"><a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a></div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Refund Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-white font-semibold text-xl mb-3">Before Production Begins</h2><p>If you cancel before production starts and before submitting your brand brief, you are eligible for a full refund minus payment processing fees.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">After Production Begins</h2><p>Once production has begun, no refunds will be issued. We commit to working through all included revision rounds to reach a result you love.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">No Results Guarantee Disclaimer</h2><p>Halo Audio does not guarantee specific business results from use of our audio assets. Results in testimonials are real but individual outcomes vary.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">Contact</h2><p><strong className="text-white">support@haloaudio.co</strong></p></section>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Halo Audio Refund Policy.',
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a>
        </div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Refund Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Our Commitment to Your Satisfaction</h2>
            <p>At Halo Audio, every project is custom-created for your specific brand. Because of this, our refund policy reflects the unique nature of creative production work.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Before Production Begins</h2>
            <p>If you request a cancellation before production has started and before your brand discovery questionnaire has been submitted, you are eligible for a full refund minus any payment processing fees.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">After Production Begins</h2>
            <p>Once production has begun (after you submit your brand brief), no refunds will be issued. This is because significant creative labor, time, and resources are invested immediately. We are committed to working with you through all included revision rounds to reach a result you love.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Revision Policy</h2>
            <p>We encourage all clients to fully utilize their included revision rounds before raising concerns. Halo Signature clients receive unlimited revisions. All other packages include the revision rounds specified on the pricing page. Revisions outside of included rounds may be purchased at our standard hourly rate.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">No Results Guarantee Disclaimer</h2>
            <p>Halo Audio does not guarantee specific business results (sales, revenue, follower growth, etc.) from the use of our audio assets. Results shared in testimonials and case studies are real but individual outcomes vary. Audio branding is one component of a holistic brand strategy.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">Contact</h2>
            <p>For refund inquiries: <strong className="text-white">support@haloaudio.co</strong></p>
          </section>
        </div>
      </div>
    </main>
  );
}

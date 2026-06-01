import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Halo Audio Privacy Policy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a>
        </div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 leading-relaxed">
          <section aria-labelledby="privacy-1">
            <h2 id="privacy-1" className="text-white font-semibold text-xl mb-3">1. Information We Collect</h2>
            <p>Halo Audio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you provide directly, including your name, email address, business name, and any details submitted through our contact forms, quiz, or onboarding process. We may also collect technical data such as IP address, browser type, device type, and pages visited through standard analytics tools.</p>
          </section>

          <section aria-labelledby="privacy-2">
            <h2 id="privacy-2" className="text-white font-semibold text-xl mb-3">2. How We Use Your Information</h2>
            <p>We use your information to: deliver audio branding services you have purchased; send project updates, revisions, and final deliverables; communicate service information, tips, and promotional offers (with your consent); improve our website and services; and comply with legal obligations. We do not sell your personal data to third parties.</p>
          </section>

          <section aria-labelledby="privacy-3">
            <h2 id="privacy-3" className="text-white font-semibold text-xl mb-3">3. Email Communications</h2>
            <p>By submitting your email through our quiz, contact form, or purchase process, you consent to receive emails from Halo Audio. You may unsubscribe at any time by clicking the unsubscribe link in any email or by emailing us directly. We use industry-standard email service providers who process your data in accordance with their privacy policies.</p>
          </section>

          <section aria-labelledby="privacy-4">
            <h2 id="privacy-4" className="text-white font-semibold text-xl mb-3">4. Cookies and Tracking</h2>
            <p>Our website may use essential cookies for functionality and analytics cookies to understand how visitors use our site. You may disable cookies through your browser settings; however, some features may not function correctly. We do not use advertising cookies or cross-site tracking cookies without your explicit consent.</p>
          </section>

          <section aria-labelledby="privacy-5">
            <h2 id="privacy-5" className="text-white font-semibold text-xl mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including SSL/TLS encryption, secure form transmission, and access controls to protect your personal data. However, no internet transmission is 100% secure. If you believe your data has been compromised, please contact us immediately.</p>
          </section>

          <section aria-labelledby="privacy-6">
            <h2 id="privacy-6" className="text-white font-semibold text-xl mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data held by us. To exercise these rights, please contact us at privacy@haloaudio.co. We will respond to verifiable requests within 30 days. California residents have additional rights under the CCPA.</p>
          </section>

          <section aria-labelledby="privacy-7">
            <h2 id="privacy-7" className="text-white font-semibold text-xl mb-3">7. Contact</h2>
            <p>For privacy inquiries, contact us at: <strong className="text-white">privacy@haloaudio.co</strong></p>
          </section>
        </div>
      </div>
    </main>
  );
}

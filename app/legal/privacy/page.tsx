import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'Halo Audio Privacy Policy.' };
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-halo-black py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12"><a href="/" className="text-halo-gold text-sm hover:underline">&larr; Back to Halo Audio</a></div>
        <h1 className="font-display font-bold text-4xl text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-white font-semibold text-xl mb-3">1. Information We Collect</h2><p>Halo Audio collects information you provide directly, including your name, email address, business name, and details submitted through our contact forms, quiz, or onboarding process. We may also collect technical data such as IP address, browser type, and pages visited through standard analytics tools.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">2. How We Use Your Information</h2><p>We use your information to deliver services, send project updates, communicate promotional offers (with consent), improve our website, and comply with legal obligations. We do not sell your personal data.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">3. Email Communications</h2><p>By submitting your email you consent to receive emails from Halo Audio. You may unsubscribe at any time via the link in any email.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">4. Data Security</h2><p>We implement SSL/TLS encryption, secure form transmission, and access controls to protect your data.</p></section>
          <section><h2 className="text-white font-semibold text-xl mb-3">5. Your Rights</h2><p>You may access, correct, or delete your personal data by contacting us at <strong className="text-white">privacy@haloaudio.co</strong>.</p></section>
        </div>
      </div>
    </main>
  );
}

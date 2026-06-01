'use client';
import HaloLogo from '@/components/HaloLogo';

const footerLinks = [
  { heading: 'Services', links: [{ label: 'Brand Anthem™', href: '#services' }, { label: 'Website Atmosphere™', href: '#services' }, { label: 'Radio Ad System™', href: '#services' }, { label: 'Social Sound Pack™', href: '#services' }, { label: 'Podcast Identity™', href: '#services' }, { label: 'Halo Signature™', href: '#services' }] },
  { heading: 'Company', links: [{ label: 'How It Works', href: '#how-it-works' }, { label: 'Pricing', href: '#pricing' }, { label: 'Client Stories', href: '#testimonials' }, { label: 'FAQ', href: '#faq' }] },
  { heading: 'Legal', links: [{ label: 'Privacy Policy', href: '/legal/privacy' }, { label: 'Terms of Service', href: '/legal/terms' }, { label: 'Refund Policy', href: '/legal/refund' }, { label: 'Commercial License', href: '/legal/license' }, { label: 'AI Audio Disclosure', href: '/legal/ai-disclosure' }] },
];

export default function Footer() {
  return (
    <footer className="relative bg-halo-dark border-t border-white/5 pt-20 pb-10 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <HaloLogo size="md" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Sound Department For Small Businesses. We create custom audio branding that makes your business unforgettable.
            </p>
            <p className="text-halo-gold text-xs font-semibold tracking-widest uppercase">Your brand. Heard.</p>
          </div>
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">{col.heading}</h3>
              <ul className="space-y-3">{col.links.map((link) => (<li key={link.label}><a href={link.href} className="text-gray-600 hover:text-halo-gold text-sm transition-colors duration-200">{link.label}</a></li>))}</ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">&copy; {new Date().getFullYear()} Halo Audio. All rights reserved.</p>
          <p className="text-gray-700 text-xs">All audio is 100% original. Commercial license included with every package.</p>
          <p className="text-gray-700 text-xs">Built for small businesses.</p>
        </div>
      </div>
    </footer>
  );
}

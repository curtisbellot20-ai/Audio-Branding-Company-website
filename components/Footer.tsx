'use client';
import HaloLogo from '@/components/HaloLogo';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Halo Essentials', href: '#services' },
      { label: 'Halo Identity', href: '#services' },
      { label: 'Halo Growth Club', href: '#services' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'Hear The Difference', href: '#audio-showcase' },
      { label: 'Our Process', href: '#process' },
      { label: 'Where Your Audio Lives', href: '#everywhere' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Refund Policy', href: '/legal/refund' },
      { label: 'Commercial License', href: '/legal/license' },
      { label: 'AI Audio Disclosure', href: '/legal/ai-disclosure' },
    ],
  },
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
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              A boutique sonic branding studio helping small businesses become unforgettable through sound.
            </p>
            <p className="text-halo-gold text-xs font-semibold tracking-widest uppercase mb-6">Your brand. Heard.</p>
            <p className="text-white text-sm font-semibold mb-3">Contact Us</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:myhaloaudio@gmail.com" className="text-gray-500 hover:text-halo-gold text-sm transition-colors duration-200">
                myhaloaudio@gmail.com
              </a>
              <a href="https://instagram.com/halo_audio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-halo-gold text-sm transition-colors duration-200">
                @halo_audio
              </a>
            </div>
          </div>
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-600 hover:text-halo-gold text-sm transition-colors duration-200">{link.label}</a>
                  </li>
                ))}
              </ul>
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

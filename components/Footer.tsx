'use client';

import { motion } from 'framer-motion';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Brand Anthem™', href: '#services' },
      { label: 'Website Atmosphere™', href: '#services' },
      { label: 'Radio Ad System™', href: '#services' },
      { label: 'Social Sound Pack™', href: '#services' },
      { label: 'Podcast Identity™', href: '#services' },
      { label: 'Halo Signature™', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Client Stories', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Sound Journey', href: '#sound-journey' },
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
    <footer
      className="relative bg-halo-dark border-t border-white/5 pt-20 pb-10 px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-halo-gold/60" />
                <div className="absolute inset-1 rounded-full border border-halo-gold/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-halo-gold" />
                </div>
              </div>
              <span className="font-display font-bold text-xl">
                HALO <span className="text-halo-gold">AUDIO</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The Sound Department For Small Businesses. We create custom audio branding that makes
              your business unforgettable.
            </p>
            <p className="text-halo-gold text-xs font-semibold tracking-widest uppercase">
              Your brand. Heard.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-halo-gold text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Halo Audio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-gray-700 text-xs">
              All audio is 100% original. Commercial license included with every package.
            </p>
          </div>
          <p className="text-gray-700 text-xs">
            Built for small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

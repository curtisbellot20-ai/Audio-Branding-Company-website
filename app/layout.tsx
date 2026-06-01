import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://haloaudio.co'),
  title: {
    default: 'Halo Audio | Audio Branding for Small Businesses',
    template: '%s | Halo Audio',
  },
  description:
    'Halo Audio is the sound department for small businesses. We create custom music, audio branding, brand anthems, radio ads, and emotional sound experiences that make your business unforgettable.',
  keywords: [
    'audio branding',
    'custom jingles',
    'brand music',
    'business theme song',
    'radio ad production',
    'website music',
    'brand anthem creation',
    'podcast intro music',
    'local business marketing',
    'sound branding',
    'audio identity',
    'sonic branding',
    'hold music',
    'social media audio',
  ],
  authors: [{ name: 'Halo Audio' }],
  creator: 'Halo Audio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://haloaudio.co',
    siteName: 'Halo Audio',
    title: 'Halo Audio | The Sound Department For Small Businesses',
    description:
      'Your brand looks good. But what does it sound like? Halo Audio creates custom music, audio branding, and emotional sound experiences for small businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Halo Audio — The Sound Department For Small Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halo Audio | Audio Branding for Small Businesses',
    description:
      'Your brand looks good. But what does it sound like? We create custom audio branding for small businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Halo Audio',
              description:
                'The Sound Department For Small Businesses. Custom audio branding, music, and sound experiences.',
              url: 'https://haloaudio.co',
              '@id': 'https://haloaudio.co',
              sameAs: [],
              serviceArea: {
                '@type': 'Country',
                name: 'United States',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Audio Branding Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Anthem' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Atmosphere Music' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radio Ad Production' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Sound Pack' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Podcast Identity' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-halo-black text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

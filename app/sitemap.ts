import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://haloaudio.co';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/legal/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/refund`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/license`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/ai-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}

# Halo Audio — Deployment Checklist

## Pre-Deploy

### Code
- [ ] Run `npm run lint` — 0 errors
- [ ] Run `npm run build` — successful build
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Verify all CTA links scroll to correct sections
- [ ] Verify quiz flow completes without errors
- [ ] Test with keyboard navigation only
- [ ] Test with reduced motion preference enabled
- [ ] Run Lighthouse audit — target 90+ all categories

### Content
- [ ] Replace placeholder audio players with real audio files
- [ ] Add real testimonial photos (with permission)
- [ ] Add real portfolio audio examples
- [ ] Update Google verification code in layout.tsx
- [ ] Add real contact email addresses
- [ ] Review all pricing for accuracy
- [ ] Review all legal pages with your attorney

### SEO
- [ ] Add real og-image.jpg (1200x630px)
- [ ] Add favicon.ico and apple-touch-icon.png
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Set up Google Analytics or privacy-preserving analytics
- [ ] Verify structured data with Google Rich Results Test
- [ ] Set up Google Business Profile

### Domain & Hosting
- [ ] Configure custom domain on Vercel (haloaudio.co)
- [ ] Verify SSL certificate is active
- [ ] Test HTTPS redirect from HTTP
- [ ] Configure www redirect to non-www (or vice versa)

## Vercel Deploy

```bash
npm install -g vercel
vercel --prod
```

Or connect GitHub repo to Vercel for automatic deploys on push to main.

## Post-Deploy
- [ ] Verify live site loads correctly
- [ ] Test contact form end-to-end
- [ ] Test quiz form end-to-end
- [ ] Run `curl -I https://haloaudio.co` and verify security headers
- [ ] Submit to Google Search Console
- [ ] Monitor Core Web Vitals in Vercel Analytics

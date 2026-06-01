# Halo Audio — Security Checklist

## Implemented

### HTTP Security Headers (next.config.js)
- [x] `X-Frame-Options: DENY` — prevents clickjacking
- [x] `X-Content-Type-Options: nosniff` — prevents MIME-type sniffing
- [x] `Referrer-Policy: strict-origin-when-cross-origin`
- [x] `Permissions-Policy` — disables camera, microphone, geolocation
- [x] `Strict-Transport-Security` — enforces HTTPS for 2 years
- [x] `Content-Security-Policy` — restricts resource origins
- [x] `poweredByHeader: false` — hides Next.js fingerprint

### Forms & Input
- [x] Zod schema validation on all form inputs (BrandQuiz)
- [x] React Hook Form with zodResolver — prevents malformed data
- [x] `noValidate` + JS validation instead of browser-only validation
- [x] Email field validated server-side before any action
- [x] No raw HTML injection — all user content is React-escaped

### Dependency Security
- [ ] Run `npm audit` before each deploy
- [ ] Pin major dependency versions in package.json
- [ ] Enable Dependabot on GitHub repo
- [ ] Review all transitive dependencies quarterly

### Environment Variables
- [ ] Never commit `.env` or `.env.local` files (in .gitignore)
- [ ] Store API keys in Vercel Environment Variables
- [ ] Use `NEXT_PUBLIC_` prefix only for client-safe values
- [ ] Rotate API keys every 90 days

### Rate Limiting (To Implement)
- [ ] Add rate limiting middleware to `/api/` routes (e.g., Upstash Redis + ratelimit)
- [ ] Limit quiz form submissions to 5/minute per IP
- [ ] Add CSRF tokens to all state-changing forms
- [ ] Add honeypot field to contact/quiz forms for spam protection

### Deployment
- [ ] Enable HTTPS-only on Vercel (automatic)
- [ ] Enable DDoS protection (Vercel / Cloudflare)
- [ ] Set up Vercel Web Analytics (privacy-preserving)
- [ ] Configure error monitoring (Sentry)

### Ongoing
- [ ] Quarterly security review of all third-party scripts
- [ ] Monthly `npm audit` run
- [ ] Annual penetration test for high-traffic phases

## Overview

Static-first Next.js (App Router) portfolio deployed on Vercel. Pages are statically generated where possible for performance; API routes are used for simple analytics events.

## Getting Started

Run the dev server:

```bash
pnpm dev
```

## Build

```bash
pnpm build && pnpm start
```

## Deployment (Vercel)

- Connect the repo to Vercel, set framework to Next.js, and deploy. No special configuration is needed.
- API routes are enabled (we do not use static export).

## Analytics

- Client sends lightweight events to `/api/analytics` with `navigator.sendBeacon` fallback to `fetch`.
- Current events: `visit` (page views), `resume_download`.
- The API route forwards events to GA4 via Measurement Protocol when configured.

### Optional: Google Analytics 4 (server-side forwarding)

Set up GA4 without adding any client script by using Measurement Protocol:

1. Create a GA4 property

- Go to `https://analytics.google.com` and sign in.
- Admin → Create → Property → add a Web data stream (your domain).

2. Find your Measurement ID

- Admin → Data streams → select your Web stream → copy the Measurement ID (`G-XXXXXXXXXX`).

3. Create an API secret

- In the Web stream details, find "Measurement Protocol API secrets" → Create → copy the secret.

4. Add environment variables

- Create `.env.local` (not committed) with:

```
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
GA4_API_SECRET=your_api_secret_here
```

With these set, `/api/analytics` will forward `visit` and `resume_download` to GA4.

## Removed Storybook

- Storybook has been removed from scripts and dependencies.

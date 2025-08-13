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
- Current event: `resume_download`.
- Extend `app/api/analytics/route.ts` to process/store events (e.g., log, database, third-party).

### Google Analytics (optional)

This project can inject Google Analytics 4 (GA4) only when configured and only in production builds.

1) Create a GA4 property in Google Analytics and copy the Measurement ID. It looks like `G-XXXXXXXXXX`.

2) Add the following environment variable:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3) Make sure you set it in your production environment (e.g., Vercel Project Settings → Environment Variables). Locally, you can add it to a `.env.local` file.

Behavior:
- If `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set and `NODE_ENV` is `production`, the GA tag is injected automatically.
- In development (or if the variable is missing), GA is not loaded.

## Removed Storybook

- Storybook has been removed from scripts and dependencies.

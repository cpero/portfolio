## Cody Pero — Portfolio (Next.js + Tailwind + DaisyUI)

Static-first portfolio built with the Next.js App Router, Tailwind CSS v4, and DaisyUI. Most content is statically generated for performance; an API route handles lightweight analytics. Deployed on Vercel.

- Live site: `https://codypero.com`
- Tech: Next.js 15, React 19, TypeScript 5, Tailwind CSS 4, DaisyUI 5, Framer Motion 12, Vitest 3, Zod 4

### Features

- One-page layout: Hero, About, Skills, Experience, Projects, Contact
- Sticky navbar, anchor navigation, smooth scroll, and a skip-to-content link
- DaisyUI theme toggle with instant theme switching (system preference by default; no localStorage)
- Content-driven UI from JSON files validated via Zod at build time
- Projects grid with tags/stack and resume download CTA
- Accessibility and performance-minded defaults (reduced motion honored, no CLS on LCP image)
- SEO basics: metadata, `sitemap.xml`, `robots.txt`
- Lightweight analytics via API route; optional GA4 Measurement Protocol forwarding

## Theming

- Themes: `cupcake`, `cyberpunk`, `retro`, `dracula`, `night`
- Default to system preference before first paint to prevent theme flash.
- No persistence/localStorage is used by design, to avoid first paint flashing.

## Deployment (Vercel)

- Connect the repo to Vercel (Framework: Next.js). Deploy to your custom domain (e.g., `codypero.com`).
- Images use `images.unoptimized: true` with explicit dimensions.
- API routes are enabled for analytics; the rest of the site prerenders statically.

## Project Structure

- `app/`: App Router pages (`layout.tsx`, `page.tsx`, API routes, SEO files)
- `components/`: UI components (Navbar, ThemeToggle, sections, etc.)
- `lib/`: Utilities (`analytics`, `content`, `schemas`, `theme`)
- `content/`: JSON content files
- `tests/`: Vitest tests (jsdom)

## License

MIT

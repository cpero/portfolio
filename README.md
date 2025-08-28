## Cody Pero — Portfolio (Next.js + Tailwind + DaisyUI)

Fully static portfolio built with the Next.js App Router, Tailwind CSS v4, and DaisyUI. All content is statically generated for maximum performance and fast client load times. Deployed on Vercel.

### Getting Started

This project uses [pnpm](https://pnpm.io/) as the package manager.

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

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
- Vercel Analytics for privacy-friendly web analytics
- **Enhanced scroll behavior**: Custom hash navigation that properly accounts for scroll-margin-top CSS classes on page reload

## Theming

- Themes: `cupcake`, `cyberpunk`, `retro`, `dracula`, `night`
- Default to system preference before first paint to prevent theme flash.
- No persistence/localStorage is used by design, to avoid first paint flashing.

## Deployment (Vercel)

- Connect the repo to Vercel (Framework: Next.js). Deploy to your custom domain (e.g., `codypero.com`).
- Images use `images.unoptimized: true` with explicit dimensions.
- The entire site is statically generated for maximum performance and can be deployed to any static hosting service.

## Project Structure

- `app/`: App Router pages (`layout.tsx`, `page.tsx`, SEO files)
- `components/`: UI components (Navbar, ThemeToggle, sections, etc.)
- `lib/`: Utilities (`content`, `schemas`, `theme`)
- `content/`: JSON content files
- `tests/`: Vitest tests (jsdom)

## License

MIT

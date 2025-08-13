## Relevant Files

- `package.json` - Project scripts and dependencies (Next.js, Tailwind, DaisyUI, Framer Motion, Zod, Vitest).
- `.nvmrc` - Node 20 runtime version.
- `next.config.ts` - Next.js config (server output on Vercel; `images.unoptimized: true`).
- `tsconfig.json` - TypeScript configuration.
- `postcss.config.mjs` - PostCSS pipeline with Tailwind.
- `tailwind.config.ts` - Tailwind + DaisyUI themes (`cupcake`, `cyberpunk`, `retro`, `dracula`, `night`).
- `eslint.config.mjs` - ESLint flat config (`eslint-config-next`, `eslint-plugin-tailwindcss`, `eslint-plugin-jsx-a11y`).
- `.prettierrc.json` - Prettier config with `prettier-plugin-tailwindcss`.
- `app/layout.tsx` - App shell, fonts, no-flash theme script, metadata.
- `app/page.tsx` - Single-page sections (Hero, About, Skills, Experience, Projects, Resume, Contact).
- `app/not-found.tsx` - 404 page to produce static `404.html` on export.
- `app/sitemap.ts` - Generates `sitemap.xml`.
- `app/robots.ts` - Generates `robots.txt`.
- `app/globals.css` - Tailwind base and global styles.
- `app/fonts.ts` - Geist font via `next/font/local`.
- `components/Navbar.tsx` - Sticky navbar with hamburger and theme dropdown.
- `components/ThemeToggle.tsx` - DaisyUI theme toggle with swatches; persists selection.
- `components/ProjectCard.tsx` - Project grid card.
- `components/CaseStudyDetail.tsx` - Inline expansion content for a project.
- `components/SkillsMatrix.tsx` - Skills grid driven by JSON categories.
- `components/ContactForm.tsx` - Contact form with validation + states.
- (removed) `components/ConsentBanner.tsx` - Analytics consent UI for GA.
- (removed) `components/Analytics.tsx` - GA4 loader.
- `lib/schemas.ts` - Zod schemas for bio, experience, education, skills, projects, interests.
- `lib/content.ts` - Content loaders/validators; build-time validation.
- `lib/theme.ts` - Theme helpers: storage key, initial no-flash apply, SSR-safe reads.
- `lib/analytics.ts` - Client helpers to POST analytics events to `/api/analytics`.
- `lib/scroll.ts` - Smooth scroll and active anchor logic.
- `content/bio.json` - Bio content (name, title, summary, socialLinks).
- `content/experience.json` - Experience positions and highlights.
- `content/education.json` - Education data.
- `content/skills.json` - Skills categories and proficiency.
- `content/projects.json` - Projects list with fields per PRD.
- (removed) `content/contact.json` - Contact email and links now sourced from `content/bio.json` (`email` and `socialLinks`).
- `content/interests.json` - Interests list.
- `public/resume/cody-pero-resume.pdf` - Resume PDF asset.
- `public/fonts/Geist-*.woff2` - Self-hosted Geist font files.
- `vitest.config.js` - Vitest configuration with `jsdom`.
- `tests/lib/content.test.ts` - Validates JSON against Zod schemas.
- `tests/theme.test.tsx` - Tests theme persistence and no-flash behavior.
- `tests/anchors.test.tsx` - Tests anchor scrolling and active link highlight.
- `tests/contact-form.test.tsx` - Client validation and success/error states.
- `tests/inline-expansion-a11y.test.tsx` - A11y behavior for project expansion.
- `tests/images-required-attrs.test.tsx` - Ensures images have required attributes and hero `priority`.
- `tests/resume-event.test.tsx` - Verifies resume download analytics event.
- (removed) `.storybook/main.ts` - Storybook config.
- (removed) `.storybook/preview.ts` - Storybook globals.
- `.github/workflows/ci.yml` - Type-check, lint, tests. Deployments handled by Vercel.

### Notes

- Tests are consolidated under a single `tests/` directory per PRD. Run with `pnpm test`.
- Tests mirror the source directory structure (e.g., `tests/lib/content.test.ts` mirrors `lib/content.ts`).
- Deployment is via Vercel.
- Analytics uses API endpoint `/api/analytics`; no GA script.
- DaisyUI themes: `cupcake`, `cyberpunk`, `retro`, `dracula`, `night`. Default to system; persist in `localStorage`. Apply before first paint to prevent flash.
- Performance budgets: total JS ≤ 200KB gz, fonts ≤ 100KB woff2, LCP image ≤ 120KB, CLS < 0.05.

## Tasks

- [ ] 1.0 Project setup and configuration
  - [x] 1.1 Initialize Next.js App Router project with TypeScript and pnpm; ensure Node 20 via `.nvmrc`.
  - [x] 1.2 Install and configure Tailwind CSS and DaisyUI; configure Tailwind v4 `@plugin "daisyui"` in `app/globals.css` and set default theme to `cupcake`.
  - [x] 1.3 Add Geist via `next/font/local` in `app/fonts.ts`; place font files under `public/fonts/` with CLS-safe usage.
  - [x] 1.4 Configure ESLint: `eslint-config-next`, `eslint-plugin-tailwindcss`, `eslint-plugin-jsx-a11y`; use `eslint.config.mjs` (flat config) and add `.eslintignore`.
  - [x] 1.5 Configure Prettier with `prettier-plugin-tailwindcss`; add `.prettierrc.json` and `.prettierignore`.
  - [x] 1.6 Add Framer Motion, Zod, Testing Library, Vitest to `package.json`.
  - [x] 1.7 Scaffold directories: `app/`, `components/`, `lib/`, `content/`, `public/`, `tests/`.
  - [x] 1.8 Add npm scripts: `dev`, `build`, `start`, `type-check`, `lint`, `format`, `test`.

- [ ] 2.0 Deployment baseline
  - [x] 2.1 Configure `next.config.ts` with server output (API routes enabled) and `images: { unoptimized: true }` for Vercel.
  - [x] 2.2 Remove GitHub Pages deployment workflow and CNAME; set up Vercel project with `codypero.com`.
    - Note: GitHub Pages workflow removed and CNAME deleted. To finish domain setup, connect repo on Vercel and add `codypero.com` in Domains.

- [x] 3.0 Content model and validation
- [x] 3.1 Implement Zod schemas in `lib/schemas.ts` for `bio`, `experience`, `education`, `skills`, `projects`, `contact`, `interests` per PRD.
- [x] 3.2 Infer TypeScript types from schemas and export for UI usage.
- [x] 3.3 Create initial JSON content in `content/` matching schemas.
- [x] 3.4 Implement `lib/content.ts` to import JSON and validate at build time; fail build on invalid content.
  - [x] 3.5 Add a `prebuild` script to validate content, and a Vitest `tests/content-schema.test.ts` to verify schema coverage and errors on invalid samples.

- [x] 4.0 Application shell, navigation, and theming
  - [x] 4.1 Create `app/layout.tsx` with sticky `Navbar`, `skip-to-content` link, Geist font, and a no-flash theme inline script using `lib/theme.ts`.
  - [x] 4.2 Implement `components/Navbar.tsx` with hamburger menu on mobile, section anchors, and active link highlight.
  - [x] 4.3 Ensure anchors have `scroll-margin-top` on sections and smooth scroll behavior; add helper in `lib/scroll.ts` if needed.
  - [x] 4.4 Build `components/ThemeToggle.tsx` with DaisyUI swatch dropdown; default to system on first load; persist to `localStorage`.
  - [x] 4.5 Use `next/link` for internal navigation and `rel="noopener noreferrer"` for external links.

- [x] 5.0 Core sections (JSON-driven)
  - [x] 5.1 Hero/Overview: render name, title, value prop, CTAs (resume download, contact), headshot via `next/image` with explicit dimensions and `priority` if LCP.
  - [x] 5.2 About/Bio: render `bio.summary` with clear typography and mobile-first layout.
  - [x] 5.3 Skills matrix: render categories from `skills.json` with optional proficiency hints.
  - [x] 5.4 Experience timeline: roles, dates, accomplishments, tech; accessible timeline semantics.
  - [x] 5.5 Resume: inline summary and a visible download button linking to `public/resume/cody-pero-resume.pdf` that triggers an analytics event.

- [x] 6.0 Projects grid with inline expansion
  - [x] 6.1 Build `ProjectCard` using `projects.json` fields: `title`, `summary`, optional `details`, `stack`, `tags`, `links`, `images`, `dates`, `order`.
  - [x] 6.2 Grid layout with responsive columns; no separate project routes.
  - [x] 6.3 Optional inline expand/collapse on main page; manage focus, set `aria-expanded`, and restore focus on collapse. (skipped for now)

- [x] 7.0 Contact section and email delivery (simplified)
  - [x] 7.1 Skip form; add a Contact section with `mailto:` and social links sourced from `bio.json`.
  - [x] 7.2 Ensure links use `rel="noopener noreferrer"` and accessible labels.
  - [x] 7.3 Omit Resend/serverless integration for static export.

- [ ] 8.0 Accessibility, performance, and images
  - [x] 8.1 Ensure WCAG AA contrast, visible focus states, keyboard navigation, skip-to-content.
  - [x] 8.2 Honor `prefers-reduced-motion` globally for CSS and Framer Motion variants.
  - [x] 8.3 Use `next/image` with explicit `width`/`height` and appropriate `sizes`; mark LCP image with `priority`.
  - [x] 8.4 Lazy-load non-critical images/sections and defer non-critical scripts.
  - [x] 8.5 Verify budgets: total JS ≤ 200KB gz, fonts ≤ 100KB woff2, LCP ≤ 120KB, CLS < 0.05.

- [ ] 9.0 SEO and analytics
  - [x] 9.1 Define `metadata` in `app/layout.tsx` with title, description, and canonical policy using `codypero.com`.
  - [x] 9.2 Implement `app/sitemap.ts` and `app/robots.ts`.
  - [x] 9.3 Implement API-based analytics endpoint at `app/api/analytics/route.ts`; client sends events via `lib/analytics.ts`.

- [ ] 10.0 Testing and CI/CD
  - [x] 10.1 Configure Vitest (`vitest.config.ts`) with `jsdom` and Testing Library; create baseline tests under `tests/` as per PRD.
  - [x] 10.2 Remove Storybook completely (dependencies, scripts, configs).
  - [x] 10.3 Add CI workflow for type-check, lint, tests. Vercel handles deployments.
  - [x] 10.4 Update `README.md` with setup, analytics, and Vercel deployment instructions.

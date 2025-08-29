# Cody Pero — Portfolio

A personal portfolio website built with Next.js, Tailwind CSS, and DaisyUI to showcase my work and experience. This is a static landing page designed to demonstrate my skills and projects.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Language**: TypeScript 5
- **Animations**: Framer Motion 12
- **Content**: JSON files with Zod validation
- **Analytics**: Vercel Analytics

## Features

- **One-page layout**: Hero, About, Skills, Experience, Projects, Contact sections
- **Smooth navigation**: Sticky navbar with anchor links and smooth scrolling
- **Accessibility**: Skip-to-content link, reduced motion support, proper focus states
- **Performance**: Static generation, optimized images, no layout shift
- **SEO**: Metadata, sitemap, robots.txt
- **Dark theme**: Night theme for a modern, professional look

## Development

This project uses [pnpm](https://pnpm.io/) as the package manager.

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

- `app/`: Next.js App Router pages and layout
- `components/`: React components (sections, navbar, etc.)
- `lib/`: Utilities (content loading, schemas, theme)
- `content/`: JSON content files for easy updates
- `public/`: Static assets (images, resume, etc.)

## Content Management

All content is stored in JSON files in the `content/` directory:

- `bio.json` - Personal information and about section
- `skills.json` - Technical skills and expertise
- `experience.json` - Work history and experience
- `projects.json` - Portfolio projects with descriptions and links

## License

MIT

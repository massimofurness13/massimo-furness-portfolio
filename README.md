# Massimo Furness — Portfolio

A pure-gallery portfolio site for [massimofurness.com](https://massimofurness.com). Editorial broadsheet aesthetic — Instrument Serif italic masthead, paper-warm background, mono-numbered project index, single warm accent.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with `@theme` design tokens (paper / ink / accent)
- **Fonts** (via `next/font/google`): Instrument Serif (display), Geist (body), JetBrains Mono (labels)
- All project preview images are abstract SVGs in `public/projects/` — swap them for real screenshots whenever you want.

## Project map

```
src/
  app/
    layout.tsx        # fonts + metadata
    page.tsx          # composes Masthead → Gallery → Colophon
    globals.css       # Tailwind import + @theme tokens + paper grain
  components/
    Masthead.tsx      # hero / editorial header
    Gallery.tsx       # filter state + grid (client)
    FilterChips.tsx   # tag filter UI (client)
    ProjectCard.tsx   # individual project card
    Colophon.tsx      # footer
  data/
    projects.ts       # ALL project content + tag taxonomy + filter rules
public/
  projects/*.svg      # placeholder previews
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything you'll touch day-to-day lives in **`src/data/projects.ts`**:

- Add / remove / reorder projects in the `PROJECTS` array.
- Each project takes: `id`, `index`, `title`, `blurb`, `tags`, `url`, `status` (`"Public" | "Private" | "In progress"`), `year`, `image`.
- Tag taxonomy is the `Tag` union — extend it there and add the new tag to `FILTERS` if you want it as a filter chip.
- The **Education** filter intentionally also includes anything tagged `AI` (see `matchesFilter`). Tweak that rule there if needed.

### Replacing placeholder previews

Drop a real screenshot at `public/projects/<id>.png` (or `.jpg`/`.webp`) and update the `image` path on the matching project. Use a 16:10 aspect ratio for best fit (1600 × 1000 is plenty).

### Tweaking the look

Design tokens live at the top of `src/app/globals.css` inside the `@theme` block:

```css
--color-paper: #f5f2ec;
--color-ink: #14110d;
--color-accent: #b45309;
```

Change one value, the whole site updates.

## Deploy

The site is set up for **Vercel**:

```bash
npx vercel
```

Once deployed, point `massimofurness.com` (and `www.`) at the Vercel project in Domains. The `metadataBase` in `src/app/layout.tsx` is already set to `https://massimofurness.com` for OG tags.

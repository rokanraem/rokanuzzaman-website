# Muhammad Rokanuzzaman Mollah — Portfolio

A dark, scroll-driven single-page consulting portfolio, built in Next.js from the
approved Claude Design mock in [`design/`](./design).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender
npm start
```

The page is fully static — `next build` prerenders it, so it deploys to Vercel,
Netlify, or any Node host with no runtime data dependencies.

## Layout

```
app/
  layout.tsx        fonts (Archivo + IBM Plex Mono), metadata
  page.tsx          section order
  globals.css       design tokens and every style rule
components/         one component per section, plus Nav and Reveal
content/portfolio.ts  all copy and data
public/profile.webp   hero portrait
design/             the original Claude Design handoff bundle
```

**All copy lives in `content/portfolio.ts`** — editing the site's text should
never mean touching a component. The design tokens (colours, gutters, section
rhythm) are the CSS custom properties at the top of `app/globals.css`; the
amber accent is `--accent`, and changing that one value re-themes the site the
way the mock's tweaks panel did.

## Behaviour carried over from the mock

- **Scroll reveal** — `components/Reveal.tsx` fades and lifts `[data-reveal]`
  elements as they enter the viewport. Anything already on screen at load is
  shown immediately, so the hero never animates in. The hidden state lives in
  CSS behind a `.reveal-ready` class that the component only sets once it has
  mounted, which means the content stays visible if JS never runs.
- **Reduced motion** — `prefers-reduced-motion` disables the reveal, the hero
  glow, the marquee and the scroll hint.
- **Hero headline** — sized in container query units (`9.2cqi`) against its own
  column, not the viewport, so "INFORMATION" holds one line next to the photo.
  The mock hard-coded `height: 167px` on it; that was the natural height at the
  one viewport it was edited in, and it is dropped here so the headline sizes
  itself at every width.

## Added beyond the mock

The mock had a single desktop nav. Below 900px it collapses to a hamburger
panel, since the five inline links do not fit a phone.

## Placeholders still to replace

These carry over from the mock and are marked `TODO` in
`content/portfolio.ts`:

- `site.linkedin` — currently points at `#contact`.
- Three employer names in `experience`, each suffixed `(placeholder)`.
- Confirm the education entries (both currently read "National University") and
  the `© 2026 LOOMCHIP` footer line.

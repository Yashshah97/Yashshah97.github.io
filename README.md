# yashshah97.github.io

Personal portfolio — React 19, TypeScript, Tailwind CSS v4, Motion, Vite.

## Layout

The site is a GitHub Pages *user* site, so it is served from the root of the default
branch. Source lives in `app/`; the build writes `index.html` and a `static/` bundle
directory to the repo root, alongside the pre-existing `assets/` folder.

```
app/
  index.html          page shell, meta tags, fonts, JSON-LD
  src/
    App.tsx           section order
    components/       one file per section, plus shared primitives
    data/
      content.ts      all copy and structured content — edit this first
      brand-icons.ts  generated; see scripts/gen-icons.mjs
assets/               images, résumé PDF, favicons (served as-is)
scripts/gen-icons.mjs regenerates brand-icons.ts from simple-icons
index.html            build output — do not edit by hand
static/               build output
```

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # writes index.html + static/ to the repo root
npm run icons    # regenerate brand-icons.ts after adding a technology
```

`npm run build` clears `static/` first so old hashed bundles do not accumulate.

## Editing content

Almost everything is data. To change a role, publication, project or skill group,
edit `app/src/data/content.ts` and rebuild — no component changes needed.

Adding a technology name that has an official brand mark: add it to `MAP` in
`scripts/gen-icons.mjs`, then `npm run icons`. Names without a mark render as
text-only chips, which is the intended fallback.

## Deploying

Build, then commit both the source and the generated `index.html` and `static/`.
GitHub Pages serves the branch root directly; there is no Actions workflow.

## Notes

- The hero photo is `assets/img/yash-portrait.jpg` (4:5). `yash-portrait-lake.jpg`
  is an alternative crop — swap the `photo` field in `content.ts` to use it.
- Colours and type live in the `@theme` block in `app/src/index.css`.
- Reduced motion is respected: reveals render statically rather than animating.

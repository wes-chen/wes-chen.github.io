# wes-chen.github.io

Personal blog and portfolio for Wesley Chen, built with [Astro 6](https://astro.build) and deployed to GitHub Pages at [wes-chen.github.io](https://wes-chen.github.io).

A static, text-first site — no SSR adapter and no framework components. Everything is `.astro` or `.md`.

## Development

Requires Node `>=22.12`.

```sh
npm install       # install dependencies
npm run dev       # dev server at localhost:4321
npm run build     # static output to dist/
npm run preview   # preview the built output locally
```

## Project structure

```
src/
  pages/
    index.astro          # blog index (post list)
    about.astro          # about page
    blog/*.md            # blog posts
  layouts/
    Base.astro           # shared shell — header, nav, <html>
    Post.astro           # wraps Base for blog posts
  components/
    TileWall.astro       # animated wordmark background (homepage only)
    SEO.astro            # <meta> helpers
  data/
    experience.json      # work history rendered on /about
    projects.json        # projects rendered on /about
public/
  style.css              # all styles — single file, CSS custom properties
  fonts/syne-wall.woff2  # glyph-subsetted to "Wesley Chen" only
  favicon.ico / favicon.svg
```

## Adding a blog post

Create `src/pages/blog/<slug>.md` with this frontmatter:

```markdown
---
layout: ../../layouts/Post.astro
title: Post Title
date: YYYY-MM-DD
description: One-sentence description.
draft: false
---
```

Set `draft: true` to hide a post from the index without deleting it.

## Content data

`src/data/experience.json` and `src/data/projects.json` drive the About page.

- **Experience** fields: `title`, `company`, `period`, `description`, `url` (optional — rendered inline after description).
- **Project** fields: `title`, `description`, `url` (title link), `sourceUrl` (optional — renders as "· source" next to title).

## Styles

`public/style.css` is the single stylesheet. CSS custom properties are defined on `:root`:

- `--bg`, `--text`, `--muted`, `--link` — colour palette
- `--max-w: 680px` — content column width

The homepage overrides these under `body.front` (dark background, light text, animated tile wall).

## Gotchas

- **Font subset.** `public/fonts/syne-wall.woff2` is subset to exactly the glyphs in `"Wesley Chen"`. The wordmark phrase is defined in `src/components/TileWall.astro` (`tilePhrase`). Changing that string makes out-of-subset letters silently fall back to system fonts — re-subset the font if you change it.
- **`tilePerHalf * 2` must be even.** The tile-wall animation uses `translateX(-50%)` on a track of two identical halves; an odd span count breaks the seamless loop.

## Deployment

Pushes to `master` trigger the [GitHub Pages workflow](.github/workflows/deploy.yml), which builds with `withastro/action` and deploys via `actions/deploy-pages`.

## License

Source code is [MIT](LICENSE).

Writing in `src/pages/blog/` is © Wesley Chen, all rights reserved — not covered by the MIT license.

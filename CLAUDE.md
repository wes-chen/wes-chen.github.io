# CLAUDE.md

Personal blog and portfolio for Wesley Chen, built with Astro 6. Deployed to GitHub Pages at `wes-chen.github.io`.

## Commands

```sh
npm install       # install deps (Node >=22.12 required)
npm run dev       # dev server at localhost:4321
npm run build     # static output to dist/
npm run preview   # preview the built output locally
```

## Architecture

Static Astro site — no SSR adapter, no framework components. Everything is `.astro` or `.md`.

```
src/
  pages/
    index.astro          # blog index (post list)
    about.astro          # about page
    blog/*.md            # blog posts (frontmatter: layout, title, date, description, draft)
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
  fonts/syne-wall.woff2  # glyph-subsetted to "Wesley Chen" only (see below)
  favicon.ico / favicon.svg
```

## Key constraints

**Font subset — do not change the wordmark phrase without re-subsetting.**
`public/fonts/syne-wall.woff2` is subset to exactly the glyphs in `"Wesley Chen"`. The phrase is defined in `src/components/TileWall.astro` (`tilePhrase`). If you change that string, letters outside the subset will silently fall back to system fonts.

**`tilePerHalf * 2` must be even.** The CSS animation uses `translateX(-50%)` on a track that is two identical halves; an odd span count breaks the seamless loop.

## Blog post authorship — hard rule

**Claude must never write blog post prose.** All content in `src/pages/blog/*.md` must come from Wesley. Claude's role is limited to site infrastructure: layouts, styles, components, config, CI. If asked to write or draft a blog post, refuse and explain this constraint.

Wesley writes posts as plain markdown files and PRs them in without Claude involvement. Do not add co-authorship attribution to commits that only contain `.md` files in `src/pages/blog/`.

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

Experience entry fields: `title`, `company`, `period`, `description`, `url` (optional — rendered inline after description).

Project entry fields: `title`, `description`, `url` (title link), `sourceUrl` (optional — renders as "· source" next to title).

## Styles

`public/style.css` is the single stylesheet. CSS custom properties are defined on `:root`:

- `--bg`, `--text`, `--muted`, `--link` — colour palette
- `--max-w: 680px` — content column width

The homepage overrides these under `body.front` (dark background, light text, animated tile wall).

# AI Chronicles

The personal blog of Yaima Valdivia — a static [Astro](https://astro.build) site with a clean, minimal design. Posts, images, and assets are self-contained, and it deploys free on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Edits reload instantly.

Production build:

```bash
npm run build      # static output in ./dist
npm run preview    # serve the built site
```

## Deploy to Vercel

1. Put this folder in a Git repository (GitHub, GitLab, or Bitbucket).
2. At [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Astro (build `npm run build`, output `dist`). Click **Deploy**.

Or with the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

After it's live, add your domain in Vercel → **Settings → Domains**, then set `site` in `astro.config.mjs` to the final URL so the sitemap and RSS feed use correct links.

## Writing a post

Add a Markdown file to `src/content/posts/`. The filename is the URL slug (`my-post.md` → `/post/my-post`). Put the hero image in `public/images/posts/` (a ~1280px-wide `.webp` keeps pages fast).

Frontmatter:

```markdown
---
title: "Your Post Title"
category: "Ethics & Society"
description: "One or two sentences for the card and SEO."
pubDate: 2026-06-20
readTime: "3 min read"
heroImage: /images/posts/my-post.webp
heroCredit: "Image generated with DALL-E by OpenAI"   # optional
updatedDate: 2026-07-01                                # optional
heroPortrait: false                                    # optional, for tall images
---

Body in Markdown...
```

`git push` and Vercel rebuilds. The post shows up on the home listing, its category page, the RSS feed, and the sitemap automatically.

### Categories

Each post has one `category`. Pick from the existing set, written exactly:

- Foundations
- Ethics & Society
- Industry & Applications
- Creativity & Culture
- Reflections

The list and its order live in `src/categories.ts`. To add a new category, add the name there and use it in a post's `category` field. (The field is plain text today, so a misspelling creates a stray one — match the spelling exactly.)

## Pages and structure

- `/` — post listing, paginated 12 per page (`/2`, `/3`, …), with a category rail.
- `/category/<slug>` — posts in one category, also paginated.
- `/post/<slug>` — a single post.
- `/about` and `/contact` — bio and contact form.
- `/rss.xml` and `/sitemap-index.xml` — feed and sitemap.

```
public/
  images/            wordmark assets, profile photo, favicon, post images
  resume.pdf
src/
  consts.ts          site config: title, author, nav, social, form key
  categories.ts      category names + order
  content.config.ts  blog post schema
  content/posts/     the posts as Markdown
  layouts/           BaseLayout (head, SEO, header/footer)
  components/        Header, Footer, Listing, BlogCard, Pager
  pages/             [...page], category/, post/, about, contact, rss
  styles/global.css  all styles, driven by design tokens at the top
```

## Configuration

Most settings are in two files:

- `src/consts.ts` — site title, author, nav items, social links, resume path, and the **Web3Forms** access key for the contact form (get a free key at [web3forms.com](https://web3forms.com)).
- `src/styles/global.css` — design tokens at the top (`:root`): colors, fonts, spacing, radii. Change the look here without touching individual rules.

## Contact form

The contact form on `/contact` uses [Web3Forms](https://web3forms.com) — submissions email you. The access key is set in `src/consts.ts`.

## Notes

- Built with Astro; fully static, no server or database.
- Typography is [Inter](https://rsms.me/inter/); the palette is neutral (near-black on white).
- Images are optimized WebP. Per-page SEO: titles, meta descriptions, Open Graph and Twitter cards, canonical URLs, sitemap, and an RSS feed at `/rss.xml`.
- To replace the resume, drop a new PDF at `public/resume.pdf` (keep the name).

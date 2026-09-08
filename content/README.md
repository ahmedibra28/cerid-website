# Editing site content

The website reads content directly from the `.mdx` files in this directory.
Appwrite and environment variables are not required.

## Required frontmatter

Pages, projects, news, thematic areas, key achievements, and short content must
include:

```yaml
---
id: "unique-id"
createdAt: "2024-01-01T00:00:00.000Z"
title: "Page title"
slug: "page-title"
excerpt: "A short summary used on cards and by search engines."
order: "1"
---
```

Images must live in `public/images` and use an absolute site path:

```yaml
image: "/images/example-photo.jpg"
coverImage: "/images/example-cover.jpg"
```

The production build validates required fields, dates, and local image paths.
Run `pnpm build` after editing content to catch mistakes.

## Social updates

The three cards on the News page are stored in `content/social-updates`:

- `facebook.mdx`
- `twitter.mdx`
- `youtube.mdx`

Edit the title and Markdown body to feature a new update. Set `published_date`
to a date in `YYYY-MM-DD` format when the card represents a specific post, and
replace `external_url` with the direct post or official profile URL.

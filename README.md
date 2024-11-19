## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing articles

Write articles in mdx format in app/blog/(posts)/{article-name}.
Add static image to public/blog/{article-name} and reference using md link format.
For example, an image public/blog/my-post/my-image.jpg can be written as `![description](/blog/my-post/my-image.jpg)`

### Metadata

Export metadata as an object with title, description, and date.

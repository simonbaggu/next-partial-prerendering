## Next.js Partial Prerendering - Netlify Build Error

#1. Build works on Netlify with version next@15.0.0-canary.67,

3:16:27 PM: ❯ Using Next.js Runtime - v5.10.7
3:16:28 PM: Next.js cache restored
3:16:28 PM: ​
3:16:28 PM: Build command from Netlify app  
3:16:28 PM: ────────────────────────────────────────────────────────────────
3:16:28 PM: ​
3:16:28 PM: $ pnpm run build
3:16:29 PM: > @ build /opt/build/repo
3:16:29 PM: > next build
3:16:29 PM: ▲ Next.js 15.0.0-canary.67
3:16:29 PM: - Experiments (use with caution):
3:16:29 PM: · ppr
3:16:29 PM: Creating an optimized production build ...
3:16:32 PM: ✓ Compiled successfully
3:16:32 PM: Linting and checking validity of types ...
3:16:33 PM: Collecting page data ...
3:16:34 PM: Generating static pages (0/10) ...
3:16:35 PM: ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:16:35 PM: ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:16:35 PM: ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:16:35 PM: Generating static pages (2/10)
3:16:35 PM: Generating static pages (4/10)
3:16:35 PM: ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:16:35 PM: Generating static pages (7/10)
3:16:35 PM: ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:16:35 PM: ✓ Generating static pages (10/10)
3:16:35 PM: Finalizing page optimization ...
3:16:35 PM: Collecting build traces ...
3:16:44 PM: Route (app) Size First Load JS
3:16:44 PM: ┌ ○ / 8.96 kB 101 kB
3:16:44 PM: ├ ○ /\_not-found 145 B 91.7 kB
3:16:44 PM: ├ ◐ /items/[id] 145 B 91.7 kB
3:16:44 PM: ├ ├ /items/1
3:16:44 PM: ├ ├ /items/2
3:16:44 PM: ├ └ /items/3
3:16:44 PM: ├ ○ /opengraph-image.png 0 B 0 B
3:16:44 PM: └ ○ /twitter-image.png 0 B 0 B
3:16:44 PM: + First Load JS shared by all 91.6 kB
3:16:44 PM: ├ chunks/337-e31c1877b90d1764.js 37.6 kB
3:16:44 PM: ├ chunks/9c6597ea-9a3820804d8c691a.js 52.1 kB
3:16:44 PM: └ other shared chunks (total) 1.85 kB
3:16:44 PM: ○ (Static) prerendered as static content
3:16:44 PM: ◐ (Partial Prerender) prerendered as static HTML with dynamic server-streamed content
3:16:45 PM: ​
3:16:45 PM: (build.command completed in 16s)
3:16:45 PM: Next.js cache saved
3:16:45 PM: Next.js cache saved
3:16:45 PM: ​
3:16:45 PM: Functions bundling  
3:16:45 PM: ────────────────────────────────────────────────────────────────
3:16:45 PM: ​
3:16:45 PM: Packaging Functions from .netlify/functions-internal directory:
3:16:45 PM: - **_netlify-server-handler/_**netlify-server-handler.mjs
3:16:45 PM: ​
3:16:47 PM: ​
3:16:47 PM: (Functions bundling completed in 1.8s)
3:16:48 PM: ​
3:17:01 PM: (Netlify Build completed in 33.7s)
3:17:01 PM: Section completed: building
3:17:46 PM: Finished processing build request in 1m39.461s

#2. Build fails on Netlify with version next@15.4.0-canary.14

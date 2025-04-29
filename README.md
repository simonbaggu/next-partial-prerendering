## Next.js Partial Prerendering - Netlify Build Error

[Check commit 1c0f6af065d32275e719a952b3d0b78dd51f7775 to confirm the diff that caused the error.](https://github.com/simonbaggu/next-partial-prerendering/commit/1c0f6af065d32275e719a952b3d0b78dd51f7775)

#1. Build works on Netlify with version next@15.0.0-canary.67,

```
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
```

#2. Build fails on Netlify with version next@15.4.0-canary.14

```
3:24:52 PM: ❯ Using Next.js Runtime - v5.10.7
3:24:53 PM: Next.js cache restored
3:24:53 PM: ​
3:24:53 PM: Build command from Netlify app
3:24:53 PM: ────────────────────────────────────────────────────────────────
3:24:53 PM: ​
3:24:53 PM: $ pnpm run build
3:24:53 PM: > @ build /opt/build/repo
3:24:53 PM: > next build
3:24:54 PM:    ▲ Next.js 15.4.0-canary.14
3:24:54 PM:    - Experiments (use with caution):
3:24:54 PM:      ✓ ppr
3:24:54 PM:    Creating an optimized production build ...
3:24:59 PM:  ✓ Compiled successfully in 2000ms
3:24:59 PM:    Linting and checking validity of types ...
3:25:00 PM:    Collecting page data ...
3:25:02 PM:    Generating static pages (0/11) ...
3:25:02 PM:  ⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
3:25:02 PM:    Generating static pages (2/11)
3:25:02 PM:    Generating static pages (5/11)
3:25:02 PM:    Generating static pages (8/11)
3:25:02 PM:  ✓ Generating static pages (11/11)
3:25:02 PM:    Finalizing page optimization ...
3:25:02 PM:    Collecting build traces ...
3:25:14 PM: Route (app)                                 Size  First Load JS
3:25:14 PM: ┌ ○ /                                    3.42 kB         114 kB
3:25:14 PM: ├ ○ /_not-found                            145 B         111 kB
3:25:14 PM: ├ ◐ /items/[id]                            145 B         111 kB
3:25:14 PM: ├   ├ /items/[id]
3:25:14 PM: ├   ├ /items/[id]
3:25:14 PM: ├   ├ /items/1
3:25:14 PM: ├   └ [+2 more paths]
3:25:14 PM: ├ ○ /opengraph-image.png                     0 B            0 B
3:25:14 PM: └ ○ /twitter-image.png                       0 B            0 B
3:25:14 PM: + First Load JS shared by all             111 kB
3:25:14 PM:   ├ chunks/318-9832fb3e5fa8aa6f.js       45.1 kB
3:25:14 PM:   ├ chunks/e604230d-8ab0f41c09d0ff62.js  63.7 kB
3:25:14 PM:   └ other shared chunks (total)          1.88 kB
3:25:14 PM: ○  (Static)             prerendered as static content
3:25:14 PM: ◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
3:25:14 PM: ​
3:25:14 PM: (build.command completed in 20.8s)
3:25:14 PM: Next.js cache saved
3:25:14 PM: Next.js cache saved
3:25:14 PM: ​
3:25:14 PM: Plugin "@netlify/plugin-nextjs" failed
3:25:14 PM: ────────────────────────────────────────────────────────────────
3:25:14 PM: ​
3:25:14 PM:   Error message
3:25:14 PM:   Error: Failed assembling prerendered content for upload
3:25:14 PM:   ENOENT: no such file or directory, open '/opt/build/repo/.next/server/pages/items/[id].html'
3:25:14 PM: ​
3:25:14 PM:   Plugin details
3:25:14 PM:   Package:        @netlify/plugin-nextjs
3:25:14 PM:   Version:        5.10.7
3:25:14 PM:   Repository:     git+https://github.com/opennextjs/opennextjs-netlify.git
3:25:14 PM:   npm link:       https://www.npmjs.com/package/@netlify/plugin-nextjs
3:25:14 PM:   Report issues:  https://github.com/opennextjs/opennextjs-netlify/issues
3:25:14 PM: ​
3:25:14 PM:   Error location
3:25:14 PM:   In "onBuild" event in "@netlify/plugin-nextjs" from Netlify app
3:25:14 PM: ​
3:25:14 PM:   Resolved config
3:25:14 PM:   build:
3:25:14 PM:     command: pnpm run build
3:25:14 PM:     commandOrigin: ui
3:25:14 PM:     publish: /opt/build/repo/.next
3:25:14 PM:     publishOrigin: ui
3:25:14 PM:   plugins:
3:25:14 PM:     - inputs: {}
3:25:14 PM:       origin: ui
3:25:14 PM:       package: '@netlify/plugin-nextjs'
3:25:15 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:25:15 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:25:15 PM: Failing build: Failed to build site
3:25:15 PM: Finished processing build request in 41.664s
```

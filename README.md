# Medবই public directory

The public app reads the live healthcare catalogue in Atlas. Run `npm ci` and `npm run dev` for the local preview at http://127.0.0.1:3040.

## Deploy on Vercel

1. Import the public app repository and use the Next.js preset. Use the repository root if it contains this README and its package.json. If the public app is inside a larger repository, set the root directory to `public-app`. Use Node.js 22.x.
2. Add the environment variables below before building. Use read-only Atlas credentials scoped to each live cluster and configure Atlas network access for both clusters.
3. Assign the public HTTPS domain and set `SITE_URL` in the Production environment. Verify search, a detail page, and a photo in each catalogue with photos. Check `/robots.txt` and `/sitemaps/index.xml` on the public domain before submitting the sitemap to Search Console.

| Variable | Value |
|---|---|
| `MONGODB_CATALOGUE_SPLIT` | `true` |
| `MONGODB_HEALTHCARE_MEDICINE_URI` | Read-only Atlas connection string for `healthcare_medicines` |
| `MONGODB_HEALTHCARE_DIRECTORY_URI` | Read-only Atlas connection string for `healthcare_directory` |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Server-side credentials for authenticated photo delivery |
| `SITE_URL` | Production HTTPS origin, with no path |

Keep database and Cloudinary credentials in Vercel environment settings. The same-origin `/media` endpoint serves catalogue photos without exposing the signed Cloudinary URLs. Preview deployments opt out of indexing and omit the sitemap.

The public app supports optional `ADSENSE_CLIENT` and `ADSENSE_SLOT` values for AdSense. For a sponsored banner, set `SPONSOR_NAME`, `SPONSOR_TITLE_EN`, and an HTTPS `SPONSOR_URL`. `SPONSOR_TITLE_BN` supplies its Bangla headline. [Vercel Hobby terms apply to commercial use](https://vercel.com/docs/plans/hobby).

Run `npm run build` and `npm start` to test a production build locally.

## Search indexes

Autocomplete uses the fields in `lib/suggestion-fields.mjs`. The live clusters have sparse ascending indexes named `public_search_<field>`, with simple collation, on those fields. Create the same indexes on a new catalogue before enabling autocomplete there. The normal search form still works when suggestions are unavailable.

For a region check, compare the function region in Vercel’s project settings with both cluster regions in Atlas. Measure first requests and repeated requests separately. The latter can be served from the app’s cache.

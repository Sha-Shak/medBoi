# medBoi public directory

This standalone Next.js project reads the healthcare catalogue in Atlas. Its public pages render on the server and only query display fields. It does not use the staff workspace or its authentication, and has no write routes.

Install with `npm ci`. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to a read-only Atlas credential for `medicine_catalog_prod`. Run `npm run dev` for the local preview at http://127.0.0.1:3040. Use `npm run build` and `npm start` for a production Node host.

Set `SITE_URL` to the production HTTPS origin. It enables canonical URLs, English/Bangla alternates, and the sitemap index at `/sitemaps/index.xml`. The preview stays out of search indexes until an origin is set. Submit the sitemap index in Search Console after the production domain is live.

Set `ADSENSE_CLIENT` and `ADSENSE_SLOT` to enable the responsive below-content Google AdSense unit and `/ads.txt`. Set up Google’s consent tooling where required before enabling advertising. The independent sponsored banner appears only when `SPONSOR_NAME`, `SPONSOR_TITLE_EN`, and an HTTPS `SPONSOR_URL` are configured. `SPONSOR_TITLE_BN` supplies its Bangla headline.

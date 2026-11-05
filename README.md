# Jarrad Motors website

Static HTML hosted on GitHub Pages at https://jarradmotors.com.au/. Production publishes from `main`; review changes on a feature branch before merging. No framework, package installation or build step is required.

## Local preview

From this repository, run `python3 -m http.server 8768 --bind 127.0.0.1`, then visit http://127.0.0.1:8768/. Serve from the repository root because navigation and shared assets use root-relative URLs.

## Shared design

- `assets/site.css` owns the ivory (`#FAF4E8`), charcoal and white palette, locally hosted Montserrat, responsive layouts, navigation, buttons, focus and print styles.
- `assets/site.js` progressively enhances the mobile navigation. Links remain available without JavaScript. Enter/Space opens the native resource disclosure; Escape closes menus and restores focus.
- Header, navigation and footer markup is intentionally included in each static HTML document. Keep these common patterns consistent when editing pages. There is no client-side content injection.
- `assets/brand/` contains proportional web exports of the approved V2 engraved artwork. Transparent badge exports retain the original artwork and negative spaces. Only transparent outer margins were trimmed. Keep the old `logo.jpg` URL available for compatibility, but do not use it in new layouts.
- The small-print badge serves at 160px (8.9 KB) or 320px (24.1 KB), rather than sending the 784 KB source SVG. The footer uses the supplied white reverse. The favicon isolates the approved engraved truck on an ivory icon tile because the full badge lettering is unreadable at 16–32px. The touch icon retains the full badge. The social card is a 1200×630 composition of the approved full badge and Montserrat contact typography.
- The original workshop photo has responsive 640px and 1200px WebP derivatives. Existing source photos, towing images and key-cutting video remain available.
- Montserrat is locally served with `font-display: swap`; its SIL Open Font License is in `assets/fonts/OFL.txt`.

## Protected routes and booking

Keep `/booking.html` unchanged as a URL: printed service-sticker QR codes link directly to it. Retain the MechanicDesk iframe source and the direct form fallback link. This is an embedded provider form, not a custom booking API. Do not style or replace its internal fields, solve its CAPTCHA or create test bookings on the production provider.

Keep `CNAME`, existing page URLs, legacy redirect directories, canonical tags, descriptions, analytics, structured business data, `robots.txt`, and `sitemap.xml` intact unless a specific change is reviewed. Structured-data image references now use the current branded social image; other structured data is preserved. Contact and after-hours breakdown numbers have distinct purposes; retain the existing towing instructions.

See [brand review and verification](.github/BRAND_REVIEW.md) for this pass and screenshots.

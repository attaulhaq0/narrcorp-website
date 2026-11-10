# Website launch and client handover

## What each review covers

| Role                           | Checks before release                                                                                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copy editor and business owner | Accurate service scope, clear proposition, consistent tone, readable headings, correct email, approved commitments and genuine evidence.                                                       |
| Designer and motion reviewer   | Spacing, typography, color contrast, image crops, unique portraits, complete artwork, clean animation edges and loops. Inspect phone, tablet, desktop and breakpoint boundaries.               |
| Frontend developer             | Production build, responsive layouts, working anchors, menu, disclosures, tabs and carousel. Check keyboard operation, missing assets, console errors and JavaScript-free content.             |
| Accessibility reviewer         | Semantic headings and landmarks, visible focus, keyboard order, accessible control names, contrast and reduced-motion preferences. Automated scanning complements manual review.               |
| SEO reviewer                   | Descriptive title and description, one H1, crawlable HTML, canonical URL, XML sitemap, robots directives, social preview and structured data that agrees with visible content.                 |
| Security and release reviewer  | No credentials or private records in source, assets, archive or Git history. Audit dependencies, deploy only static output, and verify HTTPS, redirects, response headers and real 404 status. |
| Client acceptance reviewer     | Correct business details, approved content, working contact destination, access to source and hosting, backup and update instructions.                                                         |

## Reproduce the source checks

Use the Node version required by package.json. From the repository root:

```sh
npm ci
npm run format:check
npm run check
npm run build
npm audit --omit=dev
python scripts/check-public-files.py
```

Complete both secret scans in publishing.md before a public push. Run browser checks against the production preview, then repeat essential checks on the deployed domain. The host serves the contents of dist; it does not need Node or node_modules.

## Hostinger acceptance

1. Select the Narrcorp website and narrcorp.com. Preserve an existing release before uploading a new one.
2. Extract the release so index.html and .htaccess sit directly in the website document root, normally public_html. Keep local archives outside the public document root after extraction.
3. Confirm the homepage returns HTTP 200, HTTPS is valid, and HTTP and www requests redirect to https://narrcorp.com/. Confirm a nonexistent URL returns HTTP 404 with the custom error page.
4. Confirm images, CSS, scripts and all three hero video formats load. Video byte-range requests should work. Check navigation, disclosures, tabs, carousel, motion preferences and contact links again.
5. Verify robots.txt, sitemap.xml, llms.txt and social-preview.jpg are publicly accessible. Confirm no host-level noindex directive is present. Check compression, cache policy, nosniff, framing and referrer headers.
6. Confirm hr@narrcorp.com is provisioned. The business owner should test incoming and outgoing mail and check its SPF, DKIM and DMARC configuration. A working mailto link does not prove mailbox delivery.

## Search and AI discovery after launch

Verify ownership in Google Search Console and Bing Webmaster Tools and submit https://narrcorp.com/sitemap.xml. Check indexing and search performance after crawlers visit the live site. Track real Core Web Vitals once enough visitor data exists; local measurements are laboratory evidence.

The page exposes clear services, business context, contact details and linked Organization, WebSite, WebPage and OfferCatalog schema. This supports machine-readable discovery. llms.txt is an optional summary, not a guarantee of inclusion in AI answers. Add genuine case studies, approved testimonials and useful service pages as the business supplies them. Do not invent ratings, offices, partnerships or results to strengthen SEO.

Google Analytics 4 is optional and stays blocked until a visitor accepts analytics. Before release, verify first-visit blocking, persistent choices, withdrawal and cookie removal, browser privacy signals, keyboard access and mobile layouts. Confirm the production stream receives a page view and the fixed contact_click event. Keep advertising tracking disabled. Review privacy disclosures and consent requirements whenever data collection changes.

## Handover and maintenance

Give the client the live domain, source repository, release archive and checksum, approved copy, QA results and any checks still awaiting business input. Document ownership of the domain, hosting and email. Keep credentials in the owner's secure account or password manager.

For each update: edit source, verify, build, archive the current release, upload the new static files, and perform live smoke checks. Restore the prior release if acceptance fails. Schedule dependency and business-content reviews with the owner. Cross-browser checks on real Safari/iOS and Android devices remain useful in addition to Chromium automation; report the actual tested scope.

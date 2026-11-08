# Development and Hostinger launch guide

## Recommended stack

For this single-page website, use semantic HTML, modern CSS and a small amount of JavaScript. This gives a direct, understandable source structure and static files that Hostinger can serve without a production application server.

| Part | Choice | Purpose |
| --- | --- | --- |
| Page structure | HTML | Accessible sections, headings, navigation and links |
| Design | CSS with Grid, Flexbox and custom properties | Responsive layout, spacing, typography and reusable styles |
| Interactions | Small JavaScript modules | Mobile menu and optional enhancements |
| Contact | Email link to hr@narrcorp.com | Opens the visitor's email application |
| Media | Optimized images and optional short MP4 | Visual storytelling with a still-image fallback |
| Version control | Git and GitHub | Reviewable changes and release history |
| Hosting | Hostinger static web hosting | Serves the finished public website files |

No database, CMS, frontend framework or server API is required by the current scope. If the site later gains multiple pages or repeated templates, evaluate Astro with static output. If the business needs frequent self-service editing, evaluate a CMS separately.

Suggested structure once implementation begins:

```text
index.html
assets/
  css/main.css
  js/main.js
  images/
  fonts/
  video/
404.html
robots.txt
sitemap.xml
```

Keep development documentation and scripts in their current folders. Prepare the hosting package from an explicit list of public website files, rather than uploading the entire repository.

## Stage 1: Business and content

Confirm which services are actually offered, who the primary buyer is, what action the page should encourage, and the approved brand spelling. Review the homepage copy and remove unsupported promises. Confirm domain ownership and the hr@narrcorp.com mailbox independently.

Outcome: approved copy and a clear scope for each section.

## Stage 2: Layout and visual direction

Choose one coherent direction for typography, colors, imagery and motion. Establish a desktop composition and mobile layout before building the full page. Use a readable type scale and a consistent spacing system. Design the mobile menu, email buttons and keyboard focus states as part of the page.

Outcome: a reviewed design that fits the approved content.

## Stage 3: Build a representative slice

Implement the header, hero and one service block first. Confirm the design works on a narrow screen and a desktop screen. Establish CSS variables for colors, spacing, type and container widths before expanding the rest of the page.

Outcome: a tested pattern for the remaining sections.

## Stage 4: Complete the page

Add About, Services, Why Narrcorp, the closing CTA and the footer. Add Testimonials only when genuine reviews and publication permission are supplied. All important content should remain available if JavaScript fails or is disabled. Enhancements must respect reduced-motion preferences.

Outcome: complete navigation and a useful email contact journey.

## Stage 5: Quality checks

- Check small phones, tablets, laptops and wide screens for wrapping and overflow.
- Navigate by keyboard: menu, links and buttons need visible focus and sensible order.
- Use one main heading, logical section headings, semantic landmarks and accurate image alternative text.
- Verify all anchors and email links. A mailto link is not a submitted message.
- Set a descriptive page title, meta description, favicon and social-sharing image.
- Set the canonical URL, sitemap and production robots policy after the final public URL is confirmed.
- Use Organization metadata only for verified business facts.
- Optimize image dimensions and formats; lazy-load suitable below-the-fold media, while prioritizing the hero.
- Give optional video a poster, playback control where appropriate and a reduced-motion fallback.
- Use performance and accessibility tools alongside manual checks. A score alone does not establish usability.
- Run the tracked-file check and redacted secret scans before pushing or packaging.

Privacy and cookie requirements depend on the actual data practices and jurisdiction. If analytics, tracking, forms or uploads are added, review the notices and any consent needs before launch. The current scope does not add those features.

## Stage 6: Hostinger staging and launch

1. Verify the purchased product includes web hosting, domain connection and access to hPanel/File Manager or an appropriate upload method.
2. Prepare an explicit static release package containing the public website files.
3. Test on a temporary or staging location. Keep unapproved content out of search results; use access protection if the preview is private.
4. Verify the domain and mailbox, then review HTTPS and the planned DNS changes. Preserve existing MX, SPF, DKIM, DMARC and verification records.
5. Obtain approval for the finished site and the production release. Back up any existing website before replacing its files.
6. Upload the reviewed static package to the website's document root, normally public_html. Do not upload private material, Git history, tooling or source documentation.
7. Check HTTPS, navigation, media, metadata, email links, the 404 page and phone layouts on the real domain.
8. Record the release commit and keep the previous release available for rollback.

The exact upload method and document root must be verified in the actual Hostinger account. No Hostinger or DNS changes have been made for this project.

## Working with Git

Commit one coherent change at a time, with messages that explain the work. Review diffs and the tracked file list before each push. Use a branch and pull request for substantial implementation work. Keep a clean, verified main branch and tag the accepted release when it is ready.

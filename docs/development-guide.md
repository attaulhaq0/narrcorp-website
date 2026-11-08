# Development and Hostinger launch guide

## Selected stack

Astro is a web framework. TypeScript is the programming language used for typed content and the small navigation enhancement. CSS controls appearance. Astro combines these source files into a static website: HTML, CSS, images and a small browser script.

| Part                 | Choice                 | Why it is here                                    |
| -------------------- | ---------------------- | ------------------------------------------------- |
| Framework            | Astro, static output   | Reusable components and fast static pages         |
| Content and behavior | TypeScript             | Clear content structure and checked code          |
| Styling              | Regular CSS            | Direct control over layout and responsive design  |
| Fonts                | Self-hosted Manrope    | No external font request from visitors            |
| Images               | Astro image processing | Responsive WebP sizes                             |
| Contact              | Email links            | Opens an email application without a form/backend |
| Hosting              | Hostinger, planned     | Serves the generated static files                 |

No database, CMS or application server is required for this scope.

## Start locally

Install Node 24 LTS and open a terminal in the repository folder. The Node version must satisfy the engine requirement in package.json. Run development commands from this repository folder.

```sh
npm ci
npm run dev
```

`npm ci` installs the exact dependency versions recorded in package-lock.json. It replaces this project's node_modules to reproduce the locked dependency tree. `npm run dev` starts the local development server; use the address Astro prints. Save a source file to see the change. Press Ctrl+C in that terminal to stop the server.

Use `npm install` when deliberately adding or updating a package, then review and commit both package.json and package-lock.json.

## Make a change

1. Edit wording in `src/data/homepage.ts`. Keep service descriptions accurate to the business's actual offering.
2. Edit section markup in `src/components/`. A `.astro` file can contain a TypeScript frontmatter block between `---` lines followed by HTML markup.
3. Change colors and spacing in `src/styles/global.css`. Variables in `:root` are the shared design tokens; responsive adjustments live in the media queries below.
4. Add processed website images to `src/assets/`. Files in `public/` are copied directly without image optimization.
5. Review the result on a phone width and a desktop width. Check keyboard focus, heading readability and email links.

`src/pages/index.astro` assembles the sections. `src/layouts/SiteLayout.astro` owns the document head and common styles. Keep important content in HTML, including when JavaScript is disabled.

## Check and build

```sh
npm run format
npm run format:check
npm run check
npm run build
npm run preview
```

Formatting keeps source readable. `check` validates Astro and TypeScript. `build` creates a fresh static release in `dist/`. `preview` serves that release locally; source edits require another build to change this preview. The development server updates directly from source.

The mobile menu supports Escape, focus return and closing after section selection. Without JavaScript, navigation stays visible. All motion respects reduced-motion settings. There are no testimonial placeholders, forms, trackers or application uploads.

Before committing, run the tracked-file check and redacted secret scans described in the publishing guide. Stage only the intended files, inspect the diff and commit a clear description of the change. GitHub Actions repeats formatting, type, build and publication checks.

## Launch to Hostinger

1. Have the business approve the copy and confirm which services it offers. Obtain genuine, permissioned testimonials before adding reviews.
2. Verify that the Hostinger product includes website hosting and that the correct domain is connected. Confirm hr@narrcorp.com exists and can receive a test email; a mailto link does not create the mailbox.
3. Confirm the final production URL. Set Astro's `site` option in astro.config.mjs, add canonical and absolute social-sharing metadata, and generate a sitemap for the production URL.
4. The preview currently has `noindex, nofollow` in SiteLayout and `Disallow: /` in public/robots.txt. After approval, change both policies for launch. Robots exclusions do not make a site private; use hosting access protection for private previews.
5. Run all checks and build again. Back up the existing hosting contents before replacing them. Use the correct website's document root, commonly `public_html` for the primary Hostinger website; verify it in hPanel.
6. Upload the **contents of dist**, including `_astro`, index.html, 404.html, favicon.svg and robots.txt. Do not upload the repository, node_modules, documentation, source, credentials or local research. Configure the host's 404 handling to serve 404.html.
7. Verify HTTPS, the intended www/non-www redirect, navigation, images, custom 404 and email link on the actual domain. Send a real mailbox test separately. Check mobile and desktop again.
8. Record the deployed commit and retain the previous release for rollback.

Node is used on the developer's machine and in CI to build. Hostinger only serves the static output. Automatic uploads can be considered later; hosting credentials belong in a secret store, never in source or browser code.

Privacy notices and consent requirements should be reviewed if forms, analytics or other data collection are added in the future.

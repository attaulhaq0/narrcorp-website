# Narrcorp

Technology consulting, digital engineering and specialist talent services.

Narrcorp's website is being developed as a focused, responsive landing page that helps business teams understand the offering and start a conversation.

**Website contact:** [hr@narrcorp.com](mailto:hr@narrcorp.com)

## Project status

The responsive landing page is implemented with Astro, TypeScript and regular CSS using static output. It uses a white and forest-green palette, serif display typography, illustrative photography, a responsive animated hero sequence and layered service cards. Homepage copy remains a proposal for business review; it does not establish verified delivery capabilities. Production hosting has not been configured.

## Website scope

Header and navigation, hero, about, services, why Narrcorp, approved testimonials when available, closing call to action, and footer with email contact.

The contact journey uses email. The initial scope has no contact form, application upload, user accounts or backend service.

## Project documents

- [Site plan](docs/site-plan.md)
- [Homepage copy](docs/homepage-copy.md)
- [Publishing checks](docs/publishing.md)
- [Development and Hostinger launch guide](docs/development-guide.md)

## Development

Use Node 24 LTS (or a supported version satisfying package.json) and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. Changes to source files update the development preview.

```sh
npm run format:check
npm run check
npm run build
npm run preview
```

The production build writes static files to `dist/`. Upload the contents of that folder to the configured Hostinger website root after completing the launch checks. Node is a development/build requirement; the static production site does not need a Node server.

## Source map

- `src/data/homepage.ts`: typed homepage copy, services, principles and email.
- `src/components/`: header, hero and individual page sections.
- `src/layouts/SiteLayout.astro`: HTML document, metadata, fonts and global styles.
- `src/styles/global.css`: colors, typography, layout and responsive rules.
- `src/scripts/motion.ts`: scroll reveals, headline highlighting and decorative motion.
- `src/assets/`: artwork processed into responsive images by Astro.
- `src/pages/`: homepage and custom 404 page.
- `public/`: files copied directly to the static output, including the favicon and robots policy.

Typography uses browser-native serif and sans-serif fonts. Contact links open the visitor’s email application. The site has no analytics, form service or runtime API credentials. Testimonials are omitted until genuine, approved quotations are available. Photography is illustrative. Visitors can pause hero animation, and reduced-motion preferences are respected.

The development build is excluded from search indexing. Before launch, approve service copy, verify domain/mailbox operation, configure the canonical URL and sitemap, and update the robots policy. See the development guide.

GitHub Actions checks formatting, types, the static build, tracked publication paths and complete Git history for exposed secrets.

Maintained by [Sheikh Atta-ul-Haq](https://github.com/attaulhaq0).

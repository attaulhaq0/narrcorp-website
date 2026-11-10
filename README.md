# Narrcorp

Technology consulting, digital engineering and specialist talent services.

A responsive, motion-led landing page that helps business teams understand Narrcorp's services and start a conversation. Built with Astro, TypeScript and CSS; deployed as static files on Hostinger.

[Live website](https://narrcorp.com/) · [Visual case study](docs/showcase.md) · [Portfolio](https://attaulhaq-spatial-portfolio.vercel.app/#freelance-web-development)

![Narrcorp headline and looping hero animation](docs/images/narrcorp-hero-motion.gif)

**Website contact:** [hr@narrcorp.com](mailto:hr@narrcorp.com)

## Project status

The responsive landing page is implemented with Astro, TypeScript and regular CSS using static output. It uses white, mint and forest-green surfaces, serif display typography, photography, a responsive animated hero and layered service cards. The static release includes production search metadata and Hostinger configuration for https://narrcorp.com/. The website is live on Hostinger. Client service approval, search-console ownership and mailbox verification remain owner responsibilities.

## Website scope

Header and announcement, hero, technology platforms, about, eight services, why Narrcorp, technology ecosystem, industry planning scenarios, specialist expertise, practical guidance, closing call to action, and footer with email contact.

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

Email links open the visitor’s email application. Optional Google Analytics 4 loads on the production domain after a visitor accepts analytics. The footer provides Privacy policy and Cookie settings controls. Analytics measures page views and contact clicks without sending email addresses or enquiry content. The site has no form service or runtime API credentials. Testimonials are omitted until genuine, approved quotations are available. Platform icons provide technical context, and industry content guides project planning. Decorative motion respects visitors' reduced-motion preferences.

The production homepage is indexable and has a canonical URL, sitemap, Open Graph image and structured service data. The 404 page is excluded from indexing. Keep externally shared review deployments access-protected or add a hosting-level noindex header. See the development guide for deployment and verification.

GitHub Actions checks formatting, types, the static build, tracked publication paths and complete Git history for exposed secrets.

Maintained by [Sheikh Atta-ul-Haq](https://github.com/attaulhaq0).

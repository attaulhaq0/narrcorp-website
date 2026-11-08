# Narrcorp project instructions

This repository is the independent Narrcorp website codebase.

- Run development, build and Git commands from this repository root.
- Keep changes scoped to this website. Do not modify sibling projects or introduce imports, asset links or filesystem dependencies outside this repository.
- Use Astro with static output, TypeScript and regular CSS.
- Keep homepage copy in src/data/homepage.ts, page sections in src/components, and shared styling in src/styles/global.css.
- Keep dependency changes in this repository's package.json and package-lock.json. Publish only the generated dist contents to the website host.
- Use hr@narrcorp.com for the email-only contact journey. Add testimonials only when genuine, approved quotations are supplied.
- Keep credentials, private records, design research and generation configuration outside the public source.
- Before committing source changes, run npm run format:check, npm run check, npm run build and the publication checks described in docs/publishing.md.

# Publishing checks

Before every public push:

1. Review changed files and the complete tracked-file list. Stage specific paths.
2. Run `python scripts/check-public-files.py`.
3. Run `gitleaks git . --redact --no-banner` to scan the full history.
4. Run `gitleaks dir . --redact --no-banner` to check the working directory.
5. Resolve findings before pushing. Do not bypass a finding without a reviewed explanation.

Keep credentials, private records, environment files, operational receipts and draft media outside this repository. Only approved website assets and publication-ready project documents should be tracked.

The GitHub workflow scans history and checks forbidden paths on pushes and pull requests. GitHub checks run after a push, so they complement the local checks rather than prevent an initial exposure. Secret detection reduces risk and cannot guarantee every possible secret will be detected.

Commits state what changed and why. Use the existing author identity and preserve the real development history.

---
name: ehga-design
description: Use this skill to generate well-branded interfaces and assets for electrichasgoneaudi.net (EHGA), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and component CSS for the 2026 redesign.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (tokens/, components.css, specimen.html, assets/).

Rules of thumb when building for EHGA:
- Import `styles.css` (it pulls fonts, tokens and component classes). Never hardcode colors/sizes — use the `--*` custom properties.
- Dark chrome (nav/hero/footer `--ink`), light content (`--paper`). One accent: `--accent` orange. The logo's red is logo-only.
- Display type: Archivo 800–900 UPPERCASE. Body: Instrument Sans. Microlabels: mono uppercase letterspaced.
- Use the real logo `assets/logonew.png` on dark backgrounds only. Never redraw it.
- Car imagery comes from media.evkx.net; spec data and calculations from the EVKX.net API (attribute it).
- Always include: "Independent fan site. Not affiliated with AUDI AG."
- Follow the page templates in README.md; the interactive reference is `EHGA Redesign.dc.html` at the project root.

If creating visual artifacts (slides, mocks, prototypes), copy assets out and create static HTML files. If working on production code (the Hugo site), use these classes/tokens directly in the theme.

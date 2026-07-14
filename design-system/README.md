# EHGA Design System — electrichasgoneaudi.net redesign

Design system for the 2026 redesign of **electrichasgoneaudi.net** ("Electric has gone Audi" / EHGA) — the world's largest and most detailed independent site about all-electric Audi models. This document + the token/component CSS is the source of truth for rebuilding the site. The approved reference implementation is the interactive prototype `EHGA Redesign.dc.html` in this project.

**Sources**: live site https://electrichasgoneaudi.net · repo `electrichasgoneaudi/electrichasgoneaudi.github.io` (Hugo) · images served from `media.evkx.net` · spec data & calculations to come from the **EVKX.net API** (`evkx/evkxapi`).

## Index
- `styles.css` — single import entry point (fonts + tokens + components)
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — CSS custom properties
- `components.css` — class implementations of every component
- `specimen.html` — visual reference of all tokens + components
- `assets/logonew.png` — the official logo (keep as-is; white wordmark + red "audi")
- `SKILL.md` — agent instructions (Claude Code / Codex compatible)

## Product context
Content site (Hugo, bilingual EN/Norwegian) with four content types: **Models** (11 models, ~14 sub-sections each incl. Specifications, Options Guide, Knowledge Exchange with FAQ/Problem Database/Updates Database), **Technology**, **Guides**, **Articles**. New interactive features in the redesign: model comparison tool, per-variant full-specifications page, range calculator (EVKX API), gallery with lightbox.

## Content fundamentals
- Voice: enthusiast-expert, factual, first-person-plural site voice ("We have compiled…"). Direct "you" to the reader. No emoji. No marketing fluff — numbers and facts carry the copy.
- Headlines: short, declarative, uppercase in display type ("Every electric Audi. In detail.").
- Microlabels: MONO UPPERCASE with wide tracking used as section eyebrows ("INDEPENDENT · IN DEPTH · SINCE 2020").
- Data honesty: always state test cycle (WLTP for Europe, CLTC for China). Attribute the backend: "Calculations powered by the EVKX.net API".
- Legal footer line everywhere: "Independent fan site. Not affiliated with AUDI AG."

## Visual foundations
- **Theme**: dark chrome (nav, hero, footer, feature bands = `--ink` #0C0E11) with light content pages (`--paper` #F4F3F0). Dark and light bands alternate for rhythm; `--paper-2` for secondary light bands.
- **Accent**: single accent, electric orange `--accent` #E8590C (hover #C2410C). Used for: links, primary buttons, microlabels, active states, arrows (→). Never use blue/purple. The logo's red (#C8102E approx, `--brand-red`) belongs to the logo only.
- **Type**: Archivo (800–900, UPPERCASE, tight tracking) for display/headings/numbers; Instrument Sans for body; monospace (system) for microlabels/spec-labels/breadcrumbs — always uppercase + letterspaced. Never mix roles.
- **Imagery**: real car photography from media.evkx.net fills 16:9 card media or full-bleed heroes; portrait tiles get a bottom scrim gradient (`--scrim-photo`) with a mono caption. No illustrations, no drawn SVG artwork.
- **Cards**: white on light (1px `--border-on-light`, radius 12px); `--ink-2` on dark (1px `--border-on-dark`). Interactive cards lift on hover: `translateY(-3px)` + `--shadow-card-hover` (on dark: orange border glow instead of shadow).
- **Hover states**: transform+shadow on cards, background tint `--hover-row-tint` on rows, border-color shifts on inputs/pills. Transitions 0.2s ease. No bounces, no fades between pages.
- **Radii**: 6 buttons · 10 rows/tiles · 12 cards/tables · 16 feature panels · 99 pills.
- **Layout**: 1280px container, 32px page padding, 64px sticky nav, 72px color-band padding, 64px between sections. Long-form articles: 760px prose column with 1080px breakout imagery, centered mono captions.
- **Navigation patterns**: sticky dark top nav (blur backdrop, rgba(12,14,17,.9)); model pages get a second sticky tab bar (light, blur) that anchors-scrolls to sections; breadcrumbs in mono uppercase with accent links.
- **Transparency/blur**: backdrop-filter blur(12–14px) on sticky bars and lightbox scrims only.

## Iconography
Essentially none — the system is typographic. Arrows are the text glyph `→`, accordion toggles are `+`/`−`, close is `✕`. One inline SVG magnifier for search. If a real icon set becomes necessary, use Lucide (1.6px stroke) — flag it first. No emoji anywhere.

## Components (see components.css + specimen.html)
`.btn-primary` (+`--lg`), `.btn-dark`, `.link-accent`, `.microlabel`, `.chip` (+`--active`), `.status-badge` (`--onsale/--china/--coming/--ended`), `.card` (+`--interactive`, `--dark`, `__media`, `__body`, `__title`), `.stat-card`, `.spec-row`, `.data-table`, `.photo-tile`, page scaffolding (`.page-dark`, `.page-light`, `.container`, `.h-display`, `.h-section`).

## Page templates (as demonstrated in the prototype)
1. **Home**: dark hero (microlabel, display-xl headline with accent second line, search field, 3 stats) → news cards (dark) → model grid (light band) → technology tiles (paper-2 band) → comparison CTA panel.
2. **Models index**: page title block, filter chips (All/On sale/China only/Coming/Discontinued), 3-col model cards with status badge + 3-col spec footer (Range/Battery/Charging).
3. **Model page**: full-bleed photo hero with breadcrumb + title overlay → sticky section tabs → 4 stat-cards → variants data-table (rows open full-specs page) → alternating image/text sections with "Read the full X guide →" links → gallery grid (lightbox) → options-guide accordion (with factory option IDs) → dark range-calculator panel → Knowledge Exchange cards (FAQ / Problem Database / Updates Database) + Facebook group CTA.
4. **Section detail page** (e.g. Exterior): dark breadcrumb header → 760px prose → breakout image with caption → prose → sub-topic card grid.
5. **Full specifications page**: dark breadcrumb header, variant switcher chips, 3-col masonry of spec-group cards of `.spec-row`s. Scales to any number of groups from the EVKX API.
6. **Article**: 760px title block (microlabel date/category, display-m title, lede) → 1080px hero image → prose with stat-card trio, accent-bar pull quote, related cards.
7. **Compare**: dark page, 3 columns of `.card--dark` with model `<select>` + spec-rows.

## Caveats / intentional additions
- Fonts are Google Fonts (Archivo, Instrument Sans) — chosen for the redesign; no font files existed in the source repo (current site uses Tailwind defaults).
- The component inventory is defined by the approved prototype, not a Figma library.
- Spec/price figures in the prototype are partially placeholder — production pulls from the EVKX API.

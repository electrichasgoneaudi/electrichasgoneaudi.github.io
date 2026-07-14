# electrichasgoneaudi.github.io — Codex context

Hugo static site documenting Audi electric vehicles. Bilingual: every content file has an English `_index.md` and a Norwegian `_index.nb.md`.

---

## Image system

### Two image sources

**1. Site images** (`media.evkx.net/ehga/`) — images hosted for this site only.
Use the `sitefiguresized` shortcode:
```
{{< sitefiguresized thumb="models/e5/exterior/exterior_2_st.webp" width="3000" height="2250" title="..." >}}
```
The `thumb` path is relative to `https://media.evkx.net/ehga/`.

**2. EVKX shared images** (`media.evkx.net/multimedia/`) — images shared with evkx.net.
Use the `evkxfiguresized` shortcode:
```
{{< evkxfiguresized thumb="models/audi/e5_/e5/exterior_302e5_st.webp" width="3000" height="2250" title="..." >}}
```
The `thumb` path is relative to `https://media.evkx.net/multimedia/`.

### Finding EVKX images — use the JSON files

JSON files listing all available EVKX images for each model live under `static/media/audi/`:

```
static/media/audi/e5.json
static/media/audi/e7x.json
static/media/audi/q6-e-tron.json
... (one file per model)
```

Each entry has:
```json
{
  "fileName": "exterior_302e5.webp",
  "externalUrl": "https://media.evkx.net/multimedia/models/audi/e5_/e5/exterior_302e5.webp",
  "width": 3000,
  "height": 2250,
  "thumbUrl": "https://media.evkx.net/multimedia/models/audi/e5_/e5/exterior_302e5_st.webp",
  "thumbWidth": 800,
  "thumbHeight": 600,
  "mediumThumbUrl": "https://media.evkx.net/multimedia/models/audi/e5_/e5/exterior_302e5.webp",
  "mediumThumbWidth": 1200,
  "mediumThumbHeight": 900
}
```

To use an image in content:
1. Find the entry in the JSON for the model.
2. Take `thumbUrl`, strip `https://media.evkx.net/multimedia/` → that is the `thumb` param.
3. Use `width` and `height` from the JSON (the original full-res dimensions).

Example: `thumbUrl` = `https://media.evkx.net/multimedia/models/audi/e5_/e5/exterior_302e5_st.webp`
→ `thumb="models/audi/e5_/e5/exterior_302e5_st.webp"`

### How `evkxfiguresized` works

Shortcode at `layouts/shortcodes/evkxfiguresized.html`:
- `thumb` param uses `_st` suffix (800px thumbnail, always exists)
- Displayed image: `_st` URL (800px)
- Click target (lightbox): full-res URL (strips `_st` from path)
- `width` / `height` are the original full-res dimensions — used for aspect ratio and PhotoSwipe lightbox

> Note: `_mt` (1200px medium) exists for some models (e.g. E7X) but not all (e.g. E5). The shortcode uses `_st` for display to keep it consistent.

### EVKX image path conventions by model

| Model | JSON file | Path prefix |
|---|---|---|
| E5 Sportback | `static/media/audi/e5.json` | `models/audi/e5_/e5/` |
| E7X | `static/media/audi/e7x.json` | `models/audi/e7x/e7x_flagship_quattro/` (or other variant) |
| Q4 e-tron | (see JSON) | `models/audi/q4_e-tron/...` |
| Q6 e-tron | `static/media/audi/q6-e-tron.json` | (see JSON) |

---

## Content conventions

### Bilingual files
Every page needs both `_index.md` (English) and `_index.nb.md` (Norwegian Bokmål). Keep structure and images identical between them; translate text only.

### Standard section structure for China models (E5, E7X)
```
content/models/<model>/
  _index.md / _index.nb.md      — overview, shownavtabs: true
  variants/                      — weight: 1, all trims with pricing/specs/equipment
  exterior/                      — weight: 4, colors, wheels, lights
  interior/                      — weight: 5, screens, seats, storage
  drivetrain/                    — weight: 6, motors, battery, suspension
  technology/                    — weight: 7, ADAS, charging, connectivity
  specifications/                — weight: 4 (hidden: true), HTML accordion tables
```

### Standard section structure for European models (Q4, Q6, Q8, e-tron GT…)
Similar but may include `optionguide/`, `rangeandconsumption/`, and model-year sub-pages.

### Model-year versioning
- Main page always reflects the **current/latest** model year.
- Significant changes (e.g. full interior redesign): archive old content under `pre-YYYY/` subfolder.
  - Link from main page: `> **Looking for the pre-2027 interior?** See [Interior up to MY2026](./pre-2027/)`
  - Link back from archive: `see the [current interior](../) for details`
- Minor changes (single feature): use inline blockquote note: `> **From MY2026:** ...`

### AUDI by SAIC brand rules
- Brand name always in **capital letters**: AUDI (not Audi) when referring to the China brand
- No four-ring logo — AUDI lettering instead
- CLTC range (not WLTP) for China models
- Prices in CNY (¥)
- Co-developed with SAIC on purpose-built EV platform (not MEB or MLB Evo)

### Frontmatter weights (content ordering)
Lower weight = higher in nav. Standard order:
- Variants: 1
- Exterior: 4
- Interior: 5
- Drivetrain: 6
- Technology: 7
- Specifications: 4 (hidden)
- Pre-YYYY archive pages: 99

---

## Models covered

| Model | Status | Notes |
|---|---|---|
| Audi E5 Sportback | Full sections built (variants, exterior, interior, drivetrain, technology) | China-exclusive, deliveries 2025 |
| AUDI E7X | Full sections built | China-exclusive, launch H1 2026 |
| Audi Q4 e-tron | Active, MY2027 interior versioning | `interior/pre-2027/` archives MY2026 and earlier |
| Audi Q6 e-tron | Specs present | |
| Audi Q8 e-tron | Specs present | |
| Audi e-tron GT | Specs + technology present | |
| Audi e-tron | Legacy, specs present | |

---

## Key file locations

| File | Purpose |
|---|---|
| `layouts/shortcodes/evkxfiguresized.html` | EVKX shared image shortcode |
| `layouts/shortcodes/sitefiguresized.html` | Site-only image shortcode |
| `static/media/audi/*.json` | Authoritative image lists with dimensions |
| `content/models/e5/` | E5 Sportback content |
| `content/models/e7x/` | AUDI E7X content |
| `content/models/q4-e-tron/interior/pre-2027/` | Q4 interior archived for MY2026 and earlier |

# German content translation

German authored content lives beside English and Norwegian content as
`_index.de.md`. Specifications are excluded because they are generated from EVKX;
see `tools/specifications/README.md` for that workflow.

The translation tool runs locally with Argos Translate. It creates only missing
German files by default:

```powershell
npm run translate:de
```

## Local setup

Create an ignored virtual environment and install Argos Translate:

```powershell
python -m venv .tools/argos
.tools/argos/Scripts/python.exe -m pip install argostranslate
```

Install the English-to-German package once:

```powershell
$env:XDG_CONFIG_HOME = "$PWD/.tools/config"
$env:XDG_DATA_HOME = "$PWD/.tools/data"
$env:XDG_CACHE_HOME = "$PWD/.tools/cache"
.tools/argos/Scripts/python.exe -c "import argostranslate.package as p; p.update_package_index(); pkg=next(x for x in p.get_available_packages() if x.from_code=='en' and x.to_code=='de'); p.install_from_path(pkg.download())"
```

Set `EHGA_PYTHON` when Python is installed elsewhere. The translation model and
environment stay under the ignored `.tools/` directory.

## Regeneration rules

- Run without flags to create missing German files only.
- `node tools/translate-content-de.mjs content --force` regenerates machine-managed files.
- A German page with `translation_status: manual` in frontmatter is never overwritten,
  including with `--force`.
- `--include-manual` deliberately overrides that protection and should only be used
  when the manually curated German pages are intended to be replaced.
- Machine output is a draft. Review terminology, dates, model names, units, links,
  and frontmatter before publishing.

The worker preserves Hugo shortcodes, Markdown links, URLs, inline code, product
names, and Chinese configurator labels while translating prose.

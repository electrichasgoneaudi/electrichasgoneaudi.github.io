# German and French content translation

German and French content lives beside the English source as `_index.de.md` and
`_index.fr.md`. German specifications are generated directly by EVKX. French
specifications are currently translated from that generator's English output;
see `tools/specifications/README.md` for the regeneration sequence.

The translation tool runs locally with Argos Translate. It creates only missing
files by default:

```powershell
npm run translate:de
npm run translate:fr
```

## Local setup

Create an ignored virtual environment and install Argos Translate:

```powershell
python -m venv .tools/argos
.tools/argos/Scripts/python.exe -m pip install argostranslate
```

Install the English-to-German and English-to-French packages once:

```powershell
$env:XDG_CONFIG_HOME = "$PWD/.tools/config"
$env:XDG_DATA_HOME = "$PWD/.tools/data"
$env:XDG_CACHE_HOME = "$PWD/.tools/cache"
.tools/argos/Scripts/python.exe -c "import argostranslate.package as p; p.update_package_index(); packages=p.get_available_packages(); [p.install_from_path(next(x for x in packages if x.from_code=='en' and x.to_code==target).download()) for target in ('de', 'fr')]"
```

Set `EHGA_PYTHON` when Python is installed elsewhere. The translation model and
environment stay under the ignored `.tools/` directory.

## Regeneration rules

- Run without flags to create missing files only.
- `node tools/translate-content.mjs content --lang=fr --force` regenerates machine-managed French files.
- `node tools/translate-content.mjs content --lang=de --force` regenerates machine-managed German files.
- A page with `translation_status: manual` in frontmatter is never overwritten,
  including with `--force`.
- `--include-manual` deliberately overrides that protection and should only be used
  when manually curated pages are intended to be replaced.
- Machine output is a draft. Review terminology, dates, model names, units, links,
  and frontmatter before publishing.

The worker preserves Hugo shortcodes, Markdown link targets, URLs, inline code,
and Chinese configurator labels while translating prose. French internal page
links are rewritten to their `/fr/` counterparts; static asset links stay at
the site root. Review product names, technical terms, and facts in every
machine-translated draft before publication.

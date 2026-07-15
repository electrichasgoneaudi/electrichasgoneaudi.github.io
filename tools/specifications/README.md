# EVKX specification output

Specifications are generated artifacts. Do not hand-edit a model's
`specifications/_index.md` files.

The authoritative generator is the adjacent EVKX repository:

```text
D:\repos\evkx.net\src\ehga.sitegenerator
```

Its `Service/AudiSpecMdWriter.cs` writes the English, Norwegian, and German Hugo pages
directly from the EVKX model data. To regenerate only German pages without
exporting the media catalogue, run this from the generator directory:

```powershell
dotnet run -- --languages=de --specs-only
```

The generated markup uses the redesign's variant tabs, masonry specification
cards and `spec-row` component.

## One-time migration

The existing accordion pages can be converted to the same component structure:

```powershell
node tools/specifications/migrate-legacy.mjs content/models
```

This script exists only to move old accordion-based Markdown to the redesign
format. Do not use it for future specification updates.

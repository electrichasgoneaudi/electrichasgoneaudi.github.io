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

The generated markup uses the redesign's status-grouped variant selector,
masonry specification cards and `spec-row` component.

The production build runs `npm run validate:specifications` after Hugo. It
fails if generated specification markup is accidentally rendered as `<pre>` or
`<code>` blocks, which usually means Markdown interrupted a raw HTML block.

## One-time migration

The existing accordion pages can be converted to the same component structure:

```powershell
node tools/specifications/migrate-legacy.mjs content/models
```

This script exists only to move old accordion-based Markdown to the redesign
format. Do not use it for future specification updates.

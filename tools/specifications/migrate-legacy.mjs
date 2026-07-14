#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(process.argv[2] || "content/models");
const files = await findSpecificationFiles(root);
let converted = 0;

for (const file of files) {
  const source = await readFile(file, "utf8");
  if (!source.includes("toggleAccordion(") && !source.includes("Converted by tools/specifications/migrate-legacy.mjs")) continue;
  const output = source.includes("toggleAccordion(")
    ? convertPage(source, file.endsWith(".nb.md"))
    : normalizeConvertedPage(source);
  await writeFile(file, output, "utf8");
  converted += 1;
  console.log(`Converted ${file}`);
}

console.log(`Converted ${converted} legacy specification page(s).`);

async function findSpecificationFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findSpecificationFiles(path));
    else if (/^_index(?:\.nb)?\.md$/i.test(entry.name) && directory.endsWith("specifications")) files.push(path);
  }
  return files;
}

function convertPage(source, norwegian) {
  const frontmatterMatch = source.match(/^---\s*\r?\n[\s\S]*?\r?\n---/);
  if (!frontmatterMatch) throw new Error("Specification page is missing YAML frontmatter.");

  const body = source.slice(frontmatterMatch[0].length);
  const variantPattern = /<div class="border border-gray-200 rounded-lg overflow-hidden">\s*<button[\s\S]*?onclick="toggleAccordion\('([^']+)'\)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/button>/gi;
  const variants = [];
  let match;
  while ((match = variantPattern.exec(body)) !== null) {
    variants.push({ sourceId: match[1], name: cleanText(match[2]), start: match.index, contentStart: variantPattern.lastIndex });
  }
  if (variants.length === 0) throw new Error("No legacy variants found.");

  const scriptStart = body.indexOf("<script", variants.at(-1).start);
  for (let index = 0; index < variants.length; index += 1) {
    const variant = variants[index];
    const end = variants[index + 1]?.start ?? (scriptStart >= 0 ? scriptStart : body.length);
    const region = body.slice(variant.contentStart, end);
    const panelPattern = new RegExp(`<div id="${escapeRegExp(variant.sourceId)}"[\\s\\S]*?>`, "i");
    const panel = region.match(panelPattern);
    if (!panel) throw new Error(`Could not find panel ${variant.sourceId}.`);
    const panelStart = region.indexOf(panel[0]) + panel[0].length;
    variant.content = region.slice(panelStart).replace(/<\/div>\s*<\/div>\s*$/, "").trim();
    variant.id = `variant-${index + 1}`;
  }

  const tabs = variants.map((variant, index) => `    <button class="chip${index === 0 ? " chip--active" : ""}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="spec-panel-${variant.id}" data-spec-tab="${variant.id}">${escapeHtml(variant.name)}</button>`).join("\n");
  const panels = variants.map((variant, index) => renderVariant(variant, index === 0)).join("\n");

  const variantLabel = norwegian ? "Velg variant" : "Select variant";
  return `${frontmatterMatch[0]}\n<!-- Converted by tools/specifications/migrate-legacy.mjs. Future updates come from the EVKX generator. -->\n\n<div class="generated-specs" data-spec-browser>\n  <div class="generated-specs__variants" role="tablist" aria-label="${variantLabel}">\n${tabs}\n  </div>\n${panels}\n</div>\n`;
}

function renderVariant(variant, visible) {
  const groups = splitGroups(variant.content).map(renderGroup).join("\n");
  return `  <section class="generated-specs__panel" id="spec-panel-${variant.id}" role="tabpanel" data-spec-panel="${variant.id}"${visible ? "" : " hidden"}>\n    <h2 class="generated-specs__title">${escapeHtml(variant.name)}</h2>\n    <div class="generated-specs__groups">\n${groups}\n    </div>\n  </section>`;
}

function splitGroups(content) {
  const headingPattern = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const headings = [];
  let match;
  while ((match = headingPattern.exec(content)) !== null) headings.push({ name: cleanText(match[1]), start: match.index, bodyStart: headingPattern.lastIndex });
  if (headings.length === 0) return [{ name: "Details", body: content }];
  return headings.map((heading, index) => ({
    name: heading.name,
    body: content.slice(heading.bodyStart, headings[index + 1]?.start ?? content.length).trim()
  }));
}

function renderGroup(group) {
  let body = group.body
    .replace(/<div class="overflow-x-auto">\s*(<table[\s\S]*?<\/table>)\s*<\/div>/gi, (_, table) => convertTable(table))
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, heading) => `<h4 class="generated-specs__subheading">${cleanText(heading)}</h4>`)
    .trim();
  body = normalizeGroupBody(body);
  return `      <section class="generated-specs__group">\n        <h3>${escapeHtml(group.name)}</h3>\n        <div class="generated-specs__group-body">\n${indent(body, 10)}\n        </div>\n      </section>`;
}

function normalizeConvertedPage(source) {
  const frontmatterMatch = source.match(/^---\s*\r?\n[\s\S]*?\r?\n---/);
  let body = source.slice(frontmatterMatch[0].length);
  body = body.replace(/(<div class="generated-specs__group-body">\s*\n)(\s*)([^<\s][^\n]*(?:\n(?!\s*<)[^\n]*)*)/g, (_, opening, indentation, text) => `${opening}${indentation}<p>${text.trim()}</p>`);
  body = convertLooseRows(body)
    .replace("Future updates come from EVKX JSON.", "Future updates come from the EVKX generator.");
  body = convertMarkdownLinks(body).replace(/\r/g, "").replace(/\t/g, "  ").replace(/\n[ \t]*\n+/g, "\n");
  return `${frontmatterMatch[0]}\n${body.trim()}\n`;
}

function normalizeGroupBody(body) {
  if (!body.startsWith("<")) {
    const firstTag = body.search(/\n\s*</);
    if (firstTag >= 0) body = `<p>${body.slice(0, firstTag).trim()}</p>${body.slice(firstTag)}`;
    else body = `<p>${body}</p>`;
  }
  return convertMarkdownLinks(body).replace(/\r/g, "").replace(/\n[ \t]*\n+/g, "\n");
}

function convertMarkdownLinks(value) {
  return value.replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function convertTable(table) {
  const body = table.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i)?.[1] ?? table;
  const rows = [];
  const rowPattern = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let row;
  while ((row = rowPattern.exec(body)) !== null) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => cleanCell(cell[1]));
    if (cells.length < 2) continue;
    rows.push(`<div class="spec-row"><span class="spec-row__label">${cells[0]}</span><strong class="spec-row__value">${cells.slice(1).join(" / ")}</strong></div>`);
  }
  return rows.join("\n");
}

function convertLooseRows(value) {
  return value.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (_, row) => {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => cleanCell(cell[1]));
    if (cells.length < 2) return "";
    return `<div class="spec-row"><span class="spec-row__label">${cells[0]}</span><strong class="spec-row__value">${cells.slice(1).join(" / ")}</strong></div>`;
  });
}

function cleanCell(value) {
  return value.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
}

function cleanText(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function indent(value, spaces) {
  const prefix = " ".repeat(spaces);
  return value.split(/\r?\n/).map((line) => `${prefix}${line}`).join("\n");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

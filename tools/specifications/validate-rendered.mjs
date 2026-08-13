import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const publicDir = path.resolve(process.argv[2] ?? 'public');

async function findSpecificationPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      pages.push(...await findSpecificationPages(entryPath));
    } else if (entry.name === 'index.html' && path.basename(directory) === 'specifications') {
      pages.push(entryPath);
    }
  }

  return pages;
}

const pages = await findSpecificationPages(publicDir);
const failures = [];

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const preCount = (html.match(/<pre(?:\s|>)/g) ?? []).length;
  const codeCount = (html.match(/<code(?:\s|>)/g) ?? []).length;

  if (preCount > 0 || codeCount > 0) {
    failures.push(`${path.relative(publicDir, page)}: ${preCount} <pre>, ${codeCount} <code>`);
  }
}

if (pages.length === 0) {
  throw new Error(`No rendered specification pages found below ${publicDir}`);
}

if (failures.length > 0) {
  console.error('Generated specification HTML was rendered as code:');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Validated ${pages.length} rendered specification pages.`);
}

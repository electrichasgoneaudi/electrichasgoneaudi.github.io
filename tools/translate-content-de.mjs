#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = path.resolve(process.argv.find((argument) => !argument.startsWith('--') && argument !== process.argv[0] && argument !== process.argv[1]) || 'content');
const force = process.argv.includes('--force');
const normalizeOnly = process.argv.includes('--normalize-only');
const includeManual = process.argv.includes('--include-manual');
const units = [];
const unitBySource = new Map();

const files = (await walk(root))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !/\.(?:nb|de)\.md$/i.test(file))
  .filter((file) => !file.split(path.sep).includes('specifications'));

if (normalizeOnly) {
  const germanFiles = (await walk(root)).filter((file) => file.endsWith('.de.md'));
  for (const file of germanFiles) {
    const source = await fs.readFile(file, 'utf8');
    await fs.writeFile(file, normalizeTranslatedFrontmatter(source), 'utf8');
  }
  console.log(`Normalized frontmatter in ${germanFiles.length} German content files.`);
  process.exit(0);
}

const documents = [];
for (const sourceFile of files) {
  const targetFile = sourceFile.replace(/\.md$/i, '.de.md');
  if (await exists(targetFile)) {
    const existingTarget = await fs.readFile(targetFile, 'utf8');
    if (!includeManual && /^translation_status:\s*manual\s*$/mi.test(existingTarget)) continue;
    if (!force) continue;
  }
  const source = await fs.readFile(sourceFile, 'utf8');
  documents.push({ sourceFile, targetFile, template: collectTranslationUnits(source) });
}

if (documents.length === 0) {
  console.log('No German content files need translation.');
  process.exit(0);
}

console.log(`Translating ${documents.length} files in ${units.length} local text segments...`);
const translations = await translateLocally(units.map((unit) => unit.source));
if (translations.length !== units.length) throw new Error(`Local translator returned ${translations.length}/${units.length} segments.`);
for (let index = 0; index < units.length; index += 1) units[index].translated = translations[index].trim();

for (const document of documents) {
  let output = document.template.replace(/ZXQOUT([A-Z]{6})QXZ/g, (_, id) => units[decodeId(id)].translated);
  if (/ZXQOUT[A-Z]+QXZ/i.test(output)) {
    throw new Error(`Unresolved translation marker in ${document.sourceFile}`);
  }
  await fs.writeFile(document.targetFile, normalizeTranslatedFrontmatter(output), 'utf8');
}

console.log(`Wrote ${documents.length} German content files.`);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...await walk(target));
    else results.push(target);
  }
  return results;
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function collectTranslationUnits(source) {
  const lines = joinWrappedParagraphs(source.replace(/\r\n/g, '\n')).split('\n');
  let inFrontmatter = false;
  let frontmatterSeen = false;
  let inCode = false;
  let inRawCode = false;

  return lines.map((line) => {
    if (line.trim() === '---' && !frontmatterSeen) {
      frontmatterSeen = true;
      inFrontmatter = true;
      return line;
    }
    if (line.trim() === '---' && inFrontmatter) {
      inFrontmatter = false;
      return line;
    }
    if (inFrontmatter) {
      const field = line.match(/^(\s*(?:title|linktitle|description):\s*)(.*)$/i);
      if (!field || !field[2].trim()) return line;
      const { prefix, value, suffix } = unwrapQuotes(field[2]);
      return `${field[1]}${prefix}${addUnit(value)}${suffix}`;
    }

    if (/^\s*```/.test(line)) {
      inCode = !inCode;
      return line;
    }
    if (/^\s*<(?:script|style)\b/i.test(line)) inRawCode = true;
    if (inCode || inRawCode) {
      if (/<\/(?:script|style)>\s*$/i.test(line)) inRawCode = false;
      return line;
    }

    if (shouldSkip(line)) return line;
    if (looksLikeTableRow(line)) return translateTableRow(line);

    const prefixMatch = line.match(/^(\s*(?:(?:#{1,6}|>|[-+*]|\d+\.)\s+|(?:<p>\s*)?))/);
    const prefix = prefixMatch?.[1] || '';
    const text = line.slice(prefix.length);
    if (!hasTranslatableText(text)) return line;
    return `${prefix}${addUnit(text)}`;
  }).join('\n');
}

function joinWrappedParagraphs(source) {
  const lines = source.split('\n');
  const output = [];
  let inFrontmatter = false;
  let frontmatterSeen = false;
  let inCode = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '---' && !frontmatterSeen) {
      frontmatterSeen = true;
      inFrontmatter = true;
      output.push(line);
      continue;
    }
    if (trimmed === '---' && inFrontmatter) {
      inFrontmatter = false;
      output.push(line);
      continue;
    }
    if (/^\s*```/.test(line)) inCode = !inCode;
    const previous = output.at(-1) || '';
    if (!inFrontmatter && !inCode && isPlainParagraphLine(previous) && isPlainParagraphLine(line) && !previous.endsWith('  ')) {
      output[output.length - 1] = `${previous.trimEnd()} ${trimmed}`;
    } else {
      output.push(line);
    }
  }
  return output.join('\n');
}

function isPlainParagraphLine(line) {
  const trimmed = line.trim();
  return Boolean(trimmed)
    && !/^(?:---|```|#{1,6}\s|>|[-+*]\s|\d+\.\s|\||<|{{[<%]|\[[^\]]+]:)/.test(trimmed)
    && !trimmed.endsWith('|');
}

function unwrapQuotes(value) {
  const trimmed = value.trim();
  if (trimmed.length >= 2 && ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'")))) {
    return { prefix: value.slice(0, value.indexOf(trimmed)) + trimmed[0], value: trimmed.slice(1, -1), suffix: trimmed.at(-1) };
  }
  return { prefix: value.slice(0, value.indexOf(trimmed)), value: trimmed, suffix: '' };
}

function shouldSkip(line) {
  const trimmed = line.trim();
  return !trimmed
    || /^<!--.*-->$/.test(trimmed)
    || /^{{[<%][\s\S]*?[>%]}}$/.test(trimmed)
    || /^<\/?[\w-]+(?:\s[^>]*)?>$/.test(trimmed)
    || /^[-=*_]{3,}$/.test(trimmed)
    || /^\[[^\]]+]:\s*\S+$/.test(trimmed);
}

function looksLikeTableRow(line) {
  if (!line.includes('|')) return false;
  const trimmed = line.trim();
  return trimmed.startsWith('|') || trimmed.endsWith('|') || (line.match(/\|/g)?.length || 0) >= 2;
}

function translateTableRow(line) {
  if (/^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/.test(line)) return line;
  return line.split('|').map((cell) => {
    if (!hasTranslatableText(cell)) return cell;
    const leading = cell.match(/^\s*/)?.[0] || '';
    const trailing = cell.match(/\s*$/)?.[0] || '';
    return `${leading}${addUnit(cell.trim())}${trailing}`;
  }).join('|');
}

function hasTranslatableText(value) {
  const withoutMarkup = value
    .replace(/{{[<%][\s\S]*?[>%]}}/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[`*_#>\[\]()|\d\s.,:;!?+\-/–—%°=]/g, '');
  return /[A-Za-z]/.test(withoutMarkup);
}

function addUnit(value) {
  const structuralPattern = /({{[<%][\s\S]*?[>%]}}|<[^>]+>|!?\[[^\]]+\]\([^)]+\)|`[^`]*`|https?:\/\/[^\s)"'>]+|\((?:\.{0,2}\/|\/|#)[^)]+\)|\*+|[\u3400-\u9fff]+|Pioneer Smart Long-Range|Pioneer Pro|Pioneer quattro|Flagship quattro|Pioneer|AUDI E5 Sportback|AUDI E7X|AUDI)/g;
  return value.split(structuralPattern).map((part) => {
    if (!part || structuralPattern.test(part)) {
      structuralPattern.lastIndex = 0;
      return part;
    }
    structuralPattern.lastIndex = 0;
    if (!hasTranslatableText(part)) return part;
    const leading = part.match(/^\s*/)?.[0] || '';
    const trailing = part.match(/\s*$/)?.[0] || '';
    const text = part.slice(leading.length, trailing ? -trailing.length : undefined);
    const translated = splitProtectedText(text, 700).map((source) => {
      let id = unitBySource.get(source);
      if (id === undefined) {
        id = units.length;
        units.push({ source, translated: '' });
        unitBySource.set(source, id);
      }
      return `ZXQOUT${encodeId(id)}QXZ`;
    }).join(' ');
    return `${leading}${translated}${trailing}`;
  }).join('');
}

function splitProtectedText(value, maximumCharacters) {
  const chunks = [];
  let remaining = value;
  while (remaining.length > maximumCharacters) {
    let splitAt = -1;
    const sentenceBoundary = /[.!?](?:["')\]]+)?\s+/g;
    for (const match of remaining.slice(0, maximumCharacters + 1).matchAll(sentenceBoundary)) {
      if (match.index >= maximumCharacters * 0.45) splitAt = match.index + match[0].trimEnd().length;
    }
    if (splitAt < 0) splitAt = remaining.lastIndexOf('; ', maximumCharacters) + 1;
    if (splitAt < maximumCharacters * 0.45) splitAt = remaining.lastIndexOf(', ', maximumCharacters) + 1;
    if (splitAt < maximumCharacters * 0.45) splitAt = remaining.lastIndexOf(' ', maximumCharacters);
    if (splitAt < maximumCharacters * 0.45) splitAt = remaining.indexOf(' ', maximumCharacters);
    if (splitAt < 0) break;
    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }
  if (remaining) chunks.push(remaining);
  return chunks.length ? chunks : [value];
}

function encodeId(value) {
  const digits = Array(6).fill(0);
  let remaining = value;
  for (let index = digits.length - 1; index >= 0; index -= 1) {
    digits[index] = remaining % 26;
    remaining = Math.floor(remaining / 26);
  }
  if (remaining > 0) throw new Error('Translation marker capacity exceeded.');
  return digits.map((digit, index) => String.fromCharCode(65 + ((digit + index * 5) % 26))).join('');
}

function decodeId(value) {
  return [...value.toUpperCase()].reduce((result, character, index) => {
    const encoded = character.charCodeAt(0) - 65;
    const digit = (encoded - index * 5 + 26 * 2) % 26;
    return result * 26 + digit;
  }, 0);
}

function normalizeTranslatedFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return markdown;
  const normalized = match[1].split('\n').map((line) => {
    const field = line.match(/^(\s*(?:title|linktitle|description):\s*)(.*)$/i);
    if (!field || !field[2].trim()) return line;
    let value = field[2].trim();
    if (value.length >= 2 && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))) {
      value = value.slice(1, -1);
    }
    return `${field[1]}${JSON.stringify(value)}`;
  }).join('\n');
  return markdown.replace(match[0], `---\n${normalized}\n---`);
}

async function translateLocally(values) {
  const localPython = path.resolve('.tools/argos/Scripts/python.exe');
  const python = process.env.EHGA_PYTHON || (await exists(localPython) ? localPython : 'python');
  const worker = path.resolve('tools/argos-batch-translate.py');
  const localRoot = path.resolve('.tools');
  const child = spawn(python, [worker], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      XDG_CONFIG_HOME: path.join(localRoot, 'config'),
      XDG_DATA_HOME: path.join(localRoot, 'data'),
      XDG_CACHE_HOME: path.join(localRoot, 'cache'),
    },
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  let output = '';
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (chunk) => { output += chunk; });
  child.stdin.end(JSON.stringify(values));

  const exitCode = await new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('close', resolve);
  });
  if (exitCode !== 0) throw new Error(`Local translation worker exited with code ${exitCode}.`);
  return JSON.parse(output);
}

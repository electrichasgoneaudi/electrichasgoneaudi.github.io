import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'content');
const publicRoot = path.join(root, 'public');

function walk(directory, predicate) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(target, predicate);
    return predicate(target) ? [target] : [];
  });
}

function relative(file) {
  return path.relative(root, file).replaceAll('\\', '/');
}

function bodyOf(markdown) {
  return markdown.replace(/^---\s*[\s\S]*?\s*---\s*/, '').trim();
}

function proseOf(markdown) {
  return bodyOf(markdown)
    .replace(/^.*\|.*$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/{{[<%][\s\S]*?[>%]}}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[|*_#>`~]/g, ' ');
}

function languageScore(markdown) {
  const words = proseOf(markdown).toLocaleLowerCase().match(/[a-z\u00e6\u00f8\u00e5]+/g) || [];
  const english = new Set(['the', 'and', 'with', 'from', 'this', 'that', 'for', 'are', 'is', 'you', 'your', 'can', 'will', 'has', 'have', 'not', 'but', 'into', 'when', 'which', 'also']);
  const norwegian = new Set(['og', 'med', 'fra', 'dette', 'denne', 'det', 'for', 'er', 'du', 'din', 'kan', 'vil', 'har', 'ikke', 'men', 'som', 'også', 'når', 'eller', 'til']);
  return words.reduce((score, word) => ({
    english: score.english + Number(english.has(word)),
    norwegian: score.norwegian + Number(norwegian.has(word)),
    words: score.words + 1,
  }), { english: 0, norwegian: 0, words: 0 });
}

function pageUrlForHtml(file) {
  const rel = path.relative(publicRoot, file).replaceAll('\\', '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

function targetFileForPath(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }
  const clean = decoded.replace(/^\/+/, '');
  const direct = path.join(publicRoot, clean);
  const candidates = pathname.endsWith('/')
    ? [path.join(direct, 'index.html')]
    : [direct, `${direct}.html`, path.join(direct, 'index.html')];
  return candidates.find((candidate) => fs.existsSync(candidate));
}

const markdownFiles = walk(contentRoot, (file) => file.endsWith('.md') && !relative(file).split('/').includes('specifications'));
const englishFiles = markdownFiles.filter((file) => !file.endsWith('.nb.md'));
const norwegianFiles = markdownFiles.filter((file) => file.endsWith('.nb.md'));

const findings = {
  missingNorwegian: [],
  missingEnglish: [],
  emptyBodies: [],
  identicalTranslations: [],
  localDevelopmentUrls: [],
  duplicateWords: [],
  commonTypos: [],
  languageMismatch: [],
  brokenInternalLinks: [],
  brokenAnchors: [],
};

for (const file of englishFiles) {
  if (relative(file) === 'content/_header.md') continue;
  const counterpart = file.replace(/\.md$/, '.nb.md');
  if (!fs.existsSync(counterpart)) findings.missingNorwegian.push(relative(file));
}

for (const file of norwegianFiles) {
  const counterpart = file.replace(/\.nb\.md$/, '.md');
  if (!fs.existsSync(counterpart)) findings.missingEnglish.push(relative(file));
}

const typoPatterns = [
  [/\bseperat(e|ed|es|ing|ion)\b/gi, 'separate/separation'],
  [/\bdimmensions?\b/gi, 'dimension/dimensions'],
  [/\bcharing\b/gi, 'charging'],
  [/\bluggagee\b/gi, 'luggage'],
  [/\bmanufactors?\b/gi, 'manufacturer/manufacturers'],
  [/\bdegredation\b/gi, 'degradation'],
  [/\brecieve(d|s|ing)?\b/gi, 'receive'],
  [/\boccured\b/gi, 'occurred'],
  [/\bcomparision\b/gi, 'comparison'],
  [/\baccelleration\b/gi, 'acceleration'],
  [/\bvehichle\b/gi, 'vehicle'],
  [/\beffeciency\b/gi, 'efficiency'],
  [/\benviroment\b/gi, 'environment'],
  [/\bserveral\b/gi, 'several'],
  [/\brevering\b/gi, 'reversing'],
  [/\badaptivce\b/gi, 'adaptive'],
  [/\bwioth\b/gi, 'with'],
  [/\bback angel\b/gi, 'backrest angle'],
  [/\bdriving to close\b/gi, 'driving too close'],
  [/\bbelo\b/gi, 'below'],
  [/\btilegg\b/gi, 'tillegg'],
  [/\btempratur\b/gi, 'temperatur'],
  [/\bluxurios\b/gi, 'luxurious'],
  [/\bcameraes\b/gi, 'cameras'],
  [/\bopeneded\b/gi, 'opened'],
  [/\bcalibers?\b/gi, 'caliper/calipers'],
  [/\blightning\b/gi, 'lighting'],
  [/\bhas an several\b/gi, 'has several'],
  [/\bthere is several\b/gi, 'there are several'],
  [/\ba optional\b/gi, 'an optional'],
  [/\bdeliverd\b/gi, 'delivered'],
  [/\binterestest\b/gi, 'interest'],
  [/\badjustmens\b/gi, 'adjustments'],
  [/\bshos\b/gi, 'shows'],
  [/\bpaintcolors\b/gi, 'paint colors'],
  [/\balterntiver\b/gi, 'alternativer'],
  [/\bvisniong\b/gi, 'visning'],
  [/\bseperat\b/gi, 'separate/separat'],
  [/\bcomming\b/gi, 'coming'],
];

for (const file of markdownFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const body = bodyOf(text);
  const prose = proseOf(text);
  const intentionalShell = ['content/compare/_index.md', 'content/compare/_index.nb.md'].includes(relative(file));
  if (!body && !intentionalShell) findings.emptyBodies.push(relative(file));

  for (const match of text.matchAll(/https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?[^\s"')>]*/gi)) {
    findings.localDevelopmentUrls.push(`${relative(file)}:${text.slice(0, match.index).split('\n').length}: ${match[0]}`);
  }

  for (const line of body.split(/\r?\n/)) {
    if (line.includes('|')) continue;
    const lineProse = proseOf(line);
    for (const match of lineProse.matchAll(/(?<!-)\b([A-Za-z\u00c0-\u024f]{2,})[ \t]+\1\b/gi)) {
      findings.duplicateWords.push(`${relative(file)}: ${match[0]}`);
    }
  }

  for (const [pattern, suggestion] of typoPatterns) {
    for (const match of prose.matchAll(pattern)) {
      findings.commonTypos.push(`${relative(file)}: ${match[0]} -> ${suggestion}`);
    }
  }

  const language = languageScore(text);
  const sourceTitlePage = /\/(?:reviews|multimedia)\//.test(relative(file));
  const description = text.match(/^description:\s*(.+)$/m)?.[1] || '';
  const descriptionLanguage = languageScore(description);
  if (!sourceTitlePage && descriptionLanguage.words >= 8 && file.endsWith('.nb.md') && descriptionLanguage.english >= 3 && descriptionLanguage.english > descriptionLanguage.norwegian * 2.5) {
    findings.languageMismatch.push(`${relative(file)}: description appears English (${descriptionLanguage.english} EN / ${descriptionLanguage.norwegian} NB markers)`);
  }
  if (!sourceTitlePage && descriptionLanguage.words >= 8 && !file.endsWith('.nb.md') && descriptionLanguage.norwegian >= 3 && descriptionLanguage.norwegian > descriptionLanguage.english * 2.5) {
    findings.languageMismatch.push(`${relative(file)}: description appears Norwegian (${descriptionLanguage.english} EN / ${descriptionLanguage.norwegian} NB markers)`);
  }
  if (!sourceTitlePage) {
    for (const paragraph of body.split(/(?:\r?\n){2,}/)) {
      const paragraphLanguage = languageScore(paragraph);
      if (paragraphLanguage.words < 12) continue;
      if (file.endsWith('.nb.md') && paragraphLanguage.english >= 4 && paragraphLanguage.english > paragraphLanguage.norwegian * 3) {
        findings.languageMismatch.push(`${relative(file)}: paragraph appears English (${paragraphLanguage.english} EN / ${paragraphLanguage.norwegian} NB markers)`);
      }
      if (!file.endsWith('.nb.md') && paragraphLanguage.norwegian >= 4 && paragraphLanguage.norwegian > paragraphLanguage.english * 3) {
        findings.languageMismatch.push(`${relative(file)}: paragraph appears Norwegian (${paragraphLanguage.english} EN / ${paragraphLanguage.norwegian} NB markers)`);
      }
    }
  }
  if (!sourceTitlePage && language.words >= 80 && file.endsWith('.nb.md') && language.english >= 12 && language.english > language.norwegian * 1.8) {
    findings.languageMismatch.push(`${relative(file)}: appears English (${language.english} EN / ${language.norwegian} NB markers)`);
  }
  if (!sourceTitlePage && language.words >= 80 && !file.endsWith('.nb.md') && language.norwegian >= 12 && language.norwegian > language.english * 1.8) {
    findings.languageMismatch.push(`${relative(file)}: appears Norwegian (${language.english} EN / ${language.norwegian} NB markers)`);
  }
}

for (const file of englishFiles) {
  const counterpart = file.replace(/\.md$/, '.nb.md');
  if (!fs.existsSync(counterpart)) continue;
  const englishBody = bodyOf(fs.readFileSync(file, 'utf8'));
  const norwegianBody = bodyOf(fs.readFileSync(counterpart, 'utf8'));
  const sourceTitlePage = /\/(?:reviews|multimedia)\//.test(relative(file));
  if (!sourceTitlePage && englishBody.length >= 200 && englishBody === norwegianBody) {
    findings.identicalTranslations.push(`${relative(file)} (${englishBody.length} characters)`);
  }
}

const htmlFiles = walk(publicRoot, (file) => file.endsWith('.html'));
const anchorCache = new Map();

function anchorsFor(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const html = fs.readFileSync(file, 'utf8');
  const anchors = new Set();
  for (const match of html.matchAll(/\s(?:id|name)=["']([^"']+)["']/gi)) anchors.add(match[1]);
  anchorCache.set(file, anchors);
  return anchors;
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const sourceUrl = pageUrlForHtml(file);
  for (const match of html.matchAll(/\shref=["']([^"']+)["']/gi)) {
    const href = match[1].trim();
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    let url;
    try {
      url = new URL(href, `https://electrichasgoneaudi.net${sourceUrl}`);
    } catch {
      findings.brokenInternalLinks.push(`${sourceUrl} -> malformed URL: ${href}`);
      continue;
    }
    if (url.hostname !== 'electrichasgoneaudi.net') continue;
    const target = targetFileForPath(url.pathname);
    if (!target) {
      findings.brokenInternalLinks.push(`${sourceUrl} -> ${href}`);
      continue;
    }
    if (url.hash && url.hash !== '#') {
      const anchor = decodeURIComponent(url.hash.slice(1));
      if (!anchorsFor(target).has(anchor)) findings.brokenAnchors.push(`${sourceUrl} -> ${href}`);
    }
  }
}

console.log(`Authored Markdown: ${markdownFiles.length} (${englishFiles.length} English, ${norwegianFiles.length} Norwegian)`);
console.log(`Rendered HTML: ${htmlFiles.length}`);

let issueCount = 0;
for (const [name, values] of Object.entries(findings)) {
  const unique = [...new Set(values)];
  issueCount += unique.length;
  console.log(`\n${name}: ${unique.length}`);
  for (const value of unique) console.log(`- ${value}`);
}

console.log(`\nTotal findings: ${issueCount}`);
process.exitCode = issueCount ? 1 : 0;

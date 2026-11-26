import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://marketing2student.com';
const TODAY = new Date().toISOString().split('T')[0];

function extractTopLevelToolSlugs(dirPath) {
  const slugs = [];
  if (!fs.existsSync(dirPath)) return slugs;
  for (const file of fs.readdirSync(dirPath)) {
    if (!file.endsWith('.ts')) continue;
    const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
    // Match top-level tool entries (indented by 4 spaces: "    slug: '...'")
    for (const match of content.matchAll(/^ {4}slug:\s*'([^']+)'/gm)) {
      if (!slugs.includes(match[1])) {
        slugs.push(match[1]);
      }
    }
  }
  return slugs;
}

function isDraftOrArchived(blockText) {
  return /["']?publicationStatus["']?\s*:\s*["'](draft|archived)["']/i.test(blockText);
}

function extractPublishedArticleSlugs() {
  const articlesFilePath = path.resolve('src/data/articles.ts');
  const articlesContent = fs.readFileSync(articlesFilePath, 'utf8');
  const slugs = [];

  // 1. Map imported symbols from ./blog/* in src/data/articles.ts
  const importedModules = new Map();
  for (const match of articlesContent.matchAll(
    /import\s+\{([^}]+)\}\s+from\s+['"](\.\/blog\/[^'"]+)['"]/g
  )) {
    const names = match[1]
      .split(',')
      .map((s) => s.trim().split(/\s+as\s+/).pop()?.trim())
      .filter(Boolean);
    const relPath = match[2];
    for (const name of names) {
      importedModules.set(name, relPath);
    }
  }

  // 2. Isolate the `export const articles: Article[] = [ ... ];` array body
  const arrayStartMatch = articlesContent.match(/export\s+const\s+articles[^=]*=\s*\[/);
  const arrayBody = arrayStartMatch
    ? articlesContent.slice(arrayStartMatch.index + arrayStartMatch[0].length)
    : articlesContent;

  // 3. Check which imported symbols are actually registered inside `articles`
  for (const [symbolName, relPath] of importedModules.entries()) {
    const symbolRegex = new RegExp(`\\b${symbolName}\\b`);
    if (!symbolRegex.test(arrayBody)) continue;

    const candidatePaths = [
      path.resolve('src/data', `${relPath}.ts`),
      path.resolve('src/data', relPath, 'index.ts'),
      path.resolve('src/data', relPath),
    ];
    const modulePath = candidatePaths.find((p) => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!modulePath) continue;

    const moduleContent = fs.readFileSync(modulePath, 'utf8');
    if (isDraftOrArchived(moduleContent)) continue;

    for (const m of moduleContent.matchAll(/(?:"slug"|\bslug)\s*:\s*['"]([^'"]+)['"]/g)) {
      if (!slugs.includes(m[1])) {
        slugs.push(m[1]);
      }
    }
  }

  // 4. Extract inline article objects inside `articles.ts` (top-level 2-space or 4-space objects)
  const inlineBlocks = arrayBody.split(/\n  \{/);
  for (const block of inlineBlocks) {
    const slugMatch = block.match(/(?:"slug"|\bslug)\s*:\s*['"]([^'"]+)['"]/);
    if (!slugMatch) continue;
    if (isDraftOrArchived(block)) continue;
    if (!slugs.includes(slugMatch[1])) {
      slugs.push(slugMatch[1]);
    }
  }

  return slugs;
}

function extractCategorySlugs() {
  const categoriesContent = fs.readFileSync(path.resolve('src/data/categories.ts'), 'utf8');
  const categoriesSectionMatch = categoriesContent.match(
    /export\s+const\s+categories[\s\S]*?(?=export\s+const\s+articleFormats|\Z)/
  );
  const section = categoriesSectionMatch ? categoriesSectionMatch[0] : categoriesContent;

  const categorySlugs = [];
  for (const match of section.matchAll(/^\s*slug:\s*'([^']+)'/gm)) {
    if (!categorySlugs.includes(match[1])) {
      categorySlugs.push(match[1]);
    }
  }
  return categorySlugs;
}

async function main() {
  console.log('Generating sitemap.xml and robots.txt for marketing2student.com...');

  const robotsContent = `# Robots.txt for Marketing2Student (marketing2student.com)
User-agent: *
Allow: /

# Host
Host: ${BASE_URL}

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf8');
  console.log('Created public/robots.txt');

  const articleSlugs = extractPublishedArticleSlugs();
  const categorySlugs = extractCategorySlugs();
  const martechToolSlugs = extractTopLevelToolSlugs(path.resolve('src/data/tools'));
  const aiToolSlugs = extractTopLevelToolSlugs(path.resolve('src/data/ai-tools'));

  console.log(
    `Found ${martechToolSlugs.length} Martech tools, ${aiToolSlugs.length} AI tools, ${articleSlugs.length} published articles, ${categorySlugs.length} categories.`
  );

  const urls = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${BASE_URL}/cong-cu`, priority: '0.9', changefreq: 'daily' },
    { loc: `${BASE_URL}/ai-tools`, priority: '0.9', changefreq: 'daily' },
    { loc: `${BASE_URL}/blog`, priority: '0.9', changefreq: 'daily' },
    { loc: `${BASE_URL}/gioi-thieu`, priority: '0.8', changefreq: 'monthly' },
  ];

  for (const slug of martechToolSlugs) {
    urls.push({
      loc: `${BASE_URL}/cong-cu/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  }

  for (const slug of aiToolSlugs) {
    urls.push({
      loc: `${BASE_URL}/ai-tools/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  }

  for (const slug of categorySlugs) {
    urls.push({
      loc: `${BASE_URL}/category/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  }

  for (const slug of articleSlugs) {
    urls.push({
      loc: `${BASE_URL}/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  }

  const xmlEntries = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Created public/sitemap.xml with ${urls.length} URLs.`);
}

main().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});

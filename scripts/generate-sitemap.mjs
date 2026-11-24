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

  const articlesContent = fs.readFileSync(path.resolve('src/data/articles.ts'), 'utf8');
  const categoriesContent = fs.readFileSync(path.resolve('src/data/categories.ts'), 'utf8');

  const articleSlugs = [];
  for (const match of articlesContent.matchAll(/"slug"\s*:\s*"([^"]+)"/g)) {
    if (!articleSlugs.includes(match[1])) {
      articleSlugs.push(match[1]);
    }
  }

  const categorySlugs = [];
  for (const match of categoriesContent.matchAll(/slug:\s*'([^']+)'/g)) {
    if (!categorySlugs.includes(match[1])) {
      categorySlugs.push(match[1]);
    }
  }

  const martechToolSlugs = extractTopLevelToolSlugs(path.resolve('src/data/tools'));
  const aiToolSlugs = extractTopLevelToolSlugs(path.resolve('src/data/ai-tools'));

  console.log(
    `Found ${martechToolSlugs.length} Martech tools, ${aiToolSlugs.length} AI tools, ${articleSlugs.length} articles, ${categorySlugs.length} categories.`
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

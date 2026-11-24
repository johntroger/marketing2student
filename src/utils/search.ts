import { Article, MarketingTool } from '../types';

/**
 * Remove Vietnamese accents and normalize for flexible search
 */
export function normalizeVietnamese(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .trim();
}

/**
 * Check if an article matches a search query with accent-insensitive and word-by-word matching
 */
export function matchArticle(item: Article, query: string): boolean {
  if (!query || !query.trim()) return true;

  const rawQuery = query.toLowerCase().trim();
  const normQuery = normalizeVietnamese(query);

  const rawTitle = (item.title || '').toLowerCase();
  const rawExcerpt = (item.excerpt || '').toLowerCase();
  const rawCategory = (item.category || '').toLowerCase();
  const rawTopic = (item.topic || '').toLowerCase();
  const rawTags = (item.tags || []).join(' ').toLowerCase();
  const rawSlug = (item.slug || '').toLowerCase();

  if (
    rawTitle.includes(rawQuery) ||
    rawExcerpt.includes(rawQuery) ||
    rawCategory.includes(rawQuery) ||
    rawTopic.includes(rawQuery) ||
    rawTags.includes(rawQuery) ||
    rawSlug.includes(rawQuery)
  ) {
    return true;
  }

  const normTitle = normalizeVietnamese(item.title);
  const normExcerpt = normalizeVietnamese(item.excerpt);
  const normCategory = normalizeVietnamese(item.category);
  const normTopic = normalizeVietnamese(item.topic);
  const normTags = normalizeVietnamese(rawTags);
  const normSlug = normalizeVietnamese(item.slug);

  const fullNormalizedContent = `${normTitle} ${normExcerpt} ${normCategory} ${normTopic} ${normTags} ${normSlug}`;

  if (fullNormalizedContent.includes(normQuery)) {
    return true;
  }

  const queryTokens = normQuery.split(/\s+/).filter(Boolean);
  if (queryTokens.length > 1) {
    return queryTokens.every((token) => fullNormalizedContent.includes(token));
  }

  return false;
}

/**
 * Score and rank matching articles for quick search dropdown / autocomplete
 */
export function searchArticles(items: Article[], query: string, limit = 8): Article[] {
  if (!query || !query.trim()) return [];

  const normQuery = normalizeVietnamese(query);
  const queryTokens = normQuery.split(/\s+/).filter(Boolean);

  const scored: { item: Article; score: number }[] = [];

  for (const item of items) {
    const normTitle = normalizeVietnamese(item.title);
    const normExcerpt = normalizeVietnamese(item.excerpt);
    const normCategory = normalizeVietnamese(item.category);
    const normTopic = normalizeVietnamese(item.topic);
    const normTags = normalizeVietnamese((item.tags || []).join(' '));
    const fullNormalizedContent = `${normTitle} ${normExcerpt} ${normCategory} ${normTopic} ${normTags} ${item.slug}`;

    let score = 0;

    if (normTitle === normQuery) {
      score += 100;
    } else if (normTitle.startsWith(normQuery)) {
      score += 65;
    } else if (normTitle.includes(normQuery)) {
      score += 45;
    }

    if (item.slug.includes(normQuery) || normTags.includes(normQuery)) {
      score += 30;
    }

    if (normCategory.includes(normQuery) || normTopic.includes(normQuery)) {
      score += 25;
    }

    if (normExcerpt.includes(normQuery)) {
      score += 15;
    }

    if (score === 0 && queryTokens.length > 1) {
      const allTokensMatch = queryTokens.every((token) => fullNormalizedContent.includes(token));
      if (allTokensMatch) {
        score += 20;
      }
    }

    if (score > 0) {
      const recencyBonus = item.hasPracticalExercise ? 10 : 0;
      scored.push({ item, score: score + recencyBonus });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}

/**
 * Check if a marketing tool matches a search query
 */
export function matchTool(tool: MarketingTool, query: string): boolean {
  if (!query || !query.trim()) return true;
  const normQuery = normalizeVietnamese(query);
  const full = normalizeVietnamese(
    `${tool.name} ${tool.tagline} ${tool.excerpt} ${tool.category} ${tool.pricing} ${tool.tags.join(' ')} ${tool.slug}`
  );
  if (full.includes(normQuery)) return true;
  const tokens = normQuery.split(/\s+/).filter(Boolean);
  return tokens.length > 1 && tokens.every((t) => full.includes(t));
}

/**
 * Score and rank matching marketing tools for quick search
 */
export function searchTools(items: MarketingTool[], query: string, limit = 6): MarketingTool[] {
  if (!query || !query.trim()) return [];
  const normQuery = normalizeVietnamese(query);
  const tokens = normQuery.split(/\s+/).filter(Boolean);
  const scored: { item: MarketingTool; score: number }[] = [];

  for (const item of items) {
    const normName = normalizeVietnamese(item.name);
    const normTagline = normalizeVietnamese(item.tagline);
    const normCat = normalizeVietnamese(item.category);
    const normTags = normalizeVietnamese(item.tags.join(' '));
    const full = `${normName} ${normTagline} ${normCat} ${normTags} ${item.slug}`;

    let score = 0;
    if (normName === normQuery) score += 100;
    else if (normName.startsWith(normQuery)) score += 65;
    else if (normName.includes(normQuery)) score += 45;

    if (normTags.includes(normQuery) || item.slug.includes(normQuery)) score += 30;
    if (normCat.includes(normQuery) || normTagline.includes(normQuery)) score += 20;

    if (score === 0 && tokens.length > 1 && tokens.every((t) => full.includes(t))) {
      score += 18;
    }

    if (score > 0) {
      scored.push({ item, score: score + (item.featured ? 8 : 0) });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}


import { Article } from '../types';
import {
  LEGACY_TOPIC_CATEGORY_MAP,
  resolveCategoryBySlugOrName,
  resolveFormatBySlugOrName,
} from '../data/categories';

export type ArticleSortOption = 'latest' | 'practical' | 'academic';

export function isPublishedArticle(article: Article): boolean {
  return article.publicationStatus !== 'draft' && article.publicationStatus !== 'archived';
}

export function getPublishedArticles(items: Article[]): Article[] {
  return items.filter(isPublishedArticle);
}

/**
 * So sánh 2 bài viết theo ngày đăng (publishedAt) giảm dần,
 * có khóa phụ ổn định để thứ tự luôn nhất quán giữa các trang.
 */
export function compareArticlesByLatest(a: Article, b: Article): number {
  const pubDiff = (b.publishedAt || '').localeCompare(a.publishedAt || '');
  if (pubDiff !== 0) return pubDiff;

  const modDiff = (b.modifiedAt || '').localeCompare(a.modifiedAt || '');
  if (modDiff !== 0) return modDiff;

  if (b.wpId !== a.wpId) return b.wpId - a.wpId;
  return b.id - a.id;
}

export function sortArticles(items: Article[], sortBy: ArticleSortOption = 'latest'): Article[] {
  return [...items].sort((a, b) => {
    if (sortBy === 'practical' && a.hasPracticalExercise !== b.hasPracticalExercise) {
      return a.hasPracticalExercise ? -1 : 1;
    }
    if (sortBy === 'academic' && a.hasAcademicCitation !== b.hasAcademicCitation) {
      return a.hasAcademicCitation ? -1 : 1;
    }
    return compareArticlesByLatest(a, b);
  });
}

export function matchesCategoryFilter(article: Article, selectedCategory?: string): boolean {
  if (!selectedCategory || !selectedCategory.trim()) return true;
  const resolved = resolveCategoryBySlugOrName(selectedCategory);
  if (resolved) {
    return (
      article.categorySlug.toLowerCase() === resolved.slug.toLowerCase() ||
      article.category.toLowerCase() === resolved.name.toLowerCase() ||
      Boolean(resolved.legacySlugs?.some((s) => s.toLowerCase() === article.categorySlug.toLowerCase()))
    );
  }
  const needle = selectedCategory.trim().toLowerCase();
  return (
    article.categorySlug.toLowerCase() === needle ||
    article.category.toLowerCase() === needle
  );
}

export function matchesFormatFilter(article: Article, selectedFormat?: string): boolean {
  if (!selectedFormat || !selectedFormat.trim()) return true;
  const resolved = resolveFormatBySlugOrName(selectedFormat);
  if (!article.articleFormat) return false;
  if (resolved) {
    return article.articleFormat.toLowerCase() === resolved.name.toLowerCase();
  }
  return article.articleFormat.toLowerCase() === selectedFormat.trim().toLowerCase();
}

export function matchesLegacyTopicFilter(article: Article, selectedTopic?: string): boolean {
  if (!selectedTopic || !selectedTopic.trim()) return true;
  const needle = selectedTopic.trim().toLowerCase();
  if ((article.topic || '').toLowerCase() === needle) return true;
  const mappedCategorySlug = LEGACY_TOPIC_CATEGORY_MAP[selectedTopic.trim()];
  if (mappedCategorySlug) {
    return article.categorySlug.toLowerCase() === mappedCategorySlug.toLowerCase();
  }
  return false;
}

/**
 * Chọn bài viết liên quan: ưu tiên cùng chuyên mục + trùng thẻ + trùng dạng bài,
 * sau đó sắp xếp theo ngày đăng mới nhất.
 */
export function getRelatedArticles(
  article: Article,
  allArticles: Article[],
  limit = 6
): Article[] {
  const articleTags = new Set((article.tags || []).map((t) => t.toLowerCase()));

  return getPublishedArticles(allArticles)
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => {
      let score = 0;
      if (candidate.categorySlug === article.categorySlug) score += 3;
      if (
        article.articleFormat &&
        candidate.articleFormat &&
        candidate.articleFormat === article.articleFormat
      ) {
        score += 2;
      }
      for (const tag of candidate.tags || []) {
        if (articleTags.has(tag.toLowerCase())) score += 2;
      }
      return { candidate, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return compareArticlesByLatest(a.candidate, b.candidate);
    })
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

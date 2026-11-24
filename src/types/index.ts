export interface Article {
  id: number;
  wpId: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  topic: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  modifiedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  hasPracticalExercise: boolean;
  hasAcademicCitation: boolean;
  content: string;
}

export interface StudentProject {
  id: string;
  wpId: number;
  slug: string;
  title: string;
  brandName: string;
  industry: string;
  studentGroup: string;
  semester: string;
  excerpt: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  marketingAngles: string[];
  publishedAt: string;
  contentHtml: string;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  legacySlugs?: string[];
}

export interface TopicInfo {
  id: string;
  name: string;
  description: string;
}

export interface MarketingTool {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  pricing: 'Miễn phí 100%' | 'Freemium' | 'Mã nguồn mở' | 'Dùng thử / Trả phí';
  pricingDetail: string;
  level: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  officialUrl: string;
  tags: string[];
  useCases: string[];
  pros: string[];
  limitations: string;
  studentTip: string;
  featured?: boolean;
  verifiedAt: string;
}

export interface ToolCategoryInfo {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
}


export type ArticleFormat =
  | 'Hướng dẫn thực hành'
  | 'Phân tích nghiên cứu'
  | 'Phân tích tình huống'
  | 'Góc nhìn'
  | 'Cập nhật';

export type PublicationStatus = 'published' | 'draft' | 'archived';

export interface ArticleFormatInfo {
  id: string;
  slug: string;
  name: ArticleFormat;
  description: string;
}

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
  /** Dạng bài viết theo cách trình bày (thay thế bộ lọc chủ đề kỹ năng) */
  articleFormat?: ArticleFormat;
  /** Trạng thái xuất bản: mặc định 'published' nếu chưa khai báo */
  publicationStatus?: PublicationStatus;
  /** Alt text riêng cho ảnh bìa */
  coverAlt?: string;
  /** Người biên tập (tách biệt với tác giả gốc) */
  editor?: string;
  /** Nguồn bài viết gốc (nếu có) */
  sourceUrl?: string;
  /** Ngày kiểm tra/xác minh nguồn thực tế (chỉ điền khi đã kiểm tra) */
  sourceVerifiedAt?: string;
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
  featuredInNav?: boolean;
  featuredInFooter?: boolean;
}

export interface TopicInfo {
  id: string;
  name: string;
  description: string;
}

export interface ToolFAQItem {
  q: string;
  a: string;
}

export interface ToolAlternativeItem {
  name: string;
  slug?: string;
  comparison: string;
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
  /** Đánh dấu công cụ thuộc Sàn AI Tools (/ai-tools/:slug) thay vì Sàn Công Cụ Martech (/cong-cu/:slug) */
  isAiTool?: boolean;

  // --- Mở rộng chuẩn SEO / AEO / GEO & Đăng bài hàng loạt (Optional with auto-fallback) ---
  /** [AEO Direct Answer] Câu định nghĩa cốt lõi 40–60 từ trả lời trực tiếp "Công cụ X là gì & giải quyết bài toán nào?" cho AI Overviews */
  whatIsIt?: string;
  /** [GEO Target Persona] Chân dung đối tượng phù hợp nhất & trường hợp chưa cần dùng */
  bestFor?: string;
  /** [GEO Technical Entity] Nền tảng hỗ trợ (vd: "Web Browser, Chrome Extension, iOS/Android, API") */
  platforms?: string;
  /** [GEO Localization] Mức độ hỗ trợ tiếng Việt & dữ liệu thị trường Việt Nam */
  vietnameseSupport?: string;
  /** [GEO Edu Perk] Ưu đãi cho email sinh viên (.edu.vn) hoặc hạn mức gói miễn phí chính xác */
  studentPerk?: string;
  /** [HowTo Schema & Practical Guide] Các bước thiết lập & ứng dụng thực hành nhanh cho đồ án */
  quickSteps?: string[];
  /** [GEO Prompt / Practice] Mẫu câu lệnh (Prompt) hoặc bài tập thực hành nhanh với công cụ */
  samplePromptOrTask?: string;
  /** [GEO Entity Comparison] Đặt lên bàn cân so sánh với các công cụ thay thế cùng nhóm */
  alternatives?: ToolAlternativeItem[];
  /** [AEO FAQPage Schema] Bộ câu hỏi thường gặp chuyên sâu theo từng công cụ */
  faqs?: ToolFAQItem[];
  /** [SEO Internal Linking] Danh sách slug bài viết học thuật/thực chiến liên quan trên Marketing2Student */
  relatedArticleSlugs?: string[];
  /** [Long-form SEO Body] Nội dung bài viết HTML chuyên sâu (nếu muốn xuất bản bài review dài 1.000–2.000 từ) */
  contentHtml?: string;
}

export interface ToolCategoryInfo {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
}


import { ArticleFormatInfo, CategoryInfo, TopicInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'chien-luoc-marketing',
    slug: 'chien-luoc-marketing',
    name: 'Nền tảng & Chiến lược Marketing',
    shortName: 'Chiến lược Marketing',
    description: 'Mục tiêu, phân khúc - chọn thị trường mục tiêu - định vị (STP), môi trường cạnh tranh, kế hoạch và phân bổ nguồn lực.',
    iconName: 'Compass',
    legacySlugs: ['chien-luoc-marketing'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'nghien-cuu-thi-truong',
    slug: 'nghien-cuu-thi-truong',
    name: 'Nghiên cứu thị trường & Insight',
    shortName: 'Nghiên cứu & Insight',
    description: 'Thu thập, phân tích và diễn giải dữ liệu để hiểu thị trường, nhu cầu và insight khách hàng.',
    iconName: 'Search',
    legacySlugs: ['nghien-cuu-thi-truong'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'san-pham-gia-phan-phoi',
    slug: 'san-pham-gia-phan-phoi',
    name: 'Sản phẩm, Giá & Phân phối',
    shortName: 'Sản phẩm & Giá',
    description: 'Thiết kế, kiểm thử, ra mắt sản phẩm, chiến lược định giá và tổ chức kênh bán hàng.',
    iconName: 'ShoppingBag',
    legacySlugs: ['san-pham-gia-phan-phoi'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'thuong-hieu-hanh-vi-khach-hang',
    slug: 'thuong-hieu-hanh-vi-khach-hang',
    name: 'Thương hiệu & Hành vi khách hàng',
    shortName: 'Thương hiệu & Hành vi',
    description: 'Định vị, tài sản thương hiệu, tâm lý tiêu dùng, trách nhiệm xã hội (CSR) và danh tiếng thương hiệu.',
    iconName: 'Sparkles',
    legacySlugs: ['branding', 'thuong-hieu-hanh-vi-khach-hang'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'seo-content-marketing',
    slug: 'seo-content-marketing',
    name: 'SEO & Content Marketing',
    shortName: 'SEO & Content',
    description: 'Tìm kiếm, kiến trúc nội dung (Topic Cluster, Semantic SEO), viết và biên tập nội dung.',
    iconName: 'FileSearch',
    legacySlugs: ['seo', 'content-marketing', 'seo-content-marketing'],
    featuredInNav: true,
    featuredInFooter: true,
  },
  {
    id: 'social-video-marketing',
    slug: 'social-video-marketing',
    name: 'Social Media & Video Marketing',
    shortName: 'Social & Video',
    description: 'Mạng xã hội, video, livestream, influencer và hoạt động kết nối trên các kênh xã hội.',
    iconName: 'Video',
    legacySlugs: ['social-media-marketing', 'video-marketing', 'social-video-marketing'],
    featuredInNav: true,
    featuredInFooter: true,
  },
  {
    id: 'quang-cao-b2b-tang-truong',
    slug: 'quang-cao-b2b-tang-truong',
    name: 'Quảng cáo & Tăng trưởng',
    shortName: 'Quảng cáo & Tăng trưởng',
    description: 'Quảng cáo trả phí (Paid Ads), phối hợp thu hút khách hàng, lead generation và khuyến mại.',
    iconName: 'TrendingUp',
    legacySlugs: ['quang-cao-so', 'marketing-b2b', 'quang-cao-b2b-tang-truong'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'crm-trai-nghiem-khach-hang',
    slug: 'crm-trai-nghiem-khach-hang',
    name: 'CRM & Trải nghiệm khách hàng',
    shortName: 'CRM & Trải nghiệm',
    description: 'Email, chăm sóc khách hàng, hành trình mua hàng, cá nhân hóa, cộng đồng và giữ chân khách hàng.',
    iconName: 'Users',
    legacySlugs: ['crm-trai-nghiem-khach-hang'],
    featuredInNav: false,
    featuredInFooter: false,
  },
  {
    id: 'do-luong-marketing',
    slug: 'do-luong-marketing',
    name: 'Đo lường & Phân tích dữ liệu',
    shortName: 'Đo lường & Analytics',
    description: 'Chỉ số, tracking (GA4, UTM), báo cáo, phân tích hiệu quả và thiết kế thử nghiệm A/B.',
    iconName: 'BarChart3',
    legacySlugs: ['do-luong-marketing'],
    featuredInNav: true,
    featuredInFooter: true,
  },
  {
    id: 'ai-marketing',
    slug: 'ai-marketing',
    name: 'AI Marketing & Tự động hóa',
    shortName: 'AI Marketing',
    description: 'Cách sử dụng, đánh giá, kiểm soát và tổ chức quy trình với AI hoặc tự động hóa trong Marketing.',
    iconName: 'Bot',
    legacySlugs: ['ai-marketing'],
    featuredInNav: true,
    featuredInFooter: true,
  },
];

export const articleFormats: ArticleFormatInfo[] = [
  {
    id: 'huong-dan-thuc-hanh',
    slug: 'huong-dan-thuc-hanh',
    name: 'Hướng dẫn thực hành',
    description: 'Có các bước triển khai, dữ liệu đầu vào, đầu ra hoặc tiêu chí tự kiểm tra.',
  },
  {
    id: 'phan-tich-nghien-cuu',
    slug: 'phan-tich-nghien-cuu',
    name: 'Phân tích nghiên cứu',
    description: 'Giải thích câu hỏi, bối cảnh nghiên cứu, phát hiện chính và giới hạn ứng dụng.',
  },
  {
    id: 'phan-tich-tinh-huong',
    slug: 'phan-tich-tinh-huong',
    name: 'Phân tích tình huống',
    description: 'Đọc một thương hiệu hoặc chiến dịch cụ thể kèm nguồn và thời điểm thực tế.',
  },
  {
    id: 'goc-nhin',
    slug: 'goc-nhin',
    name: 'Góc nhìn',
    description: 'Lập luận hoặc khung tư duy của người viết, phân biệt rõ với bằng chứng thực nghiệm.',
  },
  {
    id: 'cap-nhat',
    slug: 'cap-nhat',
    name: 'Cập nhật',
    description: 'Thông tin thay đổi theo thời điểm có mốc công bố, phạm vi và nguồn chính thức.',
  },
];

/** Ánh xạ tên topic cũ sang chuyên mục/bộ lọc tương ứng để giữ tương thích URL cũ (?topic=...) */
export const LEGACY_TOPIC_CATEGORY_MAP: Record<string, string> = {
  'Ứng dụng AI thực chiến': 'ai-marketing',
  'Tối ưu Quảng cáo số': 'quang-cao-b2b-tang-truong',
  'SEO & Kiến trúc Nội dung': 'seo-content-marketing',
  'Mạng xã hội & Influencer': 'social-video-marketing',
  'Video & Livestream': 'social-video-marketing',
  'Đo lường GA4 & ROI': 'do-luong-marketing',
  'Email & B2B Lead Gen': 'crm-trai-nghiem-khach-hang',
  'Tâm lý học & Thương hiệu': 'thuong-hieu-hanh-vi-khach-hang',
};

/** @deprecated Dùng articleFormats thay thế cho bộ lọc chủ đề kỹ năng */
export const topics: TopicInfo[] = [
  { id: 'ai-marketing', name: 'Ứng dụng AI thực chiến', description: 'Prompting, Chatbot, cá nhân hóa và tự động hóa bằng AI' },
  { id: 'quang-cao-so', name: 'Tối ưu Quảng cáo số', description: 'Tần suất hiển thị, giá thầu từ khóa, brief sáng tạo và A/B testing' },
  { id: 'seo-semantic', name: 'SEO & Kiến trúc Nội dung', description: 'Topic Cluster, Semantic SEO, biên tập bài viết' },
  { id: 'mang-xa-hoi', name: 'Mạng xã hội & Influencer', description: 'Chiến thuật tăng tương tác, meme marketing, KOL/Influencer' },
  { id: 'video-livestream', name: 'Video & Livestream', description: 'Kịch bản video ngắn, YouTube case study và thương mại livestream' },
  { id: 'analytics-roi', name: 'Đo lường GA4 & ROI', description: 'Kiểm tra UTM, đo lường đơn hàng tăng thêm (Incrementality) và ROI' },
  { id: 'b2b-email', name: 'Email & B2B Lead Gen', description: 'Phân đoạn email, hành trình mua hàng B2B và thu thập Lead' },
  { id: 'tam-ly-thuong-hieu', name: 'Tâm lý học & Thương hiệu', description: 'Định vị thương hiệu, truyền miệng (WOM), lòng trung thành và CSR' },
];

export function resolveCategoryBySlugOrName(input?: string | null): CategoryInfo | undefined {
  if (!input) return undefined;
  const normalized = input.trim().toLowerCase();
  if (!normalized) return undefined;
  return categories.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      c.id.toLowerCase() === normalized ||
      c.name.toLowerCase() === normalized ||
      c.legacySlugs?.some((legacy) => legacy.toLowerCase() === normalized)
  );
}

export function getCategoryDisplayName(categorySlug?: string, fallback?: string): string {
  const matched = resolveCategoryBySlugOrName(categorySlug);
  return matched ? matched.name : fallback || '';
}

export function resolveFormatBySlugOrName(input?: string | null): ArticleFormatInfo | undefined {
  if (!input) return undefined;
  const normalized = input.trim().toLowerCase();
  if (!normalized) return undefined;
  return articleFormats.find(
    (f) =>
      f.slug.toLowerCase() === normalized ||
      f.id.toLowerCase() === normalized ||
      f.name.toLowerCase() === normalized
  );
}

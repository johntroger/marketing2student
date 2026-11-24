import { CategoryInfo, TopicInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'ai-marketing',
    slug: 'ai-marketing',
    name: 'AI Marketing & Tự động hóa',
    shortName: 'AI Marketing',
    description: 'Ứng dụng trí tuệ nhân tạo tạo sinh (GenAI), Chatbot AI, phân tích khách hàng và tự động hóa quy trình tiếp thị hiện đại.',
    iconName: 'Bot',
    legacySlugs: ['ai-marketing']
  },
  {
    id: 'do-luong-marketing',
    slug: 'do-luong-marketing',
    name: 'Đo lường & Phân tích Dữ liệu',
    shortName: 'Đo lường & Analytics',
    description: 'Kiểm chứng hiệu quả chiến dịch qua GA4, UTM, Thử nghiệm A/B (A/B Testing), đo lường ROI và phân tích dữ liệu thực nghiệm.',
    iconName: 'BarChart3',
    legacySlugs: ['do-luong-marketing']
  },
  {
    id: 'seo-content-marketing',
    slug: 'seo-content-marketing',
    name: 'SEO & Content Marketing',
    shortName: 'SEO & Content',
    description: 'Chiến lược tối ưu hóa công cụ tìm kiếm (Semantic SEO, Topic Cluster, AEO/GEO) và nghệ thuật xây dựng nội dung chuyển đổi cao.',
    iconName: 'FileSearch',
    legacySlugs: ['seo', 'content-marketing']
  },
  {
    id: 'social-video-marketing',
    slug: 'social-video-marketing',
    name: 'Social Media & Video Marketing',
    shortName: 'Social & Video',
    description: 'Chiến thuật lan truyền trên mạng xã hội (LinkedIn, YouTube, Instagram, TikTok), Influencer Marketing, Livestream và Video ngắn.',
    iconName: 'Video',
    legacySlugs: ['social-media-marketing', 'video-marketing']
  },
  {
    id: 'quang-cao-b2b-tang-truong',
    slug: 'quang-cao-b2b-tang-truong',
    name: 'Quảng cáo số, B2B & Tăng trưởng',
    shortName: 'Quảng cáo & B2B',
    description: 'Tối ưu hóa quảng cáo trả phí (Paid Ads), Email Marketing, tạo khách hàng tiềm năng (Lead Gen), B2B và Thương mại điện tử.',
    iconName: 'TrendingUp',
    legacySlugs: ['quang-cao-so', 'marketing-b2b']
  },
  {
    id: 'thuong-hieu-hanh-vi-khach-hang',
    slug: 'thuong-hieu-hanh-vi-khach-hang',
    name: 'Thương hiệu & Hành vi Khách hàng',
    shortName: 'Thương hiệu & Hành vi',
    description: 'Định vị thương hiệu, tâm lý học tiêu dùng, hành trình điểm chạm khách hàng (Customer Touchpoints), Gamification và CSR.',
    iconName: 'Sparkles',
    legacySlugs: ['branding', 'uncategorized']
  }
];

export const topics: TopicInfo[] = [
  { id: 'ai-marketing', name: 'Ứng dụng AI thực chiến', description: 'Prompting, Chatbot, cá nhân hóa và tự động hóa bằng AI' },
  { id: 'quang-cao-so', name: 'Tối ưu Quảng cáo số', description: 'Tần suất hiển thị, giá thầu từ khóa, brief sáng tạo và A/B testing' },
  { id: 'seo-semantic', name: 'SEO & Kiến trúc Nội dung', description: 'Topic Cluster, Semantic SEO, biên tập bài viết chuẩn EEAT' },
  { id: 'mang-xa-hoi', name: 'Mạng xã hội & Influencer', description: 'Chiến thuật tăng tương tác, meme marketing, KOL/Influencer' },
  { id: 'video-livestream', name: 'Video & Livestream', description: 'Kịch bản video ngắn, YouTube case study và thương mại livestream' },
  { id: 'analytics-roi', name: 'Đo lường GA4 & ROI', description: 'Kiểm tra UTM, đo lường đơn hàng tăng thêm (Incrementality) và ROI' },
  { id: 'b2b-email', name: 'Email & B2B Lead Gen', description: 'Phân đoạn email, hành trình mua hàng B2B và thu thập Lead' },
  { id: 'tam-ly-thuong-hieu', name: 'Tâm lý học & Thương hiệu', description: 'Định vị thương hiệu, truyền miệng (WOM), lòng trung thành và CSR' }
];

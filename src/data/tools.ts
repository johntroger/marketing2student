import { MarketingTool, ToolCategoryInfo } from '../types';
import { vietnamMartechTools } from './tools/vietnamMartech';
import { vietnamMartechBatch2ATools } from './tools/vietnamMartechBatch2A';
import { vietnamMartechBatch2BTools } from './tools/vietnamMartechBatch2B';
import { analyticsTrackingTools } from './tools/analyticsTracking';
import { seoResearchTools } from './tools/seoResearch';
import { designVideoAiTools } from './tools/designVideoAi';
import { socialAdsResearchTools } from './tools/socialAdsResearch';
import { crmAutomationTools } from './tools/crmAutomation';
import { ecommerceLandingPageTools } from './tools/ecommerceLandingPage';
import { marketResearchAcademicTools } from './tools/marketResearchAcademic';
import { performanceAdsAffiliateTools } from './tools/performanceAdsAffiliate';
import { prEventInfluencerTools } from './tools/prEventInfluencer';
import { b2bCdpRetentionTools } from './tools/b2bCdpRetention';

export const toolCategories: ToolCategoryInfo[] = [
  {
    id: 'vietnam-martech',
    slug: 'vietnam-martech',
    name: 'Công cụ Việt Nam (Make-in-VN)',
    description: 'Hệ sinh thái 88+ công cụ Make-in-Vietnam: Social Listening, CDP, CRM, DMS, POS đa kênh, Thiết kế, VietQR, Affiliate & Báo cáo ngành nội địa.',
    iconName: 'Flag'
  },
  {
    id: 'seo-keyword-research',
    slug: 'seo-keyword-research',
    name: 'SEO & Nghiên cứu Từ khóa',
    description: 'Phân tích từ khóa, kiểm tra thứ hạng, audit kỹ thuật website và nghiên cứu đối thủ trên Google.',
    iconName: 'Search'
  },
  {
    id: 'analytics-tracking',
    slug: 'analytics-tracking',
    name: 'Đo lường & Phân tích Dữ liệu',
    description: 'Theo dõi hành vi người dùng, gắn thẻ chuyển đổi, bản đồ nhiệt (Heatmap) và báo cáo ROI.',
    iconName: 'BarChart3'
  },
  {
    id: 'design-video-ai',
    slug: 'design-video-ai',
    name: 'Thiết kế, Bao bì 3D, Ảnh & Video',
    description: 'Thiết kế ấn phẩm (Canva, Figma), bao bì 3D (Pacdora), booth POSM (SketchUp) và biên tập video ngắn.',
    iconName: 'Palette'
  },
  {
    id: 'social-ads-research',
    slug: 'social-ads-research',
    name: 'Social Media & Thư viện Quảng cáo',
    description: 'Lập lịch đăng bài đa kênh, theo dõi xu hướng và soi mẫu quảng cáo của đối thủ.',
    iconName: 'Megaphone'
  },
  {
    id: 'crm-email-automation',
    slug: 'crm-email-automation',
    name: 'Email Marketing, CRM & Tự động hóa',
    description: 'Thu thập Lead, chăm sóc khách hàng tự động, gửi email hàng loạt và kết nối quy trình.',
    iconName: 'Mail'
  },
  {
    id: 'ecommerce-landing-page',
    slug: 'ecommerce-landing-page',
    name: 'Thương mại điện tử & Landing Page',
    description: 'Vận hành Shopee, TikTok Shop, Shopify, WooCommerce, Webflow và dựng trang đích chuyển đổi.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'market-research-academic',
    slug: 'market-research-academic',
    name: 'Nghiên cứu Thị trường & NCKH',
    description: 'Dữ liệu Statista, Euromonitor, Think with Google, SmartPLS, Zotero và Google Scholar.',
    iconName: 'Compass'
  },
  {
    id: 'performance-ads-affiliate',
    slug: 'performance-ads-affiliate',
    name: 'Quảng cáo, Local SEO & Affiliate',
    description: 'Meta/Google/TikTok Ads, Google Business Profile (Maps), Shopee/TikTok Affiliate và MMP.',
    iconName: 'Target'
  },
  {
    id: 'pr-event-influencer',
    slug: 'pr-event-influencer',
    name: 'PR, Sự kiện & Influencer Marketing',
    description: 'Tổ chức sự kiện (Luma, Slido, Mentimeter), thẩm định KOL ảo (HypeAuditor, Modash) và Digital PR.',
    iconName: 'Users'
  },
  {
    id: 'b2b-cdp-retention',
    slug: 'b2b-cdp-retention',
    name: 'B2B Outbound, CDP & Retention',
    description: 'Tìm Lead B2B (Apollo, Clay), hợp nhất dữ liệu CDP (Segment), Push Notification và Loyalty/Referral.',
    iconName: 'Briefcase'
  }
];

export const marketingTools: MarketingTool[] = [
  ...vietnamMartechTools,
  ...vietnamMartechBatch2ATools,
  ...vietnamMartechBatch2BTools,
  ...analyticsTrackingTools,
  ...seoResearchTools,
  ...designVideoAiTools,
  ...socialAdsResearchTools,
  ...crmAutomationTools,
  ...ecommerceLandingPageTools,
  ...marketResearchAcademicTools,
  ...performanceAdsAffiliateTools,
  ...prEventInfluencerTools,
  ...b2bCdpRetentionTools,
].map((t) => ({ ...t, isAiTool: false })).sort((a, b) => a.id - b.id);

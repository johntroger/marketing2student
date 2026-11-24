import { MarketingTool, ToolCategoryInfo } from '../types';
import { analyticsTrackingTools } from './tools/analyticsTracking';
import { aiContentTools } from './tools/aiContent';
import { seoResearchTools } from './tools/seoResearch';
import { designVideoAiTools } from './tools/designVideoAi';
import { socialAdsResearchTools } from './tools/socialAdsResearch';
import { crmAutomationTools } from './tools/crmAutomation';
import { ecommerceLandingPageTools } from './tools/ecommerceLandingPage';
import { marketResearchAcademicTools } from './tools/marketResearchAcademic';
import { performanceAdsAffiliateTools } from './tools/performanceAdsAffiliate';

export const toolCategories: ToolCategoryInfo[] = [
  {
    id: 'ai-content-copywriting',
    slug: 'ai-content-copywriting',
    name: 'AI Content & Copywriting',
    description: 'Trợ lý AI viết bài, lên ý tưởng chiến dịch, tạo kịch bản video và tối ưu thông điệp bán hàng.',
    iconName: 'Bot'
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
    name: 'Thiết kế, Hình ảnh & Video AI',
    description: 'Thiết kế ấn phẩm truyền thông, chỉnh sửa video ngắn TikTok/Reels và tạo hình ảnh thương hiệu.',
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
    description: 'Vận hành Shopee, TikTok Shop, Haravan, Sapo, LadiPage, Shopify và dựng web No-Code/AI.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'market-research-academic',
    slug: 'market-research-academic',
    name: 'Nghiên cứu Thị trường & NCKH',
    description: 'Báo cáo thị trường (Decision Lab, Q&Me), Social Listening (YouNet, Buzzmetrics), SmartPLS, Zotero và GEO.',
    iconName: 'Compass'
  },
  {
    id: 'performance-ads-affiliate',
    slug: 'performance-ads-affiliate',
    name: 'Quảng cáo, Local SEO & Affiliate',
    description: 'Meta/Google/TikTok/Zalo Ads, Google Business Profile (Maps), Accesstrade, Shopee Affiliate và MMP.',
    iconName: 'Target'
  }
];

export const marketingTools: MarketingTool[] = [
  ...analyticsTrackingTools,
  ...aiContentTools,
  ...seoResearchTools,
  ...designVideoAiTools,
  ...socialAdsResearchTools,
  ...crmAutomationTools,
  ...ecommerceLandingPageTools,
  ...marketResearchAcademicTools,
  ...performanceAdsAffiliateTools,
].sort((a, b) => a.id - b.id);

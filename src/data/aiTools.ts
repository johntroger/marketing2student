import { MarketingTool, ToolCategoryInfo } from '../types';
import { marketingTools } from './tools';
import { vietnamAiTools } from './ai-tools/vietnamAiTools';
import { llmChatbotsTools } from './ai-tools/llmChatbots';
import { aiResearchAcademicTools } from './ai-tools/aiResearchAcademic';
import { aiWritingContentTools } from './ai-tools/aiWritingContent';
import { aiImageDesignTools } from './ai-tools/aiImageDesign';
import { aiVideoAvatarTools } from './ai-tools/aiVideoAvatar';
import { aiAudioMusicTools } from './ai-tools/aiAudioMusic';
import { aiSlidesProductivityTools } from './ai-tools/aiSlidesProductivity';
import { aiCodingAgentsTools } from './ai-tools/aiCodingAgents';

export const aiToolCategories: ToolCategoryInfo[] = [
  {
    id: 'vietnam-ai-tools',
    slug: 'vietnam-ai-tools',
    name: 'Công cụ AI Việt Nam (Make-in-VN)',
    description: 'AI Hay, Vbee AIVoice, FPT.AI, Viettel AI, Botcake, ELSA Speak và các nền tảng Trí tuệ Nhân tạo tiêu biểu do người Việt phát triển.',
    iconName: 'Flag'
  },
  {
    id: 'llm-chatbots',
    slug: 'llm-chatbots',
    name: 'Mô hình Ngôn ngữ & Chatbot AI',
    description: 'ChatGPT, Claude, Gemini, DeepSeek, Grok và các mô hình suy luận đa năng hàng đầu cho học tập & công việc.',
    iconName: 'Bot'
  },
  {
    id: 'ai-research-academic',
    slug: 'ai-research-academic',
    name: 'AI Nghiên cứu Khoa học & Học tập',
    description: 'Đọc hiểu hàng chục file PDF, tổng quan tài liệu Q1/Q2 không bịa nguồn (NotebookLM, Perplexity, Consensus, SciSpace).',
    iconName: 'GraduationCap'
  },
  {
    id: 'ai-writing-content',
    slug: 'ai-writing-content',
    name: 'AI Viết lách, Biên tập & Dịch thuật',
    description: 'Viết nội dung chuẩn Brand Voice, paraphrase học thuật, dịch thuật chuyên sâu và kiểm tra văn phong AI.',
    iconName: 'FileText'
  },
  {
    id: 'ai-image-design',
    slug: 'ai-image-design',
    name: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    description: 'Tạo Key Visual, Poster chuẩn chữ, chụp ảnh sản phẩm AI (Product Studio), nâng nét 4K và tạo mô hình 3D.',
    iconName: 'Palette'
  },
  {
    id: 'ai-video-avatar',
    slug: 'ai-video-avatar',
    name: 'AI Tạo Video, Avatar & Cắt Clip',
    description: 'Chuyển văn bản/ảnh thành video điện ảnh, MC ảo thuyết trình khớp môi và cắt clip ngắn Viral tự động.',
    iconName: 'Video'
  },
  {
    id: 'ai-audio-music',
    slug: 'ai-audio-music',
    name: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    description: 'Lồng tiếng tự nhiên (TTS), sáng tác bài hát/Jingle, khử ồn phòng thu và tự động ghi biên bản cuộc họp.',
    iconName: 'Mic'
  },
  {
    id: 'ai-slides-productivity',
    slug: 'ai-slides-productivity',
    name: 'AI Làm Slide, Sơ đồ & Năng suất',
    description: 'Tạo Pitch Deck thuyết trình trong 60 giây, vẽ Flowchart/Mindmap từ chữ và quản lý lịch làm việc thông minh.',
    iconName: 'Presentation'
  },
  {
    id: 'ai-coding-agents',
    slug: 'ai-coding-agents',
    name: 'AI Dựng Web/App, GEO & AI Agents',
    description: 'Vibe Coding tạo Landing Page/App không cần biết lập trình, xây dựng AI Agent tự động hóa và theo dõi thứ hạng GEO.',
    iconName: 'Cpu'
  }
];

export const aiTools: MarketingTool[] = [
  ...vietnamAiTools,
  ...llmChatbotsTools,
  ...aiResearchAcademicTools,
  ...aiWritingContentTools,
  ...aiImageDesignTools,
  ...aiVideoAvatarTools,
  ...aiAudioMusicTools,
  ...aiSlidesProductivityTools,
  ...aiCodingAgentsTools,
].map((t) => ({ ...t, isAiTool: true })).sort((a, b) => a.id - b.id);

export const allPlatformTools: MarketingTool[] = [...marketingTools, ...aiTools];

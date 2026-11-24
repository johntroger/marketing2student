import { MarketingTool, ToolCategoryInfo } from '../types';

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
  }
];

export const marketingTools: MarketingTool[] = [
  {
    id: 1,
    slug: 'google-analytics-4',
    name: 'Google Analytics 4 (GA4)',
    tagline: 'Nền tảng đo lường lưu lượng truy cập & hành vi người dùng chuẩn ngành',
    excerpt: 'Công cụ phân tích web & app miễn phí bắt buộc phải biết đối với mọi sinh viên Digital Marketing để đọc phễu chuyển đổi, nguồn traffic và UTM.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí hoàn toàn bản tiêu chuẩn cho cá nhân và doanh nghiệp vừa & nhỏ.',
    level: 'Trung bình',
    officialUrl: 'https://analytics.google.com/',
    tags: ['GA4', 'Analytics', 'UTM', 'Conversion'],
    useCases: [
      'Theo dõi số lượng người dùng, tỷ lệ thoát và thời gian đọc trang trên Landing Page đồ án.',
      'Đo lường hiệu quả từng chiến dịch thông qua liên kết gắn thẻ UTM.',
      'Phân tích phễu chuyển đổi (Funnel Exploration) từ lúc xem sản phẩm đến lúc điền form.'
    ],
    pros: [
      'Chuẩn mực tuyển dụng tại hầu hết các Agency và doanh nghiệp.',
      'Tích hợp liền mạch với Google Ads, Google Search Console và Looker Studio.'
    ],
    limitations: 'Giao diện báo cáo sự kiện (Event-based) hơi phức tạp với người mới; dữ liệu có độ trễ 24–48 giờ ở một số báo cáo.',
    studentTip: 'Hãy gắn GA4 ngay vào Landing Page đồ án của nhóm và kết hợp với bài hướng dẫn kiểm tra UTM bằng AI trên Marketing2Student.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 2,
    slug: 'google-tag-manager',
    name: 'Google Tag Manager (GTM)',
    tagline: 'Quản lý mã theo dõi & sự kiện chuyển đổi không cần sửa code web',
    excerpt: 'Cho phép Marketer tự cài đặt Meta Pixel, GA4 Events, Google Ads Conversion chỉ qua giao diện kéo thả mà không cần làm phiền lập trình viên.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí hoàn toàn cho mọi website.',
    level: 'Trung bình',
    officialUrl: 'https://tagmanager.google.com/',
    tags: ['GTM', 'Tracking', 'Pixel', 'Conversion'],
    useCases: [
      'Đo lường lượt bấm nút "Đặt hàng ngay" hoặc "Đăng ký tư vấn" trên Landing Page.',
      'Quản lý tập trung mã Google Analytics, Facebook Pixel và TikTok Pixel.'
    ],
    pros: [
      'Có chế độ Preview (Tag Assistant) giúp kiểm tra lỗi bắn sự kiện theo thời gian thực.',
      'Giảm rủi ro làm chậm hoặc lỗi mã nguồn website.'
    ],
    limitations: 'Cần hiểu khái niệm Trigger (trình kích hoạt) và Variable (biến) để không gắn trùng lặp sự kiện.',
    studentTip: 'Dùng tính năng Preview của GTM chụp ảnh minh chứng lượt bắn sự kiện để đưa vào báo cáo đồ án môn học.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 3,
    slug: 'microsoft-clarity',
    name: 'Microsoft Clarity',
    tagline: 'Bản đồ nhiệt (Heatmap) & Quay lại phiên truy cập người dùng miễn phí',
    excerpt: 'Xem chính xác người dùng cuộn trang đến đâu, bấm vào nút nào và bị khựng ở đâu trên Landing Page — hoàn toàn miễn phí không giới hạn traffic.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí vĩnh viễn, không giới hạn số lượng bản ghi phiên (Session Recordings).',
    level: 'Cơ bản',
    officialUrl: 'https://clarity.microsoft.com/',
    tags: ['Heatmap', 'CRO', 'UX Analytics', 'Landing Page'],
    useCases: [
      'Phát hiện "Dead Clicks" (người dùng bấm nhầm vào ảnh không có link) và "Rage Clicks".',
      'Đo độ sâu cuộn trang (Scroll Depth) để tối ưu vị trí đặt nút CTA.'
    ],
    pros: [
      'Miễn phí hoàn toàn (khác với Hotjar giới hạn số phiên ở bản miễn phí).',
      'Tích hợp sẵn AI Copilot tóm tắt hành vi người dùng.'
    ],
    limitations: 'Không chuyên về phân tích nguồn traffic đa kênh như GA4; nên dùng song song cả hai.',
    studentTip: 'Rất hữu ích cho đồ án tối ưu tỷ lệ chuyển đổi (CRO) — chỉ cần 50 lượt truy cập thật là đã có Heatmap đẹp để phân tích.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 4,
    slug: 'looker-studio',
    name: 'Google Looker Studio',
    tagline: 'Thiết kế Dashboard báo cáo Marketing trực quan & tự động cập nhật',
    excerpt: 'Biến bảng số liệu khô khan từ GA4, Google Ads, Google Sheets thành báo cáo biểu đồ tương tác chuyên nghiệp gửi cho sếp và giảng viên.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí hoàn toàn với tài khoản Google.',
    level: 'Cơ bản',
    officialUrl: 'https://lookerstudio.google.com/',
    tags: ['Dashboard', 'Data Visualization', 'Reporting', 'BI'],
    useCases: [
      'Tổng hợp báo cáo KPI chiến dịch từ Google Sheets và GA4 vào một trang duy nhất.',
      'Trình bày số liệu tăng trưởng trực quan khi bảo vệ đồ án tốt nghiệp.'
    ],
    pros: [
      'Có sẵn hàng trăm mẫu Dashboard Marketing miễn phí.',
      'Chia sẻ qua link giống Google Docs, số liệu tự động làm mới.'
    ],
    limitations: 'Kết nối dữ liệu Facebook Ads / TikTok Ads cần dùng thêm connector bên thứ 3 hoặc đổ qua Google Sheets.',
    studentTip: 'Hãy xuất dữ liệu CSV từ bài tập thực hành hoặc Google Sheets rồi nối vào Looker Studio để tạo Dashboard chỉ trong 15 phút.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 5,
    slug: 'chatgpt-openai',
    name: 'ChatGPT (OpenAI)',
    tagline: 'Trợ lý AI đa năng hỗ trợ nghiên cứu thị trường, viết Content & phân tích dữ liệu',
    excerpt: 'Công cụ AI tạo sinh phổ biến nhất cho Marketer: từ brainstorm ý tưởng chiến dịch, đóng vai khách hàng phỏng vấn thử đến phân tích file CSV.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có bản miễn phí dùng hàng ngày; gói Plus trả phí mở khóa phân tích file nâng cao & tạo ảnh.',
    level: 'Cơ bản',
    officialUrl: 'https://chatgpt.com/',
    tags: ['GenAI', 'Copywriting', 'Brainstorming', 'Prompting'],
    useCases: [
      'Xây dựng chân dung khách hàng mục tiêu (Buyer Persona) và ma trận nỗi đau.',
      'Viết nhiều biến thể tiêu đề quảng cáo (A/B Testing Hooks) và kịch bản TikTok.',
      'Tóm tắt bài báo khoa học Marketing hoặc giải thích khái niệm phức tạp.'
    ],
    pros: [
      'Phản hồi nhanh, hỗ trợ tiếng Việt rất tự nhiên nếu biết viết Prompt có ngữ cảnh.',
      'Tích hợp tính năng tìm kiếm web và phân tích bảng biểu.'
    ],
    limitations: 'Dễ viết văn phong "công nghiệp" sáo rỗng nếu không cung cấp Brand Voice và ví dụ mẫu; cần kiểm chứng lại số liệu trích dẫn.',
    studentTip: 'Luôn giao cho AI một vai trò cụ thể, đối tượng đọc và ràng buộc giọng văn — không copy nguyên văn kết quả đầu tiên.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 6,
    slug: 'claude-anthropic',
    name: 'Claude (Anthropic)',
    tagline: 'Mô hình AI viết lách tự nhiên, sâu sắc & xử lý tài liệu dài xuất sắc',
    excerpt: 'Được giới Content Marketer và nhà nghiên cứu ưa chuộng nhờ văn phong tiếng Việt mượt mà, ít sáo rỗng và khả năng đọc hiểu tài liệu dài.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí giới hạn số lượt nhắn theo khung giờ; gói Pro trả phí theo tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://claude.ai/',
    tags: ['AI Writing', 'Long-form', 'Storytelling', 'Research'],
    useCases: [
      'Viết bài PR, Storytelling thương hiệu và bài blog SEO dài chuẩn cấu trúc.',
      'Đọc hiểu file PDF báo cáo thị trường dài hàng chục trang để rút ra insight.',
      'Tạo Landing Page mẫu (Artifacts) phục vụ demo ý tưởng cho nhóm.'
    ],
    pros: [
      'Giọng văn tự nhiên, bám sát hướng dẫn phong cách (Tone of Voice) tốt.',
      'Tính năng Projects và Artifacts rất tiện cho làm việc nhóm.'
    ],
    limitations: 'Bản miễn phí có giới hạn tin nhắn khá nhanh khi đính kèm file lớn.',
    studentTip: 'Dùng tính năng Artifacts của Claude để dựng nhanh bản nháp giao diện Landing Page trước khi đưa lên web thật.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 7,
    slug: 'google-gemini',
    name: 'Google Gemini',
    tagline: 'Trợ lý AI tích hợp sâu hệ sinh thái Google Docs, Sheets & YouTube',
    excerpt: 'Khai thác sức mạnh tìm kiếm Google thời gian thực, tóm tắt video YouTube và xử lý đa phương thức (văn bản, hình ảnh, bảng tính).',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí trên web/app; có gói Google One AI Premium.',
    level: 'Cơ bản',
    officialUrl: 'https://gemini.google.com/',
    tags: ['Google AI', 'Research', 'Deep Research', 'Workspace'],
    useCases: [
      'Sử dụng Deep Research để tổng hợp báo cáo tổng quan ngành hàng cho đồ án.',
      'Kiểm tra thông tin thời sự, xu hướng tìm kiếm và tóm tắt video đối thủ trên YouTube.'
    ],
    pros: [
      'Cửa sổ ngữ cảnh cực lớn, đọc tốt tài liệu tiếng Việt và số liệu cập nhật.',
      'Xuất trực tiếp kết quả sang Google Docs và Google Sheets chỉ với 1 cú bấm.'
    ],
    limitations: 'Cần đối chiếu lại các đường link nguồn khi dùng cho trích dẫn học thuật.',
    studentTip: 'Dùng Gemini kết hợp NotebookLM để tổng hợp hàng loạt tài liệu PDF môn học thành đề cương ôn tập và ý tưởng chiến dịch.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 8,
    slug: 'notebooklm',
    name: 'Google NotebookLM',
    tagline: 'Sổ tay nghiên cứu AI đọc hàng chục tài liệu PDF không bịa nguồn',
    excerpt: 'Công cụ vàng cho sinh viên làm nghiên cứu thị trường & khóa luận: tải lên file PDF, slide, link web và hỏi đáp dựa chính xác trên nguồn bạn cung cấp.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí sử dụng với tài khoản Google cá nhân.',
    level: 'Cơ bản',
    officialUrl: 'https://notebooklm.google.com/',
    tags: ['Research', 'PDF', 'Academic', 'Insight'],
    useCases: [
      'Tổng hợp 10–20 file phỏng vấn khách hàng để rút ra Insight cho sản phẩm mới.',
      'Đọc hiểu báo cáo ngành (Nielsen, Decision Lab, McKinsey) và trích dẫn đúng số trang.'
    ],
    pros: [
      'Trả lời kèm trích dẫn trực tiếp về từng đoạn trong tài liệu gốc, hạn chế tối đa ảo giác AI.',
      'Có tính năng tạo Mindmap và Audio Overview.'
    ],
    limitations: 'Chỉ phân tích tốt trong phạm vi tài liệu bạn tải lên, không dùng để viết bài sáng tạo bay bổng.',
    studentTip: 'Bắt buộc nên dùng khi tổng hợp bảng hỏi phỏng vấn sâu (In-depth Interview) trong môn Nghiên cứu Marketing.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 9,
    slug: 'google-search-console',
    name: 'Google Search Console (GSC)',
    tagline: 'Công cụ chính chủ Google đo lường hiệu suất SEO & từ khóa tìm kiếm thật',
    excerpt: 'Xem chính xác người dùng đã gõ từ khóa nào trên Google để tìm thấy website của bạn, tỷ lệ nhấp (CTR) và thứ hạng trung bình.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí hoàn toàn cho chủ sở hữu website.',
    level: 'Cơ bản',
    officialUrl: 'https://search.google.com/search-console',
    tags: ['SEO', 'Google Search', 'Indexing', 'Keywords'],
    useCases: [
      'Gửi Sitemap.xml để Google lập chỉ mục (Index) bài viết mới nhanh chóng.',
      'Tìm những từ khóa đang đứng trang 2 (vị trí 11–20) để tối ưu lại bài viết đẩy lên Top 10.'
    ],
    pros: [
      'Dữ liệu tìm kiếm chính xác 100% từ Google (không phải ước lượng như tool bên thứ 3).',
      'Cảnh báo lỗi bảo mật, lỗi mobile và tốc độ trang (Core Web Vitals).'
    ],
    limitations: 'Chỉ xem được dữ liệu của chính website mà bạn có quyền quản trị.',
    studentTip: 'Đừng quên nộp `sitemap.xml` lên GSC ngay sau khi xuất bản website hoặc Landing Page dự án.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 10,
    slug: 'google-keyword-planner',
    name: 'Google Keyword Planner',
    tagline: 'Nghiên cứu lượng tìm kiếm từ khóa & ước tính giá thầu quảng cáo Search',
    excerpt: 'Công cụ nghiên cứu từ khóa gốc của Google Ads giúp khám phá từ khóa mới, lượng tìm kiếm trung bình hàng tháng và độ cạnh tranh giá thầu.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí trong tài khoản Google Ads (không cần chạy quảng cáo vẫn dùng được ở chế độ chuyên gia).',
    level: 'Cơ bản',
    officialUrl: 'https://ads.google.com/home/tools/keyword-planner/',
    tags: ['Keyword Research', 'Google Ads', 'SEO', 'Search Volume'],
    useCases: [
      'Lập kế hoạch bộ từ khóa (Keyword Map) cho bài SEO và chiến dịch Google Search Ads.',
      'Ước tính ngân sách và chi phí mỗi lượt nhấp (CPC) dự kiến cho kế hoạch truyền thông.'
    ],
    pros: [
      'Dữ liệu trực tiếp từ hệ thống đấu giá tìm kiếm của Google theo từng khu vực (Việt Nam / TP.HCM / Hà Nội).',
      'Xuất file Excel/CSV dễ dàng.'
    ],
    limitations: 'Nếu tài khoản chưa chi tiêu quảng cáo, lượng tìm kiếm sẽ hiển thị theo khoảng rộng (vd: 1K–10K).',
    studentTip: 'Kết hợp Keyword Planner với gợi ý tìm kiếm (Google Suggest) để tìm từ khóa dài (Long-tail) ít cạnh tranh cho dự án mới.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 11,
    slug: 'semrush',
    name: 'Semrush',
    tagline: 'Bộ công cụ All-in-One phân tích SEO, Backlink & Quảng cáo đối thủ',
    excerpt: 'Nền tảng phân tích đối thủ cạnh tranh hàng đầu thế giới: soi từ khóa đối thủ đang lên Top, lưu lượng truy cập ước tính và mẫu quảng cáo Search.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản miễn phí cho phép kiểm tra giới hạn 10 lượt truy vấn/ngày và 1 dự án Site Audit.',
    level: 'Nâng cao',
    officialUrl: 'https://www.semrush.com/',
    tags: ['SEO', 'Competitor Analysis', 'Backlinks', 'Audit'],
    useCases: [
      'Phân tích khoảng trống từ khóa (Keyword Gap) giữa thương hiệu mình và đối thủ.',
      'Chạy Site Audit phát hiện lỗi broken link, thiếu thẻ meta hoặc trùng lặp nội dung.'
    ],
    pros: [
      'Cơ sở dữ liệu từ khóa và backlink khổng lồ, cực kỳ mạnh cho nghiên cứu đối thủ.',
      'Có chứng chỉ học thuật miễn phí qua Semrush Academy để làm đẹp CV.'
    ],
    limitations: 'Gói trả phí rất đắt đối với sinh viên (từ ~$139/tháng); bản miễn phí giới hạn 10 lượt tra cứu/ngày.',
    studentTip: 'Hãy tận dụng 10 lượt tra cứu miễn phí mỗi ngày một cách có kế hoạch và học lấy chứng chỉ trên Semrush Academy.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 12,
    slug: 'ubersuggest',
    name: 'Ubersuggest',
    tagline: 'Công cụ gợi ý từ khóa SEO & phân tích nội dung thân thiện cho người mới',
    excerpt: 'Giao diện trực quan dễ hiểu hơn Semrush/Ahrefs, giúp sinh viên nhanh chóng tìm ý tưởng bài viết, độ khó từ khóa (SD) và ý tưởng nội dung.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép tra cứu 3 lượt/ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://neilpatel.com/ubersuggest/',
    tags: ['SEO', 'Keyword Ideas', 'Content Ideas', 'Beginner'],
    useCases: [
      'Tìm nhanh các từ khóa liên quan và câu hỏi người dùng hay tìm kiếm.',
      'Xem các bài viết đang nhận nhiều lượt chia sẻ nhất của đối thủ.'
    ],
    pros: [
      'Giao diện rất gọn, dễ đọc các chỉ số Search Volume, SEO Difficulty, CPC.',
      'Có tiện ích mở rộng Chrome xem nhanh chỉ số ngay trên trang kết quả Google.'
    ],
    limitations: 'Giới hạn 3 lượt tìm kiếm mỗi ngày ở tài khoản miễn phí.',
    studentTip: 'Cài extension Ubersuggest trên Chrome để nhìn thấy ngay lượng tìm kiếm khi bạn gõ thử từ khóa trên Google.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 13,
    slug: 'screaming-frog-seo-spider',
    name: 'Screaming Frog SEO Spider',
    tagline: 'Phần mềm quét (Crawl) kỹ thuật SEO toàn bộ website trên máy tính',
    excerpt: 'Giả lập bot Google đi quét từng đường link trên website để phát hiện lỗi 404, thiếu thẻ H1/Meta Description, ảnh quá nặng hoặc sai cấu trúc liên kết.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí quét tối đa 500 URL mỗi lần chạy (quá đủ cho hầu hết website vừa và nhỏ).',
    level: 'Nâng cao',
    officialUrl: 'https://www.screamingfrog.co.uk/seo-spider/',
    tags: ['Technical SEO', 'Site Audit', 'Crawler', 'Desktop App'],
    useCases: [
      'Thực hiện bài tập Technical SEO Audit website doanh nghiệp.',
      'Kiểm tra toàn bộ thẻ Title, Description, Canonical và Alt ảnh hàng loạt.'
    ],
    pros: [
      'Bản miễn phí 500 URLs rất hào phóng và đầy đủ các chỉ số kỹ thuật cốt lõi.',
      'Chạy trực tiếp trên Windows/macOS với tốc độ rất nhanh.'
    ],
    limitations: 'Giao diện dạng bảng dữ liệu chuyên sâu, cần nắm vững kiến thức On-page/Technical SEO để đọc hiểu.',
    studentTip: 'Nếu làm báo cáo Audit SEO cho doanh nghiệp SME hoặc blog cá nhân (< 500 trang), bản miễn phí của Screaming Frog là vũ khí số 1.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 14,
    slug: 'canva',
    name: 'Canva',
    tagline: 'Nền tảng thiết kế ấn phẩm truyền thông, Slide & Video ngắn cho Marketer',
    excerpt: 'Công cụ thiết kế kéo thả phổ biến nhất cho sinh viên và đội ngũ Marketing: hàng nghìn mẫu Banner, Post Facebook, Infographic và Pitch Deck chuyên nghiệp.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí rất mạnh; Sinh viên có email `.edu.vn` có thể được hỗ trợ Canva Education.',
    level: 'Cơ bản',
    officialUrl: 'https://www.canva.com/',
    tags: ['Design', 'Social Media', 'Presentation', 'Brand Kit'],
    useCases: [
      'Thiết kế bộ nhận diện thương hiệu (Logo, bảng màu, font chữ) cho đồ án.',
      'Làm bài đăng mạng xã hội (Carousel Instagram/Facebook), poster sự kiện và slide thuyết trình.'
    ],
    pros: [
      'Cực kỳ dễ dùng, hỗ trợ font tiếng Việt phong phú.',
      'Có tính năng cộng tác nhóm thời gian thực và bộ công cụ Magic Studio AI.'
    ],
    limitations: 'Nhiều mẫu/icon đẹp gắn mác Pro; không thay thế được phần mềm chuyên sâu như Illustrator trong in ấn phức tạp.',
    studentTip: 'Hãy thiết lập Brand Kit (mã màu + font chữ cố định) ngay từ đầu để toàn bộ bài đăng của dự án sinh viên đồng nhất chuyên nghiệp.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 15,
    slug: 'capcut',
    name: 'CapCut',
    tagline: 'Trình dựng video ngắn TikTok / Reels / Shorts kèm phụ đề tự động AI',
    excerpt: 'Công cụ dựng video quốc dân cho Marketer hiện đại: cắt ghép nhanh, tự động tạo phụ đề tiếng Việt chuẩn xác, hiệu ứng chuyển cảnh bắt trend.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Có bản miễn phí trên Web, PC và Mobile; một số hiệu ứng & Auto Captions nâng cao thuộc gói Pro.',
    level: 'Cơ bản',
    officialUrl: 'https://www.capcut.com/',
    tags: ['Video Marketing', 'TikTok', 'Reels', 'Auto Captions'],
    useCases: [
      'Dựng video review sản phẩm, UGC (User-Generated Content) và quảng cáo ngắn 15–60 giây.',
      'Thêm phụ đề tiếng Việt bắt mắt để giữ chân người xem tắt tiếng trên mạng xã hội.'
    ],
    pros: [
      'Tốc độ dựng nhanh gấp nhiều lần Premiere với video ngắn.',
      'Kho mẫu Template và nhạc xu hướng đồng bộ trực tiếp với TikTok.'
    ],
    limitations: 'Ngày càng nhiều tính năng chuyển sang gói Pro; xuất video miễn phí cần chú ý tắt watermark cuối clip.',
    studentTip: '3 giây đầu tiên (Hook) quyết định tỷ lệ xem hết — luôn chèn chữ tiêu đề lớn + âm thanh nhấn mạnh ngay khung hình đầu.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 16,
    slug: 'figma',
    name: 'Figma',
    tagline: 'Thiết kế giao diện UI/UX Landing Page, Wireframe & Prototype tương tác',
    excerpt: 'Công cụ tiêu chuẩn công nghiệp để thiết kế wireframe Landing Page, luồng trải nghiệm người dùng (User Flow) và bộ UI Kit trước khi code web.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí cho cá nhân; Sinh viên được cấp gói Figma Education Pro miễn phí khi xác minh email trường.',
    level: 'Trung bình',
    officialUrl: 'https://www.figma.com/',
    tags: ['UI/UX', 'Landing Page', 'Wireframe', 'Prototype'],
    useCases: [
      'Vẽ sơ đồ hành trình khách hàng (Customer Journey Map) trên FigJam.',
      'Thiết kế bản mẫu (Mockup) Landing Page trước khi bàn giao cho lập trình viên hoặc dựng bằng AI.'
    ],
    pros: [
      'Chạy mượt trên trình duyệt, làm việc nhóm nhiều người cùng lúc.',
      'Cộng đồng chia sẻ hàng nghìn template Landing Page miễn phí.'
    ],
    limitations: 'Đường cong học tập cao hơn Canva nếu muốn làm Prototype phức tạp.',
    studentTip: 'Đăng ký gói Figma Education bằng email sinh viên để mở khóa toàn bộ tính năng làm việc nhóm chuyên nghiệp.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 17,
    slug: 'meta-ad-library',
    name: 'Meta Ad Library (Thư viện Quảng cáo Facebook)',
    tagline: 'Tra cứu công khai toàn bộ quảng cáo đang chạy của mọi Fanpage đối thủ',
    excerpt: 'Công cụ chính chủ miễn phí từ Meta cho phép bạn xem đối thủ đang chạy bao nhiêu mẫu quảng cáo Facebook/Instagram, dùng hình ảnh, video và thông điệp gì.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí công khai, thậm chí không cần đăng nhập Facebook.',
    level: 'Cơ bản',
    officialUrl: 'https://www.facebook.com/ads/library/',
    tags: ['Facebook Ads', 'Competitor Research', 'Ad Creative', 'Spy Ads'],
    useCases: [
      'Nghiên cứu góc tiếp cận (Marketing Angles) và định dạng creative (Ảnh vs Video/Carousel) của đối thủ cùng ngành.',
      'Tìm mẫu quảng cáo chạy lâu nhất (thường là mẫu thắng — Winning Ads) để học hỏi cấu trúc viết bài.'
    ],
    pros: [
      'Dữ liệu thật 100%, cập nhật theo thời gian thực từ Meta.',
      'Lọc được theo quốc gia, nền tảng (Facebook, Instagram, Messenger) và trạng thái hoạt động.'
    ],
    limitations: 'Không hiển thị chi phí ngân sách hay lượt chuyển đổi của thương hiệu thương mại (chỉ hiển thị chi tiêu với quảng cáo chính trị/xã hội).',
    studentTip: 'Trước khi viết bài quảng cáo cho đồ án, hãy vào Meta Ad Library tìm 5 đối thủ lớn nhất trong ngành để xem họ đang nhấn mạnh nỗi đau nào.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 18,
    slug: 'tiktok-creative-center',
    name: 'TikTok Creative Center',
    tagline: 'Kho xu hướng Hashtag, Nhạc nền & Quảng cáo thắng lớn trên TikTok',
    excerpt: 'Cổng dữ liệu chính thức của TikTok giúp Marketer bắt trend âm thanh, hashtag theo ngành hàng tại Việt Nam và phân tích Top Ads chuyển đổi cao.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí truy cập với tài khoản TikTok / TikTok for Business.',
    level: 'Cơ bản',
    officialUrl: 'https://ads.tiktok.com/business/creativecenter/',
    tags: ['TikTok Ads', 'Trends', 'Creative', 'Short Video'],
    useCases: [
      'Tìm kiếm Top Ads theo ngành hàng (Làm đẹp, F&B, Thời trang...) tại thị trường Việt Nam.',
      'Phân tích đường cong giữ chân người xem (Retention) ở giây thứ mấy trong các video quảng cáo.'
    ],
    pros: [
      'Xem được biểu đồ tương tác từng giây của các video quảng cáo mẫu.',
      'Cập nhật danh sách bài hát được phép dùng cho tài khoản thương mại (Commercial Music Library).'
    ],
    limitations: 'Một số báo cáo chuyên sâu yêu cầu đăng nhập tài khoản TikTok Business Center.',
    studentTip: 'Luôn kiểm tra phần "Commercial Music Library" để chọn nhạc cho video thương hiệu mà không bị tắt tiếng vì bản quyền.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 19,
    slug: 'google-trends',
    name: 'Google Trends',
    tagline: 'Đo lường xu hướng quan tâm & tính mùa vụ của thị trường theo thời gian',
    excerpt: 'So sánh độ nóng của thương hiệu, sản phẩm hoặc từ khóa theo từng tháng, từng tỉnh thành tại Việt Nam để chọn đúng thời điểm tung chiến dịch.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí hoàn toàn.',
    level: 'Cơ bản',
    officialUrl: 'https://trends.google.com/',
    tags: ['Market Research', 'Seasonality', 'Trends', 'Consumer Behavior'],
    useCases: [
      'Kiểm tra tính mùa vụ (ví dụ: nhu cầu quà tặng Valentine, Trung Thu, Black Friday tăng từ tuần nào).',
      'So sánh mức độ nhận biết thương hiệu (Brand Search Interest) giữa 2–5 đối thủ.'
    ],
    pros: [
      'Dữ liệu lịch sử nhiều năm miễn phí, trực quan theo từng tỉnh thành.',
      'Gợi ý các cụm từ khóa đang "Đột phá" (Breakout) rất nhanh.'
    ],
    limitations: 'Hiển thị chỉ số tương đối (0–100) chứ không phải số lượng tìm kiếm tuyệt đối.',
    studentTip: 'Đưa biểu đồ so sánh Google Trends vào phần "Phân tích bối cảnh thị trường" của bài thuyết trình sẽ giúp lập luận thuyết phục hơn hẳn.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 20,
    slug: 'metric-vn-or-buffer',
    name: 'Buffer',
    tagline: 'Lập lịch đăng bài tự động đa kênh mạng xã hội & đo lường tương tác',
    excerpt: 'Quản lý lịch nội dung (Content Calendar) cho Facebook, Instagram, LinkedIn, Threads và TikTok trên một bảng điều khiển gọn gàng.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói miễn phí cho phép kết nối tối đa 3 kênh mạng xã hội và hẹn lịch trước 10 bài/kênh.',
    level: 'Cơ bản',
    officialUrl: 'https://buffer.com/',
    tags: ['Social Scheduling', 'Content Calendar', 'Automation', 'Analytics'],
    useCases: [
      'Lên lịch đăng bài tự động cho Fanpage dự án sinh viên xuyên suốt tuần.',
      'Theo dõi giờ đăng nào mang lại tỷ lệ tiếp cận tốt nhất.'
    ],
    pros: [
      'Giao diện tối giản, sạch sẽ, không rối mắt như nhiều phần mềm quản lý social lớn.',
      'Gói miễn phí 3 kênh vừa đẹp cho sinh viên thực tập hoặc dự án nhóm.'
    ],
    limitations: 'Các tính năng phân tích sâu và duyệt bài nhóm cần nâng cấp lên gói trả phí.',
    studentTip: 'Dùng Buffer (hoặc Meta Business Suite cho riêng Facebook/IG) để giải phóng thời gian đăng bài thủ công hàng ngày.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 21,
    slug: 'hubspot-crm',
    name: 'HubSpot CRM & Marketing Hub',
    tagline: 'Hệ thống CRM quản lý khách hàng tiềm năng, Form & Email Automation',
    excerpt: 'Nền tảng CRM miễn phí hàng đầu giúp tạo form thu thập Lead trên Landing Page, quản lý phễu bán hàng và tự động gửi email cảm ơn.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Tools cực kỳ hào phóng: lưu trữ không giới hạn liên hệ, tạo Form, Live Chat và gửi tới 2.000 email/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.hubspot.com/products/crm',
    tags: ['CRM', 'Lead Generation', 'Email Marketing', 'HubSpot'],
    useCases: [
      'Nhúng Form thu thập thông tin đăng ký nhận ưu đãi vào Landing Page dự án (như dự án Golden & AQUA REMIND).',
      'Quản lý danh sách khách hàng tiềm năng (Pipeline) và gắn nhãn phân khúc.'
    ],
    pros: [
      'Hệ thống CRM chuẩn doanh nghiệp nhưng bản Free đã đủ cho dự án thực chiến.',
      'Có HubSpot Academy cấp chứng chỉ Inbound Marketing & Email Marketing miễn phí.'
    ],
    limitations: 'Các luồng tự động hóa (Workflows) phức tạp nhiều nhánh yêu cầu gói trả phí khá cao.',
    studentTip: 'Học ngay khóa Inbound Marketing miễn phí trên HubSpot Academy và thực hành nhúng Form HubSpot vào Landing Page của nhóm.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 22,
    slug: 'brevo',
    name: 'Brevo (Sendinblue)',
    tagline: 'Nền tảng Email Marketing & Automation thân thiện cho chiến dịch gửi thư',
    excerpt: 'Thiết kế email kéo thả đẹp mắt, phân đoạn danh sách khách hàng và gửi chiến dịch email tự động với chi phí tối ưu.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói miễn phí cho phép gửi tối đa 300 email/ngày với kho mẫu email kéo thả.',
    level: 'Cơ bản',
    officialUrl: 'https://www.brevo.com/',
    tags: ['Email Marketing', 'Newsletter', 'Automation', 'Segmentation'],
    useCases: [
      'Thực hành thiết kế Email Newsletter và chạy A/B Testing tiêu đề email.',
      'Theo dõi tỷ lệ mở email (Open Rate) và tỷ lệ bấm link (CTR).'
    ],
    pros: [
      'Hỗ trợ Automation Workflow cơ bản ngay trên gói miễn phí (rất hiếm gặp).',
      'Cho phép lưu không giới hạn danh sách liên hệ ở bản miễn phí (chỉ giới hạn số lượng gửi/ngày).'
    ],
    limitations: 'Bản miễn phí có gắn logo Brevo ở chân email và giới hạn 300 email/ngày.',
    studentTip: 'Áp dụng bài viết "AI viết tiêu đề email cá nhân hóa" trên Marketing2Student rồi thử nghiệm A/B ngay trên Brevo.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 23,
    slug: 'n8n-automation',
    name: 'n8n (Workflow Automation)',
    tagline: 'Tự động hóa quy trình Marketing & AI Agent mã nguồn mở không giới hạn',
    excerpt: 'Kết nối Webhook từ Form Landing Page, Google Sheets, Gemini/ChatGPT, Facebook Page và Telegram thành quy trình làm việc tự động 24/7.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% khi tự cài đặt (Self-hosted via Docker); có bản Cloud trả phí tiện lợi.',
    level: 'Nâng cao',
    officialUrl: 'https://n8n.io/',
    tags: ['Automation', 'AI Agent', 'Webhook', 'No-Code'],
    useCases: [
      'Tự động tóm tắt bài viết mới bằng AI rồi đăng lên Fanpage Facebook & Telegram Group.',
      'Khi khách hàng điền form trên Landing Page, tự động lưu vào Google Sheets và gửi thông báo về Telegram.'
    ],
    pros: [
      'Tiết kiệm chi phí cực lớn so với Zapier/Make khi chạy khối lượng tác vụ lớn.',
      'Hỗ trợ nút AI Agent kết nối trực tiếp Gemini, OpenAI, Claude.'
    ],
    limitations: 'Cần biết cơ bản về API, JSON hoặc cách chạy Docker nếu muốn tự host miễn phí.',
    studentTip: 'Biết sử dụng n8n là lợi thế cạnh tranh rất lớn khi sinh viên ứng tuyển vị trí Growth Marketing hoặc Marketing Automation.',
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 24,
    slug: 'tally-forms',
    name: 'Tally Forms',
    tagline: 'Tạo biểu mẫu khảo sát nghiên cứu thị trường & thu thập Lead không giới hạn',
    excerpt: 'Thay thế hoàn hảo cho Google Forms với giao diện đẹp như Notion, hỗ trợ logic rẽ nhánh, tính điểm trắc nghiệm và nhúng mượt mà vào web.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí gần như toàn bộ tính năng (không giới hạn số form và số lượt gửi).',
    level: 'Cơ bản',
    officialUrl: 'https://tally.so/',
    tags: ['Survey', 'Market Research', 'Lead Form', 'UX'],
    useCases: [
      'Thiết kế bảng hỏi khảo sát định lượng cho nghiên cứu khoa học sinh viên và khóa luận.',
      'Tạo form nhận đăng ký trải nghiệm sản phẩm hoặc khảo sát mức độ hài lòng khách hàng.'
    ],
    pros: [
      'Giao diện tối giản, chuyên nghiệp, tỷ lệ người dùng điền hết bảng hỏi cao hơn form truyền thống.',
      'Kết nối trực tiếp kết quả về Google Sheets, Notion hoặc Webhook.'
    ],
    limitations: 'Xóa hoàn toàn nhãn thương hiệu Tally ở chân trang cần gói Pro.',
    studentTip: 'Hãy thử dùng Tally cho bảng khảo sát nghiên cứu thị trường của nhóm để tăng tính chuyên nghiệp trong mắt người trả lời.',
    featured: false,
    verifiedAt: '2026-11-24'
  }
];

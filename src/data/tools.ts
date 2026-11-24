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
    pricingDetail: 'Miễn phí hoàn toàn bản tiêu chuẩn cho cá nhân và doanh nghiệp vừa & nhỏ (hạn mức tới 10 triệu sự kiện/tháng).',
    level: 'Trung bình',
    officialUrl: 'https://analytics.google.com/',
    tags: ['GA4', 'Analytics', 'UTM', 'Conversion'],
    whatIsIt: 'Google Analytics 4 (GA4) là nền tảng phân tích dữ liệu Web và App thế hệ mới của Google, hoạt động dựa trên mô hình sự kiện (Event-based) thay vì phiên truy cập cũ. Công cụ giúp Marketer theo dõi chính xác nguồn traffic qua mã UTM, tỷ lệ tương tác (Engagement Rate) và phễu chuyển đổi xuyên thiết bị hoàn toàn miễn phí.',
    bestFor: 'Sinh viên làm đồ án Digital Marketing, Performance Marketer, SEOer và chủ doanh nghiệp cần đo lường hiệu quả thực tế của Landing Page và chiến dịch quảng cáo.',
    platforms: 'Web Browser (Cloud), iOS/Android App (Google Analytics), kết nối trực tiếp GTM, BigQuery & Looker Studio',
    vietnameseSupport: 'Giao diện hỗ trợ 100% tiếng Việt; đo lường chính xác vị trí địa lý tới từng tỉnh/thành tại Việt Nam.',
    studentPerk: 'Miễn phí 100% vĩnh viễn. Google cung cấp sẵn tài khoản Demo Account (Google Merchandise Store) có dữ liệu thật để sinh viên thực hành mà chưa cần có website riêng.',
    useCases: [
      'Theo dõi số lượng người dùng, tỷ lệ tương tác (Engagement Rate) và thời gian đọc trang trên Landing Page đồ án.',
      'Đo lường hiệu quả từng chiến dịch truyền thông thông qua liên kết gắn thẻ UTM (`utm_source`, `utm_medium`, `utm_campaign`).',
      'Phân tích phễu chuyển đổi (Funnel Exploration) từ lúc xem sản phẩm đến lúc điền form đăng ký.'
    ],
    quickSteps: [
      'Đăng nhập analytics.google.com, khởi tạo Property GA4 mới và lấy mã Measurement ID (dạng `G-XXXXXXXXXX`).',
      'Gắn mã Measurement ID vào website thông qua thẻ Google Tag trong Google Tag Manager (GTM) hoặc plugin CMS.',
      'Bật Enhanced Measurement để tự động đo lượt cuộn trang (90%), lượt nhấp link ngoài và tải tài liệu PDF.',
      'Vào mục Explore > Funnel Exploration để dựng báo cáo phễu chuyển đổi và xuất bảng số liệu đưa vào đồ án.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Truy cập GA4 Demo Account của Google, mở báo cáo Traffic Acquisition, lọc theo Session campaign và xác định 3 chiến dịch có Engagement Rate cao nhất nhưng tỷ lệ chuyển đổi (Key Events) thấp để đề xuất tối ưu Landing Page.',
    pros: [
      'Chuẩn mực tuyển dụng bắt buộc tại hầu hết các Agency và doanh nghiệp.',
      'Tích hợp liền mạch với Google Ads, Google Search Console, BigQuery và Looker Studio.'
    ],
    limitations: 'Giao diện báo cáo sự kiện (Event-based) hơi phức tạp với người mới; dữ liệu chuẩn hóa có độ trễ 24–48 giờ ở một số báo cáo phân bổ.',
    studentTip: 'Hãy gắn GA4 ngay vào Landing Page đồ án của nhóm và kết hợp với bài hướng dẫn kiểm tra UTM bằng AI trên Marketing2Student.',
    alternatives: [
      { name: 'Microsoft Clarity', slug: 'microsoft-clarity', comparison: 'Clarity mạnh về quay video màn hình và Heatmap trực quan, nên dùng song song với GA4.' },
      { name: 'Google Looker Studio', slug: 'looker-studio', comparison: 'Dùng để kéo dữ liệu từ GA4 sang trình bày thành biểu đồ báo cáo đẹp mắt hơn.' }
    ],
    faqs: [
      {
        q: 'Sinh viên chưa có website riêng thì thực hành Google Analytics 4 bằng cách nào?',
        a: 'Bạn có thể truy cập tài khoản GA4 Demo chính thức của Google (dữ liệu thật từ cửa hàng Google Merchandise Store và ứng dụng Flood-It!) hoàn toàn miễn phí để luyện đọc báo cáo và dựng phễu.'
      },
      {
        q: 'Chỉ số Bounce Rate (Tỷ lệ thoát) trong GA4 được tính như thế nào?',
        a: 'Trong GA4, Bounce Rate là phần bù của Engagement Rate (100% trừ đi tỷ lệ phiên tương tác). Một phiên được tính là có tương tác khi người dùng ở lại trên 10 giây, xem từ 2 trang trở lên hoặc kích hoạt ít nhất 1 sự kiện chuyển đổi.'
      }
    ],
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
    pricingDetail: 'Miễn phí hoàn toàn cho mọi website không giới hạn số lượng thẻ (Tags) và trình kích hoạt (Triggers).',
    level: 'Trung bình',
    officialUrl: 'https://tagmanager.google.com/',
    tags: ['GTM', 'Tracking', 'Pixel', 'Conversion'],
    whatIsIt: 'Google Tag Manager (GTM) là hệ thống quản lý thẻ (Tag Management System) miễn phí của Google, giúp Marketer cài đặt và kiểm soát toàn bộ mã theo dõi (GA4, Meta Pixel, TikTok Pixel, Clarity) trên một giao diện web duy nhất mà không phải can thiệp trực tiếp vào mã nguồn website.',
    bestFor: 'Performance Marketer, chuyên viên Digital Analytics và nhóm sinh viên chạy chiến dịch thực chiến cần đo lường hành vi nhấp nút, gửi form, cuộn trang.',
    platforms: 'Web Browser, AMP, iOS/Android App, Server-side Container',
    vietnameseSupport: 'Giao diện hỗ trợ tiếng Việt đầy đủ; nhận diện tốt các nút bấm và văn bản tiếng Việt trên DOM website.',
    studentPerk: 'Miễn phí 100% không giới hạn container. Tích hợp sẵn công cụ Google Tag Assistant giúp debug trực quan từng cú nhấp chuột.',
    useCases: [
      'Đo lường chính xác lượt bấm nút "Đặt hàng ngay", "Gọi hotline" hoặc "Đăng ký tư vấn" trên Landing Page.',
      'Quản lý tập trung mã Google Analytics 4, Facebook Pixel, TikTok Pixel và Microsoft Clarity tại một nơi.'
    ],
    quickSteps: [
      'Tạo tài khoản và Container Web trên tagmanager.google.com, chèn 2 đoạn mã GTM vào thẻ `<head>` và `<body>` của website.',
      'Bật toàn bộ các biến Click Variables (`Click Text`, `Click Classes`, `Click ID`, `Click URL`) trong mục Variables.',
      'Tạo Trigger (Trình kích hoạt) bắt sự kiện người dùng bấm nút CTA hoặc hoàn tất gửi Form.',
      'Tạo Tag `GA4 Event` nối với Trigger vừa tạo, bấm Preview để kiểm tra thẻ bắn thành công (Tags Fired) rồi bấm Submit.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng chế độ Preview (Tag Assistant) của GTM để bắt sự kiện bấm vào nút CTA chính trên Landing Page đồ án, chụp màn hình thông báo "Tags Fired" làm minh chứng kỹ thuật trong báo cáo.',
    pros: [
      'Có chế độ Preview (Tag Assistant) giúp kiểm tra lỗi bắn sự kiện theo thời gian thực.',
      'Giảm rủi ro làm chậm hoặc lỗi mã nguồn website nhờ cơ chế tải bất đồng bộ.'
    ],
    limitations: 'Cần hiểu rõ 3 khái niệm cốt lõi: Tag (Thẻ), Trigger (Trình kích hoạt) và Variable (Biến) để không gắn trùng lặp sự kiện.',
    studentTip: 'Dùng tính năng Preview của GTM chụp ảnh minh chứng lượt bắn sự kiện để đưa vào báo cáo đồ án môn học.',
    alternatives: [
      { name: 'Google Analytics 4 (GA4)', slug: 'google-analytics-4', comparison: 'GTM là công cụ thu thập & bắn sự kiện, còn GA4 là nơi nhận dữ liệu để lên báo cáo phân tích.' }
    ],
    faqs: [
      {
        q: 'Google Tag Manager có thay thế được Google Analytics 4 không?',
        a: 'Không. GTM chỉ là công cụ trung gian giúp cài đặt và gửi dữ liệu sự kiện (như ai đó bấm nút), còn GA4 là nơi lưu trữ, tổng hợp dữ liệu đó thành biểu đồ báo cáo.'
      },
      {
        q: 'Làm sao biết thẻ sự kiện trong GTM đã hoạt động đúng?',
        a: 'Bạn bấm nút "Preview" ở góc phải giao diện GTM, nhập URL website để mở Tag Assistant. Khi bạn thao tác trên web, nếu thẻ xuất hiện dưới mục "Tags Fired" tức là cài đặt đã chuẩn xác.'
      }
    ],
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
    pricingDetail: 'Miễn phí vĩnh viễn 100%, không giới hạn lưu lượng truy cập và số lượng bản ghi phiên (Session Recordings).',
    level: 'Cơ bản',
    officialUrl: 'https://clarity.microsoft.com/',
    tags: ['Heatmap', 'CRO', 'UX Analytics', 'Landing Page'],
    whatIsIt: 'Microsoft Clarity là công cụ phân tích trải nghiệm người dùng (UX & CRO) trực quan của Microsoft, cung cấp bản đồ nhiệt (Click & Scroll Heatmaps) cùng tính năng quay video phiên thao tác thực tế (Session Recordings) hoàn toàn miễn phí và không giới hạn số lượt truy cập.',
    bestFor: 'Sinh viên thiết kế Landing Page, chuyên viên tối ưu chuyển đổi (CRO), UI/UX Designer và Marketer muốn biết vì sao khách vào trang nhưng không mua hàng.',
    platforms: 'Web Browser, tích hợp 1-click với Google Tag Manager, Google Analytics 4, WordPress & Shopify',
    vietnameseSupport: 'Hỗ trợ hiển thị hoàn hảo giao diện website tiếng Việt; tự động che (mask) thông tin nhạy cảm của người dùng.',
    studentPerk: 'Miễn phí 100% trọn đời (trong khi Hotjar hay CrazyEgg giới hạn rất gắt ở gói Free), kèm sẵn trợ lý AI Copilot tóm tắt phiên truy cập.',
    useCases: [
      'Phát hiện "Dead Clicks" (người dùng bấm nhầm vào ảnh/chữ không có link) và "Rage Clicks" (bấm liên tục vì trang đơ).',
      'Đo độ sâu cuộn trang (Scroll Depth) để biết khách hàng có đọc tới bảng giá hoặc nút CTA cuối trang hay không.'
    ],
    quickSteps: [
      'Đăng ký dự án mới tại clarity.microsoft.com bằng tài khoản Microsoft hoặc Google.',
      'Chọn kết nối tự động với Google Tag Manager (GTM) chỉ với 2 cú nhấp chuột và liên kết thêm GA4.',
      'Chờ 2–4 giờ sau khi có người dùng truy cập để xem bản đồ nhiệt tại tab Heatmaps.',
      'Bật tính năng Clarity Copilot để AI tự động tóm tắt các điểm nghẽn trải nghiệm trên Landing Page.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thu thập ít nhất 50 lượt truy cập vào Landing Page nhóm, xuất ảnh chụp Scroll Heatmap và Click Heatmap từ Clarity để chỉ ra khu vực người đọc bỏ cuộc nhiều nhất.',
    pros: [
      'Miễn phí hoàn toàn không giới hạn traffic (vượt trội so với Hotjar bản miễn phí chỉ cho 35 phiên/ngày).',
      'Tích hợp sẵn AI Copilot tự động tóm tắt hành vi từ hàng trăm video quay màn hình.'
    ],
    limitations: 'Không chuyên về phân tích hiệu quả nguồn ngân sách đa kênh như GA4; nên kết hợp cả GA4 + Clarity.',
    studentTip: 'Rất hữu ích cho đồ án tối ưu tỷ lệ chuyển đổi (CRO) — chỉ cần 50 lượt truy cập thật là đã có Heatmap cực đẹp để đưa vào slide thuyết trình.',
    alternatives: [
      { name: 'Google Analytics 4 (GA4)', slug: 'google-analytics-4', comparison: 'GA4 cho biết con số thống kê "Bao nhiêu người thoát", còn Clarity cho thấy hình ảnh "Vì sao họ thoát".' }
    ],
    faqs: [
      {
        q: 'Cài Microsoft Clarity có làm chậm tốc độ tải trang Landing Page không?',
        a: 'Không đáng kể. Mã theo dõi của Clarity được tải bất đồng bộ (Asynchronous), không chặn luồng hiển thị giao diện chính của trang web.'
      },
      {
        q: 'Microsoft Clarity khác gì so với Hotjar?',
        a: 'Cả hai đều cung cấp Heatmap và Session Recording, nhưng Microsoft Clarity miễn phí 100% không giới hạn số phiên, trong khi Hotjar giới hạn số phiên rất thấp ở bản miễn phí.'
      }
    ],
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
    pricingDetail: 'Miễn phí hoàn toàn với tài khoản Google cá nhân hoặc trường học.',
    level: 'Cơ bản',
    officialUrl: 'https://lookerstudio.google.com/',
    tags: ['Dashboard', 'Data Visualization', 'Reporting', 'BI'],
    whatIsIt: 'Google Looker Studio (trước đây là Google Data Studio) là công cụ trực quan hóa dữ liệu (Business Intelligence) miễn phí của Google, cho phép kết nối trực tiếp dữ liệu từ GA4, Google Search Console, Google Ads, YouTube và Google Sheets để tạo Dashboard báo cáo thời gian thực.',
    bestFor: 'Sinh viên báo cáo kết quả chiến dịch đồ án, Account Executive, Performance Marketer và Data Analyst cần chuẩn hóa báo cáo KPI tự động.',
    platforms: 'Web Browser (Cloud), hỗ trợ nhúng iframe trực tiếp vào website hoặc xuất PDF',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, hỗ trợ định dạng tiền tệ VNĐ và phông chữ tiếng Việt chuẩn.',
    studentPerk: 'Miễn phí 100% cùng kho Template Gallery sẵn có hàng trăm mẫu Dashboard SEO, GA4, Google Ads chỉ việc nhân bản để dùng.',
    useCases: [
      'Tổng hợp báo cáo KPI chiến dịch từ Google Sheets, GSC và GA4 vào một trang Dashboard tương tác duy nhất.',
      'Trình bày số liệu tăng trưởng trực quan có bộ lọc ngày tháng khi bảo vệ đồ án tốt nghiệp.'
    ],
    quickSteps: [
      'Truy cập lookerstudio.google.com, bấm "Blank Report" hoặc chọn một mẫu có sẵn trong Template Gallery.',
      'Chọn nguồn dữ liệu (Data Source): Google Analytics 4, Google Search Console hoặc file Google Sheets của nhóm.',
      'Kéo thả các thẻ Scorecard (KPI tổng), Time Series (xu hướng theo ngày) và Bar Chart (so sánh kênh).',
      'Thêm bộ lọc Date Range Control ở góc trên rồi bấm Share để lấy link gửi giảng viên hoặc nhúng vào báo cáo.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Kết nối file Google Sheets theo dõi chi phí & lượt đăng ký của nhóm vào Looker Studio, tạo 1 trang Dashboard gồm 4 chỉ số Scorecard (Chi phí, Lượt nhấp, Chuyển đổi, CPA) và 1 biểu đồ đường theo ngày.',
    pros: [
      'Có sẵn hàng trăm mẫu Dashboard Marketing miễn phí chỉ mất 2 phút để thay nguồn dữ liệu.',
      'Chia sẻ qua link giống Google Docs, số liệu tự động làm mới mà không cần xuất lại file Excel.'
    ],
    limitations: 'Kết nối tự động dữ liệu Facebook Ads / TikTok Ads cần dùng thêm connector bên thứ 3 hoặc trung chuyển qua Google Sheets.',
    studentTip: 'Hãy xuất dữ liệu CSV từ bài tập thực hành hoặc Google Sheets rồi nối vào Looker Studio để tạo Dashboard chỉ trong 15 phút.',
    alternatives: [
      { name: 'Google Analytics 4 (GA4)', slug: 'google-analytics-4', comparison: 'GA4 là nguồn thu thập dữ liệu gốc, còn Looker Studio là lớp trình bày báo cáo đẹp và linh hoạt hơn.' }
    ],
    faqs: [
      {
        q: 'Làm sao đưa dữ liệu Facebook Ads hoặc TikTok Ads vào Looker Studio miễn phí?',
        a: 'Cách tiết kiệm nhất cho sinh viên là xuất báo cáo từ Facebook/TikTok Ads ra file CSV rồi tải lên Google Sheets, sau đó dùng trình kết nối Google Sheets miễn phí có sẵn trong Looker Studio.'
      }
    ],
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
    pricingDetail: 'Có bản miễn phí dùng hàng ngày; gói Plus ($20/tháng) mở khóa giới hạn cao hơn, phân tích dữ liệu nâng cao & Custom GPTs.',
    level: 'Cơ bản',
    officialUrl: 'https://chatgpt.com/',
    tags: ['GenAI', 'Copywriting', 'Brainstorming', 'Prompting'],
    whatIsIt: 'ChatGPT là nền tảng trợ lý AI tạo sinh đa phương thức của OpenAI, hỗ trợ Marketer toàn diện từ khâu nghiên cứu chân dung khách hàng, sáng tạo nội dung quảng cáo đa kênh, lập kế hoạch truyền thông cho tới đọc bảng số liệu Excel/CSV và kiểm định giả thuyết.',
    bestFor: 'Mọi sinh viên Marketing, Content Creator, Performance Marketer và nhà nghiên cứu cần tăng tốc quy trình tìm ý tưởng và xử lý dữ liệu thô.',
    platforms: 'Web Browser, Windows/macOS Desktop App, iOS & Android, API',
    vietnameseSupport: 'Xử lý tiếng Việt tự nhiên, hiểu rõ ngữ cảnh văn hóa và thuật ngữ Marketing tại thị trường Việt Nam.',
    studentPerk: 'Bản miễn phí đã cho phép truy cập mô hình thông minh, tìm kiếm web thời gian thực (ChatGPT Search), tải file lên phân tích và sử dụng hàng nghìn Custom GPTs chuyên ngành.',
    useCases: [
      'Xây dựng chân dung khách hàng mục tiêu (Buyer Persona) và ma trận nỗi đau - động cơ mua hàng (Pain/Gain).',
      'Viết 10–20 biến thể tiêu đề quảng cáo (A/B Testing Hooks) và kịch bản video ngắn TikTok/Reels theo công thức PAS, AIDA.',
      'Tải file CSV báo cáo quảng cáo lên để AI làm sạch dữ liệu, nhóm từ khóa theo ý định và vẽ biểu đồ nhanh.'
    ],
    quickSteps: [
      'Thiết lập Custom Instructions hoặc Project riêng cho thương hiệu đồ án (nêu rõ sản phẩm, USP, đối tượng mục tiêu và Tone of Voice).',
      'Áp dụng cấu trúc Prompt 4 lớp: Vai trò (Role) + Bối cảnh (Context) + Nhiệm vụ cụ thể (Task) + Ràng buộc đầu ra (Format & Constraints).',
      'Yêu cầu AI đưa ra nhiều phương án khác nhau theo các góc tiếp cận (Marketing Angles) rõ ràng thay vì chỉ xin 1 bài viết chung chung.',
      'Biên tập lại câu chữ, kiểm chứng số liệu thực tế và cá nhân hóa trước khi xuất bản.'
    ],
    samplePromptOrTask: 'Mẫu Prompt thực hành: "Đóng vai Senior Content Strategist ngành [Ngành hàng]. Dựa trên chân dung khách hàng là [Mô tả Persona], hãy đề xuất 5 góc tiếp cận quảng cáo (Marketing Angles) khác nhau cho sản phẩm [Tên sản phẩm]. Với mỗi góc, viết 1 Hook 3 giây đầu cho TikTok và 1 tiêu đề Facebook Ads dưới 15 từ, tránh dùng từ ngữ sáo rỗng."',
    pros: [
      'Phản hồi nhanh, đa năng từ viết lách, tạo ảnh, tìm kiếm web đến viết code/xử lý bảng biểu.',
      'Hệ sinh thái Custom GPTs phong phú cho từng tác vụ Marketing chuyên biệt.'
    ],
    limitations: 'Dễ viết văn phong "công nghiệp" sáo rỗng nếu câu lệnh thiếu ngữ cảnh; tuyệt đối không dùng để xin trích dẫn học thuật nếu chưa bật tìm kiếm và kiểm chứng DOI thật.',
    studentTip: 'Luôn giao cho AI một vai trò cụ thể, đối tượng đọc và ràng buộc giọng văn — không bao giờ copy nguyên văn kết quả đầu tiên vào bài nộp.',
    alternatives: [
      { name: 'Claude (Anthropic)', slug: 'claude-anthropic', comparison: 'Claude viết văn phong tiếng Việt dài mượt mà, ít mùi AI hơn và có tính năng Artifacts dựng giao diện rất mạnh.' },
      { name: 'Google Gemini', slug: 'google-gemini', comparison: 'Gemini kết nối trực tiếp với hệ sinh thái Google Docs, Sheets, Drive và YouTube thuận tiện hơn.' }
    ],
    faqs: [
      {
        q: 'Làm sao để bài viết từ ChatGPT không bị giảng viên hoặc khách hàng nhận ra là văn mẫu AI?',
        a: 'Hãy cung cấp cho ChatGPT 2–3 đoạn văn mẫu do chính bạn viết (Few-shot prompting), cấm AI dùng các từ sáo rỗng như "Trong kỷ nguyên số ngày nay", "Khám phá ngay", và yêu cầu AI viết bằng dữ kiện cụ thể của thương hiệu.'
      }
    ],
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
    pricingDetail: 'Bản miễn phí giới hạn số lượt nhắn theo mỗi khung 5 giờ; gói Pro ($20/tháng) mở khóa giới hạn gấp 5 lần & Projects.',
    level: 'Cơ bản',
    officialUrl: 'https://claude.ai/',
    tags: ['AI Writing', 'Long-form', 'Storytelling', 'Research'],
    whatIsIt: 'Claude là mô hình ngôn ngữ lớn do Anthropic phát triển, nổi bật với khả năng hành văn tiếng Việt tự nhiên, giàu cảm xúc, tuân thủ chặt chẽ Brand Voice và cửa sổ ngữ cảnh lớn (200K+ tokens) kèm tính năng Artifacts giúp dựng nhanh giao diện Landing Page hay biểu đồ tương tác.',
    bestFor: 'Content Writer, Brand Marketer, PR Executive và sinh viên cần viết bài phân tích chuyên sâu, Storytelling hoặc dựng nhanh mockup Landing Page.',
    platforms: 'Web Browser, Windows/macOS App, iOS & Android, API',
    vietnameseSupport: 'Văn phong tiếng Việt được đánh giá tự nhiên, tinh tế và ít lặp từ công nghiệp nhất trong các mô hình AI hiện nay.',
    studentPerk: 'Tính năng Claude Artifacts cho phép sinh viên gõ yêu cầu bằng tiếng Việt để tạo ngay trang Landing Page HTML/Tailwind hoặc Dashboard tương tác trực tiếp trên màn hình.',
    useCases: [
      'Viết bài PR, Storytelling thương hiệu và bài blog SEO chuyên sâu chuẩn cấu trúc EEAT.',
      'Đọc hiểu file PDF báo cáo thị trường dài hàng chục trang để rút ra bảng so sánh insight.',
      'Tạo Landing Page mẫu, biểu đồ hoặc minigame tương tác bằng tính năng Claude Artifacts để demo cho đồ án.'
    ],
    quickSteps: [
      'Truy cập claude.ai, bật tính năng Artifacts trong phần cài đặt tài khoản.',
      'Đính kèm tài liệu Brand Guideline hoặc bản tóm tắt sản phẩm (Brief) của nhóm vào khung chat.',
      'Sử dụng tính năng Style để huấn luyện giọng văn riêng (Custom Style) dựa trên bài viết mẫu của thương hiệu.',
      'Yêu cầu Claude viết bài hoặc dựng giao diện wireframe Landing Page trực tiếp trong cửa sổ Artifact bên phải.'
    ],
    samplePromptOrTask: 'Mẫu Prompt thực hành: "Hãy sử dụng Claude Artifacts để thiết kế một trang Landing Page hoàn chỉnh (HTML + Tailwind CSS) cho sản phẩm [Tên sản phẩm] nhắm tới sinh viên đại học. Trang cần có Hero Section nêu rõ giá trị cốt lõi, bảng so sánh tính năng, 3 câu hỏi FAQ và form đăng ký dùng thử."',
    pros: [
      'Giọng văn tự nhiên, bám sát hướng dẫn phong cách (Tone of Voice) và ít bị sáo rỗng.',
      'Tính năng Projects và Artifacts cực kỳ mạnh mẽ để dựng sản phẩm mẫu (Prototype) cho bài thuyết trình.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt tin nhắn khá nhanh khi bạn đính kèm nhiều file PDF dung lượng lớn trong cùng một cuộc hội thoại.',
    studentTip: 'Dùng tính năng Artifacts của Claude để dựng nhanh bản nháp giao diện Landing Page hoặc sơ đồ phễu trước khi đưa lên web thật.',
    alternatives: [
      { name: 'ChatGPT (OpenAI)', slug: 'chatgpt-openai', comparison: 'ChatGPT có hạn mức bản miễn phí rộng rãi hơn và tích hợp tạo ảnh trực tiếp.' },
      { name: 'Google NotebookLM', slug: 'notebooklm', comparison: 'Nếu cần đọc từ 10–50 file PDF nghiên cứu cùng lúc mà không tốn quota tin nhắn, hãy dùng NotebookLM.' }
    ],
    faqs: [
      {
        q: 'Làm sao để tiết kiệm lượt tin nhắn miễn phí trên Claude?',
        a: 'Hãy gom đầy đủ ngữ cảnh, tài liệu và yêu cầu chi tiết vào ngay câu lệnh đầu tiên thay vì nhắn lắt nhắt nhiều câu ngắn, đồng thời mở cuộc hội thoại mới khi chuyển sang chủ đề khác.'
      }
    ],
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
    pricingDetail: 'Miễn phí trên web/app với cửa sổ ngữ cảnh lớn; có gói Google One AI Premium mở rộng tính năng trong Workspace.',
    level: 'Cơ bản',
    officialUrl: 'https://gemini.google.com/',
    tags: ['Google AI', 'Research', 'Deep Research', 'Workspace'],
    whatIsIt: 'Google Gemini là trợ lý AI đa phương thức nguyên bản của Google, kết nối trực tiếp với dữ liệu Google Search thời gian thực, YouTube, Google Drive, Docs và Sheets, giúp Marketer nghiên cứu tổng quan ngành hàng và xuất bảng biểu sang Workspace chỉ với 1 cú nhấp.',
    bestFor: 'Sinh viên làm nghiên cứu thị trường, lập kế hoạch IMC và Marketer làm việc thường xuyên trên hệ sinh thái Google Workspace.',
    platforms: 'Web Browser, Android/iOS, tích hợp trong Google Docs, Gmail, Sheets & Drive',
    vietnameseSupport: 'Hỗ trợ tiếng Việt xuất sắc, tra cứu dữ liệu địa phương tại Việt Nam qua Google Search rất sát thực tế.',
    studentPerk: 'Miễn phí tính năng xuất trực tiếp bảng biểu từ câu trả lời của Gemini sang file Google Sheets hoặc văn bản sang Google Docs mới.',
    useCases: [
      'Sử dụng chế độ Deep Research để tổng hợp báo cáo tổng quan ngành hàng kèm nguồn tham khảo cho đồ án.',
      'Tóm tắt nội dung các video phân tích case study hoặc video quảng cáo dài trên YouTube.',
      'Lập bảng kế hoạch nội dung (Content Calendar) và bấm nút "Export to Sheets" để làm việc nhóm ngay.'
    ],
    quickSteps: [
      'Đăng nhập gemini.google.com bằng tài khoản Gmail cá nhân.',
      'Bật các tiện ích mở rộng (Extensions) cho Google Workspace và YouTube trong phần cài đặt.',
      'Yêu cầu Gemini lập bảng phân tích đối thủ hoặc kế hoạch truyền thông theo cấu trúc cột rõ ràng.',
      'Bấm nút "Chia sẻ & Xuất" > "Xuất sang Trang tính (Export to Sheets)" ở cuối câu trả lời để mở ngay trong Google Sheets.'
    ],
    samplePromptOrTask: 'Mẫu Prompt thực hành: "Hãy lập bảng Content Calendar 4 tuần cho chiến dịch ra mắt [Sản phẩm] trên Facebook và TikTok. Trình bày dưới dạng bảng gồm các cột: Tuần, Giai đoạn phễu (Awareness/Consideration/Conversion), Chủ đề chính, Định dạng (Reels/Carousel/Infographic), Thông điệp Hook và KPI đo lường để tôi xuất thẳng sang Google Sheets."',
    pros: [
      'Cửa sổ ngữ cảnh cực lớn, đọc tốt tài liệu tiếng Việt, video và số liệu tìm kiếm cập nhật.',
      'Xuất trực tiếp kết quả sang Google Docs và Google Sheets chỉ với 1 cú bấm mà không lỗi định dạng bảng.'
    ],
    limitations: 'Cần bấm vào biểu tượng chữ G (Kiểm tra lại câu trả lời bằng Google Search) để đối chiếu lại các số liệu thống kê trước khi đưa vào báo cáo chính thức.',
    studentTip: 'Dùng Gemini kết hợp NotebookLM để tổng hợp hàng loạt tài liệu PDF môn học thành đề cương ôn tập và ý tưởng chiến dịch.',
    alternatives: [
      { name: 'Google NotebookLM', slug: 'notebooklm', comparison: 'NotebookLM chuyên sâu hơn khi bạn muốn AI chỉ trả lời dựa trên kho tài liệu PDF riêng của bạn mà không lấy nguồn ngoài.' },
      { name: 'ChatGPT (OpenAI)', slug: 'chatgpt-openai', comparison: 'ChatGPT mạnh hơn về khả năng tùy biến quy trình qua Custom GPTs.' }
    ],
    faqs: [
      {
        q: 'Làm sao kiểm tra xem số liệu Google Gemini đưa ra có thật hay không?',
        a: 'Ở cuối mỗi câu trả lời của Gemini có nút biểu tượng chữ "G" (Double-check response). Khi bấm vào, Gemini sẽ tự động đối chiếu từng câu với kết quả Google Search: phần tô màu xanh lá là có nguồn khớp trên web, phần tô màu cam là cần kiểm tra lại.'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% với tài khoản Google cá nhân (cho phép tạo tới 100 sổ tay, mỗi sổ tay 50 nguồn tài liệu).',
    level: 'Cơ bản',
    officialUrl: 'https://notebooklm.google.com/',
    tags: ['Research', 'PDF', 'Academic', 'Insight'],
    whatIsIt: 'Google NotebookLM là trợ lý nghiên cứu AI đặt nền tảng trên nguồn tài liệu do chính người dùng tải lên (Source-grounded AI). Khác với chatbot thông thường dễ bịa thông tin, NotebookLM chỉ tổng hợp, đối chiếu và trả lời kèm chú thích số thứ tự trỏ thẳng về đoạn văn gốc trong file PDF, Google Docs, Slide hoặc video YouTube của bạn.',
    bestFor: 'Sinh viên làm khóa luận tốt nghiệp, nghiên cứu khoa học, tổng hợp báo cáo thị trường (Nielsen, McKinsey, Decision Lab) và phân tích bản ghi phỏng vấn sâu (In-depth Interview).',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Đọc hiểu tài liệu PDF tiếng Việt & tiếng Anh chuẩn xác, trả lời tiếng Việt mạch lạc kèm trích dẫn vị trí đoạn gốc.',
    studentPerk: 'Miễn phí hoàn toàn cho phép nạp tới 50 nguồn tài liệu (mỗi nguồn tới 500.000 từ) vào chung một sổ tay nghiên cứu.',
    useCases: [
      'Tổng hợp 10–20 bản ghi phỏng vấn khách hàng (Transcript) để rút ra mẫu hình Insight chung cho sản phẩm mới.',
      'Đọc chéo 30 bài báo khoa học Q1 hoặc báo cáo ngành để lập bảng tổng quan tài liệu (Literature Review) không sợ AI bịa trích dẫn.'
    ],
    quickSteps: [
      'Truy cập notebooklm.google.com và tạo một Notebook mới cho môn học hoặc dự án.',
      'Tải lên các file PDF báo cáo thị trường, bài báo khoa học, Google Docs, Google Slides hoặc dán link YouTube/Website.',
      'Đặt câu hỏi yêu cầu tổng hợp, so sánh quan điểm giữa các tài liệu hoặc trích xuất số liệu thống kê.',
      'Nhấp vào các con số trích dẫn `[1]`, `[2]` trong câu trả lời để kiểm tra ngay đoạn văn bản gốc bên cột trái và lưu vào Note.'
    ],
    samplePromptOrTask: 'Mẫu Prompt thực hành: Tải 5 báo cáo thị trường ngành F&B/Mỹ phẩm lên NotebookLM và hỏi: "Hãy lập bảng tổng hợp các xu hướng tiêu dùng Gen Z tại Việt Nam được nhắc đến trong các tài liệu này, nêu rõ con số % thống kê cụ thể và ghi chú rõ trích từ báo cáo nào."',
    pros: [
      'Trả lời kèm trích dẫn trực tiếp về từng đoạn trong tài liệu gốc, loại bỏ gần như hoàn toàn hiện tượng ảo giác AI (Hallucination).',
      'Có tính năng tự động tạo Mindmap, Study Guide, Briefing Doc và Audio Overview (Podcast thảo luận).'
    ],
    limitations: 'Chỉ phân tích trong phạm vi tài liệu bạn tải lên; không tự động đi tìm nguồn mới trên Internet nếu bạn chưa thêm vào sổ tay.',
    studentTip: 'Bắt buộc nên dùng khi tổng hợp bảng hỏi phỏng vấn sâu (In-depth Interview) và viết tổng quan tài liệu trong môn Nghiên cứu Marketing.',
    alternatives: [
      { name: 'Claude (Anthropic)', slug: 'claude-anthropic', comparison: 'Claude viết văn mượt hơn, nhưng NotebookLM vượt trội khi cần quản lý và tra cứu chéo hàng chục file PDF cùng lúc mà không hết lượt nhắn.' }
    ],
    faqs: [
      {
        q: 'Dữ liệu tôi tải lên Google NotebookLM có bị dùng để huấn luyện AI công khai không?',
        a: 'Theo chính sách bảo mật của Google cho NotebookLM, các tài liệu cá nhân bạn tải lên sổ tay được giữ riêng tư và không được sử dụng để huấn luyện mô hình chung.'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% trọn đời cho mọi chủ sở hữu website.',
    level: 'Cơ bản',
    officialUrl: 'https://search.google.com/search-console',
    tags: ['SEO', 'Google Search', 'Indexing', 'Keywords'],
    whatIsIt: 'Google Search Console (GSC) là cổng quản trị và chẩn đoán tìm kiếm chính thức của Google, cung cấp dữ liệu gốc 100% về số lượt hiển thị (Impressions), lượt nhấp (Clicks), tỷ lệ CTR, thứ hạng từ khóa trung bình và trạng thái lập chỉ mục (Indexing) của từng trang trên website.',
    bestFor: 'SEO Specialist, Content Marketer, Webmaster và sinh viên thực hiện dự án xây dựng blog/website thực chiến.',
    platforms: 'Web Browser, tích hợp trực tiếp với GA4 và Looker Studio',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, đo lường chính xác từng truy vấn tìm kiếm có dấu và không dấu tại Việt Nam.',
    studentPerk: 'Miễn phí hoàn toàn; dữ liệu chính chủ từ Google không bị sai lệch ước tính như các công cụ bên thứ ba.',
    useCases: [
      'Gửi file `sitemap.xml` và yêu cầu lập chỉ mục (Request Indexing) để bài viết mới xuất hiện trên Google nhanh chóng.',
      'Tìm các từ khóa "Striking Distance" đang đứng ở vị trí 8–20 có lượng hiển thị cao để tối ưu lại Tiêu đề/Nội dung đẩy lên Top 3.'
    ],
    quickSteps: [
      'Truy cập search.google.com/search-console và xác minh quyền sở hữu tên miền (qua bản ghi DNS, file HTML hoặc tài khoản Google Tag Manager/GA4).',
      'Vào mục Sitemaps, nhập đường dẫn `sitemap.xml` của website và bấm Submit.',
      'Mở mục Performance (Hiệu suất) > Search Results, bật đủ 4 ô: Total Clicks, Total Impressions, Average CTR và Average Position.',
      'Xuất bảng Queries (Cụm từ tìm kiếm) ra Google Sheets để phân tích những từ khóa mang lại traffic tự nhiên cao nhất.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Xuất danh sách 50 truy vấn có Impressions cao nhất từ GSC ra file CSV, đưa vào AI để lọc ra các từ khóa có Average Position từ 8 đến 18 nhưng CTR dưới 2%, sau đó viết lại thẻ Title & Meta Description hấp dẫn hơn.',
    pros: [
      'Dữ liệu tìm kiếm thực tế 100% từ hệ thống Google Search (không phải con số phỏng đoán).',
      'Cảnh báo sớm lỗi không lập chỉ mục được trang (Page Indexing), lỗi dữ liệu có cấu trúc Schema và tốc độ Core Web Vitals.'
    ],
    limitations: 'Chỉ xem được dữ liệu của chính website mà bạn có quyền xác minh quản trị (không dùng để soi website đối thủ).',
    studentTip: 'Đừng quên nộp `sitemap.xml` lên GSC ngay sau khi xuất bản website hoặc Landing Page dự án để Google nhận diện thương hiệu của nhóm.',
    alternatives: [
      { name: 'Semrush', slug: 'semrush', comparison: 'GSC dùng để đo chính xác website của mình, còn Semrush dùng để ước tính từ khóa và traffic của đối thủ cạnh tranh.' },
      { name: 'Screaming Frog SEO Spider', slug: 'screaming-frog-seo-spider', comparison: 'Screaming Frog giúp quét lỗi kỹ thuật On-page tức thì trước khi chờ Google Search Console báo lỗi.' }
    ],
    faqs: [
      {
        q: 'Sau khi gửi Sitemap lên Google Search Console thì bao lâu bài viết được lên Google?',
        a: 'Thông thường với website mới, Google mất từ 24 giờ đến vài ngày để thu thập dữ liệu. Nếu muốn nhanh hơn cho 1 bài viết quan trọng, hãy dán URL bài đó vào thanh "URL Inspection" ở đầu trang GSC và bấm "Request Indexing".'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% bên trong tài khoản Google Ads (có thể tạo tài khoản ở chế độ Chuyên gia mà không cần nạp tiền chạy quảng cáo).',
    level: 'Cơ bản',
    officialUrl: 'https://ads.google.com/home/tools/keyword-planner/',
    tags: ['Keyword Research', 'Google Ads', 'SEO', 'Search Volume'],
    whatIsIt: 'Google Keyword Planner là công cụ lập kế hoạch từ khóa chính thức nằm trong nền tảng Google Ads, cung cấp số liệu lượng tìm kiếm trung bình hàng tháng (Search Volume), xu hướng biến động 12 tháng và mức giá thầu CPC ước tính cho từng từ khóa theo từng tỉnh/thành phố.',
    bestFor: 'Sinh viên lập bảng kế hoạch từ khóa SEO & SEM (Google Search Ads), Media Planner cần dự toán ngân sách CPC cho bản kế hoạch truyền thông IMC.',
    platforms: 'Web Browser (bên trong giao diện Google Ads)',
    vietnameseSupport: 'Hỗ trợ 100% tiếng Việt, lọc chính xác lượng tìm kiếm theo từng tỉnh thành hoặc thành phố lớn tại Việt Nam (TP.HCM, Hà Nội, Đà Nẵng...).',
    studentPerk: 'Miễn phí hoàn toàn khi bạn bấm "Switch to Expert Mode" rồi chọn "Create an account without a campaign" lúc đăng ký Google Ads.',
    useCases: [
      'Lập bộ từ khóa chủ đề (Keyword Map) phân nhóm theo hành trình tìm kiếm cho kế hoạch SEO và Google Search Ads.',
      'Lấy số liệu giá thầu đầu trang (Top of page bid - low/high range) để dự toán ngân sách quảng cáo có căn cứ thực tế khi bảo vệ đồ án.'
    ],
    quickSteps: [
      'Đăng nhập ads.google.com, chuyển sang chế độ Chuyên gia (Expert Mode) và mở Tools > Planning > Keyword Planner.',
      'Chọn "Discover new keywords", nhập 3–5 từ khóa hạt giống về sản phẩm và đặt bộ lọc địa điểm là "Vietnam" (hoặc TP.HCM), ngôn ngữ "Vietnamese".',
      'Xem bảng kết quả gồm Average monthly searches, Competition và Top of page bid.',
      'Bấm "Download Keyword Ideas" (biểu tượng tải xuống góc phải) ra file CSV hoặc Google Sheets để phân loại nhóm ý định tìm kiếm.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Tải danh sách 100 từ khóa từ Google Keyword Planner cho ngành hàng của nhóm, sau đó dùng AI chia thành 3 nhóm ý định: Informational (Tìm hiểu thông tin), Commercial (So sánh/Đánh giá) và Transactional (Sẵn sàng mua hàng).',
    pros: [
      'Nguồn dữ liệu gốc từ kho đấu giá quảng cáo Google Search tại Việt Nam, cực kỳ đáng tin cậy khi ước tính CPC.',
      'Cho phép nhập URL website của đối thủ để xem Google gợi ý bộ từ khóa nào từ trang đó.'
    ],
    limitations: 'Với tài khoản chưa phát sinh chi tiêu quảng cáo thực tế, lượng tìm kiếm sẽ hiển thị theo khoảng bậc (ví dụ: 100–1K, 1K–10K) thay vì con số lẻ chính xác.',
    studentTip: 'Kết hợp mức giá thầu CPC trong Keyword Planner với lượng tìm kiếm để chứng minh tính khả thi của bảng dự toán ngân sách Media trong đồ án.',
    alternatives: [
      { name: 'Semrush', slug: 'semrush', comparison: 'Semrush hiển thị con số Search Volume cụ thể và chấm điểm độ khó SEO (Keyword Difficulty) chi tiết hơn.' },
      { name: 'Ubersuggest', slug: 'ubersuggest', comparison: 'Ubersuggest dễ dùng hơn cho người mới muốn xem nhanh con số lượng tìm kiếm mà không cần mở tài khoản Google Ads.' }
    ],
    faqs: [
      {
        q: 'Làm sao mở Google Keyword Planner mà không bị bắt buộc nhập thẻ Visa/Mastercard chạy quảng cáo?',
        a: 'Khi mới đăng ký Google Ads, bạn đừng đi theo luồng tạo chiến dịch mặc định. Hãy tìm dòng chữ nhỏ "Switch to Expert Mode" (Chuyển sang chế độ chuyên gia), sau đó bấm "Create an account without a campaign" (Tạo tài khoản không cần chiến dịch) là vào thẳng được Keyword Planner miễn phí.'
      }
    ],
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
    pricingDetail: 'Tài khoản miễn phí cho phép truy vấn 10 báo cáo/ngày và quét Site Audit 100 trang; gói Pro trả phí từ ~$139.95/tháng.',
    level: 'Nâng cao',
    officialUrl: 'https://www.semrush.com/',
    tags: ['SEO', 'Competitor Analysis', 'Backlinks', 'Audit'],
    whatIsIt: 'Semrush là bộ công cụ tiếp thị tìm kiếm và phân tích đối thủ cạnh tranh (Competitive Intelligence) toàn diện hàng đầu thế giới, sở hữu cơ sở dữ liệu hơn 25 tỷ từ khóa và hàng chục nghìn tỷ backlink để giúp Marketer soi toàn bộ chiến lược SEO, Content và PPC của bất kỳ website đối thủ nào.',
    bestFor: 'SEO Leader, Digital Strategist và nhóm sinh viên cần số liệu phân tích đối thủ cạnh tranh chuyên sâu cho báo cáo nghiên cứu thị trường.',
    platforms: 'Web Browser (Cloud SaaS)',
    vietnameseSupport: 'Cơ sở dữ liệu từ khóa Google Việt Nam (VN Database) rất lớn và cập nhật thường xuyên.',
    studentPerk: 'Bản miễn phí cung cấp 10 lượt truy vấn sâu mỗi ngày trọn đời; đặc biệt nền tảng Semrush Academy cung cấp hàng chục khóa học và cấp chứng chỉ SEO/Content quốc tế miễn phí 100% cho CV sinh viên.',
    useCases: [
      'Nhập tên miền của 3 đối thủ lớn nhất vào Domain Overview & Keyword Gap để tìm những từ khóa đối thủ có traffic mà mình chưa khai thác.',
      'Sử dụng Keyword Magic Tool để tìm bộ từ khóa câu hỏi (Questions) phục vụ tối ưu AEO và Featured Snippets.'
    ],
    quickSteps: [
      'Tạo tài khoản miễn phí tại semrush.com và chọn cơ sở dữ liệu quốc gia là Vietnam (VN).',
      'Vào mục Domain Overview, nhập tên miền website đối thủ để xem Organic Search Traffic, Top Keywords và phân bổ Intent.',
      'Mở công cụ Keyword Gap, nhập tên miền của bạn cùng 2–3 đối thủ để lọc tab "Missing" hoặc "Untapped".',
      'Chụp biểu đồ so sánh vị thế tìm kiếm và xuất bảng từ khóa tiềm năng đưa vào phần Phân tích đối thủ của đồ án.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng 10 lượt tra cứu miễn phí trên Semrush để quét 3 website đối thủ trong ngành, ghi lại 5 chỉ số: Authority Score, Organic Traffic ước tính, Tổng số từ khóa lên Top, Top 5 trang mang về nhiều traffic nhất và số lượng Referring Domains.',
    pros: [
      'Cơ sở dữ liệu từ khóa, phân loại Search Intent (I/N/C/T) và backlink cực kỳ mạnh cho nghiên cứu đối thủ.',
      'Chứng chỉ miễn phí từ Semrush Academy có giá trị cộng điểm rất tốt khi ứng tuyển thực tập SEO/Digital Marketing.'
    ],
    limitations: 'Gói trả phí rất đắt đối với cá nhân sinh viên; bản miễn phí giới hạn 10 lượt truy vấn/ngày nên cần lên danh sách từ khóa/domain cần tra trước khi bấm.',
    studentTip: 'Hãy tận dụng 10 lượt tra cứu miễn phí mỗi ngày một cách có kế hoạch và học lấy chứng chỉ trên Semrush Academy để đính kèm vào LinkedIn.',
    alternatives: [
      { name: 'Ubersuggest', slug: 'ubersuggest', comparison: 'Ubersuggest có giao diện đơn giản và chi phí mềm hơn nhiều cho người mới bắt đầu.' },
      { name: 'Google Keyword Planner', slug: 'google-keyword-planner', comparison: 'Keyword Planner miễn phí không giới hạn lượt tra từ khóa nhưng không soi được thứ hạng hiện tại của đối thủ như Semrush.' }
    ],
    faqs: [
      {
        q: 'Con số Organic Traffic trên Semrush có khớp 100% với Google Analytics của đối thủ không?',
        a: 'Không. Số liệu của Semrush là ước tính thuật toán dựa trên vị trí xếp hạng từ khóa nhân với tỷ lệ CTR trung bình và lượng tìm kiếm. Tuy nhiên, khi dùng cùng một thước đo Semrush để so sánh tương quan giữa các đối thủ với nhau thì rất có giá trị.'
      }
    ],
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
    pricingDetail: 'Bản miễn phí cho phép tra cứu 3 lượt/ngày trên web kèm Chrome Extension tiện lợi.',
    level: 'Cơ bản',
    officialUrl: 'https://neilpatel.com/ubersuggest/',
    tags: ['SEO', 'Keyword Ideas', 'Content Ideas', 'Beginner'],
    whatIsIt: 'Ubersuggest (phát triển bởi chuyên gia Marketing Neil Patel) là công cụ nghiên cứu từ khóa và gợi ý nội dung SEO có giao diện trực quan, tinh gọn, được thiết kế đặc biệt cho người mới bắt đầu, blogger và doanh nghiệp nhỏ chưa quen với các bảng số liệu phức tạp của Semrush hay Ahrefs.',
    bestFor: 'Sinh viên năm 1–2 mới học môn SEO/Content Marketing cần tra nhanh Search Volume, độ khó SEO (SD) và tìm ý tưởng tiêu đề bài viết.',
    platforms: 'Web Browser, tiện ích mở rộng Ubersuggest Chrome Extension',
    vietnameseSupport: 'Hỗ trợ tra cứu từ khóa tiếng Việt theo thị trường Việt Nam rất tốt.',
    studentPerk: 'Tiện ích Ubersuggest Chrome Extension hiển thị miễn phí lượng tìm kiếm và CPC ngay bên cạnh thanh tìm kiếm khi bạn gõ trên Google.',
    useCases: [
      'Tìm nhanh danh sách từ khóa dài (Long-tail keywords), từ khóa so sánh (Prepositions) và câu hỏi (Questions) của người dùng.',
      'Xem mục Content Ideas để biết những bài viết nào cùng chủ đề đang có nhiều lượt truy cập và chia sẻ mạng xã hội nhất.'
    ],
    quickSteps: [
      'Truy cập neilpatel.com/ubersuggest hoặc cài đặt tiện ích Ubersuggest trên trình duyệt Chrome.',
      'Nhập từ khóa chủ đề, chọn ngôn ngữ Vietnamese và quốc gia Vietnam.',
      'Chuyển sang tab Keyword Ideas, ưu tiên lọc những từ khóa có chỉ số SD (SEO Difficulty) màu xanh lá (< 35) và Search Volume ổn định.',
      'Mở tab Content Ideas để tham khảo cấu trúc tiêu đề của các bài đang đứng Top.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng Ubersuggest tìm 5 từ khóa ngách có chỉ số SEO Difficulty (SD) dưới 30 trong ngành hàng của nhóm để lập dàn ý bài viết blog dễ lên Top nhất cho website mới.',
    pros: [
      'Giao diện cực kỳ thoáng, giải thích rõ ràng từng chỉ số Search Volume, SEO Difficulty (SD), Paid Difficulty (PD) và CPC.',
      'Chrome Extension hiển thị số liệu trực tiếp trên trang kết quả Google SERP, YouTube và Amazon.'
    ],
    limitations: 'Giới hạn 3 lượt tìm kiếm sâu mỗi ngày trên giao diện web đối với tài khoản miễn phí.',
    studentTip: 'Cài extension Ubersuggest trên Chrome để nhìn thấy ngay lượng tìm kiếm và từ khóa liên quan mỗi khi bạn gõ tìm tài liệu trên Google.',
    alternatives: [
      { name: 'Google Keyword Planner', slug: 'google-keyword-planner', comparison: 'Keyword Planner không giới hạn 3 lượt/ngày như Ubersuggest.' },
      { name: 'Semrush', slug: 'semrush', comparison: 'Semrush chuyên sâu hơn cho phân tích kỹ thuật và backlink đối thủ.' }
    ],
    faqs: [
      {
        q: 'Chỉ số SD (SEO Difficulty) trong Ubersuggest bao nhiêu là phù hợp cho website dự án sinh viên?',
        a: 'Với website hoặc blog dự án mới lập có độ uy tín tên miền (Domain Authority) thấp, bạn nên chọn các từ khóa dài có chỉ số SD dưới 30 (vùng màu xanh lá) để có cơ hội lọt vào trang 1 Google nhanh nhất.'
      }
    ],
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
    pricingDetail: 'Bản miễn phí cho phép quét tối đa 500 URL mỗi lần chạy (vĩnh viễn, không giới hạn số dự án website).',
    level: 'Nâng cao',
    officialUrl: 'https://www.screamingfrog.co.uk/seo-spider/',
    tags: ['Technical SEO', 'Site Audit', 'Crawler', 'Desktop App'],
    whatIsIt: 'Screaming Frog SEO Spider là phần mềm cài đặt trên máy tính (Desktop Crawler) tiêu chuẩn của ngành Technical SEO, hoạt động bằng cách giả lập bọ tìm kiếm (Googlebot) quét qua từng URL trên website để lập bảng kiểm toán toàn bộ mã trạng thái HTTP (200/301/404), thẻ Title, Meta Description, H1, H2, Canonical và dung lượng hình ảnh.',
    bestFor: 'Sinh viên làm bài tập Audit SEO website doanh nghiệp, Technical SEO Specialist và Web Developer.',
    platforms: 'Windows, macOS, Ubuntu Linux (Desktop Application)',
    vietnameseSupport: 'Đọc và xuất file Excel chuẩn bảng mã UTF-8 tiếng Việt cho mọi thẻ Title, H1, Alt ảnh.',
    studentPerk: 'Bản miễn phí cho phép quét 500 URL/lần — quá đủ để sinh viên Audit trọn vẹn 95% các website doanh nghiệp vừa và nhỏ (SME) hoặc dự án môn học.',
    useCases: [
      'Thực hiện bài tập Technical & On-page SEO Audit toàn diện cho một website doanh nghiệp thật trong 3 phút.',
      'Phát hiện hàng loạt các lỗi chí mạng: link gãy (404 Broken Links), trang thiếu thẻ H1, trùng lặp Title hoặc ảnh lớn hơn 100KB chưa có thẻ Alt.'
    ],
    quickSteps: [
      'Tải và cài đặt phần mềm Screaming Frog SEO Spider miễn phí từ trang chủ về máy tính.',
      'Nhập địa chỉ trang chủ website cần kiểm tra vào ô "Enter URL to spider" và bấm Start (chờ 1–2 phút tới khi đạt 100%).',
      'Nhìn sang cột tổng hợp Overview bên phải để lọc nhanh: Response Codes (Client Error 4xx), Page Titles (Missing/Duplicate/Over 60 chars), H1 và Images (Missing Alt Text).',
      'Bấm nút Export để xuất danh sách các URL bị lỗi ra file Excel làm phụ lục minh chứng cho báo cáo Audit SEO.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng Screaming Frog quét website của doanh nghiệp trong đồ án (tối đa 500 URLs), xuất bảng thống kê tỷ lệ % các trang bị thiếu Meta Description, thiếu Alt ảnh hoặc độ dài Title vượt quá 60 ký tự.',
    pros: [
      'Bản miễn phí 500 URLs cực kỳ hào phóng, không giới hạn số lần quét trong ngày.',
      'Có tính năng vẽ sơ đồ cây kiến trúc website (Force-Directed Crawl Diagram) rất ấn tượng để đưa vào slide báo cáo.'
    ],
    limitations: 'Phần mềm cài trên máy tính với giao diện nhiều tab kỹ thuật; cần nắm kiến thức cơ bản về On-page SEO để đọc hiểu các cột.',
    studentTip: 'Nếu làm báo cáo Audit SEO cho doanh nghiệp SME (< 500 trang), hãy xuất biểu đồ "Crawl Visualizations" từ Screaming Frog đưa vào bài thuyết trình — giảng viên sẽ đánh giá cực cao tính chuyên sâu.',
    alternatives: [
      { name: 'Semrush', slug: 'semrush', comparison: 'Semrush Site Audit chạy trên đám mây và có giao diện gợi ý sửa lỗi dễ đọc hơn, nhưng bản miễn phí giới hạn 100 trang.' },
      { name: 'Google Search Console (GSC)', slug: 'google-search-console', comparison: 'GSC cần quyền chủ sở hữu web, trong khi Screaming Frog có thể quét công khai bất kỳ website nào để làm bài tập Audit.' }
    ],
    faqs: [
      {
        q: 'Tôi không có quyền quản trị (Admin) của website doanh nghiệp thì có dùng Screaming Frog để Audit làm đồ án được không?',
        a: 'Hoàn toàn được! Screaming Frog hoạt động giống như một trình duyệt/bot đi đọc các trang công khai của website, nên bạn chỉ cần gõ địa chỉ URL trang chủ của doanh nghiệp là quét được toàn bộ cấu trúc On-page của họ.'
      }
    ],
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
    pricingDetail: 'Bản miễn phí đầy đủ tính năng cơ bản; gói Pro trả phí hoặc hỗ trợ qua chương trình giáo dục/lớp học.',
    level: 'Cơ bản',
    officialUrl: 'https://www.canva.com/',
    tags: ['Design', 'Social Media', 'Presentation', 'Brand Kit'],
    whatIsIt: 'Canva là nền tảng thiết kế đồ họa trực tuyến và truyền thông thị giác tích hợp AI (Magic Studio), giúp Marketer không chuyên về thiết kế dễ dàng tạo ra bài đăng mạng xã hội, banner quảng cáo, infographic, video ngắn và bộ slide thuyết trình đồng bộ theo nhận diện thương hiệu.',
    bestFor: 'Mọi sinh viên Marketing, Social Media Executive và Content Creator cần sản xuất ấn phẩm truyền thông nhanh, đẹp và làm việc nhóm thời gian thực.',
    platforms: 'Web Browser, Windows/macOS Desktop App, iOS & Android',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, kho phông chữ Việt hóa (Vietnamese Fonts) cực kỳ phong phú và chuẩn dấu.',
    studentPerk: 'Bản miễn phí cung cấp hàng trăm nghìn mẫu thiết kế; hỗ trợ làm việc nhóm trực tiếp trên cùng một bộ Slide thuyết trình hoặc bộ পোস্ট Facebook.',
    useCases: [
      'Thiết kế quy chuẩn nhận diện thương hiệu (Logo, bảng mã màu HEX, cặp font chữ tiêu đề/nội dung) cho thương hiệu đồ án.',
      'Sản xuất trọn bộ bài đăng đa kênh (Carousel Instagram/Facebook, Banner Website, Poster sự kiện, Infographic) và Pitch Deck bảo vệ cuối kỳ.'
    ],
    quickSteps: [
      'Xác định bảng mã màu chủ đạo (3 màu theo quy tắc 60-30-10) và 2 phông chữ hỗ trợ tiếng Việt (1 font cho Heading, 1 font cho Body).',
      'Khởi tạo kích thước chuẩn theo kênh (ví dụ: 1080x1350px cho Facebook/IG Portrait, 1920x1080px cho Slide 16:9).',
      'Sử dụng lưới căn chỉnh (Guides & Rulers) để giữ khoảng trắng an toàn (Safe Zone) đồng nhất giữa các ấn phẩm.',
      'Xuất file chuẩn định dạng: PNG cho ảnh đăng mạng xã hội, PDF Standard cho tài liệu gửi email và MP4 cho video ngắn.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thiết kế 1 bộ bài đăng Carousel 5 ảnh trên Canva (kích thước 1080x1350px) giải thích 1 khái niệm hoặc kết quả nghiên cứu Marketing, đảm bảo sử dụng thống nhất đúng 1 cặp font chữ và 3 mã màu xuyên suốt.',
    pros: [
      'Đường cong học tập bằng 0, hỗ trợ font tiếng Việt phong phú và thư viện minh họa khổng lồ.',
      'Tính năng cộng tác nhóm thời gian thực (comment, sửa slide cùng lúc) và bộ công cụ xóa phông/tạo ảnh Magic Studio AI.'
    ],
    limitations: 'Nhiều tài nguyên đẹp thuộc gói Pro; nếu lạm dụng các template có sẵn mà không đổi màu/font sẽ dễ bị trùng lặp hình ảnh với nhiều trang khác.',
    studentTip: 'Hãy thiết lập quy chuẩn Brand Kit (mã màu HEX + font chữ cố định) ngay từ tuần đầu tiên để toàn bộ bài đăng và slide của nhóm đồng nhất như một thương hiệu thật.',
    alternatives: [
      { name: 'Figma', slug: 'figma', comparison: 'Figma chuyên nghiệp và chuẩn xác hơn hẳn khi thiết kế giao diện UI/UX Landing Page hoặc hệ thống Component.' },
      { name: 'CapCut', slug: 'capcut', comparison: 'CapCut mạnh hơn Canva khi dựng video ngắn TikTok/Reels có hiệu ứng âm thanh và phụ đề tự động.' }
    ],
    faqs: [
      {
        q: 'Nên chọn kích thước ảnh bao nhiêu trên Canva để đăng Facebook và Instagram hiển thị đẹp nhất?',
        a: 'Thay vì dùng ảnh vuông 1080x1080px truyền thống, hiện nay kích thước dọc 4:5 (1080x1350px) được tối ưu hiển thị chiếm nhiều diện tích màn hình điện thoại nhất trên cả Facebook lẫn Instagram Feed.'
      }
    ],
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
    pricingDetail: 'Miễn phí các tính năng cắt ghép cốt lõi trên PC, Web và Mobile; các hiệu ứng nâng cao & tính năng AI đặc biệt thuộc gói Pro.',
    level: 'Cơ bản',
    officialUrl: 'https://www.capcut.com/',
    tags: ['Video Marketing', 'TikTok', 'Reels', 'Auto Captions'],
    whatIsIt: 'CapCut (thuộc ByteDance — công ty mẹ của TikTok) là phần mềm biên tập video ngắn đa nền tảng tích hợp AI, giúp Marketer cắt dựng clip dọc 9:16, lọc tạp âm, xóa phông nền và tạo phụ đề tiếng Việt tự động với tốc độ nhanh gấp nhiều lần các phần mềm dựng phim truyền thống.',
    bestFor: 'TikTok/Reels Creator, Social Media Marketer và nhóm sinh viên quay video TVC ngắn, UGC review sản phẩm hoặc phỏng vấn đường phố (Vox-pop).',
    platforms: 'Windows/macOS Desktop App (khuyên dùng), iOS & Android, Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt; khả năng nhận diện giọng nói tạo phụ đề tiếng Việt tự động (Auto Captions) đạt độ chính xác rất cao.',
    studentPerk: 'Bản CapCut PC miễn phí cho phép dựng đa lớp (Multi-layer timeline), keyframe mượt mà và xuất video Full HD/4K 60fps không dính watermark.',
    useCases: [
      'Dựng video review sản phẩm, UGC (User-Generated Content) và mẫu quảng cáo video ngắn 15–60 giây cho TikTok, Reels, YouTube Shorts.',
      'Chèn phụ đề động (Dynamic Captions) và hiệu ứng âm thanh (SFX) để giữ chân người xem đang tắt tiếng trên mạng xã hội.'
    ],
    quickSteps: [
      'Quay các phân cảnh ngắn theo kịch bản phân cảnh (Storyboard: 3s Hook - 15s Nội dung chính - 5s CTA) và đưa vào CapCut PC.',
      'Cắt bỏ toàn bộ các khoảng nghỉ thừa giữa các câu nói (Jump-cut) để giữ nhịp độ video nhanh, gọn.',
      'Thêm chữ tiêu đề lớn (Hook Text) ở 3 giây đầu tiên kèm hiệu ứng âm thanh chuyển cảnh và nhạc nền âm lượng nhỏ (khoảng -18dB đến -25dB).',
      'Kiểm tra khung an toàn TikTok (tránh đặt chữ ở sát cạnh phải và đáy màn hình nơi có nút Tim/Caption) trước khi xuất file MP4 1080p.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Quay và dựng 1 video ngắn 30 giây giới thiệu giải pháp của dự án theo cấu trúc Hook - Problem - Solution - CTA trên CapCut, đảm bảo có phụ đề tiếng Việt rõ ràng trong vùng an toàn (Safe Zone) của giao diện TikTok.',
    pros: [
      'Tốc độ dựng video ngắn nhanh gấp 3–5 lần Premiere Pro đối với người không chuyên.',
      'Kho hiệu ứng âm thanh (SFX), nhãn dán, font chữ Việt hóa và nhạc xu hướng đồng bộ trực tiếp với hệ sinh thái TikTok.'
    ],
    limitations: 'Nhiều tính năng Auto Captions và hiệu ứng từng miễn phí nay đã chuyển sang nhãn Pro; trên bản Mobile cần chú ý xóa đoạn kết mặc định của CapCut.',
    studentTip: '3 giây đầu tiên (Visual & Audio Hook) quyết định hơn 70% tỷ lệ giữ chân người xem — luôn chèn chữ tiêu đề giải quyết đúng nỗi đau ngay khung hình đầu.',
    alternatives: [
      { name: 'Canva', slug: 'canva', comparison: 'Canva phù hợp hơn với video dạng slide thuyết trình hoặc motion graphic chữ đơn giản, còn CapCut vượt trội khi cắt ghép cảnh quay người thật.' }
    ],
    faqs: [
      {
        q: 'Làm sao để chữ phụ đề trong video CapCut không bị giao diện TikTok hoặc Reels che khuất?',
        a: 'Khi dựng video dọc 9:16 (1080x1920), hãy luôn đặt phụ đề ở vùng trung tâm hoặc khoảng 1/3 dưới nhưng cách đáy màn hình ít nhất 250–300px, và tránh sát lề phải nơi chứa dãy nút Tim, Bình luận, Chia sẻ.'
      }
    ],
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
    pricingDetail: 'Có gói Starter miễn phí; Đặc biệt sinh viên và giảng viên được cấp gói Figma Education (tương đương gói Professional) miễn phí 100%.',
    level: 'Trung bình',
    officialUrl: 'https://www.figma.com/',
    tags: ['UI/UX', 'Landing Page', 'Wireframe', 'Prototype'],
    whatIsIt: 'Figma là nền tảng thiết kế giao diện người dùng (UI/UX), dựng khung sườn trang web (Wireframe), mô phỏng tương tác (Interactive Prototype) và bảng trắng cộng tác (FigJam) chạy trực tiếp trên đám mây, là tiêu chuẩn bắt buộc tại các công ty công nghệ và Digital Agency hiện nay.',
    bestFor: 'Sinh viên thiết kế bản mẫu Landing Page/App cho đồ án, Product Marketer, CRO Specialist và UI/UX Designer.',
    platforms: 'Web Browser, Windows/macOS Desktop App, Figma Mirror (iOS/Android)',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt hoàn hảo với toàn bộ kho Google Fonts.',
    studentPerk: 'Sinh viên đại học có email trường (`.edu.vn`) chỉ cần đăng ký tại `figma.com/education` là được nâng cấp lên gói Figma Professional và FigJam miễn phí 100% trong suốt thời gian học.',
    useCases: [
      'Lập bản đồ hành trình khách hàng (Customer Journey Map), sơ đồ Empathy Map và Brainstorm nhóm thời gian thực trên bảng trắng FigJam.',
      'Thiết kế Wireframe và giao diện Landing Page có thể bấm chuyển trang như thật (Prototype) để trình chiếu khi bảo vệ đồ án mà chưa cần tốn tiền thuê code.'
    ],
    quickSteps: [
      'Đăng ký tài khoản tại figma.com và xác minh tư cách sinh viên tại `figma.com/education` để mở khóa gói Pro miễn phí.',
      'Vào mục Figma Community tìm từ khóa "Landing Page Wireframe Kit" hoặc "Customer Journey Map" để nhân bản mẫu chuẩn về máy.',
      'Sử dụng tính năng Auto Layout và Components để sắp xếp các khối nội dung (Hero, Social Proof, Features, Pricing, FAQ, CTA) theo cấu trúc AIDA.',
      'Chuyển sang tab Prototype để nối các nút CTA với popup đăng ký, sau đó bấm nút Present (Play) để lấy link demo tương tác.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Sử dụng FigJam hoặc Figma để vẽ sơ đồ luồng chuyển đổi (User Flow) và bản Wireframe 2 phiên bản (Desktop 1440px & Mobile 390px) cho trang Landing Page chiến dịch của nhóm.',
    pros: [
      'Hoạt động mượt mà ngay trên trình duyệt, cả nhóm 5–10 sinh viên có thể cùng kéo thả và bình luận trực tiếp trên một màn hình.',
      'Kho tài nguyên Figma Community miễn phí hàng chục nghìn bộ UI Kit, Icon và mẫu Landing Page chuẩn UX.'
    ],
    limitations: 'Cần dành khoảng 2–3 giờ làm quen với khái niệm Frame và Auto Layout nếu trước đó chỉ quen dùng Canva.',
    studentTip: 'Đừng quên xác minh email `.edu.vn` để nhận gói Figma Education Pro miễn phí — dùng link Prototype tương tác khi thuyết trình sẽ gây ấn tượng cực mạnh với hội đồng chấm bài.',
    alternatives: [
      { name: 'Canva', slug: 'canva', comparison: 'Canva nhanh hơn cho ấn phẩm mạng xã hội, nhưng Figma vượt trội tuyệt đối khi thiết kế giao diện Website/App và Prototype bấm được.' }
    ],
    faqs: [
      {
        q: 'Làm sao để kích hoạt gói Figma Education miễn phí cho sinh viên Việt Nam?',
        a: 'Bạn chỉ cần đăng ký tài khoản Figma bằng email sinh viên do trường cấp (có đuôi `.edu.vn`), sau đó truy cập `figma.com/education/apply`, chọn đối tượng Student, điền tên trường đại học và ngành học là hệ thống duyệt tự động trong vài phút.'
      }
    ],
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
    pricingDetail: 'Miễn phí công khai 100% từ Meta, truy cập trực tiếp không cần đăng nhập hay trả phí.',
    level: 'Cơ bản',
    officialUrl: 'https://www.facebook.com/ads/library/',
    tags: ['Facebook Ads', 'Competitor Research', 'Ad Creative', 'Spy Ads'],
    whatIsIt: 'Meta Ad Library (Thư viện Quảng cáo của Meta) là cơ sở dữ liệu minh bạch chính thức và hoàn toàn miễn phí do Meta vận hành, cho phép bất kỳ ai tra cứu toàn bộ các mẫu quảng cáo đang hoạt động (Active Ads) của mọi thương hiệu trên Facebook, Instagram, Messenger và Audience Network.',
    bestFor: 'Performance Marketer, Content Copywriter, Creative Planner và sinh viên làm phần Phân tích truyền thông đối thủ cạnh tranh trong đồ án IMC/Digital.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, lọc chính xác mọi Fanpage và từ khóa quảng cáo tại thị trường Việt Nam.',
    studentPerk: 'Miễn phí 100% dữ liệu thời gian thực chính chủ từ Meta mà không cần mua các phần mềm Spy Ads đắt đỏ.',
    useCases: [
      'Giải phẫu chiến lược thông điệp (Messaging Angles), định dạng nội dung (Video ngắn, Carousel, Ảnh đơn) và trang đích (Landing Page) của đối thủ cùng ngành.',
      'Nhận diện "Winning Ads" (những mẫu quảng cáo hiệu quả nhất của đối thủ) thông qua ngày bắt đầu chạy: mẫu nào được duy trì liên tục từ 30–90 ngày trở lên thường là mẫu đang mang lại chuyển đổi tốt.'
    ],
    quickSteps: [
      'Truy cập facebook.com/ads/library, chọn Quốc gia: "Việt Nam" và Hạng mục quảng cáo: "Tất cả quảng cáo" (All Ads).',
      'Nhập tên Fanpage chính thức của đối thủ cạnh tranh hoặc từ khóa ngành hàng (ví dụ: "khóa học IELTS", "serum trị mụn").',
      'Sử dụng bộ lọc (Filters) để lọc theo Nền tảng (Instagram/Facebook), Loại phương tiện (Video/Hình ảnh) và Trạng thái đang hoạt động.',
      'Quan sát những mẫu quảng cáo có ngày bắt đầu chạy lâu nhất và bấm vào nút CTA của họ để xem cách đối thủ thiết kế trang đích (Landing Page) đón khách.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Chọn 3 thương hiệu đối thủ trực tiếp trên Meta Ad Library, thống kê số lượng quảng cáo đang chạy của mỗi bên, phân loại tỷ lệ % định dạng (Video vs Ảnh tĩnh vs Carousel) và trích xuất 3 công thức Hook họ dùng nhiều nhất.',
    pros: [
      'Dữ liệu chính xác tuyệt đối 100% theo thời gian thực trực tiếp từ máy chủ Meta.',
      'Xem được cả các biến thể A/B Testing hình ảnh, tiêu đề và đường link Landing Page ẩn mà đối thủ không đăng công khai trên tường Fanpage.'
    ],
    limitations: 'Với quảng cáo thương mại tại Việt Nam, Meta không công khai số tiền ngân sách đã chi tiêu hay số lượt mua hàng cụ thể của từng mẫu.',
    studentTip: 'Trước khi viết bài quảng cáo hay thiết kế banner cho đồ án, hãy vào Meta Ad Library soi 5 đối thủ lớn nhất trong ngành để không bị viết thông điệp trùng lặp hoặc lỗi thời.',
    alternatives: [
      { name: 'TikTok Creative Center', slug: 'tiktok-creative-center', comparison: 'Meta Ad Library dùng cho hệ sinh thái Facebook/Instagram, còn TikTok Creative Center dùng để soi Top Ads và biểu đồ giữ chân người xem trên TikTok.' }
    ],
    faqs: [
      {
        q: 'Làm sao biết mẫu quảng cáo nào trên Meta Ad Library là mẫu hiệu quả (Winning Ad) khi Meta không hiện doanh số?',
        a: 'Hãy nhìn vào dòng "Bắt đầu chạy vào..." (Started running on...) ở đầu thẻ quảng cáo và ký hiệu "Quảng cáo này có nhiều phiên bản". Một doanh nghiệp chỉ giữ tiền chạy liên tục một mẫu quảng cáo suốt hơn 3–4 tuần khi mẫu đó đang mang lại chi phí trên mỗi chuyển đổi (CPA/ROAS) có lãi.'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% khi đăng nhập bằng tài khoản TikTok hoặc TikTok for Business.',
    level: 'Cơ bản',
    officialUrl: 'https://ads.tiktok.com/business/creativecenter/',
    tags: ['TikTok Ads', 'Trends', 'Creative', 'Short Video'],
    whatIsIt: 'TikTok Creative Center là cổng dữ liệu xu hướng và thư viện sáng tạo chính thức của TikTok for Business, cung cấp bảng xếp hạng Hashtag, Bài hát thương mại, Nhà sáng tạo đang lên theo thời gian thực cùng kho Top Ads cho phép soi biểu đồ tỷ lệ nhấp (CTR) và giữ chân người xem theo từng giây.',
    bestFor: 'TikTok Marketer, Short-form Video Creator, Content Planner và sinh viên xây dựng kênh TikTok hoặc kế hoạch quảng cáo video ngắn.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ lọc dữ liệu riêng cho thị trường Việt Nam (Region: Vietnam) theo từng nhóm ngành hàng (F&B, Làm đẹp, Thời trang, Giáo dục...).',
    studentPerk: 'Miễn phí xem biểu đồ phân tích từng giây (Second-by-second CTR & Retention graph) của những video quảng cáo hiệu quả nhất tại Việt Nam.',
    useCases: [
      'Tra cứu mục Top Ads Dashboard (lọc Region: Vietnam, Objective: Conversions) để xem kịch bản các video quảng cáo nằm trong Top 1–20% CTR cao nhất.',
      'Kiểm tra xu hướng Hashtag và chọn nhạc trong Commercial Music Library để video thương hiệu không bị đánh bản quyền âm thanh.'
    ],
    quickSteps: [
      'Truy cập ads.tiktok.com/business/creativecenter, đăng nhập tài khoản miễn phí và chuyển quốc gia ở góc phải thành "Vietnam".',
      'Vào mục Inspiration > Top Ads Dashboard, lọc theo Ngành hàng (Industry) của đồ án và mục tiêu chiến dịch (Traffic / Conversions).',
      'Bấm vào một video hiệu quả để xem biểu đồ đường CTR, CVR và Clicks biến động ở giây thứ mấy trong video.',
      'Vào mục Trends > Songs > chọn tab "Commercial Music" để tải nhạc nền hợp lệ cho tài khoản doanh nghiệp.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Lọc 5 video quảng cáo thuộc ngành hàng của bạn có CTR nằm trong Top 20% tại Việt Nam trên TikTok Creative Center, chụp lại biểu đồ tương tác theo giây và phân tích xem ở giây có đỉnh lượt bấm (Peak Clicks), video đã hiển thị hình ảnh hay câu nói gì.',
    pros: [
      'Hiển thị trực quan biểu đồ tương tác và tỷ lệ bấm theo từng giây (Second-by-second analytics) của video mẫu.',
      'Cung cấp công cụ Script Generator và danh sách nhạc thương mại an toàn bản quyền 100%.'
    ],
    limitations: 'Cần đăng nhập tài khoản TikTok for Business (đăng ký miễn phí trong 1 phút) để mở khóa toàn bộ bộ lọc chi tiết.',
    studentTip: 'Luôn kiểm tra phần "Commercial Music Library" trước khi ghép nhạc cho video dự án thương hiệu để không bị TikTok tắt tiếng khi chạy quảng cáo.',
    alternatives: [
      { name: 'Meta Ad Library (Thư viện Quảng cáo Facebook)', slug: 'meta-ad-library', comparison: 'Meta Ad Library soi được chính xác từng Fanpage đối thủ, còn TikTok Creative Center mạnh hơn ở việc lọc các video nằm trong Top % hiệu suất của cả ngành.' },
      { name: 'CapCut', slug: 'capcut', comparison: 'Sau khi tìm được cấu trúc video thắng trên TikTok Creative Center, bạn chuyển thẳng sang CapCut để dựng.' }
    ],
    faqs: [
      {
        q: 'Vì sao tài khoản thương hiệu trên TikTok không dùng được các bài nhạc Pop đang hot của tài khoản cá nhân?',
        a: 'Do quy định bản quyền âm nhạc thương mại, các tài khoản Business hoặc video chạy quảng cáo chỉ được phép sử dụng kho nhạc đã được cấp phép thương mại (Commercial Music Library) trên TikTok Creative Center.'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% không cần đăng ký tài khoản.',
    level: 'Cơ bản',
    officialUrl: 'https://trends.google.com/',
    tags: ['Market Research', 'Seasonality', 'Trends', 'Consumer Behavior'],
    whatIsIt: 'Google Trends là công cụ phân tích dữ liệu tìm kiếm công cộng theo thời gian thực của Google, chuẩn hóa mức độ quan tâm của người dùng đối với một chủ đề, thương hiệu hoặc sản phẩm trên thang điểm từ 0 đến 100 theo dòng thời gian (từ năm 2004 đến nay) và phân bổ theo từng tỉnh thành.',
    bestFor: 'Sinh viên viết chương Phân tích bối cảnh thị trường & Tính mùa vụ (Seasonality), Brand Planner và Content Marketer bắt nhịp xu hướng.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, bản đồ nhiệt chi tiết tới đủ 63 tỉnh/thành tại Việt Nam trên cả Web Search và YouTube Search.',
    studentPerk: 'Miễn phí 100%, cho phép xuất file CSV hoặc nhúng biểu đồ so sánh trực tiếp để làm minh chứng dữ liệu rất thuyết phục trong bài thuyết trình.',
    useCases: [
      'Xác định chính xác tính mùa vụ (Seasonality): biết nhu cầu tìm kiếm một sản phẩm (ví dụ: kem chống nắng, bánh trung thu, khóa học tiếng Anh) bắt đầu tăng từ tuần nào trong năm để tung chiến dịch sớm trước 2–4 tuần.',
      'So sánh tương quan mức độ quan tâm thương hiệu (Share of Search) của tối đa 5 đối thủ cạnh tranh trong 12 tháng hoặc 5 năm qua.'
    ],
    quickSteps: [
      'Truy cập trends.google.com, vào mục Khám phá (Explore) và đặt bộ lọc Quốc gia là "Việt Nam".',
      'Nhập chủ đề hoặc tên thương hiệu của bạn rồi bấm "+ Thêm cụm từ so sánh" để đặt cạnh 2–4 đối thủ trực tiếp.',
      'Chọn khung thời gian "5 năm qua" để nhận diện quy luật mùa vụ lặp lại hàng năm hoặc "90 ngày qua" để xem xu hướng ngắn hạn.',
      'Chuyển đổi giữa bộ lọc "Tìm kiếm trên Web" và "Tìm kiếm trên YouTube", sau đó tải biểu đồ hoặc file CSV về đưa vào báo cáo.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng Google Trends so sánh mức độ quan tâm tìm kiếm của 3 thương hiệu cùng ngành tại Việt Nam trong 5 năm qua, xác định tháng cao điểm nhất trong năm (chỉ số đạt 100) và top 3 tỉnh/thành phố có nhu cầu cao nhất.',
    pros: [
      'Dữ liệu lịch sử dài hạn hoàn toàn miễn phí, phản ánh trung thực hành vi quan tâm thực tế của người tiêu dùng Việt Nam.',
      'Mục "Cụm từ tìm kiếm có liên quan" có bộ lọc "Đột phá" (Breakout - tăng trưởng >5000%) giúp phát hiện trend mới cực nhanh.'
    ],
    limitations: 'Con số trên biểu đồ (0–100) là chỉ số tương đối (Index) so với đỉnh cao nhất trong giai đoạn chọn, không phải số lượt tìm kiếm tuyệt đối.',
    studentTip: 'Đưa biểu đồ so sánh Google Trends 5 năm vào phần "Bối cảnh thị trường & Thời điểm tung chiến dịch" của đồ án IMC sẽ giúp hội đồng thấy nhóm chọn lịch truyền thông dựa trên dữ liệu chứ không phải cảm tính.',
    alternatives: [
      { name: 'Google Keyword Planner', slug: 'google-keyword-planner', comparison: 'Google Trends cho thấy đường xu hướng tương đối (0–100) và bản đồ tỉnh thành rất nhanh, còn Keyword Planner cho biết con số lượng tìm kiếm hàng tháng.' }
    ],
    faqs: [
      {
        q: 'Con số 100 trên biểu đồ Google Trends có nghĩa là có 100 người tìm kiếm phải không?',
        a: 'Không phải. Điểm 100 đại diện cho thời điểm từ khóa đó đạt mức độ phổ biến cao nhất (Đỉnh - Peak) trong khung thời gian và khu vực bạn chọn. Điểm 50 nghĩa là mức độ quan tâm bằng một nửa so với thời điểm đỉnh đó.'
      }
    ],
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
    pricingDetail: 'Gói miễn phí vĩnh viễn cho phép kết nối tối đa 3 kênh mạng xã hội và hẹn lịch chờ sẵn 10 bài/kênh.',
    level: 'Cơ bản',
    officialUrl: 'https://buffer.com/',
    tags: ['Social Scheduling', 'Content Calendar', 'Automation', 'Analytics'],
    whatIsIt: 'Buffer là nền tảng quản lý và lập lịch xuất bản nội dung mạng xã hội đa kênh (Social Media Management), cho phép Marketer soạn thảo, tùy biến định dạng và hẹn giờ tự động đăng bài đồng loạt lên Facebook Fanpage, Instagram, TikTok, LinkedIn, Threads và YouTube Shorts từ một lịch biểu duy nhất.',
    bestFor: 'Social Media Intern, Content Executive và nhóm sinh viên vận hành đa kênh truyền thông cho dự án thực chiến.',
    platforms: 'Web Browser, iOS & Android App, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ soạn thảo, hiển thị emoji và đăng bài tiếng Việt chuẩn xác trên mọi nền tảng mạng xã hội.',
    studentPerk: 'Gói Free cho phép kết nối 3 kênh (ví dụ: 1 Facebook Page + 1 Instagram + 1 TikTok/LinkedIn) với 10 bài hẹn lịch mỗi kênh — vừa khít cho nhu cầu chạy đồ án học kỳ của một nhóm sinh viên.',
    useCases: [
      'Tập trung soạn toàn bộ bài đăng của cả tuần vào chiều Chủ Nhật rồi hẹn lịch tự động xuất bản vào đúng các khung giờ vàng.',
      'Sử dụng tính năng Create Space và Kanban Board của Buffer để cả nhóm duyệt nháp bài viết trước khi lên lịch.'
    ],
    quickSteps: [
      'Đăng ký tài khoản miễn phí tại buffer.com và kết nối tối đa 3 tài khoản mạng xã hội của dự án.',
      'Thiết lập khung giờ đăng cố định trong mục Posting Schedule của từng kênh.',
      'Bấm "Create Post", soạn nội dung gốc rồi bấm tùy chỉnh riêng (Customize for each network) cho Facebook, Instagram và TikTok.',
      'Chọn "Add to Queue" hoặc "Schedule Post" để hệ thống tự động đăng đúng giờ.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thiết lập lịch xuất bản tự động 1 tuần (gồm 5 bài đăng đa kênh) trên Buffer cho dự án của nhóm, chụp màn hình giao diện Calendar View đưa vào phần Kế hoạch triển khai (Execution Plan) của báo cáo.',
    pros: [
      'Giao diện tối giản, trực quan và dễ sử dụng nhất trong các phần mềm quản lý mạng xã hội quốc tế.',
      'Không cần thẻ tín dụng khi đăng ký gói miễn phí 3 kênh.'
    ],
    limitations: 'Báo cáo phân tích chuyên sâu (Analytics) và kết nối trên 3 kênh yêu cầu nâng cấp lên gói trả phí (có thể kết hợp thêm Meta Business Suite miễn phí cho riêng Facebook/IG).',
    studentTip: 'Dùng Buffer (kết hợp Meta Business Suite) để tự động hóa khâu đăng bài hàng ngày, dành thời gian của nhóm cho việc tối ưu nội dung và đo lường chuyển đổi.',
    alternatives: [
      { name: 'n8n (Workflow Automation)', slug: 'n8n-automation', comparison: 'Buffer là công cụ hẹn lịch có sẵn giao diện lịch biểu rất dễ dùng, còn n8n dành cho việc xây dựng luồng AI tự động viết và đăng bài nâng cao.' }
    ],
    faqs: [
      {
        q: 'Đăng bài qua công cụ hẹn lịch như Buffer có bị Facebook hay TikTok bóp tương tác (Reach) không?',
        a: 'Không. Buffer sử dụng cổng kết nối API chính thức (Official Partner API) được Meta và TikTok cấp phép, nên thuật toán phân phối hoàn toàn tương đương với việc bạn đăng trực tiếp.'
      }
    ],
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
    pricingDetail: 'Gói Free Tools miễn phí vĩnh viễn: quản lý liên hệ CRM, tạo Lead Form, Live Chat, Landing Page và gửi tới 2.000 email/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.hubspot.com/products/crm',
    tags: ['CRM', 'Lead Generation', 'Email Marketing', 'HubSpot'],
    whatIsIt: 'HubSpot CRM & Marketing Hub là nền tảng quản trị quan hệ khách hàng và Inbound Marketing hợp nhất hàng đầu thế giới, giúp doanh nghiệp thu thập thông tin khách hàng tiềm năng (Leads) qua biểu mẫu/Live Chat, lưu trữ lịch sử tương tác xuyên suốt, quản lý phễu bán hàng (Deal Pipeline) và gửi chiến dịch Email Marketing.',
    bestFor: 'Sinh viên học môn CRM, Inbound Marketing, B2B Marketing và nhóm dự án cần hệ thống thu thập & quản lý Lead chuyên nghiệp trên Landing Page.',
    platforms: 'Web Browser (Cloud), iOS & Android App, tích hợp WordPress, Shopify, Gmail & Outlook',
    vietnameseSupport: 'Hỗ trợ lưu trữ dữ liệu tiếng Việt, tạo Form và gửi Email Marketing tiếng Việt chuẩn mã Unicode.',
    studentPerk: 'Gói HubSpot Free CRM miễn phí trọn đời; đặc biệt nền tảng HubSpot Academy cung cấp các chứng chỉ quốc tế (Inbound Marketing, Email Marketing, Content Marketing) miễn phí 100% cực kỳ uy tín khi đưa vào CV.',
    useCases: [
      'Tạo Form đăng ký nhận tài liệu (Lead Magnet) hoặc đăng ký tư vấn nhúng vào Landing Page đồ án, dữ liệu khách tự động đổ về bảng CRM kèm nguồn UTM.',
      'Phân loại khách hàng theo giai đoạn vòng đời (Subscriber > Lead > MQL > SQL > Customer) và gửi chiến dịch Email chăm sóc.'
    ],
    quickSteps: [
      'Đăng ký tài khoản miễn phí tại hubspot.com (chọn gói Free CRM Tools).',
      'Vào mục Marketing > Forms để thiết kế biểu mẫu thu thập thông tin khách hàng (Họ tên, Email, SĐT, Nhu cầu) và lấy mã Embed nhúng vào Landing Page.',
      'Cài đặt mã HubSpot Tracking Code vào Google Tag Manager để hệ thống tự động ghi nhận khách đã xem những trang nào trước khi điền form.',
      'Vào mục CRM > Contacts & Deals để xem hồ sơ khách hàng và kéo thả tiến trình chăm sóc trên bảng Pipeline.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Tạo 1 biểu mẫu thu thập Lead trên HubSpot CRM, thiết lập 1 email tự động gửi tài liệu (Follow-up Email) ngay sau khi khách bấm gửi form, và chụp lại màn hình hồ sơ Contact Timeline trong CRM làm minh chứng luồng Inbound Marketing.',
    pros: [
      'Trải nghiệm hệ thống CRM & Марketing Automation chuẩn tập đoàn quốc tế hoàn toàn miễn phí.',
      'Ghi nhận tự động nguồn gốc khách hàng (Original Source / UTM) và lịch sử xem trang của từng Contact.'
    ],
    limitations: 'Các luồng tự động hóa đa nhánh phức tạp (Omni-channel Workflows) ở gói trả phí có giá rất cao dành cho doanh nghiệp lớn.',
    studentTip: 'Học lấy chứng chỉ Inbound Marketing miễn phí trên HubSpot Academy và thực hành nhúng Form HubSpot vào Landing Page của nhóm — điểm thực hành môn Digital/CRM chắc chắn sẽ nổi bật.',
    alternatives: [
      { name: 'Brevo (Sendinblue)', slug: 'brevo', comparison: 'Brevo mở khóa tính năng kịch bản Email Automation đa nhánh ngay ở gói miễn phí dễ dàng hơn HubSpot.' },
      { name: 'Tally Forms', slug: 'tally-forms', comparison: 'Tally tạo form khảo sát nhanh và đẹp hơn nếu bạn chỉ cần đổ dữ liệu đơn giản về Google Sheets.' }
    ],
    faqs: [
      {
        q: 'Chứng chỉ trên HubSpot Academy có mất phí thi hay hết hạn không?',
        a: 'Toàn bộ các khóa học và bài thi lấy chứng chỉ trên HubSpot Academy đều miễn phí 100%. Chứng chỉ có hiệu lực trong vòng 1–2 năm và có thể gắn trực tiếp lên hồ sơ LinkedIn với mã xác thực quốc tế.'
      }
    ],
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
    pricingDetail: 'Gói miễn phí vĩnh viễn cho phép gửi tối đa 300 email/ngày (~9.000 email/tháng) và lưu trữ tới 100.000 liên hệ.',
    level: 'Cơ bản',
    officialUrl: 'https://www.brevo.com/',
    tags: ['Email Marketing', 'Newsletter', 'Automation', 'Segmentation'],
    whatIsIt: 'Brevo (tên cũ là Sendinblue) là nền tảng Email Marketing và Marketing Automation hàng đầu châu Âu, nổi bật với trình thiết kế email kéo thả hiện đại, phân đoạn khách hàng động (Dynamic Segmentation) và đặc biệt cho phép thiết lập luồng kịch bản gửi thư tự động (Automation Workflows) ngay trên gói miễn phí.',
    bestFor: 'Sinh viên thực hành môn Email Marketing, E-commerce Marketer và SME cần gửi bản tin Newsletter hoặc kịch bản chuỗi email chào mừng tự động.',
    platforms: 'Web Browser (Cloud), API, SMTP, Plugin cho WordPress/WooCommerce/Shopify',
    vietnameseSupport: 'Hiển thị tiếng Việt hoàn hảo trong trình thiết kế Email và các biến cá nhân hóa (`{{ contact.FIRSTNAME }}`).',
    studentPerk: 'Cho phép gửi 300 email/ngày miễn phí và mở khóa đầy đủ tính năng vẽ sơ đồ Automation Workflow (cho tối đa 2.000 liên hệ) mà Mailchimp đã cắt ở bản Free.',
    useCases: [
      'Thiết kế bản tin Email Newsletter chuyên nghiệp có chèn biến cá nhân hóa tên người nhận ở tiêu đề và lời chào.',
      'Vẽ kịch bản Automation: Khi khách đăng ký trên web > Chờ 2 phút > Gửi Email 1 tặng Ebook > Nếu sau 2 ngày khách đã mở mail nhưng chưa bấm link > Tự động gửi Email 2 nhắc nhở.'
    ],
    quickSteps: [
      'Đăng ký tài khoản miễn phí tại brevo.com và xác thực địa chỉ email người gửi (Sender).',
      'Vào mục Contacts > Lists để tải danh sách email thử nghiệm của các thành viên trong nhóm hoặc kết nối từ Form đăng ký.',
      'Mở mục Campaigns > Email để thiết kế thư bằng trình kéo thả Drag & Drop và chèn biến cá nhân hóa.',
      'Vào mục Automations để vẽ sơ đồ kịch bản chuỗi email tự động và theo dõi báo cáo Open Rate, Click-to-Open Rate (CTOR).'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng AI viết 2 phương án tiêu đề Email (Subject Line) khác nhau cho cùng một chiến dịch, gửi thử nghiệm trên Brevo và giải thích cách đọc các chỉ số Delivery Rate, Open Rate, CTR và Unsubscribe Rate.',
    pros: [
      'Hỗ trợ tính năng vẽ luồng Automation Workflow rẽ nhánh (If/Else) ngay trên gói miễn phí — cực kỳ giá trị để sinh viên thực hành.',
      'Giới hạn 300 email/ngày (~9.000 email/tháng) hào phóng hơn nhiều so với giới hạn 1.000 email/tháng của Mailchimp Free.'
    ],
    limitations: 'Ở gói miễn phí, cuối mỗi email sẽ có đính kèm dòng chữ nhỏ "Sent with Brevo".',
    studentTip: 'Kết hợp bài học "AI viết tiêu đề email cá nhân hóa" trên Marketing2Student rồi dựng luồng Automation thực tế trên Brevo để chụp sơ đồ workflow đưa vào đồ án.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot mạnh hơn về quản trị hồ sơ Sales CRM tổng thể, còn Brevo dễ dùng và hào phóng hơn ở tính năng vẽ kịch bản Email Automation miễn phí.' }
    ],
    faqs: [
      {
        q: 'Vì sao khi gửi Email Marketing thử nghiệm bằng Gmail cá nhân thì thư hay bị rơi vào mục Quảng cáo hoặc Spam?',
        a: 'Các dịch vụ gửi email hàng loạt như Brevo yêu cầu xác thực chữ ký tên miền riêng (DKIM, SPF, DMARC) để chứng minh uy tín người gửi. Nếu sinh viên dùng tạm địa chỉ `@gmail.com` làm Sender để test bài tập, bạn nên gửi cho danh sách nhỏ trong nhóm và hướng dẫn người nhận đánh dấu "Không phải Spam".'
      }
    ],
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
    pricingDetail: 'Miễn phí 100% trọn đời khi tự cài đặt trên máy tính/VPS (Self-hosted Community Edition); có bản Cloud dùng thử miễn phí.',
    level: 'Nâng cao',
    officialUrl: 'https://n8n.io/',
    tags: ['Automation', 'AI Agent', 'Webhook', 'No-Code'],
    whatIsIt: 'n8n là nền tảng tự động hóa quy trình làm việc (Workflow Automation) và xây dựng AI Agent dạng kéo thả các nút (Node-based) có mã nguồn mở, cho phép kết nối hơn 400 ứng dụng (Google Sheets, Telegram, Facebook, Gmail, Webhook) với các mô hình AI (OpenAI, Gemini, Claude) để vận hành hệ thống Marketing tự động 24/7.',
    bestFor: 'Sinh viên định hướng Martech / Growth Marketing / AI Automation và doanh nghiệp muốn tự động hóa quy trình nội dung & chăm sóc Lead với chi phí thấp nhất.',
    platforms: 'Self-hosted (Docker / Node.js trên Windows, macOS, Linux VPS), hoặc n8n Cloud trên Web Browser',
    vietnameseSupport: 'Xử lý dữ liệu JSON và văn bản tiếng Việt hoàn hảo; cộng đồng người dùng n8n Marketing tại Việt Nam rất lớn và sôi động.',
    studentPerk: 'Miễn phí 100% không giới hạn số lượng workflow khi bạn chạy bản Community Edition ngay trên máy tính cá nhân qua Docker hoặc `npx n8n` để làm đồ án.',
    useCases: [
      'Luồng Quản trị Lead tức thì: Khi khách điền Form trên Landing Page (Tally/Web) > Bắn Webhook sang n8n > Tự động nhờ AI phân loại nhu cầu > Ghi vào Google Sheets > Bắn thông báo ngay vào nhóm Telegram/Zalo của đội Sales.',
      'Luồng Trợ lý Nội dung AI: Tự động đọc tin tức mới qua RSS hoặc bảng từ khóa trong Google Sheets > Gọi nút AI Agent (Gemini/ChatGPT) tóm tắt và soạn bản nháp bài đăng đa kênh.'
    ],
    quickSteps: [
      'Cài đặt nhanh n8n trên máy tính cá nhân bằng Docker (`docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`) hoặc đăng ký bản dùng thử trên n8n.io.',
      'Tạo một Workflow mới bắt đầu bằng nút Trigger (ví dụ: Webhook, Tally Trigger, hoặc Schedule Trigger).',
      'Kéo thêm nút AI Agent (kết nối API Key miễn phí của Google Gemini AI Studio) và nút Google Sheets / Telegram.',
      'Bấm "Test Workflow" để xem dữ liệu chảy qua từng nút theo thời gian thực rồi bật công tắc "Active".'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dựng 1 workflow tự động trên n8n gồm 4 nút: (1) Nhận dữ liệu từ Form khảo sát > (2) Dùng AI Gemini phân tích cảm xúc & tóm tắt phản hồi của khách > (3) Lưu vào Google Sheets > (4) Gửi thông báo về Telegram của nhóm.',
    pros: [
      'Tiết kiệm chi phí cực lớn so với Zapier hay Make.com vì bản Self-hosted hoàn toàn miễn phí và không tính tiền theo từng bước xử lý.',
      'Hỗ trợ nút AI Agent, Vector Store (RAG) và Memory nguyên bản ngay trên giao diện kéo thả.'
    ],
    limitations: 'Đòi hỏi tư duy logic luồng dữ liệu (Input -> Process -> Output) và hiểu khái niệm cơ bản về API Key hoặc Webhook.',
    studentTip: 'Sở hữu 1–2 sơ đồ workflow n8n thực tế trong Portfolio/CV là điểm cộng cực kỳ đắt giá khi ứng tuyển các vị trí AI Marketing, Martech hoặc Growth Intern năm 2026.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot là phần mềm CRM đóng gói sẵn, còn n8n là cầu nối linh hoạt giúp bạn tự lắp ráp quy trình nối bất kỳ công cụ nào với AI.' }
    ],
    faqs: [
      {
        q: 'Sinh viên không biết lập trình (Code) có học và dùng được n8n không?',
        a: 'Hoàn toàn dùng được. Hơn 90% thao tác trong n8n là kéo thả các khối có sẵn và nối dây giữa các ứng dụng. Khi cần biến đổi dữ liệu nhỏ, bạn chỉ cần chụp màn hình nhờ ChatGPT hoặc Claude viết giúp đoạn biểu thức ngắn.'
      }
    ],
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
    pricingDetail: 'Miễn phí 99% tính năng cốt lõi: Không giới hạn số lượng biểu mẫu, không giới hạn số câu hỏi và không giới hạn số lượt người điền.',
    level: 'Cơ bản',
    officialUrl: 'https://tally.so/',
    tags: ['Survey', 'Market Research', 'Lead Form', 'UX'],
    whatIsIt: 'Tally (tally.so) là nền tảng tạo biểu mẫu trực tuyến và khảo sát nghiên cứu thị trường thế hệ mới với giao diện soạn thảo gõ phím liền mạch giống hệt Notion, cung cấp miễn phí không giới hạn lượt phản hồi kèm logic rẽ nhánh (Conditional Logic), tính điểm (Calculator) và kết nối trực tiếp Google Sheets.',
    bestFor: 'Sinh viên làm bảng hỏi khảo sát định lượng cho nghiên cứu khoa học / khóa luận tốt nghiệp, và Marketer cần nhúng form đăng ký đẹp mắt vào Landing Page.',
    platforms: 'Web Browser, hỗ trợ nhúng Popup, Standard Iframe hoặc Full-page link',
    vietnameseSupport: 'Hỗ trợ 100% tiếng Việt, cho phép tùy chỉnh toàn bộ chữ trên nút bấm và thông báo lỗi sang tiếng Việt.',
    studentPerk: 'Trong khi Typeform giới hạn bản miễn phí chỉ cho phép nhận 10 lượt trả lời/tháng, Tally cho phép sinh viên thu thập hàng nghìn phiếu khảo sát hoàn toàn miễn phí cùng đầy đủ tính năng rẽ nhánh câu hỏi gạn lọc (Screening Questions).',
    useCases: [
      'Thiết kế bảng hỏi khảo sát nghiên cứu thị trường (200–500 mẫu) có câu hỏi gạn lọc rẽ nhánh thông minh và thang đo Likert 5 mức độ.',
      'Tạo bài trắc nghiệm tương tác (Interactive Quiz Marketing) tính điểm tự động để thu hút khách hàng để lại email trên Landing Page.'
    ],
    quickSteps: [
      'Truy cập tally.so, tạo biểu mẫu mới và gõ trực tiếp tiêu đề cùng câu hỏi giống như đang soạn văn bản trên Notion (gõ phím `/` để chèn các loại câu hỏi).',
      'Sử dụng lệnh `/Conditional logic` để thiết lập điều kiện rẽ nhánh (ví dụ: nếu người trả lời chọn "Chưa từng sử dụng sản phẩm" thì chuyển thẳng tới trang cảm ơn).',
      'Vào tab Integrations sau khi xuất bản để bấm kết nối 1-click đổ toàn bộ câu trả lời theo thời gian thực vào file Google Sheets hoặc Notion.',
      'Copy đường link rút gọn hoặc mã Embed để nhúng trực tiếp vào trang Landing Page của dự án.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thiết kế 1 bảng khảo sát nghiên cứu hành vi người tiêu dùng trên Tally có sử dụng ít nhất 1 điều kiện rẽ nhánh (Conditional Logic) và kết nối tự động đổ dữ liệu sạch sang Google Sheets.',
    pros: [
      'Giao diện tối giản, hiện đại trên điện thoại giúp tỷ lệ người dùng hoàn thành hết bảng khảo sát (Completion Rate) cao hơn hẳn biểu mẫu truyền thống.',
      'Chính sách miễn phí không giới hạn số lượt phản hồi và kết nối trực tiếp Google Sheets, Notion, Webhook (n8n).'
    ],
    limitations: 'Ở gói miễn phí có gắn một huy hiệu nhỏ "Made with Tally" ở cuối trang cảm ơn.',
    studentTip: 'Khi đi phát phiếu khảo sát khóa luận hoặc môn Nghiên cứu Marketing, dùng Tally thay cho form truyền thống sẽ tạo thiện cảm chuyên nghiệp và tăng tỷ lệ đáp viên trả lời trọn vẹn hơn.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot Form phù hợp khi bạn muốn lưu người điền vào hệ thống Sales CRM để chăm sóc lâu dài, còn Tally vượt trội cho khảo sát nghiên cứu thị trường nhiều câu hỏi.' }
    ],
    faqs: [
      {
        q: 'Tally Forms bản miễn phí có giới hạn bao nhiêu người trả lời khảo sát trong một tháng không?',
        a: 'Không giới hạn (Unlimited submissions) theo chính sách sử dụng hợp lý của Tally. Sinh viên có thể yên tâm thu thập 300, 500 hay hàng nghìn phiếu khảo sát cho đề tài nghiên cứu mà không sợ form bị khóa giữa chừng như Typeform.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  }
];

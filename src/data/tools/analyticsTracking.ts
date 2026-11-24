import { MarketingTool } from '../../types';

export const analyticsTrackingTools: MarketingTool[] = [
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
        a: 'Bạn có thể truy cập tài khoản GA4 Demo chính thức của Google (dữ liệu thật từ cửa hàng Google Merchandise Store) hoàn toàn miễn phí để luyện đọc báo cáo và dựng phễu.'
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
        a: 'Không. GTM chỉ là công cụ trung gian giúp cài đặt và gửi dữ liệu sự kiện, còn GA4 là nơi lưu trữ và tổng hợp dữ liệu đó thành biểu đồ báo cáo.'
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
    id: 70,
    slug: 'google-campaign-url-builder',
    name: 'Google Campaign URL Builder',
    tagline: 'Tạo liên kết gắn thẻ UTM chuẩn xác để đo lường từng kênh trên GA4',
    excerpt: 'Công cụ chính chủ Google giúp tạo URL gắn tham số utm_source, utm_medium, utm_campaign không bị sai chính tả làm vỡ dữ liệu GA4.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%, không cần đăng nhập.',
    level: 'Cơ bản',
    officialUrl: 'https://ga-dev-tools.google/campaign-url-builder/',
    tags: ['UTM', 'GA4', 'Attribution', 'Campaign Tracking'],
    whatIsIt: 'Campaign URL Builder là công cụ chính thức trong bộ Google Analytics Demos & Tools giúp Marketer gắn các tham số chuẩn (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) vào cuối đường link trước khi chia sẻ lên Facebook, Email, QR Code hoặc KOL.',
    bestFor: 'Mọi sinh viên Digital Marketing chạy chiến dịch đa kênh cần tách biệt lưu lượng từ bài Seeding, Bio TikTok, Email và Quảng cáo.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ mọi URL; lưu ý luôn nhập giá trị UTM bằng chữ thường không dấu (ví dụ: `facebook`, `cpc`, `tet_2026`).',
    studentPerk: 'Miễn phí 100% và tích hợp nút rút gọn link trực tiếp.',
    useCases: [
      'Tạo link UTM riêng cho từng KOC/KOL hoặc từng bài đăng Facebook để biết ai mang về nhiều đơn hàng nhất trên GA4.',
      'Gắn UTM vào mã QR Code in trên tờ rơi/standee sự kiện để đo lượng khách quét mã thực tế.'
    ],
    pros: [
      'Tránh lỗi gõ sai cú pháp `?` hoặc `&` khi nối tham số URL bằng tay.',
      'Chuẩn hóa quy tắc đặt tên nguồn kênh (Default Channel Grouping) của GA4.'
    ],
    limitations: 'Không lưu lịch sử các link đã tạo (nên lưu kèm vào một file Google Sheets quản lý UTM chung của nhóm).',
    studentTip: 'Luôn viết chữ thường không dấu cho toàn bộ tham số UTM (vì GA4 phân biệt chữ hoa `Facebook` và chữ thường `facebook` thành 2 dòng riêng biệt).',
    verifiedAt: '2026-11-24'
  },
  {
    id: 71,
    slug: 'hotjar',
    name: 'Hotjar',
    tagline: 'Bản đồ nhiệt Heatmap, Session Recording & Khảo sát phản hồi ngay trên web',
    excerpt: 'Nền tảng phân tích hành vi người dùng (Behavior Analytics) nổi tiếng kết hợp Heatmap và hộp khảo sát ý kiến (Feedback Polls) ngay trên Landing Page.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí giới hạn 35 phiên ghi hình/ngày (~1.050 phiên/tháng); các gói Plus/Business trả phí theo lưu lượng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.hotjar.com/',
    tags: ['Heatmap', 'UX', 'CRO', 'User Feedback'],
    whatIsIt: 'Hotjar là phần mềm phân tích hành vi và lắng nghe phản hồi người dùng trên website thông qua Heatmap, bản ghi phiên thao tác và widget khảo sát nhanh ngay góc màn hình.',
    bestFor: 'UX Researcher, CRO Specialist cần kết hợp cả dữ liệu quan sát (Heatmap) và câu hỏi khảo sát trực tiếp (On-site Survey).',
    platforms: 'Web Browser, GTM Integration',
    vietnameseSupport: 'Hỗ trợ tạo câu hỏi khảo sát tiếng Việt ngay trên trang web.',
    studentPerk: 'Gói Basic miễn phí đủ dùng cho các Landing Page dự án quy mô nhỏ (< 35 lượt truy cập/ngày).',
    useCases: [
      'Đặt hộp khảo sát nhỏ ở góc dưới Landing Page hỏi: "Điều gì khiến bạn chưa quyết định đăng ký hôm nay?"',
      'Xem bản đồ nhiệt tương tác trên các trang có tỷ lệ thoát cao.'
    ],
    pros: [
      'Tính năng Survey/Feedback trực tiếp trên web rất mạnh cho nghiên cứu định tính UX.',
      'Giao diện trực quan, dễ làm quen.'
    ],
    limitations: 'Gói miễn phí giới hạn 35 phiên/ngày (nếu cần không giới hạn hãy dùng Microsoft Clarity).',
    studentTip: 'Dùng Microsoft Clarity cho Heatmap & Recording không giới hạn, và dùng Hotjar bản Free khi cần đặt bảng hỏi khảo sát popup ngay trên website.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 72,
    slug: 'mixpanel',
    name: 'Mixpanel',
    tagline: 'Phân tích hành vi người dùng chuyên sâu cho Web App, SaaS & Ứng dụng di động',
    excerpt: 'Công cụ Product Analytics hàng đầu giúp theo dõi tỷ lệ giữ chân (Retention Cohort), phễu chuyển đổi từng bước và hành trình người dùng trong App.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cực kỳ hào phóng: miễn phí lên tới 20 triệu sự kiện/tháng.',
    level: 'Nâng cao',
    officialUrl: 'https://mixpanel.com/',
    tags: ['Product Analytics', 'Retention', 'Cohort', 'Funnel'],
    whatIsIt: 'Mixpanel là nền tảng phân tích sản phẩm số (Product Analytics) chuyên theo dõi hành động chi tiết của từng người dùng đã đăng nhập, nổi bật với báo cáo Retention (tỷ lệ quay lại theo tuần/tháng) và Flows.',
    bestFor: 'Product Marketer, Growth Hacker làm việc với Mobile App, SaaS hoặc sàn Thương mại điện tử.',
    platforms: 'Web Browser, iOS/Android SDK, JavaScript/Python API',
    vietnameseSupport: 'Hỗ trợ hiển thị dữ liệu sự kiện tiếng Việt.',
    studentPerk: 'Gói Free 20 triệu sự kiện/tháng thừa sức cho các đồ án khởi nghiệp xây dựng Web App hoặc Mobile App.',
    useCases: [
      'Đo lường tỷ lệ giữ chân người dùng (Day 1, Day 7, Day 30 Retention) của ứng dụng di động.',
      'Phân tích hành động "Aha! Moment" nào khiến người dùng mới ở lại sử dụng lâu dài.'
    ],
    pros: [
      'Truy vấn biểu đồ phễu và Cohort nhanh hơn hẳn giao diện Explore của GA4.',
      'Gói miễn phí 20 triệu events/tháng cực lớn.'
    ],
    limitations: 'Cần phối hợp với lập trình viên để gắn SDK bắn sự kiện chuẩn xác.',
    studentTip: 'Nếu nhóm bạn làm đồ án về Mobile App hoặc SaaS, biết phân tích biểu đồ Retention Cohort trên Mixpanel là điểm cộng cực lớn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 73,
    slug: 'posthog',
    name: 'PostHog',
    tagline: 'Nền tảng Product Analytics, Session Replay & A/B Testing mã nguồn mở All-in-One',
    excerpt: 'Tích hợp 5 công cụ trong 1: Phân tích sự kiện, Quay màn hình, Bản đồ nhiệt, Khảo sát và Thử nghiệm A/B Testing miễn phí hạn mức cực cao.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free hàng tháng rất lớn: 1 triệu sự kiện, 5.000 bản ghi phiên và 1 triệu Feature Flags/A/B Testing miễn phí.',
    level: 'Nâng cao',
    officialUrl: 'https://posthog.com/',
    tags: ['Open Source', 'A/B Testing', 'Product Analytics', 'Session Replay'],
    whatIsIt: 'PostHog là bộ công cụ phân tích sản phẩm và tối ưu tăng trưởng (Growth Engineering) mã nguồn mở tất-cả-trong-một, kết hợp Product Analytics, Session Replay, Feature Flags và Experiments (A/B Testing).',
    bestFor: 'Growth Marketer, Startup công nghệ và sinh viên phát triển sản phẩm Web/App bằng React/Next.js.',
    platforms: 'Web Cloud (US/EU), Self-hosted Docker, SDK Web/Mobile',
    vietnameseSupport: 'Ghi nhận đầy đủ văn bản tiếng Việt trên web.',
    studentPerk: 'Hạn mức miễn phí hàng tháng rất cao (1 triệu events + 5.000 recordings) không cần nhập thẻ tín dụng.',
    useCases: [
      'Chạy thử nghiệm A/B Testing chia 50/50 giao diện nút CTA hoặc bảng giá ngay trên Web App.',
      'Xem bản ghi màn hình kết hợp nhật ký sự kiện để tìm lỗi UX.'
    ],
    pros: [
      'Thay thế cùng lúc cả Mixpanel, Hotjar và Optimizely trên một giao diện.',
      'Không cần thẻ tín dụng cho gói Free.'
    ],
    limitations: 'Giao diện thiên về kỹ thuật và đội ngũ sản phẩm công nghệ.',
    studentTip: 'Nếu bạn tự code Landing Page hoặc Web App bằng React/Vite, cài PostHog chỉ mất 3 dòng code để có cả Analytics lẫn A/B Testing.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 74,
    slug: 'meta-pixel-helper',
    name: 'Meta Pixel Helper (Chrome Extension)',
    tagline: 'Kiểm tra mã Meta Pixel & Sự kiện chuyển đổi Facebook ngay trên trình duyệt',
    excerpt: 'Tiện ích chính chủ Meta giúp kiểm tra tức thì xem website đã gắn đúng Facebook Pixel chưa và sự kiện PageView, ViewContent, Lead, Purchase có bắn chuẩn không.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính chủ Meta.',
    level: 'Cơ bản',
    officialUrl: 'https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc',
    tags: ['Facebook Pixel', 'Meta Ads', 'Tracking QA', 'Chrome Extension'],
    whatIsIt: 'Meta Pixel Helper là tiện ích mở rộng trình duyệt chính thức của Meta, giúp Performance Marketer phát hiện và kiểm lỗi (Debug) các sự kiện Meta Pixel đang chạy trên bất kỳ trang web nào.',
    bestFor: 'Facebook Ads Marketer và sinh viên chạy chiến dịch chuyển đổi (Conversions) về Landing Page.',
    platforms: 'Google Chrome Extension',
    vietnameseSupport: 'Hoạt động trên mọi website.',
    studentPerk: 'Miễn phí 100%, giúp kiểm tra cả cách đối thủ đang gắn Pixel theo dõi sự kiện nào trên trang bán hàng của họ.',
    useCases: [
      'Xác minh nút "Đăng ký ngay" trên Landing Page đã bắn sự kiện `Lead` hoặc `CompleteRegistration` về trình quản lý quảng cáo Meta chưa.',
      'Kiểm tra lỗi trùng lặp Pixel (bắn 2 lần cùng 1 sự kiện) gây sai lệch số liệu báo cáo.'
    ],
    pros: [
      'Cực kỳ nhẹ, hiển thị ngay con số báo hiệu có bao nhiêu sự kiện vừa bắn trên biểu tượng góc trình duyệt.',
      'Bắt buộc phải có khi chạy quảng cáo chuyển đổi Meta Ads.'
    ],
    limitations: 'Lưu ý tắt các trình chặn quảng cáo (AdBlock) trên tab đang kiểm tra vì AdBlock sẽ chặn Pixel.',
    studentTip: 'Mỗi khi điền thử Form trên Landing Page, hãy mở Meta Pixel Helper xem sự kiện `Lead` có hiện dấu tích xanh không rồi mới nạp tiền chạy Ads.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 75,
    slug: 'tiktok-pixel-helper',
    name: 'TikTok Pixel Helper',
    tagline: 'Kiểm tra cài đặt mã TikTok Pixel & Sự kiện chuyển đổi trên Landing Page',
    excerpt: 'Tiện ích chính chủ TikTok for Business giúp xác minh mã Pixel và các sự kiện AddToCart, SubmitForm, CompletePayment hoạt động chính xác.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính chủ TikTok.',
    level: 'Cơ bản',
    officialUrl: 'https://chromewebstore.google.com/detail/tiktok-pixel-helper/aelgobmabdmlfmiblddjfnjodalhidnn',
    tags: ['TikTok Pixel', 'TikTok Ads', 'Conversion Tracking', 'Chrome Extension'],
    whatIsIt: 'TikTok Pixel Helper là công cụ chẩn đoán cài đặt TikTok Pixel trên trình duyệt Chrome, hiển thị chi tiết ID Pixel, trạng thái kích hoạt và tham số giá trị đơn hàng của từng sự kiện.',
    bestFor: 'TikTok Ads Marketer và sinh viên chạy quảng cáo chuyển đổi TikTok về Landing Page.',
    platforms: 'Google Chrome Extension',
    vietnameseSupport: 'Hoạt động trên mọi website.',
    studentPerk: 'Miễn phí 100%, giao diện kiểm lỗi từng bước rất rõ ràng.',
    useCases: [
      'Kiểm tra xem sự kiện `SubmitForm` hoặc `CompletePayment` đã bắn đủ tham số `value` và `currency` (VND) chưa.',
      'Phát hiện lỗi cài thiếu mã Pixel trên trang cảm ơn (Thank-you page).'
    ],
    pros: [
      'Báo lỗi cụ thể và gợi ý cách khắc phục ngay bên dưới từng sự kiện.',
      'Không cần mở TikTok Ads Manager vẫn kiểm tra nhanh được.'
    ],
    limitations: 'Chỉ kiểm tra được Pixel phía trình duyệt (Browser-side Pixel).',
    studentTip: 'Kết hợp dùng GTM để gắn cả GA4, Meta Pixel và TikTok Pixel, sau đó dùng bộ đôi Pixel Helper kiểm tra chéo một lượt.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 76,
    slug: 'power-bi-desktop',
    name: 'Microsoft Power BI Desktop',
    tagline: 'Phân tích dữ liệu lớn & Thiết kế Dashboard BI chuyên nghiệp cấp doanh nghiệp',
    excerpt: 'Công cụ Business Intelligence hàng đầu của Microsoft để xử lý hàng trăm nghìn dòng dữ liệu bán hàng, CRM và vẽ báo cáo tương tác.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Phần mềm Power BI Desktop miễn phí 100% để phân tích và thiết kế báo cáo trên máy tính; chia sẻ online cần tài khoản Pro/tổ chức.',
    level: 'Nâng cao',
    officialUrl: 'https://powerbi.microsoft.com/',
    tags: ['Business Intelligence', 'Data Analysis', 'Dashboard', 'DAX'],
    whatIsIt: 'Microsoft Power BI Desktop là phần mềm phân tích dữ liệu và trực quan hóa chuẩn doanh nghiệp, hỗ trợ làm sạch dữ liệu (Power Query), liên kết nhiều bảng (Data Modeling) và tính toán chỉ số bằng ngôn ngữ DAX.',
    bestFor: 'Marketing Analyst, Business Analyst, E-commerce Data Analyst và sinh viên làm đề tài phân tích dữ liệu khách hàng/RFM.',
    platforms: 'Windows Desktop (miễn phí)',
    vietnameseSupport: 'Hỗ trợ đọc dữ liệu tiếng Việt UTF-8 từ Excel/CSV/SQL chuẩn xác.',
    studentPerk: 'Power BI Desktop miễn phí 100% và sinh viên có email `.edu.vn` thường đăng nhập được Power BI Service qua tài khoản Microsoft 365 của trường.',
    useCases: [
      'Phân tích phân khúc khách hàng RFM (Recency, Frequency, Monetary) từ file dữ liệu giao dịch hàng chục nghìn dòng.',
      'Tổng hợp báo cáo doanh thu đa kênh (Shopee + TikTok Shop + Website) tự động làm sạch bằng Power Query.'
    ],
    pros: [
      'Xử lý tập dữ liệu lớn mượt mà hơn Excel rất nhiều.',
      'Kỹ năng Power BI được săn đón cực cao ở các vị trí Marketing Analyst / Trade Marketing.'
    ],
    limitations: 'Bản Desktop chỉ hỗ trợ cài đặt trực tiếp trên hệ điều hành Windows.',
    studentTip: 'Nếu muốn theo hướng Data/Marketing Analyst, hãy tải tập dữ liệu bán hàng mẫu trên Kaggle và dựng 1 Dashboard Power BI đưa vào Portfolio.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 77,
    slug: 'tableau-public',
    name: 'Tableau Public',
    tagline: 'Trực quan hóa dữ liệu nghệ thuật & Chia sẻ Portfolio phân tích công khai',
    excerpt: 'Phiên bản miễn phí của nền tảng BI nổi tiếng Tableau, cho phép tạo các biểu đồ tương tác tuyệt đẹp và nhúng trực tiếp vào CV/Portfolio.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Tableau Public miễn phí 100% trọn đời (dữ liệu xuất bản được lưu công khai trên hồ sơ Tableau Public).',
    level: 'Trung bình',
    officialUrl: 'https://public.tableau.com/',
    tags: ['Data Visualization', 'Portfolio', 'BI', 'Charts'],
    whatIsIt: 'Tableau Public là phiên bản miễn phí của phần mềm phân tích dữ liệu trực quan Tableau, cho phép người dùng kết nối Excel/CSV/Google Sheets để tạo Dashboard tương tác và xuất bản công khai lên mạng.',
    bestFor: 'Sinh viên xây dựng Portfolio Data Storytelling, Marketing Researcher muốn trình bày bản đồ và biểu đồ đẹp mắt.',
    platforms: 'Windows, macOS, Web Browser',
    vietnameseSupport: 'Hỗ trợ dữ liệu tiếng Việt đầy đủ.',
    studentPerk: 'Ngoài bản Tableau Public miễn phí 100%, chương trình "Tableau for Students" tặng 1 năm bản quyền **Tableau Desktop** đầy đủ miễn phí cho sinh viên xác minh thẻ sinh viên/email trường.',
    useCases: [
      'Xây dựng các Dashboard phân tích hành vi người tiêu dùng đăng lên hồ sơ cá nhân để gây ấn tượng với nhà tuyển dụng.',
      'Vẽ bản đồ phân bố khách hàng hoặc biểu đồ Cohort đẹp mắt cho báo cáo nghiên cứu.'
    ],
    pros: [
      'Chất lượng thẩm mỹ biểu đồ thuộc hàng đẹp nhất trong các công cụ BI.',
      'Hỗ trợ cả macOS lẫn Windows và có gói miễn phí bản quyền 1 năm cho sinh viên.'
    ],
    limitations: 'Bản Public chỉ lưu tệp công khai lên đám mây (không dùng cho dữ liệu mật nội bộ công ty).',
    studentTip: 'Đăng ký chương trình "Tableau for Students" để nhận key bản quyền Tableau Desktop 1 năm miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 78,
    slug: 'amplitude',
    name: 'Amplitude',
    tagline: 'Phân tích hành trình sản phẩm số & Tối ưu tỷ lệ giữ chân người dùng',
    excerpt: 'Công cụ Product Analytics được nhiều kỳ lân công nghệ sử dụng để đo lường hành trình chuyển đổi và phân khúc hành vi người dùng.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Starter miễn phí lên tới 50.000 người dùng hoạt động hàng tháng (MTUs) kèm Session Replay cơ bản.',
    level: 'Nâng cao',
    officialUrl: 'https://amplitude.com/',
    tags: ['Product Analytics', 'User Journey', 'Retention', 'Growth'],
    whatIsIt: 'Amplitude là nền tảng phân tích kỹ thuật số chuyên sâu giúp các đội ngũ Product và Growth Marketing hiểu rõ chuỗi hành động dẫn đến chuyển đổi hoặc rời bỏ của người dùng trên Web và App.',
    bestFor: 'Growth Marketer, Product Manager làm việc tại các công ty App, Fintech, Edtech, E-commerce.',
    platforms: 'Web Browser, iOS/Android/Web SDK',
    vietnameseSupport: 'Hỗ trợ dữ liệu tiếng Việt.',
    studentPerk: 'Gói Starter miễn phí cho phép theo dõi tới 50.000 người dùng/tháng — rất lớn cho dự án thực tế.',
    useCases: [
      'Vẽ biểu đồ Pathfinder xem người dùng đi qua những màn hình nào trước khi thanh toán hoặc thoát app.',
      'Phân nhóm người dùng theo tần suất sử dụng để gửi thông báo đẩy (Push Notification) đúng lúc.'
    ],
    pros: [
      'Phân tích hành trình (Pathfinder) và Retention cực kỳ mạnh mẽ.',
      'Gói miễn phí tính theo MTUs rất hào phóng.'
    ],
    limitations: 'Giao diện và thuật ngữ chuyên sâu về Product Analytics cần thời gian học.',
    studentTip: 'Có thể học miễn phí các khóa trên Amplitude Academy để hiểu tư duy đo lường Product-led Growth.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 79,
    slug: 'matomo',
    name: 'Matomo Analytics',
    tagline: 'Nền tảng phân tích web mã nguồn mở thay thế GA4 bảo mật dữ liệu 100%',
    excerpt: 'Giải pháp thay thế Google Analytics phổ biến nhất tại châu Âu khi doanh nghiệp muốn toàn quyền sở hữu dữ liệu trên máy chủ riêng và tuân thủ GDPR.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% khi tự cài đặt trên hosting/VPS (Matomo On-Premise); bản Cloud dùng thử miễn phí 21 ngày.',
    level: 'Trung bình',
    officialUrl: 'https://matomo.org/',
    tags: ['Open Source', 'Privacy Analytics', 'GA Alternative', 'Self-hosted'],
    whatIsIt: 'Matomo là nền tảng phân tích website mã nguồn mở hàng đầu thế giới, cho phép doanh nghiệp tự lưu trữ toàn bộ dữ liệu hành vi khách hàng trên máy chủ riêng mà không chia sẻ với bên thứ ba.',
    bestFor: 'Doanh nghiệp coi trọng bảo mật dữ liệu (Fintech, Y tế, Giáo dục) và sinh viên muốn tìm hiểu giải pháp thay thế GA4.',
    platforms: 'Self-hosted (PHP/MySQL, WordPress Plugin) hoặc Cloud',
    vietnameseSupport: 'Hỗ trợ giao diện tiếng Việt.',
    studentPerk: 'Cài đặt miễn phí 100% dưới dạng Plugin ngay trong WordPress mà không bị giới hạn dữ liệu.',
    useCases: [
      'Cài đặt làm hệ thống đo lường song song với GA4 trên website WordPress.',
      'Tìm hiểu giao diện báo cáo kiểu truyền thống (gần giống Universal Analytics cũ) dễ đọc cho người mới.'
    ],
    pros: [
      'Sở hữu 100% dữ liệu thô, không bị lấy mẫu (Data Sampling) làm sai lệch số.',
      'Ít bị các trình chặn quảng cáo chặn hơn Google Analytics.'
    ],
    limitations: 'Nếu tự host trên server yếu và lượng traffic quá lớn sẽ tốn tài nguyên máy chủ.',
    studentTip: 'Nếu dự án của bạn dùng WordPress và thấy GA4 quá khó đọc ban đầu, cài thêm plugin Matomo là thấy ngay bảng thống kê trực quan.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 80,
    slug: 'plausible-analytics',
    name: 'Plausible Analytics',
    tagline: 'Công cụ đo lường web siêu nhẹ (< 1KB), không dùng Cookie & giao diện 1 trang',
    excerpt: 'Loại bỏ sự rườm rà của GA4: hiển thị toàn bộ traffic, nguồn giới thiệu, UTM và mục tiêu chuyển đổi trên duy nhất 1 màn hình tối giản.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Mã nguồn mở tự host miễn phí; bản Cloud dùng thử miễn phí 30 ngày (trả phí từ ~$9/tháng).',
    level: 'Cơ bản',
    officialUrl: 'https://plausible.io/',
    tags: ['Lightweight Analytics', 'Cookieless', 'Privacy', 'Dashboard'],
    whatIsIt: 'Plausible Analytics là công cụ phân tích lưu lượng truy cập web mã nguồn mở siêu nhẹ (script chỉ dưới 1KB), không sử dụng Cookie theo dõi nên không cần banner xin phép Cookie phức tạp.',
    bestFor: 'Blogger, Indie Hacker và Marketer thích bảng báo cáo 1 trang tối giản, dễ đọc trong 5 giây.',
    platforms: 'Web Cloud, Self-hosted Docker',
    vietnameseSupport: 'Hiển thị chuẩn mọi URL và chiến dịch tiếng Việt.',
    studentPerk: 'Dùng thử 30 ngày miễn phí không cần thẻ tín dụng hoặc tự cài Docker miễn phí.',
    useCases: [
      'Theo dõi nhanh traffic bài viết blog và nguồn giới thiệu từ mạng xã hội trên 1 màn hình duy nhất.',
      'Đảm bảo tốc độ tải trang web đạt điểm tối đa 100/100 vì script siêu nhẹ.'
    ],
    pros: [
      'Giao diện đẹp, sạch và dễ hiểu nhất trong các công cụ Web Analytics.',
      'Không làm chậm website.'
    ],
    limitations: 'Không phân tích phễu đa bước sâu như GA4 hoặc Mixpanel.',
    studentTip: 'Hãy xem bản Live Demo công khai trên trang chủ Plausible để học cách thiết kế một bảng báo cáo KPI tinh gọn trên 1 màn hình.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 81,
    slug: 'vwo-ab-testing',
    name: 'VWO (Visual Website Optimizer)',
    tagline: 'Nền tảng thử nghiệm A/B Testing & Tối ưu tỷ lệ chuyển đổi (CRO) trực quan',
    excerpt: 'Cho phép chỉnh sửa màu nút, tiêu đề, bố cục Landing Page bằng kéo thả và chạy chia lưu lượng A/B Test để chứng minh phương án nào chốt đơn cao hơn.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Starter miễn phí cho phép thử nghiệm A/B Testing lên tới 50.000 lượt truy cập/tháng (50K MTUs).',
    level: 'Trung bình',
    officialUrl: 'https://vwo.com/',
    tags: ['A/B Testing', 'CRO', 'Landing Page', 'Experimentation'],
    whatIsIt: 'VWO là nền tảng thử nghiệm và tối ưu tỷ lệ chuyển đổi (CRO) hàng đầu thế giới, giúp Marketer tạo nhiều phiên bản giao diện Landing Page bằng trình kéo thả Visual Editor và kiểm định ý nghĩa thống kê (Statistical Significance).',
    bestFor: 'CRO Specialist, Performance Marketer và sinh viên học cách chạy thử nghiệm A/B chuẩn khoa học.',
    platforms: 'Web Browser (Cloud), GTM Integration',
    vietnameseSupport: 'Chỉnh sửa và hiển thị văn bản tiếng Việt trên Visual Editor bình thường.',
    studentPerk: 'Gói VWO Testing Starter miễn phí tới 50.000 lượt truy cập/tháng — thừa sức chạy A/B Test cho website đồ án.',
    useCases: [
      'Chạy A/B Test so sánh 2 câu tiêu đề Hero hoặc 2 màu nút CTA xem phiên bản nào có tỷ lệ bấm cao hơn.',
      'Tính toán độ tin cậy thống kê (p-value / Statistical Significance) trước khi kết luận phương án thắng.'
    ],
    pros: [
      'Trình chỉnh sửa trực quan (Visual Editor) không cần biết lập trình vẫn đổi được chữ/màu để test.',
      'Tính toán sẵn xác suất thắng cuộc chuẩn thống kê.'
    ],
    limitations: 'Giao diện nhiều tính năng nâng cao cần thời gian làm quen.',
    studentTip: 'Nếu muốn chạy A/B Testing cho Landing Page nhưng chưa có nhiều traffic, bạn cũng có thể dùng công cụ tính cỡ mẫu (Sample Size Calculator) miễn phí ngay trên website VWO.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 82,
    slug: 'crazy-egg',
    name: 'Crazy Egg',
    tagline: 'Bản đồ nhiệt Confetti (Phân tách lượt click theo nguồn traffic) & A/B Testing',
    excerpt: 'Nổi tiếng với báo cáo Confetti Heatmap giúp thấy người dùng từ Facebook bấm khác người dùng từ Google Search ở điểm nào trên cùng 1 trang.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 30 ngày đầy đủ tính năng; các gói trả phí từ ~$29–$49/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.crazyegg.com/',
    tags: ['Heatmap', 'Confetti Report', 'CRO', 'UX Analytics'],
    whatIsIt: 'Crazy Egg là một trong những công cụ Heatmap tiên phong, nổi bật với báo cáo Confetti (chấm màu lượt click phân loại theo nguồn traffic, thiết bị, trình duyệt) và Scrollmap.',
    bestFor: 'CRO Specialist và Marketer muốn so sánh hành vi bấm chuột của từng tệp nguồn traffic khác nhau.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ hiển thị trên mọi website tiếng Việt.',
    studentPerk: 'Gói dùng thử 30 ngày miễn phí trọn vẹn cho một dự án đồ án.',
    useCases: [
      'Dùng báo cáo Confetti kiểm tra xem khách từ quảng cáo Facebook vs khách từ Google SEO bấm vào khu vực nào khác nhau.',
      'Tìm vùng "điểm chết" bị bỏ qua trên trang sản phẩm.'
    ],
    pros: [
      'Báo cáo Confetti phân tách theo nguồn traffic rất độc đáo.',
      'Dễ cài đặt chỉ với 1 đoạn script.'
    ],
    limitations: 'Không có gói miễn phí vĩnh viễn sau 30 ngày.',
    studentTip: 'Phù hợp để trải nghiệm trong giai đoạn chạy chiến dịch 2–4 tuần của đồ án môn học rồi xuất báo cáo.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 83,
    slug: 'google-tag-assistant',
    name: 'Tag Assistant Companion',
    tagline: 'Gỡ lỗi & Kiểm tra trực tiếp từng thẻ GA4, GTM, Google Ads trên trình duyệt',
    excerpt: 'Tiện ích bổ sung chính chủ Google giúp chế độ Preview của Google Tag Manager hoạt động ổn định, không bị chặn bởi cửa sổ bật lên.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính chủ Google.',
    level: 'Trung bình',
    officialUrl: 'https://tagassistant.google.com/',
    tags: ['GTM Debug', 'Tag Assistant', 'GA4', 'Chrome Extension'],
    whatIsIt: 'Tag Assistant Companion kết hợp cùng trang `tagassistant.google.com` là công cụ gỡ lỗi chính thức của Google cho phép theo dõi luồng sự kiện Data Layer và xác minh thẻ nào đã bắn (Fired) hoặc chưa bắn (Not Fired) theo từng cú nhấp chuột.',
    bestFor: 'Mọi sinh viên và chuyên viên cài đặt Google Tag Manager & GA4.',
    platforms: 'Web Browser + Google Chrome Extension',
    vietnameseSupport: 'Hoạt động trên mọi website.',
    studentPerk: 'Miễn phí 100%, bắt buộc cần có để làm bài tập thực hành gắn sự kiện GTM.',
    useCases: [
      'Kiểm tra xem biến `Click Text` hoặc sự kiện `form_submit` có truyền đúng dữ liệu vào Data Layer không.',
      'Chụp ảnh minh chứng Debug thành công cho bài nộp thực hành đo lường.'
    ],
    pros: [
      'Hiển thị rõ từng bước sự kiện (Summary Timeline) bên cột trái.',
      'Chẩn đoán chính xác vì sao một Trigger không kích hoạt.'
    ],
    limitations: 'Chỉ dùng để kiểm thử trước khi xuất bản (không lưu trữ báo cáo dài hạn).',
    studentTip: 'Luôn cài Tag Assistant Companion lên Chrome trước khi bấm nút Preview trong Google Tag Manager.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 84,
    slug: 'supermetrics',
    name: 'Supermetrics',
    tagline: 'Tự động kéo dữ liệu Facebook Ads, TikTok Ads, Shopee vào Google Sheets & Looker Studio',
    excerpt: 'Cầu nối dữ liệu hàng đầu giúp Media Buyer đồng bộ tự động chi phí, lượt hiển thị và chuyển đổi từ hàng chục nền tảng quảng cáo vào 1 bảng báo cáo.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 14 ngày đầy đủ các nguồn kết nối; gói trả phí dành cho Agency/doanh nghiệp.',
    level: 'Nâng cao',
    officialUrl: 'https://supermetrics.com/',
    tags: ['ETL', 'Data Connector', 'Looker Studio', 'Google Sheets'],
    whatIsIt: 'Supermetrics là nền tảng tích hợp dữ liệu Marketing (Marketing Data Pipeline), tự động hút số liệu từ Facebook Ads, TikTok Ads, Google Ads, LinkedIn, Shopee đổ thẳng về Google Sheets, Looker Studio hoặc BigQuery theo lịch hẹn hàng ngày.',
    bestFor: 'Performance Agency, Media Planner và sinh viên tìm hiểu kiến trúc tự động hóa báo cáo đa kênh.',
    platforms: 'Google Sheets Add-on, Looker Studio Connector, Excel, BigQuery',
    vietnameseSupport: 'Hỗ trợ đồng bộ tên chiến dịch tiếng Việt chuẩn xác.',
    studentPerk: '14 ngày dùng thử miễn phí giúp sinh viên trải nghiệm cách một Agency kéo dữ liệu Facebook Ads tự động lên Looker Studio.',
    useCases: [
      'Tạo báo cáo tổng hợp chi phí & ROAS của cả Facebook Ads + TikTok Ads + Google Ads trên cùng 1 Dashboard Looker Studio.',
      'Tự động làm mới dữ liệu Google Sheets mỗi sáng lúc 8h mà không cần tải file CSV thủ công.'
    ],
    pros: [
      'Kết nối hơn 100 nguồn dữ liệu Marketing phổ biến nhất.',
      'Tiết kiệm hàng giờ làm báo cáo thủ công mỗi tuần cho Agency.'
    ],
    limitations: 'Chi phí thuê bao hàng tháng cao đối với cá nhân sinh viên.',
    studentTip: 'Khi làm đồ án, bạn có thể dùng thử 14 ngày của Supermetrics vào giai đoạn chạy chiến dịch thật hoặc tự xuất CSV dán vào Google Sheets để tiết kiệm chi phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 85,
    slug: 'google-bigquery-sandbox',
    name: 'Google BigQuery (Sandbox)',
    tagline: 'Kho dữ liệu đám mây phân tích dữ liệu thô GA4 bằng SQL hoàn toàn miễn phí',
    excerpt: 'Kết nối thẳng GA4 với BigQuery để lưu trữ và truy vấn từng sự kiện thô không bị giới hạn 14 tháng hay lấy mẫu dữ liệu.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Chế độ BigQuery Sandbox miễn phí 100% (10GB lưu trữ + 1TB truy vấn/tháng) không cần nhập thẻ thanh toán.',
    level: 'Nâng cao',
    officialUrl: 'https://cloud.google.com/bigquery/docs/sandbox',
    tags: ['BigQuery', 'SQL', 'GA4 Raw Data', 'Data Warehouse'],
    whatIsIt: 'Google BigQuery là kho dữ liệu đám mây (Cloud Data Warehouse) cho phép xuất dữ liệu thô từng sự kiện từ GA4 sang để truy vấn chuyên sâu bằng SQL và kết hợp với dữ liệu đơn hàng CRM.',
    bestFor: 'Marketing Data Analyst, Technical Marketer và sinh viên chuyên ngành Thương mại điện tử / Phân tích dữ liệu.',
    platforms: 'Google Cloud Console (Web Browser), kết nối Looker Studio & Python',
    vietnameseSupport: 'Lưu trữ và truy vấn dữ liệu tiếng Việt chuẩn UTF-8.',
    studentPerk: 'BigQuery Sandbox miễn phí 10GB lưu trữ và 1TB truy vấn mỗi tháng mà không cần thẻ Visa/Mastercard.',
    useCases: [
      'Xuất dữ liệu thô hàng ngày từ GA4 sang BigQuery để lưu trữ vĩnh viễn.',
      'Dùng ChatGPT/Gemini viết giúp câu lệnh SQL phân tích hành trình mua hàng đa phiên.'
    ],
    pros: [
      'Cho phép sinh viên thực hành SQL trên dữ liệu Marketing thật mà không tốn phí.',
      'Tích hợp nguyên bản 1-click trong phần Admin của GA4.'
    ],
    limitations: 'Đòi hỏi kiến thức cơ bản về cấu trúc bảng và câu lệnh SQL.',
    studentTip: 'Bạn có thể kết nối GA4 vào BigQuery Sandbox ngay hôm nay và dùng bộ dữ liệu công khai `ga4_obfuscated_sample_ecommerce` của Google để luyện SQL.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 86,
    slug: 'heap-analytics',
    name: 'Heap (by Contentsquare)',
    tagline: 'Tự động ghi nhận mọi cú nhấp chuột (Autocapture) không cần gắn thẻ thủ công',
    excerpt: 'Chỉ cần cài 1 đoạn mã duy nhất, Heap tự động thu thập toàn bộ lượt bấm, cuộn, điền form để bạn phân tích ngược về quá khứ bất cứ lúc nào.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí lên tới 10.000 phiên truy cập/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.heap.io/',
    tags: ['Autocapture', 'Product Analytics', 'Funnel', 'UX'],
    whatIsIt: 'Heap là nền tảng phân tích kỹ thuật số nổi bật với công nghệ Autocapture (tự động bắt mọi tương tác trên giao diện web/app), giúp Marketer không bị mất dữ liệu nếu quên gắn sự kiện trước khi tung chiến dịch.',
    bestFor: 'Product Marketer và đội ngũ nhỏ không có lập trình viên hỗ trợ gắn mã sự kiện chi tiết.',
    platforms: 'Web Browser, iOS & Android SDK',
    vietnameseSupport: 'Ghi nhận văn bản nút bấm tiếng Việt.',
    studentPerk: 'Gói Free 10.000 sessions/tháng đủ dùng cho các sản phẩm Web App hoặc Landing Page đồ án.',
    useCases: [
      'Đặt tên và đo lường lượt bấm một nút mới trên web ngay cả khi tuần trước bạn quên tạo thẻ GTM cho nút đó.',
      'Phân tích điểm rơi (Drop-off) trong biểu mẫu đăng ký nhiều bước.'
    ],
    pros: [
      'Không sợ sót dữ liệu vì mọi cú click đều được tự động ghi lại từ ngày đầu tiên.',
      'Tích hợp bản ghi phiên với Contentsquare.'
    ],
    limitations: 'Đặt tên lại các sự kiện tự động trên giao diện web cần thực hiện cẩn thận để tránh rối.',
    studentTip: 'Rất hay để dùng khi bạn mới tung trang web vội mà chưa kịp cấu hình chi tiết từng sự kiện trong GTM.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 87,
    slug: 'google-colab',
    name: 'Google Colab (Python Data Analysis)',
    tagline: 'Chạy Python phân tích dữ liệu khảo sát, RFM & Vẽ biểu đồ miễn phí trên trình duyệt',
    excerpt: 'Môi trường viết và chạy mã Python (Pandas, Matplotlib, Scikit-learn) miễn phí trên đám mây Google, kết hợp AI Gemini viết code tự động cho Marketer.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% với tài khoản Google (có gói Colab Pro nếu cần GPU mạnh hơn).',
    level: 'Nâng cao',
    officialUrl: 'https://colab.research.google.com/',
    tags: ['Python', 'Data Science', 'Survey Analysis', 'Clustering'],
    whatIsIt: 'Google Colaboratory (Colab) là sổ tay lập trình Python trên đám mây Google, tích hợp sẵn AI hỗ trợ viết code giúp Marketer và sinh viên chạy phân tích dữ liệu định lượng, phân cụm khách hàng (K-Means) và vẽ biểu đồ nâng cao không cần cài đặt phần mềm.',
    bestFor: 'Sinh viên làm phân tích dữ liệu khảo sát định lượng, phân khúc khách hàng bằng dữ liệu lớn hoặc phân tích cảm xúc bình luận.',
    platforms: 'Web Browser (Google Drive)',
    vietnameseSupport: 'Xử lý file CSV/Excel tiếng Việt và tích hợp thư viện phân tích tiếng Việt dễ dàng.',
    studentPerk: 'Miễn phí 100%, lưu trữ trực tiếp trên Google Drive và chia sẻ cho giảng viên xem code + biểu đồ cực tiện.',
    useCases: [
      'Làm sạch file khảo sát 500 dòng, kiểm tra độ tin cậy Cronbach’s Alpha hoặc phân cụm K-Means.',
      'Vẽ biểu đồ tương quan, Heatmap ma trận hoặc WordCloud từ bình luận khách hàng.'
    ],
    pros: [
      'Không cần cài đặt Python phức tạp lên máy tính.',
      'Có sẵn trợ lý AI ngay trong ô code giúp sinh viên không rành lập trình vẫn chạy được phân tích.'
    ],
    limitations: 'Phiên làm việc miễn phí sẽ tự ngắt nếu để máy không hoạt động quá lâu.',
    studentTip: 'Hãy tải file Excel khảo sát lên Colab rồi bấm nút "Generate with AI" gõ yêu cầu bằng tiếng Việt để AI tự viết code vẽ biểu đồ cực đẹp.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 88,
    slug: 'jasp-statistics',
    name: 'JASP (Thống kê Mã nguồn mở)',
    tagline: 'Phần mềm phân tích thống kê & kiểm định giả thuyết thay thế SPSS miễn phí 100%',
    excerpt: 'Công cụ thống kê học thuật giao diện đẹp chuẩn APA, hỗ trợ chạy Cronbach’s Alpha, EFA, T-Test, ANOVA, Hồi quy tuyến tính và SEM hoàn toàn miễn phí.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% trọn đời, mã nguồn mở phát triển bởi Đại học Amsterdam.',
    level: 'Trung bình',
    officialUrl: 'https://jasp-stats.org/',
    tags: ['Statistics', 'SPSS Alternative', 'Academic Research', 'SEM'],
    whatIsIt: 'JASP là phần mềm thống kê mã nguồn mở miễn phí được thiết kế để thay thế SPSS với giao diện kéo thả hiện đại, tự động xuất bảng kết quả định dạng chuẩn APA 7 cho nghiên cứu Marketing và khóa luận tốt nghiệp.',
    bestFor: 'Sinh viên làm khóa luận tốt nghiệp, nghiên cứu khoa học sinh viên (NCKH) môn Nghiên cứu Marketing.',
    platforms: 'Windows, macOS, Linux, WebAssembly',
    vietnameseSupport: 'Hỗ trợ đọc dữ liệu CSV tiếng Việt và tên biến có dấu.',
    studentPerk: 'Miễn phí 100%, hợp pháp bản quyền (không phải dùng phần mềm bẻ khóa), bảng kết quả xuất ra copy dán thẳng vào Word chuẩn APA.',
    useCases: [
      'Chạy kiểm định độ tin cậy thang đo (Reliability / Cronbach’s Alpha) và phân tích nhân tố khám phá (EFA).',
      'Kiểm định mô hình hồi quy tuyến tính đa biến, ANOVA và mô hình cấu trúc tuyến tính (SEM).'
    ],
    pros: [
      'Bảng kết quả trình bày sẵn theo chuẩn tạp chí quốc tế APA.',
      'Hỗ trợ cả thống kê truyền thống (Frequentist) lẫn Bayes.'
    ],
    limitations: 'File dữ liệu đầu vào nên xuất sang định dạng `.csv` (UTF-8) từ Excel/Google Sheets trước khi mở.',
    studentTip: 'Nếu máy Mac hoặc Windows của bạn cài SPSS bị lỗi, JASP là lựa chọn miễn phí hợp pháp tuyệt vời nhất để chạy số liệu khóa luận.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 89,
    slug: 'jamovi',
    name: 'jamovi',
    tagline: 'Phần mềm xử lý số liệu khảo sát định lượng trực quan (nền tảng R)',
    excerpt: 'Giao diện bảng tính thân thiện giống Excel/SPSS chạy trên lõi ngôn ngữ R, giúp sinh viên chạy kiểm định thống kê nhanh và chính xác.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% mã nguồn mở (bản Desktop cài đặt trực tiếp hoặc chạy thử trên đám mây).',
    level: 'Trung bình',
    officialUrl: 'https://www.jamovi.org/',
    tags: ['Statistics', 'Quantitative Research', 'Survey', 'R-based'],
    whatIsIt: 'jamovi là phần mềm thống kê mã nguồn mở xây dựng trên nền tảng R với giao diện bảng tính trực quan, hỗ trợ mở rộng thêm hàng loạt mô-đun phân tích chuyên sâu như Mediation/Moderation và SEM.',
    bestFor: 'Sinh viên nghiên cứu định lượng, xử lý bảng hỏi khảo sát thang đo Likert.',
    platforms: 'Windows, macOS, Linux, Chromebook, jamovi Cloud',
    vietnameseSupport: 'Đọc dữ liệu CSV tiếng Việt tốt.',
    studentPerk: 'Miễn phí 100% và cài được thêm các module miễn phí (như `medmod` để kiểm tra biến trung gian/điều tiết).',
    useCases: [
      'Phân tích mô tả, kiểm tra độ tin cậy thang đo và phân tích biến trung gian/điều tiết (Mediation & Moderation).',
      'Mở trực tiếp file `.sav` của SPSS nếu giảng viên gửi dữ liệu mẫu định dạng SPSS.'
    ],
    pros: [
      'Mở được file `.sav` của SPSS và `.csv` mượt mà.',
      'Kho module mở rộng miễn phí rất mạnh cho mô hình nghiên cứu hiện đại.'
    ],
    limitations: 'Giao diện mặc định tiếng Anh chuyên ngành thống kê.',
    studentTip: 'Khi đề tài nghiên cứu của bạn có biến trung gian (Mediator) hoặc biến điều tiết (Moderator), hãy cài module `medmod` miễn phí ngay trong thư viện của jamovi.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 90,
    slug: 'chartjs-quickchart',
    name: 'QuickChart / Chart.js',
    tagline: 'Tạo biểu đồ ảnh tĩnh & tương tác tự động từ URL hoặc JSON cho báo cáo',
    excerpt: 'Biến số liệu trong Google Sheets, n8n hoặc bài viết web thành hình ảnh biểu đồ sắc nét tự động qua một đường link URL.',
    category: 'Đo lường & Phân tích Dữ liệu',
    categorySlug: 'analytics-tracking',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Chart.js miễn phí 100% mã nguồn mở; QuickChart miễn phí API tạo ảnh biểu đồ không cần đăng nhập cho nhu cầu cơ bản.',
    level: 'Nâng cao',
    officialUrl: 'https://quickchart.io/',
    tags: ['Charts', 'Automation', 'Data Visualization', 'API'],
    whatIsIt: 'QuickChart là dịch vụ mã nguồn mở xây dựng trên thư viện Chart.js cho phép tạo ra hình ảnh biểu đồ (PNG/SVG) trực tiếp từ cấu hình URL hoặc JSON để nhúng vào Email báo cáo tự động, Telegram hoặc trang web.',
    bestFor: 'Sinh viên làm dự án Marketing Automation (n8n) muốn tự động vẽ biểu đồ gửi báo cáo KPI hàng tuần về Telegram/Email.',
    platforms: 'Web API, JavaScript Library',
    vietnameseSupport: 'Hiển thị chữ tiếng Việt trên biểu đồ bình thường.',
    studentPerk: 'Miễn phí 100% không cần API Key cho việc tạo biểu đồ ảnh nhúng vào báo cáo hoặc workflow n8n.',
    useCases: [
      'Kết hợp với n8n để tự động gửi ảnh biểu đồ doanh thu hàng ngày vào nhóm Telegram.',
      'Nhúng biểu đồ tương tác vào trang Landing Page hoặc báo cáo HTML.'
    ],
    pros: [
      'Cực kỳ linh hoạt cho tự động hóa báo cáo.',
      'Có trình tạo biểu đồ trực quan (Chart Maker) ngay trên trang chủ.'
    ],
    limitations: 'Cần hiểu cấu trúc JSON cơ bản nếu muốn tự động hóa nâng cao.',
    studentTip: 'Dùng trình Chart Maker trên quickchart.io để tạo nhanh biểu đồ ảnh sắc nét hoặc nhờ ChatGPT viết giúp link URL QuickChart từ bảng số liệu của bạn.',
    verifiedAt: '2026-11-24'
  }
];

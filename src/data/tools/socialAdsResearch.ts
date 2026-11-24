import { MarketingTool } from '../../types';

export const socialAdsResearchTools: MarketingTool[] = [
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
        a: 'Hãy nhìn vào dòng "Bắt đầu chạy vào..." (Started running on...) ở đầu thẻ quảng cáo. Một doanh nghiệp chỉ giữ tiền chạy liên tục một mẫu quảng cáo suốt hơn 3–4 tuần khi mẫu đó đang mang lại chi phí trên mỗi chuyển đổi (CPA/ROAS) có lãi.'
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
      'Xác định chính xác tính mùa vụ (Seasonality): biết nhu cầu tìm kiếm một sản phẩm bắt đầu tăng từ tuần nào trong năm để tung chiến dịch sớm trước 2–4 tuần.',
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
        a: 'Không phải. Điểm 100 đại diện cho thời điểm từ khóa đó đạt mức độ phổ biến cao nhất (Peak) trong khung thời gian và khu vực bạn chọn. Điểm 50 nghĩa là mức độ quan tâm bằng một nửa so với thời điểm đỉnh đó.'
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
    id: 115,
    slug: 'google-ads-transparency-center',
    name: 'Google Ads Transparency Center',
    tagline: 'Trung tâm minh bạch quảng cáo soi toàn bộ Ads Google Search, YouTube & Display của đối thủ',
    excerpt: 'Công cụ chính chủ miễn phí từ Google cho phép tra cứu xem đối thủ đang chạy quảng cáo Google Search, Banner GDN và Video YouTube nào tại Việt Nam.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí công khai 100% từ Google, không cần đăng nhập.',
    level: 'Cơ bản',
    officialUrl: 'https://adstransparency.google.com/',
    tags: ['Google Ads', 'YouTube Ads', 'Competitor Spy', 'Display Ads'],
    whatIsIt: 'Google Ads Transparency Center là kho lưu trữ quảng cáo công khai chính thức của Google, cho phép tìm kiếm theo tên doanh nghiệp hoặc tên miền website để xem toàn bộ mẫu quảng cáo văn bản (Search), hình ảnh (Display) và video (YouTube) mà nhà quảng cáo đó đang chạy.',
    bestFor: 'Google Ads Specialist, Creative Planner và sinh viên phân tích hoạt động quảng cáo đa kênh của đối thủ.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, lọc chính xác quảng cáo hiển thị tại Việt Nam.',
    studentPerk: 'Miễn phí 100%, giúp sinh viên xem trực tiếp video quảng cáo YouTube (TVC) và banner GDN của các thương hiệu lớn tại Việt Nam.',
    useCases: [
      'Nhập tên miền đối thủ (ví dụ: `tiki.vn`, `shopee.vn`, `concung.com`) để xem toàn bộ mẫu banner GDN và video YouTube Ads họ đang chạy.',
      'Học cách các thương hiệu lớn viết tiêu đề và mô tả cho Google Search Ads.'
    ],
    pros: [
      'Dữ liệu chính xác 100% từ hệ thống quảng cáo Google.',
      'Lọc được theo định dạng: Văn bản, Hình ảnh và Video YouTube.'
    ],
    limitations: 'Không hiển thị danh sách từ khóa đấu thầu hay ngân sách chi tiêu cụ thể.',
    studentTip: 'Kết hợp bộ đôi miễn phí **Meta Ad Library** + **Google Ads Transparency Center** để hoàn thiện toàn bộ phần soi quảng cáo đối thủ trên cả Facebook lẫn Google/YouTube trong đồ án.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 116,
    slug: 'linkedin-ad-library',
    name: 'LinkedIn Ad Library',
    tagline: 'Tra cứu mẫu quảng cáo B2B & Tuyển dụng trên LinkedIn của các tập đoàn lớn',
    excerpt: 'Công cụ chính chủ LinkedIn giúp xem các chiến dịch quảng cáo B2B, Lead Gen Form và Employer Branding đang chạy trên toàn cầu.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí công khai 100% không cần đăng nhập.',
    level: 'Cơ bản',
    officialUrl: 'https://www.linkedin.com/ad-library/',
    tags: ['B2B Marketing', 'LinkedIn Ads', 'Competitor Research', 'Lead Gen'],
    whatIsIt: 'LinkedIn Ad Library là thư viện quảng cáo công khai chính thức của LinkedIn, cho phép tra cứu theo tên công ty hoặc từ khóa để xem các mẫu quảng cáo B2B, Sponsored Content và Message Ads.',
    bestFor: 'B2B Marketer, Employer Branding Specialist và sinh viên làm đề tài Marketing doanh nghiệp (B2B).',
    platforms: 'Web Browser',
    vietnameseSupport: 'Tra cứu được các doanh nghiệp tại Việt Nam và quốc tế.',
    studentPerk: 'Miễn phí 100%, cực kỳ hữu ích khi nghiên cứu cách viết thông điệp bán hàng B2B chuyên nghiệp.',
    useCases: [
      'Nghiên cứu cách các công ty phần mềm/SaaS và Agency lớn chạy quảng cáo tìm kiếm khách hàng doanh nghiệp.',
      'Học cấu trúc Lead Magnet (Whitepaper, Report, Webinar) trong quảng cáo B2B.'
    ],
    pros: [
      'Nguồn tham khảo chuẩn mực nhất cho quảng cáo B2B.',
      'Lọc được theo quốc gia và khoảng thời gian.'
    ],
    limitations: 'Số lượng doanh nghiệp Việt Nam chạy LinkedIn Ads ít hơn nhiều so với Facebook/TikTok.',
    studentTip: 'Nếu làm đồ án B2B Marketing, hãy vào LinkedIn Ad Library gõ tên 3 công ty công nghệ hàng đầu để tham khảo cách họ thiết kế ảnh Carousel B2B.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 117,
    slug: 'meta-business-suite',
    name: 'Meta Business Suite',
    tagline: 'Quản trị Fanpage Facebook & Instagram, Hộp thư chung & Lập lịch đăng bài miễn phí',
    excerpt: 'Bảng điều khiển chính chủ từ Meta giúp hẹn lịch đăng bài/Reels, trả lời bình luận/tin nhắn Facebook & Instagram và xem Insight người theo dõi miễn phí.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính chủ Meta cho mọi chủ sở hữu Fanpage.',
    level: 'Cơ bản',
    officialUrl: 'https://business.facebook.com/',
    tags: ['Facebook Page', 'Instagram', 'Content Calendar', 'Inbox'],
    whatIsIt: 'Meta Business Suite là công cụ quản trị tập trung chính thức của Meta dành cho Facebook Page và tài khoản Instagram Business, tích hợp lập lịch đăng bài (Planner), hộp thư hợp nhất (Inbox), tự động hóa trả lời tin nhắn cơ bản và phân tích Insights.',
    bestFor: 'Mọi Admin Fanpage, Social Media Intern và sinh viên vận hành kênh Facebook/Instagram cho dự án.',
    platforms: 'Web Browser (business.facebook.com), iOS & Android App',
    vietnameseSupport: 'Giao diện 100% tiếng Việt.',
    studentPerk: 'Miễn phí 100%, không giới hạn số bài hẹn lịch và cho phép chạy A/B Test 2 phiên bản bài viết ngay trên Fanpage.',
    useCases: [
      'Lên lịch đăng bài và thước phim Reels cho cả Facebook và Instagram cùng lúc theo lịch biểu tháng.',
      'Thiết lập tin nhắn trả lời tự động (Instant Reply) và câu hỏi thường gặp (FAQs) trong Messenger.'
    ],
    pros: [
      'Chính chủ Meta nên hỗ trợ đầy đủ tính năng bản địa (Reels, Carousel, Tag sản phẩm, A/B Test bài viết).',
      'Miễn phí không giới hạn số lượng bài hẹn lịch.'
    ],
    limitations: 'Không quản lý được TikTok, YouTube hay LinkedIn (chỉ trong hệ sinh thái Meta).',
    studentTip: 'Dùng tính năng "A/B test post" có sẵn trong Meta Business Suite để thử nghiệm 2 ảnh bìa hoặc 2 đoạn mở đầu khác nhau cho cùng 1 bài viết Fanpage.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 118,
    slug: 'vidiq',
    name: 'vidIQ',
    tagline: 'Tối ưu SEO YouTube, Nghiên cứu từ khóa Video & Phân tích kênh đối thủ',
    excerpt: 'Tiện ích hàng đầu cho YouTuber và Video Marketer: chấm điểm SEO video, gợi ý thẻ Tags, đo chỉ số Lượt xem mỗi giờ (VPH) của video đối thủ.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic và Chrome Extension miễn phí xem điểm SEO, Tags và VPH đối thủ; các gói Boost/Coaching trả phí theo tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://vidiq.com/',
    tags: ['YouTube SEO', 'Video Marketing', 'Channel Audit', 'Keywords'],
    whatIsIt: 'vidIQ là bộ công cụ phân tích và tối ưu hóa kênh YouTube được chứng nhận bởi YouTube, giúp tìm từ khóa tìm kiếm trên YouTube, tối ưu tiêu đề/mô tả/tags và theo dõi tốc độ tăng trưởng lượt xem theo giờ (VPH) của đối thủ.',
    bestFor: 'YouTube Marketer, Content Creator và sinh viên xây dựng kênh video dài/YouTube Shorts.',
    platforms: 'Web Browser, Chrome Extension, iOS & Android',
    vietnameseSupport: 'Phân tích từ khóa và đề xuất SEO tiếng Việt trên YouTube chuẩn xác.',
    studentPerk: 'Extension miễn phí hiển thị toàn bộ bảng chấm điểm SEO và bộ từ khóa Tags ẩn của bất kỳ video YouTube nào.',
    useCases: [
      'Soi bộ thẻ Tags và điểm tối ưu SEO của các video đang đứng Top 1 tìm kiếm YouTube.',
      'Kiểm tra chỉ số Views Per Hour (VPH) để phát hiện video nào đang lên xu hướng mạnh nhất trong ngành.'
    ],
    pros: [
      'Hiển thị dữ liệu phân tích trực tiếp ngay trên giao diện YouTube.',
      'Chấm điểm SEO trực quan từ 0–100.'
    ],
    limitations: 'Tính năng gợi ý AI tiêu đề và từ khóa hàng loạt giới hạn ở bản miễn phí.',
    studentTip: 'Cài vidIQ Extension lên Chrome để mỗi khi xem video đối thủ trên YouTube, bạn đều thấy được cấu trúc tiêu đề, tags và tốc độ tăng view của họ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 119,
    slug: 'tubebuddy',
    name: 'TubeBuddy',
    tagline: 'Quản lý kênh YouTube, A/B Testing Thumbnail & Tối ưu từ khóa tìm kiếm',
    excerpt: 'Tiện ích mở rộng trình duyệt giúp YouTuber kiểm tra xếp hạng từ khóa, sao chép mẫu mô tả chuẩn và thử nghiệm A/B Testing ảnh bìa Thumbnail.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cung cấp Videolytics, Keyword Explorer giới hạn và công cụ quản lý hàng loạt cơ bản; gói Pro từ ~$4.5/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.tubebuddy.com/',
    tags: ['YouTube', 'Thumbnail A/B Test', 'Video SEO', 'Chrome Extension'],
    whatIsIt: 'TubeBuddy là tiện ích quản lý và tối ưu hóa kênh YouTube tích hợp sâu vào YouTube Studio, nổi bật với tính năng Keyword Explorer và A/B Testing ảnh thu nhỏ (Thumbnail).',
    bestFor: 'Người quản trị kênh YouTube doanh nghiệp hoặc kênh cá nhân.',
    platforms: 'Chrome/Edge/Firefox Extension, Mobile App',
    vietnameseSupport: 'Hỗ trợ từ khóa tiếng Việt trên YouTube.',
    studentPerk: 'Có chính sách giảm giá 50% cho các kênh nhỏ dưới 1.000 Subscribers và dùng miễn phí các tính năng cơ bản.',
    useCases: [
      'Dùng Keyword Explorer chấm điểm độ cạnh tranh của tiêu đề video dự định quay.',
      'Kiểm tra danh sách Best Practice Checklist trước khi xuất bản video.'
    ],
    pros: [
      'Tích hợp gọn gàng vào thanh bên YouTube Studio.',
      'Hỗ trợ xử lý hàng loạt thẻ End Screen và Cards cho nhiều video.'
    ],
    limitations: 'Tính năng A/B Testing Thumbnail nằm ở gói cao cấp (hiện YouTube Studio cũng đang mở dần tính năng Test & Compare Thumbnail miễn phí).',
    studentTip: 'Dùng Keyword Explorer của TubeBuddy kiểm tra tiêu đề video trước khi bấm máy quay để đảm bảo có lượng tìm kiếm thực tế.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 120,
    slug: 'metricool',
    name: 'Metricool',
    tagline: 'Lập lịch đăng bài, Phân tích số liệu & Soi đối thủ Social Media All-in-One',
    excerpt: 'Quản lý đồng thời Facebook, Instagram, TikTok, YouTube, LinkedIn, Threads và xuất báo cáo PDF chuyên nghiệp miễn phí.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free trọn đời cho phép quản lý 1 thương hiệu (kết nối đủ Facebook, IG, TikTok, YouTube, Google Business) và lên lịch 50 bài/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://metricool.com/',
    tags: ['Social Analytics', 'Scheduling', 'Competitor Tracking', 'Reporting'],
    whatIsIt: 'Metricool là nền tảng quản trị, lập lịch và phân tích mạng xã hội + quảng cáo tất-cả-trong-một, cho phép xem khung giờ vàng có nhiều follower online nhất và xuất báo cáo PDF tự động.',
    bestFor: 'Social Media Manager, Freelancer và nhóm sinh viên chạy dự án đa kênh cần báo cáo số liệu cuối kỳ đẹp mắt.',
    platforms: 'Web Browser, iOS & Android App, Looker Studio Connector',
    vietnameseSupport: 'Hỗ trợ đăng và phân tích nội dung tiếng Việt chuẩn xác.',
    studentPerk: 'Gói Free cho phép kết nối tới **50 bài hẹn lịch/tháng** cho 1 thương hiệu (bao gồm cả TikTok Business, IG, FB, YouTube) — hào phóng hơn Buffer.',
    useCases: [
      'Xem bản đồ nhiệt "Best Time to Post" để biết chính xác giờ nào tệp follower của kênh online nhiều nhất.',
      'Theo dõi đối thủ cạnh tranh và xuất bảng thống kê tương tác từng bài đăng ra file CSV/PDF.'
    ],
    pros: [
      'Gói Free cho hẹn lịch tới 50 bài/tháng trên một thương hiệu.',
      'Tích hợp cả phân tích Ads lẫn Organic Social.'
    ],
    limitations: 'Xuất báo cáo PDF tự động có tùy biến logo và kết nối LinkedIn nằm ở gói trả phí Starter.',
    studentTip: 'Nếu nhóm bạn quản lý 1 thương hiệu duy nhất xuyên suốt cả FB + IG + TikTok + YouTube trong đồ án, Metricool bản Free là lựa chọn cực kỳ tối ưu.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 121,
    slug: 'later',
    name: 'Later',
    tagline: 'Lập lịch đăng bài & Xem trước bố cục lưới ảnh Instagram (Visual Feed Planner)',
    excerpt: 'Công cụ yêu thích của các thương hiệu Thời trang, Làm đẹp, F&B để sắp xếp lưới 9 ô Instagram hài hòa trước khi hẹn giờ đăng.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Có gói dùng thử miễn phí 14 ngày; các gói trả phí từ ~$16.67/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://later.com/',
    tags: ['Instagram Marketing', 'Visual Planner', 'Link in Bio', 'Scheduling'],
    whatIsIt: 'Later là nền tảng tiếp thị mạng xã hội thiên về thị giác (Visual Social Marketing), nổi bật với tính năng kéo thả xem trước giao diện lưới Instagram (Visual Grid Preview) và công cụ Linkin.bio.',
    bestFor: 'Social Media Creator ngành Thời trang, Mỹ phẩm, F&B chú trọng thẩm mỹ Feed Instagram/TikTok.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ soạn thảo tiếng Việt và gợi ý Hashtag.',
    studentPerk: 'Dùng thử miễn phí 14 ngày để sắp xếp bố cục lưới Instagram cho chiến dịch ra mắt thương hiệu.',
    useCases: [
      'Kéo thả sắp xếp 9–12 tấm ảnh để kiểm tra sự hài hòa màu sắc trên trang cá nhân Instagram trước khi đăng.',
      'Tạo trang Linkin.bio dẫn người xem từ bài đăng Instagram về đúng sản phẩm trên Landing Page.'
    ],
    pros: [
      'Tính năng Visual Instagram Planner trực quan nhất.',
      'Tích hợp tốt với Canva và kho media.'
    ],
    limitations: 'Đã thu hẹp gói miễn phí dài hạn, chủ yếu dùng thử 14 ngày.',
    studentTip: 'Học tư duy sắp xếp lưới 3 cột (Grid Planning) của Later rồi dùng luôn trên Canva để giữ thẩm mỹ cho trang Instagram dự án.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 122,
    slug: 'hootsuite',
    name: 'Hootsuite',
    tagline: 'Nền tảng quản trị mạng xã hội & Social Listening chuẩn doanh nghiệp lớn',
    excerpt: 'Công cụ quản lý đa kênh mạng xã hội lâu đời nhất thế giới, tích hợp cột theo dõi luồng thảo luận (Streams), duyệt bài nhóm và báo cáo ROI.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 30 ngày; các gói trả phí dành cho doanh nghiệp từ ~$99/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.hootsuite.com/',
    tags: ['Enterprise Social', 'Social Management', 'Approval Workflow', 'Analytics'],
    whatIsIt: 'Hootsuite là nền tảng quản lý mạng xã hội cấp doanh nghiệp (Enterprise Social Media Management), cho phép quản lý hàng chục tài khoản, phân quyền duyệt bài nhiều cấp và theo dõi từ khóa thảo luận trên một bảng điều khiển.',
    bestFor: 'Sinh viên tìm hiểu quy trình vận hành Social Team tại tập đoàn/Agency lớn và thi chứng chỉ Hootsuite Academy.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ đăng bài tiếng Việt.',
    studentPerk: 'Có bản dùng thử 30 ngày và nền tảng học thuật **Hootsuite Academy** cung cấp nhiều bài học miễn phí về chiến lược Social Media.',
    useCases: [
      'Tìm hiểu mô hình phân quyền duyệt bài (Approval Workflow) và phản hồi khủng hoảng truyền thông.',
      'Theo dõi các cột luồng từ khóa/hashtag đối thủ theo thời gian thực.'
    ],
    pros: [
      'Hệ thống quản trị nhóm và báo cáo cực kỳ bài bản.',
      'Uy tín cao trên thị trường tuyển dụng quốc tế.'
    ],
    limitations: 'Chi phí thuê bao rất cao đối với sinh viên và doanh nghiệp nhỏ.',
    studentTip: 'Không cần mua gói trả phí; hãy tận dụng tài liệu trên Hootsuite Blog & Academy để học chuẩn mực báo cáo Social Media ROI.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 123,
    slug: 'buzzsumo',
    name: 'BuzzSumo',
    tagline: 'Nghiên cứu nội dung Viral nhất, Báo chí & Influencer theo chủ đề',
    excerpt: 'Tìm xem bài viết nào về một chủ đề đang nhận được nhiều lượt chia sẻ nhất trên mạng xã hội và ai là người chia sẻ/lan tỏa nó.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 30 ngày không giới hạn tính năng cốt lõi; các gói trả phí từ ~$199/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://buzzsumo.com/',
    tags: ['Viral Content', 'PR', 'Influencer Discovery', 'Content Research'],
    whatIsIt: 'BuzzSumo là công cụ khám phá nội dung và nghiên cứu PR dựa trên dữ liệu tương tác mạng xã hội, giúp tìm kiếm các bài viết đạt lượng tương tác cao nhất, phân tích định dạng nội dung thắng thế và tìm kiếm nhà báo/KOL phù hợp.',
    bestFor: 'Content Strategist, PR Specialist và sinh viên nghiên cứu chủ đề Viral trong ngành.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ tìm kiếm bài viết tiếng Việt trên các trang tin/blog Việt Nam.',
    studentPerk: 'Gói dùng thử miễn phí 30 ngày đủ để thực hiện nghiên cứu phân tích nội dung Viral cho toàn bộ đồ án.',
    useCases: [
      'Tìm 10 bài viết được chia sẻ nhiều nhất trong 12 tháng qua về chủ đề dự án để học cấu trúc giật tít và góc nhìn.',
      'Phân tích xem bài viết độ dài bao nhiêu từ và đăng vào thứ mấy đạt nhiều lượt chia sẻ nhất trong ngành.'
    ],
    pros: [
      'Dữ liệu tương tác mạng xã hội theo chủ đề rất sâu.',
      'Bộ lọc theo định dạng (Infographic, Video, Listicle, How-to) cực kỳ hữu ích.'
    ],
    limitations: 'Giá gói chính thức rất đắt sau khi hết 30 ngày dùng thử.',
    studentTip: 'Dùng 30 ngày dùng thử đúng lúc làm giai đoạn Content Research để xuất danh sách 50 bài viết Viral nhất ngành về làm tài liệu tham khảo.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 124,
    slug: 'brand24',
    name: 'Brand24',
    tagline: 'Lắng nghe mạng xã hội (Social Listening) & Cảnh báo khủng hoảng truyền thông AI',
    excerpt: 'Theo dõi mọi lượt nhắc đến tên thương hiệu trên báo chí, blog, diễn đàn, TikTok, YouTube và tự động phân tích sắc thái tích cực/tiêu cực (Sentiment).',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 14 ngày; các gói trả phí từ ~$79–$99/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://brand24.com/',
    tags: ['Social Listening', 'Sentiment Analysis', 'Brand Monitoring', 'PR'],
    whatIsIt: 'Brand24 là công cụ lắng nghe mạng xã hội (Social Listening) ứng dụng AI, thu thập các lượt nhắc tên thương hiệu hoặc từ khóa trên Internet theo thời gian thực để đo lường Share of Voice, cảm xúc công chúng và cảnh báo bão khủng hoảng.',
    bestFor: 'PR & Brand Manager, sinh viên làm đề tài Social Listening hoặc quản trị khủng hoảng truyền thông.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ theo dõi từ khóa tiếng Việt và phân tích cảm xúc (Sentiment Analysis) đa ngôn ngữ.',
    studentPerk: '14 ngày dùng thử miễn phí cho phép sinh viên tạo dự án theo dõi thật 1 thương hiệu Việt Nam và xuất báo cáo PDF.',
    useCases: [
      'Đo lường tỷ lệ thảo luận Tích cực / Trung lập / Tiêu cực (Sentiment) của một thương hiệu trước và sau khi tung TVC.',
      'Tìm những người dùng đang than phiền về đối thủ để tiếp cận giải quyết vấn đề.'
    ],
    pros: [
      'Giao diện đẹp, báo cáo AI Insights tự động tóm tắt nguyên nhân tăng/giảm thảo luận.',
      'Cài đặt cực nhanh chỉ trong 2 phút.'
    ],
    limitations: 'Với thảo luận sâu trong các hội nhóm Facebook kín tại Việt Nam, dữ liệu sẽ hạn chế hơn các nền tảng Social Listening nội địa chuyên biệt.',
    studentTip: 'Dùng thử 14 ngày để thu thập dữ liệu thảo luận công khai và chụp biểu đồ Sentiment/Presence Score đưa vào bài thuyết trình Brand Audit.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 125,
    slug: 'google-alerts',
    name: 'Google Alerts',
    tagline: 'Theo dõi tin tức thương hiệu & đối thủ trên báo chí miễn phí 100% qua Email',
    excerpt: 'Công cụ đơn giản mà hiệu quả từ Google: chỉ cần nhập tên thương hiệu hoặc từ khóa ngành, Google sẽ gửi email ngay khi có bài báo/blog mới nhắc tới.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trọn đời với tài khoản Google.',
    level: 'Cơ bản',
    officialUrl: 'https://www.google.com/alerts',
    tags: ['Brand Monitoring', 'PR', 'News Alert', 'Free Tool'],
    whatIsIt: 'Google Alerts là dịch vụ phát hiện và thông báo thay đổi nội dung miễn phí của Google, tự động gửi email tổng hợp mỗi khi có bài báo, trang web hoặc blog mới được lập chỉ mục chứa từ khóa bạn theo dõi.',
    bestFor: 'PR Executive, Brand Marketer và sinh viên theo dõi tin tức thị trường/đối thủ hàng ngày.',
    platforms: 'Web Browser + Gmail',
    vietnameseSupport: 'Hỗ trợ 100% tiếng Việt và lọc riêng khu vực Việt Nam.',
    studentPerk: 'Miễn phí 100%, không giới hạn số lượng từ khóa theo dõi.',
    useCases: [
      'Thiết lập cảnh báo cho tên thương hiệu mình, tên 3 đối thủ lớn và từ khóa ngành hàng.',
      'Cập nhật nhanh các bài viết PR mới nhất của đối thủ trên báo chí Việt Nam.'
    ],
    pros: [
      'Miễn phí, cài đặt trong 10 giây, chạy ngầm hoàn toàn tự động.',
      'Hỗ trợ toán tử tìm kiếm Google (ví dụ `"Tên thương hiệu" site:vnexpress.net`).'
    ],
    limitations: 'Chỉ quét các trang web/báo chí được Google lập chỉ mục (không quét bình luận trong bài đăng Facebook/TikTok).',
    studentTip: 'Đặt từ khóa trong dấu ngoặc kép (ví dụ `"Marketing2Student"`) để Google Alerts chỉ báo khi xuất hiện chính xác cụm từ đó.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 127,
    slug: 'kalodata',
    name: 'Kalodata',
    tagline: 'Phân tích doanh số TikTok Shop, KOC Livestream & Video bán hàng triệu view',
    excerpt: 'Soi doanh thu ước tính của các sản phẩm bán chạy trên TikTok Shop Việt Nam, xem KOC nào đang bán tốt nhất và video nào nổ đơn nhiều nhất.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép dùng thử tra cứu một số lượt/ngày hoặc xem Top xếp hạng cơ bản; gói trả phí theo tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.kalodata.com/',
    tags: ['TikTok Shop', 'Affiliate', 'KOC', 'Livestream Data'],
    whatIsIt: 'Kalodata là nền tảng phân tích dữ liệu thương mại xã hội (Social Commerce Analytics) chuyên sâu cho TikTok Shop, giúp theo dõi doanh thu theo ngày của từng sản phẩm, hiệu quả phiên Livestream và video gắn giỏ hàng của các KOC/Creator.',
    bestFor: 'TikTok Shop Seller, Booking KOC/Affiliate Manager và sinh viên nghiên cứu mô hình Shoppertainment.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ chọn ngôn ngữ Tiếng Việt và lọc dữ liệu riêng thị trường TikTok Shop Việt Nam.',
    studentPerk: 'Có chế độ dùng thử miễn phí giúp sinh viên xem Top sản phẩm và Top video bán hàng xuất sắc nhất tuần trên TikTok Shop VN.',
    useCases: [
      'Tìm danh sách KOC/KOL có tỷ lệ chuyển đổi ra đơn thật cao trong ngành hàng để lên kế hoạch Booking.',
      'Phân tích kịch bản các video gắn giỏ hàng mang lại doanh thu cao nhất của đối thủ.'
    ],
    pros: [
      'Dữ liệu chuyên sâu về TikTok Shop, tách bạch doanh thu từ Livestream vs Video ngắn vs Thẻ sản phẩm.',
      'Giao diện tiếng Việt dễ tra cứu.'
    ],
    limitations: 'Số lượt xem chi tiết ở tài khoản miễn phí bị giới hạn nhanh.',
    studentTip: 'Khi làm kế hoạch Booking KOC cho đồ án, đừng chỉ nhìn vào số Follow — hãy tham khảo tư duy lọc KOC theo GMV (doanh số mang về) như trên Kalodata.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 128,
    slug: 'manychat',
    name: 'ManyChat',
    tagline: 'Chatbot tự động bình luận & Gửi tin nhắn chốt đơn Facebook, Instagram, TikTok',
    excerpt: 'Tự động trả lời inbox và gửi link ưu đãi ngay lập tức khi khách hàng bình luận từ khóa (ví dụ: "Tư vấn", "Giá") trên bài đăng hoặc Livestream.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí hoàn toàn lên tới 1.000 người liên hệ (Contacts); gói Pro từ $15/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://manychat.com/',
    tags: ['Chatbot', 'Social Automation', 'Instagram DM', 'Lead Gen'],
    whatIsIt: 'ManyChat là nền tảng Chat Marketing tự động hóa hàng đầu được Meta cấp phép chính thức, cho phép thiết lập kịch bản Chatbot phản hồi bình luận và tin nhắn tự động trên Instagram, Facebook Messenger, WhatsApp và TikTok.',
    bestFor: 'Social Media Marketer, chủ shop online và sinh viên xây dựng phễu thu Lead tự động qua comment ("Comment X nhận tài liệu").',
    platforms: 'Web Browser (Cloud), iOS & Android App',
    vietnameseSupport: 'Hỗ trợ soạn kịch bản và nhận diện từ khóa tiếng Việt chuẩn xác.',
    studentPerk: 'Gói Free cho phép kết nối và chăm sóc tới 1.000 khách hàng miễn phí — quá đủ để chạy thử nghiệm phễu Mini-game hoặc tặng Ebook cho đồ án.',
    useCases: [
      'Chạy bài viết "Comment NHANQUA để nhận mã giảm giá/Ebook tự động qua Messenger" giúp tăng vọt lượt tương tác tự nhiên (Organic Reach).',
      'Xây dựng kịch bản tư vấn hỏi nhu cầu 3 bước và lưu thông tin SĐT khách hàng sang Google Sheets.'
    ],
    pros: [
      'Đối tác chính thức của Meta nên cực kỳ an toàn, không lo bị khóa Fanpage như các tool spam lậu.',
      'Trình vẽ luồng kéo thả Flow Builder rất trực quan.'
    ],
    limitations: 'Gói Free có gắn nhãn "Powered by ManyChat" và giới hạn một số kết nối nâng cao như Google Sheets trực tiếp.',
    studentTip: 'Kết hợp chiến dịch tặng tài liệu miễn phí trên Instagram/Facebook với ManyChat Comment-to-DM là cách tăng tương tác và thu Lead hiệu quả nhất hiện nay.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 129,
    slug: 'sprout-social',
    name: 'Sprout Social',
    tagline: 'Bộ quản trị Social Media & Báo cáo phân tích đối thủ cấp độ Enterprise',
    excerpt: 'Nền tảng quản trị mạng xã hội cao cấp nổi tiếng với khả năng tổng hợp hộp thư đa kênh, đo lường hiệu suất đội ngũ CSKH và báo cáo chuẩn mực.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 30 ngày; các gói trả phí cấp doanh nghiệp từ ~$199/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://sproutsocial.com/',
    tags: ['Social CRM', 'Analytics', 'Enterprise', 'Reporting'],
    whatIsIt: 'Sprout Social là phần mềm quản lý mạng xã hội và phân tích dữ liệu tương tác khách hàng cấp doanh nghiệp, kết nối các kênh Facebook, Instagram, LinkedIn, X, TikTok và YouTube.',
    bestFor: 'Sinh viên tìm hiểu báo cáo Benchmark ngành Social Media và quy trình quản trị Social CRM chuyên nghiệp.',
    platforms: 'Web Browser, iOS & Android',
    vietnameseSupport: 'Hỗ trợ quản lý nội dung tiếng Việt.',
    studentPerk: 'Kho báo cáo **Sprout Social Index** hàng năm hoàn toàn miễn phí tải về để lấy số liệu trích dẫn chuẩn quốc tế về hành vi người dùng mạng xã hội.',
    useCases: [
      'Tải báo cáo Sprout Social Index để lấy số liệu Benchmark tỷ lệ tương tác và kỳ vọng phản hồi tin nhắn của khách hàng.',
      'Tìm hiểu cách đo lường thời gian phản hồi trung bình (Response Time) của đội ngũ Fanpage.'
    ],
    pros: [
      'Báo cáo xuất ra cực kỳ sang trọng và chi tiết.',
      'Kho nghiên cứu ngành Social Media miễn phí rất giá trị.'
    ],
    limitations: 'Giá thành cao, phù hợp với doanh nghiệp lớn hơn là cá nhân.',
    studentTip: 'Dù không mua phần mềm, hãy thường xuyên đọc các báo cáo thống kê của Sprout Social để có số liệu trích dẫn uy tín trong bài viết.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 130,
    slug: 'canva-content-planner',
    name: 'YouTube Studio',
    tagline: 'Trung tâm quản trị kênh YouTube & Phân tích Retention từng giây miễn phí',
    excerpt: 'Công cụ chính chủ Google giúp phân tích biểu đồ giữ chân người xem (Audience Retention), tỷ lệ nhấp Thumbnail (CTR) và doanh thu YouTube.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% cho mọi chủ kênh YouTube.',
    level: 'Cơ bản',
    officialUrl: 'https://studio.youtube.com/',
    tags: ['YouTube Analytics', 'Retention', 'CTR', 'Video Marketing'],
    whatIsIt: 'YouTube Studio là bảng điều khiển chính thức của YouTube cho phép đăng tải video, chạy thử nghiệm A/B Testing Thumbnail (Test & Compare) và phân tích chi tiết giây nào người xem bấm thoát hoặc tua lại.',
    bestFor: 'Video Marketer, Content Creator và sinh viên quản lý kênh YouTube/YouTube Shorts.',
    platforms: 'Web Browser, YouTube Studio App (iOS/Android)',
    vietnameseSupport: 'Giao diện 100% tiếng Việt.',
    studentPerk: 'Miễn phí 100%, tích hợp sẵn tab "Inspiration" gợi ý chủ đề khán giả của bạn đang tìm kiếm trên YouTube.',
    useCases: [
      'Đọc biểu đồ Audience Retention để biết 30 giây đầu tiên giữ được bao nhiêu % người xem.',
      'Kiểm tra chỉ số Impressions Click-Through Rate (CTR) để đánh giá ảnh bìa Thumbnail có đủ hấp dẫn không.'
    ],
    pros: [
      'Dữ liệu chính xác tuyệt đối 100% từ YouTube.',
      'Báo cáo nguồn traffic (Browse Features, Suggested Videos, YouTube Search) cực kỳ chi tiết.'
    ],
    limitations: 'Chỉ xem được số liệu của kênh bạn sở hữu.',
    studentTip: 'Khi đăng video lên YouTube, hãy theo dõi 2 chỉ số vàng: CTR của Thumbnail (mục tiêu > 5–8%) và tỷ lệ giữ chân ở giây thứ 30 (mục tiêu > 60%).',
    verifiedAt: '2026-11-24'
  },
  {
    id: 131,
    slug: 'mention-monitoring',
    name: 'Mention',
    tagline: 'Theo dõi lượt nhắc thương hiệu trên mạng xã hội & web theo thời gian thực',
    excerpt: 'Giúp Marketer cập nhật tức thì mọi bài viết, đánh giá hoặc thảo luận nhắc đến thương hiệu mình và đối thủ cạnh tranh.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Có bản dùng thử miễn phí 14 ngày; các gói trả phí từ ~$41/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://mention.com/',
    tags: ['Brand Monitoring', 'Social Listening', 'PR', 'Competitor Tracking'],
    whatIsIt: 'Mention là công cụ giám sát truyền thông và lắng nghe mạng xã hội theo thời gian thực, thu thập dữ liệu từ hơn 1 tỷ nguồn web, tin tức, blog và mạng xã hội.',
    bestFor: 'PR Specialist, Brand Marketer cần công cụ theo dõi tin tức đối thủ và phản hồi khách hàng.',
    platforms: 'Web Browser, Desktop & Mobile App',
    vietnameseSupport: 'Theo dõi được từ khóa tiếng Việt.',
    studentPerk: '14 ngày dùng thử miễn phí giúp trải nghiệm quy trình thiết lập Boolean Search lọc nhiễu từ khóa.',
    useCases: [
      'So sánh Share of Voice giữa thương hiệu mình và 2 đối thủ cạnh tranh.',
      'Phát hiện các bài đánh giá sản phẩm (Review) trên blog/diễn đàn để vào tương tác.'
    ],
    pros: [
      'Hỗ trợ truy vấn logic Boolean (AND, OR, NOT) rất chuẩn để lọc từ khóa trùng tên.',
      'Giao diện gọn gàng dễ dùng.'
    ],
    limitations: 'Giới hạn số lượng lượt nhắc trong bản dùng thử.',
    studentTip: 'Học cách dùng toán tử `AND` / `NOT` khi theo dõi thương hiệu (ví dụ: `"Apple" NOT "trái cây"`) để báo cáo không bị rác dữ liệu.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 132,
    slug: 'linktree',
    name: 'Linktree',
    tagline: 'Tạo trang Bio Link tập hợp mọi liên kết bán hàng cho TikTok & Instagram',
    excerpt: 'Giải quyết giới hạn chỉ gắn được 1 link trên Bio TikTok/Instagram: tạo trang landing mini chứa link Shopee, Fanpage, Zalo và Form đăng ký.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí không giới hạn số lượng nút liên kết và xem thống kê tổng lượt click; gói Starter/Pro từ ~$5–$9/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://linktr.ee/',
    tags: ['Bio Link', 'TikTok Bio', 'Instagram', 'Traffic Routing'],
    whatIsIt: 'Linktree là công cụ tạo trang liên kết tiểu sử (Link-in-Bio) phổ biến nhất thế giới, giúp gom toàn bộ đường link Shopee, TikTok Shop, Website, Zalo OA và Form đăng ký về một đường link duy nhất gắn trên trang cá nhân mạng xã hội.',
    bestFor: 'TikTok/Instagram Creator, KOC làm Affiliate và sinh viên làm dự án bán hàng qua mạng xã hội.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ hiển thị tiếng Việt hoàn hảo.',
    studentPerk: 'Gói Free miễn phí vĩnh viễn không giới hạn số nút bấm và xem được tổng số lượt nhấp.',
    useCases: [
      'Gom link Facebook, Shopee, Landing Page và Form khảo sát của đồ án vào một trang Bio Link gọn gàng gắn trên TikTok/Instagram.',
      'Đặt link Affiliate sản phẩm để tối ưu hoa hồng từ người xem kênh.'
    ],
    pros: [
      'Thiết lập xong trong 3 phút, giao diện tối ưu cực tốt cho màn hình điện thoại.',
      'Miễn phí hoàn toàn các tính năng cốt lõi.'
    ],
    limitations: 'Gắn mã Pixel (GA4/Facebook Pixel) và xóa logo Linktree yêu cầu gói Pro.',
    studentTip: 'Luôn gắn thêm tham số UTM (`?utm_source=tiktok&utm_medium=bio`) vào các đường link đích bên trong Linktree để GA4 đếm chính xác lượt khách đi từ Bio TikTok vào web.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 133,
    slug: 'bitly',
    name: 'Bitly',
    tagline: 'Rút gọn link UTM dài ngoằng & Tạo mã QR Code theo dõi lượt quét miễn phí',
    excerpt: 'Biến đường link gắn mã UTM dài 150 ký tự thành link ngắn gọn đẹp mắt kèm mã QR Code để in lên ấn phẩm sự kiện và đo lường lượt bấm.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tạo được 10 link rút gọn và 2 mã QR Code/tháng (kèm thống kê lượt click); các gói trả phí từ ~$10/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://bitly.com/',
    tags: ['URL Shortener', 'QR Code', 'Click Tracking', 'Offline-to-Online'],
    whatIsIt: 'Bitly là nền tảng quản lý liên kết (Link Management) giúp rút gọn URL, tùy biến đuôi link dễ nhớ, tạo mã QR Code và thống kê số lượt nhấp chuột theo ngày/quốc gia.',
    bestFor: 'Event Marketer (O2O), Social Media Executive và sinh viên cần rút gọn link khảo sát/UTM cho bài đăng Facebook.',
    platforms: 'Web Browser, Chrome Extension, iOS/Android',
    vietnameseSupport: 'Hoạt động ổn định với mọi đường link.',
    studentPerk: 'Miễn phí tạo link rút gọn tùy biến đuôi (ví dụ `bit.ly/khao-sat-nhom-1`) và xem số lượt bấm.',
    useCases: [
      'Rút gọn đường link đã gắn UTM trước khi dán lên caption Facebook/YouTube để tránh rối mắt người đọc.',
      'Tạo mã QR Code dẫn về Landing Page đặt trên Poster/Standee sự kiện và đếm số lượt quét.'
    ],
    pros: [
      'Thương hiệu uy tín, người dùng không bị ngại bấm như các trang rút gọn link có quảng cáo.',
      'Thống kê lượt click theo thời gian thực.'
    ],
    limitations: 'Gói miễn phí hiện giới hạn 10 link mới và 2 mã QR mỗi tháng.',
    studentTip: 'Khi in mã QR trên tờ rơi hoặc slide thuyết trình để mời khán giả tham gia khảo sát, hãy dùng link rút gọn có gắn UTM để đo được chính xác hiệu quả của từng điểm chạm.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 134,
    slug: 'canva-social-insights-answerthesocket',
    name: 'Social Blade',
    tagline: 'Thống kê tốc độ tăng trưởng Subscriber/Follower lịch sử của YouTube, TikTok & IG',
    excerpt: 'Xem biểu đồ tăng trưởng người theo dõi theo từng ngày trong nhiều tháng của bất kỳ kênh YouTube, TikTok hay Instagram KOL nào trước khi Book.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Tra cứu thống kê tăng trưởng hàng ngày và xếp hạng kênh miễn phí 100% trên web.',
    level: 'Cơ bản',
    officialUrl: 'https://socialblade.com/',
    tags: ['Influencer Audit', 'YouTube Stats', 'TikTok Stats', 'Booking KOL'],
    whatIsIt: 'Social Blade là cơ sở dữ liệu theo dõi thống kê công khai của các nhà sáng tạo nội dung trên YouTube, TikTok, Instagram và Twitch, hiển thị lịch sử tăng giảm lượt theo dõi và lượt xem theo từng ngày.',
    bestFor: 'Influencer Marketing / Booking KOL Specialist kiểm tra xem KOL có mua follow ảo hay tăng trưởng tự nhiên không.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Tra cứu được mọi kênh YouTube/TikTok Việt Nam.',
    studentPerk: 'Miễn phí 100% tra cứu lịch sử tăng trưởng 30 ngày gần nhất của mọi kênh.',
    useCases: [
      'Thẩm định KOL trước khi Booking: nếu thấy biểu đồ tăng vọt 50.000 follow trong 1 ngày rồi đứng im bất thường là dấu hiệu nghi vấn mua follow ảo.',
      'So sánh tốc độ tăng trưởng kênh đối thủ theo từng tháng.'
    ],
    pros: [
      'Phát hiện nhanh các biểu đồ tăng trưởng bất thường khi chọn lọc Influencer.',
      'Hoàn toàn miễn phí cho các tra cứu cơ bản.'
    ],
    limitations: 'Con số ước tính doanh thu YouTube trên Social Blade có biên độ dao động rất rộng, không nên dùng làm số chính xác cho thị trường Việt Nam.',
    studentTip: 'Trong phần kế hoạch Influencer Marketing của đồ án, hãy nêu tiêu chí dùng Social Blade kiểm tra đường cong tăng trưởng tự nhiên của KOC trước khi ký hợp đồng.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 135,
    slug: 'sharethrough-headline-analyzer',
    name: 'CoSchedule Headline Studio',
    tagline: 'Chấm điểm sức hút tiêu đề (Headline Score) & Tối ưu tỷ lệ nhấp CTR',
    excerpt: 'Phân tích cấu trúc từ ngữ, từ khóa cảm xúc (Emotional/Power Words) và độ dài tối ưu của tiêu đề bài viết blog, email hoặc quảng cáo.',
    category: 'Social Media & Thư viện Quảng cáo',
    categorySlug: 'social-ads-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản Free cho phép chấm điểm tiêu đề không giới hạn (kèm 1 số gợi ý cơ bản trên web/Extension).',
    level: 'Cơ bản',
    officialUrl: 'https://coschedule.com/headline-studio',
    tags: ['Headline Analyzer', 'CTR', 'Copywriting', 'SEO Title'],
    whatIsIt: 'CoSchedule Headline Studio là công cụ phân tích tiêu đề dựa trên dữ liệu hàng triệu bài viết, chấm điểm từ 0–100 dựa trên tỷ lệ từ thông dụng, từ hiếm, từ cảm xúc, từ quyền lực và độ dài ký tự hiển thị trên Google/Email.',
    bestFor: 'Copywriter, Email Marketer và SEO Writer viết tiêu đề tiếng Anh.',
    platforms: 'Web Browser, Chrome Extension, WordPress Plugin',
    vietnameseSupport: 'Chuyên biệt chấm điểm tiêu đề tiếng Anh.',
    studentPerk: 'Kiểm tra miễn phí không giới hạn số lần cho các tiêu đề bài viết/email tiếng Anh.',
    useCases: [
      'Thử nghiệm 5 phương án tiêu đề Email Marketing tiếng Anh để chọn ra câu đạt điểm trên 70.',
      'Kiểm tra xem tiêu đề có bị cắt mất chữ khi hiển thị trên kết quả tìm kiếm Google không.'
    ],
    pros: [
      'Hướng dẫn rõ cách cân bằng giữa từ khóa cảm xúc và từ khóa hành động.',
      'Xem trước giao diện hiển thị trên Google Search và hộp thư đến Email.'
    ],
    limitations: 'Chỉ chấm điểm chính xác cho tiêu đề tiếng Anh.',
    studentTip: 'Học công thức cân bằng 4 nhóm từ của Headline Studio (Common + Uncommon + Emotional + Power Words) để áp dụng cả khi viết tiêu đề tiếng Việt.',
    verifiedAt: '2026-11-24'
  }
];

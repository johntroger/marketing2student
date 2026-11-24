import { MarketingTool } from '../../types';

export const seoResearchTools: MarketingTool[] = [
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
        a: 'Khi mới đăng ký Google Ads, bạn hãy tìm dòng chữ nhỏ "Switch to Expert Mode", sau đó bấm "Create an account without a campaign" là vào thẳng được Keyword Planner miễn phí.'
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
    limitations: 'Gói trả phí rất đắt đối với cá nhân sinh viên; bản miễn phí giới hạn 10 lượt truy vấn/ngày.',
    studentTip: 'Hãy tận dụng 10 lượt tra cứu miễn phí mỗi ngày một cách có kế hoạch và học lấy chứng chỉ trên Semrush Academy để đính kèm vào LinkedIn.',
    alternatives: [
      { name: 'Ubersuggest', slug: 'ubersuggest', comparison: 'Ubersuggest có giao diện đơn giản và chi phí mềm hơn nhiều cho người mới bắt đầu.' },
      { name: 'Google Keyword Planner', slug: 'google-keyword-planner', comparison: 'Keyword Planner miễn phí không giới hạn lượt tra từ khóa nhưng không soi được thứ hạng hiện tại của đối thủ như Semrush.' }
    ],
    faqs: [
      {
        q: 'Con số Organic Traffic trên Semrush có khớp 100% với Google Analytics của đối thủ không?',
        a: 'Không. Số liệu của Semrush là ước tính thuật toán dựa trên vị trí xếp hạng từ khóa nhân với tỷ lệ CTR trung bình và lượng tìm kiếm.'
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
    whatIsIt: 'Ubersuggest (phát triển bởi chuyên gia Marketing Neil Patel) là công cụ nghiên cứu từ khóa và gợi ý nội dung SEO có giao diện trực quan, tinh gọn, được thiết kế đặc biệt cho người mới bắt đầu, blogger và doanh nghiệp nhỏ.',
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
        a: 'Với website hoặc blog dự án mới lập có độ uy tín tên miền thấp, bạn nên chọn các từ khóa dài có chỉ số SD dưới 30 (vùng màu xanh lá) để có cơ hội lọt vào trang 1 Google nhanh nhất.'
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
    whatIsIt: 'Screaming Frog SEO Spider là phần mềm cài đặt trên máy tính (Desktop Crawler) tiêu chuẩn của ngành Technical SEO, hoạt động bằng cách giả lập bọ tìm kiếm quét qua từng URL trên website để lập bảng kiểm toán toàn bộ mã trạng thái HTTP, thẻ Title, Meta Description, H1, H2, Canonical và dung lượng hình ảnh.',
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
      'Nhập địa chỉ trang chủ website cần kiểm tra vào ô "Enter URL to spider" và bấm Start.',
      'Nhìn sang cột tổng hợp Overview bên phải để lọc nhanh: Response Codes, Page Titles, H1 và Images.',
      'Bấm nút Export để xuất danh sách các URL bị lỗi ra file Excel làm phụ lục minh chứng cho báo cáo Audit SEO.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng Screaming Frog quét website của doanh nghiệp trong đồ án (tối đa 500 URLs), xuất bảng thống kê tỷ lệ % các trang bị thiếu Meta Description, thiếu Alt ảnh hoặc độ dài Title vượt quá 60 ký tự.',
    pros: [
      'Bản miễn phí 500 URLs cực kỳ hào phóng, không giới hạn số lần quét trong ngày.',
      'Có tính năng vẽ sơ đồ cây kiến trúc website (Force-Directed Crawl Diagram) rất ấn tượng để đưa vào slide báo cáo.'
    ],
    limitations: 'Phần mềm cài trên máy tính với giao diện nhiều tab kỹ thuật; cần nắm kiến thức cơ bản về On-page SEO để đọc hiểu các cột.',
    studentTip: 'Nếu làm báo cáo Audit SEO cho doanh nghiệp SME (< 500 trang), hãy xuất biểu đồ "Crawl Visualizations" từ Screaming Frog đưa vào bài thuyết trình.',
    alternatives: [
      { name: 'Semrush', slug: 'semrush', comparison: 'Semrush Site Audit chạy trên đám mây và có giao diện gợi ý sửa lỗi dễ đọc hơn, nhưng bản miễn phí giới hạn 100 trang.' },
      { name: 'Google Search Console (GSC)', slug: 'google-search-console', comparison: 'GSC cần quyền chủ sở hữu web, trong khi Screaming Frog có thể quét công khai bất kỳ website nào để làm bài tập Audit.' }
    ],
    faqs: [
      {
        q: 'Tôi không có quyền quản trị (Admin) của website doanh nghiệp thì có dùng Screaming Frog để Audit làm đồ án được không?',
        a: 'Hoàn toàn được! Screaming Frog hoạt động giống như một trình duyệt đi đọc các trang công khai của website, nên bạn chỉ cần gõ địa chỉ URL trang chủ của doanh nghiệp là quét được toàn bộ cấu trúc On-page của họ.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 48,
    slug: 'ahrefs-webmaster-tools',
    name: 'Ahrefs & Ahrefs Webmaster Tools',
    tagline: 'Phân tích Backlink, Authority & Kiểm tra sức khỏe SEO miễn phí cho web của bạn',
    excerpt: 'Ông lớn ngành SEO toàn cầu với kho dữ liệu Backlink số 1 thế giới cùng bộ công cụ Webmaster Tools miễn phí giúp quét Site Audit và xem từ khóa cho web sở hữu.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Ahrefs Webmaster Tools (AWT) miễn phí 100% cho website bạn sở hữu; các công cụ miễn phí lẻ (Backlink Checker, Keyword Generator) dùng tự do; bản Full từ ~$129/tháng.',
    level: 'Nâng cao',
    officialUrl: 'https://ahrefs.com/webmaster-tools',
    tags: ['Backlinks', 'Site Audit', 'Domain Rating', 'SEO'],
    whatIsIt: 'Ahrefs là một trong hai bộ công cụ SEO uy tín nhất thế giới, nổi tiếng với chỉ số Domain Rating (DR) và cơ sở dữ liệu Backlink đồ sộ; gói Ahrefs Webmaster Tools cho phép chủ website quét lỗi kỹ thuật và xem toàn bộ Backlink/Keywords của chính mình miễn phí.',
    bestFor: 'SEO Specialist, Link Builder và sinh viên sở hữu website dự án muốn theo dõi Backlink và sức khỏe kỹ thuật chuẩn quốc tế.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ cơ sở dữ liệu tìm kiếm Google Việt Nam rất chính xác.',
    studentPerk: 'Dùng miễn phí Ahrefs Free SEO Tools (Keyword Generator, Backlink Checker, Broken Link Checker, SERP Checker) không cần đăng nhập và gói AWT cho website cá nhân.',
    useCases: [
      'Dùng Free Backlink Checker để xem Top 100 liên kết trỏ về website đối thủ và chỉ số Domain Rating (DR).',
      'Chạy Site Audit miễn phí trong AWT cho website nhóm để phát hiện hơn 100 loại lỗi SEO kỹ thuật.'
    ],
    pros: [
      'Dữ liệu Backlink và ước tính Traffic của Ahrefs được giới SEO Việt Nam tin dùng nhất.',
      'Kho blog hướng dẫn SEO và kênh YouTube Ahrefs Academy cực kỳ chất lượng.'
    ],
    limitations: 'Bản trả phí đầy đủ rất đắt; bản miễn phí chỉ xem được toàn bộ dữ liệu trên các website bạn đã xác minh quyền sở hữu.',
    studentTip: 'Bookmark trang `ahrefs.com/free-seo-tools` để dùng bộ 10+ công cụ kiểm tra nhanh Backlink, SERP và độ khó từ khóa hoàn toàn miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 49,
    slug: 'answerthepublic',
    name: 'AnswerThePublic',
    tagline: 'Khám phá bản đồ câu hỏi (What, Why, How) của người dùng xoay quanh từ khóa',
    excerpt: 'Trực quan hóa toàn bộ câu hỏi, giới từ và so sánh mà khách hàng đang gõ trên Google, YouTube, TikTok để lên ý tưởng Content & AEO.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản miễn phí cho phép tìm kiếm 3 lượt/ngày (chọn vùng Việt Nam và tiếng Việt).',
    level: 'Cơ bản',
    officialUrl: 'https://answerthepublic.com/',
    tags: ['AEO', 'Content Ideas', 'Questions', 'Search Listening'],
    whatIsIt: 'AnswerThePublic là công cụ lắng nghe hành vi tìm kiếm (Search Listening), thu thập dữ liệu gợi ý tự động (Autocomplete) từ Google, Bing, YouTube và TikTok rồi vẽ thành sơ đồ bánh xe câu hỏi (Ai, Cái gì, Tại sao, Như thế nào).',
    bestFor: 'Content Marketer lập Topic Cluster, chuyên viên tối ưu AEO (FAQ) và Copywriter tìm Insight nỗi đau khách hàng.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ chọn Quốc gia Vietnam và Ngôn ngữ Vietnamese để xuất sơ đồ câu hỏi tiếng Việt.',
    studentPerk: '3 lượt tra cứu miễn phí mỗi ngày kèm tính năng tải ảnh sơ đồ bánh xe độ nét cao hoặc file CSV.',
    useCases: [
      'Tìm bộ câu hỏi FAQ chuẩn xác từ người dùng thật để đưa vào cuối bài viết SEO/AEO.',
      'Khám phá các chủ đề so sánh ("X vs Y", "X hay Y") cho tuyến bài đánh giá sản phẩm.'
    ],
    pros: [
      'Hình ảnh sơ đồ bánh xe cực kỳ trực quan để đưa vào slide thuyết trình chiến lược nội dung.',
      'Đo được cả xu hướng câu hỏi trên TikTok và YouTube.'
    ],
    limitations: 'Giới hạn 3 lượt tìm kiếm/ngày ở bản miễn phí.',
    studentTip: 'Hãy gõ từ khóa rộng ngắn gọn (1–2 từ, ví dụ: "kem chống nắng", "học marketing") để sơ đồ câu hỏi bung ra phong phú nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 50,
    slug: 'alsoasked',
    name: 'AlsoAsked',
    tagline: 'Khai thác cây câu hỏi "People Also Ask" (Mọi người cũng hỏi) từ Google',
    excerpt: 'Công cụ vàng cho AEO & SEO: vẽ sơ đồ phân nhánh các câu hỏi liên quan trực tiếp trên hộp People Also Ask của Google.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản miễn phí tặng 3 lượt tìm kiếm/ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://alsoasked.com/',
    tags: ['AEO', 'People Also Ask', 'Topic Cluster', 'FAQ'],
    whatIsIt: 'AlsoAsked là công cụ thu thập và trực quan hóa dữ liệu từ hộp "Mọi người cũng hỏi" (People Also Ask - PAA) của Google theo dạng sơ đồ cây đa tầng, cho thấy chính xác cách người dùng đào sâu vấn đề sau câu hỏi đầu tiên.',
    bestFor: 'SEO Content Strategist xây dựng cấu trúc thẻ H2/H3 và phần FAQ chuẩn AEO.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ chọn Region: Vietnam và Language: Vietnamese.',
    studentPerk: '3 lượt tra cứu miễn phí mỗi ngày, cho phép tải ảnh sơ đồ PNG đưa thẳng vào bài báo cáo.',
    useCases: [
      'Biến trực tiếp các câu hỏi tầng 1 và tầng 2 của AlsoAsked thành hệ thống thẻ H2, H3 trong bài viết blog.',
      'Tìm câu hỏi ngách để trả lời trực diện nhằm chiếm hộp trích dẫn AI Overviews và People Also Ask.'
    ],
    pros: [
      'Phản ánh chính xác mối liên kết ngữ nghĩa mà thuật toán Google đang hiểu về chủ đề.',
      'Nhanh, gọn, tải ảnh sơ đồ miễn phí.'
    ],
    limitations: 'Hạn mức miễn phí 3 lượt/ngày.',
    studentTip: 'Kết hợp AlsoAsked với Google Trends: dùng Trends xem từ khóa đang nóng, sau đó đưa vào AlsoAsked để tách thành dàn ý 5 bài viết chi tiết.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 51,
    slug: 'pagespeed-insights',
    name: 'Google PageSpeed Insights',
    tagline: 'Đo tốc độ tải trang & Chỉ số Core Web Vitals chính chủ Google',
    excerpt: 'Kiểm tra điểm hiệu năng (Mobile/Desktop), LCP, INP, CLS và nhận danh sách lỗi kỹ thuật cần tối ưu để tăng thứ hạng SEO và tỷ lệ chuyển đổi.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% không giới hạn lượt kiểm tra.',
    level: 'Cơ bản',
    officialUrl: 'https://pagespeed.web.dev/',
    tags: ['Core Web Vitals', 'Technical SEO', 'Speed Test', 'UX'],
    whatIsIt: 'PageSpeed Insights là công cụ đo lường hiệu suất website chính thức của Google sử dụng dữ liệu thực tế từ người dùng Chrome (CrUX) và mô phỏng Lighthouse để chấm điểm tốc độ, khả năng phản hồi, độ ổn định bố cục (Core Web Vitals) và các tiêu chí SEO/Accessibility.',
    bestFor: 'Technical SEO, Web Developer và sinh viên kiểm tra tốc độ Landing Page trước khi chạy quảng cáo trả phí.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, giải thích chi tiết từng nguyên nhân làm chậm trang.',
    studentPerk: 'Miễn phí 100%, dán bất kỳ URL nào cũng kiểm tra được ngay cả trang của đối thủ để so sánh.',
    useCases: [
      'Kiểm tra xem Landing Page đồ án tải trên điện thoại 4G có bị chậm quá 3 giây không (tránh mất 40% khách bấm quảng cáo).',
      'Phát hiện hình ảnh chưa nén sang định dạng WebP hoặc tệp JavaScript chặn hiển thị.'
    ],
    pros: [
      'Thước đo chuẩn mực nhất vì Google dùng chính Core Web Vitals làm yếu tố xếp hạng SEO.',
      'Chấm 4 cột rõ ràng: Performance, Accessibility, Best Practices, SEO.'
    ],
    limitations: 'Kết quả đo phòng thí nghiệm (Lab Data) có thể dao động nhẹ giữa các lần bấm chạy thử.',
    studentTip: 'Trước khi chạy quảng cáo Facebook/Google về Landing Page, hãy test trên PageSpeed Insights tab Mobile — nếu điểm Performance dưới 50, hãy nén lại toàn bộ ảnh sang WebP ngay.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 52,
    slug: 'gtmetrix',
    name: 'GTmetrix',
    tagline: 'Phân tích biểu đồ thác nước (Waterfall) tốc độ tải từng tài nguyên website',
    excerpt: 'Xem chính xác file ảnh, font chữ hay đoạn script nào đang ngốn nhiều thời gian tải nhất trên trang web của bạn.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép test tốc độ hàng tuần và lưu lịch sử cơ bản; đăng ký tài khoản miễn phí để chọn máy chủ kiểm tra.',
    level: 'Trung bình',
    officialUrl: 'https://gtmetrix.com/',
    tags: ['Speed Test', 'Waterfall', 'Technical SEO', 'Performance'],
    whatIsIt: 'GTmetrix là công cụ đo hiệu năng website chuyên sâu nổi tiếng với biểu đồ Waterfall (thác nước), hiển thị thứ tự và thời gian tải của từng file HTML, CSS, JS, hình ảnh trên trang.',
    bestFor: 'Webmaster, Technical SEO và sinh viên làm báo cáo Technical Audit chuyên sâu.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện tiếng Anh kỹ thuật nhưng các chỉ số Grade A–F và thời gian (ms/s) rất trực quan.',
    studentPerk: 'Tài khoản miễn phí cho phép xem đầy đủ biểu đồ Waterfall để tìm file ảnh nặng nhất làm chậm web.',
    useCases: [
      'Chụp biểu đồ Waterfall và chấm điểm Grade A–F đưa vào báo cáo tối ưu tốc độ website.',
      'So sánh tốc độ tải trang trước và sau khi tối ưu hình ảnh/cache.'
    ],
    pros: [
      'Biểu đồ Waterfall cực kỳ chi tiết giúp bắt đúng "thủ phạm" làm chậm trang.',
      'Cho phép chọn vị trí máy chủ kiểm tra (bao gồm khu vực châu Á).'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt test trong ngày và mặc định test ở giao diện Desktop (muốn test Mobile cần gói Pro).',
    studentTip: 'Dùng song song PageSpeed Insights (cho điểm Mobile) và GTmetrix (để soi biểu đồ Waterfall từng file).',
    verifiedAt: '2026-11-24'
  },
  {
    id: 53,
    slug: 'google-rich-results-test',
    name: 'Google Rich Results Test',
    tagline: 'Kiểm tra dữ liệu có cấu trúc (Schema JSON-LD) hợp lệ cho SEO & AEO',
    excerpt: 'Xác minh xem mã Schema FAQPage, Article, Product, SoftwareApplication, Review trên trang web có được Google đọc đúng để hiển thị kết quả giàu thông tin hay không.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính chủ từ Google.',
    level: 'Trung bình',
    officialUrl: 'https://search.google.com/test/rich-results',
    tags: ['Schema Markup', 'JSON-LD', 'AEO', 'Structured Data'],
    whatIsIt: 'Google Rich Results Test là công cụ kiểm thử chính thức của Google cho phép nhập URL hoặc đoạn mã HTML để kiểm tra xem dữ liệu có cấu trúc (Schema.org JSON-LD) có hợp lệ và đủ điều kiện hiển thị kết quả nổi bật trên Google Search hay không.',
    bestFor: 'Technical SEO, Web Developer và Marketer triển khai chiến lược AEO/GEO bằng Schema JSON-LD.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ giao diện tiếng Việt.',
    studentPerk: 'Miễn phí 100%, kiểm tra được cả chế độ Googlebot Smartphone và Desktop.',
    useCases: [
      'Kiểm tra mã Schema `FAQPage`, `Article`, `HowTo`, `SoftwareApplication`, `BreadcrumbList` sau khi gắn lên website.',
      'Phát hiện lỗi thiếu trường bắt buộc (ví dụ thiếu `image` hoặc `author`) trong JSON-LD.'
    ],
    pros: [
      'Kết quả kiểm tra chuẩn xác tuyệt đối theo bộ quy tắc của Google Search.',
      'Cho phép dán trực tiếp đoạn code HTML để test trước khi đẩy lên web thật.'
    ],
    limitations: 'Chỉ kiểm tra các loại Schema mà Google hỗ trợ hiển thị Rich Results (muốn kiểm tra toàn bộ Schema.org hãy dùng Schema Validator).',
    studentTip: 'Mỗi khi viết bài SEO hoặc thêm công cụ mới có gắn Schema, hãy dán URL vào Rich Results Test chụp ảnh tích xanh hợp lệ làm minh chứng kỹ thuật.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 54,
    slug: 'schema-markup-validator',
    name: 'Schema Markup Validator',
    tagline: 'Kiểm tra toàn bộ thực thể Schema.org chuẩn GEO trên website',
    excerpt: 'Công cụ chính thức của Schema.org giúp đọc và xác thực mọi loại dữ liệu có cấu trúc (JSON-LD, Microdata) kể cả các loại mà Google Rich Results không hiện.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%.',
    level: 'Trung bình',
    officialUrl: 'https://validator.schema.org/',
    tags: ['Schema.org', 'GEO', 'Entity SEO', 'JSON-LD'],
    whatIsIt: 'Schema Markup Validator (tiền thân là Google Structured Data Testing Tool) là trình xác thực chính thức của tổ chức Schema.org, phân tích toàn bộ đồ thị thực thể (Entity Graph) và các thuộc tính JSON-LD được khai báo trên trang web.',
    bestFor: 'Chuyên gia Entity SEO, GEO Strategist và Web Developer.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Đọc chuẩn nội dung tiếng Việt UTF-8 bên trong các thẻ JSON-LD.',
    studentPerk: 'Miễn phí hoàn toàn để học cách các công cụ tìm kiếm và AI đọc hiểu thực thể (`Person`, `Organization`, `WebSite`, `SoftwareApplication`).',
    useCases: [
      'Kiểm tra xem website có khai báo đúng liên kết thực thể `sameAs` và `author` chuẩn EEAT chưa.',
      'Soi cấu trúc Schema của các website đối thủ đứng Top đầu ngành.'
    ],
    pros: [
      'Hiển thị toàn bộ mọi loại Schema không bị lọc bớt như Rich Results Test.',
      'Báo lỗi cú pháp JSON chi tiết tới từng dòng.'
    ],
    limitations: 'Giao diện mang tính kỹ thuật cho người hiểu cấu trúc dữ liệu JSON-LD.',
    studentTip: 'Dùng Validator để kiểm tra xem đối thủ Top 1 đang gắn những loại Schema nào trên bài viết của họ để học hỏi.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 55,
    slug: 'surfer-seo',
    name: 'Surfer SEO',
    tagline: 'Tối ưu bài viết SEO On-page theo điểm số NLP & mật độ từ khóa Top 10 Google',
    excerpt: 'Phân tích các bài viết đang đứng Top 1–10 trên Google để gợi ý độ dài bài, số lượng thẻ Heading, ảnh và các từ khóa ngữ nghĩa (NLP) cần có.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Trả phí từ ~$79–$99/tháng (có hoàn tiền hoặc bản dùng thử theo chính sách từng đợt).',
    level: 'Trung bình',
    officialUrl: 'https://surferseo.com/',
    tags: ['On-Page SEO', 'Content Optimization', 'NLP', 'SERP Analyzer'],
    whatIsIt: 'Surfer SEO là nền tảng tối ưu hóa nội dung On-page dựa trên dữ liệu phân tích tương quan (Correlation Analysis) từ các trang đang xếp hạng cao nhất trên Google, chấm điểm bài viết từ 0–100 theo thời gian thực.',
    bestFor: 'SEO Content Team chuyên nghiệp, Agency SEO và Marketer muốn chuẩn hóa chất lượng bài viết SEO.',
    platforms: 'Web Browser, Google Docs Extension, WordPress Plugin',
    vietnameseSupport: 'Hỗ trợ phân tích SERP tại Việt Nam (Google.com.vn) và gợi ý từ khóa tiếng Việt.',
    studentPerk: 'Cung cấp tiện ích miễn phí "Keyword Surfer" trên Chrome để xem ngay Search Volume và số từ của các bài Top Google.',
    useCases: [
      'Chấm điểm tối ưu On-page (Content Score) cho bài viết trước khi xuất bản.',
      'Dùng tiện ích miễn phí Keyword Surfer ngay trên trình duyệt để nghiên cứu từ khóa.'
    ],
    pros: [
      'Chấm điểm trực quan giúp người viết Content dễ dàng đạt chuẩn ngữ nghĩa.',
      'Tiện ích mở rộng Keyword Surfer hoàn toàn miễn phí và rất nhẹ.'
    ],
    limitations: 'Bản nền tảng chính có giá cao đối với sinh viên cá nhân.',
    studentTip: 'Dù chưa mua bản trả phí, bạn vẫn nên cài tiện ích miễn phí **Keyword Surfer** trên Chrome để xem lượng tìm kiếm và gợi ý từ khóa ngay trên trang Google.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 56,
    slug: 'neuronwriter',
    name: 'NeuronWriter',
    tagline: 'Tối ưu bài viết chuẩn ngữ nghĩa NLP với chi phí tiết kiệm cho Content SEO',
    excerpt: 'Giải pháp thay thế Surfer SEO tối ưu chi phí hơn, phân tích đối thủ SERP và gợi ý bộ từ khóa NLP cần đưa vào bài viết.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Có bản dùng thử miễn phí giới hạn hoặc gói trả phí từ ~$23/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://neuronwriter.com/',
    tags: ['NLP SEO', 'Content Editor', 'SERP Analysis', 'Semantic SEO'],
    whatIsIt: 'NeuronWriter là công cụ lập kế hoạch và tối ưu hóa nội dung SEO dựa trên xử lý ngôn ngữ tự nhiên (NLP), phân tích cấu trúc bài viết của đối thủ cạnh tranh để đưa ra danh sách thuật ngữ ngữ nghĩa nên bổ sung.',
    bestFor: 'Freelancer SEO, Niche Site Builder và Marketer cần tối ưu Content Score với ngân sách hợp lý.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ chọn công cụ tìm kiếm `google.com.vn` và ngôn ngữ Vietnamese.',
    studentPerk: 'Cung cấp tài khoản dùng thử miễn phí để trải nghiệm quy trình chấm điểm Semantic SEO.',
    useCases: [
      'Xây dựng dàn ý bài viết từ danh sách H2/H3 của Top 10 đối thủ.',
      'Kiểm tra xem bài viết đã phủ đủ các thực thể ngữ nghĩa liên quan chưa.'
    ],
    pros: [
      'Chi phí rẻ hơn nhiều so với Surfer SEO nhưng vẫn đầy đủ tính năng cốt lõi.',
      'Giao diện gợi ý thuật ngữ theo Title, Headings và Body rõ ràng.'
    ],
    limitations: 'Giao diện trình soạn thảo có nhiều thông số hơi rối với người mới lần đầu tiếp xúc.',
    studentTip: 'Hãy chú ý tối ưu nhóm thuật ngữ xuất hiện ở thẻ Title và H1/H2 trước vì chúng mang trọng số SEO cao nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 57,
    slug: 'mangools-kwfinder',
    name: 'Mangools (KWFinder)',
    tagline: 'Bộ 5 công cụ nghiên cứu từ khóa & kiểm tra độ khó SEO cực kỳ dễ nhìn',
    excerpt: 'Nổi tiếng với chỉ số Keyword Difficulty (KD) chuẩn xác cho từ khóa ngách và giao diện đẹp, thân thiện nhất cho người mới học SEO.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Cho phép dùng thử miễn phí 10 ngày (giới hạn lượt tra/ngày); gói trả phí từ ~$29.9/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://mangools.com/kwfinder',
    tags: ['KWFinder', 'Long-tail Keywords', 'Keyword Difficulty', 'SERPChecker'],
    whatIsIt: 'Mangools là bộ 5 công cụ SEO tinh gọn gồm KWFinder (tìm từ khóa), SERPChecker (soi trang kết quả), SERPWatcher (theo dõi thứ hạng), LinkMiner (soi backlink) và SiteProfiler.',
    bestFor: 'Sinh viên, Blogger và doanh nghiệp nhỏ cần nghiên cứu từ khóa dài (Long-tail) dễ lên Top với chi phí vừa phải.',
    platforms: 'Web Browser, Chrome/Firefox Extension',
    vietnameseSupport: 'Hỗ trợ lọc chính xác từng tỉnh thành tại Việt Nam và tiếng Việt.',
    studentPerk: 'Bản dùng thử miễn phí 10 ngày cho phép tra cứu KWFinder và xuất dữ liệu từ khóa.',
    useCases: [
      'Tìm bộ từ khóa dài có lượng tìm kiếm ổn định và độ khó KD dưới 30.',
      'So sánh nhanh chỉ số DA/PA và số lượng Backlink của 10 đối thủ đang đứng trang 1.'
    ],
    pros: [
      'Giao diện đẹp và dễ đọc nhất trong các công cụ SEO chuyên nghiệp.',
      'Hiển thị rõ xu hướng tìm kiếm 12 tháng ngay cạnh mỗi từ khóa.'
    ],
    limitations: 'Không có gói miễn phí vĩnh viễn sau khi hết 10 ngày dùng thử.',
    studentTip: 'Tận dụng 10 ngày dùng thử vào đúng tuần làm kế hoạch từ khóa SEO của môn học để xuất toàn bộ bảng từ khóa về lưu trữ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 58,
    slug: 'keyword-tool-io',
    name: 'KeywordTool.io',
    tagline: 'Khai thác từ khóa gợi ý Autocomplete trên Google, YouTube, TikTok & Shopee',
    excerpt: 'Giúp tìm hàng trăm từ khóa đuôi dài người dùng thực sự gõ vào thanh tìm kiếm của Google, YouTube, TikTok và các sàn thương mại điện tử.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí hiển thị danh sách hàng trăm ý tưởng từ khóa gợi ý (ẩn cột Search Volume và CPC); gói Pro trả phí để xem số liệu.',
    level: 'Cơ bản',
    officialUrl: 'https://keywordtool.io/',
    tags: ['Autocomplete', 'Long-tail', 'YouTube SEO', 'TikTok Keywords'],
    whatIsIt: 'KeywordTool.io sử dụng tính năng tự động hoàn thành (Autocomplete) của Google, YouTube, Bing, Amazon, Instagram và X để sinh ra hàng trăm biến thể từ khóa đuôi dài theo bảng chữ cái A–Z.',
    bestFor: 'Content Creator tìm từ khóa cho tiêu đề YouTube/TikTok và SEOer tìm từ khóa ngách miễn phí.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ chọn `Google.com.vn` và ngôn ngữ `Vietnamese` rất chuẩn.',
    studentPerk: 'Không cần đăng ký tài khoản vẫn lấy được hàng trăm gợi ý từ khóa dài theo bảng chữ cái A–Z miễn phí.',
    useCases: [
      'Tìm nhanh danh sách từ khóa dài cho kênh YouTube hoặc bài viết blog.',
      'Kết hợp lấy danh sách từ khóa từ KeywordTool.io rồi dán vào Google Keyword Planner để xem lượng tìm kiếm miễn phí.'
    ],
    pros: [
      'Tạo ra rất nhiều biến thể từ khóa thực tế mà người dùng gõ.',
      'Hỗ trợ cả tab YouTube, Instagram và App Store.'
    ],
    limitations: 'Bản miễn phí che mất cột lượng tìm kiếm (Search Volume) và giá thầu CPC.',
    studentTip: 'Mẹo tiết kiệm 100%: Copy danh sách từ khóa từ KeywordTool.io (bản Free), sau đó dán vào mục "Get search volume and forecasts" của Google Keyword Planner để lấy con số Search Volume miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 59,
    slug: 'rank-math-seo',
    name: 'Rank Math SEO (WordPress)',
    tagline: 'Plugin SEO WordPress tốt nhất tích hợp Schema, Sitemap & Chấm điểm bài viết',
    excerpt: 'Trình tối ưu SEO phổ biến nhất trên WordPress hiện nay: tự động tạo sitemap.xml, gắn Schema JSON-LD và chấm điểm On-page theo thời gian thực.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản Free trên WordPress.org cực kỳ đầy đủ tính năng cốt lõi (hơn hẳn bản Free của nhiều plugin khác); bản Pro từ ~$6.99/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://rankmath.com/',
    tags: ['WordPress', 'On-Page SEO', 'Schema', 'Sitemap'],
    whatIsIt: 'Rank Math là plugin tối ưu hóa công cụ tìm kiếm (SEO) dành cho nền tảng WordPress, cung cấp trình chấm điểm On-page thang 100, tự động tạo Sitemap, chuyển hướng 301 và gắn dữ liệu có cấu trúc Schema Markup trực quan.',
    bestFor: 'Sinh viên thực hành xây dựng website/blog dự án trên WordPress và SEOer quản trị web doanh nghiệp.',
    platforms: 'WordPress Plugin',
    vietnameseSupport: 'Giao diện hỗ trợ tiếng Việt và nhận diện từ khóa tiếng Việt có dấu chuẩn xác.',
    studentPerk: 'Bản miễn phí đã cho phép tối ưu nhiều từ khóa trọng tâm cùng lúc, tạo Sitemap XML, Redirects 301 và kết nối trực tiếp Google Search Console/GA4.',
    useCases: [
      'Thiết lập chuẩn Title, Meta Description, URL thân thiện và thẻ Open Graph chia sẻ Facebook cho từng bài viết.',
      'Gắn Schema `Article`, `FAQ`, `Product` chỉ bằng vài cú nhấp chuột không cần viết code.'
    ],
    pros: [
      'Nhẹ, giao diện hiện đại và bản miễn phí có nhiều tính năng mà plugin khác phải trả tiền.',
      'Có danh sách kiểm tra chi tiết (Checklist) giúp người mới không quên các lỗi On-page cơ bản.'
    ],
    limitations: 'Chỉ chạy trên hệ thống website WordPress.',
    studentTip: 'Đừng cố chạy theo điểm 100/100 một cách máy móc bằng cách nhồi nhét từ khóa; chỉ cần đạt 80+ xanh lá và giữ văn phong tự nhiên cho người đọc là chuẩn nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 60,
    slug: 'yoast-seo',
    name: 'Yoast SEO (WordPress)',
    tagline: 'Plugin SEO WordPress kinh điển với hệ thống đèn giao thông Đỏ - Cam - Xanh',
    excerpt: 'Công cụ quen thuộc tại hầu hết doanh nghiệp dùng WordPress để kiểm soát thẻ Meta, tính dễ đọc (Readability) và cấu trúc liên kết nội bộ.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí có đầy đủ tính năng SEO cơ bản cho 1 từ khóa chính/bài; bản Premium ~$99/năm.',
    level: 'Cơ bản',
    officialUrl: 'https://yoast.com/',
    tags: ['WordPress', 'SEO Plugin', 'Readability', 'Meta Tags'],
    whatIsIt: 'Yoast SEO là plugin SEO lâu đời và phổ biến hàng đầu trên hệ sinh thái WordPress, giúp người viết bài kiểm soát mật độ từ khóa, xem trước giao diện hiển thị trên Google (Snippet Preview) và thiết lập thẻ Canonical.',
    bestFor: 'Sinh viên thực tập tại doanh nghiệp sử dụng sẵn nền tảng WordPress có cài đặt Yoast SEO.',
    platforms: 'WordPress Plugin, Shopify App',
    vietnameseSupport: 'Giao diện hỗ trợ tiếng Việt.',
    studentPerk: 'Miễn phí hoàn toàn cho các tác vụ On-page cơ bản và tự động sinh XML Sitemap.',
    useCases: [
      'Chỉnh sửa SEO Title, Slug và Meta Description cho bài viết chuẩn bị xuất bản.',
      'Kiểm tra xem bài viết đã có đủ liên kết nội bộ (Internal Links) và liên kết ngoài chưa.'
    ],
    pros: [
      'Cực kỳ phổ biến tại các doanh nghiệp Việt Nam nên biết dùng Yoast là kỹ năng thực tế cần có.',
      'Ổn định, ít xung đột với các giao diện WordPress.'
    ],
    limitations: 'Bản miễn phí chỉ tối ưu được 1 từ khóa chính mỗi bài và không có sẵn trình chuyển hướng Redirects 301 như Rank Math Free.',
    studentTip: 'Khi đi thực tập viết bài Content SEO, nhiều công ty vẫn dùng Yoast — hãy nắm vững cách bật đèn xanh cho cả tab SEO và cấu trúc H2/H3.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 61,
    slug: 'similarweb',
    name: 'Similarweb',
    tagline: 'Đo lường ước tính tổng lượng truy cập & nguồn kênh (Channel Mix) của đối thủ',
    excerpt: 'Xem bất kỳ website đối thủ nào đang có bao nhiêu triệu lượt truy cập/tháng, đến từ Direct, Search, Social hay Referral và đối tượng nhân khẩu học ra sao.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí và Chrome Extension cho xem tổng quan traffic 3 tháng gần nhất, phân bổ kênh và top quốc gia; bản Pro dành cho doanh nghiệp.',
    level: 'Cơ bản',
    officialUrl: 'https://www.similarweb.com/',
    tags: ['Competitor Traffic', 'Market Intelligence', 'Channel Mix', 'Benchmarking'],
    whatIsIt: 'Similarweb là nền tảng phân tích thị trường kỹ thuật số (Digital Market Intelligence), cung cấp số liệu ước tính về tổng lượt truy cập website, thời gian trên trang, tỷ lệ thoát và tỷ trọng các nguồn traffic (Organic Search, Paid Search, Social, Direct, Email) của mọi thương hiệu.',
    bestFor: 'Sinh viên phân tích đối thủ cạnh tranh trong đồ án Digital Marketing, Media Planner và nhà nghiên cứu thị trường.',
    platforms: 'Web Browser, Similarweb Chrome Extension (khuyên dùng)',
    vietnameseSupport: 'Đo lường tốt các website có lưu lượng truy cập trung bình trở lên tại Việt Nam.',
    studentPerk: 'Cài Similarweb Chrome Extension miễn phí để bấm 1 nút là thấy ngay biểu đồ Traffic và nguồn kênh của trang web đang mở.',
    useCases: [
      'So sánh tỷ trọng nguồn traffic (ví dụ: Shopee phụ thuộc Direct/App, còn thương hiệu mới phụ thuộc Paid Ads/Social).',
      'Lấy số liệu Benchmark (tỷ lệ thoát, số trang/phiên) của các doanh nghiệp đầu ngành đưa vào báo cáo.'
    ],
    pros: [
      'Nhìn được bức tranh toàn cảnh đa kênh (cả Social, Referral, Display Ads chứ không chỉ riêng SEO).',
      'Chrome Extension miễn phí cực kỳ tiện lợi.'
    ],
    limitations: 'Với các website nhỏ có dưới 5.000 lượt truy cập/tháng, Similarweb có thể không đủ dữ liệu để hiển thị.',
    studentTip: 'Đưa biểu đồ Marketing Channels Overview từ Similarweb của 2–3 đối thủ lớn vào phần Phân tích đối thủ đồ án để chỉ ra đối thủ đang dồn lực vào kênh nào.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 62,
    slug: 'detailed-seo-extension',
    name: 'Detailed SEO Extension',
    tagline: 'Tiện ích Chrome soi cấu trúc Heading (H1-H6), Meta & Schema trong 1 giây',
    excerpt: 'Tiện ích miễn phí được giới SEO chuyên nghiệp yêu thích nhất để kiểm tra nhanh On-page của bất kỳ bài viết nào ngay trên trình duyệt.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trọn đời.',
    level: 'Cơ bản',
    officialUrl: 'https://detailed.com/extension/',
    tags: ['Chrome Extension', 'On-Page SEO', 'Headings', 'Audit'],
    whatIsIt: 'Detailed SEO Extension là tiện ích mở rộng nhẹ trên Google Chrome giúp đọc tức thì toàn bộ thông số On-page của trang web đang xem: Title, Description, Canonical, Robots, cấu trúc cây Headings (H1–H6), Links, Images thiếu Alt và Schema.',
    bestFor: 'SEO Specialist, Content Writer tham khảo dàn ý bài đối thủ và sinh viên học kiểm tra lỗi On-page.',
    platforms: 'Google Chrome / Microsoft Edge Extension',
    vietnameseSupport: 'Hiển thị chuẩn mọi ký tự tiếng Việt.',
    studentPerk: 'Miễn phí 100%, không cần tạo tài khoản, bấm vào biểu tượng là đọc được dàn ý H1–H3 của đối thủ.',
    useCases: [
      'Mở bài viết đang đứng Top 1 Google và bấm Detailed SEO > tab Headings để học cách đối thủ chia bố cục dàn ý.',
      'Kiểm tra nhanh bài viết mình vừa đăng đã có đúng 1 thẻ H1 và đầy đủ thẻ Alt ảnh chưa.'
    ],
    pros: [
      'Cực kỳ nhanh, sạch sẽ, không quảng cáo.',
      'Có tính năng xuất danh sách Headings hoặc highlight liên kết Nofollow ngay trên trang.'
    ],
    limitations: 'Chỉ kiểm tra từng trang đơn lẻ đang mở (muốn quét cả website hãy dùng Screaming Frog).',
    studentTip: 'Mỗi khi nghiên cứu lập dàn ý bài SEO, hãy mở 3 bài Top đầu Google và dùng Detailed SEO Extension để sao chép khung Heading của họ về tham khảo.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 63,
    slug: 'moz-pro-bar',
    name: 'Moz & MozBar Extension',
    tagline: 'Kiểm tra chỉ số uy tín tên miền (DA/PA) & mức độ Spam Score của website',
    excerpt: 'Công cụ kinh điển của Moz giúp xem nhanh Domain Authority (DA) và Page Authority (PA) ngay trên trang kết quả tìm kiếm Google.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Tiện ích MozBar và công cụ Domain Overview miễn phí (tối đa 10 lượt/tháng với tài khoản Free); gói Moz Pro trả phí từ ~$49–$99/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://moz.com/products/pro/seo-toolbar',
    tags: ['Domain Authority', 'MozBar', 'SEO Metrics', 'Backlinks'],
    whatIsIt: 'Moz là công ty tiên phong trong ngành SEO toàn cầu với thước đo Domain Authority (DA - thang 1 đến 100) và Page Authority (PA); tiện ích MozBar hiển thị trực tiếp các chỉ số này dưới mỗi kết quả tìm kiếm Google.',
    bestFor: 'SEOer đánh giá độ khó cạnh tranh trên trang kết quả Google và sàng lọc website đặt Backlink/Guest Post.',
    platforms: 'Chrome Extension, Web Browser',
    vietnameseSupport: 'Hoạt động tốt trên Google.com.vn.',
    studentPerk: 'Tài khoản Moz miễn phí cho phép dùng MozBar xem DA/PA và Spam Score.',
    useCases: [
      'Đánh giá xem từ khóa có dễ lên Top không: nếu trang 1 Google có nhiều kết quả DA dưới 20 thì cơ hội cho web mới rất cao.',
      'Kiểm tra Spam Score trước khi mua/đặt liên kết từ một trang báo hoặc blog.'
    ],
    pros: [
      'Chỉ số DA/PA rất phổ biến trong báo giá dịch vụ SEO và Guest Post tại Việt Nam.',
      'Highlight nhanh liên kết Dofollow/Nofollow trên trang.'
    ],
    limitations: 'Tài khoản miễn phí giới hạn số lượt tra cứu chuyên sâu trong tháng.',
    studentTip: 'Khi kiểm tra tính khả thi của từ khóa, nếu thấy Top 5 toàn các trang báo lớn DA 70–90 thì nên chuyển sang đánh từ khóa dài ngách hơn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 64,
    slug: 'spyfu',
    name: 'SpyFu',
    tagline: 'Soi lịch sử từ khóa SEO & mẫu quảng cáo Google Ads nhiều năm của đối thủ',
    excerpt: 'Xem đối thủ đã từng chạy quảng cáo Google Ads với những từ khóa nào, chi phí ước tính và lịch sử thay đổi mẫu quảng cáo qua từng năm.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép tra cứu miễn phí một phần dữ liệu xem trước; gói Basic từ ~$39/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.spyfu.com/',
    tags: ['PPC Research', 'Google Ads', 'Competitor Spy', 'SEO History'],
    whatIsIt: 'SpyFu là công cụ phân tích đối thủ chuyên sâu về Google Ads (PPC) và SEO, lưu trữ lịch sử nhiều năm về những từ khóa đối thủ đã đấu thầu mua quảng cáo và các mẫu tiêu đề quảng cáo hiệu quả nhất.',
    bestFor: 'SEM / Google Ads Specialist và Marketer nghiên cứu thị trường quốc tế.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Dữ liệu mạnh nhất tại thị trường Mỹ, Anh, Úc và các nước nói tiếng Anh; hỗ trợ hạn chế hơn với thị trường nội địa Việt Nam.',
    studentPerk: 'Có thể tra cứu nhanh miễn phí không cần đăng nhập để xem mẫu cấu trúc phân tích đối thủ PPC.',
    useCases: [
      'Nghiên cứu cách các thương hiệu SaaS/Global viết mẫu quảng cáo Google Search Ads.',
      'Tìm bộ từ khóa đối thủ bỏ tiền chạy Google Ads (thường là từ khóa chuyển đổi ra tiền).'
    ],
    pros: [
      'Lưu trữ lịch sử mẫu quảng cáo Google Ads rất lâu dài.',
      'Giá gói trả phí dễ tiếp cận hơn Semrush/Ahrefs.'
    ],
    limitations: 'Cơ sở dữ liệu từ khóa tiếng Việt tại Việt Nam không đầy đủ bằng Semrush hoặc Google Keyword Planner.',
    studentTip: 'Rất hữu ích nếu bạn làm đồ án xuất khẩu, du lịch quốc tế hoặc sản phẩm phần mềm nhắm tới khách hàng nước ngoài.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 65,
    slug: 'frase-io',
    name: 'Frase.io',
    tagline: 'Lập dàn ý Content Brief & Tối ưu bài viết cho SEO lẫn AI Search (GEO)',
    excerpt: 'Quét Top 20 kết quả Google cho một từ khóa, tự động tổng hợp các câu hỏi, số liệu thống kê và cấu trúc Heading thành bản Content Brief chuẩn.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Có bản dùng thử miễn phí giới hạn (1 tài liệu/truy vấn); các gói trả phí từ ~$15–$45/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.frase.io/',
    tags: ['Content Brief', 'GEO', 'SERP Research', 'Topic Score'],
    whatIsIt: 'Frase.io là công cụ nghiên cứu nội dung SERP và tối ưu hóa bài viết, giúp Content Strategist tạo nhanh bản mô tả yêu cầu bài viết (Content Brief) từ Top 20 đối thủ và chấm điểm độ bao phủ chủ đề.',
    bestFor: 'Content Leader giao bài cho đội ngũ cộng tác viên (CTV) và SEO Writer.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ chọn quốc gia Vietnam để quét bài viết tiếng Việt trên SERP.',
    studentPerk: 'Có bộ công cụ miễn phí lẻ (như Outline Builder, Meta Description Generator) trên website.',
    useCases: [
      'Tạo bản Content Brief chuẩn cho một bài viết Pillar Page dài 2.500 từ.',
      'Tìm nhanh các số liệu thống kê (Statistics) được nhắc tới trong các bài Top Google.'
    ],
    pros: [
      'Tiết kiệm rất nhiều thời gian đọc 20 bài đối thủ để lên dàn ý.',
      'Giao diện chia đôi màn hình: một bên là dàn ý đối thủ, một bên là khung viết bài.'
    ],
    limitations: 'Bản miễn phí chỉ cho phép thử nghiệm rất ít tài liệu.',
    studentTip: 'Học cấu trúc một bản Content Brief chuyên nghiệp từ Frase (gồm Target Keyword, Search Intent, H2/H3 Outline, Questions to Answer, Word Count mục tiêu) để áp dụng khi quản lý nhóm Content.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 66,
    slug: 'lowfruits',
    name: 'LowFruits',
    tagline: 'Săn tìm từ khóa ngách cạnh tranh thấp ("Trái ngọt tầm thấp") cho web mới',
    excerpt: 'Phát hiện những từ khóa mà trang 1 Google đang bị chiếm bởi các trang yếu (diễn đàn, Quora, Reddit, blog nhỏ DA < 20) để web mới dễ dàng vượt mặt.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Freemium',
    pricingDetail: 'Tặng 10 credits miễn phí khi đăng ký; có mô hình nạp tiền theo lượt dùng (Pay-as-you-go từ $25) không cần đóng phí tháng.',
    level: 'Trung bình',
    officialUrl: 'https://lowfruits.io/',
    tags: ['Low Competition', 'Niche SEO', 'Weak Spots', 'Long-tail'],
    whatIsIt: 'LowFruits là công cụ nghiên cứu từ khóa chuyên săn tìm "Weak Spots" (điểm yếu trên SERP), tự động gắn nhãn những từ khóa mà Top 10 Google đang có sự xuất hiện của diễn đàn hoặc website mới có độ uy tín thấp.',
    bestFor: 'Sinh viên xây dựng blog cá nhân mới toanh (DA = 0) muốn có traffic tự nhiên nhanh nhất mà không cần mua Backlink.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ quét Google.com.vn với ngôn ngữ tiếng Việt.',
    studentPerk: '10 credits miễn phí và cơ chế mua gói lẻ dùng trọn đời không mất phí thuê bao hàng tháng.',
    useCases: [
      'Tìm những từ khóa mà kết quả Top Google đang là các trang hỏi đáp hoặc bài viết sơ sài.',
      'Nhóm các từ khóa có cùng ý định tìm kiếm thành cụm bài viết (Keyword Clustering).'
    ],
    pros: [
      'Tìm ra cơ hội lên Top thực tế hơn nhiều so với chỉ nhìn chỉ số KD chung chung.',
      'Không bắt buộc đóng tiền thuê bao hàng tháng.'
    ],
    limitations: 'Số lượng tra cứu miễn phí ban đầu ít.',
    studentTip: 'Áp dụng tư duy "Weak Spots" của LowFruits bằng tay: khi tìm từ khóa trên Google, nếu thấy Voz, Tinh tế, Facebook hoặc blog nhỏ đứng Top 3–5 thì đó là từ khóa cực kỳ ngon để viết bài vượt mặt.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 67,
    slug: 'google-mobile-friendly-lighthouse',
    name: 'Chrome DevTools Lighthouse',
    tagline: 'Bộ kiểm toán chất lượng Web (SEO, Tốc độ, Khả năng tiếp cận) tích hợp sẵn trên Chrome',
    excerpt: 'Công cụ miễn phí có sẵn ngay trong phím F12 của trình duyệt Google Chrome để chấm điểm 4 tiêu chí kỹ thuật của mọi website.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% tích hợp sẵn trong trình duyệt Google Chrome và Microsoft Edge.',
    level: 'Trung bình',
    officialUrl: 'https://developer.chrome.com/docs/lighthouse/overview/',
    tags: ['Lighthouse', 'Technical SEO', 'Accessibility', 'Chrome DevTools'],
    whatIsIt: 'Lighthouse là công cụ kiểm toán mã nguồn mở tự động tích hợp sẵn trong Google Chrome DevTools (F12), chấm điểm từ 0–100 cho Performance, Accessibility, Best Practices và SEO trên cả thiết bị di động và máy tính.',
    bestFor: 'Web Marketer, Technical SEO và sinh viên kiểm tra Landing Page đồ án ngay cả khi web đang chạy thử nội bộ (localhost).',
    platforms: 'Google Chrome / Edge Desktop Browser',
    vietnameseSupport: 'Kiểm tra tốt mọi trang web tiếng Việt.',
    studentPerk: 'Miễn phí 100%, kiểm tra được cả các trang web đang khóa đăng nhập hoặc chạy trên localhost trước khi đưa lên mạng.',
    useCases: [
      'Kiểm tra xem Landing Page có bị lỗi tương phản màu chữ (Contrast), thiếu thẻ Meta Viewport cho điện thoại hay lỗi SEO cơ bản không.',
      'Xuất báo cáo HTML/PDF trực tiếp từ tab Lighthouse để kẹp vào hồ sơ bàn giao web.'
    ],
    pros: [
      'Có sẵn trên máy tính không cần cài đặt thêm bất cứ gì.',
      'Chấm điểm được cả trang chưa công khai lên Internet.'
    ],
    limitations: 'Nên chạy ở chế độ Tab ẩn danh (Incognito) để các tiện ích mở rộng Chrome không làm sai lệch điểm tốc độ.',
    studentTip: 'Nhấn `Ctrl + Shift + N` mở tab ẩn danh Chrome -> bấm `F12` -> chọn tab `Lighthouse` -> bấm `Analyze page load` để lấy bảng điểm chuẩn nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 68,
    slug: 'ahrefs-broken-link-checker',
    name: 'Check My Links (Chrome Extension)',
    tagline: 'Quét phát hiện liên kết gãy (404 Broken Links) trên trang web chỉ với 1 cú bấm',
    excerpt: 'Tô màu xanh cho link sống và tô đỏ ngay lập tức các đường link bị lỗi 404 trên một bài viết hoặc trang Landing Page.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%.',
    level: 'Cơ bản',
    officialUrl: 'https://chromewebstore.google.com/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf',
    tags: ['Broken Links', 'Technical SEO', 'Chrome Extension', 'QA'],
    whatIsIt: 'Check My Links là tiện ích mở rộng Chrome chuyên rà soát toàn bộ thẻ liên kết (`<a>`) trên trang web hiện tại để tìm ra những đường dẫn bị hỏng (404 Not Found) hoặc chuyển hướng lỗi.',
    bestFor: 'Content Editor kiểm tra bài trước khi đăng, SEOer làm chiến dịch Broken Link Building.',
    platforms: 'Google Chrome Extension',
    vietnameseSupport: 'Hoạt động trên mọi website.',
    studentPerk: 'Miễn phí 100%, kiểm tra hàng trăm đường link trên một trang trong vài giây.',
    useCases: [
      'Kiểm tra toàn bộ nút bấm CTA và link trích dẫn trên Landing Page đồ án xem có link nào bị lỗi 404 không trước ngày thuyết trình.',
      'Áp dụng kỹ thuật Broken Link Building: tìm link gãy trên web đối thủ và đề xuất thay bằng bài viết chất lượng của mình.'
    ],
    pros: [
      'Nhanh, nhẹ, hiển thị trực quan bằng màu sắc ngay trên trang.',
      'Xuất danh sách các URL lỗi ra Console dễ dàng.'
    ],
    limitations: 'Chỉ quét trên từng trang đang mở.',
    studentTip: 'Trước khi nộp link website dự án cho giảng viên chấm điểm, hãy chạy Check My Links một lượt để đảm bảo 0 lỗi link gãy.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 69,
    slug: 'wayback-machine',
    name: 'Wayback Machine (Internet Archive)',
    tagline: 'Cỗ máy thời gian xem lại giao diện & nội dung cũ trong quá khứ của mọi website',
    excerpt: 'Tra cứu xem website của đối thủ hoặc tên miền bạn định mua đã từng thay đổi thông điệp, bảng giá và thiết kế Landing Page qua các năm như thế nào.',
    category: 'SEO & Nghiên cứu Từ khóa',
    categorySlug: 'seo-keyword-research',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% phi lợi nhuận.',
    level: 'Cơ bản',
    officialUrl: 'https://web.archive.org/',
    tags: ['Competitor History', 'Domain Audit', 'Landing Page History', 'Research'],
    whatIsIt: 'Wayback Machine là kho lưu trữ lịch sử Internet lớn nhất thế giới, lưu giữ ảnh chụp toàn bộ giao diện và mã nguồn của hàng trăm tỷ trang web theo từng mốc thời gian trong quá khứ.',
    bestFor: 'Brand Researcher phân tích sự chuyển dịch định vị của thương hiệu, và SEOer kiểm tra lịch sử tên miền cũ trước khi mua.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Lưu trữ đầy đủ các website tiếng Việt.',
    studentPerk: 'Miễn phí 100% để nghiên cứu case study sự thay đổi giao diện và thông điệp của các thương hiệu lớn (như Tiki, Thế Giới Di Động, Shopee) từ 5–10 năm trước.',
    useCases: [
      'Phân tích sự tiến hóa về định vị thương hiệu (Brand Positioning) và cấu trúc Landing Page của một công ty qua 5 năm.',
      'Kiểm tra xem một tên miền sắp mua có từng bị dùng làm web spam trước đây hay không.'
    ],
    pros: [
      'Dữ liệu lịch sử quý giá mà không công cụ thương mại nào khác có đầy đủ bằng.',
      'Hoàn toàn miễn phí.'
    ],
    limitations: 'Tốc độ tải bản lưu trữ cũ đôi khi chậm và một số ảnh cũ có thể không còn hiển thị.',
    studentTip: 'Nếu làm bài thuyết trình về lịch sử phát triển thương hiệu số của một doanh nghiệp, hãy chụp ảnh trang chủ của họ 5–10 năm trước từ Wayback Machine để so sánh với hiện tại — rất ấn tượng!',
    verifiedAt: '2026-11-24'
  }
];

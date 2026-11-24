import { MarketingTool } from '../../types';

export const aiCodingAgentsTools: MarketingTool[] = [
  {
    id: 173,
    slug: 'lovable-dev',
    name: 'Lovable',
    tagline: 'Gõ mô tả bằng tiếng Việt để AI tự code hoàn chỉnh Landing Page & Web App',
    excerpt: 'Nền tảng AI Full-stack Builder ("Vibe Marketing"): chỉ cần mô tả ý tưởng sản phẩm và tệp khách hàng, Lovable tự viết mã nguồn React/Tailwind thành website sống động.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng 5 lượt nhắn mỗi ngày (tối đa 30 lượt/tháng) đủ để dựng và xuất bản Landing Page mẫu miễn phí; gói Pro từ $20–$25/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://lovable.dev/',
    tags: ['AI Web Builder', 'Vibe Marketing', 'No-Code', 'Landing Page'],
    whatIsIt: 'Lovable là nền tảng phát triển ứng dụng web bằng AI (Text-to-Web-App), biến bản mô tả sản phẩm hoặc ảnh chụp giao diện Figma thành trang Landing Page hoặc công cụ tương tác (như máy tính ROI, Quiz) chạy thật trên Internet.',
    bestFor: 'Marketer hiện đại ("Vibe Marketer") muốn tạo công cụ tương tác miễn phí (Interactive Lead Magnet) hoặc Landing Page chuẩn đẹp không cần chờ lập trình viên.',
    platforms: 'Web Browser (Cloud), đồng bộ GitHub',
    vietnameseSupport: 'Hiểu rất tốt câu lệnh tiếng Việt và tạo giao diện tiếng Việt chuẩn xác.',
    studentPerk: '5 lượt tạo/chỉnh sửa miễn phí mỗi ngày kèm nút "Publish" xuất bản thẳng lên link web thật để demo khi bảo vệ đồ án.',
    useCases: [
      'Tạo một "Mini-tool tính toán" hoặc "Bài Quiz tương tác" làm mồi thu Lead (Lead Magnet) độc đáo cho chiến dịch.',
      'Dựng bản mẫu (MVP) ứng dụng web hoặc sàn thương mại điện tử demo sống động cho bài thuyết trình khởi nghiệp.'
    ],
    pros: [
      'Giao diện sinh ra cực kỳ hiện đại, sạch sẽ chuẩn Tailwind/shadcn.',
      'Chỉnh sửa từng chi tiết bằng cách chỉ vào nút trên màn hình và gõ yêu cầu tiếng Việt.'
    ],
    limitations: 'Gói miễn phí giới hạn 5 tin nhắn/ngày nên cần viết Prompt đầu tiên thật chi tiết.',
    studentTip: 'Thay vì chỉ làm slide tĩnh, hãy dùng Lovable tạo ra một trang web/mini-app chạy thật để hội đồng chấm đồ án tự bấm trải nghiệm ngay trên điện thoại.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 174,
    slug: 'v0-vercel',
    name: 'v0 by Vercel',
    tagline: 'Trợ lý AI của Vercel tạo giao diện Landing Page & Biểu đồ tương tác tức thì',
    excerpt: 'Công cụ tạo UI/Landing Page bằng AI cực nhanh, hỗ trợ tải lên ảnh phác thảo tay hoặc ảnh chụp màn hình mẫu để biến thành trang web thật.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng hạn mức Credits miễn phí hàng tháng; gói Premium từ $20/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://v0.dev/',
    tags: ['AI UI', 'Landing Page', 'Prototyping', 'Vercel'],
    whatIsIt: 'v0 là công cụ tạo sinh giao diện người dùng (Generative UI) do Vercel phát triển, cho phép gõ văn bản hoặc tải lên ảnh thiết kế để tạo ngay mã nguồn React/Tailwind và xem trước trực tiếp trên web.',
    bestFor: 'Product Marketer, Growth Marketer và sinh viên dựng nhanh Prototype Landing Page hoặc Dashboard báo cáo.',
    platforms: 'Web Browser (v0.dev)',
    vietnameseSupport: 'Hiểu câu lệnh tiếng Việt và tạo nội dung giao diện tiếng Việt tốt.',
    studentPerk: 'Gói Free tặng credits miễn phí hàng tháng và cho phép chia sẻ link xem trước công khai.',
    useCases: [
      'Chụp ảnh bản vẽ tay bố cục Landing Page trên giấy A4, tải lên v0 để AI biến thành giao diện web hoàn chỉnh.',
      'Tạo nhanh bảng giá (Pricing Table) hoặc máy tính chi phí tương tác.'
    ],
    pros: [
      'Thẩm mỹ UI rất tinh tế, hiện đại chuẩn thiết kế công nghệ.',
      'Tốc độ render và xem trước rất nhanh.'
    ],
    limitations: 'Nếu muốn kết nối cơ sở dữ liệu phức tạp cần xuất code sang dự án Next.js/Vercel.',
    studentTip: 'Hãy phác thảo khung Landing Page ra giấy, chụp ảnh đưa lên `v0.dev` kèm yêu cầu mã màu thương hiệu của nhóm để có ngay bản web demo chỉ trong 1 phút.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 175,
    slug: 'bolt-new',
    name: 'Bolt.new',
    tagline: 'Dựng & Triển khai Web App / Landing Page hoàn chỉnh trực tiếp trên trình duyệt',
    excerpt: 'Môi trường AI Web Builder chạy ngay trong trình duyệt: tạo nhanh trang web chiến dịch, minigame vòng quay may mắn hoặc trang bán hàng tương tác.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng hạn mức Tokens hàng ngày/hàng tháng để tạo và deploy thử nghiệm miễn phí lên Netlify.',
    level: 'Cơ bản',
    officialUrl: 'https://bolt.new/',
    tags: ['AI Web Builder', 'Gamification', 'Landing Page', 'Prototyping'],
    whatIsIt: 'Bolt.new (của StackBlitz) là trợ lý AI phát triển web toàn diện chạy ngay trên trình duyệt, có khả năng cài đặt thư viện, chạy máy chủ xem trước và xuất bản trang web lên mạng chỉ với 1 cú nhấp chuột.',
    bestFor: 'Marketer muốn tự làm Minigame tương tác (Vòng quay may mắn, Lật thẻ nhận Voucher) hoặc Landing Page chiến dịch.',
    platforms: 'Web Browser (bolt.new)',
    vietnameseSupport: 'Hiểu và tạo nội dung tiếng Việt chuẩn xác.',
    studentPerk: 'Miễn phí tokens hàng ngày và xuất bản trực tiếp lên đường link web công khai miễn phí.',
    useCases: [
      'Tạo một Minigame tương tác (Gamification Marketing) để thu hút khách hàng chơi thử trong bài thuyết trình.',
      'Dựng Landing Page chiến dịch có hiệu ứng chuyển động mượt mà.'
    ],
    pros: [
      'Chạy và xem trước ứng dụng ngay lập tức trong trình duyệt.',
      'Xuất bản lên Netlify chỉ bằng 1 nút bấm Deploy.'
    ],
    limitations: 'Tokens miễn phí sẽ tiêu hao nhanh nếu bạn chỉnh sửa quá nhiều lần lắt nhắt.',
    studentTip: 'Chuẩn bị sẵn toàn bộ nội dung chữ (Copywriting) và bảng màu trước khi gõ lệnh vào Bolt.new để tiết kiệm tokens miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 193,
    slug: 'otterly-ai',
    name: 'Otterly.ai',
    tagline: 'Theo dõi thứ hạng thương hiệu & Link trích dẫn trên ChatGPT, Perplexity, Google AIO (GEO)',
    excerpt: 'Công cụ đo lường GEO thế hệ mới: tự động kiểm tra xem khi khách hàng hỏi AI về ngành hàng, thương hiệu của bạn có được AI nhắc tên và gắn link không.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 14 ngày; các gói trả phí theo dõi từ khóa GEO từ ~$29/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://otterly.ai/',
    tags: ['GEO Monitoring', 'AI Overviews', 'Brand Visibility', 'AEO'],
    whatIsIt: 'Otterly.ai là nền tảng giám sát tối ưu hóa công cụ tạo sinh (GEO), tự động chạy định kỳ các câu hỏi người dùng (Prompts) trên ChatGPT Search, Perplexity và Google AI Overviews để đo tỷ lệ hiển thị thương hiệu (Brand Share of Voice) và trích dẫn link.',
    bestFor: 'SEO/GEO Strategist và sinh viên nghiên cứu chủ đề mới nhất năm 2026: Generative Engine Optimization.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Theo dõi được các câu hỏi Prompt bằng tiếng Việt trên ChatGPT/Perplexity.',
    studentPerk: '14 ngày dùng thử miễn phí giúp sinh viên làm đề tài về GEO đo lường thực nghiệm mức độ hiển thị của một thương hiệu trên AI.',
    useCases: [
      'Đo lường xem trong Top 10 câu hỏi phổ biến nhất về ngành hàng, ChatGPT và Perplexity đang đề xuất thương hiệu nào nhiều nhất.',
      'Kiểm tra xem website của thương hiệu có được AI lấy làm nguồn trích dẫn (Citation Link) hay không.'
    ],
    pros: [
      'Giải quyết đúng bài toán đo lường của kỷ nguyên AI Search mà Google Search Console chưa đo hết được.',
      'Theo dõi cả Google AI Overviews lẫn ChatGPT Search và Perplexity.'
    ],
    limitations: 'Không có gói miễn phí vĩnh viễn sau 14 ngày dùng thử.',
    studentTip: 'Nếu bạn làm đề tài nghiên cứu hoặc đồ án về **AEO / GEO**, hãy dùng thử Otterly.ai để chụp bảng báo cáo Brand Visibility trên AI làm số liệu minh họa cực kỳ cập nhật.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 194,
    slug: 'peec-ai',
    name: 'Peec AI',
    tagline: 'Phân tích cảm xúc & Vị thế thương hiệu trong câu trả lời của AI (GEO Analytics)',
    excerpt: 'Đo lường mức độ hiện diện, thứ hạng gợi ý và sắc thái (tích cực/tiêu cực) mà các mô hình AI như ChatGPT, Claude, Gemini nói về thương hiệu của bạn.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Có bản dùng thử miễn phí cho thương hiệu; gói trả phí theo số lượng Prompt theo dõi.',
    level: 'Trung bình',
    officialUrl: 'https://peec.ai/',
    tags: ['GEO', 'AI Visibility', 'Brand Sentiment', 'LLM SEO'],
    whatIsIt: 'Peec AI là nền tảng phân tích hiệu suất thương hiệu trên các công cụ tìm kiếm AI (GEO Analytics), theo dõi tần suất xuất hiện, vị trí đề xuất và nguồn web mà các mô hình LLM tin cậy trích dẫn.',
    bestFor: 'Brand Manager và SEO/GEO Team theo dõi sức khỏe thương hiệu trên không gian AI.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ theo dõi truy vấn đa ngôn ngữ.',
    studentPerk: 'Trải nghiệm tư duy đo lường Share of Voice mới trên các trợ lý AI thay vì chỉ trên bảng xếp hạng 10 link xanh của Google.',
    useCases: [
      'So sánh tỷ lệ được AI nhắc tên (AI Share of Voice) giữa thương hiệu mình và các đối thủ lớn.',
      'Tìm hiểu những trang báo/blog nào đang đóng vai trò là nguồn huấn luyện/trích dẫn uy tín nhất trong ngành để hợp tác PR.'
    ],
    pros: [
      'Giao diện Dashboard hiện đại, phân tích rõ nguồn trích dẫn của AI.',
      'Đo được nhiều mô hình LLM lớn cùng lúc.'
    ],
    limitations: 'Là phân khúc công cụ doanh nghiệp có phí thuê bao hàng tháng.',
    studentTip: 'Bạn có thể tự kiểm tra GEO thủ công miễn phí bằng cách đặt 10 câu hỏi khách hàng hay hỏi lên ChatGPT Search, Perplexity và Gemini, rồi ghi lại xem thương hiệu nào xuất hiện nhiều nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 385,
    slug: 'cursor-ai-editor',
    name: 'Cursor (AI Code Editor)',
    tagline: 'Trình lập trình tích hợp AI số 1 thế giới cho Vibe Coding & Xây dựng Công cụ Số',
    excerpt: 'Giúp cả người không chuyên CNTT lẫn Marketer hiện đại có thể tự sửa giao diện Website, viết công cụ SEO tự động và xây sản phẩm Web chỉ bằng hội thoại tiếng Việt.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Hobby miễn phí dùng thử Agent & Tab hoàn thành mã; **ĐẶC BIỆT: Sinh viên Đại học xác minh email `.edu` được nhận ưu đãi gói Cursor Pro cho sinh viên!**',
    level: 'Trung bình',
    officialUrl: 'https://www.cursor.com/',
    tags: ['Vibe Coding', 'AI IDE', 'Web Development', 'Build Tools'],
    whatIsIt: 'Cursor là trình biên tập mã nguồn tích hợp AI Agent (phát triển trên nền VS Code) dẫn đầu trào lưu "Vibe Coding", cho phép mô tả tính năng mong muốn bằng ngôn ngữ tự nhiên để AI tự đọc, tạo và chỉnh sửa hàng chục file dự án web cùng lúc.',
    bestFor: 'Technical Marketer, SEOer tự xây dựng website/công cụ riêng và sinh viên khởi nghiệp công nghệ.',
    platforms: 'Windows, macOS, Linux',
    vietnameseSupport: 'Giao tiếp yêu cầu chỉnh sửa với Agent hoàn toàn bằng Tiếng Việt cực chuẩn.',
    studentPerk: 'Có chương trình xác minh sinh viên đại học tại `cursor.com/students` và gói Hobby miễn phí ban đầu.',
    useCases: [
      'Tải một mẫu giao diện Landing Page về máy tính và ra lệnh bằng tiếng Việt cho Cursor đổi toàn bộ nội dung, màu sắc, gắn mã GA4 và xuất bản lên Vercel/Cloudflare miễn phí.',
      'Viết script Python cào dữ liệu công khai hoặc xử lý hàng nghìn dòng từ khóa SEO.'
    ],
    pros: [
      'Hiểu bối cảnh toàn bộ thư mục dự án để sửa đồng bộ nhiều file.',
      'Mở ra kỷ nguyên Marketer có thể tự đóng gói sản phẩm phần mềm nhỏ mà không bị phụ thuộc hoàn toàn vào đội kỹ thuật.'
    ],
    limitations: 'Cần biết thao tác mở thư mục và chạy lệnh cơ bản (Agent có thể hướng dẫn từng bước).',
    studentTip: 'Kỹ năng **"Vibe Marketing / Vibe Coding"** (dùng AI để tự dựng công cụ tính toán, trang web tương tác làm phễu thu khách) đang là lợi thế cạnh tranh đột phá nhất của sinh viên thế hệ mới!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 386,
    slug: 'github-copilot',
    name: 'GitHub Copilot (Miễn phí 100% cho Sinh viên)',
    tagline: 'Trợ lý AI lập trình & Agent chính chủ GitHub — Đặc quyền Miễn phí trọn gói Sinh viên',
    excerpt: 'Kho báu lớn nhất dành cho email `.edu.vn`: đăng ký GitHub Student Developer Pack để dùng miễn phí 100% GitHub Copilot Pro (gồm cả Claude & GPT) suốt thời đi học!',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Copilot Free cho mọi người (2.000 lượt gợi ý + 50 tin nhắn chat/tháng); **Miễn phí 100% gói Copilot Pro không giới hạn cho Sinh viên qua GitHub Education!**',
    level: 'Trung bình',
    officialUrl: 'https://github.com/features/copilot',
    tags: ['GitHub Education', 'Free Student Pro', 'Vibe Coding', 'VS Code'],
    whatIsIt: 'GitHub Copilot là trợ lý lập trình và Agent AI chạy bên trong VS Code và GitHub, cho phép người dùng chọn giữa các mô hình mạnh nhất của Anthropic Claude, OpenAI GPT và Google Gemini để dựng website, viết script dữ liệu.',
    bestFor: 'Mọi sinh viên đại học có thẻ sinh viên / email `.edu.vn` muốn sở hữu bản quyền AI xịn hợp pháp 0 đồng để làm web hoặc phân tích dữ liệu Python/R.',
    platforms: 'VS Code (Windows/macOS/Linux), Web Browser (github.com/copilot)',
    vietnameseSupport: 'Trò chuyện hướng dẫn từng bước bằng Tiếng Việt.',
    studentPerk: 'Đăng ký gói **GitHub Student Developer Pack** (`education.github.com/pack`) không chỉ được **miễn phí GitHub Copilot Pro**, mà còn được tặng kèm **1 tên miền `.me` / `.tech` miễn phí 1 năm** để gắn cho website đồ án!',
    useCases: [
      'Dùng chế độ Copilot Edits / Agent trong VS Code để dựng trang web Portfolio hoặc Landing Page rồi đẩy thẳng lên GitHub Pages / Vercel miễn phí.',
      'Nhận tên miền riêng miễn phí trong gói Student Pack để làm dự án SEO thực chiến.'
    ],
    pros: [
      'Đặc quyền miễn phí 100% gói Pro cho sinh viên là ưu đãi lớn nhất ngành công nghệ.',
      'Chuyển đổi qua lại nhiều mô hình Claude/GPT/Gemini ngay trong một khung chat.'
    ],
    limitations: 'Quá trình xét duyệt thẻ sinh viên trên GitHub Education mất khoảng 1–3 ngày.',
    studentTip: 'Dù bạn học Marketing chứ không học IT, vẫn hãy đăng ký ngay **GitHub Student Developer Pack** bằng email `.edu.vn` để nhận miễn phí tên miền riêng, Canva/Notion/Figma perks và Copilot Pro!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 387,
    slug: 'replit-agent',
    name: 'Replit Agent',
    tagline: 'Dựng Ứng dụng Web có cả Cơ sở dữ liệu & Đăng nhập ngay trên Trình duyệt/Điện thoại',
    excerpt: 'Chỉ cần gõ ý tưởng sản phẩm bằng tiếng Việt trên trình duyệt (thậm chí trên app điện thoại), Replit Agent tự thiết kế giao diện, tạo Database và đưa web lên mạng.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Starter miễn phí cho phép dùng thử Replit Agent giới hạn dự án đầu tiên; gói Core từ ~$20/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://replit.com/',
    tags: ['Full-stack AI', 'MVP Builder', 'Startup Prototype', 'Cloud IDE'],
    whatIsIt: 'Replit Agent là tác nhân AI xây dựng phần mềm trọn gói trên đám mây, tự động cài đặt môi trường, viết giao diện Frontend, Backend, khởi tạo cơ sở dữ liệu lưu trữ người dùng thật và triển khai thành ứng dụng chạy trực tuyến.',
    bestFor: 'Nhóm sinh viên thi **Khởi nghiệp (Startup Competition)** cần một sản phẩm mẫu MVP hoạt động thật sự (đăng ký tài khoản, lưu đơn hàng, chấm điểm) trong 1 buổi tối.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hiểu rất rõ bản mô tả yêu cầu bằng Tiếng Việt.',
    studentPerk: 'Không cần cài đặt bất cứ phần mềm nào lên máy tính — chạy 100% trên đám mây.',
    useCases: [
      'Xây dựng bản MVP ứng dụng kết nối gia sư, sàn trao đổi sách cũ sinh viên hoặc hệ thống đặt lịch dịch vụ để demo trực tiếp trước ban giám khảo cuộc thi Khởi nghiệp.',
      'Tạo công cụ nội bộ tính điểm đánh giá KOC cho nhóm.'
    ],
    pros: [
      'Tự lo luôn cả phần Cơ sở dữ liệu (Database) chứ không chỉ vẽ giao diện tĩnh.',
      'Có app điện thoại chỉnh sửa dự án mọi lúc mọi nơi.'
    ],
    limitations: 'Hạn mức miễn phí của Agent dành cho dùng thử nguyên mẫu ngắn.',
    studentTip: 'Trong các cuộc thi Khởi nghiệp sinh viên, nhóm nào mang tới một đường link MVP bấm chạy thật được trên điện thoại ban giám khảo luôn nắm chắc lợi thế vào Chung kết!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 388,
    slug: 'dify-ai',
    name: 'Dify.ai',
    tagline: 'Xây dựng Chatbot AI Học từ Tài liệu Riêng (RAG) & AI Workflow Mã nguồn mở',
    excerpt: 'Tải lên cuốn cẩm nang sản phẩm/chính sách giá của thương hiệu để tạo ra 1 con Chatbot CSKH thông minh trả lời chuẩn xác và nhúng thẳng vào Landing Page chỉ trong 5 phút!',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Bản Cloud Sandbox tặng **200 lượt gọi miễn phí** và nhúng Widget lên web; **Miễn phí 100% không giới hạn khi tự cài đặt qua Docker (Self-hosted)**.',
    level: 'Trung bình',
    officialUrl: 'https://dify.ai/',
    tags: ['RAG Chatbot', 'AI Agent Builder', 'Open Source', 'Knowledge Base'],
    whatIsIt: 'Dify.ai là nền tảng phát triển ứng dụng LLM và AI Agent mã nguồn mở dạng kéo thả trực quan hàng đầu thế giới, tích hợp sẵn kho tri thức RAG (đọc file PDF/Word/Web), quản lý Prompt, Agent Workflow và tạo mã nhúng khung chat lên website.',
    bestFor: 'Sinh viên làm đồ án **Ứng dụng AI Chatbot tư vấn khách hàng** cho doanh nghiệp thật hoặc xây dựng quy trình viết bài nhiều bước.',
    platforms: 'Web Cloud (cloud.dify.ai) hoặc Self-hosted Docker',
    vietnameseSupport: 'Có giao diện hỗ trợ Tiếng Việt và đọc kho tài liệu tiếng Việt cực chuẩn.',
    studentPerk: 'Kết hợp Dify (giao diện kéo thả miễn phí) + API Key miễn phí từ **Google AI Studio (Gemini)** là bạn tạo được ngay 1 Chatbot AI riêng nhúng vào trang LadiPage/WordPress với chi phí 0 đồng!',
    useCases: [
      'Tải bảng giá, câu hỏi thường gặp và thông tin khóa học/sản phẩm vào mục Knowledge của Dify -> Bấm Publish -> Copy 1 dòng mã `<script>` dán vào Landing Page để có ngay Trợ lý AI tư vấn 24/7!',
      'Thiết kế luồng AI Workflow tự động nghiên cứu web đối thủ rồi viết báo cáo tóm tắt.'
    ],
    pros: [
      'Dễ học hơn n8n khi mục tiêu chính của bạn là tạo **Chatbot học tài liệu riêng (RAG)** có sẵn khung giao diện chat đẹp để nhúng lên web.',
      'Mã nguồn mở uy tín toàn cầu.'
    ],
    limitations: 'Bản Cloud miễn phí giới hạn dung lượng tài liệu tải lên ở mức 50MB (đủ cho hàng trăm trang văn bản chữ).',
    studentTip: 'Đưa một con **Chatbot AI tư vấn sản phẩm thật (tạo bằng Dify + Gemini API miễn phí)** lên trang Landing Page đồ án của bạn — giảng viên bấm chat thử thấy trả lời đúng giá bán của nhóm sẽ cho điểm tối đa!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 389,
    slug: 'coze-ai-agent',
    name: 'Coze (coze.com)',
    tagline: 'Nền tảng tạo AI Bot đa kỹ năng gắn thẳng vào Telegram, Messenger, Discord không cần Code',
    excerpt: 'Lắp ráp một trợ lý AI có sẵn hàng trăm Plugin (Tìm kiếm Google, Đọc link tin tức, Tạo ảnh, Đọc YouTube) và xuất bản thành Bot Telegram/Messenger cho cả nhóm dùng chung.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp gói miễn phí hàng ngày để tạo, thử nghiệm Bot và gắn kết nối sang các nền tảng nhắn tin.',
    level: 'Cơ bản',
    officialUrl: 'https://www.coze.com/',
    tags: ['No-Code Bot', 'Telegram Bot', 'Messenger AI', 'Plugins'],
    whatIsIt: 'Coze là nền tảng phát triển AI Bot và Agent thế hệ mới không cần lập trình, cho phép người dùng kết hợp Kho tri thức (Knowledge), Bộ nhớ (Memory), Quy trình kéo thả (Workflows) và Kho Plugin có sẵn để đẩy Bot ra nhiều kênh chat.',
    bestFor: 'Sinh viên muốn tự tạo 1 con Bot Trợ lý Marketing riêng nằm ngay trong nhóm chat Telegram/Discord/Messenger mà không biết lập trình.',
    platforms: 'Web Browser (coze.com)',
    vietnameseSupport: 'Tạo Bot hiểu và phản hồi tiếng Việt mượt mà.',
    studentPerk: 'Kho Plugin dựng sẵn (Google Search, News, Image Gen) giúp lắp ghép kỹ năng cho Bot chỉ bằng thao tác bấm dấu cộng `+`.',
    useCases: [
      'Tạo Bot "Trợ lý Tin tức Ngành hàng" mỗi sáng tự tổng hợp 5 tin mới nhất gửi vào nhóm chat dự án.',
      'Tạo Bot đóng vai Khách hàng khó tính để các thành viên trong nhóm tập nhắn tin chốt sale.'
    ],
    pros: [
      'Triển khai sang Telegram hoặc nhúng Web SDK cực kỳ đơn giản.',
      'Trực quan, thân thiện với sinh viên khối kinh tế.'
    ],
    limitations: 'Một số mô hình cao cấp tính theo hạn mức token của nền tảng.',
    studentTip: 'Hãy thử bài tập nhỏ 20 phút: Tạo 1 con Bot trên Coze nạp sẵn toàn bộ giáo trình môn học để cả nhóm nhắn tin hỏi bài ôn thi ngay trên Telegram!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 390,
    slug: 'relevance-ai',
    name: 'Relevance AI',
    tagline: 'Xây dựng "Đội ngũ Nhân sự AI" (AI Workforce) tự động Nghiên cứu Thị trường & B2B',
    excerpt: 'Tuyển dụng và huấn luyện nhiều AI Agent phối hợp với nhau: Agent 1 đi nghiên cứu website khách hàng, bàn giao kết quả cho Agent 2 viết bản đề xuất cá nhân hóa.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **100 credits mỗi ngày** để xây dựng công cụ AI (Tools) và chạy thử tác nhân AI.',
    level: 'Nâng cao',
    officialUrl: 'https://relevanceai.com/',
    tags: ['Multi-Agent AI', 'AI Workforce', 'B2B Automation', 'GTM'],
    whatIsIt: 'Relevance AI là nền tảng xây dựng đội ngũ tác nhân AI đa nhiệm (Multi-Agent Systems) không cần code cho các phòng ban Marketing, Sales và Nghiên cứu, cho phép thiết lập quy trình bàn giao công việc giữa nhiều Agent chuyên môn.',
    bestFor: 'Sinh viên định hướng AI Automation / Growth Marketing muốn thiết kế hệ thống nhiều AI phối hợp làm việc.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ xử lý dữ liệu và xuất báo cáo tiếng Việt.',
    studentPerk: '100 credits làm mới mỗi ngày miễn phí để thực hành thiết kế Multi-Agent.',
    useCases: [
      'Xây dựng công cụ "SEO Competitor Analyzer": chỉ cần nhập URL đối thủ, Agent tự cào nội dung trang, phân tích cấu trúc H1–H3 và viết dàn ý tốt hơn họ.',
      'Xử lý hàng loạt bảng CSV dữ liệu khảo sát mở (Open-ended Responses) để gán nhãn chủ đề tự động.'
    ],
    pros: [
      'Tính năng xử lý hàng loạt bảng dữ liệu (Bulk Run on Table) rất mạnh cho nghiên cứu.',
      'Tư duy chia nhỏ từng Tool rồi gắn cho Agent rất khoa học.'
    ],
    limitations: 'Giao diện hoàn toàn bằng tiếng Anh chuyên ngành tự động hóa.',
    studentTip: 'Tính năng Bulk Run của Relevance AI cực kỳ lợi hại khi bạn cần phân loại 500 câu trả lời tự luận của đáp viên khảo sát thành các nhóm chủ đề định lượng.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 391,
    slug: 'browse-ai',
    name: 'Browse AI',
    tagline: 'Huấn luyện Robot AI Thu thập Dữ liệu Website & Theo dõi Đối thủ trong 2 phút (No-Code)',
    excerpt: 'Không cần biết Python BeautifulSoup: bạn chỉ việc mở trang danh sách sản phẩm/việc làm/bài viết và nhấp chuột chỉ cho Robot cần lấy ô nào ra bảng Google Sheets!',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **50 credits miễn phí mỗi tháng** để trích xuất bảng dữ liệu hoặc theo dõi thay đổi trang web.',
    level: 'Cơ bản',
    officialUrl: 'https://www.browse.ai/',
    tags: ['No-Code Scraping', 'Competitor Monitoring', 'Price Watch', 'Google Sheets'],
    whatIsIt: 'Browse AI là công cụ thu thập dữ liệu web (Web Scraping) và giám sát thay đổi không cần lập trình, học từ thao tác nhấp chuột chọn phần tử trên màn hình của bạn để xuất danh sách sản phẩm, giá bán, đánh giá sang Excel/Google Sheets.',
    bestFor: 'Sinh viên thu thập dữ liệu giá cả thị trường, đánh giá khách hàng (Customer Reviews) trên các trang công khai để làm phân tích.',
    platforms: 'Web Browser + Chrome Extension',
    vietnameseSupport: 'Trích xuất tốt văn bản và giá tiền VNĐ trên các website Việt Nam.',
    studentPerk: '50 credits miễn phí làm mới hàng tháng kèm kết nối đồng bộ thẳng sang Google Sheets.',
    useCases: [
      'Thu thập bảng giá và tên 100 sản phẩm cùng phân khúc trên website đối thủ về Google Sheets để vẽ biểu đồ định vị giá (Price Positioning).',
      'Trích xuất bình luận đánh giá sản phẩm công khai để phân tích nỗi đau khách hàng.'
    ],
    pros: [
      'Dễ dùng nhất cho người không biết một dòng code nào.',
      'Có chế độ hẹn lịch quét tự động hàng tuần.'
    ],
    limitations: 'Tuân thủ giới hạn 50 credits/tháng ở gói miễn phí và chỉ dùng cho dữ liệu hiển thị công khai.',
    studentTip: 'Khi làm phần Phân tích Giá (Pricing Strategy) trong đồ án 4P, dùng Browse AI kéo giá thực tế của 50 mã hàng trên thị trường về vẽ biểu đồ phân bố giá sẽ thuyết phục tuyệt đối!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 392,
    slug: 'bardeen-ai',
    name: 'Bardeen AI',
    tagline: 'Tự động hóa Thao tác Trình duyệt (Gom dữ liệu LinkedIn, Web -> Notion/Sheets) bằng AI',
    excerpt: 'Gõ câu lệnh mô tả việc tay chân lặp đi lặp lại trên Chrome (ví dụ: "Lưu thông tin trang công ty đang mở vào bảng Notion CRM"), Bardeen tự tạo nút bấm 1-click.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **100 credits mỗi tháng** chạy các Playbooks tự động hóa trình duyệt.',
    level: 'Cơ bản',
    officialUrl: 'https://www.bardeen.ai/',
    tags: ['Browser Automation', 'Playbooks', 'Notion Sync', 'B2B Productivity'],
    whatIsIt: 'Bardeen là tiện ích tự động hóa quy trình làm việc chạy trực tiếp trên trình duyệt Chrome (AI Action Agent), giúp trích xuất thông tin từ trang đang mở đẩy thẳng sang Google Sheets, Notion, HubSpot hoặc Airtable chỉ bằng 1 cú nhấp.',
    bestFor: 'Sinh viên săn việc thực tập (lưu tin tuyển dụng vào Notion), nghiên cứu đối thủ hoặc làm B2B Sales.',
    platforms: 'Google Chrome / Edge Extension',
    vietnameseSupport: 'Lưu dữ liệu tiếng Việt chuẩn sang Google Sheets và Notion.',
    studentPerk: 'Hàng trăm mẫu kịch bản (Playbooks) dựng sẵn miễn phí cho Notion và Google Sheets.',
    useCases: [
      'Khi đang tìm việc thực tập trên LinkedIn/Web, bấm 1 nút để lưu ngay Tên công ty, Vị trí, Yêu cầu JD và Đường link vào bảng theo dõi ứng tuyển trên Notion.',
      'Lưu nhanh thông tin danh sách KOL hoặc báo chí vào Google Sheets mà không phải copy-paste từng ô.'
    ],
    pros: [
      'Chạy ngay trên tab đang mở, không gặp rào cản phức tạp như server đám mây.',
      'Tính năng Magic Box biến câu mô tả thành luồng tự động.'
    ],
    limitations: 'Giới hạn 100 credits miễn phí mỗi tháng.',
    studentTip: 'Dùng Bardeen kết hợp Notion để lập bảng săn học bổng, cuộc thi Marketing hoặc vị trí Management Trainee cực kỳ khoa học.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 393,
    slug: 'flowise-ai',
    name: 'FlowiseAI',
    tagline: 'Kéo thả xây dựng Hệ thống RAG, Multi-Agent & LangChain Mã nguồn mở miễn phí 100%',
    excerpt: 'Giao diện nối khối trực quan dành cho người muốn tự lắp ghép các mô hình LLM, cơ sở dữ liệu Vector (Pinecone/Supabase) và công cụ tìm kiếm thành Chatbot chuyên sâu.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% mã nguồn mở (chạy bằng 1 lệnh `npx flowise start` trên máy tính hoặc deploy lên Render/Railway).',
    level: 'Nâng cao',
    officialUrl: 'https://flowiseai.com/',
    tags: ['LangChain UI', 'Open Source', 'Vector DB', 'AI Agent'],
    whatIsIt: 'Flowise là công cụ giao diện kéo thả mã nguồn mở xây dựng trên nền tảng LangChain, giúp trực quan hóa toàn bộ kiến trúc tách đoạn văn bản (Chunking), nhúng Vector (Embeddings) và luồng suy luận của AI Agent.',
    bestFor: 'Sinh viên ngành Thương mại điện tử, Hệ thống thông tin quản lý (MIS) và Martech làm đồ án tốt nghiệp về xây dựng Trợ lý AI.',
    platforms: 'Node.js / Docker (Windows, macOS, Linux), Cloud',
    vietnameseSupport: 'Tương thích hoàn hảo với dữ liệu tiếng Việt.',
    studentPerk: 'Miễn phí 100% mã nguồn mở, xuất sẵn mã nhúng cửa sổ Chat Popup gắn vào bất kỳ file HTML/Website nào.',
    useCases: [
      'Làm đề tài NCKH hoặc đồ án môn học: "Xây dựng Trợ lý ảo tư vấn tuyển sinh / tư vấn sản phẩm dựa trên kiến trúc RAG".',
      'Minh họa trực quan sơ đồ kiến trúc AI trong báo cáo kỹ thuật.'
    ],
    pros: [
      'Giúp hiểu rõ bản chất bên trong của RAG (Text Splitter -> Embeddings -> Vector Store -> Retriever -> LLM) mà không phải viết hàng trăm dòng code.',
      'Hoàn toàn miễn phí.'
    ],
    limitations: 'Cần cài Node.js cơ bản trên máy tính để khởi động.',
    studentTip: 'Nếu bạn chọn đề tài tốt nghiệp liên quan đến ứng dụng AI trong doanh nghiệp, chụp sơ đồ luồng RAG tự dựng trên **Flowise** hoặc **Dify** sẽ thuyết phục hội đồng về hàm lượng thực hành thực chất!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 394,
    slug: 'gumloop',
    name: 'Gumloop',
    tagline: 'Tự động hóa quy trình AI Marketing & SEO không cần code được các kỳ lân công nghệ tin dùng',
    excerpt: 'Giao diện luồng làm việc hiện đại chuyên cho các bài toán: Tự động phân tích SERP viết bài, Đọc CV/Lead hàng loạt, Cào web và Báo cáo quảng cáo bằng AI.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **1.000 credits miễn phí mỗi tháng** (không cần nhập thẻ tín dụng) kèm kho mẫu Marketing dựng sẵn!',
    level: 'Trung bình',
    officialUrl: 'https://www.gumloop.com/',
    tags: ['AI Automation', 'SEO Workflows', 'No-Code', 'Growth'],
    whatIsIt: 'Gumloop (trước đây là AgentHub) là nền tảng tự động hóa ưu tiên AI (AI-first Workflow Automation), đóng gói sẵn các nút cào web sạch chữ, đọc PDF, phân tích Google Search, nối Google Sheets/Docs và gọi mọi mô hình LLM mà người dùng không cần tự đăng ký từng API Key lẻ.',
    bestFor: 'SEO & Growth Marketer muốn dựng nhanh luồng tự động hóa AI mà thấy cấu hình Webhook/JSON bên n8n hơi khó.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Xử lý tiếng Việt hoàn hảo.',
    studentPerk: '1.000 credits miễn phí mỗi tháng và đã tích hợp sẵn quyền gọi mô hình cơ bản ngay bên trong mà không bắt sinh viên phải đi nạp thẻ API OpenAI.',
    useCases: [
      'Nhân bản mẫu (Template) tự động đọc tin tức đối thủ -> phân tích góc nhìn -> lưu dàn ý nội dung mới vào Google Docs.',
      'Tự động kiểm tra và tóm tắt nội dung 20 trang đích đang chạy quảng cáo trong ngành.'
    ],
    pros: [
      'Thiết kế riêng cho tác vụ AI nên gọn nhẹ, ít bước rườm rà hơn các công cụ tự động hóa đời cũ.',
      'Kho Templates cho SEO & Marketing cực kỳ thực tế.'
    ],
    limitations: '1.000 credits miễn phí phù hợp cho quy mô thử nghiệm và dự án vừa phải.',
    studentTip: 'Vào mục **Templates -> Marketing & SEO** trên Gumloop ngay sau khi tạo tài khoản miễn phí để học cách các Growth Team hàng đầu tự động hóa công việc!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 395,
    slug: 'windsurf-editor',
    name: 'Windsurf (Codeium)',
    tagline: 'Trình phát triển Web bằng AI Agent mượt mà (Cascade Flow) với gói Miễn phí rộng rãi',
    excerpt: 'Lựa chọn thay thế tuyệt vời bên cạnh Cursor: AI Agent Cascade vừa viết mã giao diện Landing Page, vừa tự bật xem trước trực tiếp ngay bên trong trình soạn thảo.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cung cấp gợi ý tự động không giới hạn và tặng credits dùng Agent hàng tháng; gói Pro từ $15/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://windsurf.com/',
    tags: ['Vibe Coding', 'AI Agent IDE', 'Landing Page', 'Web Preview'],
    whatIsIt: 'Windsurf (phát triển bởi Codeium) là môi trường phát triển tích hợp AI Agent (Agentic IDE) nổi bật với luồng cộng tác Cascade và cửa sổ xem trước giao diện web trực tiếp để bạn chỉ chuột vào phần tử nào là sửa ngay phần tử đó.',
    bestFor: 'Sinh viên tự thiết kế và tùy biến mã nguồn website, Landing Page hoặc công cụ tính toán Marketing.',
    platforms: 'Windows, macOS, Linux',
    vietnameseSupport: 'Hỗ trợ ra lệnh tiếng Việt cho Cascade Agent.',
    studentPerk: 'Tính năng gợi ý mã Tab miễn phí không giới hạn và cửa sổ Live Preview rất trực quan cho người mới học làm web.',
    useCases: [
      'Tự dựng một trang máy tính "Ước tính Ngân sách Quảng cáo & ROAS" nhúng lên blog cá nhân để thu hút lượt truy cập tự nhiên.',
      'Chỉnh sửa giao diện HTML/Tailwind CSS trực quan.'
    ],
    pros: [
      'Giao diện gọn gàng, tích hợp sẵn khung xem trước trang web ngay bên cạnh khung chat.',
      'Tốc độ phản hồi nhanh.'
    ],
    limitations: 'Các mô hình suy luận lớn nhất tiêu tốn Prompt Credits của gói miễn phí.',
    studentTip: 'Tạo một "Mini Calculator" miễn phí bằng Windsurf/Cursor đặt trên website luôn là cách kiếm Backlink tự nhiên (Link Bait) hiệu quả nhất trong SEO!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 396,
    slug: 'notebooklm-plus-lindy',
    name: 'Lindy.ai',
    tagline: 'Tạo Trợ lý Cá nhân AI tự động phân loại Email, Đặt lịch hẹn & Chăm sóc Lead 24/7',
    excerpt: 'Thiết lập một "nhân viên trợ lý ảo" gắn với Gmail và Lịch của bạn để tự động soạn thư trả lời khách hỏi báo giá, tóm tắt họp và cập nhật CRM.',
    category: 'AI Dựng Web/App, GEO & AI Agents',
    categorySlug: 'ai-coding-agents',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **400 credits mỗi tháng** để chạy các trợ lý tự động hóa công việc hàng ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://www.lindy.ai/',
    tags: ['Personal AI Agent', 'Email Triage', 'CRM Sync', 'Productivity'],
    whatIsIt: 'Lindy.ai là nền tảng tạo nhân viên AI tự chủ (AI Employees / Lindies) dễ sử dụng, chuyên tự động hóa các luồng công việc văn phòng như phân loại hộp thư đến, chuẩn bị hồ sơ khách hàng trước giờ họp và chăm sóc Lead.',
    bestFor: 'Account Manager, Freelancer và trưởng nhóm bận rộn muốn tự động hóa khâu xử lý email và chuẩn bị thông tin đối tác.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Đọc hiểu và soạn bản nháp trả lời email bằng Tiếng Việt.',
    studentPerk: '400 credits miễn phí hàng tháng đủ để vận hành trợ lý phân loại email và chuẩn bị tài liệu trước cuộc họp.',
    useCases: [
      'Tự động nghiên cứu thông tin công ty của người vừa đặt lịch hẹn trên Calendly và gửi bản tóm tắt cho bạn 15 phút trước giờ gọi.',
      'Tự động gắn nhãn phân loại email quan trọng và tạo bản nháp trả lời sẵn trong Gmail.'
    ],
    pros: [
      'Chọn từ chợ mẫu (Template Marketplace) kích hoạt trong 2 phút như cài ứng dụng điện thoại.',
      'Có cơ chế "Human-in-the-loop" (soạn nháp chờ bạn bấm Duyệt rồi mới gửi đi nên cực kỳ an toàn).'
    ],
    limitations: 'Tác vụ gọi điện thoại tự động chủ yếu hỗ trợ đầu số Bắc Mỹ.',
    studentTip: 'Khi mới dùng AI Agent cho Email khách hàng, luôn bật chế độ **"Create Draft" (Chỉ tạo thư nháp chờ duyệt)** thay vì cho AI tự động bấm gửi thẳng!',
    verifiedAt: '2026-11-24'
  }
];

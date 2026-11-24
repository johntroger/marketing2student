import { MarketingTool } from '../../types';

export const aiContentTools: MarketingTool[] = [
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
        a: 'Ở cuối mỗi câu trả lời của Gemini có nút biểu tượng chữ "G" (Double-check response). Khi bấm vào, Gemini sẽ tự động đối chiếu từng câu với kết quả Google Search.'
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
      { name: 'Claude (Anthropic)', slug: 'claude-anthropic', comparison: 'Claude viết văn mượt hơn, nhưng NotebookLM vượt trội khi cần quản lý và tra cứu chéo hàng chục file PDF cùng lúc.' }
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
    id: 25,
    slug: 'perplexity-ai',
    name: 'Perplexity AI',
    tagline: 'Công cụ tìm kiếm AI trả lời trực tiếp kèm trích dẫn nguồn web thời gian thực',
    excerpt: 'Thay thế cách tìm kiếm Google truyền thống khi cần tổng hợp thông tin thị trường, số liệu ngành hàng kèm đường link nguồn gốc để kiểm chứng.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí không giới hạn lượt tìm kiếm nhanh và tặng 5 lượt Pro Search/ngày; gói Pro $20/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.perplexity.ai/',
    tags: ['AI Search', 'GEO', 'Market Research', 'Citations'],
    whatIsIt: 'Perplexity AI là công cụ tìm kiếm câu trả lời (Answer Engine) kết hợp tìm kiếm web thời gian thực với mô hình ngôn ngữ lớn, tự động đọc hàng chục trang web uy tín và tổng hợp thành câu trả lời ngắn gọn kèm chú thích nguồn trích dẫn minh bạch.',
    bestFor: 'Sinh viên nghiên cứu thị trường, làm báo cáo bối cảnh ngành hàng và người học tối ưu nội dung theo chuẩn GEO (Generative Engine Optimization).',
    platforms: 'Web Browser, iOS, Android, Chrome Extension, macOS/Windows App',
    vietnameseSupport: 'Hỗ trợ tìm kiếm và tổng hợp báo chí, báo cáo thị trường bằng tiếng Việt rất tốt.',
    studentPerk: 'Thường xuyên có chương trình ưu đãi cho sinh viên có email `.edu.vn` (giảm giá hoặc tặng tháng dùng Pro khi xác minh SheerID).',
    useCases: [
      'Tìm nhanh quy mô thị trường, báo cáo hành vi tiêu dùng mới nhất kèm đường link dẫn thẳng về báo cáo gốc.',
      'Kiểm tra xem thương hiệu của mình hoặc đối thủ đang được AI trích dẫn như thế nào khi tối ưu GEO.'
    ],
    pros: [
      'Mọi câu khẳng định đều gắn số trích dẫn trỏ về bài viết gốc giúp kiểm chứng sự thật dễ dàng.',
      'Có chế độ Academic Search (tìm riêng bài báo khoa học) và Deep Research.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt Pro Search chuyên sâu mỗi ngày.',
    studentTip: 'Khi cần số liệu cho phần Mở đầu đồ án, hãy dùng Perplexity chế độ Academic hoặc Web Search rồi bấm thẳng vào link nguồn gốc để trích dẫn chính xác.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 26,
    slug: 'deepseek',
    name: 'DeepSeek',
    tagline: 'Mô hình AI suy luận sâu (DeepThink) miễn phí cực mạnh cho phân tích chiến lược',
    excerpt: 'Nổi bật với mô hình suy luận logic từng bước (Chain-of-Thought) hoàn toàn miễn phí, rất mạnh khi giải bài toán phễu, lập bảng dự toán và viết nội dung.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trên giao diện web và ứng dụng di động (không giới hạn khắt khe lượt nhắn); API giá cực rẻ.',
    level: 'Cơ bản',
    officialUrl: 'https://chat.deepseek.com/',
    tags: ['DeepThink', 'Reasoning AI', 'Free AI', 'Strategy'],
    whatIsIt: 'DeepSeek là nền tảng AI mã nguồn mở nổi tiếng với khả năng suy luận logic từng bước (DeepThink R1) và tìm kiếm web miễn phí, giúp Marketer giải quyết các bài toán phân tích dữ liệu, lập cấu trúc chiến lược và tối ưu thông điệp bán hàng không tốn phí.',
    bestFor: 'Sinh viên cần một mô hình AI suy luận sâu hoàn toàn miễn phí để phản biện kế hoạch Marketing hoặc tính toán chỉ số ROI/ROAS.',
    platforms: 'Web Browser, iOS & Android App, API',
    vietnameseSupport: 'Hỗ trợ đọc hiểu và viết tiếng Việt khá tốt, đặc biệt mạch lạc ở các bảng phân tích logic.',
    studentPerk: 'Sử dụng mô hình suy luận DeepThink hoàn toàn miễn phí không cần đăng ký gói trả phí hàng tháng.',
    useCases: [
      'Bật chế độ DeepThink để yêu cầu AI tự phản biện điểm yếu trong kế hoạch IMC của nhóm.',
      'Tính toán và kiểm tra công thức phân bổ ngân sách quảng cáo đa kênh.'
    ],
    pros: [
      'Hiển thị rõ quá trình suy luận (Thinking process) trước khi đưa ra đáp án cuối cùng.',
      'Hoàn toàn miễn phí trên web/app.'
    ],
    limitations: 'Đôi khi quá trình suy luận hơi lâu (15–30 giây) và máy chủ có thể quá tải vào giờ cao điểm.',
    studentTip: 'Hãy bật nút "DeepThink" khi cần AI đóng vai giám khảo phản biện lại bài thuyết trình của nhóm trước ngày bảo vệ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 27,
    slug: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    tagline: 'Trợ lý AI tích hợp Bing Search, Word, PowerPoint và tạo ảnh DALL-E miễn phí',
    excerpt: 'Trợ lý AI chính chủ Microsoft giúp tìm kiếm thông tin web cập nhật, tóm tắt trang web trên Edge và tạo ảnh minh họa miễn phí.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí sử dụng trên web, Windows và Edge; gói Copilot Pro tích hợp sâu vào Microsoft 365 ($20/tháng).',
    level: 'Cơ bản',
    officialUrl: 'https://copilot.microsoft.com/',
    tags: ['Microsoft', 'Bing AI', 'Office 365', 'Image Gen'],
    whatIsIt: 'Microsoft Copilot là trợ lý AI tích hợp trực tiếp công cụ tìm kiếm Bing và hệ điều hành Windows/Microsoft Edge, cho phép tra cứu thông tin thời gian thực, tóm tắt tài liệu PDF đang mở trên trình duyệt và tạo hình ảnh minh họa nhanh.',
    bestFor: 'Sinh viên dùng Windows và trình duyệt Microsoft Edge cần AI hỗ trợ tóm tắt bài viết dài ngay trên thanh bên (Sidebar).',
    platforms: 'Web Browser, Windows 11, Microsoft Edge Sidebar, iOS & Android',
    vietnameseSupport: 'Hỗ trợ giao diện và hội thoại tiếng Việt đầy đủ.',
    studentPerk: 'Tạo hình ảnh minh họa miễn phí và sử dụng trực tiếp thanh bên Copilot trên trình duyệt Edge để hỏi đáp về bài báo đang đọc.',
    useCases: [
      'Mở file PDF báo cáo dài trên Edge và yêu cầu Copilot Sidebar tóm tắt 5 điểm chính.',
      'Tìm kiếm thông tin thị trường thời gian thực kèm link tham khảo.'
    ],
    pros: [
      'Tích hợp sẵn trên Windows và Edge, không cần cài đặt thêm tiện ích.',
      'Cho phép tạo ảnh AI miễn phí bằng câu lệnh tiếng Việt/tiếng Anh.'
    ],
    limitations: 'Câu trả lời sáng tạo nội dung Marketing đôi khi ngắn hơn so với Claude hoặc ChatGPT.',
    studentTip: 'Mở file PDF bài báo tiếng Anh bằng Microsoft Edge rồi bật biểu tượng Copilot góc trên phải để hỏi đáp trực tiếp từng chương.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 28,
    slug: 'grok-xai',
    name: 'Grok (xAI)',
    tagline: 'Trợ lý AI bắt trend mạng xã hội X thời gian thực & phân tích xu hướng nóng',
    excerpt: 'Công cụ AI của xAI có khả năng đọc dữ liệu thảo luận thời gian thực trên mạng xã hội X (Twitter) và hỗ trợ tạo ảnh nhanh.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có bản miễn phí giới hạn lượt nhắn mỗi 2 giờ cho mọi người dùng trên grok.com và X.',
    level: 'Cơ bản',
    officialUrl: 'https://grok.com/',
    tags: ['xAI', 'Real-time Trends', 'Social Listening', 'GenAI'],
    whatIsIt: 'Grok là mô hình AI do xAI phát triển, nổi bật với khả năng truy cập luồng thảo luận thời gian thực trên nền tảng X (Twitter) cùng khả năng suy luận (Think) và tìm kiếm chuyên sâu (DeepSearch).',
    bestFor: 'Marketer theo dõi xu hướng công nghệ, AI, crypto, game và các chiến dịch viral quốc tế theo thời gian thực.',
    platforms: 'Web Browser (grok.com), X App, iOS & Android',
    vietnameseSupport: 'Hỗ trợ đọc hiểu và trả lời tiếng Việt tốt.',
    studentPerk: 'Cho phép dùng miễn phí tính năng DeepSearch và Think trên grok.com với hạn mức làm mới liên tục.',
    useCases: [
      'Theo dõi phản ứng cộng đồng quốc tế về một chiến dịch Marketing hoặc sản phẩm công nghệ mới ra mắt.',
      'Dùng chế độ DeepSearch tổng hợp nhanh tin tức ngành Martech.'
    ],
    pros: [
      'Cập nhật thông tin thời gian thực từ X rất nhanh.',
      'Ít bị rào cản cứng nhắc khi brainstorm ý tưởng sáng tạo táo bạo.'
    ],
    limitations: 'Dữ liệu mạng xã hội chủ yếu mạnh ở thị trường quốc tế/tiếng Anh hơn là thảo luận nội địa Việt Nam.',
    studentTip: 'Dùng Grok khi nghiên cứu case study các chiến dịch quốc tế vừa diễn ra trong tuần.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 29,
    slug: 'poe-quora',
    name: 'Poe (Platform for Open Exploration)',
    tagline: 'Nền tảng tập hợp hàng chục mô hình AI (GPT, Claude, Gemini, Llama) trên 1 màn hình',
    excerpt: 'Cho phép dùng thử và so sánh câu trả lời giữa Claude, ChatGPT, Gemini và hàng loạt bot chuyên dụng trên cùng một giao diện duy nhất.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Tặng điểm Compute Points miễn phí mỗi ngày để gọi các mô hình AI; gói trả phí từ ~$19.99/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://poe.com/',
    tags: ['Multi-Model AI', 'Bot Builder', 'Comparison', 'GenAI'],
    whatIsIt: 'Poe (do Quora phát triển) là cổng hợp nhất cho phép người dùng trò chuyện và so sánh trực tiếp hàng chục mô hình AI hàng đầu (GPT, Claude, Gemini, DeepSeek, Flux) trong cùng một khung chat và tự tạo bot Prompt riêng.',
    bestFor: 'Sinh viên muốn so sánh chất lượng viết bài của nhiều mô hình AI khác nhau bằng một câu lệnh duy nhất.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android',
    vietnameseSupport: 'Hỗ trợ tiếng Việt tùy thuộc vào mô hình AI bạn chọn gọi bên trong Poe.',
    studentPerk: 'Mỗi ngày được cấp miễn phí một lượng Compute Points để trải nghiệm đa dạng mô hình mà không cần đăng ký nhiều tài khoản.',
    useCases: [
      'Tạo một Bot cố định chứa sẵn Brand Guideline của nhóm để chia sẻ link cho các thành viên khác dùng chung.',
      'So sánh nhanh cùng một Prompt viết quảng cáo giữa Claude và GPT.'
    ],
    pros: [
      'Tất cả mô hình AI trong một nơi duy nhất, chuyển đổi qua lại ngay trong cùng 1 luồng chat.',
      'Tạo bot cá nhân hóa cực nhanh không cần code.'
    ],
    limitations: 'Số điểm miễn phí hàng ngày sẽ hết nhanh nếu bạn gọi các mô hình đắt tiền liên tục.',
    studentTip: 'Tạo một Poe Bot đóng vai "Giảng viên phản biện" hoặc "Biên tập viên chuẩn giọng văn nhóm" rồi gửi link cho cả nhóm cùng xài.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 30,
    slug: 'grammarly',
    name: 'Grammarly',
    tagline: 'Trợ lý kiểm tra ngữ pháp, chính tả & văn phong tiếng Anh chuẩn quốc tế',
    excerpt: 'Công cụ không thể thiếu khi viết Email, bài viết SEO tiếng Anh, CV hoặc tiểu luận chuyên ngành Marketing bằng tiếng Anh.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí kiểm tra lỗi chính tả, ngữ pháp và dấu câu không giới hạn; gói Pro mở khóa viết lại câu & kiểm tra đạo văn.',
    level: 'Cơ bản',
    officialUrl: 'https://www.grammarly.com/',
    tags: ['English Writing', 'Proofreading', 'Copywriting', 'Academic'],
    whatIsIt: 'Grammarly là trợ lý biên tập tiếng Anh ứng dụng AI, tự động phát hiện lỗi chính tả, ngữ pháp, cấu trúc câu rườm rà và đề xuất chỉnh giọng văn (Tone) phù hợp theo ngữ cảnh chuyên nghiệp hoặc học thuật.',
    bestFor: 'Sinh viên viết CV tiếng Anh, tiểu luận, khóa luận tiếng Anh và Content Marketer viết bài cho thị trường Global.',
    platforms: 'Chrome/Edge Extension, Web Editor, Windows/macOS, Microsoft Word Add-in, iOS/Android',
    vietnameseSupport: 'Chuyên biệt cho tiếng Anh (không kiểm tra ngữ pháp tiếng Việt).',
    studentPerk: 'Bản miễn phí xử lý rất tốt toàn bộ lỗi ngữ pháp cơ bản và chạy trực tiếp trên Google Docs, Gmail, Word.',
    useCases: [
      'Rà soát lỗi ngữ pháp cho CV ứng tuyển tập đoàn đa quốc gia (MNC) và email xin thực tập.',
      'Chỉnh văn phong bài viết blog tiếng Anh từ lủng củng sang súc tích, chuyên nghiệp.'
    ],
    pros: [
      'Hoạt động mọi lúc mọi nơi trên trình duyệt nhờ Extension cực nhẹ.',
      'Giải thích lý do sửa lỗi giúp người học nâng trình viết tiếng Anh.'
    ],
    limitations: 'Chỉ hỗ trợ tiếng Anh; tính năng viết lại cả đoạn văn mượt mà và check đạo văn nằm ở gói trả phí.',
    studentTip: 'Cài Grammarly Extension trước khi gửi bất kỳ email tiếng Anh hay nộp bài tập môn Tiếng Anh chuyên ngành Marketing nào.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 31,
    slug: 'quillbot',
    name: 'QuillBot',
    tagline: 'Công cụ Paraphrase diễn đạt lại câu văn & kiểm tra ngữ pháp tiếng Anh',
    excerpt: 'Hỗ trợ viết lại câu văn tiếng Anh theo nhiều văn phong khác nhau (Academic, Formal, Fluency), tóm tắt bài báo và tạo trích dẫn APA.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép Paraphrase tối đa 125 từ/lần ở 2 chế độ Standard & Fluency; kèm công cụ tạo trích dẫn miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://quillbot.com/',
    tags: ['Paraphrasing', 'Academic Writing', 'APA Citation', 'English'],
    whatIsIt: 'QuillBot là bộ công cụ hỗ trợ viết tiếng Anh bằng AI gồm: Paraphraser (diễn đạt lại câu tránh trùng lặp), Summarizer (tóm tắt bài báo), Grammar Checker và Citation Generator (tạo trích dẫn chuẩn APA/MLA/Harvard).',
    bestFor: 'Sinh viên đọc và viết tổng quan tài liệu tiếng Anh, cần công cụ hỗ trợ diễn đạt lại ý tưởng chuẩn học thuật và tạo trích dẫn APA.',
    platforms: 'Web Browser, Chrome Extension, Microsoft Word Add-in',
    vietnameseSupport: 'Hỗ trợ đa ngôn ngữ nhưng mạnh nhất ở tiếng Anh.',
    studentPerk: 'Tính năng Citation Generator (tạo trích dẫn chuẩn APA 7 từ link/DOI) hoàn toàn miễn phí và không giới hạn.',
    useCases: [
      'Tạo nhanh định dạng tài liệu tham khảo chuẩn APA 7 cho tiểu luận và khóa luận.',
      'Tìm từ đồng nghĩa học thuật để câu văn tiếng Anh tự nhiên, không bị lặp từ.'
    ],
    pros: [
      'Giao diện kéo thanh trượt mức độ thay đổi từ vựng (Synonyms slider) rất trực quan.',
      'Tích hợp sẵn công cụ tóm tắt bài báo khoa học dài.'
    ],
    limitations: 'Bản miễn phí giới hạn 125 từ mỗi lần Paraphrase và khóa chế độ Academic.',
    studentTip: 'Dùng mục Citation Generator của QuillBot để chuẩn hóa danh mục tài liệu tham khảo APA 7 trước khi nộp khóa luận.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 32,
    slug: 'jasper-ai',
    name: 'Jasper AI',
    tagline: 'Nền tảng AI Content Marketing chuyên sâu cho đội ngũ Thương hiệu (Brand Voice)',
    excerpt: 'Phần mềm viết nội dung Marketing doanh nghiệp nổi tiếng với khả năng khóa chặt Brand Voice, chiến dịch đa kênh và tối ưu SEO.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 7 ngày; gói trả phí từ ~$39–$49/tháng/người dùng.',
    level: 'Trung bình',
    officialUrl: 'https://www.jasper.ai/',
    tags: ['Enterprise AI', 'Brand Voice', 'Copywriting', 'Campaigns'],
    whatIsIt: 'Jasper AI là nền tảng tạo sinh nội dung chuyên biệt cho đội ngũ Marketing doanh nghiệp, tích hợp thư viện mẫu chiến dịch (Campaigns), quản lý giọng văn thương hiệu (Brand Voice) và tạo ấn phẩm đồng bộ.',
    bestFor: 'Sinh viên tìm hiểu quy trình vận hành Content Marketing cấp độ Agency/Enterprise hoặc thực tập tại các công ty có ngân sách Martech.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ đầu vào và đầu ra hơn 30 ngôn ngữ bao gồm tiếng Việt.',
    studentPerk: 'Có bản dùng thử 7 ngày để sinh viên trải nghiệm cách một nền tảng AI Marketing chuyên nghiệp quản lý Brand Voice.',
    useCases: [
      'Tìm hiểu cách thiết lập Brand Voice và Knowledge Base cho thương hiệu lớn.',
      'Sinh đồng bộ bộ tài sản truyền thông cho một chiến dịch (Email + Blog + Ads) từ 1 bản Brief.'
    ],
    pros: [
      'Quy trình thiết kế riêng cho Marketer thay vì khung chat trống trơn.',
      'Kiểm soát tính nhất quán thương hiệu rất tốt.'
    ],
    limitations: 'Chi phí cao đối với sinh viên Việt Nam; không có gói miễn phí vĩnh viễn.',
    studentTip: 'Hãy dùng 7 ngày dùng thử để học cách Jasper cấu trúc bảng Knowledge Base và Brand Voice, sau đó áp dụng tư duy đó vào Claude Projects hoặc Custom GPT.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 33,
    slug: 'copy-ai',
    name: 'Copy.ai',
    tagline: 'Nền tảng tự động hóa quy trình GTM & viết Copywriting bán hàng',
    excerpt: 'Hỗ trợ viết nhanh tiêu đề quảng cáo, mô tả sản phẩm thương mại điện tử và tự động hóa quy trình tạo nội dung Go-To-Market.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Free giới hạn 2.000 từ/tháng; các gói trả phí mở rộng Workflow tự động hóa.',
    level: 'Cơ bản',
    officialUrl: 'https://www.copy.ai/',
    tags: ['Copywriting', 'GTM AI', 'Sales Copy', 'E-commerce'],
    whatIsIt: 'Copy.ai là nền tảng AI tập trung vào Go-To-Market (GTM) và viết nội dung bán hàng (Copywriting), cung cấp sẵn các công thức AIDA, PAS, mô tả sản phẩm và quy trình tự động hóa tiếp thị B2B.',
    bestFor: 'Content Marketer viết mô tả sản phẩm sàn TMĐT, email chào hàng B2B và tiêu đề quảng cáo.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ tạo nội dung tiếng Việt.',
    studentPerk: 'Gói Free cho phép dùng thử các mẫu công thức viết Copywriting chuẩn ngành mà không cần biết kỹ thuật Prompt phức tạp.',
    useCases: [
      'Viết nhanh mô tả sản phẩm chuẩn cấu trúc lợi ích (FAB - Feature, Advantage, Benefit).',
      'Thử nghiệm các biến thể tiêu đề quảng cáo theo khuôn mẫu AIDA/PAS.'
    ],
    pros: [
      'Kho mẫu viết bài bán hàng bài bản, dễ tiếp cận cho người mới.',
      'Mạnh về luồng tự động hóa nội dung B2B.'
    ],
    limitations: 'Gói miễn phí giới hạn 2.000 từ mỗi tháng khá ít nếu viết bài dài.',
    studentTip: 'Dùng gói Free để tham khảo cách Copy.ai chia cấu trúc các loại thông điệp bán hàng.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 34,
    slug: 'writesonic',
    name: 'Writesonic',
    tagline: 'Trợ lý AI viết bài SEO chuẩn dữ liệu tìm kiếm thời gian thực & Chatsonic',
    excerpt: 'Tích hợp nghiên cứu từ khóa, phân tích bài đối thủ đang Top Google và tự động viết bài SEO dài kèm trích dẫn nguồn.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có gói dùng thử miễn phí giới hạn tín dụng (Credits); các gói trả phí từ ~$16–$20/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://writesonic.com/',
    tags: ['SEO Writing', 'Chatsonic', 'AI Article', 'Content'],
    whatIsIt: 'Writesonic là nền tảng AI chuyên về sản xuất nội dung SEO và tối ưu hiển thị trên công cụ tìm kiếm AI (GEO), kết nối dữ liệu Google Search thực tế để lập dàn ý và viết bài chuẩn cấu trúc.',
    bestFor: 'SEO Content Writer, Blogger và Marketer muốn tìm hiểu quy trình AI viết bài dựa trên phân tích đối thủ Top SERP.',
    platforms: 'Web Browser, Chrome Extension, tích hợp WordPress',
    vietnameseSupport: 'Hỗ trợ tiếng Việt trong trình tạo bài viết và Chatsonic.',
    studentPerk: 'Tài khoản miễn phí tặng sẵn Credits để chạy thử 1–2 bài viết SEO hoàn chỉnh theo quy trình AI Article Writer.',
    useCases: [
      'Trải nghiệm quy trình nhập từ khóa -> lấy dàn ý từ các bài Top 10 Google -> sinh bài viết SEO.',
      'Kiểm tra điểm tối ưu SEO ngay trong trình soạn thảo.'
    ],
    pros: [
      'Quy trình viết bài SEO khép kín từ nghiên cứu từ khóa đến xuất bản.',
      'Có tính năng theo dõi mức độ hiện diện thương hiệu trên AI Search.'
    ],
    limitations: 'Số lượng từ miễn phí bị giới hạn nhanh; cần biên tập lại văn phong tiếng Việt để tự nhiên hơn.',
    studentTip: 'Dùng lượt miễn phí để xem cách Writesonic trích xuất thẻ Heading (H2, H3) từ các đối thủ đang đứng Top Google.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 35,
    slug: 'notion-ai',
    name: 'Notion & Notion AI',
    tagline: 'Không gian quản lý dự án Marketing, Content Calendar & Trợ lý AI tích hợp',
    excerpt: 'Công cụ quốc dân để quản lý kho tài liệu nhóm, lịch nội dung (Content Hub) và gọi AI tóm tắt biên bản họp ngay trong trang ghi chú.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Notion miễn phí cho cá nhân; gói Plus miễn phí 100% cho sinh viên có email .edu.vn; Notion AI là tiện ích bổ sung có dùng thử miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://www.notion.so/',
    tags: ['Workspace', 'Content Hub', 'Knowledge Base', 'Productivity'],
    whatIsIt: 'Notion là không gian làm việc tất cả-trong-một (All-in-one Workspace) kết hợp ghi chú, cơ sở dữ liệu (Database) và trợ lý Notion AI giúp sinh viên quản lý lịch đăng bài, lưu trữ nghiên cứu thị trường và viết nháp nội dung cộng tác.',
    bestFor: 'Tất cả nhóm sinh viên làm đồ án Marketing, Content Team và Project Manager.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt, Markdown và Notion AI tiếng Việt mượt mà.',
    studentPerk: 'Sinh viên đăng ký bằng email trường (`.edu.vn`) được nâng cấp miễn phí lên gói **Notion Plus** (tải file không giới hạn dung lượng, lịch sử phiên bản 30 ngày).',
    useCases: [
      'Xây dựng bảng Content Calendar dạng Kanban / Calendar View quản lý trạng thái bài viết (Idea -> Drafting -> Design -> Published).',
      'Tổng hợp toàn bộ tài liệu nghiên cứu, chân dung khách hàng và biên bản họp nhóm vào một Wiki chung.'
    ],
    pros: [
      'Linh hoạt tuyệt đối, có hàng nghìn template Marketing miễn phí từ cộng đồng.',
      'Gói Education Plus miễn phí cực kỳ hào phóng cho sinh viên.'
    ],
    limitations: 'Notion AI riêng biệt chỉ cho dùng thử miễn phí một số lượt trước khi tính phí hàng tháng.',
    studentTip: 'Đăng ký Notion bằng email `.edu.vn` để mở khóa gói Plus miễn phí và dùng làm Portfolio cá nhân (Publish to Web) cực đẹp khi đi xin việc.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 36,
    slug: 'gamma-app',
    name: 'Gamma App',
    tagline: 'Tạo Slide thuyết trình, Pitch Deck & Tài liệu báo cáo bằng AI trong 60 giây',
    excerpt: 'Chỉ cần dán dàn ý hoặc bản word báo cáo đồ án, Gamma tự động thiết kế thành bộ Slide chuyên nghiệp, có biểu đồ và hình ảnh đồng bộ.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Tặng 400 AI Credits miễn phí khi đăng ký (tạo được ~8–10 bộ slide hoàn chỉnh); gói Plus ~$8–$10/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://gamma.app/',
    tags: ['AI Presentation', 'Pitch Deck', 'Slide Design', 'Storytelling'],
    whatIsIt: 'Gamma là nền tảng tạo bài thuyết trình, tài liệu và trang web bằng AI, biến một đoạn ghi chú thô hoặc file Word/PDF thành bộ slide trình chiếu hiện đại với bố cục thẻ thông minh mà không cần căn chỉnh thủ công từng khung chữ.',
    bestFor: 'Sinh viên cần làm nhanh Slide bảo vệ đồ án, Pitch Deck gọi vốn khởi nghiệp hoặc báo cáo kết quả chiến dịch.',
    platforms: 'Web Browser (Cloud), hỗ trợ xuất ra PowerPoint (.pptx), PDF và chia sẻ link web',
    vietnameseSupport: 'Hiểu và tạo nội dung tiếng Việt mượt mà với các phông chữ hỗ trợ đầy đủ dấu tiếng Việt.',
    studentPerk: '400 Credits miễn phí ban đầu đủ để tạo nhiều bộ slide 10–15 trang, xuất file PowerPoint hoặc PDF dễ dàng.',
    useCases: [
      'Chuyển hóa file báo cáo Word 20 trang thành bộ Slide thuyết trình súc tích 12 trang để bảo vệ trước hội đồng.',
      'Dựng nhanh trang web tóm tắt đề xuất chiến dịch (Proposal) gửi khách hàng xem trên điện thoại.'
    ],
    pros: [
      'Tiết kiệm 80% thời gian dàn trang slide so với PowerPoint truyền thống.',
      'Xuất sang `.pptx` hoặc PDF vẫn giữ được bố cục gọn gàng để chỉnh sửa thêm.'
    ],
    limitations: 'Bản miễn phí có gắn nhãn nhỏ "Made with Gamma" ở góc trang và giới hạn tối đa 10 thẻ slide mỗi lần AI tạo.',
    studentTip: 'Đừng gõ mỗi 1 dòng chủ đề chung chung; hãy dán cả dàn ý chi tiết của nhóm vào chế độ "Paste in text" để Gamma giữ nguyên ý tưởng học thuật của bạn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 37,
    slug: 'napkin-ai',
    name: 'Napkin AI',
    tagline: 'Biến văn bản thuần thành Sơ đồ tư duy, Flowchart & Infographic tức thì',
    excerpt: 'Dán một đoạn văn bản mô tả quy trình phễu Marketing hoặc mô hình lý thuyết, Napkin AI tự động vẽ thành các sơ đồ vector đẹp mắt để chèn vào Slide/Word.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Free hào phóng cho phép tạo và xuất sơ đồ PNG/SVG/PDF với hạn mức tín dụng hàng tuần.',
    level: 'Cơ bản',
    officialUrl: 'https://www.napkin.ai/',
    tags: ['Visual Storytelling', 'Infographic', 'Diagrams', 'Presentation'],
    whatIsIt: 'Napkin AI là công cụ trực quan hóa văn bản bằng AI, tự động phân tích nội dung chữ viết để đề xuất hàng loạt mẫu sơ đồ phễu, quy trình, ma trận so sánh và biểu đồ tư duy có thể chỉnh sửa từng chi tiết và xuất dưới dạng PNG/SVG.',
    bestFor: 'Sinh viên làm đồ án, viết khóa luận, giảng viên soạn bài giảng và Content Marketer cần minh họa bài blog bằng sơ đồ chuyên nghiệp.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Nhận diện văn bản tiếng Việt cực chuẩn và giữ nguyên nội dung tiếng Việt trên sơ đồ.',
    studentPerk: 'Gói miễn phí cho phép xuất ảnh nền trong suốt (Transparent PNG) hoặc SVG độ nét cao để chèn thẳng vào Word/Canva/PowerPoint.',
    useCases: [
      'Vẽ sơ đồ quy trình phễu bán hàng, hành trình khách hàng (Customer Journey) hoặc khung lý thuyết cho khóa luận.',
      'Minh họa các bước thực hành trong bài viết blog SEO để tăng thời gian đọc trang.'
    ],
    pros: [
      'Không cần kỹ năng thiết kế vẫn tạo ra sơ đồ đẳng cấp tạp chí chuyên ngành trong 10 giây.',
      'Tùy biến màu sắc, icon, font chữ trực tiếp trên từng nhánh sơ đồ.'
    ],
    limitations: 'Một số kiểu xuất file hoặc giới hạn AI credits cao hơn nằm ở gói trả phí.',
    studentTip: 'Thay vì chụp ảnh sơ đồ mờ từ mạng về chèn vào đồ án, hãy dán đoạn giải thích mô hình của bạn vào Napkin AI để tự vẽ sơ đồ nét căng theo đúng màu thương hiệu.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 38,
    slug: 'consensus-ai',
    name: 'Consensus',
    tagline: 'Công cụ tìm kiếm bài báo khoa học Q1/Q2 bằng AI có trích dẫn DOI thật 100%',
    excerpt: 'Đặt câu hỏi nghiên cứu Marketing bằng tiếng Anh, Consensus tổng hợp câu trả lời từ hàng triệu bài báo bình duyệt (Peer-reviewed) trên Semantic Scholar.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí tìm kiếm không giới hạn bài báo và tặng lượt dùng Copilot/Consensus Meter mỗi tháng; có gói giảm giá sinh viên.',
    level: 'Trung bình',
    officialUrl: 'https://consensus.app/',
    tags: ['Academic Search', 'EEAT', 'DOI', 'Literature Review'],
    whatIsIt: 'Consensus là công cụ tìm kiếm học thuật ứng dụng AI chỉ truy xuất dữ liệu từ kho bài báo khoa học đã qua bình duyệt (Peer-reviewed Papers), cung cấp thước đo đồng thuận (Consensus Meter) và tóm tắt phát hiện chính kèm mã DOI chuẩn xác.',
    bestFor: 'Sinh viên làm nghiên cứu khoa học (NCKH), viết khóa luận tốt nghiệp và Content Writer viết bài chuyên sâu chuẩn học thuật EEAT.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Nên đặt câu hỏi bằng tiếng Anh để truy xuất kho tạp chí quốc tế (Journal of Marketing, JM, JCR...); có thể dịch kết quả sang tiếng Việt.',
    studentPerk: 'Cung cấp chế độ tìm kiếm miễn phí kèm bộ lọc xếp hạng tạp chí (Q1, Q2), năm xuất bản và thiết kế nghiên cứu (RCT, Meta-analysis).',
    useCases: [
      'Tìm nguồn nghiên cứu khoa học uy tín để chứng minh giả thuyết trong bài viết hoặc khóa luận.',
      'Lọc nhanh các bài tổng quan hệ thống (Systematic Review) và xuất trích dẫn APA chỉ với 1 cú bấm.'
    ],
    pros: [
      'Không bao giờ bịa nguồn hoặc bịa tên tác giả như chatbot thông thường.',
      'Có nút sao chép trích dẫn chuẩn APA và đường link trực tiếp tới bài gốc.'
    ],
    limitations: 'Dữ liệu chủ yếu là nghiên cứu tiếng Anh; bản miễn phí giới hạn số lượt dùng tính năng phân tích sâu Pro Analysis.',
    studentTip: 'Khi viết bài chuẩn EEAT trên Marketing2Student hoặc làm khóa luận, luôn dùng Consensus tìm bài báo gốc trước rồi mới tải PDF đưa vào NotebookLM đọc sâu.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 39,
    slug: 'elicit-ai',
    name: 'Elicit',
    tagline: 'Trợ lý AI lập bảng tổng quan tài liệu khoa học (Literature Review Matrix)',
    excerpt: 'Tự động trích xuất phương pháp nghiên cứu, cỡ mẫu, biến số và kết quả chính từ hàng loạt bài báo PDF thành một bảng so sánh Excel.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí tặng 5.000 credits ban đầu để tìm kiếm và trích xuất dữ liệu từ các bài báo khoa học.',
    level: 'Trung bình',
    officialUrl: 'https://elicit.com/',
    tags: ['Literature Review', 'Academic Research', 'PDF Extraction', 'Matrix'],
    whatIsIt: 'Elicit là trợ lý nghiên cứu khoa học tự động hóa quy trình tổng quan tài liệu (Literature Review), giúp nhà nghiên cứu tìm bài báo liên quan và trích xuất các cột thông tin (Cỡ mẫu, Quốc gia, Thang đo, Kết quả) thành bảng ma trận có cấu trúc.',
    bestFor: 'Sinh viên làm NCKH cấp trường, khóa luận tốt nghiệp hoặc học viên cao học cần lập bảng tổng hợp nghiên cứu trước.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Chuyên dụng cho nghiên cứu học thuật tiếng Anh.',
    studentPerk: '5.000 credits miễn phí ban đầu đủ để lập bảng tổng hợp cho 1 đề tài nghiên cứu sinh viên hoàn chỉnh.',
    useCases: [
      'Tải lên 10 bài báo PDF cùng chủ đề (ví dụ: Ý định mua hàng xanh) và yêu cầu Elicit trích xuất các biến độc lập/phụ thuộc của từng bài.',
      'Xuất bảng tổng quan tài liệu ra file CSV/BibTeX.'
    ],
    pros: [
      'Tiết kiệm hàng chục giờ đọc lướt khi lập bảng tổng quan nghiên cứu.',
      'Mỗi ô dữ liệu trích xuất đều bấm vào xem lại đúng đoạn trích trong PDF gốc được.'
    ],
    limitations: 'Hết 5.000 credits miễn phí sẽ cần nâng cấp gói Plus nếu muốn trích xuất thêm nhiều cột dữ liệu.',
    studentTip: 'Dùng Elicit để lập bảng so sánh các thang đo (Scales) từ 5–8 bài báo gốc trước khi thiết kế bảng hỏi khảo sát trên Tally.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 40,
    slug: 'scite-ai',
    name: 'Scite.ai',
    tagline: 'Kiểm chứng độ tin cậy của trích dẫn khoa học (Ủng hộ hay Phản bác)',
    excerpt: 'Cho biết một bài báo khoa học được các nghiên cứu khác trích dẫn theo hướng ủng hộ (Supporting), nhắc đến (Mentioning) hay phản bác (Contrasting).',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép xem miễn phí một số chỉ số trích dẫn và dùng thử 7 ngày bản Assistant đầy đủ.',
    level: 'Nâng cao',
    officialUrl: 'https://scite.ai/',
    tags: ['Citation Check', 'Academic', 'Peer Review', 'Research'],
    whatIsIt: 'Scite.ai là nền tảng phân tích trích dẫn thông minh (Smart Citations), giúp người nghiên cứu kiểm tra xem một công trình khoa học có thực sự đáng tin cậy không dựa trên ngữ cảnh những bài báo đi sau trích dẫn nó.',
    bestFor: 'Sinh viên làm NCKH, phản biện luận văn và kiểm chứng tính xác thực của trích dẫn học thuật.',
    platforms: 'Web Browser, Chrome/Zotero Extension',
    vietnameseSupport: 'Dữ liệu học thuật quốc tế bằng tiếng Anh.',
    studentPerk: 'Cài Scite Chrome Extension miễn phí để nhìn thấy ngay số lượt Supporting/Contrasting Citations khi đang lướt Google Scholar.',
    useCases: [
      'Kiểm tra xem một lý thuyết Marketing kinh điển có bị các nghiên cứu mới phản bác hoặc điều chỉnh bối cảnh không.',
      'Tìm nhanh đoạn văn bản trích dẫn thật từ nguồn uy tín.'
    ],
    pros: [
      'Phân biệt được trích dẫn ủng hộ và trích dẫn phản bác — điều Google Scholar không làm được.',
      'Giảm thiểu tối đa rủi ro trích dẫn nhầm bài báo đã bị rút lại (Retracted).'
    ],
    limitations: 'Tính năng AI Assistant đầy đủ yêu cầu trả phí sau thời gian dùng thử.',
    studentTip: 'Cài tiện ích mở rộng Scite lên trình duyệt Chrome để mỗi lần tra cứu trên Google Scholar là thấy ngay độ uy tín của bài báo.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 41,
    slug: 'rytr',
    name: 'Rytr',
    tagline: 'Trợ lý AI viết nội dung ngắn, mô tả sản phẩm & bài đăng mạng xã hội gọn nhẹ',
    excerpt: 'Công cụ viết lách AI giá mềm, dễ sử dụng với hơn 40 mẫu viết bài sẵn có từ tiêu đề Facebook Ads, mô tả video YouTube đến Email.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo tối đa 10.000 ký tự/tháng; gói Unlimited giá rẻ chỉ từ ~$7.5–$9/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://rytr.me/',
    tags: ['Short-form Copy', 'Social Posts', 'Budget AI', 'Templates'],
    whatIsIt: 'Rytr là trợ lý viết nội dung AI gọn nhẹ với giao diện soạn thảo tích hợp sẵn hơn 40 khuôn mẫu (Use cases) và hơn 20 sắc thái giọng văn (Tone) giúp tạo nhanh caption, mô tả sản phẩm và ý tưởng blog.',
    bestFor: 'Người mới tập viết Content ngắn cho Fanpage, Shopee/TikTok Shop và muốn dùng công cụ chọn mẫu sẵn thay vì tự viết Prompt.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Có chọn ngôn ngữ đầu ra là Tiếng Việt (Vietnamese).',
    studentPerk: 'Gói miễn phí 10.000 ký tự/tháng không hết hạn dùng thử.',
    useCases: [
      'Viết nhanh mô tả sản phẩm, Meta Title/Description hoặc tiêu đề video YouTube.',
      'Thử nghiệm chuyển đổi giọng văn giữa Convincing, Casual và Urgent.'
    ],
    pros: [
      'Cực kỳ đơn giản, chỉ việc chọn Use case + Tone + Từ khóa.',
      'Có tính năng kiểm tra đạo văn tích hợp ở gói trả phí.'
    ],
    limitations: 'Độ thông minh và chiều sâu lập luận với tiếng Việt không bằng ChatGPT hay Claude.',
    studentTip: 'Phù hợp để viết nhanh các đoạn mô tả ngắn hoặc caption phụ trợ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 42,
    slug: 'wordtune',
    name: 'Wordtune',
    tagline: 'Trợ lý AI viết lại câu tiếng Anh tự nhiên & tóm tắt tài liệu đọc nhanh',
    excerpt: 'Giúp biến câu tiếng Anh thô cứng thành câu văn trôi chảy, súc tích hoặc trang trọng chỉ với 1 cú nhấp chuột ngay trong Google Docs/Gmail.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép viết lại (Rewrite) 10 câu/ngày và tóm tắt 3 bài viết/ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://www.wordtune.com/',
    tags: ['Rewriting', 'English Copy', 'Summarizer', 'Chrome Extension'],
    whatIsIt: 'Wordtune là công cụ biên tập AI chuyên về tái cấu trúc câu tiếng Anh (Rewrite), rút gọn hoặc mở rộng ý tưởng, giúp người viết không phải bản ngữ diễn đạt thông điệp Marketing sắc nét như người bản xứ.',
    bestFor: 'Sinh viên viết bài luận tiếng Anh, viết landing page tiếng Anh hoặc email giao tiếp khách hàng nước ngoài.',
    platforms: 'Web Editor, Chrome Extension, Microsoft Word Add-in, iOS',
    vietnameseSupport: 'Chuyên biệt cho tiếng Anh.',
    studentPerk: '10 lượt viết lại câu miễn phí mỗi ngày giúp trau chuốt các câu Hook và tiêu đề quan trọng nhất.',
    useCases: [
      'Làm mượt các câu văn tiếng Anh dịch từ tiếng Việt bị gượng gạo.',
      'Tóm tắt nhanh các bài blog Marketing dài bằng tiếng Anh trên trình duyệt.'
    ],
    pros: [
      'Đưa ra 5–8 phương án diễn đạt khác nhau cho cùng 1 câu để bạn chọn.',
      'Tích hợp mượt vào Gmail, LinkedIn và Google Docs.'
    ],
    limitations: 'Giới hạn 10 lượt/ngày ở bản miễn phí.',
    studentTip: 'Dành 10 lượt miễn phí mỗi ngày để tối ưu riêng phần Tiêu đề (Headline) và đoạn Mở đầu (Lead) trong bài viết tiếng Anh.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 43,
    slug: 'hemingway-editor',
    name: 'Hemingway Editor',
    tagline: 'Kiểm tra độ dễ đọc (Readability) & cắt gọt câu văn rườm rà tiếng Anh',
    excerpt: 'Tô màu cảnh báo những câu quá dài, bị động hoặc thừa trạng từ để bài viết Copywriting tiếng Anh sắc bén và dễ đọc nhất.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Phiên bản Web chỉnh sửa và chấm điểm Readability miễn phí 100% trọn đời; bản Plus AI tính phí theo tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://hemingwayapp.com/',
    tags: ['Readability', 'Copywriting', 'Editing', 'Clear Writing'],
    whatIsIt: 'Hemingway Editor là công cụ biên tập văn bản giúp đo lường chỉ số dễ đọc (Grade Level) của bài viết tiếng Anh và tô màu trực quan các câu quá dài, thể bị động hoặc từ ngữ phức tạp.',
    bestFor: 'Copywriter viết Landing Page, Email Marketing và blog tiếng Anh muốn giữ văn phong súc tích, mạnh mẽ.',
    platforms: 'Web Browser (hemingwayapp.com), Desktop App (macOS/Windows)',
    vietnameseSupport: 'Chỉ hỗ trợ phân tích cấu trúc câu tiếng Anh.',
    studentPerk: 'Bản web phân tích và chấm điểm dễ đọc miễn phí 100%, không cần đăng nhập.',
    useCases: [
      'Rút gọn bài viết tiếng Anh từ mức đọc khó (Grade 12+) xuống mức dễ đọc đại chúng (Grade 6–8).',
      'Loại bỏ các câu bị động làm giảm lực kêu gọi hành động (CTA) trên Landing Page.'
    ],
    pros: [
      'Giao diện tối giản không gây xao nhãng, nhìn màu là biết ngay câu nào cần cắt ngắn.',
      'Miễn phí hoàn toàn cho tính năng phân tích cốt lõi.'
    ],
    limitations: 'Không hỗ trợ tiếng Việt.',
    studentTip: 'Giữ điểm Readability của bài viết Landing Page tiếng Anh ở mức Grade 6–8 để đạt tỷ lệ chuyển đổi tốt nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 44,
    slug: 'monica-ai',
    name: 'Monica AI',
    tagline: 'Tiện ích Chrome Sidebar đa năng tích hợp AI ngay trên mọi trang web',
    excerpt: 'Tóm tắt video YouTube, dịch song ngữ tài liệu PDF, viết lại email và gọi nhanh GPT/Claude/Gemini chỉ bằng phím tắt Ctrl+M trên trình duyệt.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí giới hạn lượt truy vấn mỗi ngày; gói Pro từ ~$8.3–$9.9/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://monica.im/',
    tags: ['Chrome Extension', 'Sidebar AI', 'YouTube Summary', 'Translation'],
    whatIsIt: 'Monica AI là tiện ích mở rộng trình duyệt (Browser Extension) hoạt động như thanh trợ lý nổi trên mọi tab web, tích hợp nhiều mô hình AI để tóm tắt YouTube, dịch thuật, viết bài và đọc tài liệu PDF ngay tại chỗ.',
    bestFor: 'Sinh viên thường xuyên đọc báo cáo tiếng Anh, xem bài giảng YouTube hoặc viết nội dung trực tiếp trên các nền tảng web.',
    platforms: 'Chrome/Edge Extension, Desktop App, iOS & Android',
    vietnameseSupport: 'Hỗ trợ dịch song ngữ và giao diện tiếng Việt rất tiện lợi.',
    studentPerk: 'Cài Extension miễn phí để dùng nhanh tính năng tóm tắt video YouTube và dịch song ngữ từng đoạn trên web.',
    useCases: [
      'Tóm tắt video phân tích chiến dịch Marketing dài 45 phút trên YouTube thành 5 gạch đầu dòng có mốc thời gian.',
      'Bôi đen một đoạn văn trên website bất kỳ để dịch nhanh hoặc giải thích thuật ngữ chuyên ngành.'
    ],
    pros: [
      'Không cần chuyển tab sang cửa sổ chatbot khác, gọi trực tiếp bằng phím tắt.',
      'Tính năng dịch song ngữ giữ nguyên bố cục trang web rất hữu ích.'
    ],
    limitations: 'Bản miễn phí có giới hạn số lượt sử dụng hàng ngày.',
    studentTip: 'Dùng tính năng "YouTube Summary" của Monica để học nhanh các bài giảng Marketing nước ngoài mà không bị ngợp thời gian.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 45,
    slug: 'kimi-ai',
    name: 'Kimi AI (Moonshot)',
    tagline: 'Trợ lý AI miễn phí đọc siêu nhiều file PDF dài & tìm kiếm web chuyên sâu',
    excerpt: 'Hỗ trợ tải lên hàng loạt tài liệu PDF/Word/Excel dung lượng lớn để hỏi đáp và tổng hợp thông tin hoàn toàn miễn phí.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí sử dụng trên web và app với cửa sổ ngữ cảnh dài.',
    level: 'Cơ bản',
    officialUrl: 'https://kimi.moonshot.cn/',
    tags: ['Long Context', 'PDF Reader', 'Free AI', 'Research'],
    whatIsIt: 'Kimi AI là trợ lý hội thoại nổi bật với khả năng xử lý ngữ cảnh siêu dài (lên tới hàng trăm nghìn từ), cho phép tải lên nhiều tài liệu PDF, bảng tính và đường link web cùng lúc để phân tích miễn phí.',
    bestFor: 'Sinh viên cần đọc nhanh nhiều file báo cáo thị trường hoặc giáo trình dài khi các công cụ khác giới hạn dung lượng đính kèm.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Đọc hiểu và trả lời tiếng Việt mạch lạc khi được yêu cầu bằng tiếng Việt.',
    studentPerk: 'Miễn phí đọc nhiều file PDF dày hàng trăm trang trong một phiên chat.',
    useCases: [
      'Đọc và tóm tắt sách chuyên ngành Marketing hoặc báo cáo thường niên doanh nghiệp.',
      'Đối chiếu thông tin giữa nhiều file Word/PDF của các thành viên trong nhóm.'
    ],
    pros: [
      'Xử lý văn bản siêu dài ổn định và miễn phí.',
      'Hỗ trợ tìm kiếm web kết hợp đọc file.'
    ],
    limitations: 'Giao diện gốc ban đầu có ngôn ngữ mặc định tiếng Anh/Trung (có thể chỉnh trong Settings và chat hoàn toàn bằng tiếng Việt).',
    studentTip: 'Nếu Claude bản Free báo hết dung lượng đính kèm file PDF, hãy dùng Kimi hoặc NotebookLM để xử lý tiếp.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 46,
    slug: 'anyword',
    name: 'Anyword',
    tagline: 'AI Copywriting chấm điểm dự báo hiệu quả chuyển đổi (Predictive Performance Score)',
    excerpt: 'Chuyên biệt cho Performance Marketer: viết mẫu quảng cáo, tiêu đề landing page kèm điểm dự báo khả năng thu hút theo từng tệp khách hàng.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 7 ngày; các gói trả phí từ ~$39–$49/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.anyword.com/',
    tags: ['Performance Copy', 'Ad Copy', 'Predictive Score', 'A/B Testing'],
    whatIsIt: 'Anyword là nền tảng AI Copywriting định hướng dữ liệu (Data-driven), không chỉ viết thông điệp quảng cáo mà còn chấm điểm dự báo hiệu suất (Predictive Performance Score) dựa trên dữ liệu hàng triệu chiến dịch đã chạy.',
    bestFor: 'Performance Marketer, Growth Marketer và sinh viên tìm hiểu cách tối ưu thông điệp dựa trên dữ liệu A/B Testing.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ đa ngôn ngữ, điểm chấm hiệu suất chính xác nhất với tiếng Anh.',
    studentPerk: 'Bản dùng thử 7 ngày giúp sinh viên trải nghiệm cách AI đánh giá các biến thể Hook quảng cáo trước khi bỏ tiền chạy thật.',
    useCases: [
      'So sánh điểm dự báo thu hút giữa 5 phiên bản tiêu đề Landing Page.',
      'Tối ưu hóa mô tả quảng cáo Facebook/Google theo từng nhóm độ tuổi và giới tính.'
    ],
    pros: [
      'Định lượng được chất lượng câu chữ bằng thang điểm 0–100 thay vì cảm tính.',
      'Kết nối được với tài khoản quảng cáo để học từ dữ liệu thật.'
    ],
    limitations: 'Không có gói miễn phí dài hạn; tối ưu nhất cho thị trường tiếng Anh.',
    studentTip: 'Tham khảo mô hình chấm điểm của Anyword để tự xây dựng bảng tiêu chí đánh giá mẫu quảng cáo trước khi chạy A/B Test.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 47,
    slug: 'tome-app',
    name: 'Tome',
    tagline: 'Công cụ trình bày câu chuyện thương hiệu & Pitch Deck tương tác hiện đại',
    excerpt: 'Hỗ trợ dựng bài thuyết trình tương tác, tài liệu bán hàng và trang trình bày ý tưởng sản phẩm với bố cục đáp ứng mượt mà trên mọi màn hình.',
    category: 'AI Content & Copywriting',
    categorySlug: 'ai-content-copywriting',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Basic miễn phí tạo bài trình bày thủ công/tương tác; gói Pro tính phí theo tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://tome.app/',
    tags: ['Presentation', 'Pitch Deck', 'Storytelling', 'Sales Deck'],
    whatIsIt: 'Tome là nền tảng tạo tài liệu trình bày và Pitch Deck thế hệ mới dựa trên thẻ nội dung đáp ứng (Responsive Tiles), giúp Marketer và đội ngũ bán hàng tạo các bản đề xuất (Proposal/Deck) dễ đọc trên cả laptop lẫn điện thoại.',
    bestFor: 'Sinh viên thuyết trình dự án khởi nghiệp, Account Agency gửi Proposal cho khách hàng.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Hỗ trợ gõ và hiển thị tiếng Việt đầy đủ.',
    studentPerk: 'Chia sẻ bài thuyết trình qua đường link web mượt mà, nhúng được cả Figma Prototype và video trực tiếp vào slide.',
    useCases: [
      'Nhúng thẳng bản mẫu Figma của nhóm vào trong slide thuyết trình để demo tương tác.',
      'Gửi link Pitch Deck xem đẹp ngay trên điện thoại cho giảng viên hoặc nhà đầu tư.'
    ],
    pros: [
      'Tự động co giãn bố cục đẹp trên màn hình điện thoại.',
      'Nhúng mượt các công cụ thiết kế và biểu đồ trực quan.'
    ],
    limitations: 'Tính năng xuất ra file PDF hoặc tạo AI không giới hạn yêu cầu gói trả phí.',
    studentTip: 'Khi bảo vệ đồ án có thiết kế UI/UX trên Figma, hãy dùng Tome để nhúng trực tiếp Prototype vào slide thay vì chỉ chụp ảnh tĩnh.',
    verifiedAt: '2026-11-24'
  }
];

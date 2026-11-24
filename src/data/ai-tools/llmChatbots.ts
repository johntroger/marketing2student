import { MarketingTool } from '../../types';

export const llmChatbotsTools: MarketingTool[] = [
  {
    id: 5,
    slug: 'chatgpt-openai',
    name: 'ChatGPT (OpenAI)',
    tagline: 'Trợ lý AI đa năng hỗ trợ nghiên cứu thị trường, viết Content & phân tích dữ liệu',
    excerpt: 'Công cụ AI tạo sinh phổ biến nhất cho Marketer: từ brainstorm ý tưởng chiến dịch, đóng vai khách hàng phỏng vấn thử đến phân tích file CSV.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    id: 26,
    slug: 'deepseek',
    name: 'DeepSeek',
    tagline: 'Mô hình AI suy luận sâu (DeepThink) miễn phí cực mạnh cho phân tích chiến lược',
    excerpt: 'Nổi bật với mô hình suy luận logic từng bước (Chain-of-Thought) hoàn toàn miễn phí, rất mạnh khi giải bài toán phễu, lập bảng dự toán và viết nội dung.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    id: 45,
    slug: 'kimi-ai',
    name: 'Kimi AI (Moonshot)',
    tagline: 'Trợ lý AI miễn phí đọc siêu nhiều file PDF dài & tìm kiếm web chuyên sâu',
    excerpt: 'Hỗ trợ tải lên hàng loạt tài liệu PDF/Word/Excel dung lượng lớn để hỏi đáp và tổng hợp thông tin hoàn toàn miễn phí.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
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
    id: 301,
    slug: 'google-ai-studio',
    name: 'Google AI Studio',
    tagline: 'Phòng Lab dùng thử Gemini 2.5/3.0 Pro (1M–2M ngữ cảnh) & Lấy API Key miễn phí',
    excerpt: 'Vũ khí bí mật miễn phí 100% cho sinh viên: dùng các mô hình Gemini mạnh nhất của Google, tải cả video dài 1 tiếng lên phân tích và lấy API Key nối n8n.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% sử dụng giao diện Playground trên web và cấp gói Free Tier API Key cho nhà phát triển/sinh viên.',
    level: 'Trung bình',
    officialUrl: 'https://aistudio.google.com/',
    tags: ['Gemini API', 'Long Context', 'Video Analysis', 'Free AI'],
    whatIsIt: 'Google AI Studio là môi trường thử nghiệm mô hình AI dành cho nhà phát triển và người nghiên cứu của Google, cho phép truy cập miễn phí các phiên bản Gemini mới nhất với cửa sổ ngữ cảnh tới 1–2 triệu tokens, tùy chỉnh System Instructions, nhiệt độ sáng tạo (Temperature) và lấy API Key.',
    bestFor: 'Sinh viên cần phân tích file PDF/Video siêu dài miễn phí hoặc lấy API Key miễn phí để gắn vào n8n / Make.com / Google Apps Script.',
    platforms: 'Web Browser (aistudio.google.com), REST API',
    vietnameseSupport: 'Hiểu tiếng Việt, đọc ảnh chữ viết tay và nghe hiểu video tiếng Việt xuất sắc.',
    studentPerk: 'Miễn phí hoàn toàn cửa sổ ngữ cảnh khổng lồ (tải nguyên 5 cuốn giáo trình hoặc 1 video bài giảng 45 phút lên hỏi đáp mượt mà) và tặng API Key miễn phí.',
    useCases: [
      'Tải video quảng cáo hoặc buổi thuyết trình lên để AI chấm điểm ngôn ngữ cơ thể, tốc độ nói và nội dung từng giây.',
      'Tạo API Key miễn phí trong 10 giây để gắn vào nút AI Agent trên n8n.'
    ],
    pros: [
      'Không bị giới hạn gắt gao như các gói chat phổ thông.',
      'Bật tắt được Grounding with Google Search và Structured Outputs (JSON).'
    ],
    limitations: 'Ở gói API/Playground miễn phí tại một số khu vực, dữ liệu thử nghiệm có thể được Google dùng cải thiện sản phẩm (không nên tải dữ liệu mật của công ty).',
    studentTip: 'Bất cứ khi nào bạn cần API AI miễn phí để làm đồ án tự động hóa trên n8n hay Google Sheets, hãy vào `aistudio.google.com` bấm "Get API key".',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 302,
    slug: 'le-chat-mistral',
    name: 'Le Chat (Mistral AI)',
    tagline: 'Trợ lý AI tốc độ phản hồi nhanh nhất thế giới từ kỳ lân AI châu Âu',
    excerpt: 'Trả lời hàng nghìn từ chỉ trong 1–2 giây (Flash Answers), tích hợp tìm kiếm web, đọc tài liệu PDF, phân tích code và tạo ảnh Flux chất lượng cao.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí rất hào phóng bao gồm Flash Answers, Web Search và tạo ảnh; gói Pro ~$14.99/tháng (có ưu đãi giảm hơn 50% cho sinh viên!).',
    level: 'Cơ bản',
    officialUrl: 'https://chat.mistral.ai/',
    tags: ['Mistral AI', 'Fast LLM', 'European AI', 'Canvas'],
    whatIsIt: 'Le Chat là trợ lý AI đa phương thức của Mistral AI (Pháp), nổi tiếng với tốc độ sinh văn bản lên tới ~1.000 từ/giây, chế độ Canvas soạn thảo trực tiếp và tôn trọng quyền riêng tư tiêu chuẩn châu Âu.',
    bestFor: 'Sinh viên và người đi làm cần tra cứu, tóm tắt, dịch thuật và brainstorm với tốc độ phản hồi tức thì.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ đọc hiểu và viết tiếng Việt tốt.',
    studentPerk: 'Có gói **Student Plan** giá cực ưu đãi khi đăng ký bằng email `.edu` và bản Free đã mở sẵn rất nhiều tính năng cao cấp.',
    useCases: [
      'Tóm tắt nhanh tài liệu và soạn thảo nội dung trên giao diện Canvas.',
      'Tạo hình ảnh chất lượng cao nhờ tích hợp sẵn mô hình Flux bên trong khung chat.'
    ],
    pros: [
      'Tốc độ phản hồi gần như tức thì không phải chờ chữ chạy từng dòng.',
      'Tích hợp tạo ảnh đẹp và trình đọc OCR tài liệu cực chuẩn.'
    ],
    limitations: 'Sắc thái văn chương tiếng Việt đôi khi chưa mềm mại bằng Claude.',
    studentTip: 'Dùng Le Chat khi bạn cần tóm tắt nhanh hàng loạt thông tin hoặc chuyển ảnh chụp bảng biểu phức tạp sang dạng chữ (Mistral OCR rất mạnh).',
    verifiedAt: '2026-11-24'
  },
  {
    id: 303,
    slug: 'qwen-chat-alibaba',
    name: 'Qwen Chat (Alibaba Cloud)',
    tagline: 'Hệ sinh thái mô hình AI đa năng (Chat, Viết code, Suy luận, Tạo ảnh & Video) miễn phí',
    excerpt: 'Cổng chat chính thức của dòng mô hình mã nguồn mở Qwen hàng đầu thế giới: miễn phí suy luận toán/logic, đọc tài liệu dài, tạo ảnh và tạo video ngắn.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trực tiếp trên giao diện web chat.qwen.ai.',
    level: 'Cơ bản',
    officialUrl: 'https://chat.qwen.ai/',
    tags: ['Open-Weight AI', 'Multimodal', 'Reasoning', 'Free AI'],
    whatIsIt: 'Qwen Chat là giao diện web chính thức cho họ mô hình ngôn ngữ và thị giác Qwen của Alibaba, hỗ trợ chế độ Thinking (suy luận sâu), Web Search, Artifacts dựng giao diện web và tạo ảnh/video hoàn toàn miễn phí.',
    bestFor: 'Sinh viên cần một trạm làm việc AI miễn phí toàn diện (vừa suy luận, vừa code Artifacts, vừa tạo ảnh/video minh họa).',
    platforms: 'Web Browser (chat.qwen.ai)',
    vietnameseSupport: 'Đào tạo mạnh trên ngôn ngữ châu Á nên hiểu và viết tiếng Việt rất mượt.',
    studentPerk: 'Miễn phí 100% cả tính năng Artifacts, Deep Research lẫn tạo video ngắn.',
    useCases: [
      'So sánh đồng thời câu trả lời của 2–3 biến thể mô hình Qwen trên cùng một màn hình.',
      'Dựng biểu đồ HTML tương tác và slide thuyết trình bằng Qwen Artifacts.'
    ],
    pros: [
      'Hoàn toàn miễn phí với rất nhiều tính năng đa phương thức trong 1 nơi.',
      'Khả năng xử lý tiếng Việt và lập trình rất mạnh.'
    ],
    limitations: 'Tốc độ tạo video miễn phí có thể cần chờ vài phút khi đông người dùng.',
    studentTip: 'Đây là công cụ dự phòng hoàn hảo 0 đồng mỗi khi bạn bị hết lượt nhắn miễn phí trên ChatGPT hoặc Claude.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 304,
    slug: 'meta-ai',
    name: 'Meta AI (Llama)',
    tagline: 'Trợ lý AI tích hợp trên Messenger, Instagram, Facebook & Web meta.ai',
    excerpt: 'Chạy trên nền tảng mô hình mở Llama của Meta, giúp hỏi đáp nhanh, brainstorm ý tưởng caption và tạo ảnh động ngay trong cuộc trò chuyện nhóm.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%.',
    level: 'Cơ bản',
    officialUrl: 'https://www.meta.ai/',
    tags: ['Llama', 'Meta', 'Social AI', 'Image Gen'],
    whatIsIt: 'Meta AI là trợ lý trí tuệ nhân tạo miễn phí được vận hành bởi dòng mô hình Llama mới nhất của Meta, tích hợp trực tiếp trên `meta.ai` và các ứng dụng Facebook, Messenger, Instagram, WhatsApp.',
    bestFor: 'Nhóm sinh viên đang thảo luận bài tập ngay trong group chat Messenger cần gọi `@Meta AI` hỗ trợ tức thì.',
    platforms: 'Web Browser (meta.ai), Messenger, Facebook, Instagram',
    vietnameseSupport: 'Hỗ trợ giao diện và trò chuyện tiếng Việt chính thức.',
    studentPerk: 'Miễn phí 100% không giới hạn lượt tạo ảnh Imagine và hỏi đáp trong nhóm chat.',
    useCases: [
      'Gõ `@Meta AI` ngay trong nhóm chat Messenger làm đồ án để nhờ phân chia công việc hoặc gợi ý 10 tên chiến dịch.',
      'Tạo nhanh hình ảnh minh họa vui nhộn trên `meta.ai`.'
    ],
    pros: [
      'Tiện lợi ngay trong ứng dụng nhắn tin hàng ngày của sinh viên Việt Nam.',
      'Hoàn toàn miễn phí.'
    ],
    limitations: 'Khả năng đọc tài liệu PDF chuyên sâu không mạnh bằng Claude hay NotebookLM.',
    studentTip: 'Dùng `@Meta AI` ngay trong nhóm Messenger của nhóm đồ án để chốt nhanh ý tưởng khi đang họp nhóm.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 305,
    slug: 'openrouter',
    name: 'OpenRouter',
    tagline: 'Cổng kết nối thống nhất 300+ Mô hình AI (Claude, GPT, Gemini, DeepSeek, Llama)',
    excerpt: 'Chỉ cần 1 tài khoản duy nhất để dùng thử các model miễn phí (`:free`) hoặc nạp từ $5 dùng trả theo từng ký tự (Pay-as-you-go) tiết kiệm hơn mua gói $20/tháng.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Freemium',
    pricingDetail: 'Có hàng chục mô hình gắn nhãn `:free` miễn phí 100%; các mô hình cao cấp tính theo thực dùng (nạp $5 dùng được cả học kỳ) không tốn phí tháng.',
    level: 'Trung bình',
    officialUrl: 'https://openrouter.ai/',
    tags: ['AI Gateway', 'Multi-LLM', 'Pay-as-you-go', 'API'],
    whatIsIt: 'OpenRouter là cổng định tuyến và phòng chat hợp nhất cho phép truy cập hơn 300 mô hình AI thương mại lẫn mã nguồn mở thông qua một giao diện Chatroom và một chuẩn API duy nhất.',
    bestFor: 'Sinh viên không muốn đóng $20/tháng cố định cho từng hãng AI mà chỉ muốn nạp $5 dùng cả Claude, GPT, Gemini, DeepSeek khi cần làm bài.',
    platforms: 'Web Chatroom (openrouter.ai/chat) & Unified API',
    vietnameseSupport: 'Phụ thuộc vào mô hình bạn chọn (hỗ trợ đầy đủ các model mạnh nhất tiếng Việt).',
    studentPerk: 'Lọc từ khóa `free` trên OpenRouter để sử dụng miễn phí hàng chục mô hình mã nguồn mở lớn (Llama, DeepSeek, Qwen, Gemma).',
    useCases: [
      'Mở OpenRouter Chatroom chạy song song 3 mô hình cho cùng 1 câu lệnh để xem model nào viết hay nhất.',
      'Kết nối API OpenRouter vào n8n hoặc tiện ích dịch thuật với chi phí chỉ vài nghìn đồng cho hàng trăm trang văn bản.'
    ],
    pros: [
      'Tiết kiệm chi phí cực lớn nhờ cơ chế dùng bao nhiêu trả bấy nhiêu (Pay-as-you-go).',
      'Bảng xếp hạng Top Models cập nhật theo thời gian thực cho biết thế giới đang dùng model nào nhiều nhất.'
    ],
    limitations: 'Giao diện hơi thiên về kỹ thuật hơn so với ứng dụng tiêu dùng thông thường.',
    studentTip: 'Mẹo tiết kiệm cho sinh viên: Thay vì mua gói $20/tháng khi chỉ dùng cao điểm mùa thi, nạp $5 vào OpenRouter bạn có thể gọi cả Claude Sonnet/Opus lẫn GPT suốt mấy tháng liền!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 306,
    slug: 'ollama',
    name: 'Ollama',
    tagline: 'Chạy các mô hình AI mã nguồn mở (Llama, Gemma, DeepSeek, Qwen) Offline ngay trên Laptop',
    excerpt: 'Tải và chạy AI trực tiếp trên máy tính cá nhân không cần Internet, miễn phí 100% trọn đời và bảo mật tuyệt đối dữ liệu nghiên cứu nội bộ.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% mã nguồn mở trọn đời.',
    level: 'Nâng cao',
    officialUrl: 'https://ollama.com/',
    tags: ['Local AI', 'Offline LLM', 'Privacy', 'Open Source'],
    whatIsIt: 'Ollama là công cụ gọn nhẹ phổ biến nhất thế giới giúp tải và chạy các mô hình ngôn ngữ lớn (như Gemma 3, Qwen, Llama, DeepSeek) ngay trên CPU/GPU của máy tính Windows, macOS và Linux chỉ bằng một câu lệnh.',
    bestFor: 'Sinh viên và doanh nghiệp muốn xử lý dữ liệu khách hàng nhạy cảm 100% Offline trên máy cá nhân hoặc tích hợp AI cục bộ vào n8n.',
    platforms: 'Windows, macOS, Linux',
    vietnameseSupport: 'Chạy tốt các model hỗ trợ tiếng Việt như Qwen và Gemma.',
    studentPerk: 'Miễn phí 100%, không bao giờ hết lượt nhắn, hoạt động cả khi ngồi trên máy bay hoặc nơi mất mạng Wi-Fi.',
    useCases: [
      'Phân tích bảng dữ liệu khảo sát/khách hàng có thông tin cá nhân bảo mật mà không được phép tải lên Cloud AI.',
      'Kết nối Ollama cục bộ với n8n tự host trên máy để chạy hàng nghìn tác vụ phân loại văn bản với chi phí 0 đồng.'
    ],
    pros: [
      'Bảo mật riêng tư tuyệt đối 100%, không gửi một byte dữ liệu nào ra ngoài máy tính.',
      'Đã có ứng dụng giao diện cửa sổ chat trực tiếp rất dễ dùng.'
    ],
    limitations: 'Đòi hỏi máy tính có RAM từ 8GB–16GB trở lên (chọn các bản nhẹ 4B–8B tham số cho laptop sinh viên).',
    studentTip: 'Với laptop sinh viên RAM 16GB (hoặc MacBook chip M1/M2/M3), hãy tải các mô hình kích thước 7B–8B (như Qwen hoặc Gemma) trên Ollama để chạy cực nhanh và mượt.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 307,
    slug: 'lm-studio',
    name: 'LM Studio',
    tagline: 'Phần mềm Desktop chạy AI Offline kèm tính năng đọc tài liệu PDF cục bộ dễ dùng',
    excerpt: 'Giao diện đẹp mắt giúp tìm kiếm, tải về các mô hình AI từ Hugging Face và trò chuyện với tài liệu PDF ngay trên máy tính cá nhân không cần dòng lệnh.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% cho người dùng cá nhân, học tập và cả môi trường công việc.',
    level: 'Trung bình',
    officialUrl: 'https://lmstudio.ai/',
    tags: ['Local AI', 'Desktop App', 'RAG PDF', 'Offline'],
    whatIsIt: 'LM Studio là ứng dụng máy tính để bàn có giao diện đồ họa trực quan cho phép khám phá, tải xuống và chạy các mô hình LLM cục bộ (định dạng GGUF/MLX), tự động kiểm tra xem cấu hình phần cứng laptop của bạn chạy vừa mô hình nào.',
    bestFor: 'Người không thích gõ lệnh Terminal nhưng muốn chạy AI Offline miễn phí và đính kèm file PDF hỏi đáp riêng tư trên máy.',
    platforms: 'Windows, macOS, Linux',
    vietnameseSupport: 'Hỗ trợ giao diện đa ngôn ngữ và chạy mượt các model tiếng Việt.',
    studentPerk: 'Tính năng báo hiệu tương thích phần cứng ("Likely to fit in RAM") giúp sinh viên không tải nhầm mô hình quá nặng cho máy.',
    useCases: [
      'Đính kèm tài liệu nội bộ công ty thực tập vào khung chat Offline để tóm tắt an toàn.',
      'Thử nghiệm so sánh tốc độ các mô hình AI mã nguồn mở ngay trên laptop.'
    ],
    pros: [
      'Giao diện thân thiện nhất trong các phần mềm Local AI.',
      'Hỗ trợ đính kèm tài liệu (Local RAG) ngay trong khung chat không cần cài thêm plugin.'
    ],
    limitations: 'Tốn dung lượng ổ cứng khoảng 4GB–8GB cho mỗi mô hình tải về máy.',
    studentTip: 'Nếu đi thực tập tại ngân hàng hoặc tập đoàn cấm nhân viên dán tài liệu lên ChatGPT web, LM Studio chạy Offline trên máy là giải pháp tuân thủ bảo mật tuyệt vời.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 308,
    slug: 'hugging-face-spaces',
    name: 'Hugging Face Spaces & HuggingChat',
    tagline: 'Chợ ứng dụng Demo AI Mã nguồn mở lớn nhất thế giới (Dùng thử miễn phí 100%)',
    excerpt: 'Nơi hàng chục nghìn nhà nghiên cứu đăng tải bản Demo chạy trực tiếp các công cụ AI mới nhất (Tách nhạc, Tạo ảnh, Xóa vật thể, TTS, OCR) miễn phí.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Freemium',
    pricingDetail: 'Trải nghiệm hàng chục nghìn ứng dụng AI trên Spaces và HuggingChat miễn phí 100%.',
    level: 'Trung bình',
    officialUrl: 'https://huggingface.co/spaces',
    tags: ['Open Source AI', 'AI Demos', 'Gradio', 'Research'],
    whatIsIt: 'Hugging Face được mệnh danh là "GitHub của thế giới AI", trong đó mục **Spaces** cung cấp hàng chục nghìn ứng dụng giao diện web miễn phí để người dùng trải nghiệm ngay các công nghệ AI vừa ra mắt trên toàn cầu.',
    bestFor: 'Sinh viên thích khám phá các công cụ AI chuyên sâu (tạo ảnh Flux, nhân bản giọng nói, xóa nền video, chuyển ảnh thành 3D) mà không tốn phí mua web thương mại.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Có cộng đồng Việt Nam phát triển nhiều mô hình xử lý ngôn ngữ và giọng nói tiếng Việt trên Hugging Face.',
    studentPerk: 'Miễn phí 100% quyền dùng GPU cộng đồng (ZeroGPU) để chạy các mô hình AI nặng ngay trên trình duyệt.',
    useCases: [
      'Vào Trending Spaces mỗi tuần để dùng thử miễn phí các mô hình tạo ảnh, tạo 3D hoặc xử lý âm thanh vừa công bố.',
      'Tìm bộ dữ liệu mở (Datasets) phục vụ bài tập phân tích dữ liệu và nghiên cứu khoa học.'
    ],
    pros: [
      'Kho báu miễn phí nơi khởi nguồn của hầu hết các startup công cụ AI thu phí bên ngoài.',
      'Cập nhật công nghệ mới nhanh nhất thế giới.'
    ],
    limitations: 'Tài khoản miễn phí có giới hạn số phút dùng GPU miễn phí mỗi ngày (ZeroGPU quota).',
    studentTip: 'Đăng ký một tài khoản Hugging Face miễn phí để được tăng hạn mức ZeroGPU hàng ngày gấp nhiều lần khách vãng lai.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 309,
    slug: 'pi-ai',
    name: 'Pi AI (Inflection)',
    tagline: 'Trợ lý AI trò chuyện thấu cảm, luyện phỏng vấn & đàm thoại tiếng Anh tự nhiên',
    excerpt: 'Được thiết kế với trí tuệ cảm xúc (EQ) cao và giọng nói cực kỳ ấm áp, rất hợp để sinh viên luyện nói tiếng Anh giao tiếp hoặc tập dượt trả lời phỏng vấn.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% cả nhắn tin lẫn đàm thoại giọng nói.',
    level: 'Cơ bản',
    officialUrl: 'https://pi.ai/',
    tags: ['Voice Chat', 'Interview Prep', 'Emotional AI', 'English Speaking'],
    whatIsIt: 'Pi (Personal Intelligence) là trợ lý AI của Inflection AI tập trung vào hội thoại tự nhiên, lắng nghe, đặt câu hỏi gợi mở và huấn luyện kỹ năng mềm thông qua giọng nói chân thực.',
    bestFor: 'Sinh viên luyện phỏng vấn xin việc bằng tiếng Anh (Mock Interview), rèn tư duy phản biện hoặc gỡ rối áp lực học tập.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Nhắn tin tiếng Việt được, nhưng tính năng đàm thoại giọng nói xuất sắc nhất khi luyện tiếng Anh.',
    studentPerk: 'Miễn phí 100% tính năng trò chuyện giọng nói thời gian thực không giới hạn.',
    useCases: [
      'Nhờ Pi đóng vai Nhà tuyển dụng (HR Manager) hỏi xoáy 5 câu phỏng vấn vị trí Marketing Intern bằng tiếng Anh và sửa lỗi diễn đạt.',
      'Brainstorm ý tưởng theo phong cách hỏi - đáp gợi mở Socratic.'
    ],
    pros: [
      'Giọng nói tiếng Anh ấm áp, tự nhiên như người bạn thật.',
      'Không thu phí.'
    ],
    limitations: 'Không chuyên về đọc file Excel hay xuất báo cáo dài.',
    studentTip: 'Trước ngày đi phỏng vấn tại các tập đoàn đa quốc gia (MNC), hãy bật chế độ Voice của Pi trên điện thoại luyện trả lời 15 phút mỗi tối.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 310,
    slug: 'duck-ai',
    name: 'Duck.ai (DuckDuckGo AI Chat)',
    tagline: 'Trò chuyện ẩn danh miễn phí với GPT, Claude, Llama & Mistral không cần đăng ký',
    excerpt: 'Mở trang web là chat ngay với nhiều mô hình AI nổi tiếng mà không cần tạo tài khoản, ẩn địa chỉ IP và không lưu lịch sử lên máy chủ.',
    category: 'Mô hình Ngôn ngữ & Chatbot AI',
    categorySlug: 'llm-chatbots',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%, không cần đăng nhập tài khoản.',
    level: 'Cơ bản',
    officialUrl: 'https://duck.ai/',
    tags: ['Anonymous AI', 'No Login', 'Privacy', 'Multi-Model'],
    whatIsIt: 'Duck.ai là dịch vụ trò chuyện AI bảo vệ quyền riêng tư của công cụ tìm kiếm DuckDuckGo, cho phép người dùng truy cập miễn phí các mô hình của OpenAI, Anthropic, Meta và Mistral mà không cần tài khoản và ẩn hoàn toàn thông tin định danh.',
    bestFor: 'Sinh viên ngồi máy tính phòng thực hành ở trường không muốn đăng nhập tài khoản cá nhân nhưng cần dùng nhanh AI.',
    platforms: 'Web Browser (duck.ai)',
    vietnameseSupport: 'Hỗ trợ chat tiếng Việt đầy đủ.',
    studentPerk: 'Vào `duck.ai` dùng ngay trong 1 giây không cần email hay số điện thoại xác thực.',
    useCases: [
      'Sử dụng AI nhanh trên máy tính công cộng ở thư viện hoặc phòng máy trường đại học mà không lo lộ tài khoản Gmail.',
      'Hỏi đáp ẩn danh đảm bảo dữ liệu không bị dùng huấn luyện AI.'
    ],
    pros: [
      'Không cần đăng nhập, bảo mật riêng tư cao.',
      'Chuyển đổi qua lại giữa 4–5 mô hình AI miễn phí.'
    ],
    limitations: 'Không hỗ trợ tải lên file PDF nặng hoặc tạo ảnh.',
    studentTip: 'Hãy nhớ địa chỉ siêu ngắn `duck.ai` mỗi khi bạn ngồi trên máy tính lạ ở phòng Lab trường và cần tra cứu nhanh mà không tiện đăng nhập Google.',
    verifiedAt: '2026-11-24'
  }
];

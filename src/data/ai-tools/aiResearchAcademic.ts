import { MarketingTool } from '../../types';

export const aiResearchAcademicTools: MarketingTool[] = [
  {
    id: 8,
    slug: 'notebooklm',
    name: 'Google NotebookLM',
    tagline: 'Sổ tay nghiên cứu AI đọc hàng chục tài liệu PDF không bịa nguồn',
    excerpt: 'Công cụ vàng cho sinh viên làm nghiên cứu thị trường & khóa luận: tải lên file PDF, slide, link web và hỏi đáp dựa chính xác trên nguồn bạn cung cấp.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
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
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
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
    id: 38,
    slug: 'consensus-ai',
    name: 'Consensus',
    tagline: 'Công cụ tìm kiếm bài báo khoa học Q1/Q2 bằng AI có trích dẫn DOI thật 100%',
    excerpt: 'Đặt câu hỏi nghiên cứu Marketing bằng tiếng Anh, Consensus tổng hợp câu trả lời từ hàng triệu bài báo bình duyệt (Peer-reviewed) trên Semantic Scholar.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
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
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
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
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
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
    id: 311,
    slug: 'scispace',
    name: 'SciSpace (Typeset.io)',
    tagline: 'Đọc hiểu bài báo khoa học, Giải thích công thức thống kê & Lập bảng Literature Review',
    excerpt: 'Tô đen bất kỳ bảng kết quả hồi quy SEM/ANOVA hay thuật ngữ khó nào trong bài báo PDF tiếng Anh, Copilot của SciSpace sẽ giải thích dễ hiểu bằng tiếng Việt.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép tìm kiếm hơn 280 triệu bài báo, hỏi đáp Copilot cơ bản trên PDF và lập bảng Literature Review giới hạn cột.',
    level: 'Cơ bản',
    officialUrl: 'https://typeset.io/',
    tags: ['SciSpace', 'PDF Copilot', 'Academic Reading', 'Literature Review'],
    whatIsIt: 'SciSpace (trước đây là Typeset.io) là nền tảng nghiên cứu khoa học tích hợp trợ lý AI Copilot, giúp sinh viên đọc hiểu các bài báo Q1/Q2 phức tạp, giải thích bảng biểu số liệu thống kê và tổng hợp tổng quan tài liệu bằng tiếng Việt.',
    bestFor: 'Sinh viên đọc bài báo tiếng Anh lần đầu làm NCKH / Khóa luận gặp khó khăn với phần Methodology & Results.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Cho phép chọn ngôn ngữ trả lời là **Tiếng Việt** khi giải thích bài báo tiếng Anh cực kỳ chuẩn xác!',
    studentPerk: 'Cài SciSpace Chrome Extension miễn phí để giải thích tức thì mọi đoạn văn học thuật khó hiểu ngay khi đang đọc bài trên ScienceDirect hay Google Scholar.',
    useCases: [
      'Khoanh vùng (Clip) một bảng kết quả kiểm định PLS-SEM hoặc hồi quy trong bài báo mẫu và nhờ SciSpace giải thích ý nghĩa từng chỉ số bằng tiếng Việt.',
      'Tìm các bài báo cùng chủ đề và lọc riêng những bài có sẵn file PDF mở (Open Access).'
    ],
    pros: [
      'Tính năng khoanh vùng ảnh bảng biểu/công thức để AI giải thích bằng tiếng Việt cực kỳ hữu hiệu cho sinh viên.',
      'Kho cơ sở dữ liệu hơn 280 triệu công trình khoa học thật.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt xuất file Excel và các mô hình phân tích sâu.',
    studentTip: 'Khi đọc bài báo mẫu tiếng Anh mà không hiểu tác giả biện luận bảng số liệu thế nào, hãy dùng công cụ cắt ảnh trên SciSpace khoanh đúng cái bảng đó và hỏi bằng tiếng Việt!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 312,
    slug: 'jenni-ai',
    name: 'Jenni AI',
    tagline: 'Trợ lý soạn thảo Luận văn & Bài báo Khoa học tự động gợi ý câu kèm trích dẫn APA',
    excerpt: 'Khi bạn đang viết đoạn tổng quan lý thuyết và bí ý, Jenni AI gợi ý câu viết tiếp theo dựa trên kho bài báo PDF bạn đã tải lên kèm trích dẫn chuẩn APA 7.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng 200 từ AI hoàn thành mỗi ngày không giới hạn thời gian; gói Unlimited có mã giảm giá cho sinh viên.',
    level: 'Trung bình',
    officialUrl: 'https://jenni.ai/',
    tags: ['Academic Writing', 'In-text Citation', 'Thesis', 'APA 7'],
    whatIsIt: 'Jenni AI là trình soạn thảo văn bản học thuật ứng dụng AI hỗ trợ viết từng câu (Autocomplete), diễn đạt lại chuẩn văn phong khoa học và chèn trích dẫn trong bài (In-text Citations) từ thư viện PDF cá nhân hoặc cơ sở dữ liệu tạp chí.',
    bestFor: 'Sinh viên viết khóa luận bằng tiếng Anh, học viên cao học và tác giả viết bản thảo bài báo quốc tế.',
    platforms: 'Web Browser (Cloud), xuất sang Word (.docx) và LaTeX',
    vietnameseSupport: 'Mạnh nhất khi viết bản thảo học thuật tiếng Anh (hỗ trợ đa ngôn ngữ cơ bản).',
    studentPerk: '200 từ AI gợi ý miễn phí mỗi ngày giúp vượt qua hội chứng "trang giấy trắng" (Writer’s Block) khi bắt đầu viết từng mục nhỏ.',
    useCases: [
      'Tải 20 bài báo PDF trong Zotero lên thư viện Jenni để AI gợi ý câu tổng hợp kèm đúng trích dẫn `(Author, Year)`.',
      'Chuyển đoạn nháp thô sang giọng văn học thuật (Academic Tone).'
    ],
    pros: [
      'Viết tới đâu chèn trích dẫn thật tới đó và tự lập danh mục References cuối bài.',
      'Bạn kiểm soát từng câu chứ không phải kiểu bấm 1 nút sinh ra bài văn mẫu sáo rỗng.'
    ],
    limitations: '200 từ miễn phí/ngày chỉ đủ hỗ trợ mở ý cho các đoạn khó nhất.',
    studentTip: 'Luôn bấm mở nguồn trích dẫn mà Jenni gợi ý để đọc kiểm tra xem tác giả gốc có đúng là khẳng định ý đó hay không.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 313,
    slug: 'julius-ai',
    name: 'Julius AI',
    tagline: 'Chuyên gia Phân tích Dữ liệu Khảo sát, Chạy Thống kê & Vẽ Biểu đồ bằng câu lệnh',
    excerpt: 'Tải file Excel/CSV khảo sát hoặc doanh số bán hàng lên, gõ yêu cầu bằng tiếng Việt để Julius tự chạy Python/R kiểm định ANOVA, Hồi quy và vẽ biểu đồ chuẩn xuất bản.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép gửi 15 tin nhắn phân tích dữ liệu mỗi tháng; có ưu đãi giảm 50% cho sinh viên và giảng viên đại học!',
    level: 'Cơ bản',
    officialUrl: 'https://julius.ai/',
    tags: ['Data Analysis', 'Statistics AI', 'Survey Charts', 'Python/R'],
    whatIsIt: 'Julius AI là trợ lý khoa học dữ liệu chuyên dụng có khả năng đọc hiểu bảng tính Excel, CSV, Google Sheets và file SPSS `.sav`, tự động viết và thực thi mã Python/R ngầm phía sau để xuất ra bảng kiểm định thống kê và biểu đồ trực quan.',
    bestFor: 'Sinh viên chạy phân tích dữ liệu khảo sát, làm sạch dữ liệu lỗi hoặc vẽ biểu đồ chuyên sâu mà không biết lập trình Python/R.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hiểu câu lệnh tiếng Việt và hiển thị tiêu đề biểu đồ tiếng Việt chuẩn xác.',
    studentPerk: '15 lượt chạy phân tích miễn phí mỗi tháng; sinh viên xác minh email trường được giảm giá 50% các gói nâng cao.',
    useCases: [
      'Tải file khảo sát lên và yêu cầu: "Hãy làm sạch các dòng thiếu dữ liệu, tính thống kê mô tả và chạy kiểm định hồi quy tuyến tính kèm giải thích ý nghĩa p-value".',
      'Vẽ biểu đồ Boxplot, Heatmap tương quan Pearson hoặc biểu đồ phân tán đẹp mắt.'
    ],
    pros: [
      'Cho xem lại toàn bộ đoạn code Python/R đã chạy nên kết quả tính toán chính xác 100% (không bị tính nhẩm sai như LLM thường).',
      'Đọc được cả file `.sav` của SPSS.'
    ],
    limitations: 'Gói miễn phí giới hạn 15 câu lệnh/tháng nên hãy gộp nhiều yêu cầu phân tích vào chung 1 tin nhắn.',
    studentTip: 'Gom 3–4 yêu cầu (Làm sạch + Thống kê mô tả + Tương quan + Vẽ biểu đồ) vào trong 1 câu lệnh rõ ràng để tận dụng tối đa 15 lượt miễn phí/tháng.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 314,
    slug: 'semantic-scholar',
    name: 'Semantic Scholar',
    tagline: 'Công cụ tìm kiếm 200M+ Bài báo Khoa học bằng AI kèm tóm tắt siêu ngắn (TLDR)',
    excerpt: 'Dự án AI phi lợi nhuận của Viện Allen (AI2): tự động tóm tắt mỗi bài báo khoa học dài thành 1 câu cốt lõi (TLDR) và lọc ra những trích dẫn có sức ảnh hưởng nhất.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% phi lợi nhuận trọn đời.',
    level: 'Cơ bản',
    officialUrl: 'https://www.semanticscholar.org/',
    tags: ['Academic Search', 'TLDR', 'Open Science', 'Citations'],
    whatIsIt: 'Semantic Scholar là công cụ tìm kiếm tài liệu khoa học ứng dụng AI miễn phí do Viện Trí tuệ Nhân tạo Allen (AI2) phát triển, cung cấp tính năng tóm tắt 1 câu (TLDR) và đánh giá mức độ ảnh hưởng thực sự của trích dẫn (Highly Influential Citations).',
    bestFor: 'Mọi sinh viên sàng lọc nhanh hàng chục bài báo khoa học để chọn đúng bài đáng đọc sâu.',
    platforms: 'Web Browser, API mở miễn phí',
    vietnameseSupport: 'Kho bài báo quốc tế tiếng Anh.',
    studentPerk: 'Miễn phí 100%, tích hợp tính năng Semantic Reader giúp đọc PDF thông minh với giải thích ký hiệu và làm nổi bật các trích dẫn ngay trên trang.',
    useCases: [
      'Đọc dòng **TLDR** dưới mỗi kết quả tìm kiếm để nắm được kết luận chính của bài báo chỉ trong 5 giây.',
      'Lọc bộ lọc "Has PDF" để chỉ xem các bài báo tải toàn văn miễn phí.'
    ],
    pros: [
      'Sạch sẽ, không quảng cáo, hoàn toàn miễn phí vì mục tiêu khoa học mở.',
      'Là nguồn dữ liệu gốc đứng sau cả Consensus, Elicit và Connected Papers.'
    ],
    limitations: 'Tập trung mạnh vào tài liệu tiếng Anh quốc tế.',
    studentTip: 'Kết hợp Google Scholar + Semantic Scholar sẽ giúp bạn tìm được nhiều link tải PDF miễn phí hợp pháp nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 315,
    slug: 'paperpal',
    name: 'Paperpal',
    tagline: 'Hiệu đính & Kiểm tra Văn phong Tiếng Anh Học thuật chuẩn nộp Tạp chí Quốc tế',
    excerpt: 'Khác với Grammarly thiên về giao tiếp thương mại, Paperpal được huấn luyện trên hàng triệu bài báo khoa học đã xuất bản để chỉnh câu từ chuẩn Academic Register.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cung cấp gợi ý sửa ngữ pháp học thuật, dịch thuật học thuật và kiểm tra mức độ sẵn sàng nộp bài (Submission Readiness) giới hạn lượt/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://paperpal.com/',
    tags: ['Academic English', 'Manuscript Check', 'Journal Submission', 'Proofreading'],
    whatIsIt: 'Paperpal (phát triển bởi Cactus Communications — đơn vị biên tập Editage nổi tiếng) là trợ lý AI chuyên hiệu đính ngôn ngữ tiếng Anh học thuật và kiểm tra các lỗi kỹ thuật trước khi gửi bài cho tạp chí quốc tế.',
    bestFor: 'Sinh viên viết khóa luận tiếng Anh, nghiên cứu sinh và giảng viên chuẩn bị nộp bài báo Scopus/ISI.',
    platforms: 'Web Editor, Microsoft Word Add-in, Google Docs, Overleaf',
    vietnameseSupport: 'Tính năng Translate hỗ trợ dịch đoạn nháp tiếng Việt sang tiếng Anh chuẩn văn phong học thuật rất mượt!',
    studentPerk: 'Cài Add-in Paperpal trực tiếp vào Microsoft Word để rà lỗi văn nói (Informal tone) trong bài luận tiếng Anh miễn phí.',
    useCases: [
      'Dịch đoạn phân tích kết quả viết bằng tiếng Việt sang tiếng Anh học thuật chuẩn chỉnh.',
      'Kiểm tra tính nhất quán của bảng biểu, ký hiệu thống kê ($p < 0.05$, $\\beta$) trước khi nộp bài.'
    ],
    pros: [
      'Hiểu sâu quy ước viết bài báo khoa học hơn hẳn các công cụ kiểm tra ngữ pháp thông thường.',
      'Tích hợp thẳng trong Microsoft Word.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt sửa chuyên sâu mỗi tháng.',
    studentTip: 'Trước khi nộp bài luận tiếng Anh cuối kỳ, hãy quét qua Paperpal một lượt để loại bỏ các từ văn nói (`a lot of`, `get`, `very good`) sang từ vựng học thuật chuẩn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 316,
    slug: 'scholarcy',
    name: 'Scholarcy',
    tagline: 'Tóm tắt Bài báo Khoa học dài thành Thẻ Ghi nhớ (Summary Flashcards) trong vài giây',
    excerpt: 'Tự động bóc tách Mục tiêu, Cỡ mẫu, Phương pháp, Phát hiện chính và Hạn chế nghiên cứu (Limitations) của bài báo dài 30 trang thành 1 thẻ tóm tắt gọn gàng.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Tiện ích Chrome Extension và bản Web miễn phí tóm tắt tối đa 3 bài báo/ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://www.scholarcy.com/',
    tags: ['Paper Summarizer', 'Flashcards', 'Research Gap', 'Reading'],
    whatIsIt: 'Scholarcy là công cụ đọc lướt và tóm tắt bài báo học thuật thành các thẻ thông tin có cấu trúc (Summary Flashcards), tự động tô sáng đóng góp mới và phần hạn chế của nghiên cứu.',
    bestFor: 'Sinh viên cần đọc nhanh phần **Limitations & Future Research** của nhiều bài báo để tìm Khoảng trống nghiên cứu (Research Gap).',
    platforms: 'Web Browser, Chrome/Edge Extension',
    vietnameseSupport: 'Tóm tắt tài liệu tiếng Anh (có thể kết hợp trình dịch trình duyệt).',
    studentPerk: '3 bài tóm tắt miễn phí mỗi ngày qua Extension ngay trên trình duyệt.',
    useCases: [
      'Đọc lướt 15 bài báo trong tuần để lọc ra các hướng nghiên cứu tiếp theo (Future Research Directions) làm đề tài khóa luận.',
      'Xuất danh sách toàn bộ tài liệu tham khảo của bài báo kèm link gốc.'
    ],
    pros: [
      'Chia sẵn các mục Methods, Results, Limitations cực kỳ khoa học.',
      'Tô màu phân biệt giữa kiến thức nền và phát hiện mới của tác giả.'
    ],
    limitations: 'Giới hạn 3 bài/ngày ở gói Free.',
    studentTip: 'Mục "Limitations" do Scholarcy bóc tách ra chính là mỏ vàng giúp bạn tìm và lập luận **Research Gap** cho đề cương nghiên cứu của mình.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 317,
    slug: 'litmaps',
    name: 'Litmaps',
    tagline: 'Vẽ Bản đồ Tài liệu Tham khảo theo Trục Thời gian & Cảnh báo bài báo mới',
    excerpt: 'Trực quan hóa các bài báo từ cũ sang mới (trục ngang) và từ ít trích dẫn sang nhiều trích dẫn (trục dọc) để thấy rõ lịch sử phát triển của một lý thuyết.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo 2 bản đồ Litmaps (tối đa 20 bài báo/bản đồ) và nhập dữ liệu từ Zotero/BibTeX.',
    level: 'Cơ bản',
    officialUrl: 'https://www.litmaps.com/',
    tags: ['Citation Map', 'Timeline', 'Literature Review', 'Academic'],
    whatIsIt: 'Litmaps là công cụ lập bản đồ tổng quan tài liệu động, sắp xếp các công trình khoa học trên hệ trục tọa độ Thời gian xuất bản × Số lượt trích dẫn và vẽ mũi tên kế thừa trực tiếp giữa chúng.',
    bestFor: 'Sinh viên viết chương Cơ sở lý thuyết muốn trình bày lịch sử tiến hóa của khái niệm theo trình tự thời gian logic.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Kho bài báo khoa học quốc tế.',
    studentPerk: 'Cho phép xuất hình ảnh sơ đồ dòng thời gian nghiên cứu sắc nét đưa thẳng vào slide bảo vệ đề cương.',
    useCases: [
      'Tìm xem có bài báo quan trọng nào cùng chủ đề mà mình vô tình bỏ sót chưa đưa vào Zotero không.',
      'Chụp sơ đồ trục thời gian các nghiên cứu từ năm 2000 đến 2026 để thuyết trình trước hội đồng.'
    ],
    pros: [
      'Khác với Connected Papers vẽ chùm không thứ tự ngày tháng, Litmaps xếp theo đúng trục thời gian từ trái qua phải rất dễ hiểu.',
      'Nhập trực tiếp file `.bib` / `.ris` từ Zotero.'
    ],
    limitations: 'Bản miễn phí giới hạn 20 bài báo trên một bản đồ.',
    studentTip: 'Chọn lọc 15–20 bài báo cốt lõi nhất trong đề cương rồi đưa lên Litmaps xuất ảnh sơ đồ — hội đồng sẽ thấy bạn nắm lịch sử lý thuyết cực kỳ bài bản.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 318,
    slug: 'chatpdf',
    name: 'ChatPDF',
    tagline: 'Trò chuyện tức thì với bất kỳ Giáo trình & Tài liệu PDF nào không cần đăng ký phức tạp',
    excerpt: 'Kéo thả 1 file PDF giáo trình hoặc báo cáo tài chính lên web, ChatPDF tạo ngay các câu hỏi gợi ý và trả lời kèm số trang chính xác để bấm nhảy tới.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép tải lên 2 file PDF mỗi ngày (mỗi file tối đa 120 trang) và hỏi 20 câu/ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://www.chatpdf.com/',
    tags: ['PDF AI', 'Study Tool', 'Page Citations', 'Quick Read'],
    whatIsIt: 'ChatPDF là công cụ đọc PDF bằng AI siêu tốc chia màn hình làm hai nửa (trái: trang PDF gốc, phải: khung chat AI), mỗi câu trả lời đều gắn nút số trang mà khi bấm vào sẽ cuộn và tô màu ngay đoạn văn bản gốc.',
    bestFor: 'Sinh viên cần tra cứu nhanh 1–2 file PDF báo cáo dài dưới 120 trang ngay lập tức.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Đọc file tiếng Anh và trả lời bằng tiếng Việt rất mượt.',
    studentPerk: 'Không bắt buộc tạo tài khoản vẫn dùng thử ngay được 2 file/ngày.',
    useCases: [
      'Tải báo cáo thường niên của một công ty lên và hỏi: "Chi phí bán hàng và tiếp thị năm nay tăng giảm bao nhiêu % so với năm ngoái?".',
      'Ôn tập nhanh chương sách tiếng Anh chuyên ngành trước giờ kiểm tra.'
    ],
    pros: [
      'Giao diện đơn giản và tốc độ xử lý nhanh nhất trong các tool đọc PDF.',
      'Bấm vào số trang là nhảy thẳng tới dòng chữ gốc để đối chiếu.'
    ],
    limitations: 'Giới hạn 2 file/ngày ở bản Free (nếu cần đọc 20–50 file cùng lúc hãy dùng Google NotebookLM miễn phí).',
    studentTip: 'Dùng ChatPDF khi cần tra nhanh 1 file lẻ trong 30 giây, còn làm dự án lớn nhiều tài liệu thì chuyển sang NotebookLM.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 319,
    slug: 'humata-ai',
    name: 'Humata AI',
    tagline: 'Phân tích Báo cáo Kỹ thuật, Tài liệu Tài chính & So sánh nhiều file PDF',
    excerpt: 'Trợ lý AI đọc hiểu tài liệu chuyên sâu, hỗ trợ hỏi đáp xuyên suốt thư mục nhiều file PDF và tô sáng câu căn cứ trong văn bản gốc.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép phân tích miễn phí tới 60 trang PDF; có gói Student Plan giá ưu đãi chỉ ~$1.99/tháng!',
    level: 'Cơ bản',
    officialUrl: 'https://www.humata.ai/',
    tags: ['Document AI', 'PDF Analysis', 'Citations', 'Student Plan'],
    whatIsIt: 'Humata AI là nền tảng quản lý tri thức tài liệu bằng AI giúp tóm tắt, so sánh các điều khoản/số liệu giữa nhiều tài liệu phức tạp và trích dẫn thẳng về trang gốc.',
    bestFor: 'Sinh viên phân tích hợp đồng mẫu, báo cáo nghiên cứu dày và tài liệu kỹ thuật.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ đặt câu hỏi bằng tiếng Việt.',
    studentPerk: 'Gói **Humata Student Plan** chỉ $1.99/tháng dành cho email `.edu` là một trong những gói AI học thuật rẻ nhất thị trường.',
    useCases: [
      'Tóm tắt các điểm chính và rủi ro trong một bản hợp đồng dịch vụ Marketing mẫu.',
      'Rút trích bảng thông số từ tài liệu sản phẩm phức tạp.'
    ],
    pros: [
      'Tô màu đoạn trích gốc rất trực quan để kiểm tra độ chính xác.',
      'Gói sinh viên cực rẻ.'
    ],
    limitations: 'Gói miễn phí giới hạn tổng cộng 60 trang tải lên.',
    studentTip: 'Nếu chỉ cần phân tích tài liệu dưới 60 trang, gói Free của Humata chạy rất chuẩn và sạch.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 320,
    slug: 'glasp',
    name: 'Glasp',
    tagline: 'Tô sáng (Highlight) Bài viết Web & Bóc băng Tóm tắt Video YouTube miễn phí 100%',
    excerpt: 'Vừa đọc báo/blog vừa tô màu lưu lại các câu đắt giá giống bút dạ quang, kèm nút lấy toàn bộ phụ đề & tóm tắt AI cho mọi video YouTube.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% tiện ích mở rộng trình duyệt và lưu trữ ghi chú học tập.',
    level: 'Cơ bản',
    officialUrl: 'https://glasp.co/',
    tags: ['Web Highlighter', 'YouTube Summary', 'Knowledge Management', 'Note-taking'],
    whatIsIt: 'Glasp là tiện ích tô sáng trang web xã hội (Social Web Highlighter) và công cụ YouTube Summary with ChatGPT/Claude/Gemini miễn phí phổ biến hàng đầu trên Chrome.',
    bestFor: 'Sinh viên sưu tầm trích dẫn hay khi đọc bài trên mạng và tóm tắt bài giảng dài trên YouTube.',
    platforms: 'Chrome/Safari/Edge Extension, Web App',
    vietnameseSupport: 'Hoạt động tốt với cả bài viết và phụ đề video tiếng Việt.',
    studentPerk: 'Miễn phí 100%, xuất toàn bộ các câu đã Highlight trên web sang Notion, Obsidian hoặc Markdown chỉ với 1 cú bấm.',
    useCases: [
      'Bấm 1 nút bên phải video YouTube để lấy toàn bộ bản chữ (Transcript) kèm mốc thời gian và tóm tắt ý chính.',
      'Tô màu lưu lại các số liệu quan trọng khi đang đọc hàng chục trang báo mạng để không bị thất lạc nguồn.'
    ],
    pros: [
      'Nhẹ, hoàn toàn miễn phí và xuất thẳng sang Notion.',
      'Tiện ích YouTube Summary dùng tài khoản AI sẵn có của bạn nên không tốn tiền mua gói riêng.'
    ],
    limitations: 'Các đoạn highlight ở tài khoản miễn phí mặc định lưu trên hồ sơ học tập công khai.',
    studentTip: 'Cài tiện ích **"YouTube Summary with ChatGPT & Claude"** của Glasp để biến mọi video bài giảng 1 tiếng thành bản ghi chú tóm tắt chỉ trong 5 giây.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 321,
    slug: 'quizlet-ai',
    name: 'Quizlet AI (Magic Notes)',
    tagline: 'Biến slide bài giảng thành bộ Thẻ Ghi nhớ (Flashcards) & Đề thi Trắc nghiệm thử',
    excerpt: 'Tải file Word/PDF đề cương môn học lên, Quizlet tự động tạo bộ Flashcards thuật ngữ chuyên ngành và bài thi thử trắc nghiệm để ôn thi cuối kỳ.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Học các bộ Flashcards cộng đồng và tạo thẻ cơ bản miễn phí; tính năng AI nâng cao có dùng thử miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://quizlet.com/',
    tags: ['Flashcards', 'Exam Prep', 'Active Recall', 'Student Tool'],
    whatIsIt: 'Quizlet là nền tảng học tập bằng phương pháp gợi nhớ chủ động (Active Recall) và lặp lại ngắt quãng lớn nhất thế giới, tích hợp AI tạo câu hỏi ôn tập tự động từ tài liệu bài giảng.',
    bestFor: 'Sinh viên ôn thi trắc nghiệm các môn Nguyên lý Marketing, Hành vi Người tiêu dùng, Digital Marketing và Tiếng Anh chuyên ngành.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Giao diện 100% tiếng Việt và có sẵn hàng nghìn bộ học phần môn Marketing của sinh viên các trường ĐH Việt Nam.',
    studentPerk: 'Tra cứu và học miễn phí hàng triệu bộ thẻ thuật ngữ chuyên ngành Marketing song ngữ Anh - Việt.',
    useCases: [
      'Học thuộc nhanh 100 thuật ngữ Digital Marketing (CPM, CPC, CTR, CPA, ROAS, CLV, Churn Rate...) qua trò chơi ghép thẻ.',
      'Tạo đề trắc nghiệm thử từ ghi chú bài giảng của giảng viên.'
    ],
    pros: [
      'Ứng dụng điện thoại cực mượt, tranh thủ 10 phút trên xe buýt cũng ôn bài hiệu quả.',
      'Phương pháp Active Recall giúp nhớ khái niệm lâu gấp nhiều lần đọc chay.'
    ],
    limitations: 'Số lượt làm bài Test mô phỏng tự động bằng AI giới hạn ở bản miễn phí.',
    studentTip: 'Kết hợp ôn thuật ngữ trên Quizlet rồi sang cổng trắc nghiệm miễn phí của **VNEconomics** làm đề thi thử thực tế để đạt điểm A+ môn Digital Marketing.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 322,
    slug: 'wolfram-alpha',
    name: 'Wolfram|Alpha',
    tagline: 'Cỗ máy Trí tuệ Tính toán chính xác 100% cho Toán Kinh tế, Thống kê & Tài chính',
    excerpt: 'Không suy đoán xác suất như ngôn ngữ tự nhiên: Wolfram|Alpha tính toán chính xác tuyệt đối phương trình kinh tế vi mô, đạo hàm tối ưu giá và xác suất thống kê.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% tính toán kết quả và vẽ đồ thị hàm số trên web; gói Pro sinh viên mở khóa lời giải từng bước (Step-by-step).',
    level: 'Trung bình',
    officialUrl: 'https://www.wolframalpha.com/',
    tags: ['Computational AI', 'Economics Math', 'Statistics', 'Pricing Optimization'],
    whatIsIt: 'Wolfram|Alpha là cỗ máy tri thức tính toán (Computational Knowledge Engine) giải quyết trực tiếp các bài toán đại số, giải tích tối ưu lợi nhuận, độ co giãn của cầu theo giá (Price Elasticity) và phân phối thống kê bằng thuật toán biểu thức chính xác.',
    bestFor: 'Sinh viên kiểm tra kết quả bài tập Kinh tế vi mô, Định giá (Pricing), Thống kê kinh doanh và Tài chính doanh nghiệp.',
    platforms: 'Web Browser, iOS/Android, tích hợp Custom GPT trên ChatGPT',
    vietnameseSupport: 'Nhập biểu thức toán học quốc tế hoặc câu hỏi tiếng Anh ngắn gọn.',
    studentPerk: 'Tính ra đáp án chính xác và vẽ đồ thị hàm cung - cầu / điểm hòa vốn hoàn toàn miễn phí trên web.',
    useCases: [
      'Tính điểm giá tối ưu hóa doanh thu/lợi nhuận từ hàm cầu $Q(P)$ và hàm chi phí $C(Q)$.',
      'Tra cứu giá trị tới hạn phân phối chuẩn $Z$, phân phối $t$, Chi-square ($\\chi^2$) và $F$ trong thống kê.'
    ],
    pros: [
      'Độ chính xác toán học tuyệt đối 100%, không bao giờ cộng trừ nhân chia nhầm.',
      'Vẽ đồ thị hàm số 2D/3D trực quan.'
    ],
    limitations: 'Xem chi tiết từng dòng biến đổi trung gian cần gói Pro.',
    studentTip: 'Khi nhờ ChatGPT giải các bài toán Định giá hay Điểm hòa vốn (Break-even Point), hãy kiểm tra chéo lại công thức trên Wolfram|Alpha để đảm bảo con số chuẩn 100%.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 323,
    slug: 'liner-ai',
    name: 'Liner AI',
    tagline: 'Công cụ Tìm kiếm AI Học thuật chuyên sâu cho Sinh viên Đại học & Nghiên cứu sinh',
    excerpt: 'Chế độ Scholar Mode chỉ tìm kiếm và trích dẫn từ các bài báo khoa học uy tín, giúp trả lời câu hỏi tiểu luận kèm nguồn tham khảo học thuật từng câu.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cho phép tìm kiếm AI học thuật hàng ngày không tốn phí; gói Pro mở rộng các mô hình suy luận sâu.',
    level: 'Cơ bản',
    officialUrl: 'https://getliner.com/',
    tags: ['Scholar Search', 'Student AI', 'Citations', 'Essay Research'],
    whatIsIt: 'Liner AI là công cụ tìm kiếm câu trả lời AI được tối ưu hóa riêng cho môi trường đại học và nghiên cứu, cung cấp chế độ Scholar Mode kết nối hàng trăm triệu bài báo khoa học để đảm bảo mọi dòng thông tin đều có nguồn học thuật.',
    bestFor: 'Sinh viên đại học tìm tài liệu làm tiểu luận môn học nhanh và cần link bài báo thật.',
    platforms: 'Web Browser, Chrome Extension, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ đặt câu hỏi bằng tiếng Việt và truy xuất nguồn tiếng Anh + tiếng Việt.',
    studentPerk: 'Miễn phí sử dụng chế độ tìm kiếm chung và tìm kiếm học thuật cơ bản hàng ngày.',
    useCases: [
      'Hỏi khái niệm lý thuyết kèm yêu cầu liệt kê các công trình nghiên cứu nền tảng để đọc sâu.',
      'Kiểm tra nhanh các luận điểm khoa học trước khi xây dựng mô hình nghiên cứu.'
    ],
    pros: [
      'Giao diện thiết kế rất thân thiện với sinh viên, hiển thị rõ thông tin tác giả và năm xuất bản của từng nguồn.',
      'Có ứng dụng điện thoại tiện lợi.'
    ],
    limitations: 'Một số chế độ Deep Research nâng cao giới hạn lượt ở bản Free.',
    studentTip: 'Bật công tắc **"Scholar"** ngay dưới thanh tìm kiếm của Liner để lọc bỏ toàn bộ nguồn blog rác, chỉ giữ lại kết quả từ bài báo khoa học.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 433,
    slug: 'undermind-ai',
    name: 'Undermind AI',
    tagline: 'AI Agent tìm kiếm Bài báo Khoa học đệ quy chuyên sâu gấp 10 lần từ khóa truyền thống',
    excerpt: 'Công cụ khám phá tài liệu khoa học thế hệ mới (do tiến sĩ MIT & Harvard sáng lập) tự động đọc, lần theo mạng lưới trích dẫn và đánh giá hàng nghìn bài báo để không bỏ sót công trình nào.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Tặng miễn phí lượt chạy Deep Scientific Search hàng tháng khi đăng ký tài khoản (ưu tiên cộng đồng đại học `.edu` / `.edu.vn`).',
    level: 'Nâng cao',
    officialUrl: 'https://www.undermind.ai/',
    featured: true,
    tags: ['Agentic Search', 'Exhaustive Literature', 'Research Gap', 'PhD & Q1'],
    whatIsIt: 'Undermind AI là một tác nhân nghiên cứu khoa học tự hành (Agentic Scientific Search Engine). Thay vì trả kết quả tức thì bằng khớp từ khóa bề mặt như Google Scholar, Undermind dành từ 2–5 phút suy luận đa bước: đọc tóm tắt hàng trăm bài ứng viên, tự điều chỉnh truy vấn, lần ngược mạng trích dẫn và xuất ra báo cáo phân nhóm các công trình sát nhất kèm điểm khớp chính xác.',
    bestFor: 'Sinh viên làm NCKH cấp trường/bộ, học viên cao học, nghiên cứu sinh và giảng viên muốn kiểm tra chắc chắn "Đề tài hoặc hướng kết hợp biến số mới của mình đã có ai trên thế giới công bố chưa?".',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Nên mô tả chi tiết vấn đề nghiên cứu bằng tiếng Anh (có thể dài cả đoạn văn) để Agent quét kho hơn 200 triệu bài báo quốc tế.',
    studentPerk: 'Cung cấp hạn mức truy vấn sâu miễn phí hàng tháng đủ để kiểm chứng tính mới (Novelty Check) cho các đề cương nghiên cứu quan trọng.',
    useCases: [
      'Kiểm chứng tính mới của Khoảng trống nghiên cứu (Research Gap): Mô tả chính xác mối quan hệ giữa các biến (VD: Ảnh hưởng của Parasocial Interaction với AI Virtual Influencer lên Brand Trust của Gen Z) để xem đã có bài Q1 nào làm y hệt chưa.',
      'Tìm ra những bài báo cùng bản chất hiện tượng nhưng dùng thuật ngữ chuyên môn khác hẳn từ khóa bạn đang nghĩ tới.',
      'Thu thập bộ "Seed Papers" (các bài báo hạt nhân chuẩn nhất) trước khi đưa sang Litmaps hoặc ResearchRabbit mở rộng.'
    ],
    quickSteps: [
      'Đăng nhập undermind.ai và viết mô tả chi tiết câu hỏi nghiên cứu (càng cụ thể về bối cảnh, biến độc lập, biến trung gian, biến phụ thuộc càng tốt).',
      'Trả lời 1–2 câu hỏi làm rõ phạm vi của AI Agent để khóa chặt tiêu chí tìm kiếm.',
      'Đợi 2–4 phút để Agent đọc sàng lọc hàng trăm bài báo và nhận báo cáo tổng hợp phân tầng theo mức độ khớp.',
      'Xuất danh sách bài báo chuẩn (BibTeX/RIS) đưa thẳng vào Zotero.'
    ],
    samplePromptOrTask: 'Find empirical studies examining how consumer skepticism toward AI-generated green advertising (AI greenwashing perception) moderates purchase intention in emerging Asian markets, particularly using PLS-SEM or experimental designs.',
    pros: [
      'Khả năng tìm ra các bài báo "ẩn" mà tìm kiếm từ khóa Boolean thông thường bỏ sót cao vượt trội.',
      'Trình bày báo cáo tổng quan phân tích rõ bài nào khớp 100%, bài nào chỉ khớp một phần biến số.'
    ],
    limitations: 'Mỗi lượt tìm kiếm mất vài phút xử lý sâu và số lượt miễn phí hàng tháng có giới hạn nên cần chuẩn bị câu hỏi kỹ trước khi bấm chạy.',
    studentTip: 'Trước khi chốt tên đề tài Khóa luận hay NCKH với giảng viên hướng dẫn, hãy chạy 1 lượt Undermind AI — nó giúp bạn tránh thảm họa "làm được nửa chừng mới phát hiện năm ngoái đã có người công bố y hệt"!',
    alternatives: [
      { name: 'Elicit', slug: 'elicit-ai', comparison: 'Elicit mạnh về trích xuất nhanh các cột biến số từ PDF, còn Undermind mạnh hơn ở bước lùng sục vét cạn bài báo hiếm.' },
      { name: 'Ai2 Asta', slug: 'ai2-asta', comparison: 'Asta của Viện Allen hoàn toàn miễn phí 100% cho tìm kiếm lập luận đa bước.' }
    ],
    faqs: [
      {
        q: 'Tại sao không gõ từ khóa ngắn vào Undermind như trên Google Scholar?',
        a: 'Undermind hoạt động như một trợ lý nghiên cứu sinh thực thụ: bạn càng mô tả đầy đủ giả thuyết, phương pháp và bối cảnh bằng câu văn tự nhiên, Agent càng đánh giá tiêu chí loại trừ chính xác bấy nhiêu.'
      }
    ],
    verifiedAt: '2026-11-25'
  },
  {
    id: 434,
    slug: 'ai2-asta',
    name: 'Ai2 Asta',
    tagline: 'Trợ lý AI tìm kiếm & tổng hợp bằng chứng khoa học miễn phí 100% từ Viện Allen (Ai2)',
    excerpt: 'Nền tảng Agentic AI phi lợi nhuận mới nhất từ cha đẻ Semantic Scholar: tự động phân rã câu hỏi nghiên cứu, lùng sục hơn 108 triệu bài báo và viết tổng quan có trích dẫn kiểm chứng.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% phi lợi nhuận từ Viện Trí tuệ Nhân tạo Allen (Allen Institute for AI - Ai2).',
    level: 'Cơ bản',
    officialUrl: 'https://asta.allen.ai/',
    featured: true,
    tags: ['Allen AI', 'Paper Finder', 'Open Science', 'Evidence Synthesis'],
    whatIsIt: 'Ai2 Asta là hệ sinh thái tác nhân nghiên cứu khoa học mở (Open-science AI Agent) do Viện Allen (Ai2) phát triển trên nền tảng dữ liệu đồ sộ của Semantic Scholar (hơn 108 triệu tóm tắt và hàng chục triệu toàn văn khoa học). Tính năng cốt lõi *Paper Finder* của Asta biết tự chia nhỏ câu hỏi phức tạp thành nhiều nhánh tìm kiếm và tổng hợp thành báo cáo học thuật có trích dẫn từng câu.',
    bestFor: 'Mọi sinh viên đại học, học viên cao học và giảng viên cần một công cụ AI tìm kiếm & tổng hợp tài liệu khoa học chất lượng cao hoàn toàn miễn phí, không giới hạn gắt gao.',
    platforms: 'Web Browser (asta.allen.ai)',
    vietnameseSupport: 'Kho dữ liệu học thuật quốc tế tiếng Anh; nên đặt câu hỏi bằng tiếng Anh để đạt độ chính xác truy xuất cao nhất.',
    studentPerk: 'Miễn phí 100% không thu phí ẩn, minh bạch nguồn mã và dữ liệu học thuật chuẩn mực từ tổ chức nghiên cứu phi lợi nhuận uy tín hàng đầu thế giới.',
    useCases: [
      'Dùng Paper Finder tìm các công trình thực nghiệm thỏa mãn nhiều điều kiện phương pháp luận cùng lúc (VD: có thực nghiệm hiện trường Field Experiment trong ngành bán lẻ).',
      'Tạo bản tóm tắt tổng quan có cấu trúc (Structured Literature Summary) kèm trích dẫn bấm kiểm tra trực tiếp đoạn văn gốc.',
      'Khám phá các hướng tiếp cận lý thuyết khác nhau cho cùng một hiện tượng hành vi người tiêu dùng.'
    ],
    pros: [
      'Hoàn toàn miễn phí 100% nhưng sở hữu năng lực Agentic Search hiện đại không kém các nền tảng trả phí đắt đỏ.',
      'Tuyệt đối không bịa đặt tên bài báo hay DOI ảo vì truy xuất trực tiếp từ cơ sở dữ liệu Semantic Scholar.'
    ],
    limitations: 'Độ phủ mạnh nhất ở các tạp chí tiếng Anh quốc tế; chưa quét các tạp chí nội địa xuất bản thuần tiếng Việt.',
    studentTip: 'Nếu nhóm bạn không có kinh phí mua gói Pro của Elicit hay Consensus, bộ đôi miễn phí 100% **Ai2 Asta + Google NotebookLM** chính là "vũ khí tối thượng" để hoàn thành chương Cơ sở lý thuyết chuẩn Q1!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 435,
    slug: 'openalex',
    name: 'OpenAlex',
    tagline: 'Cơ sở dữ liệu Đồ thị Tri thức Khoa học Mở >250 triệu công trình miễn phí thay thế Scopus/WoS',
    excerpt: 'Kho dữ liệu học thuật mở lớn nhất hành tinh lập chỉ mục hơn 250 triệu bài báo, tác giả, trường đại học và mạng trích dẫn — nguồn dữ liệu chuẩn cho bài báo trắc lượng thư mục (Bibliometrics).',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% và Mở hoàn toàn (CC0 Open Data) bao gồm giao diện Web, xuất file phân tích hàng loạt và REST API.',
    level: 'Trung bình',
    officialUrl: 'https://openalex.org/',
    tags: ['Bibliometrics', 'Open Scholarly Graph', 'VOSviewer Data', 'Scopus Alternative'],
    whatIsIt: 'OpenAlex (đặt tên theo Thư viện cổ Alexandria, phát triển bởi tổ chức phi lợi nhuận OurResearch) là danh mục tri thức khoa học mở toàn cầu kế thừa Microsoft Academic Graph, kết nối hơn 250 triệu công trình khoa học, phân loại chủ đề tự động bằng học máy (Machine Learning Topic Classification) và cho phép tải dữ liệu trích dẫn hoàn toàn miễn phí.',
    bestFor: 'Sinh viên và giảng viên thực hiện đề tài **Trắc lượng thư mục (Bibliometric Analysis)** bằng VOSviewer hoặc gói `bibliometrix` trong R khi trường chưa cấp tài khoản xuất dữ liệu Scopus / Web of Science!',
    platforms: 'Web Browser, REST API, R (`openalexR`) & Python (`pyalex`)',
    vietnameseSupport: 'Lập chỉ mục cả hàng chục nghìn bài báo khoa học xuất bản tại các tạp chí Đại học Việt Nam có gắn mã DOI (Crossref) lẫn quốc tế.',
    studentPerk: 'Cho phép lọc và xuất miễn phí hàng nghìn bản ghi đầy đủ thông tin (Tác giả, Trường, Quốc gia, Từ khóa, Danh sách tài liệu tham khảo) để đưa thẳng vào VOSviewer hoặc Biblioshiny!',
    useCases: [
      'Truy vấn toàn bộ công trình nghiên cứu về "TikTok Shop / Livestream Commerce" giai đoạn 2019–2026 và xuất dữ liệu chạy bản đồ đồng xuất hiện từ khóa trên VOSviewer.',
      'Thống kê tốc độ tăng trưởng số lượng công bố khoa học theo năm, quốc gia dẫn đầu và tạp chí xuất bản nhiều nhất để mở đầu chương Tổng quan.',
      'Kết nối trực tiếp qua gói `openalexR` trong ngôn ngữ R để phân tích dữ liệu học thuật tự động.'
    ],
    quickSteps: [
      'Truy cập openalex.org và nhập chuỗi từ khóa nghiên cứu (hỗ trợ toán tử Boolean `AND`, `OR`, tìm trong Title & Abstract).',
      'Dùng cột bộ lọc bên trái để lọc theo Năm xuất bản, Loại bài (`Article`), Ngôn ngữ và trạng thái Open Access.',
      'Xem biểu đồ thống kê xu hướng công bố theo năm ngay trên trang hoặc bấm **Export** xuất định dạng CSV / WoS / RIS để nạp vào VOSviewer.'
    ],
    pros: [
      'Giải quyết triệt để rào cản lớn nhất của sinh viên Việt Nam khi làm bài Bibliometrics là không có tài khoản trả phí Scopus/WoS để tải metadata trích dẫn.',
      'Độ phủ rộng hơn cả Scopus đối với các khu vực đang phát triển và hội thảo mới.'
    ],
    limitations: 'Vì độ phủ rất rộng nên sinh viên cần lọc kỹ theo chất lượng nguồn tạp chí (ví dụ kết hợp lọc tạp chí uy tín hoặc đối chiếu bảng xếp hạng Scimago SJR) để loại tạp chí kém chất lượng.',
    studentTip: 'Một dạng bài NCKH rất dễ công bố quốc tế cho sinh viên năm 3–4 là bài **Bibliometric & Systematic Review**: Hãy lấy dữ liệu chuẩn từ OpenAlex → vẽ cụm chủ đề trên VOSviewer → sàng lọc đọc sâu bằng Rayyan & Elicit!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 436,
    slug: 'dimensions-ai',
    name: 'Dimensions AI',
    tagline: 'Nền tảng dữ liệu nghiên cứu tích hợp AI liên kết Bài báo, Quỹ tài trợ, Bằng sáng chế & Chính sách',
    excerpt: 'Hệ sinh thái dữ liệu khoa học của Digital Science tích hợp tóm tắt AI giúp tra cứu hơn 140 triệu công trình kèm chỉ số trích dẫn FCR và tầm ảnh hưởng thực tiễn.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Phiên bản **Dimensions Free Web App** miễn phí trọn đời cho mục đích nghiên cứu cá nhân & học tập với khả năng tìm kiếm toàn văn và xem chỉ số trích dẫn chuẩn.',
    level: 'Trung bình',
    officialUrl: 'https://www.dimensions.ai/',
    tags: ['Research Analytics', 'Citation Metrics', 'Policy & Patents', 'Digital Science'],
    whatIsIt: 'Dimensions (thuộc tập đoàn công nghệ học thuật Digital Science — cùng nhà với Overleaf, Figshare và Writefull) là cơ sở dữ liệu nghiên cứu liên kết hiện đại tích hợp tóm tắt AI cho từng bài báo, nối liền mạch từ Quỹ tài trợ nghiên cứu (Grants) → Công bố khoa học → Trích dẫn trên Bằng sáng chế (Patents) và Văn bản chính sách công.',
    bestFor: 'Sinh viên và nhà nghiên cứu muốn đánh giá tầm ảnh hưởng học thuật & thực tiễn của một chủ đề (ví dụ: AI trong Marketing, Kinh tế tuần hoàn, ESG) thông qua biểu đồ phân tích trực quan.',
    platforms: 'Web Browser (app.dimensions.ai)',
    vietnameseSupport: 'Giao diện và truy vấn học thuật tiếng Anh.',
    studentPerk: 'Đăng ký tài khoản miễn phí bằng email sinh viên `.edu.vn` để mở khóa tính năng tìm kiếm trong toàn văn (Full-text Search), tóm tắt AI 4 gạch đầu dòng và xem biểu đồ Analytical Views.',
    useCases: [
      'Sử dụng nút **Analytical Views** để tự động vẽ biểu đồ số lượng bài báo theo năm, lĩnh vực ANZSRC/FoR và top tác giả uy tín nhất trong mảng đề tài của bạn.',
      'Kiểm tra chỉ số **FCR (Field Citation Ratio)** để biết một bài báo có được trích dẫn cao gấp mấy lần mức trung bình cùng ngành hay không.',
      'Xem điểm **Altmetric Attention Score** để biết nghiên cứu nào đang được báo chí thế giới, tổ chức quốc tế (WHO, OECD, World Bank) nhắc tới nhiều nhất.'
    ],
    pros: [
      'Cho phép tìm từ khóa nằm sâu bên trong toàn văn (Full-text) của hàng chục triệu bài báo chứ không chỉ tìm ở tiêu đề/tóm tắt.',
      'Tích hợp sẵn Altmetric và FCR giúp chọn lọc bài báo chất lượng cao cực chuẩn.'
    ],
    limitations: 'Tính năng xuất file dữ liệu hàng nghìn dòng cùng lúc phục vụ phân tích ngoài yêu cầu nâng cấp hoặc xin quyền nghiên cứu học thuật (Dimensions No-Cost Access for Scientometrics).',
    studentTip: 'Khi bảo vệ đề cương khóa luận hay NCKH, chụp biểu đồ xu hướng tăng vọt số lượng nghiên cứu 5 năm gần đây từ tab **Analytical Views** của Dimensions đưa vào phần "Tính cấp thiết của đề tài" sẽ thuyết phục hội đồng ngay tức khắc!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 437,
    slug: 'inciteful-xyz',
    name: 'Inciteful',
    tagline: 'Công cụ nối cầu nối trích dẫn giữa 2 bài báo khoa học bất kỳ (Literature Connector) miễn phí 100%',
    excerpt: 'Nhập 2 bài báo từ 2 nhánh lý thuyết khác nhau, thuật toán đồ thị của Inciteful sẽ vạch ra con đường các nghiên cứu trung gian kết nối chúng lại với nhau.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100%, không quảng cáo, không bắt buộc đăng ký tài khoản.',
    level: 'Trung bình',
    officialUrl: 'https://inciteful.xyz/',
    tags: ['Literature Connector', 'Citation Network', 'Interdisciplinary', 'Theory Bridging'],
    whatIsIt: 'Inciteful là bộ công cụ phân tích mạng lưới trích dẫn học thuật chuyên sâu dựa trên dữ liệu mở (Open Citations & Semantic Scholar), nổi tiếng độc nhất với tính năng **Literature Connector** — tìm đường đi ngắn nhất liên kết hai công trình khoa học tưởng chừng rời rạc để xây dựng khung lý thuyết liên ngành.',
    bestFor: 'Sinh viên xây dựng mô hình nghiên cứu kết hợp 2 lý thuyết khác nhau (ví dụ nối Lý thuyết Hành vi có kế hoạch TPB với Lý thuyết Chấp nhận công nghệ UTAUT hoặc Tâm lý học truyền thông).',
    platforms: 'Web Browser',
    vietnameseSupport: 'Tra cứu bằng tiêu đề bài báo tiếng Anh hoặc mã DOI.',
    studentPerk: 'Miễn phí 100% toàn bộ tính năng, cho phép nhập trực tiếp file `.bib` từ Zotero của bạn lên để tìm ra "Most Important Recent Papers" mà bạn đang bỏ quên!',
    useCases: [
      'Dùng **Literature Connector**: Dán DOI của bài báo gốc về biến A và DOI bài báo gốc về biến B để tìm ngay các bài báo cầu nối đã từng biện luận mối quan hệ A → B!',
      'Tải file thư viện Zotero (`.bib`) của đề tài lên công cụ **Paper Discovery** để thuật toán xếp hạng những bài báo kinh điển cùng mạng lưới mà bạn chưa đọc.',
      'Xác định danh sách học giả đầu ngành và tạp chí trọng tâm xuất bản nhiều nhất về chủ đề đó.'
    ],
    pros: [
      'Tính năng nối cầu giữa 2 bài báo cực kỳ thông minh khi bạn đang bí lập luận biện giải cho giả thuyết H1, H2.',
      'Nhẹ, nhanh, mở hoàn toàn và hỗ trợ lọc theo từ khóa ngay bên trong mạng lưới trích dẫn.'
    ],
    limitations: 'Giao diện thiên về bảng số liệu mạng lưới học thuật hơn là hiệu ứng màu sắc bắt mắt.',
    studentTip: 'Bí quyết biện luận giả thuyết đạt điểm tối đa: Khi muốn ghép Biến X và Biến Y vào mô hình mà chưa tìm được bài đi trước nói về X → Y, hãy thả 2 bài báo gốc của X và Y vào **Literature Connector** của Inciteful để tìm cầu nối lý thuyết!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 438,
    slug: 'keenious',
    name: 'Keenious',
    tagline: 'Trợ lý AI nhúng thẳng vào Word & Google Docs tự động gợi ý bài báo trích dẫn khi bạn đang gõ',
    excerpt: 'Không cần nghĩ từ khóa tìm kiếm: Keenious đọc hiểu ngữ nghĩa đoạn văn bạn đang viết dở trong Word/Google Docs để đề xuất ngay các bài báo khoa học sát nhất.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Có bản dùng thử miễn phí và gói miễn phí tìm kiếm cơ bản; nhiều trường đại học quốc tế cấp bản quyền cho sinh viên.',
    level: 'Cơ bản',
    officialUrl: 'https://keenious.com/',
    tags: ['Word Add-in', 'Contextual Search', 'Find Citations', 'Google Docs'],
    whatIsIt: 'Keenious là công cụ khám phá tài liệu học thuật bằng AI nhúng trực tiếp vào bên phải màn hình Microsoft Word, Google Docs và trình đọc PDF. Thay vì bắt bạn nhảy qua tab trình duyệt gõ từ khóa, AI của Keenious phân tích toàn bộ đoạn lập luận bạn vừa viết (kể cả nháp tiếng Anh hoặc tải PDF mẫu) để tìm các công trình khoa học có cùng véc-tơ ngữ nghĩa.',
    bestFor: 'Sinh viên đang viết tiểu luận, đề cương hoặc khóa luận có những câu nhận định cần tìm gấp nghiên cứu thực nghiệm uy tín để "chống lưng" trích dẫn.',
    platforms: 'Web App, Microsoft Word Add-in, Google Docs Add-on',
    vietnameseSupport: 'Hoạt động chuẩn xác nhất trên bản thảo tiếng Anh (hoặc dán đoạn tóm tắt tiếng Anh vào thanh tìm kiếm).',
    studentPerk: 'Cài đặt Add-in miễn phí ngay trên kho tiện ích chính thức của Microsoft Word và Google Workspace.',
    useCases: [
      'Bôi đen một đoạn nhận định vừa viết trong Word để Keenious tìm ngay các bài báo đã kiểm chứng luận điểm đó.',
      'Mở 1 bài báo PDF mẫu trên Keenious và khoanh vùng đúng mục "Theoretical Framework" để tìm thêm 10 bài báo sử dụng cùng khung lý thuyết.',
      'Lọc nhanh các bài báo mới xuất bản trong 3–5 năm gần nhất có độ uy tín trích dẫn cao.'
    ],
    pros: [
      'Giữ trọn vẹn sự tập trung (Flow state) ngay trong trình soạn thảo Word mà không bị xao nhãng bởi hàng chục tab trình duyệt.',
      'Tìm theo độ tương đồng ngữ nghĩa sâu của cả đoạn văn nên kết quả rất sát ý.'
    ],
    limitations: 'Sau giai đoạn dùng thử đầy đủ sẽ giới hạn số lượt phân tích sâu nếu không dùng gói nâng cấp.',
    studentTip: 'Tuyệt đối không tự gán bừa tên một tác giả nhớ mang máng vào cuối câu văn! Hãy bôi đen câu đó dùng Keenious hoặc Consensus tìm đúng bài báo thật, đọc lướt Abstract xác nhận rồi mới chèn vào Zotero.',
    verifiedAt: '2026-11-25'
  },
  {
    id: 439,
    slug: 'rayyan-ai',
    name: 'Rayyan AI',
    tagline: 'Nền tảng AI số 1 thế giới sàng lọc hàng nghìn bài báo cho Tổng quan Hệ thống chuẩn PRISMA',
    excerpt: 'Công cụ tiêu chuẩn vàng giúp nhóm nghiên cứu tự động loại bỏ bài trùng lặp, sàng lọc mù độc lập (Blind Screening) và dùng AI chấm điểm ưu tiên bài báo liên quan.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói **Rayyan Free** miễn phí trọn đời cho phép tạo đề tài tổng quan hệ thống, khử trùng lặp cơ bản và cộng tác nhóm sàng lọc!',
    level: 'Trung bình',
    officialUrl: 'https://www.rayyan.ai/',
    featured: true,
    tags: ['Systematic Review', 'PRISMA Screening', 'Blind Review', 'Deduplication'],
    whatIsIt: 'Rayyan là nền tảng đám mây tích hợp AI và Học máy phổ biến nhất toàn cầu (hơn 500.000 nhà nghiên cứu sử dụng) chuyên trị khâu tốn sức nhất của bài báo **Tổng quan Hệ thống (Systematic Literature Review - SLR)**: nhập hàng nghìn kết quả từ Scopus/WoS/OpenAlex, khử trùng lặp tự động và gạt chọn *Include / Maybe / Exclude* kèm chế độ che kết quả giữa 2 người chấm độc lập (*Blind On*).',
    bestFor: 'Nhóm sinh viên NCKH, học viên cao học và giảng viên thực hiện bài báo Systematic Review hoặc Meta-analysis tuân thủ nghiêm ngặt quy trình **PRISMA 2020**.',
    platforms: 'Web Browser, iOS & Android App (sàng lọc Abstract ngay trên điện thoại!)',
    vietnameseSupport: 'Nhập được cả danh mục bài báo tiếng Anh và tiếng Việt qua định dạng chuẩn `.ris`, `.bib`, `.csv`.',
    studentPerk: 'Tài khoản miễn phí cho phép mời bạn cùng nhóm vào chấm độc lập (Blind Mode) để tính hệ số đồng thuận **Cohen’s Kappa** — chi tiết phương pháp luận cực đắt giá khi viết mục Methodology!',
    useCases: [
      'Gộp 1.500 bài báo tải từ 3 nguồn (Scopus + Web of Science + OpenAlex) vào Rayyan để AI tự phát hiện và gộp các bài trùng nhau (Deduplication).',
      'Bật chế độ **Blind ON** để 2 thành viên trong nhóm NCKH tự sàng lọc Tiêu đề & Tóm tắt độc lập, sau đó mở khóa **Blind OFF** để thảo luận giải quyết các bài bất đồng ý kiến (Conflicts).',
      'Tô màu tự động từ khóa tiêu chí đưa vào (Inclusion — màu xanh lá) và tiêu chí loại trừ (Exclusion — màu đỏ) giúp đọc lướt Abstract nhanh gấp 5 lần.'
    ],
    quickSteps: [
      'Xuất danh sách bài báo tìm được từ cơ sở dữ liệu ra file `.ris` hoặc `.bib` và tải lên dự án mới trên rayyan.ai.',
      'Chạy **Detect Duplicates** để dọn sạch các bài báo trùng lặp và ghi lại con số chính xác điền vào ô đầu tiên của sơ đồ PRISMA.',
      'Thiết lập bộ từ khóa *Include* / *Exclude* và mời thành viên thứ 2 vào chấm ở chế độ **Blind ON**.',
      'Sau khi chấm khoảng 50 bài mẫu, bấm **Compute Ratings** để AI của Rayyan học tiêu chí của bạn và xếp hạng 5 sao cho những bài sát nhất lên đầu!'
    ],
    pros: [
      'Cung cấp số liệu minh bạch từng bước để vẽ sơ đồ luồng **PRISMA 2020 Flow Diagram** không lệch một con số nào.',
      'Ứng dụng di động cực mượt giúp nhóm tận dụng thời gian rảnh lướt lọc Abstract rất nhanh.'
    ],
    limitations: 'Một số tính năng tự động hóa nâng cao mới như *ResearchPilot AI Agent* yêu cầu gói trả phí dành cho nhóm chuyên nghiệp.',
    studentTip: 'Trong bài NCKH dạng Tổng quan hệ thống, chỉ cần viết câu: *"Hai thành viên nghiên cứu đã tiến hành sàng lọc độc lập mù đôi (Double-blind screening) trên nền tảng Rayyan để đảm bảo tính khách quan"* là bài của bạn đã đạt chuẩn mực tạp chí quốc tế!',
    alternatives: [
      { name: 'ASReview LAB', slug: 'asreview-lab', comparison: 'ASReview hoàn toàn mã nguồn mở miễn phí 100% chạy trực tiếp trên máy tính cá nhân với thuật toán Active Learning rất mạnh.' },
      { name: 'Covidence', slug: 'covidence', comparison: 'Covidence là chuẩn của Cochrane thiên về y sinh và đánh giá Risk of Bias trọn gói.' }
    ],
    verifiedAt: '2026-11-25'
  },
  {
    id: 440,
    slug: 'asreview-lab',
    name: 'ASReview LAB',
    tagline: 'Phần mềm AI Học chủ động (Active Learning) mã nguồn mở miễn phí 100% cho Tổng quan Hệ thống',
    excerpt: 'Phát triển bởi Đại học Utrecht (Hà Lan): thuật toán học máy liên tục học từ quyết định chọn/loại của bạn để đẩy 95% bài báo quan trọng nhất lên đầu danh sách.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% và Mã nguồn mở hoàn toàn (Apache-2.0 License) chạy cục bộ bảo mật tuyệt đối trên máy tính.',
    level: 'Nâng cao',
    officialUrl: 'https://asreview.nl/',
    tags: ['Active Learning AI', 'Open Source SLR', 'Utrecht University', 'PRISMA'],
    whatIsIt: 'ASReview LAB (Automated Systematic Review) là phần mềm nghiên cứu mã nguồn mở danh tiếng do các giáo sư thống kê & khoa học dữ liệu tại Đại học Utrecht (Hà Lan) phát triển và đã được kiểm chứng trên tạp chí *Nature Machine Intelligence*. Công cụ ứng dụng Học chủ động (Active Learning): cứ sau mỗi bài báo bạn bấm *Relevant* hay *Irrelevant*, mô hình AI cập nhật tức thì để đẩy bài đáng đọc nhất tiếp theo ra màn hình.',
    bestFor: 'Nghiên cứu sinh, giảng viên và nhóm sinh viên NCKH phải đối mặt với tập dữ liệu tìm kiếm khổng lồ (từ 2.000 đến 20.000 bài báo) cần sàng lọc khoa học, minh bạch và hoàn toàn miễn phí.',
    platforms: 'Windows, macOS, Linux (chạy trên trình duyệt qua localhost bằng Python / Docker)',
    vietnameseSupport: 'Xử lý mượt dữ liệu văn bản đa ngôn ngữ nhờ các mô hình nhúng câu đa ngữ (Multilingual Sentence Transformers).',
    studentPerk: 'Miễn phí 100% trọn đời không giới hạn số lượng dự án hay số lượng bài báo tải lên, đồng thời là phần mềm được chính giới hàn lâm quốc tế công nhận phương pháp luận!',
    useCases: [
      'Sàng lọc tập 5.000 bài báo tìm kiếm rộng chỉ bằng cách đọc khoảng 10–15% số bài đầu tiên theo thứ tự ưu tiên của AI mà vẫn thu được trên 95% tổng số bài phù hợp.',
      'Chạy chế độ mô phỏng (Simulation Mode) để vẽ đường cong hiệu suất sàng lọc đưa vào phụ lục luận văn/bài báo.',
      'Đảm bảo tính tái lập khoa học hoàn toàn (Open & Reproducible Screening Log).'
    ],
    pros: [
      'Được xuất bản và bảo chứng học thuật trên hệ thống tạp chí *Nature*, nên khi trích dẫn ASReview trong mục Methodology không một phản biện viên nào bắt bẻ tính hộp đen của AI!',
      'Dữ liệu nằm hoàn toàn trên máy tính của bạn, bảo mật tuyệt đối 100%.'
    ],
    limitations: 'Cần cài đặt nhanh qua dòng lệnh `pip install asreview` (mất khoảng 2 phút với máy có sẵn Python) thay vì đăng nhập web thông thường.',
    studentTip: 'Khi nộp bài báo sử dụng ASReview hay Rayyan, hãy tuân thủ khung báo cáo minh bạch **PRISMA 2020** (và hướng dẫn **PRISMA-trAIce**) nêu rõ mô hình phân loại nào đã dùng và quy tắc dừng sàng lọc (Stopping Rule)!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 441,
    slug: 'covidence',
    name: 'Covidence',
    tagline: 'Nền tảng quy trình Tổng quan Hệ thống & Meta-Analysis tiêu chuẩn vàng của Hiệp hội Cochrane',
    excerpt: 'Hệ thống quản lý khép kín từ Sàng lọc tóm tắt, Đọc toàn văn, Đánh giá nguy cơ sai lệch (Risk of Bias) đến Trích xuất số liệu và tự động vẽ biểu đồ PRISMA.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Miễn phí dùng thử cho 1 bài Review đầu tiên (giới hạn 500 tài liệu tải lên) hoặc miễn phí không giới hạn qua tài khoản thư viện nhiều trường Đại học.',
    level: 'Nâng cao',
    officialUrl: 'https://www.covidence.org/',
    tags: ['Cochrane Standard', 'Meta-Analysis', 'Risk of Bias', 'PRISMA Flow'],
    whatIsIt: 'Covidence là nền tảng phần mềm phi lợi nhuận được Hiệp hội **Cochrane** chọn làm công cụ tiêu chuẩn chính thức để sản xuất các bài Tổng quan Hệ thống và Phân tích Gộp (Meta-Analysis), tích hợp phân loại học máy (Machine Learning RCT Classifier) và quy trình kiểm soát chất lượng nghiêm ngặt nhất thế giới.',
    bestFor: 'Sinh viên giỏi, học viên cao học và nhóm nghiên cứu nhắm tới xuất bản bài Systematic Review hoặc Meta-Analysis trên các tạp chí Scopus Q1/Q2.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Giao diện tiếng Anh chuẩn học thuật quốc tế; hỗ trợ nhập tài liệu đa ngôn ngữ.',
    studentPerk: 'Gói Free Trial tặng trọn vẹn **1 dự án Review (tối đa 500 tài liệu tham khảo)** không giới hạn thời gian — vừa vặn cho một đề tài NCKH cấp trường quy mô gọn!',
    useCases: [
      'Quản lý chặt chẽ 4 chặng: Title/Abstract Screening → Full-text Review (ghi rõ lý do loại từng bài) → Data Extraction → Quality Assessment.',
      'Tự động sinh ra sơ đồ **PRISMA Flow Diagram** cập nhật số lượng bài ở từng nhánh loại trừ theo thời gian thực.',
      'Trích xuất cỡ mẫu $N$, độ lệch chuẩn $SD$, hệ số tương quan $r$ từ hai người đọc độc lập để đối chiếu trước khi chạy Meta-analysis.'
    ],
    pros: [
      'Quy trình chặt chẽ bậc nhất thế giới, giúp nhóm nghiên cứu không bao giờ làm thất lạc lý do loại trừ ở bước đọc toàn văn (Full-text exclusion reasons).',
      'Tự động xuất biểu đồ PRISMA chuẩn chỉnh chỉ bằng 1 nút bấm.'
    ],
    limitations: 'Nếu tập bài báo thô vượt quá 500 bài mà trường chưa mua bản quyền tổ chức, bạn nên lọc sơ bộ trên Rayyan hoặc ASReview trước.',
    studentTip: 'Một lỗi rất hay bị hội đồng hỏi xoáy trong bài Tổng quan hệ thống là: *"Ở bước đọc toàn văn nhóm em loại 32 bài, cụ thể lý do loại của từng bài là gì?"* — Covidence bắt buộc chọn lý do loại ngay lúc bấm nên giúp bạn trả lời câu hỏi này trong 1 nốt nhạc!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 442,
    slug: 'paperguide-ai',
    name: 'Paperguide',
    tagline: 'Không gian Nghiên cứu AI hợp nhất Tìm kiếm, Ma trận Trích xuất có kiểm chứng & Quản lý Trích dẫn',
    excerpt: 'Nền tảng AI-native dành cho học thuật kết hợp Deep Research, sàng lọc tổng quan tài liệu, rút trích biến số tùy chỉnh từ hàng chục PDF và soạn thảo chuẩn APA.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free hàng ngày cho phép tìm kiếm bài báo AI, chat với PDF và dùng thử bảng trích xuất Literature Review; có ưu đãi giảm giá cho sinh viên.',
    level: 'Cơ bản',
    officialUrl: 'https://paperguide.ai/',
    tags: ['All-in-One Research AI', 'Literature Matrix', 'Reference Manager', 'Deep Research'],
    whatIsIt: 'Paperguide là trợ lý nghiên cứu khoa học toàn diện thế hệ mới tích hợp cả 4 công đoạn vào một màn hình duy nhất: Tìm kiếm AI trên hơn 200 triệu bài báo → Sàng lọc & Quản lý thư viện tài liệu tham khảo → Trích xuất bảng so sánh đa cột (Data Extraction Matrix) → Hỗ trợ viết nháp có gắn trích dẫn kiểm chứng.',
    bestFor: 'Sinh viên muốn gom gọn quy trình đọc PDF, lập bảng tổng hợp nghiên cứu trước và quản lý trích dẫn vào một nền tảng hiện đại thay vì mở 4–5 công cụ rời rạc.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ đặt câu hỏi, giải thích bài báo và tóm tắt bảng kết quả sang **Tiếng Việt** mượt mà.',
    studentPerk: 'Cung cấp gói miễn phí trải nghiệm đầy đủ các phân hệ cốt lõi kèm chính sách giảm giá học thuật cho email trường đại học.',
    useCases: [
      'Tạo bảng tổng hợp 15 bài báo mẫu với các cột tự định nghĩa: *Lý thuyết nền, Bối cảnh quốc gia, Phương pháp thu thập mẫu, Các biến độc lập, Kết quả kiểm định & Hạn chế*.',
      'Bấm vào từng ô kết quả trong bảng để kiểm tra ngay đoạn văn bản được tô sáng trong file PDF gốc (Auditable Evidence).',
      'Lưu trữ và đồng bộ danh mục tài liệu tham khảo theo từng thư mục môn học.'
    ],
    pros: [
      'Giao diện cực kỳ trực quan, dễ làm quen cho sinh viên đại học mới bắt đầu tập làm nghiên cứu khoa học.',
      'Đề cao tính kiểm toán nguồn (mọi ô trích xuất đều trỏ thẳng về câu gốc trong PDF).'
    ],
    limitations: 'Gói miễn phí giới hạn dung lượng lưu trữ PDF và số lượt chạy Deep Research mỗi ngày.',
    studentTip: 'Khi lập bảng "Tổng hợp các nghiên cứu trong và ngoài nước có liên quan" cho Chương 1 Khóa luận, hãy dùng Paperguide hoặc Elicit trích xuất nháp trước, sau đó tự đọc kiểm tra lại từng ô số liệu để vừa nhanh gấp 5 lần vừa đảm bảo chính xác 100%.',
    verifiedAt: '2026-11-25'
  },
  {
    id: 443,
    slug: 'lateral-io',
    name: 'Lateral AI',
    tagline: 'Bàn làm việc AI chuyên xây dựng Ma trận Khái niệm (Concept Matrix) xuyên suốt hàng chục PDF',
    excerpt: 'Quét hàng chục bài báo PDF trong dự án để gom tất cả định nghĩa, thang đo và lập luận theo từng khái niệm (Concept) vào một bảng ma trận siêu trực quan.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói miễn phí tặng 500 trang tài liệu PDF tải lên để xây dựng bảng Concept Matrix cho đề tài cá nhân.',
    level: 'Trung bình',
    officialUrl: 'https://www.lateral.io/',
    tags: ['Concept Matrix', 'Webster & Watson', 'Literature Synthesis', 'PDF Snippet Table'],
    whatIsIt: 'Lateral AI là ứng dụng đọc và tổng hợp tài liệu khoa học được thiết kế đúng theo phương pháp luận **Concept-centric Literature Review** kinh điển của *Webster & Watson (2002)* (viết tổng quan theo từng Khái niệm thay vì liệt kê rời rạc từng tác giả A nói gì, tác giả B nói gì). Các bài báo nằm ở hàng dọc, các khái niệm/biến số nằm ở cột ngang, và AI tự động tìm đoạn trích phù hợp điền vào từng ô giao nhau.',
    bestFor: 'Sinh viên viết Chương Cơ sở lý thuyết và Tổng quan tài liệu muốn nâng tầm bài viết từ mức "liệt kê tóm tắt từng bài" lên mức "tổng hợp đối chiếu theo khái niệm" chuẩn tạp chí Q1!',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Đọc hiểu tốt PDF tiếng Anh và hỗ trợ tìm kiếm ngữ nghĩa chính xác.',
    studentPerk: 'Miễn phí 500 trang PDF (tương đương khoảng 25–30 bài báo khoa học 15–20 trang) — vừa khít quy mô tài liệu cốt lõi của một Khóa luận tốt nghiệp đại học!',
    useCases: [
      'Lập bảng so sánh cách 15 tác giả khác nhau từ năm 2015–2026 định nghĩa khái niệm "Brand Authenticity" (Tính chân thực thương hiệu) để rút ra định nghĩa kế thừa cho bài của mình.',
      'Tổng hợp nhanh toàn bộ các mục hỏi (Measurement Items) của từng biến quan sát từ nhiều bài báo gốc vào chung 1 cột.',
      'Xuất toàn bộ bảng trích đoạn ra Word hoặc CSV kèm đầy đủ số trang trích dẫn.'
    ],
    pros: [
      'Rèn luyện trực tiếp tư duy viết tổng quan lấy khái niệm làm trung tâm (Concept-centric) thay vì lối viết liệt kê nhàm chán (Author-centric).',
      'Giao diện cắt-dán đoạn trích từ PDF vào ô bảng nhanh và sạch bậc nhất.'
    ],
    limitations: 'Vượt quá 500 trang PDF miễn phí cần xóa bớt dự án cũ hoặc nâng cấp gói trả phí.',
    studentTip: 'Mẹo vàng ăn điểm Hội đồng chấm Khóa luận: Đừng viết *"Năm 2020 Nguyễn Văn A nghiên cứu... Năm 2022 Smith nghiên cứu..."*! Hãy lập bảng **Concept Matrix** trên Lateral AI rồi viết tổng hợp: *"Nhìn chung có hai trường phái lý giải hành vi mua ngẫu hứng trên Livestream: nhóm tác giả (A, 2020; B, 2022) nhấn mạnh kích thích thị giác, trong khi (C, 2024) tập trung vào áp lực thời gian..."*!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 444,
    slug: 'answerthis-io',
    name: 'AnswerThis',
    tagline: 'Trợ lý AI phân tích Khoảng trống Nghiên cứu (Research Gap) & Tổng quan Tài liệu kèm trích dẫn từng dòng',
    excerpt: 'Quét hơn 250 triệu nguồn học thuật để lập báo cáo Literature Review có trích dẫn từng câu (Line-by-line Citations), vạch rõ Research Gap và quản lý thư viện bài báo.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép tìm kiếm và dùng thử miễn phí giới hạn số lượt tạo tổng quan tài liệu ban đầu; có gói ưu đãi học thuật.',
    level: 'Cơ bản',
    officialUrl: 'https://answerthis.io/',
    tags: ['Research Gap Finder', 'Line-by-line Citation', 'Literature Synthesis', 'Academic AI'],
    whatIsIt: 'AnswerThis là không gian làm việc nghiên cứu ứng dụng AI tập trung giải quyết bài toán khó nhất của người mới làm khoa học: tổng hợp bức tranh nghiên cứu hiện tại từ hơn 250 triệu công trình để chỉ ra những mâu thuẫn kết quả, bối cảnh chưa được kiểm chứng (**Research Gaps**) và xuất ra đoạn tổng quan gắn trích dẫn đến từng câu văn.',
    bestFor: 'Sinh viên năm 2–4 đang loay hoay chọn đề tài NCKH / Khóa luận tốt nghiệp và cần tìm lý do thuyết phục để bảo vệ tính mới của đề tài.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Truy xuất kho bài báo tiếng Anh quốc tế với khả năng đối chiếu đoạn gốc trực tiếp.',
    studentPerk: 'Trải nghiệm miễn phí tính năng tìm bài báo liên quan và kiểm tra chéo đoạn văn được trích dẫn ngay cạnh kết quả tổng hợp.',
    useCases: [
      'Yêu cầu tổng hợp các khoảng trống nghiên cứu về mặt bối cảnh (Contextual Gap), biến điều tiết (Moderator Gap) hoặc phương pháp (Methodological Gap) trong một chủ đề Marketing cụ thể.',
      'Kiểm tra từng câu nhận định đối chiếu trực tiếp với đoạn trích trong bài báo gốc để tránh trích dẫn sai ý tác giả.',
      'Xây dựng khung dàn ý (Outline) cho phần Đặt vấn đề (Introduction) của bài báo khoa học.'
    ],
    pros: [
      'Gắn chú thích nguồn chi tiết ở cấp độ từng câu văn (Line-by-line attribution) rất tiện để kiểm tra ngược lại bài gốc.',
      'Tích hợp cả sơ đồ mạng lưới bài báo và trình biên tập văn bản học thuật trong một giao diện.'
    ],
    limitations: 'Số lượt tạo báo cáo Literature Review đầy đủ ở gói miễn phí khá hạn chế, nên ưu tiên dùng cho câu hỏi trọng tâm nhất của đề tài.',
    studentTip: 'Một **Research Gap** thuyết phục trong ngành Marketing không nên chỉ nói *"Chưa có nhiều nghiên cứu tại TP.HCM"*, mà hãy dùng AnswerThis + Scholarcy tìm xem các nghiên cứu trước đang **mâu thuẫn kết quả** ở biến nào (Inconsistent Findings) để đưa biến điều tiết mới vào giải quyết!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 445,
    slug: 'anara-unriddle',
    name: 'Anara (Unriddle AI)',
    tagline: 'Không gian Đọc sâu PDF, Bài giảng Video/Audio & Viết Nghiên cứu tự động liên kết tri thức',
    excerpt: 'Phiên bản nâng cấp mới của Unriddle AI được hàng trăm nghìn nghiên cứu sinh yêu thích: đọc hiểu đồng thời thư mục PDF, bóc băng bài giảng và tự động gợi ý liên kết nguồn khi viết.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tải tài liệu lên đọc hiểu, tạo thẻ ghi nhớ và trải nghiệm trình viết AI giới hạn lượt mỗi tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://anara.com/',
    tags: ['Unriddle AI', 'Research Workspace', 'Multi-PDF Chat', 'Knowledge Linking'],
    whatIsIt: 'Anara (tên gọi mới của **Unriddle AI**) là không gian làm việc tri thức tích hợp AI dành cho nhà nghiên cứu và sinh viên. Điểm đặc sắc của Anara là khả năng xây dựng đồ thị ngữ nghĩa trên toàn bộ thư viện PDF, bản ghi âm bài giảng và ghi chú cá nhân của bạn: khi bạn gõ một ý tưởng mới, hệ thống lập tức làm nổi bật đoạn văn tương ứng nằm ở file PDF nào trong kho để trích dẫn ngay.',
    bestFor: 'Sinh viên quản lý tài liệu ôn thi chuyên sâu, tổng hợp ghi chú từ nhiều nguồn hỗn hợp (PDF bài báo + Slide bài giảng + Video hội thảo) vào một nơi duy nhất.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: 'Đọc hiểu và hỏi đáp song ngữ Anh – Việt chuẩn xác, luôn trỏ con trỏ về đúng đoạn gốc trong tài liệu.',
    studentPerk: 'Có gói khởi đầu miễn phí và tiện ích Chrome Extension giúp lưu nhanh bài báo web/PDF thẳng vào kho nghiên cứu cá nhân.',
    useCases: [
      'Gom toàn bộ bài đọc bắt buộc (Required Readings) và slide 12 buổi học của một môn chuyên ngành vào 1 thư mục để hỏi đáp xuyên suốt.',
      'Viết bài tiểu luận trong trình soạn thảo của Anara với tính năng tự động dò tìm tài liệu đã đọc có liên quan đến câu vừa viết.',
      'Chuyển tài liệu nghiên cứu phức tạp thành bộ Flashcards ôn tập bảo vệ khóa luận.'
    ],
    pros: [
      'Giao diện tối giản, sang trọng, tốc độ mở và cuộn file PDF nặng hàng trăm trang cực kỳ mượt mà.',
      'Mỗi câu trả lời đều tô sáng chính xác đoạn chữ gốc trong PDF bên trái giúp đối chiếu trong 1 giây.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượng tài liệu tải lên và số câu lệnh AI hàng tháng.',
    studentTip: 'Nếu bạn thuộc tuýp người "tải về máy 50 file PDF bài báo nhưng lúc viết không nhớ câu hay đó nằm ở file số mấy", kho tìm kiếm ngữ nghĩa của Anara hoặc NotebookLM sẽ cứu bạn!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 446,
    slug: 'logically-afforai',
    name: 'Logically (Afforai)',
    tagline: 'Nền tảng Nghiên cứu All-in-One hợp nhất Quản lý Tài liệu Tham khảo, AI Đọc đa PDF & Viết APA',
    excerpt: 'Thương hiệu mới của Afforai kết hợp trọn vẹn 4 công cụ trong 1: Trình quản lý trích dẫn (thay thế Mendeley), Chú thích PDF, AI Research Assistant 3 chế độ và Soạn thảo Word/Cite.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp gói dùng thử miễn phí / hạn mức cơ bản và chính sách giảm giá sinh viên (Student Discount) hấp dẫn.',
    level: 'Trung bình',
    officialUrl: 'https://logically.app/',
    tags: ['Afforai', 'AI Reference Manager', 'Cite While You Write', 'Semantic Scholar Mode'],
    whatIsIt: 'Logically (trước đây nổi tiếng với tên gọi **Afforai**) là nền tảng làm việc học thuật tất-cả-trong-một kết hợp một trình quản lý tài liệu tham khảo hiện đại (nhập trực tiếp thư viện từ Zotero/Mendeley/DOI) với trợ lý AI có 3 chế độ độc lập: *File Search Mode* (chỉ trả lời từ PDF của bạn), *Semantic Scholar Mode* (tìm mới từ >200M bài báo) và *Google Search Mode*.',
    bestFor: 'Sinh viên và học viên cao học muốn nâng cấp từ Mendeley truyền thống lên một trình quản lý tài liệu tham khảo đám mây tích hợp sẵn AI đọc hiểu và chèn trích dẫn chuẩn hơn 10.000 định dạng (APA 7, Harvard, IEEE, Vancouver).',
    platforms: 'Web Browser, Microsoft Word Add-in, Chrome Extension',
    vietnameseSupport: 'Giao diện hỗ trợ đa ngôn ngữ và trả lời phân tích tài liệu bằng tiếng Việt rất mạch lạc.',
    studentPerk: 'Cho phép đồng bộ trực tiếp thư viện Zotero sẵn có của bạn sang Logically chỉ bằng vài cú nhấp chuột để khai thác sức mạnh AI trên kho bài báo cũ.',
    useCases: [
      'Gắn thẻ, phân chia thư mục bài báo, tô màu ghi chú trên PDF và hỏi AI so sánh phương pháp luận của 10 bài báo đã chọn cùng lúc.',
      'Chuyển sang chế độ *Semantic Scholar Mode* ngay trong khung chat khi cần tìm thêm bài báo mới bổ sung vào lỗ hổng lập luận.',
      'Chèn trích dẫn tự động (In-text citation) và xuất danh mục Tài liệu tham khảo chuẩn APA 7th Edition sang Microsoft Word.'
    ],
    pros: [
      'Kết hợp mượt mà quản lý trích dẫn chuẩn mực (như Zotero/Mendeley) với đọc hiểu AI (như SciSpace/NotebookLM) mà không phải tải đi tải lại file PDF.',
      'Hỗ trợ kết nối nhiều mô hình LLM hàng đầu (Claude, GPT, Gemini) ngay trong cùng một không gian nghiên cứu.'
    ],
    limitations: 'Dung lượng lưu trữ đám mây và lượt truy vấn AI nâng cao yêu cầu gói trả phí khi sử dụng cường độ lớn dài hạn.',
    studentTip: 'Luôn giữ **Zotero** (miễn phí 100%, mã nguồn mở) làm kho lưu trữ gốc trọn đời trên máy tính, và đồng bộ các thư mục đề tài đang viết dở sang Logically hoặc Litmaps để tăng tốc phân tích AI!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 447,
    slug: 'immersive-translate',
    name: 'Immersive Translate',
    tagline: 'Tiện ích AI Dịch Song ngữ Đối chiếu Bài báo Khoa học PDF giữ nguyên 100% bố cục & công thức',
    excerpt: 'Công cụ "cứu cánh" khi đọc bài báo Q1 dài 30 trang: chia đôi màn hình (trái: PDF tiếng Anh gốc, phải: bản dịch tiếng Việt giữ nguyên vẹn cột, hình vẽ, bảng số và ký hiệu toán).',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Tiện ích dịch song ngữ trang web, phụ đề YouTube và trình dịch PDF cơ bản hoàn toàn miễn phí! Có thể gắn API Key riêng (Gemini/DeepSeek/OpenAI) cực kỳ tiết kiệm hoặc dùng gói Pro.',
    level: 'Cơ bản',
    officialUrl: 'https://immersivetranslate.com/',
    featured: true,
    tags: ['Bilingual PDF Translate', 'Keep Layout & Math', 'Side-by-Side Reading', 'Browser Extension'],
    whatIsIt: 'Immersive Translate là tiện ích mở rộng dịch thuật song ngữ bằng AI phổ biến bậc nhất thế giới dành cho người đọc tài liệu học thuật nước ngoài. Khác với Google Dịch làm vỡ nát bố cục 2 cột và biến công thức toán thành ký tự lỗi khi tải file PDF lên, công nghệ nhận diện bố cục thông minh của Immersive Translate giữ nguyên 100% định dạng tạp chí gốc và đặt bản gốc – bản dịch song song nhau để sinh viên vừa đọc hiểu nhanh vừa nắm chuẩn thuật ngữ gốc tiếng Anh!',
    bestFor: 'Mọi sinh viên Việt Nam đọc bài báo quốc tế trên ScienceDirect, Emerald, Springer, Taylor & Francis, Wiley, arXiv hoặc giáo trình chuyên ngành tiếng Anh dày hàng trăm trang.',
    platforms: 'Chrome / Edge / Firefox / Safari Extension, Web PDF Translator, iOS & Android',
    vietnameseSupport: 'Dịch sang **Tiếng Việt** cực mượt, tự chọn được bộ máy dịch từ Google/Microsoft miễn phí đến Gemini, DeepSeek, Claude, ChatGPT, DeepL.',
    studentPerk: 'Miễn phí 100% tính năng dịch song ngữ từng đoạn trên mọi trang web tạp chí quốc tế, dịch phụ đề song ngữ khóa học Coursera/edX/YouTube và dịch file PDF cơ bản!',
    useCases: [
      'Đọc lướt nhanh 20 bài báo tiếng Anh Q1 ở dạng chia đôi màn hình (trái Tiếng Anh, phải Tiếng Việt) mà không sợ hiểu lầm các thuật ngữ thống kê (`Moderation` vs `Mediation`, `Discriminant Validity`).',
      'Dịch trực tiếp trang bài báo HTML trên ScienceDirect hoặc Springer hiển thị ngay dòng tiếng Việt bên dưới mỗi đoạn tiếng Anh gốc.',
      'Bật phụ đề song ngữ Anh – Việt thời gian thực khi xem bài giảng phương pháp nghiên cứu của các giáo sư nước ngoài trên YouTube.'
    ],
    quickSteps: [
      'Cài tiện ích mở rộng **Immersive Translate** miễn phí từ Chrome Web Store hoặc Edge Add-ons.',
      'Khi đang mở một bài báo khoa học trên web, bấm phím tắt `Alt + A` để hiện ngay bản dịch tiếng Việt đối chiếu ngay bên dưới từng đoạn tiếng Anh.',
      'Với file PDF tải về máy, bấm biểu tượng tiện ích → chọn **Translate Local PDF File** để đọc ở chế độ 2 màn hình song song giữ nguyên bảng biểu và công thức!'
    ],
    pros: [
      'Giúp sinh viên không bị phụ thuộc mù quáng vào bản dịch máy vì mắt luôn nhìn thấy câu tiếng Anh gốc ngay kế bên để học từ vựng học thuật.',
      'Cho phép người dùng tự điền API Key Gemini miễn phí (từ Google AI Studio) để dịch AI chất lượng cao gần như 0 đồng!'
    ],
    limitations: 'Với các file PDF scan từ sách in cũ mờ (không có lớp chữ văn bản), tính năng BabelDOC OCR nâng cao có giới hạn số trang miễn phí mỗi tháng.',
    studentTip: 'Mẹo tiết kiệm 100% chi phí cho sinh viên: Lấy một mã API Key miễn phí trên **Google AI Studio** rồi dán vào mục Custom API của Immersive Translate — bạn sẽ có trình dịch học thuật bằng mô hình Gemini cực chuẩn mà không tốn một xu nào!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 448,
    slug: 'mathpix-snip',
    name: 'Mathpix Snip',
    tagline: 'Công cụ AI OCR số 1 thế giới chụp ảnh Công thức Toán Kinh tế lượng & Bảng PDF sang LaTeX / Word / Excel',
    excerpt: 'Quét vùng chọn bất kỳ phương trình hồi quy, mô hình toán kinh tế hay bảng số liệu khóa cứng trong PDF để biến thành công thức Microsoft Word Equation, LaTeX hoặc bảng Excel chỉnh sửa được ngay.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản miễn phí tặng lượt chụp Snip hàng tháng; đăng ký bằng email giáo dục `.edu` / `.edu.vn` được ưu đãi tăng hạn mức miễn phí và giảm 50% gói Pro.',
    level: 'Trung bình',
    officialUrl: 'https://mathpix.com/',
    tags: ['Equation OCR', 'PDF Table to Excel', 'LaTeX & Word Math', 'Econometrics'],
    whatIsIt: 'Mathpix Snip là công cụ nhận diện ký tự quang học (AI Scientific OCR) chính xác nhất thế giới chuyên trị tài liệu khoa học kỹ thuật và kinh tế lượng. Chỉ với một thao tác kéo chuột chụp màn hình (kể cả ảnh chụp vở viết tay trên bảng giảng đường), AI của Mathpix chuyển đổi tức thì các phương trình tích phân, ma trận, tổng $\\sum$ và bảng kết quả phức tạp sang định dạng `.docx` (Word Equation gốc), LaTeX hoặc TSV/Excel.',
    bestFor: 'Sinh viên chép lại mô hình phương trình Kinh tế lượng, Tài chính định lượng, Thống kê toán hoặc trích xuất bảng số liệu từ báo cáo PDF khóa copy sang Excel mà không muốn gõ tay dễ sai số.',
    platforms: 'Windows, macOS, Linux Desktop App, Web App, iOS & Android',
    vietnameseSupport: 'Nhận diện tốt cả văn bản tiếng Việt đi kèm ký hiệu toán học quốc tế.',
    studentPerk: 'Sử dụng email trường đại học `.edu.vn` khi tạo tài khoản để nhận thêm lượt Snip miễn phí mỗi tháng phục vụ mùa làm khóa luận.',
    useCases: [
      'Chụp ảnh hệ phương trình hồi quy dữ liệu bảng (Panel Data Regression) từ bài báo gốc và bấm **Copy MS Word** rồi dán thẳng (`Ctrl + V`) vào file Word khóa luận thành khung Equation chuẩn đẹp!',
      'Khoanh vùng một bảng thống kê dài 20 dòng 8 cột trong báo cáo PDF không cho copy và dán thẳng sang Excel giữ nguyên hàng cột chính xác 100%.',
      'Chụp ảnh công thức giảng viên viết tay trên bảng trắng để lưu thành tài liệu số sạch đẹp.'
    ],
    pros: [
      'Tiết kiệm hàng giờ đồng hồ ngồi mò từng ký hiệu Hy Lạp ($\\alpha, \\beta, \\epsilon_{it}, \\hat{y}$) trong trình gõ công thức của Word.',
      'Độ chính xác chuyển đổi bảng số liệu và phương trình phức tạp gần như tuyệt đối.'
    ],
    limitations: 'Gói miễn phí giới hạn số lượt chụp (Snips) mỗi tháng nên chỉ dùng cho các công thức và bảng phức tạp nhất.',
    studentTip: 'Khi trình bày mục "Phương trình hồi quy nghiên cứu" trong Khóa luận tốt nghiệp, tuyệt đối KHÔNG cắt dán ảnh chụp màn hình mờ nhòe từ bài khác vào Word! Hãy dùng Mathpix Snip chuyển sang công thức **Word Equation** sắc nét đồng bộ phông chữ Times New Roman!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 449,
    slug: 'atlasti-ai',
    name: 'ATLAS.ti (AI Coding)',
    tagline: 'Phần mềm Phân tích Dữ liệu Định tính hàng đầu thế giới tích hợp AI Mã hóa Chủ đề tự động',
    excerpt: 'Tiêu chuẩn vàng trong nghiên cứu định tính (Phỏng vấn sâu In-depth Interview & Focus Group): tích hợp Intentional AI Coding giúp gợi ý mã hóa mở, phân tích cảm xúc và tóm tắt chủ đề.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Miễn phí dùng thử đầy đủ tính năng trong 5 ngày làm việc (hoặc bản Trial giới hạn quy mô dự án không giới hạn ngày); có giấy phép Student Semester License giá rất ưu đãi cho sinh viên.',
    level: 'Nâng cao',
    officialUrl: 'https://atlasti.com/',
    featured: true,
    tags: ['Qualitative Research', 'CAQDAS AI', 'Thematic Analysis', 'In-depth Interview'],
    whatIsIt: 'ATLAS.ti là một trong hai phần mềm phân tích dữ liệu định tính trên máy tính (CAQDAS) uy tín nhất giới hàn lâm toàn cầu (bên cạnh NVivo và MAXQDA), tiên phong tích hợp bộ công cụ **AI Coding & Intentional AI Coding** hợp tác cùng OpenAI để hỗ trợ nhà nghiên cứu thực hiện Phân tích chuyên đề (*Thematic Analysis* theo Braun & Clarke) và Lý thuyết đặt cơ sở (*Grounded Theory*) trên các bản ghi phỏng vấn.',
    bestFor: 'Sinh viên làm Nghiên cứu Định tính hoặc Nghiên cứu Hỗn hợp (Mixed Methods — Phỏng vấn sâu 10–15 chuyên gia/khách hàng để khám phá thang đo mới trước khi khảo sát định lượng).',
    platforms: 'Windows, macOS Desktop & ATLAS.ti Web (Trình duyệt)',
    vietnameseSupport: 'Hỗ trợ đầy đủ văn bản phỏng vấn **Tiếng Việt** Unicode và tóm tắt/gợi ý mã hóa thông minh đa ngôn ngữ.',
    studentPerk: 'Bản dùng thử miễn phí của ATLAS.ti cho phép phân tích dự án nhỏ (tối đa 10 tài liệu ngắn) hoặc 5 ngày Full tính năng — đủ để sinh viên trải nghiệm quy trình mã hóa định tính chuẩn quốc tế và xuất sơ đồ mạng lưới Code Network!',
    useCases: [
      'Nạp 10 file Word bản gỡ băng phỏng vấn sâu (Transcript) của người tiêu dùng Việt Nam vào ATLAS.ti để thực hiện mã hóa mở (*Open Coding*) và gom nhóm thành các chủ đề lớn (*Axial Themes*).',
      'Sử dụng **Intentional AI Coding**: Nhập mục tiêu nghiên cứu cụ thể để AI đề xuất các nhãn mã (Codes) gắn vào từng câu trả lời đắt giá của đáp viên, sau đó người nghiên cứu duyệt/chỉnh sửa lại.',
      'Xuất bảng tần suất đồng xuất hiện mã (*Code Co-occurrence Table*) và sơ đồ mạng khái niệm trực quan đưa vào Chương Kết quả nghiên cứu định tính.'
    ],
    quickSteps: [
      'Chuẩn bị sạch các file Word (`.docx`) bản gỡ băng phỏng vấn sâu (dùng Viettel AI hoặc TurboScribe để bóc băng ghi âm nhanh trước).',
      'Tạo dự án mới trên ATLAS.ti, nạp các bản phỏng vấn vào và đọc lướt kết hợp chạy **Intentional AI Coding** theo câu hỏi nghiên cứu.',
      'Rà soát thủ công từng mã AI gợi ý (gộp mã trùng, đổi tên mã chuẩn thuật ngữ chuyên ngành) để đảm bảo kiểm soát học thuật của nhà nghiên cứu.',
      'Vẽ sơ đồ **Network View** nối các trích dẫn thực tế (Quotes) với các khái niệm để chứng minh mô hình đề xuất.'
    ],
    pros: [
      'Biến phần "Nghiên cứu sơ bộ định tính" trong Khóa luận Marketing từ vài dòng mô tả chung chung thành một quy trình khoa học có bảng mã hóa và sơ đồ minh chứng cực thuyết phục.',
      'Giữ vững nguyên tắc *Human-in-the-loop*: bạn kiểm tra và làm chủ 100% hệ thống cây mã hóa (Codebook).'
    ],
    limitations: 'Hạn mức tín dụng chạy AI tự động hàng tháng có giới hạn và cần đọc kỹ chính sách ẩn danh hóa thông tin cá nhân đáp viên trước khi bật tính năng đám mây.',
    studentTip: 'Hầu hết khóa luận Marketing ở Việt Nam đều ghi câu *"Tác giả thực hiện nghiên cứu định tính thảo luận tay đôi với 10 đáp viên"* nhưng lại không có nổi một bảng tổng hợp Mã hóa (Coding Table)! Chỉ cần đưa bảng Codebook trích xuất từ ATLAS.ti hoặc MAXQDA vào bài, hội đồng chấm thi sẽ đánh giá cực cao tính trung thực và bài bản của bạn!',
    alternatives: [
      { name: 'MAXQDA (AI Assist)', slug: 'maxqda-ai', comparison: 'MAXQDA đặc biệt mạnh ở nghiên cứu phương pháp hỗn hợp (Mixed Methods) kết hợp cả biến định tính và thống kê định lượng.' },
      { name: 'Google NotebookLM', slug: 'notebooklm', comparison: 'NotebookLM miễn phí 100% để hỏi đáp tóm tắt nhanh phỏng vấn, nhưng không có hệ thống quản lý cây mã hóa CAQDAS chuyên nghiệp như ATLAS.ti.' }
    ],
    verifiedAt: '2026-11-25'
  },
  {
    id: 450,
    slug: 'maxqda-ai',
    name: 'MAXQDA (AI Assist)',
    tagline: 'Phần mềm Nghiên cứu Định tính & Phương pháp Hỗn hợp (Mixed Methods) tích hợp AI Assist',
    excerpt: 'Nền tảng phân tích định tính danh tiếng của Đức tích hợp trợ lý AI Assist miễn phí sẵn trong gói giúp tự động tóm tắt các đoạn mã hóa, gợi ý mã con (Subcodes) và chat với phỏng vấn.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Tặng **14 ngày dùng thử miễn phí 100% đầy đủ tính năng** (bao gồm cả AI Assist miễn phí cơ bản); có gói bản quyền Sinh viên 6 tháng giá rất mềm.',
    level: 'Nâng cao',
    officialUrl: 'https://www.maxqda.com/',
    tags: ['Mixed Methods', 'Qualitative Analysis', 'MAXQDA AI Assist', 'Focus Group & Social Data'],
    whatIsIt: 'MAXQDA (phát triển bởi VERBI Software tại Đức từ năm 1989) là phần mềm phân tích dữ liệu định tính và phương pháp hỗn hợp (*Qualitative & Mixed Methods Data Analysis*) hàng đầu thế giới. Phân hệ **MAXQDA AI Assist** tích hợp trực tiếp giúp tự động tóm tắt hàng chục đoạn trích dẫn đã gán cùng một mã, gợi ý chia nhỏ thành các mã con (*Subcodes*) và diễn giải lại lời nói tự nhiên của đáp viên thành câu tóm tắt học thuật (*AI Paraphrase*).',
    bestFor: 'Sinh viên, học viên cao học và giảng viên làm nghiên cứu kết hợp Định tính + Định lượng (Mixed Methods), phân tích nội dung bình luận mạng xã hội (Netnography), bài báo chí hoặc Focus Group.',
    platforms: 'Windows, macOS (giao diện đồng nhất 100% trên cả hai hệ điều hành)',
    vietnameseSupport: 'Hỗ trợ trọn vẹn dữ liệu văn bản tiếng Việt và yêu cầu AI Assist tóm tắt kết quả bằng **Tiếng Việt**.',
    studentPerk: '14 ngày dùng thử miễn phí không khóa bất kỳ tính năng xuất biểu đồ nào + kho sách điện tử hướng dẫn phân tích định tính miễn phí cực hay từ MAXQDA Press!',
    useCases: [
      'Phân tích **Netnography**: Nhập hàng nghìn bình luận người dùng từ YouTube, bài đăng mạng xã hội hoặc câu trả lời mở từ khảo sát Excel vào để phân nhóm thái độ khách hàng.',
      'Sau khi gắn nhãn 30 câu nói của khách hàng vào mục "Rào cản giá cả", bấm **AI Summarize Coded Segments** để AI đúc kết bản chất tâm lý đằng sau rào cản đó.',
      'Xuất các biểu đồ đặc trưng cực đẹp của MAXQDA như *Code Matrix Browser*, *MAXMaps* và *Word Cloud loại trừ hư từ*.'
    ],
    pros: [
      'Giao diện chia 4 cửa sổ kinh điển cực kỳ khoa học, trực quan và ít lỗi vặt hơn nhiều phần mềm định tính cũ.',
      'Rất mạnh khi kết hợp biến nhân khẩu học định lượng (Giới tính, Thu nhập, Thế hệ Gen Z vs Gen Y) giao chéo với các chủ đề định tính.'
    ],
    limitations: 'Sau 14 ngày dùng thử miễn phí cần mua giấy phép sinh viên nếu muốn tiếp tục chỉnh sửa dự án.',
    studentTip: 'Mẹo tối ưu 14 ngày dùng thử miễn phí hợp pháp của MAXQDA: Hãy thu thập và gỡ băng xong toàn bộ 10–15 cuộc phỏng vấn sâu ra file Word sạch sẽ trước, sau đó mới tải và kích hoạt 14 ngày Trial để tập trung mã hóa và xuất trọn bộ biểu đồ trong 1 tuần!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 451,
    slug: 'dovetail-ai',
    name: 'Dovetail AI',
    tagline: 'Nền tảng AI Phân tích Phỏng vấn Người dùng, Tự động Bóc băng & Gom cụm Consumer Insight',
    excerpt: 'Kho lưu trữ nghiên cứu khách hàng (Customer Research Repository) hiện đại: tải video phỏng vấn lên để AI tự tạo phụ đề, gom nhóm chủ đề và cắt Video Highlight Reel.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Có gói **Free trọn đời** hỗ trợ lưu trữ dự án nghiên cứu cá nhân, chú thích tài liệu và trải nghiệm tính năng AI tóm tắt/bóc băng cơ bản.',
    level: 'Cơ bản',
    officialUrl: 'https://dovetail.com/',
    tags: ['UX & Consumer Research', 'Interview Highlights', 'Theme Clustering', 'Customer Insights'],
    whatIsIt: 'Dovetail là nền tảng đám mây quản lý và phân tích dữ liệu nghiên cứu khách hàng (Customer Insights Hub) được các đội ngũ Product Marketing, UX Research và Brand Strategy toàn cầu ưa chuộng. Khác với giao diện học thuật truyền thống của ATLAS.ti, Dovetail hoạt động mượt mà như Notion kết hợp trình biên tập video: tô sáng câu chữ trong bản ghi chữ (Transcript) tới đâu là tự động cắt đúng đoạn video khách hàng nói câu đó thành clip dẫn chứng!',
    bestFor: 'Sinh viên thi giải Case Study Marketing, làm đồ án Phát triển sản phẩm mới hoặc môn Hành vi Người tiêu dùng muốn trình chiếu clip dẫn chứng phỏng vấn khách hàng thật ngay trên slide thuyết trình.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ nhận diện giọng nói bóc băng (Transcription) **Tiếng Việt** và gắn thẻ phân loại bằng tiếng Việt.',
    studentPerk: 'Gói Free cho phép nhóm sinh viên tải lên các cuộc gọi phỏng vấn người tiêu dùng, tô màu gắn Tag Insight và gom nhóm trên bảng Canvas trực quan.',
    useCases: [
      'Quay/ghi âm 8 cuộc phỏng vấn trải nghiệm người dùng mở hộp sản phẩm (Unboxing / Usability Test), tải lên Dovetail để tự động chuyển giọng nói thành chữ kèm dấu thời gian.',
      'Tô màu các câu phàn nàn đắt giá của khách hàng để Dovetail tự ghép thành 1 đoạn video tổng hợp dài 45 giây (**Insight Reel**) chiếu mở màn buổi Pitching!',
      'Dùng bảng phân cụm AI (Magic Cluster) nhóm các thẻ ghi chú rời rạc thành những nhóm Nỗi đau khách hàng (Pain Points) rõ nét.'
    ],
    pros: [
      'Cực kỳ trực quan, cộng tác nhóm theo thời gian thực dễ như làm việc trên Figma hay Notion.',
      'Tính năng biến đoạn chữ tô sáng thành Video Clip dẫn chứng tạo sức nặng cảm xúc rất lớn khi thuyết trình trước Ban giám khảo.'
    ],
    limitations: 'Số phút bóc băng video tự động miễn phí mỗi tháng ở gói Free có giới hạn.',
    studentTip: 'Trong các cuộc thi lớn như NielsenIQ Case Competition hay L’Oréal Brandstorm, thay vì chỉ chiếu chữ *"Khảo sát cho thấy Gen Z thích tiện lợi"*, việc bật 20 giây **Highlight Reel** trích từ Dovetail quay cảnh 3 khách hàng thật chia sẻ trải nghiệm sẽ khiến cả hội trường bùng nổ!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 452,
    slug: 'rtutor-ai',
    name: 'RTutor.ai',
    tagline: 'Trợ lý AI Học thuật dịch câu lệnh tiếng Việt/Anh sang mã R & Python chạy Thống kê chuẩn Tái lập',
    excerpt: 'Phát triển bởi Giáo sư Tiến sĩ Steven Ge (Đại học bang South Dakota): tải file dữ liệu khảo sát lên và gõ yêu cầu tự nhiên để AI tự sinh code R/Python, chạy kiểm định và xuất báo cáo Word/HTML.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trực tuyến trên rtutor.ai phục vụ cộng đồng giáo dục & nghiên cứu (hoặc cài gói mã nguồn mở chạy cục bộ bằng API riêng).',
    level: 'Trung bình',
    officialUrl: 'https://rtutor.ai/',
    tags: ['R Programming AI', 'Reproducible Statistics', 'ggplot2 Charts', 'Open Source Academic'],
    whatIsIt: 'RTutor.ai là ứng dụng AI phân tích thống kê ra đời từ môi trường đại học Mỹ (phát triển bởi phòng thí nghiệm của GS. Steven Ge), chuyên chuyển đổi yêu cầu ngôn ngữ tự nhiên thành mã lệnh **R** (hoặc **Python**) chuẩn mực, thực thi trực tiếp trên máy chủ đám mây và xuất toàn bộ Kết quả kiểm định + Biểu đồ `ggplot2` độ phân giải cao + File R Markdown (`.Rmd` / HTML) để tái lập nghiên cứu 100%.',
    bestFor: 'Sinh viên Kinh tế, Marketing, Tài chính muốn chạy kiểm định thống kê nâng cao (ANOVA, Hồi quy bội, Logistic Regression, kiểm định phi tham số, EFA/CFA trong R) và vẽ biểu đồ khoa học tuyệt đẹp bằng `ggplot2` mà chưa rành cú pháp code R!',
    platforms: 'Web Browser (rtutor.ai), gói R mở trên GitHub',
    vietnameseSupport: 'Hiểu rất tốt yêu cầu phân tích viết bằng **Tiếng Việt** (ví dụ: *"Hãy chạy hồi quy tuyến tính dự báo Ý định mua theo Thái độ và Chuẩn chủ quan, kiểm tra đa cộng tuyến VIF"*).',
    studentPerk: 'Miễn phí 100% ngay trên trình duyệt mà không cần đăng ký thẻ tín dụng, kèm sẵn kho bộ dữ liệu mẫu để thực hành thống kê!',
    useCases: [
      'Tải file CSV/Excel khảo sát khóa luận lên và yêu cầu tính Cronbach’s Alpha, ma trận tương quan Pearson và hồi quy đa biến kèm kiểm định khuyết tật mô hình (VIF, phương sai sai số thay đổi).',
      'Vẽ các biểu đồ chuẩn tạp chí Q1 bằng thư viện `ggplot2` của R (Violin Plot, Raincloud Plot, Interaction Plot cho biến điều tiết!).',
      'Tải toàn bộ file mã nguồn R Markdown về máy để nộp kèm phụ lục minh chứng tính trung thực số liệu.'
    ],
    quickSteps: [
      'Đặt tên cột biến trong file Excel/CSV ngắn gọn không dấu (VD: `Age`, `Gender`, `Trust`, `Satisfaction`, `Loyalty`) rồi tải lên rtutor.ai.',
      'Gõ yêu cầu kiểm định hoặc vẽ biểu đồ cụ thể bằng tiếng Việt hoặc tiếng Anh vào khung chat.',
      'Xem ngay bảng kết quả thống kê, biểu đồ hình ảnh ở tab kết quả và bấm tải báo cáo HTML/Word hoặc copy đoạn code R chạy lại trên RStudio của bạn.'
    ],
    pros: [
      'Khắc phục hoàn toàn nhược điểm "tính toán sai số" của LLM vì mọi con số đều do trình biên dịch thống kê **R thật** tính ra.',
      'Vẽ biểu đồ hiệu ứng điều tiết (*Moderation Interaction Plot* hai đường cắt nhau) bằng R đẹp hơn gấp nhiều lần biểu đồ mặc định trong Excel hay SPSS!'
    ],
    limitations: 'Vì là dự án học thuật miễn phí dùng chung máy chủ nên mỗi phiên làm việc có giới hạn thời gian chờ và dung lượng file tải lên dưới 50MB.',
    studentTip: 'Khi bài NCKH của bạn có **Biến điều tiết (Moderator)** có ý nghĩa thống kê, hãy nhờ RTutor.ai vẽ biểu đồ **Simple Slopes / Interaction Plot (±1 SD)** bằng gói `interactions` trong R để đưa vào bài — đó là dấu ấn chuẩn bài báo quốc tế Q1!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 453,
    slug: 'formulabot',
    name: 'Formula Bot',
    tagline: 'Chuyên gia AI xử lý Bảng tính Khảo sát (Excel / Google Sheets), Sinh công thức & Phân loại Câu hỏi mở',
    excerpt: 'Biến mô tả tiếng Việt thành công thức Excel/Google Sheets phức tạp, làm sạch dữ liệu khảo sát bẩn và tự động phân tích cảm xúc hàng trăm câu trả lời tự luận.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free hàng tháng hỗ trợ tạo công thức Excel/SQL/VBA miễn phí và dùng thử tính năng phân tích bảng dữ liệu.',
    level: 'Cơ bản',
    officialUrl: 'https://formulabot.com/',
    tags: ['Excel & Sheets AI', 'Survey Data Cleaning', 'Sentiment Coding', 'Formula Generator'],
    whatIsIt: 'Formula Bot (trước đây là Excel Formula Bot) là nền tảng AI chuyên biệt cho xử lý bảng tính và phân tích dữ liệu kinh doanh/khảo sát, tích hợp tiện ích Add-on ngay trong Microsoft Excel và Google Sheets để viết công thức phức tạp (`INDEX/MATCH`, `XLOOKUP`, `QUERY`, `ARRAYFORMULA`), giải thích công thức lỗi và phân loại văn bản hàng loạt.',
    bestFor: 'Sinh viên xử lý bảng dữ liệu khảo sát thô xuất ra từ Google Forms / Tally (mã hóa lại thang đo Likert chữ sang số 1–5, lọc phiếu trả lời ẩu tất cả cùng 1 đáp án Straight-lining) trước khi đưa vào SPSS / SmartPLS.',
    platforms: 'Web Browser, Excel Add-in, Google Sheets Extension',
    vietnameseSupport: 'Hiểu mô tả bài toán bằng tiếng Việt và tạo công thức khớp đúng dấu phân cách (`,` hoặc `;`) theo cài đặt máy tính của bạn.',
    studentPerk: 'Miễn phí hàng tháng các lượt sinh và giải thích công thức Excel, Google Sheets, Apps Script và SQL.',
    useCases: [
      'Viết nhanh công thức kiểm tra độ lệch chuẩn theo từng dòng (`=STDEV.P(...)`) để phát hiện và loại bỏ các phiếu khảo sát đánh lụi 1 cột dọc (ví dụ đánh toàn số 5 từ đầu đến cuối!).',
      'Tự động quy đổi cột câu trả lời chữ (*"Hoàn toàn đồng ý" → 5, ..., "Hoàn toàn không đồng ý" → 1*) và đảo ngược điểm các biến quan sát ngược (*Reverse-coded items*).',
      'Phân loại tự động 300 câu trả lời mở dạng chữ của khách hàng thành các nhóm chủ đề Tích cực / Trung lập / Tiêu cực ngay trên trang tính.'
    ],
    pros: [
      'Giải quyết tức thì khâu tiền xử lý và làm sạch dữ liệu (Data Cleaning) vốn hay làm sinh viên lúng túng nhất trước khi chạy SPSS/SmartPLS.',
      'Giải thích cặn kẽ từng hàm lồng nhau để bạn hiểu bản chất công thức.'
    ],
    limitations: 'Phân tích tập dữ liệu lớn trực tiếp trên đám mây giới hạn lượt tải lên ở tài khoản miễn phí.',
    studentTip: 'Mẹo làm sạch dữ liệu khảo sát chuyên nghiệp: Dùng hàm `=STDEV.P(B2:Z2)` trên Excel (nhờ Formula Bot viết đúng vùng cột biến Likert của bạn) — bất kỳ dòng đáp viên nào có `STDEV = 0` tức là người đó tích 1 đáp án y hệt cho mọi câu hỏi, cần loại bỏ ngay để tăng độ tin cậy Cronbach’s Alpha!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 454,
    slug: 'writefull',
    name: 'Writefull',
    tagline: 'Trợ lý AI Ngôn ngữ Khoa học thuộc Digital Science tích hợp chính thức vào Overleaf & Microsoft Word',
    excerpt: 'Được huấn luyện độc quyền trên hàng triệu bài báo khoa học Q1/Q2: cung cấp kho mẫu câu học thuật (Academizer), kiểm tra tần suất cụm từ thực tế và tự tạo Abstract / Title chuẩn.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp các tiện ích AI học thuật miễn phí tuyệt vời trên web (Title Generator, Abstract Generator, Academizer, Paraphraser giới hạn ngày) và tích hợp sẵn trên Overleaf!',
    level: 'Trung bình',
    officialUrl: 'https://www.writefull.com/',
    featured: true,
    tags: ['Scientific English', 'Overleaf & Word', 'Academizer', 'Abstract Generator'],
    whatIsIt: 'Writefull (thành viên tập đoàn học thuật Digital Science) là bộ công cụ AI hỗ trợ viết bài báo khoa học bằng tiếng Anh uy tín hàng đầu tại các trường đại học châu Âu và Mỹ, được các nhà xuất bản lớn như **Cambridge University Press, Springer Nature, ACS, Hindawi** tin dùng. Khác với công cụ sửa ngữ pháp phổ thông, Writefull đối chiếu trực tiếp câu văn của bạn với kho ngữ liệu hàng triệu bài báo đã qua bình duyệt.',
    bestFor: 'Sinh viên chương trình Chất lượng cao / Tiên tiến viết khóa luận bằng tiếng Anh và các tác giả chuẩn bị nộp bản thảo bài báo quốc tế trên Word hoặc Overleaf (LaTeX).',
    platforms: 'Microsoft Word Add-in, Overleaf Extension, Web Widgets',
    vietnameseSupport: 'Tập trung tối ưu hóa bản thảo tiếng Anh học thuật (có thể nhập câu tiếng Anh mộc mạc kiểu Việt dịch sang để **Academizer** nâng cấp lên văn phong Q1).',
    studentPerk: 'Bộ **Writefull Free Web Widgets** (gồm *Academizer*, *Title Generator*, *Abstract Generator* và *Sentence Palette*) mở miễn phí trực tiếp trên web cho sinh viên dùng nhanh mỗi ngày!',
    useCases: [
      'Dùng **Academizer**: Biến câu viết ngây ngô kiểu văn nói (*"This paper will look at why young people buy things on TikTok"*) thành câu chuẩn mực tạp chí (*"This study investigates the determinants of impulse buying behavior among young consumers on TikTok"*).',
      'Dùng **Sentence Palette**: Kho ngân hàng mẫu câu nối học thuật chuẩn theo từng phần của bài báo IMRaD (*Introduction, Literature Review, Methodology, Results, Discussion*).',
      'Dán toàn bộ nội dung bài nghiên cứu để **Abstract Generator** và **Title Generator** đề xuất tiêu đề bài báo hấp dẫn, chuẩn học thuật.'
    ],
    pros: [
      'Văn phong đầu ra nghiêm cẩn, khách quan, đúng chuẩn Academic Register chứ không bị hoa mỹ sáo rỗng kiểu quảng cáo.',
      'Cho phép so sánh tần suất xuất hiện của 2 cách dùng giới từ/động từ trong kho bài báo khoa học thật.'
    ],
    limitations: 'Bản miễn phí giới hạn quota kiểm tra toàn bộ tài liệu dài hàng chục trang trong một lần quét.',
    studentTip: 'Hãy ghim ngay bộ đôi **Sentence Palette** của Writefull và **Manchester Academic Phrasebank** lên thanh dấu trang trình duyệt khi bắt tay viết khóa luận tiếng Anh — văn phong của bạn sẽ lột xác hoàn toàn!',
    alternatives: [
      { name: 'Paperpal', slug: 'paperpal', comparison: 'Paperpal có thêm trình dịch trực tiếp đoạn tiếng Việt sang tiếng Anh học thuật và kiểm tra Submission Readiness.' },
      { name: 'Ludwig.guru', slug: 'ludwig-guru', comparison: 'Ludwig giúp tra cứu trực tiếp các câu mẫu thật đã xuất hiện trên các tạp chí lớn.' }
    ],
    verifiedAt: '2026-11-25'
  },
  {
    id: 455,
    slug: 'ludwig-guru',
    name: 'Ludwig.guru',
    tagline: 'Công cụ Tìm kiếm Ngôn ngữ học Đối chiếu & AI giúp viết câu Tiếng Anh chuẩn như học giả bản xứ',
    excerpt: 'Kiểm chứng xem cụm từ hoặc cấu trúc câu tiếng Anh bạn định viết đã từng xuất hiện trên Nature, Science, Elsevier, The New York Times hay chưa.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép tra cứu câu đối chiếu miễn phí hàng ngày khi tạo tài khoản; có ưu đãi giảm giá đặc biệt cho sinh viên và nghiên cứu sinh.',
    level: 'Trung bình',
    officialUrl: 'https://ludwig.guru/',
    tags: ['Linguistic Search Engine', 'Collocation Check', 'Native Academic English', 'Sentence Examples'],
    whatIsIt: 'Ludwig.guru là công cụ tìm kiếm câu theo ngữ cảnh đầu tiên trên thế giới kết hợp cơ sở dữ liệu hàng trăm triệu câu tiếng Anh chuẩn mực (từ các tạp chí khoa học bình duyệt uy tín nhất và báo chí chất lượng cao) với trợ lý AI viết lại câu. Nó giúp người viết không phải bản xứ chấm dứt nỗi lo viết tiếng Anh "nghe kỳ kỳ kiểu dịch từng chữ từ tiếng Việt sang" (*Vietlish*).',
    bestFor: 'Sinh viên, giảng viên viết bài báo tiếng Anh phân vân cách kết hợp từ (*Collocations*), giới từ đi kèm động từ học thuật (VD: *"shed light on"* hay *"shed light into"*? *"inconsistencies in"* hay *"inconsistencies of"*?).',
    platforms: 'Web Browser, Desktop App (Windows/macOS)',
    vietnameseSupport: 'Hỗ trợ dịch câu tiếng Việt sang tiếng Anh rồi đối chiếu ngay với kho câu thật trên tạp chí quốc tế!',
    studentPerk: 'Các toán tử tra cứu thông minh (`*` tìm từ còn khuyết, `_` so sánh 2 từ, `~` tìm từ đồng nghĩa ngữ cảnh) dùng miễn phí hàng ngày cực kỳ hữu ích.',
    useCases: [
      'Gõ `has a * impact on purchase intention` để xem các tác giả Q1 thường dùng những tính từ học thuật đắt giá nào ở dấu sao (`profound`, `significant`, `detrimental`, `statistically significant`).',
      'So sánh trực tiếp tỷ lệ phần trăm giới học giả dùng `[play a crucial role in vs play a crucial role for]` bằng dữ liệu thực chứng.',
      'Kiểm tra xem một câu bạn vừa tự viết có tự nhiên và đúng chuẩn ngữ pháp học thuật xuất bản hay không.'
    ],
    pros: [
      'Dựa trên bằng chứng câu văn thật của các nhà khoa học và biên tập viên hàng đầu thế giới nên độ tin cậy là 100%.',
      'Giúp nâng cao vốn từ vựng học thuật chủ động cực nhanh sau mỗi lần tra cứu.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt truy vấn mỗi ngày nếu tra cứu liên tục hàng chục câu.',
    studentTip: 'Mỗi khi không chắc động từ học thuật này đi với giới từ hay danh từ nào tự nhiên nhất, đừng đoán mò — chỉ mất 3 giây gõ dấu `*` trên Ludwig.guru là bạn học được cách viết chuẩn Q1 ngay!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 456,
    slug: 'reciteworks',
    name: 'ReciteWorks',
    tagline: 'Công cụ Kiểm tra Chéo Trích dẫn trong bài (In-text) & Tài liệu Tham khảo chuẩn APA 7 / Harvard',
    excerpt: 'Tải file Word khóa luận hoặc bài báo lên, Recite tự động rà soát từng trích dẫn một để phát hiện nguồn thừa, nguồn thiếu, sai năm xuất bản hoặc lệch chính tả tên tác giả!',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Tặng lượt kiểm tra tài liệu hoàn chỉnh miễn phí khi đăng ký tài khoản — đủ để rà soát kỹ bản thảo khóa luận trước ngày in nộp!',
    level: 'Cơ bản',
    officialUrl: 'https://reciteworks.com/',
    featured: true,
    tags: ['APA 7 Citation Check', 'Bibliography Audit', 'Thesis Proofreading', 'Reference Matching'],
    whatIsIt: 'ReciteWorks (Recite) là công cụ kiểm định trích dẫn học thuật chuyên dụng giải quyết lỗi hình thức phổ biến số 1 khiến sinh viên bị trừ điểm oan uổng khi bảo vệ Khóa luận tốt nghiệp và NCKH: **Lệch khớp giữa trích dẫn trong thân bài và danh mục Tài liệu tham khảo cuối bài** (ví dụ: trong bài ghi *(Kotler & Keller, 2016)* nhưng cuối bài quên liệt kê, hoặc cuối bài lại ghi năm *2015*, hoặc dùng `&` và `and` lộn xộn sai chuẩn APA 7th Edition).',
    bestFor: 'MỌI sinh viên đại học, học viên cao học và nhóm làm NCKH ở bước kiểm tra cuối cùng trước khi xuất PDF đem đi in đóng bìa cứng nộp Khoa!',
    platforms: 'Web Browser (Tải lên trực tiếp file `.docx` hoặc `.pdf`)',
    vietnameseSupport: 'Kiểm tra tốt tài liệu tuân thủ chuẩn trích dẫn quốc tế **APA (6th & 7th Edition)** và **Harvard** (kể cả bài viết bằng tiếng Việt áp dụng quy tắc trích dẫn `(Tác giả, Năm)` chuẩn APA).',
    studentPerk: 'Lượt kiểm tra miễn phí ban đầu quét toàn bộ cuốn khóa luận hàng chục trang chỉ trong 10 giây và xuất danh sách lỗi từng dòng cực kỳ rõ ràng!',
    useCases: [
      'Phát hiện ngay lập tức tất cả các trích dẫn "mồ côi" (có nhắc tên tác giả trong Chương 1, 2 nhưng vắng mặt ở Danh mục Tài liệu tham khảo cuối bài).',
      'Phát hiện các tài liệu "khống" (liệt kê ở Danh mục Tài liệu tham khảo cho dài nhưng thực tế không hề được trích dẫn lần nào trong nội dung bài viết!).',
      'Bắt lỗi sai quy ước APA 7th Edition (ví dụ bài từ 3 tác giả trở lên phải viết `et al.` ngay từ lần trích dẫn đầu tiên thay vì liệt kê đủ 4–5 tên như APA 6 cũ).'
    ],
    quickSteps: [
      'Hoàn thiện bản thảo khóa luận / báo cáo NCKH trên file Microsoft Word (`.docx`) gồm cả nội dung chính và mục References / Tài liệu tham khảo.',
      'Đăng nhập reciteworks.com, tải file `.docx` lên và chọn chuẩn trích dẫn trường bạn quy định (phổ biến nhất ngành Kinh tế - Marketing là **APA 7th**).',
      'Đọc bảng đối chiếu 2 cột của Recite, sửa dứt điểm từng dòng báo màu đỏ/vàng cho đến khi đạt 100% khớp hoàn hảo!'
    ],
    pros: [
      'Làm trong 30 giây công việc mà mắt người ngồi dò tay 3 tiếng đồng hồ vẫn bỏ sót.',
      'Không lưu trữ hay công bố bản thảo của bạn, nên hoàn toàn yên tâm không lo bị tính trùng lặp đạo văn khi nộp Turnitin của trường sau đó!'
    ],
    limitations: 'Sau khi dùng hết lượt quét miễn phí tặng kèm tài khoản mới, các gói mua thêm lượt tính phí nhỏ theo tháng/năm.',
    studentTip: 'Các thầy cô ngồi Hội đồng chấm Khóa luận luôn có thói quen lật ngẫu nhiên 3 cái tên trích dẫn ở Chương 2 rồi dò xuống cuối bài xem có mặt không — hãy chạy ReciteWorks đúng 1 lần trước khi đi in để không bao giờ mất điểm hình thức đáng tiếc này!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 457,
    slug: 'thesify-ai',
    name: 'Thesify AI',
    tagline: 'Huấn luyện viên AI giả lập Hội đồng Phản biện (Pre-submission Reviewer) cho Đề cương, Luận văn & Bài báo',
    excerpt: 'Tuân thủ 100% liêm chính học thuật: Thesify không viết hộ đạo văn mà đóng vai Phản biện viên khó tính chỉ ra lỗ hổng lập luận, câu hỏi nghiên cứu mơ hồ và cấu trúc yếu trước khi nộp.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Có gói trải nghiệm miễn phí kèm tín dụng chấm phản biện nháp ban đầu; cung cấp mã ưu đãi lớn cho sinh viên đại học & sau đại học.',
    level: 'Trung bình',
    officialUrl: 'https://www.thesify.ai/',
    tags: ['Pre-submission Peer Review', 'Academic Integrity', 'Thesis Feedback', 'Argument Critique'],
    whatIsIt: 'Thesify AI là nền tảng trợ lý phản biện học thuật ra đời tại Thụy Sĩ với triết lý **Ethical AI for Academia** (AI có đạo đức cho giáo dục đại học — không sinh văn bản nộp thay sinh viên). Công cụ đóng vai một Giáo sư phản biện nghiêm khắc đọc toàn bộ bản thảo Tiểu luận, Đề cương (Research Proposal), Luận văn hoặc Bài báo của bạn để xuất báo cáo đánh giá chi tiết từng phần: *Độ sắc bén của Thesis Statement, Tính mạch lạc lập luận, Bằng chứng trích dẫn và Khả năng bảo vệ phương pháp*.',
    bestFor: 'Sinh viên muốn "stress-test" bài tiểu luận cuối kỳ, đề cương khóa luận tốt nghiệp hoặc bản thảo bài báo NCKH trước khi gửi cho Giảng viên hướng dẫn hay nộp tạp chí.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Đánh giá sâu sắc nhất với bản thảo tiếng Anh (cũng có thể tải bản tóm tắt cấu trúc để kiểm tra logic học thuật).',
    studentPerk: 'Tặng Credits miễn phí khi đăng ký bằng email sinh viên để chạy báo cáo phản biện toàn diện đầu tiên kèm tính năng gợi ý tạp chí phù hợp.',
    useCases: [
      'Nạp bản nháp Tiểu luận / Khóa luận kèm tiêu chí chấm điểm của môn học (Assignment Rubric) để Thesify chỉ ra mục nào bạn đang viết lan man hoặc thiếu dẫn chứng.',
      'Nhận danh sách các điểm yếu phương pháp luận mà Phản biện viên tạp chí (Reviewer #2!) nhiều khả năng sẽ bắt bẻ để chủ động viết đoạn rào đón trước.',
      'Kiểm tra sự ăn khớp logic giữa Câu hỏi nghiên cứu ở Chương 1 và phần Thảo luận kết quả ở Chương cuối.'
    ],
    pros: [
      'An toàn tuyệt đối về mặt đạo đức học thuật và quy định chống AI viết hộ của các trường đại học quốc tế.',
      'Lời nhận xét rất cụ thể, mang tính xây dựng cao theo đúng tiêu chuẩn hàn lâm.'
    ],
    limitations: 'Sau khi hết số Credits tặng ban đầu cần nâng cấp gói học kỳ nếu muốn chấm phản biện nhiều bản thảo liên tục.',
    studentTip: 'Gửi cho Giảng viên hướng dẫn một bản nháp đã được rà soát kỹ lỗi lập luận qua Thesify + kiểm tra trích dẫn qua ReciteWorks sẽ khiến thầy cô ấn tượng mạnh về thái độ làm việc chỉn chu của bạn!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 458,
    slug: 'mind-the-graph',
    name: 'Mind the Graph',
    tagline: 'Nền tảng thiết kế Graphical Abstract (Tóm tắt Đồ họa), Poster Hội nghị Khoa học & Sơ đồ Nghiên cứu',
    excerpt: 'Kho hơn 75.000 biểu tượng khoa học chuẩn xuất bản kết hợp công cụ thiết kế kéo-thả giúp tạo Graphical Abstract nộp tạp chí Q1/Q2 Elsevier, Springer và Poster bảo vệ NCKH.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Free trọn đời (xuất ảnh có watermark nhỏ) và gói Student / Researcher giá rất phải chăng so với BioRender.',
    level: 'Cơ bản',
    officialUrl: 'https://mindthegraph.com/',
    tags: ['Graphical Abstract', 'Research Poster', 'Scientific Illustration', 'Conference Slides'],
    whatIsIt: 'Mind the Graph (thuộc hệ sinh thái Cactus Communications / Editage) là nền tảng thiết kế đồ họa khoa học chuyên dụng giúp các nhà nghiên cứu và sinh viên không biết vẽ Illustrator tự tạo ra **Graphical Abstract** (Tóm tắt bằng hình ảnh — yêu cầu bắt buộc hoặc khuyến khích mạnh của hầu hết tạp chí Q1 Elsevier/ScienceDirect hiện nay), Poster hội thảo khoa học khổ A0 và sơ đồ quy trình thực nghiệm.',
    bestFor: 'Sinh viên thi Chung kết NCKH cấp Trường / giải Euréka (cần in Poster khoa học trưng bày hội trường) và tác giả nộp bài báo quốc tế cần Graphical Abstract chuyên nghiệp.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ gõ phông chữ Tiếng Việt đầy đủ trên các mẫu Poster và sơ đồ nghiên cứu.',
    studentPerk: 'Cung cấp sẵn hàng trăm mẫu bố cục **Academic Research Poster** chuẩn hội nghị quốc tế và kích thước khung chuẩn Graphical Abstract của Elsevier, Cell Press, Springer, IEEE.',
    useCases: [
      'Thiết kế **Poster Khoa học** tóm tắt gọn gàng Đề tài NCKH (Đặt vấn đề → Mô hình → Cỡ mẫu → Kết quả chính → Hàm ý quản trị) để trưng bày tại Ngày hội Sinh viên Nghiên cứu Khoa học hoặc giải thưởng Sinh viên NCKH Euréka.',
      'Tạo **Graphical Abstract** trực quan hóa khung nghiên cứu và phát hiện cốt lõi giúp bài báo tăng mạnh lượt đọc và trích dẫn sau khi xuất bản.',
      'Vẽ sơ đồ quy trình thu thập và sàng lọc dữ liệu thực nghiệm (Experimental Procedure Diagram) sạch đẹp hơn hẳn SmartArt của Word.'
    ],
    pros: [
      'Đúng chất thẩm mỹ khoa học nghiêm túc (Academic Aesthetic), không bị lòe loẹt màu mè kiểu tờ rơi quảng cáo trên Canva.',
      'Chi phí dễ thở hơn nhiều so với BioRender và phục vụ đa ngành từ Kinh tế, Tâm lý học, Hành vi tiêu dùng đến Y sinh.'
    ],
    limitations: 'Gói miễn phí giới hạn số lượng thiết kế lưu đồng thời và có gắn dòng chữ nguồn nhỏ ở góc ảnh xuất ra.',
    studentTip: 'Trong các vòng thi Poster của giải thưởng Sinh viên NCKH (như Euréka), giám khảo chỉ đứng trước mỗi bảng Poster khoảng 3 phút — đừng nhồi chữ kín đặc từ trên xuống dưới, hãy dùng bố cục trực quan 60% Sơ đồ/Biểu đồ + 40% Từ khóa trên Mind the Graph!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 459,
    slug: 'elsevier-journal-finder',
    name: 'Elsevier Journal Finder',
    tagline: 'Công cụ AI đối chiếu Tóm tắt Bài báo (Abstract Matching) để chọn đúng Tạp chí Scopus/ISI phù hợp nhất',
    excerpt: 'Dán Tiêu đề và Abstract bản thảo vào, thuật toán NLP/AI của Elsevier lập tức xếp hạng các tạp chí khớp chủ đề kèm chỉ số CiteScore, Impact Factor, Tỷ lệ chấp nhận (%) và Thời gian phản biện!',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% chính thức từ Nhà xuất bản Khoa học lớn nhất thế giới Elsevier, không cần tạo tài khoản vẫn tra cứu được ngay.',
    level: 'Cơ bản',
    officialUrl: 'https://journalfinder.elsevier.com/',
    tags: ['AI Journal Matcher', 'Impact Factor & CiteScore', 'Acceptance Rate', 'Scopus Q1/Q2'],
    whatIsIt: 'Elsevier Journal Finder là công cụ định vị tạp chí thông minh sử dụng xử lý ngôn ngữ tự nhiên (NLP) và từ điển khái niệm chuyên ngành *Elsevier Fingerprint Engine* để so khớp ngữ nghĩa bản thảo của bạn với hàng nghìn tạp chí khoa học quốc tế uy tín (như *Journal of Business Research, Journal of Retailing and Consumer Services, Technological Forecasting and Social Change, International Journal of Information Management...*).',
    bestFor: 'Sinh viên có đề tài NCKH xuất sắc muốn nâng cấp gửi đăng tạp chí quốc tế cùng giảng viên, học viên cao học và nghiên cứu sinh đang chọn tạp chí mục tiêu (Target Journal) để định dạng bài viết.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Nhập Paper Title và Paper Abstract bằng tiếng Anh.',
    studentPerk: 'Miễn phí 100% và công khai hai chỉ số "sống còn" mà sinh viên rất khó tìm ở nơi khác: **Acceptance Rate** (Tỷ lệ bài được nhận đăng %) và **Time to 1st Decision** (Số tuần chờ kết quả phản biện vòng 1)!',
    useCases: [
      'Tìm danh sách 5–10 tạp chí Scopus Q1/Q2 có phạm vi quan tâm (Aims & Scope) khớp nhất với đề tài Marketing/Thương mại điện tử của nhóm để tránh bị từ chối ngay tại bàn biên tập (*Desk Rejection*).',
      'Lọc các tạp chí hỗ trợ hình thức **Subscription (Hybrid)** — cho phép tác giả xuất bản truyền thống **không tốn phí đăng bài (0 USD APC)**, cực kỳ quan trọng với sinh viên không có kinh phí tài trợ!',
      'So sánh thời gian phản biện trung bình (ví dụ chọn tạp chí phản hồi vòng 1 trong 4–6 tuần thay vì 20 tuần để kịp tiến độ tốt nghiệp).'
    ],
    quickSteps: [
      'Truy cập journalfinder.elsevier.com, dán Tiêu đề dự kiến (*Paper Title*), Tóm tắt khoảng 150–250 từ (*Abstract*) và chọn lĩnh vực *Business, Management and Accounting* hoặc *Economics*.',
      'Bấm **Find journals** để xem danh sách xếp hạng theo điểm khớp ngữ nghĩa (Match Score).',
      'Bật bộ lọc *Journals with no publication fee (Subscription)* nếu nhóm bạn muốn nộp đăng miễn phí 100% không mất phí Open Access APC!'
    ],
    pros: [
      'Dữ liệu chính chủ 100% từ nhà xuất bản nên loại bỏ hoàn toàn nguy cơ nộp nhầm vào các "Tạp chí săn mồi" (*Predatory Journals* lừa đảo thu tiền).',
      'Hiển thị trực quan CiteScore, Impact Factor, thời gian xét duyệt và phí xuất bản trên cùng một màn hình.'
    ],
    limitations: 'Chỉ tra cứu trong hệ thống hơn 2.900 tạp chí của Elsevier (bạn có thể dùng tương tự với *Springer Nature Journal Suggester* và *Taylor & Francis Journal Suggester* hoàn toàn miễn phí!).',
    studentTip: 'Kinh nghiệm xương máu cho sinh viên viết bài báo đầu tay: Hãy chọn **Target Journal** trên Elsevier Journal Finder TRƯỚC KHI viết chi tiết bản thảo, rồi tải 5 bài mới nhất vừa đăng năm nay trên chính tạp chí đó về đọc cấu trúc đặt vấn đề của họ!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 460,
    slug: 'vosviewer',
    name: 'VOSviewer',
    tagline: 'Phần mềm Khai phá Văn bản (NLP Text Mining) & Trực quan hóa Bản đồ Trắc lượng Thư mục số 1 thế giới',
    excerpt: 'Phát triển bởi Đại học Leiden (Hà Lan): tự động trích xuất cụm danh từ học thuật, phân cụm bằng máy học và vẽ bản đồ mạng lưới đồng xuất hiện từ khóa / đồng trích dẫn rực rỡ chuẩn Q1.',
    category: 'AI Nghiên cứu Khoa học & Học tập',
    categorySlug: 'ai-research-academic',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trọn đời cho cả bản cài đặt máy tính và bản VOSviewer Online chạy ngay trên trình duyệt web.',
    level: 'Trung bình',
    officialUrl: 'https://www.vosviewer.com/',
    featured: true,
    tags: ['Bibliometric Mapping', 'NLP Text Mining', 'Keyword Co-occurrence', 'Leiden University'],
    whatIsIt: 'VOSviewer (Visualization of Similarities — phát triển bởi Trung tâm Nghiên cứu Khoa học và Công nghệ CWTS, Đại học Leiden, Hà Lan) là phần mềm tiêu chuẩn quốc tế để thực hiện phân tích **Trắc lượng thư mục (Bibliometric Analysis)**. Phần mềm tích hợp thuật toán xử lý ngôn ngữ tự nhiên (NLP Noun Phrase Extraction) và thuật toán phân cụm tối ưu hóa mô-đun để biến hàng nghìn bản ghi từ Scopus, Web of Science, Dimensions hoặc **OpenAlex** thành các bản đồ mạng lưới tri thức đa sắc màu (*Network, Overlay & Density Visualization*).',
    bestFor: 'Sinh viên làm đề tài NCKH dạng Tổng quan Trắc lượng Thư mục (Bibliometric Review) hoặc muốn có một hình vẽ bản đồ phân cụm các trường phái nghiên cứu cực chất trong Chương Tổng quan tài liệu của Khóa luận!',
    platforms: 'Windows, macOS, Linux & VOSviewer Online (Web Browser)',
    vietnameseSupport: 'Đọc trực tiếp dữ liệu xuất ra từ OpenAlex, Scopus, Web of Science, Dimensions, Crossref và PubMed.',
    studentPerk: 'Miễn phí 100% và cho phép xuất link bản đồ tương tác trực tuyến (**VOSviewer Online**) để nhúng hoặc gửi cho hội đồng phóng to xem từng cụm từ khóa!',
    useCases: [
      'Vẽ bản đồ **Co-occurrence of Keywords** (Đồng xuất hiện từ khóa): Tự động gom hàng trăm từ khóa rời rạc thành 4–6 cụm chủ đề màu sắc khác nhau (Thematic Clusters) đại diện cho các nhánh nghiên cứu chính của ngành.',
      'Vẽ bản đồ **Overlay Visualization theo năm trung bình** (từ màu xanh tím cũ sang màu vàng chanh mới nhất) để chứng minh trực quan bằng hình ảnh rằng hướng đề tài bạn chọn đang là xu hướng nóng (*Emerging Hotspot* 2024–2026)!',
      'Vẽ mạng lưới **Co-citation** (Đồng trích dẫn) để tìm ra các trụ cột lý thuyết gốc của lĩnh vực.'
    ],
    quickSteps: [
      'Vào **OpenAlex.org** (miễn phí) hoặc Scopus tìm kiếm tập bài báo cùng chủ đề (khoảng 300–2.000 bài) và xuất file dữ liệu đầy đủ.',
      'Mở VOSviewer → chọn **Create** → **Create a map based on bibliographic data** → nạp file vừa tải về.',
      'Chọn kiểu phân tích **Co-occurrence** → **Author keywords**, đặt ngưỡng xuất hiện tối thiểu (ví dụ từ khóa xuất hiện $\\ge 5$ lần) và tạo tệp từ đồng nghĩa (*Thesaurus file*) để gộp từ số ít/số nhiều (`consumer` và `consumers`).',
      'Xuất cả 3 góc nhìn ảnh độ phân giải cao: *Network Visualization*, *Overlay Visualization* (theo năm) và *Density Visualization* đưa vào báo cáo NCKH!'
    ],
    pros: [
      'Hình ảnh bản đồ mạng lưới từ VOSviewer là một trong những biểu đồ học thuật ấn tượng và chuyên nghiệp nhất trong các bài báo Q1 ngành Kinh doanh & Quản trị.',
      'Hoàn toàn miễn phí, nhẹ và kết hợp liền mạch 100% với nguồn dữ liệu mở OpenAlex.'
    ],
    limitations: 'Bản cài đặt máy tính yêu cầu cài môi trường Java cơ bản (hoặc bạn có thể mở trực tiếp bản `app.vosviewer.com` ngay trên trình duyệt).',
    studentTip: 'Mẹo chuyên gia để bản đồ VOSviewer không bị lỗi nghiệp dư: Luôn tạo một file Excel/Text **Thesaurus** nhỏ để gộp các từ viết tắt trùng nghĩa (ví dụ gộp `"e-wom"`, `"ewom"`, `"electronic word of mouth"` về chung 1 nhãn `"eWOM"`) trước khi xuất hình nhé!',
    alternatives: [
      { name: 'OpenAlex', slug: 'openalex', comparison: 'OpenAlex là kho dữ liệu đầu vào miễn phí hoàn hảo nhất để xuất file nạp vào VOSviewer.' },
      { name: 'Litmaps', slug: 'litmaps', comparison: 'Litmaps phù hợp vẽ sơ đồ kết nối chi tiết cho nhóm nhỏ 15–30 bài báo hạt nhân, còn VOSviewer chuyên trị bức tranh vĩ mô 500–5.000 bài báo.' }
    ],
    verifiedAt: '2026-11-25'
  }
];

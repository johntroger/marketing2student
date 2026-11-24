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
  }
];

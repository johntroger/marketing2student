import { MarketingTool } from '../../types';

export const vietnamAiTools: MarketingTool[] = [
  {
    id: 421,
    slug: 'ai-hay',
    name: 'AI Hay',
    tagline: 'Nền tảng Hỏi đáp & Trợ lý AI tạo sinh thuần Việt phổ biến nhất của sinh viên Việt Nam',
    excerpt: 'Ứng dụng AI "Make in Vietnam" (Forbes Asia 100 to Watch) kết hợp tìm kiếm thời gian thực kèm trích dẫn nguồn uy tín, giải bài tập, bắt trend mạng xã hội và văn hóa Việt.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí cực kỳ hào phóng không giới hạn hỏi đáp cơ bản; đặc biệt thường xuyên tặng gói AI Hay Pro miễn phí thông qua xác thực email sinh viên (.edu.vn).',
    level: 'Cơ bản',
    officialUrl: 'https://ai-hay.vn/',
    featured: true,
    tags: ['Vietnamese AI Search', 'Student Favorite', 'Real-time Citation', 'Make in Viet Nam'],
    whatIsIt: 'AI Hay là mạng xã hội hỏi đáp kết hợp mô hình ngôn ngữ lớn (LLM) và công nghệ tìm kiếm thời gian thực do đội ngũ kỹ sư & tiến sĩ công nghệ người Việt phát triển (lọt danh sách Forbes Asia 100 to Watch). Điểm vượt trội của AI Hay so với các AI ngoại là độ am hiểu sâu sắc ngữ cảnh địa phương, pháp luật, giáo dục đại học, tin tức thời sự và cả ngôn ngữ Gen Z tại Việt Nam.',
    bestFor: 'Sinh viên Việt Nam cần tra cứu nhanh số liệu thị trường trong nước có đính kèm link báo chí gốc, tóm tắt tài liệu môn học, giải thích khái niệm kinh tế và bắt trend truyền thông nội địa.',
    platforms: 'Web Browser (ai-hay.vn), iOS & Android App',
    vietnameseSupport: '100% Tiếng Việt bản địa tự nhiên nhất.',
    studentPerk: 'AI Hay có chương trình ưu đãi đặc quyền nâng cấp tài khoản **AI Hay Pro miễn phí** dành riêng cho sinh viên các trường Đại học/Cao đẳng Việt Nam đăng ký bằng email đuôi `.edu.vn`!',
    useCases: [
      'Tra cứu nhanh tin tức kinh tế, chiến dịch Marketing vừa ra mắt tại Việt Nam tuần qua kèm đường dẫn trích nguồn báo chính thống.',
      'Chụp ảnh hoặc tải tài liệu bài tập Kinh tế lượng, Nguyên lý Marketing, Thống kê kinh doanh để nhờ AI hướng dẫn từng bước giải dễ hiểu.',
      'Giải mã nhanh nguồn gốc các trào lưu (Trend/Meme) đang thịnh hành trên mạng xã hội Việt Nam để làm Social Content bắt nhịp thời sự.'
    ],
    pros: [
      'Hiểu cực chuẩn các từ viết tắt, địa danh, thương hiệu nội địa và quy định pháp luật tại Việt Nam mà AI quốc tế hay nhầm lẫn.',
      'Mỗi câu trả lời đều đính kèm nguồn tham khảo trực quan giúp sinh viên kiểm chứng chéo ngay lập tức.',
      'Ứng dụng di động mượt, nhẹ và có cộng đồng câu hỏi mở rất thú vị.'
    ],
    limitations: 'Với các bài tổng quan tài liệu học thuật quốc tế chuyên sâu hàng chục bài báo Q1 tiếng Anh thì nên kết hợp thêm SciSpace hoặc Perplexity.',
    studentTip: 'Hãy dùng ngay email sinh viên `.edu.vn` của trường bạn để kích hoạt đặc quyền AI Hay Pro miễn phí — cực kỳ tiện lợi để tra cứu nhanh số liệu thị trường Việt Nam ngay trên điện thoại trước giờ thuyết trình!',
    quickSteps: [
      'Truy cập ai-hay.vn hoặc tải ứng dụng AI Hay trên App Store / Google Play.',
      'Đăng ký và xác thực email sinh viên (.edu.vn) trong phần Hồ sơ để nhận ưu đãi Pro.',
      'Chọn chế độ tìm kiếm chuyên sâu / học tập, nhập câu hỏi cụ thể về thị trường Việt Nam và bấm vào thẻ nguồn trích dẫn để kiểm tra số liệu gốc.'
    ],
    samplePromptOrTask: 'Hãy tổng hợp 5 chiến dịch Marketing Tết nổi bật nhất tại Việt Nam trong năm vừa qua của ngành FMCG và F&B, nêu rõ thông điệp chính (Key Message), hoạt động chủ đạo và đính kèm link bài phân tích uy tín.',
    faqs: [
      {
        q: 'AI Hay khác gì so với ChatGPT hay Perplexity khi dùng tại Việt Nam?',
        a: 'AI Hay được tinh chỉnh chuyên sâu trên nguồn dữ liệu báo chí, văn bản, học thuật và mạng xã hội tiếng Việt, nên trả lời chính xác hơn hẳn về các sự kiện địa phương, thủ tục hành chính, trường đại học và thương hiệu nội địa Việt Nam.'
      }
    ],
    alternatives: [
      { name: 'Perplexity AI', slug: 'perplexity-ai', comparison: 'Công cụ tìm kiếm AI trích dẫn nguồn mạnh mẽ cho tài liệu tiếng Anh quốc tế' },
      { name: 'Google NotebookLM', slug: 'google-notebooklm', comparison: 'Đọc hiểu và đối chiếu trực tiếp từ tập file PDF giáo trình riêng của bạn' }
    ],
    verifiedAt: '2026-11-24'
  },
  {
    id: 422,
    slug: 'vbee-aivoice',
    name: 'Vbee AIVoice',
    tagline: 'Nền tảng Chuyển văn bản thành Giọng nói AI Tiếng Việt (TTS) tự nhiên số 1 Việt Nam',
    excerpt: 'Công nghệ giọng đọc nhân tạo Make-in-Vietnam sở hữu hàng trăm giọng đọc Bắc - Trung - Nam giàu cảm xúc chuyên dùng lồng tiếng TikTok, Reels, YouTube & Podcast.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Tặng miễn phí ký tự chuyển đổi mỗi ngày để trải nghiệm và xuất file âm thanh ngắn; các gói Creator/Student theo tháng rất phải chăng.',
    level: 'Cơ bản',
    officialUrl: 'https://vbee.vn/',
    featured: true,
    tags: ['Vietnamese Text-to-Speech', 'Voiceover AI', 'TikTok & YouTube Creator', 'Regional Accents'],
    whatIsIt: 'Vbee AIVoice là nền tảng công nghệ giọng nói nhân tạo (Text-to-Speech & Voice Cloning) tiên phong và phổ biến nhất tại Việt Nam, sở hữu bộ sưu tập hơn 200+ giọng đọc chuẩn vùng miền (Hà Nội, Sài Gòn, Huế, Nghệ An...) với ngữ điệu nhấn nhá, ngắt nghỉ tự nhiên cho review phim, tin tức, quảng cáo và sách nói.',
    bestFor: 'Sinh viên làm kênh TikTok/Reels/YouTube Shorts không muốn tự thu âm giọng thật, hoặc lồng tiếng thuyết minh chuyên nghiệp cho video đồ án, TVC, E-learning.',
    platforms: 'Web Studio (vbee.vn), iOS & Android App, Tích hợp trực tiếp Canva & CapCut',
    vietnameseSupport: '100% Tiếng Việt xuất sắc (đủ giọng Bắc - Trung - Nam) & hơn 50 ngôn ngữ khác.',
    studentPerk: 'Có hạn mức ký tự dùng thử miễn phí hàng ngày và tích hợp sẵn ứng dụng Vbee ngay bên trong trình thiết kế Canva để chèn voice thẳng vào slide thuyết trình.',
    useCases: [
      'Chuyển kịch bản video ngắn 60 giây thành giọng đọc review trẻ trung miền Nam hoặc giọng đọc tin tức truyền cảm miền Bắc cho kênh TikTok dự án môn học.',
      'Tạo lời bình (Voiceover) đồng nhất cho bài thuyết trình video nhóm mà không lo tạp âm quạt gió hay micro rè.',
      'Thêm từ điển cách đọc riêng (phiên âm chuẩn tên thương hiệu tiếng Anh xen lẫn câu tiếng Việt mượt mà).'
    ],
    pros: [
      'Độ tự nhiên, cảm xúc và phát âm chuẩn phương ngữ Bắc - Trung - Nam vượt xa hầu hết các công cụ TTS quốc tế khi đọc tiếng Việt.',
      'Cho phép tinh chỉnh tốc độ đọc, độ vang, ngắt nghỉ từng dấu phẩy và chèn nhạc nền ngay trên Studio.'
    ],
    limitations: 'Gói miễn phí giới hạn số lượng ký tự mỗi ngày và một số giọng đọc VIP cao cấp cần gói trả phí.',
    studentTip: 'Mẹo nhỏ để giọng AI tiếng Việt nghe tự nhiên 99% như người thật trên Vbee: Hãy viết phiên âm tiếng Việt cho các thuật ngữ viết tắt khó đọc và dùng dấu phẩy/dấu ba chấm để điều khiển nhịp lấy hơi của giọng đọc!',
    quickSteps: [
      'Đăng nhập Vbee AIVoice Studio tại vbee.vn và dán kịch bản lời bình tiếng Việt vào khung soạn thảo.',
      'Nghe thử và chọn giọng đọc phù hợp tông thương hiệu (VD: giọng nữ Sài Gòn năng động cho mỹ phẩm, giọng nam Hà Nội trầm ấm cho tài chính/bất động sản).',
      'Chỉnh tốc độ (thường 1.05x–1.1x cho TikTok/Reels) rồi bấm Chuyển đổi và tải file MP3 chất lượng cao về ghép vào CapCut.'
    ],
    samplePromptOrTask: 'Dán đoạn Hook 15 giây vào Vbee (chọn giọng Nữ trẻ Sài Gòn, tốc độ 1.08x): "Sinh viên năm hai học Marketing mà chưa biết ba công cụ phân tích dữ liệu miễn phí này... thì lúc làm đồ án tốt nghiệp chắc chắn sẽ thức trắng đêm vì mò số liệu!"',
    alternatives: [
      { name: 'ElevenLabs', slug: 'elevenlabs-ai', comparison: 'Lựa chọn hàng đầu nếu cần lồng tiếng Anh quốc tế đa cảm xúc' },
      { name: 'Viettel AI Voice', slug: 'viettel-ai', comparison: 'Nền tảng giọng đọc tiếng Việt chất lượng cao của Viettel' }
    ],
    verifiedAt: '2026-11-24'
  },
  {
    id: 423,
    slug: 'fpt-ai',
    name: 'FPT.AI',
    tagline: 'Hệ sinh thái Trí tuệ Nhân tạo toàn diện hàng đầu Việt Nam của Tập đoàn FPT',
    excerpt: 'Bộ giải pháp AI cấp doanh nghiệp gồm Chatbot hội thoại ngôn ngữ tự nhiên (NLP tiếng Việt), Tổng đài viên ảo AI, Trích xuất giấy tờ OCR/eKYC và Giọng nói AI.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp gói Free Tier hàng tháng rất tốt trên FPT.AI Console (miễn phí ký tự TTS, lượt gọi API OCR và tin nhắn Chatbot thử nghiệm cho sinh viên & lập trình viên).',
    level: 'Trung bình',
    officialUrl: 'https://fpt.ai/',
    featured: true,
    tags: ['Enterprise AI Vietnam', 'Vietnamese NLP', 'eKYC & OCR', 'AI Contact Center'],
    whatIsIt: 'FPT.AI là nền tảng Trí tuệ nhân tạo chủ lực của FPT Smart Cloud (Tập đoàn FPT), phục vụ hàng trăm triệu lượt tương tác mỗi năm tại các ngân hàng, hãng hàng không, bảo hiểm và chuỗi bán lẻ lớn nhất Việt Nam thông qua 4 trụ cột: FPT.AI Engage (Voicebot), FPT.AI Chat (Generative AI Chatbot), FPT.AI Reader (OCR/eKYC) và FPT.AI Speech.',
    bestFor: 'Sinh viên tìm hiểu ứng dụng AI thực tiễn trong Chăm sóc khách hàng tự động (Ngân hàng, Fintech, Bán lẻ) hoặc thực hành huấn luyện Chatbot hiểu ý định khách hàng (Intent/Entity NLP tiếng Việt).',
    platforms: 'Web Console (console.fpt.ai), Cloud APIs, Omnichannel Widget',
    vietnameseSupport: '100% Tiếng Việt chuyên sâu (xử lý tốt cả câu không dấu, viết tắt tiếng Việt).',
    studentPerk: 'Tài khoản miễn phí trên `console.fpt.ai` tặng sẵn hạn mức Free hàng tháng cho phép sinh viên tự tay huấn luyện 1 con Bot hiểu ngữ nghĩa tiếng Việt thật sự thay vì chỉ bấm nút kịch bản cứng!',
    useCases: [
      'Thực hành huấn luyện Chatbot AI nhận diện Ý định khách hàng (Intent: Hỏi giá, Khiếu nại, Tra cứu đơn hàng) ngay cả khi khách gõ tiếng Việt không dấu hoặc sai chính tả.',
      'Thử nghiệm công nghệ eKYC & OCR bóc tách tự động thông tin Căn cước công dân / Hóa đơn mua hàng phục vụ chiến dịch "Chụp hóa đơn tích điểm nhận quà".',
      'Nghiên cứu mô hình Tổng đài viên ảo AI gọi điện xác nhận đơn hàng COD và nhắc lịch thanh toán.'
    ],
    pros: [
      'Xử lý ngôn ngữ tự nhiên (NLP) tiếng Việt đời thường (kể cả câu viết tắt, teencode bán hàng) thuộc hàng xuất sắc nhất Việt Nam.',
      'Có cổng Console dùng thử miễn phí minh bạch và tài liệu hướng dẫn tiếng Việt rất chi tiết.'
    ],
    limitations: 'Giao diện huấn luyện Intent/Entity chuyên nghiệp nên đòi hỏi tư duy cấu trúc dữ liệu hơn các công cụ kéo-thả đơn giản.',
    studentTip: 'Trong các đề tài nghiên cứu khoa học sinh viên hoặc cuộc thi Fintech/Retail Marketing, giải pháp dùng **FPT.AI Reader (OCR)** để "Khách chụp ảnh hóa đơn siêu thị → AI tự đọc tên sản phẩm & cộng điểm thưởng tự động trong 3 giây" là một ý tưởng công nghệ cực kỳ thực tế và khả thi!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 424,
    slug: 'viettel-ai',
    name: 'Viettel AI',
    tagline: 'Nền tảng Dịch vụ AI Giọng nói, Bóc băng tiếng Việt (ASR), OCR & Digital Human của Viettel',
    excerpt: 'Trung tâm Dịch vụ Dữ liệu và Trí tuệ nhân tạo Viettel cung cấp công nghệ chuyển giọng nói thành văn bản (Speech-to-Text) và tổng hợp tiếng nói tiếng Việt độ chính xác hàng đầu.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Đăng ký tài khoản trải nghiệm miễn phí hạn mức dùng thử các dịch vụ TTS (Đọc văn bản), ASR (Gỡ băng âm thanh tiếng Việt) và OCR trên cổng Viettel AI.',
    level: 'Cơ bản',
    officialUrl: 'https://viettelai.vn/',
    tags: ['Vietnamese Speech-to-Text', 'ASR Transcription', 'Viettel Cyberbot', 'Digital Human'],
    whatIsIt: 'Viettel AI là hệ sinh thái sản phẩm Trí tuệ nhân tạo do Tập đoàn Công nghiệp – Viễn thông Quân đội (Viettel) nghiên cứu và phát triển, nổi tiếng với độ chính xác vượt trội trong nhận dạng tiếng nói tiếng Việt mọi vùng miền (ASR), tổng hợp giọng nói tự nhiên, trợ lý ảo tổng đài Cyberbot và nhân sự ảo Digital Human.',
    bestFor: 'Sinh viên cần gỡ băng (chuyển file ghi âm sang văn bản) các buổi phỏng vấn sâu (In-depth Interview) hoặc thảo luận nhóm (Focus Group) bằng tiếng Việt khi làm Nghiên cứu Marketing!',
    platforms: 'Web Platform (viettelai.vn), Cloud API',
    vietnameseSupport: '100% Tiếng Việt (nhận diện tốt cả giọng địa phương và môi trường có nhiễu nhẹ).',
    studentPerk: 'Cung cấp gói trải nghiệm miễn phí khi đăng ký tài khoản giúp sinh viên tiết kiệm hàng giờ ngồi gõ lại băng ghi âm phỏng vấn định tính.',
    useCases: [
      'Tải file ghi âm buổi phỏng vấn sâu người tiêu dùng Việt Nam lên công cụ Speech-to-Text để tự động chuyển thành văn bản phục vụ mã hóa dữ liệu định tính.',
      'Tạo giọng thuyết minh tiếng Việt chuẩn mực cho video giới thiệu thương hiệu hoặc báo cáo tổng kết dự án.',
      'Tìm hiểu ứng dụng MC ảo / Nhân viên tư vấn ảo (Digital Human) tại quầy giao dịch thông minh.'
    ],
    pros: [
      'Khả năng nghe hiểu và bóc băng tiếng Việt đa vùng miền thuộc nhóm chính xác nhất hiện nay nhờ kho dữ liệu huấn luyện khổng lồ.',
      'Hạ tầng bảo mật cao đặt tại Việt Nam.'
    ],
    limitations: 'Hết gói ký tự/phút âm thanh dùng thử ban đầu sẽ tính phí theo lưu lượng sử dụng thực tế.',
    studentTip: 'Khi làm môn Nghiên cứu Marketing (Marketing Research), khâu ám ảnh nhất là ngồi nghe lại 10 file ghi âm phỏng vấn dài cả tiếng đồng hồ để gõ chữ — hãy dùng tính năng Nhận dạng tiếng nói (Speech-to-Text) của Viettel AI để rút ngắn 80% thời gian!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 425,
    slug: 'lovinbot-ai',
    name: 'LovinBot AI',
    tagline: 'Trợ lý AI viết Content Marketing, Bài chuẩn SEO & Kịch bản Video tối ưu sẵn cho người Việt',
    excerpt: 'Nền tảng AI tạo nội dung "Make in Vietnam" thiết kế sẵn hàng trăm mẫu viết bài chuẩn SEO, quảng cáo Facebook/TikTok và mô tả sản phẩm Shopee theo văn phong Việt.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép đăng ký dùng thử miễn phí giới hạn số từ/lượt tạo ban đầu; các gói cá nhân thanh toán nội địa (VietQR/Momo) dễ tiếp cận.',
    level: 'Cơ bản',
    officialUrl: 'https://lovinbot.ai/',
    tags: ['Vietnamese Copywriting', 'SEO Article Writer', 'Social Content AI', 'No Prompt Needed'],
    whatIsIt: 'LovinBot là nền tảng trợ lý AI sáng tạo nội dung do startup công nghệ Việt Nam phát triển, giải quyết rào cản "không biết viết câu lệnh Prompt phức tạp" bằng cách đóng gói sẵn các biểu mẫu (Templates) chuyên sâu cho Content Marketer Việt Nam: lập dàn ý SEO, viết bài chuẩn SEO 1.500+ từ, viết bài bán hàng theo công thức AIDA/PAS và kịch bản TikTok.',
    bestFor: 'Sinh viên mới bắt đầu học viết Content chuẩn SEO, viết bài Fanpage hoặc mô tả sản phẩm TMĐT muốn có khung sườn bài viết tiếng Việt mạch lạc ngay lập tức.',
    platforms: 'Web Browser',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'Có gói trải nghiệm miễn phí không cần thẻ Visa quốc tế, giao diện tiếng Việt trực quan chia sẵn theo từng công thức Copywriting kinh điển.',
    useCases: [
      'Tạo nhanh dàn ý chi tiết (Heading H2, H3) và bản nháp đầu tiên cho bài viết Blog chuẩn SEO từ từ khóa chính và từ khóa phụ.',
      'Sinh 5 phương án giật tít quảng cáo Facebook Ads theo công thức PAS (Problem - Agitate - Solution) và AIDA để chạy thử nghiệm A/B Testing.',
      'Viết mô tả sản phẩm chuẩn SEO cho gian hàng Shopee và TikTok Shop.'
    ],
    pros: [
      'Không cần nhớ câu lệnh phức tạp, chỉ cần điền Tên sản phẩm, Chân dung khách hàng và Giọng văn mong muốn.',
      'Văn phong đầu ra tự nhiên, bám sát thói quen mua sắm của người tiêu dùng Việt Nam.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượng từ tạo ra; người viết vẫn cần biên tập lại dẫn chứng thực tế để bài viết có chiều sâu riêng.',
    studentTip: 'Dù dùng bất kỳ AI viết bài nào, nguyên tắc sống còn của Marketer giỏi là quy tắc **30 - 50 - 20**: 30% nghiên cứu Insight & lập dàn ý trước, 50% để AI nháp tốc độ cao, và 20% cuối tự tay chuốt lại ví dụ thực tế cùng cá tính thương hiệu!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 426,
    slug: 'elsa-speak',
    name: 'ELSA Speak',
    tagline: 'Ứng dụng AI Huấn luyện Phát âm & Giao tiếp Tiếng Anh toàn cầu do người Việt sáng lập',
    excerpt: 'Niềm tự hào công nghệ Việt vươn tầm thế giới (Văn Đinh Hồng Vũ sáng lập, Google Gradient Ventures đầu tư) giúp sinh viên chỉnh phát âm từng âm tiết và luyện phỏng vấn tiếng Anh cùng AI.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Có bài kiểm tra đánh giá trình độ phát âm chi tiết và các bài luyện tập hàng ngày miễn phí; gói ELSA Pro / Premium thường có ưu đãi lớn cho học sinh - sinh viên Việt Nam.',
    level: 'Cơ bản',
    officialUrl: 'https://elsaspeak.com/',
    featured: true,
    tags: ['Speech Recognition AI', 'English Pitching', 'MNC Interview Prep', 'Vietnamese Founder'],
    whatIsIt: 'ELSA Speak (English Language Speech Assistant) là ứng dụng học nói và giao tiếp tiếng Anh bằng Trí tuệ nhân tạo hàng đầu thế giới do chị Văn Đinh Hồng Vũ (cựu sinh viên ĐH Ngoại thương & Thạc sĩ Stanford) đồng sáng lập. Công nghệ nhận diện giọng nói độc quyền của ELSA phân tích chính xác đến từng âm vị (Phoneme), trọng âm và ngữ điệu để chỉ ra lỗi phát âm đặc trưng của người Việt và nhập vai đối thoại tự do (ELSA AI Roleplay).',
    bestFor: 'Sinh viên Marketing chuẩn bị thuyết trình giải Case Study bằng tiếng Anh (L’Oréal Brandstorm, Unilever UFLL, HSBC Business Case) và luyện phỏng vấn Management Trainee tại các tập đoàn đa quốc gia (MNC).',
    platforms: 'iOS, Android, Web Analyzer (ELSA Speech Analyzer)',
    vietnameseSupport: 'Giao diện & hướng dẫn sửa lỗi đặt khẩu hình 100% Tiếng Việt.',
    studentPerk: 'Làm bài test chẩn đoán phát âm toàn diện miễn phí + luyện 5 bài miễn phí mỗi ngày; thường xuyên có học bổng và gói ưu đãi giảm giá sâu dành riêng cho sinh viên đại học tại Việt Nam.',
    useCases: [
      'Nhập vai phỏng vấn (AI Roleplay) bằng tiếng Anh với nhà tuyển dụng ảo cho vị trí Marketing Management Trainee kèm nhận xét chi tiết về từ vựng, ngữ pháp và độ trôi chảy.',
      'Tải kịch bản bài Pitching tiếng Anh của nhóm lên ELSA để luyện đọc chuẩn từng thuật ngữ chuyên ngành Marketing trước ngày thi Chung kết.',
      'Dùng ELSA Speech Analyzer trên máy tính để ghi âm buổi diễn tập thuyết trình tự do và nhận điểm dự đoán IELTS Speaking / CEFR.'
    ],
    pros: [
      'Được huấn luyện chuyên sâu trên dữ liệu giọng đọc của người Việt nên bắt lỗi âm cuối (ending sounds) và nối âm chính xác đến kinh ngạc.',
      'Luyện nói 1-1 với AI bất cứ lúc nào trong phòng trọ/ký túc xá mà không hề ngại ngùng sợ sai.'
    ],
    limitations: 'Tính năng đối thoại nhập vai không giới hạn (ELSA AI không giới hạn lượt) nằm trong gói nâng cấp trả phí.',
    studentTip: 'Trong các cuộc thi giải Case Study lớn của MNC tại Việt Nam, vòng Chung kết gần như 100% thuyết trình và Q&A bằng tiếng Anh — chỉ cần luyện 15 phút/ngày trên ELSA trước kỳ thi 1 tháng, phong thái trình bày (Delivery) của bạn trên sân khấu sẽ tự tin hơn gấp bội!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 427,
    slug: 'botcake-io',
    name: 'Botcake AI',
    tagline: 'Nền tảng AI Agent & Chatbot tự động hóa hội thoại bán hàng đa kênh của Pancake Việt Nam',
    excerpt: 'Giải pháp tự động hóa tin nhắn kết hợp AI bán hàng thông minh trên Facebook Messenger, Zalo, Instagram, TikTok và WhatsApp thuộc hệ sinh thái Pancake.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Có gói trải nghiệm miễn phí cho trang nhỏ để thiết lập kịch bản và thử nghiệm AI; đồng bộ trực tiếp với Pancake và POS bán hàng.',
    level: 'Trung bình',
    officialUrl: 'https://botcake.io/',
    tags: ['AI Sales Agent', 'Conversational Commerce', 'Pancake Ecosystem', 'Omnichannel Bot'],
    whatIsIt: 'Botcake là nền tảng tự động hóa Marketing hội thoại và AI Agent chuyên sâu cho thương mại điện tử hội thoại (Conversational Commerce) do đội ngũ kỹ sư Việt Nam của Pancake phát triển, hiện không chỉ thống lĩnh thị trường nội địa mà còn mở rộng mạnh mẽ sang Đông Nam Á, Đài Loan và Mỹ Latinh.',
    bestFor: 'Sinh viên tìm hiểu xu hướng ứng dụng AI Agent vào tư vấn chốt đơn tự động 24/7 và tối ưu quảng cáo Click-to-Messenger (CTM Ads).',
    platforms: 'Web Browser (Tích hợp Meta, Zalo OA, TikTok, WhatsApp, Pancake POS)',
    vietnameseSupport: '100% Tiếng Việt & Đa ngôn ngữ.',
    studentPerk: 'Cung cấp tài khoản bắt đầu miễn phí để sinh viên thực hành dựng luồng kết hợp Kịch bản điều kiện (Rule-based Flow) + Trợ lý AI tạo sinh trả lời linh hoạt dựa trên bảng thông tin sản phẩm.',
    useCases: [
      'Nạp tài liệu thông tin sản phẩm/khóa học (Knowledge Base) để AI tự động tư vấn size, màu sắc, giá bán và chính sách đổi trả tự nhiên như nhân viên trực page.',
      'Đồng bộ sự kiện khách hàng tiềm năng chất lượng cao ngược lại cho thuật toán Meta Ads (Conversions API) giúp giảm giá thầu quảng cáo tin nhắn.',
      'Gửi tin nhắn chăm sóc lại khách hàng bỏ giỏ hàng qua WhatsApp/Zalo/Messenger hợp chuẩn chính sách nền tảng.'
    ],
    pros: [
      'Kết hợp hoàn hảo với phần mềm quản lý chat & đơn hàng quốc dân Pancake tại Việt Nam.',
      'AI có khả năng đọc hiểu ảnh sản phẩm khách gửi vào khung chat để báo giá đúng mẫu.'
    ],
    limitations: 'Để khai thác hết sức mạnh đồng bộ đơn hàng và Meta Ads Dataset cần có Fanpage chạy thực tế.',
    studentTip: 'Xu hướng mới nhất của ngành E-commerce Việt Nam không còn là Chatbot bấm nút cứng nhắc nữa mà là **Hybrid AI Chatbot** (kết hợp luồng kịch bản chuẩn + AI Agent đọc hiểu hình ảnh/ngôn ngữ tự nhiên trên Botcake) — hãy cập nhật ngay vào CV thực tập của bạn!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 428,
    slug: 'preny-ai',
    name: 'Preny AI',
    tagline: 'Chatbot AI bán hàng đóng vai tư vấn viên người Việt đối thoại tự nhiên 24/7 tăng chốt đơn',
    excerpt: 'Giải pháp AI Chatbot "Make in Vietnam" (Askany) nổi bật với khả năng giao tiếp tiếng Việt khéo léo, biết hỏi ngược khai thác nhu cầu và xin SĐT khách hàng tự nhiên như người thật.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Miễn phí hàng ngàn tin nhắn/lượt tương tác đầu tiên để nhúng trực tiếp lên Website và Fanpage thử nghiệm hiệu quả.',
    level: 'Cơ bản',
    officialUrl: 'https://preny.ai/',
    tags: ['Human-like AI Chatbot', 'Lead Conversion', 'Vietnamese Sales AI', 'Website & Fanpage'],
    whatIsIt: 'Preny AI là nền tảng trợ lý AI chốt đơn trực tuyến được phát triển bởi đội ngũ công nghệ Việt Nam (hệ sinh thái Askany), huấn luyện chuyên biệt văn phong giao tiếp bán hàng của người Việt (dạ/vâng tự nhiên, bắt nhịp tâm lý khách, xử lý từ chối khéo léo) để giữ chân khách truy cập Website/Fanpage trong 10 giây vàng đầu tiên, đặc biệt vào ban đêm.',
    bestFor: 'Sinh viên làm dự án Website dịch vụ (Nha khoa, Thẩm mỹ, Trung tâm Anh ngữ, Du học, Nội thất) cần tối ưu tỷ lệ thu thập SĐT khách hàng (Lead Conversion Rate).',
    platforms: 'Web Cloud (Nhúng Website, Facebook Fanpage, Zalo, Instagram)',
    vietnameseSupport: '100% Tiếng Việt (văn phong tư vấn viên Việt Nam cực kỳ mượt mà) & Đa ngôn ngữ.',
    studentPerk: 'Gói Free cho phép tạo và huấn luyện riêng 1 Chatbot AI từ chính đường link Website hoặc file tài liệu đồ án của nhóm chỉ trong 5 phút.',
    useCases: [
      'Nhúng nhân viên tư vấn ảo lên Landing Page dự án để tự động chào hỏi, giải đáp thắc mắc về học phí/lộ trình và khéo léo xin số điện thoại đặt lịch hẹn.',
      'Trực Fanpage xuyên đêm (23h–7h sáng) giúp không bỏ rơi các lượt nhấp quảng cáo ngoài giờ hành chính.',
      'Phân tích lại lịch sử câu hỏi thật của khách hàng để tìm ra rào cản mua hàng phổ biến nhất.'
    ],
    pros: [
      'Văn phong đối thoại tiếng Việt tự nhiên, gần gũi, không bị cảm giác "dịch từ tiếng Anh sang" như nhiều bot ngoại.',
      'Huấn luyện cực dễ bằng cách tải file Q&A hoặc dán URL trang sản phẩm.'
    ],
    limitations: 'Cần kiểm tra và bổ sung kỹ bảng dữ liệu giá/chính sách ban đầu để AI không tự suy diễn ưu đãi ngoài quy định.',
    studentTip: 'Khi thuyết trình đồ án Website Thương mại điện tử trên lớp, bạn có thể mời thầy cô và các bạn quét mã QR vào trang web của nhóm rồi chat thử trực tiếp với AI tư vấn viên Preny đã học thuộc lòng thông tin sản phẩm của nhóm — hiệu ứng trình diễn (Live Demo) sẽ cực kỳ ấn tượng!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 429,
    slug: 'smax-ai',
    name: 'Smax AI',
    tagline: 'Nền tảng AI Chatbot, Omnichannel CRM & Tự động hóa bán hàng thực chiến tại Việt Nam',
    excerpt: 'Hệ sinh thái tự động hóa hội thoại đa kênh tích hợp GenAI (Smax.ai / SmaxBot) được cộng đồng chạy Ads & kinh doanh online Việt Nam sử dụng rộng rãi.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp gói khởi tạo miễn phí cho phép kết nối đa kênh và thử nghiệm kịch bản tự động hóa cho dự án nhỏ.',
    level: 'Trung bình',
    officialUrl: 'https://smax.ai/',
    tags: ['AI Automation Vietnam', 'Omnichannel Livechat', 'Meta Dataset Sync', 'Social Commerce'],
    whatIsIt: 'Smax AI là nền tảng hợp nhất quản lý hội thoại đa kênh (Livechat), kịch bản tự động hóa (Chatbot Trigger) và tác nhân AI tạo sinh (AI Agent) phát triển bởi đội ngũ kỹ sư Việt Nam giàu kinh nghiệm thực chiến Social Commerce, hỗ trợ kết nối liền mạch Fanpage, Instagram, Zalo OA, Zalo cá nhân, Shopee, TikTok và Telegram.',
    bestFor: 'Sinh viên theo đuổi mảng Performance Marketing (Facebook/TikTok Ads) và Vận hành E-commerce đa kênh tại Việt Nam.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'Có gói Free trọn đời giới hạn quy mô nhỏ để sinh viên thực hành đấu nối AI Agent và xây dựng phễu chăm sóc khách hàng đa kênh.',
    useCases: [
      'Kết hợp AI tự động phân loại tin nhắn khách hàng gắn nhãn (Đã chốt, Đang phân vân giá, Xin sỉ, Khiếu nại) để đội sale xử lý ưu tiên.',
      'Tự động gửi chuỗi tin nhắn bám đuổi (Re-engagement) theo từng nhóm thẻ khách hàng.',
      'Đồng bộ đơn hàng và dữ liệu khách hàng về CRM mini ngay trong giao diện chat.'
    ],
    pros: [
      'Bám rất sát nhu cầu thực tế của các nhà quảng cáo (Media Buyers) và chủ shop tại thị trường Việt Nam.',
      'Hỗ trợ nhiều cổng tích hợp AI linh hoạt và tốc độ xử lý tin nhắn đồng thời cao.'
    ],
    limitations: 'Nhiều tính năng cấu hình kỹ thuật chuyên sâu về Trigger/API nên cần xem video hướng dẫn của hãng khi mới làm quen.',
    studentTip: 'Hiểu cách kết hợp Quảng cáo tin nhắn (Messaging Ads) + AI phân loại Lead tự động trên Smax AI hoặc Botcake sẽ giúp bạn trả lời cực tốt câu hỏi phỏng vấn: "Làm sao để tăng tỷ lệ chốt đơn khi chi phí quảng cáo ngày càng đắt?".',
    verifiedAt: '2026-11-24'
  },
  {
    id: 430,
    slug: 'zalo-ai-kiki',
    name: 'Zalo AI & Kiki',
    tagline: 'Hệ sinh thái Nghiên cứu AI Tiếng Việt & Trợ lý Giọng nói Kiki phổ biến số 1 Việt Nam',
    excerpt: 'Trung tâm R&D Trí tuệ Nhân tạo hàng đầu của Zalo (VNG) đứng sau trợ lý giọng nói Kiki trên hơn 1 triệu ô tô/thiết bị Việt, mô hình ngôn ngữ KiLM và cuộc thi Zalo AI Challenge.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Trợ lý Kiki và các tính năng AI tích hợp trên Zalo hoàn toàn miễn phí cho người dùng; Zalo AI cung cấp API giọng đọc/eKYC và sân chơi học thuật Zalo AI Challenge miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://zalo.ai/',
    featured: true,
    tags: ['Vietnamese Voice Assistant', 'Kiki Auto', 'Zalo Ecosystem', 'Vietnamese LLM R&D'],
    whatIsIt: 'Zalo AI là đơn vị tiên phong nghiên cứu và ứng dụng Trí tuệ nhân tạo thuần Việt thuộc VNG, tạo ra những sản phẩm đi sâu vào đời sống hàng chục triệu người Việt như: Trợ lý giọng nói tiếng Việt **Kiki** (cài đặt trên hơn 1 triệu màn hình ô tô và loa thông minh tại Việt Nam), tính năng chuyển tin nhắn thoại/văn bản thông minh trên Zalo, Zalo Avatar AI và mô hình ngôn ngữ lớn tiếng Việt KiLM.',
    bestFor: 'Sinh viên nghiên cứu hành vi tiêu dùng số tại Việt Nam (Voice Search tiếng Việt, AI trên Super App Zalo) và sinh viên công nghệ/dữ liệu quan tâm bộ dữ liệu chuẩn tiếng Việt.',
    platforms: 'Ứng dụng Zalo, Kiki Auto (Android Auto / CarPlay), Web Portal (zalo.ai)',
    vietnameseSupport: '100% Tiếng Việt bản địa (am hiểu sâu địa danh, tên bài hát, tên đường phố Việt Nam).',
    studentPerk: 'Trải nghiệm trực tiếp hoàn toàn miễn phí ngay trong siêu ứng dụng Zalo và ứng dụng Kiki; kho bài toán & dữ liệu từ đấu trường học thuật Zalo AI Challenge rất giá trị cho nghiên cứu.',
    useCases: [
      'Nghiên cứu xu hướng Tương tác bằng giọng nói (Voice Marketing & In-car Audio Experience) khi người tiêu dùng Việt Nam lái xe ô tô cùng trợ lý Kiki.',
      'Ứng dụng các tiện ích AI tạo ảnh thiệp chúc mừng cá nhân hóa lan truyền triệu lượt chia sẻ dịp 8/3, 20/10, Tết Nguyên đán trên Zalo (Case study Viral Marketing kinh điển!).',
      'Khai thác công nghệ Text-to-Speech và định danh điện tử của Zalo AI cho dịch vụ số.'
    ],
    pros: [
      'Độ phủ người dùng thực tế lớn nhất trong các sản phẩm AI tiêu dùng do người Việt tự phát triển.',
      'Các chiến dịch AI Avatar / Thiệp AI dịp lễ trên Zalo luôn là Case Study mẫu mực về Growth Hacking & Viral Loop tại Việt Nam.'
    ],
    limitations: 'Một số mô hình nền tảng nội bộ tập trung phục vụ trực tiếp bên trong hệ sinh thái Zalo thay vì mở thành công cụ chat độc lập đại trà.',
    studentTip: 'Hãy phân tích Case Study "Chiến dịch tạo ảnh/thiệp AI dịp 20/10 và Tết của Zalo thu hút hàng triệu người dùng chỉ trong vài ngày" — đây là minh chứng xuất sắc nhất về việc dùng AI làm đòn bẩy **Product-Led Growth (PLG)** phù hợp tâm lý người Việt!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 431,
    slug: 'vinbigdata-vigpt',
    name: 'VinBigdata (ViGPT)',
    tagline: 'Mô hình Ngôn ngữ Lớn Tiếng Việt (ViGPT) & Giải pháp AI Tạo sinh của Vingroup',
    excerpt: 'Một trong những mô hình ngôn ngữ lớn "Make in Vietnam" đầu tiên được huấn luyện chuyên sâu trên hàng trăm GB dữ liệu lịch sử, văn hóa, pháp luật và nghiệp vụ doanh nghiệp Việt.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Triển khai giải pháp AI tạo sinh độc lập (ViChat, ViVoice, ViVi) cho cơ quan nhà nước, ngân hàng & doanh nghiệp lớn; mở đợt trải nghiệm cộng đồng cho nghiên cứu tiếng Việt.',
    level: 'Nâng cao',
    officialUrl: 'https://vinbigdata.com/',
    tags: ['Vietnamese Sovereign LLM', 'ViGPT & ViChat', 'Enterprise GenAI', 'Vingroup Tech'],
    whatIsIt: 'VinBigdata (Công ty Cổ phần Nghiên cứu và Ứng dụng Dữ liệu lớn thuộc Tập đoàn Vingroup) là đơn vị phát triển **ViGPT** — phiên bản "ChatGPT tiếng Việt" đầu tiên hướng tới chủ quyền dữ liệu quốc gia, cùng bộ giải pháp trợ lý ảo ViChat, trợ lý giọng nói trên ô tô điện VinFast (ViVi) và nền tảng phân tích hình ảnh thông minh Vizone.',
    bestFor: 'Sinh viên viết chuyên đề/khóa luận về Chủ quyền AI quốc gia (Sovereign AI), ứng dụng Generative AI trong Ngân hàng - Tài chính - Hành chính công và ngành Ô tô thông minh tại Việt Nam.',
    platforms: 'Enterprise Cloud / On-Premise, Hệ sinh thái xe điện thông minh VinFast',
    vietnameseSupport: '100% Tiếng Việt chuẩn mực (chuyên sâu văn bản quy phạm pháp luật, lịch sử, văn hóa Việt Nam).',
    studentPerk: 'Các ấn phẩm công bố khoa học quốc tế và bài phân tích kiến trúc AI tạo sinh doanh nghiệp trên chuyên trang Tin tức/Công nghệ của VinBigdata mở hoàn toàn miễn phí cho sinh viên trích dẫn học thuật.',
    useCases: [
      'Nghiên cứu Case Study tích hợp trợ lý ảo giọng nói tiếng Việt đa vùng miền **ViVi** tạo lợi thế cạnh tranh khác biệt cho sản phẩm ô tô điện VinFast.',
      'Tìm hiểu kiến trúc RAG (Retrieval-Augmented Generation) giúp các ngân hàng và tập đoàn Việt Nam xây dựng trợ lý tri thức nội bộ bảo mật dữ liệu riêng.',
      'Tham khảo định hướng phát triển Mô hình ngôn ngữ lớn tiếng Việt gọn nhẹ, tối ưu chi phí hạ tầng.'
    ],
    pros: [
      'Năng lực R&D bài bản với đội ngũ nhà khoa học dữ liệu hàng đầu và nguồn dữ liệu tiếng Việt bản địa chuẩn xác.',
      'Đáp ứng tiêu chuẩn khắt khe nhất về an toàn, bảo mật dữ liệu tại chỗ (On-premise) cho khối Tài chính - Ngân hàng Việt Nam.'
    ],
    limitations: 'Hiện tập trung cung cấp giải pháp B2B/B2G cấp tổ chức thay vì ứng dụng giải trí miễn phí đại trà cho cá nhân.',
    studentTip: 'Khi làm bài luận môn Quản trị Công nghệ, Chiến lược Thương hiệu hoặc AI Marketing, việc đưa dẫn chứng về **Trợ lý ảo ViVi trên xe VinFast** và **ViGPT** sẽ giúp bài viết có chiều sâu thực tiễn Việt Nam rất ấn tượng!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 432,
    slug: 'maika-ai',
    name: 'Maika AI (OLLI)',
    tagline: 'Trợ lý Ảo Tiếng Việt, Tóm tắt Video/Tài liệu & Sáng tạo Nội dung của OLLI Technology',
    excerpt: 'Từ startup làm loa thông minh tiếng Việt Maika nổi tiếng đến bộ công cụ Maika AI hỗ trợ người Việt nghiên cứu từ khóa, tóm tắt YouTube/Web và sáng tạo nội dung Marketing.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp tiện ích mở rộng trình duyệt (Chrome Extension) và gói sử dụng miễn phí hàng ngày cho cá nhân & sinh viên.',
    level: 'Cơ bản',
    officialUrl: 'https://olli.vn/',
    tags: ['Vietnamese AI Assistant', 'Browser Extension', 'Content & Summary AI', 'OLLI Technology'],
    whatIsIt: 'OLLI Technology là công ty công nghệ phần cứng và Trí tuệ nhân tạo tiên phong tại Việt Nam nổi tiếng với trợ lý ảo tiếng Việt **Maika** (trên loa thông minh OLLI Maika và ứng dụng di động), đồng thời phát triển hệ công cụ trợ lý AI hỗ trợ người dùng Việt Nam tóm tắt trang web, video bài giảng, viết nội dung truyền thông và xây dựng trợ lý ảo riêng cho doanh nghiệp.',
    bestFor: 'Sinh viên cần một trợ lý AI thuần Việt thân thiện để tóm tắt nhanh bài báo dài, video YouTube kiến thức và lên ý tưởng bài viết mạng xã hội.',
    platforms: 'Web Browser, Chrome Extension, iOS & Android App, Loa thông minh Maika',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'Có gói miễn phí trải nghiệm tiện ích mở rộng ngay trên trình duyệt giúp đọc lướt và tóm tắt tài liệu web nhanh chóng.',
    useCases: [
      'Tóm tắt nhanh ý chính của các video hội thảo chuyên ngành dài 1–2 tiếng hoặc bài viết chuyên khảo dài thành gạch đầu dòng tiếng Việt.',
      'Sử dụng các mẫu gợi ý (Templates) tạo kịch bản Podcast, bài đăng Facebook và email công việc.',
      'Tìm hiểu bài học chuyển dịch mô hình sản phẩm (Pivot & Product Evolution) từ phần cứng IoT sang nền tảng AI SaaS của một startup công nghệ Việt.'
    ],
    pros: [
      'Đội ngũ phát triển người Việt có nền tảng sâu về tương tác giọng nói và trải nghiệm người dùng bản địa.',
      'Giao diện gần gũi, dễ thao tác ngay cả với người mới tiếp xúc AI.'
    ],
    limitations: 'Các tác vụ suy luận toán học hay lập trình phức tạp không phải trọng tâm chính của công cụ.',
    studentTip: 'Ngoài việc dùng công cụ phục vụ học tập, câu chuyện phát triển hệ sinh thái trợ lý ảo tiếng Việt Maika của OLLI cũng là một Case Study khởi nghiệp công nghệ nội địa rất thú vị cho sinh viên khối Kinh tế - Quản trị!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 506,
    slug: 'vnpt-ai',
    name: 'VNPT AI (Smartbot & SmartVoice)',
    tagline: 'Hệ sinh thái Trí tuệ Nhân tạo chủ lực của Tập đoàn VNPT đạt chuẩn quốc tế NIST',
    excerpt: 'Nền tảng AI toàn diện Make-in-Vietnam bao gồm VNPT Smartbot tích hợp GenAI, nhận diện khuôn mặt eKYC top đầu thế giới, tổng hợp giọng nói SmartVoice và OCR văn bản.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép đăng ký tài khoản trải nghiệm thử nghiệm các mô-đun AI trên cổng VNPT AI; triển khai gói linh hoạt cho doanh nghiệp & tổ chức.',
    level: 'Trung bình',
    officialUrl: 'https://vnptai.io/',
    featured: true,
    tags: ['VNPT GenAI', 'Top NIST eKYC', 'Smartbot & SmartVoice', 'Sovereign AI Vietnam'],
    whatIsIt: 'VNPT AI là thương hiệu hợp nhất toàn bộ năng lực nghiên cứu và phát triển Trí tuệ nhân tạo của Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT), xử lý hơn hàng tỷ lượt yêu cầu AI thực tế tại các ngân hàng, tổ chức tài chính và cổng dịch vụ công quốc gia, từng lọt Top bảng xếp hạng nhận diện sinh trắc học uy tín thế giới NIST (Mỹ).',
    bestFor: 'Sinh viên tìm hiểu ứng dụng AI quy mô lớn trong chuyển đổi số Ngân hàng (Onboarding mở tài khoản từ xa eKYC), Viễn thông và Trợ lý ảo GenAI doanh nghiệp tại Việt Nam.',
    platforms: 'Web Cloud Console (vnptai.io), SDK Mobile & API',
    vietnameseSupport: '100% Tiếng Việt chuyên sâu.',
    studentPerk: 'Trải nghiệm trực tiếp các bản Demo nhận diện giấy tờ, chống giả mạo khuôn mặt (Liveness Detection) và giọng nói AI ngay trên cổng sản phẩm của VNPT AI.',
    useCases: [
      'Nghiên cứu cách công nghệ **VNPT eKYC** giúp các ngân hàng số và ví điện tử Việt Nam rút ngắn thời gian mở tài khoản khách hàng mới từ "ra quầy xếp hàng 45 phút" xuống còn "30 giây tại nhà" (tăng vọt tỷ lệ chuyển đổi Acquisition!).',
      'Ứng dụng **VNPT Smartbot (GenAI)** xây dựng trợ lý tư vấn tự động trích xuất câu trả lời chuẩn xác từ kho quy định sản phẩm.',
      'Chuyển đổi văn bản thành giọng đọc tự nhiên hoặc bóc băng hội nghị bằng **VNPT SmartVoice**.'
    ],
    pros: [
      'Độ chính xác nhận diện thị giác máy tính và chống giả mạo sâu (Deepfake/Spoofing Detection) thuộc nhóm dẫn đầu khu vực.',
      'Hạ tầng đám mây nội địa đáp ứng tiêu chuẩn bảo mật dữ liệu cao nhất tại Việt Nam.'
    ],
    limitations: 'Chủ yếu hướng tới tích hợp giải pháp doanh nghiệp (B2B/B2G) qua API và Console.',
    studentTip: 'Khi phân tích yếu tố giúp ngành Ngân hàng số Việt Nam (Cake, Timo, MB Bank, Techcombank...) bùng nổ hàng chục triệu người dùng trẻ, đừng quên nêu vai trò bước ngoặt của công nghệ **AI eKYC nội địa (VNPT AI, FPT.AI, Kalapa)** xóa bỏ hoàn toàn rào cản ra quầy vật lý!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 507,
    slug: 'cmc-c-openai',
    name: 'CMC C-OpenAI (CMC ATI)',
    tagline: 'Hệ sinh thái AI Tạo sinh, Trợ lý Pháp lý CLS & Thị giác Máy tính của Tập đoàn Công nghệ CMC',
    excerpt: 'Được phát triển bởi Viện Nghiên cứu Ứng dụng Công nghệ CMC (CMC ATI): nổi bật với trợ lý AI rà soát văn bản hợp đồng tiếng Việt, C-Agent, C-Voice và CIVAMS.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Hỗ trợ đăng ký dùng thử và trình diễn công nghệ trên cổng sản phẩm của CMC ATI / CMC Cloud.',
    level: 'Nâng cao',
    officialUrl: 'https://cmcati.vn/',
    tags: ['CMC AI-X', 'Legal & Office AI', 'CIVAMS Vision', 'Enterprise AI Vietnam'],
    whatIsIt: 'C-OpenAI là kiến trúc hệ sinh thái Trí tuệ nhân tạo mở thuộc chiến lược chuyển đổi AI-X của Tập đoàn Công nghệ CMC (nghiên cứu bởi Viện CMC ATI), quy tụ hơn 25 công nghệ lõi gồm Mô hình ngôn ngữ lớn tiếng Việt, Trợ lý ảo rà soát mâu thuẫn văn bản pháp lý (CLS), Nhận diện khuôn mặt CIVAMS (xếp hạng cao trên NIST) và số hóa tài liệu C-OCR.',
    bestFor: 'Sinh viên khối Kinh tế số, Luật kinh doanh, Thương mại điện tử và Quản trị tìm hiểu ứng dụng AI nội địa trong tự động hóa văn phòng thông minh và phân tích hành vi tại điểm bán lẻ (Retail AI Camera).',
    platforms: 'Cloud SaaS, On-premise AI Box, API',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'Các công bố nghiên cứu ứng dụng Thị giác máy tính & LLM tiếng Việt của Viện CMC ATI là nguồn tham khảo thực tiễn rất tốt cho chuyên đề Chuyển đổi AI tại doanh nghiệp Việt.',
    useCases: [
      'Ứng dụng Camera AI thông minh đếm lưu lượng khách ra vào cửa hàng vật lý (*Footfall Counter*), phân tích độ tuổi/giới tính và bản đồ nhiệt điểm nóng đứng xem hàng tại siêu thị!',
      'Dùng trợ lý AI kiểm tra nhanh sự chồng chéo điều khoản trong hợp đồng thương mại và quy chế nội bộ.',
      'Số hóa hàng loạt hồ sơ, chứng từ in giấy sang dữ liệu tìm kiếm được bằng C-OCR.'
    ],
    pros: [
      'Làm chủ cả tầng hạ tầng đám mây (CMC Cloud Data Center) lẫn tầng thuật toán AI ứng dụng.',
      'Rất mạnh về mảng AI Camera thông minh cho bán lẻ hiện đại và văn phòng số.'
    ],
    limitations: 'Không phải ứng dụng chat giải trí cá nhân đại trà mà triển khai theo gói giải pháp tổ chức.',
    studentTip: 'Ý tưởng cực sáng giá cho đề tài **Omnichannel Retail**: Trên Website chúng ta có *Google Analytics & Microsoft Clarity* đo Heatmap chuột, còn ngoài cửa hàng vật lý chúng ta có **AI Camera Vision (như giải pháp của CMC / Viettel)** để đo lưu lượng khách ghé quầy và tỷ lệ mua hàng tại điểm bán!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 508,
    slug: 'misa-ava-oneai',
    name: 'MISA AVA & MISA AMIS OneAI',
    tagline: 'Trợ lý Số Nghiệp vụ & Nền tảng Hợp nhất Đa Mô hình AI (ChatGPT, Claude, Gemini) cho Doanh nghiệp Việt',
    excerpt: 'Giải pháp Make-in-Vietnam của Tập đoàn MISA giúp nhân sự Marketing, Sales, Kế toán truy cập chung các siêu mô hình AI quốc tế và hỏi đáp dữ liệu kinh doanh bằng tiếng Việt.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Tích hợp sẵn trợ lý MISA AVA trong hệ sinh thái MISA AMIS; gói MISA AMIS OneAI cấp quyền cho toàn bộ nhân sự công ty/trường học với chi phí tối ưu hóa theo lượt dùng thật.',
    level: 'Cơ bản',
    officialUrl: 'https://amis.misa.vn/misa-amis-oneai/',
    tags: ['Multi-LLM Workspace', 'Business Intelligence AI', 'MISA AVA', 'Marketing & Sales AI'],
    whatIsIt: 'MISA AVA (Trợ lý số tích hợp sâu vào phần mềm CRM/Kế toán/Nhân sự MISA) cùng với **MISA AMIS OneAI** là bước tiến chiến lược của MISA nhằm phổ cập AI cho hàng trăm nghìn doanh nghiệp, hộ kinh doanh và trường đại học Việt Nam: gom tất cả các mô hình mạnh nhất thế giới (OpenAI, Anthropic Claude, Google Gemini, Grok...) vào một cổng quản trị tiếng Việt an toàn, thanh toán hóa đơn VAT nội địa.',
    bestFor: 'Sinh viên thực tập trên hệ sinh thái phần mềm MISA và nghiên cứu cách doanh nghiệp Việt quản trị bảo mật, phân quyền ngân sách khi triển khai GenAI cho toàn bộ nhân viên phòng Marketing.',
    platforms: 'Web Browser, iOS & Android App (MISA AMIS)',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'MISA có mạng lưới hợp tác đào tạo thực hành rộng khắp hàng trăm trường Đại học – Cao đẳng tại Việt Nam giúp sinh viên sớm tiếp cận trợ lý số doanh nghiệp.',
    useCases: [
      'Ra lệnh bằng giọng nói hoặc chữ tiếng Việt cho trợ lý **MISA AVA**: *"Cho tôi xem báo cáo doanh số theo nhóm sản phẩm tháng này so với tháng trước và dự báo xu hướng quý tới"*.',
      'Soạn nhanh email chào hàng cá nhân hóa, kịch bản chăm sóc khách hàng trên CRM chỉ với 1 cú nhấp chuột.',
      'So sánh câu trả lời của nhiều mô hình AI hàng đầu trên cùng một nền tảng dùng chung cho cả phòng Marketing.'
    ],
    pros: [
      'Giải bài toán rất thực tế của các công ty Việt Nam: không phải mua thẻ Visa lẻ từng tài khoản $20/tháng cho 50 nhân viên mà quản lý tập trung có hóa đơn tài chính hợp lệ.',
      'Trợ lý AVA kết nối thẳng vào số liệu doanh thu thật trong CRM để vẽ biểu đồ tức thì.'
    ],
    limitations: 'Phát huy tối đa sức mạnh khi doanh nghiệp đang vận hành sẵn trên hệ sinh thái MISA AMIS.',
    studentTip: 'Khi đề xuất giải pháp ứng dụng AI cho doanh nghiệp vừa và nhỏ Việt Nam trong khóa luận, việc gợi ý các nền tảng quản trị AI tập trung có xuất hóa đơn chứng từ hợp lệ tại Việt Nam (như MISA AMIS OneAI) thể hiện bạn rất hiểu quy định tài chính – kế toán thực tế!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 509,
    slug: 'viettel-cyberbot',
    name: 'Viettel Cyberbot',
    tagline: 'Nền tảng Callbot & Chatbot AI Tự động hóa Tổng đài Chăm sóc Khách hàng bằng Giọng nói Việt',
    excerpt: 'Giải pháp trợ lý ảo tổng đài thông minh của Viettel có khả năng nghe hiểu giọng nói tự nhiên Bắc – Trung – Nam, xử lý ngắt lời và gọi tự động hàng chục nghìn cuộc/giờ.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Hỗ trợ đăng ký tài khoản dùng thử miễn phí kịch bản Chatbot/Callbot cơ bản trên nền tảng đám mây `cyberbot.vn`.',
    level: 'Trung bình',
    officialUrl: 'https://cyberbot.vn/',
    tags: ['AI Voicebot Vietnam', 'Automated Call Center', 'Regional Accent ASR', 'Customer Care AI'],
    whatIsIt: 'Viettel Cyberbot là nền tảng xây dựng Trợ lý ảo hội thoại đa kênh (kết hợp cả **Callbot gọi điện thoại giọng nói** và **Chatbot nhắn tin**) do Trung tâm Không gian mạng Viettel / Viettel AI phát triển, nổi bật với khả năng hiểu ý định người nghe giữa cuộc hội thoại hai chiều tự nhiên thay vì phát file ghi âm một chiều cứng nhắc.',
    bestFor: 'Sinh viên thiết kế quy trình Tự động hóa Dịch vụ Khách hàng (Automated Customer Service), xác nhận đơn hàng TMĐT tự động hoặc khảo sát mức độ hài lòng sau mua (CSAT/NPS Survey Call).',
    platforms: 'Web Studio (cyberbot.vn), Tích hợp hệ thống Tổng đài SIP / CRM',
    vietnameseSupport: '100% Tiếng Việt (xử lý xuất sắc phương ngữ vùng miền và tiếng ồn nền điện thoại di động).',
    studentPerk: 'Có giao diện kéo-thả kịch bản hội thoại trực quan giúp sinh viên đăng ký trải nghiệm cách thiết kế cây hội thoại giọng nói (Voice Flow Design).',
    useCases: [
      'Tự động gọi điện xác nhận địa chỉ và khung giờ giao hàng cho 5.000 đơn hàng Flash Sale chỉ trong 15 phút mà không cần huy động hàng chục nhân viên trực đêm.',
      'Thực hiện khảo sát nhanh chỉ số hài lòng khách hàng (CSAT thang điểm 1–5) tự động sau khi khách vừa trải nghiệm dịch vụ.',
      'Giải đáp tự động 24/7 các câu hỏi lặp đi lặp lại về tra cứu cước, lịch hẹn, trạng thái vận đơn.'
    ],
    pros: [
      'Độ trễ phản hồi giọng nói cực thấp (<1 giây) tạo cảm giác trò chuyện tự nhiên gần giống tổng đài viên thật.',
      'Tích hợp hạ tầng viễn thông gốc của nhà mạng lớn nhất Việt Nam nên chất lượng kết nối cuộc gọi rất ổn định.'
    ],
    limitations: 'Với các tình huống khiếu nại cảm xúc gay gắt phức tạp vẫn cần cấu hình nút chuyển tiếp thông minh sang tổng đài viên con người (*Human Handover*).',
    studentTip: 'Nguyên tắc vàng khi thiết kế kịch bản AI Callbot/Chatbot trong bài thi Trải nghiệm Khách hàng (CX): Luôn thiết kế lối thoát **"Chuyển gặp nhân viên hỗ trợ ngay"** khi AI phát hiện giọng khách hàng bức xúc hoặc hỏi quá 2 lần chưa rõ — đừng nhốt khách hàng trong vòng lặp máy móc!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 510,
    slug: 'filum-ai',
    name: 'Filum AI',
    tagline: 'Nền tảng Quản trị Trải nghiệm Khách hàng (CXM) & AI Agent Đa điểm chạm hàng đầu Việt Nam',
    excerpt: 'Startup công nghệ sâu đầy ấn tượng tại Việt Nam (sáng lập bởi cựu lãnh đạo công nghệ VNG & Silicon Valley) hợp nhất Khảo sát VoC, Hộp thư AI Agent và Phân tích Hành trình Khách hàng.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp gói trải nghiệm miễn phí / Demo chuyên sâu các tác nhân AI chăm sóc khách hàng và đo lường chỉ số NPS/CSAT/CES.',
    level: 'Nâng cao',
    officialUrl: 'https://filum.ai/',
    featured: true,
    tags: ['Customer Experience AI', 'Voice of Customer (VoC)', 'NPS & CSAT Analytics', 'Agentic CX'],
    whatIsIt: 'Filum AI là nền tảng Quản trị Trải nghiệm Khách hàng toàn diện ứng dụng AI tạo sinh (*AI-native Customer Experience Management*) được sáng lập bởi anh Trần Công Thiên Quí cùng các chuyên gia dữ liệu giàu kinh nghiệm từ VNG và thung lũng Silicon, hiện được nhiều chuỗi bán lẻ, tài chính và dịch vụ lớn tại Việt Nam tin dùng để lắng nghe Tiếng nói Khách hàng (*Voice of the Customer - VoC*) và vận hành AI Agent đa kênh.',
    bestFor: 'Sinh viên viết khóa luận hoặc giải Case Study chuyên sâu về **Quản trị Trải nghiệm Khách hàng (Customer Experience - CX)**, đo lường chỉ số **NPS (Net Promoter Score), CSAT, CES** và phân tích nguyên nhân khách rời bỏ!',
    platforms: 'Web Cloud Platform (Tích hợp Zalo, Messenger, Shopee, Lazada, Email, POS, Tổng đài)',
    vietnameseSupport: '100% Tiếng Việt & Tiếng Anh.',
    studentPerk: 'Chuyên mục Blog & Case Study về Quản trị Trải nghiệm Khách hàng trên `filum.ai` là một trong những nguồn kiến thức CX bài bản, chuẩn học thuật hiện đại nhất bằng tiếng Việt hiện nay!',
    useCases: [
      'Tự động thu thập và dùng AI phân tích hàng chục nghìn phản hồi khách hàng từ Đánh giá Google Maps, Bình luận Shopee, Khảo sát Zalo ZNS sau mua và Cuộc gọi tổng đài để chỉ ra đúng "Điểm gãy trải nghiệm" ở chi nhánh cửa hàng nào!',
      'Triển khai **Filum AI Agent** trực hộp thư đa kênh: không chỉ trả lời câu hỏi mà còn tự tra cứu đơn hàng trong hệ thống để giải quyết yêu cầu đổi size/bảo hành cho khách.',
      'Theo dõi biến động chỉ số NPS và CSAT theo thời gian thực trên toàn chuỗi điểm bán.'
    ],
    pros: [
      'Đứng ở tầm cao chiến lược **CX & VoC Analytics** rất hiếm công cụ nội địa chạm tới (hầu hết chỉ dừng ở khung chat bán hàng).',
      'Khả năng phân tích cảm xúc và bóc tách chủ đề phàn nàn tiếng Việt bằng AI cực kỳ sắc sảo.'
    ],
    limitations: 'Thiết kế hướng tới các chuỗi bán lẻ, thương hiệu D2C và doanh nghiệp dịch vụ quy mô vừa đến lớn.',
    studentTip: 'Nếu đề tài Khóa luận hay NCKH của bạn nghiên cứu về **Trải nghiệm Khách hàng Đa kênh (Omnichannel Customer Experience)**, hãy tham khảo khung đo lường kết hợp *NPS + CSAT + CES + AI VoC Topic Extraction* của Filum AI để phần Hàm ý Quản trị (Managerial Implications) đạt đẳng cấp chuyên gia!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 511,
    slug: 'prep-ai-edu',
    name: 'PREP AI (Phòng Ảo Luyện Thi)',
    tagline: 'Nền tảng EdTech AI Việt Nam nổi tiếng khu vực với Phòng Luyện Nói & Chấm Viết IELTS/TOEIC Ảo',
    excerpt: 'Startup EdTech AI tiêu biểu của Việt Nam (từng thắng giải quốc tế và gọi vốn triệu USD) ứng dụng Phòng Speaking Ảo VSR & Chấm chữa Writing từng lỗi sát tiêu chí giám khảo.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép đăng ký tài khoản làm bài kiểm tra đầu vào (Placement Test) và trải nghiệm thử phòng luyện AI miễn phí; các lộ trình học có học phí rất sinh viên.',
    level: 'Cơ bản',
    officialUrl: 'https://prepedu.com/',
    featured: true,
    tags: ['Vietnamese EdTech AI', 'IELTS & TOEIC AI', 'Virtual Speaking Room', 'Student Essential'],
    whatIsIt: 'PREP (prepedu.com — sáng lập bởi anh Tú Phạm cùng đội ngũ kỹ sư công nghệ giáo dục Việt Nam) là nền tảng học và luyện thi ngoại ngữ thông minh (IELTS, TOEIC, HSK, Giao tiếp công sở) tiên phong phát triển **Phòng Speaking Ảo (Virtual Speaking Room)** và **AI Chấm Chữa Writing** chi tiết đến từng tiêu chí chấm thi quốc tế, đồng thời bản thân chiến lược truyền thông của PREP cũng là một Case Study EdTech Marketing xuất sắc tại Việt Nam!',
    bestFor: 'Sinh viên đại học cần bứt phá chuẩn đầu ra ngoại ngữ (TOEIC 750+ / IELTS 6.5–7.5+) để đủ điều kiện tốt nghiệp, đọc tài liệu Marketing quốc tế và ứng tuyển tập đoàn đa quốc gia.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: '100% Giải thích lỗi sai chi tiết bằng Tiếng Việt dễ hiểu.',
    studentPerk: 'Có phòng thi thử đánh giá năng lực miễn phí và thường xuyên tài trợ học bổng / giải thưởng cho các cuộc thi học thuật sinh viên khắp các trường Đại học Việt Nam.',
    useCases: [
      'Thực hành thi nói trong **Phòng Speaking Ảo** bấm giờ áp lực y hệt phòng thi thật: AI nhận diện giọng nói, chỉ ra từ phát âm sai và nâng cấp từ vựng từ mức B1 lên C1 ngay trên bài nói của bạn.',
      'Nộp bài luận tiếng Anh vào **Phòng Writing Ảo** để AI chấm điểm 4 tiêu chí (*Task Response, Coherence, Lexical Resource, Grammar*) chỉ trong 60 giây.',
      'Phân tích chính chiến lược **Product-Led Marketing & Influencer/Community Marketing** đầy sáng tạo của thương hiệu PREP dành cho Gen Z Việt Nam!'
    ],
    pros: [
      'Giải quyết đúng tâm lý sinh viên Việt Nam ngại nói trước đám đông và muốn được chấm chữa bài viết ngay lập tức lúc nửa đêm.',
      'Giao diện học tập Gamification trẻ trung, lộ trình cá nhân hóa theo ngày (Study Plan) cực kỳ kỷ luật.'
    ],
    limitations: 'Để mở khóa toàn bộ ngân hàng đề luyện tập chuyên sâu không giới hạn cần đăng ký khóa học.',
    studentTip: 'Kết hợp **ELSA Speak** (chỉnh chuẩn khẩu hình từng âm vị phát âm hàng ngày) + **PREP AI** (luyện cấu trúc trả lời logic IELTS/TOEIC học thuật & công sở) là công thức tự học ngoại ngữ tiết kiệm hàng chục triệu đồng cho sinh viên Việt Nam!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 512,
    slug: 'aiktp-com',
    name: 'AIKTP',
    tagline: 'Công cụ AI Viết bài Chuẩn SEO, Tối ưu Thực thể Ngữ nghĩa & Đăng bài Hàng loạt nổi tiếng giới SEO Việt',
    excerpt: 'Nền tảng AI Content SEO thuần Việt cực kỳ phổ biến giúp phân tích đối thủ Top 10 Google Việt Nam, lập dàn ý Semantic, tự tìm ảnh minh họa và đẩy bài thẳng lên WordPress.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Tặng miễn phí gói dùng thử viết bài chuẩn SEO đầy đủ tính năng khi tạo tài khoản mới; các gói trả phí nội địa tính theo số bài rất tiết kiệm.',
    level: 'Cơ bản',
    officialUrl: 'https://aiktp.com/',
    tags: ['SEO Content AI Vietnam', 'WordPress Auto Post', 'Semantic Outline', 'Top 10 SERP Analysis'],
    whatIsIt: 'AIKTP là nền tảng ứng dụng Trí tuệ nhân tạo chuyên sâu cho nghề **SEO & Content Website** do kỹ sư Việt Nam phát triển và liên tục tối ưu theo thuật toán Google tại thị trường Việt Nam. Khác với việc gõ câu lệnh lẻ tẻ trên ChatGPT, AIKTP tự động quét 10 bài đang đứng Top Google cho từ khóa đó, gom toàn bộ Heading/Thực thể quan trọng, viết bài dài 1.500–3.000 từ kèm tìm kiếm thông tin thời gian thực và chấm điểm chuẩn SEO ngay trong trình soạn thảo.',
    bestFor: 'Sinh viên thực tập SEO Content, nhóm xây dựng hệ thống Website vệ tinh / Blog chuyên ngành hoặc làm đồ án môn SEO cần sản xuất và tối ưu cấu trúc nội dung tốc độ cao.',
    platforms: 'Web Browser (Tích hợp Plugin đẩy bài trực tiếp sang WordPress)',
    vietnameseSupport: '100% Tiếng Việt & hơn 40 ngôn ngữ khác.',
    studentPerk: 'Đăng ký miễn phí tặng ngay số từ/lượt viết bài hoàn chỉnh để sinh viên trải nghiệm quy trình phân tích dàn ý đối thủ Top 10 Google thực tế.',
    useCases: [
      'Nhập 1 từ khóa chính + danh sách từ khóa phụ để AIKTP tự động quét SERP Google.com.vn và đề xuất dàn ý H2, H3 bao phủ trọn vẹn ý định tìm kiếm (*Search Intent*).',
      'Viết bài dựa trên nguồn dữ liệu thật bạn cung cấp (dán link báo cáo hoặc thông số sản phẩm) để đảm bảo bài viết không bịa thông số kỹ thuật.',
      'Kiểm tra điểm chuẩn SEO (mật độ từ khóa, độ dài đoạn văn, Internal/External Link) và đồng bộ 1 chạm sang Website WordPress.'
    ],
    pros: [
      'Quy trình làm việc được may đo 100% cho quy chuẩn của các SEO Agency và đội nhóm Affiliate tại Việt Nam.',
      'Hỗ trợ nhiều mô hình ngôn ngữ mới nhất (Claude, GPT, Gemini) kết hợp tìm kiếm Google thời gian thực.'
    ],
    limitations: 'Tuyệt đối không nên bấm xuất bản hàng trăm bài tự động mà không đọc kiểm duyệt lại — hãy luôn bổ sung hình ảnh chụp thực tế và góc nhìn chuyên môn riêng để đạt chuẩn Google EEAT!',
    studentTip: 'Cách dùng AIKTP thông minh nhất của một SEOer hiện đại: Dùng nó để tự động hóa khâu **Nghiên cứu dàn ý Top 10 đối thủ & lên khung nháp 70%**, sau đó dành 30% công sức chèn thêm bảng so sánh, trích dẫn chuyên gia và trải nghiệm cá nhân để lên Top bền vững!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 513,
    slug: 'aiva-vn',
    name: 'AIVA',
    tagline: 'Hệ sinh thái Trợ lý AI Dựng sẵn & Nền tảng Tạo AI Agent Không cần Code cho Người Việt',
    excerpt: 'Nền tảng quy tụ hàng trăm Trợ lý AI đóng gói sẵn theo từng vị trí công việc (Chiến lược Marketing, Kịch bản TikTok, Quảng cáo, Bán hàng, Nhân sự) tại Việt Nam.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Có tài khoản trải nghiệm miễn phí các trợ lý cơ bản và khóa hướng dẫn ứng dụng AI tiếng Việt.',
    level: 'Cơ bản',
    officialUrl: 'https://aiva.vn/',
    tags: ['Vietnamese Prompt Library', 'No-Code AI Assistants', 'Marketing Templates', 'SME Productivity'],
    whatIsIt: 'AIVA là nền tảng trợ lý ảo trí tuệ nhân tạo phát triển cho người dùng và doanh nghiệp vừa và nhỏ Việt Nam, đóng gói sẵn hệ thống câu lệnh chuyên gia (*System Prompts*) thành hàng trăm "nhân sự trợ lý chuyên môn" để người mới bắt đầu chỉ cần điền thông tin sản phẩm là nhận ngay kế hoạch truyền thông, lịch đăng bài 30 ngày hoặc kịch bản livestream.',
    bestFor: 'Sinh viên năm 1–2 mới làm quen với AI trong Marketing muốn tham khảo cách cấu trúc đầu vào (Briefing) bài bản cho từng tác vụ truyền thông.',
    platforms: 'Web Browser, Chrome Extension',
    vietnameseSupport: '100% Tiếng Việt.',
    studentPerk: 'Tham khảo miễn phí cách phân chia danh mục tác vụ AI theo từng phòng ban doanh nghiệp Việt Nam.',
    useCases: [
      'Lên nhanh khung lịch nội dung mạng xã hội (Content Calendar 30 ngày) phân bổ đều các tuyến bài Giáo dục – Tương tác – Chuyển đổi.',
      'Tạo tự động 10 góc tiếp cận kịch bản Video ngắn (Content Angles) khác nhau cho cùng một sản phẩm.',
      'Tự tạo trợ lý AI nạp tài liệu riêng của nhóm mà không cần biết viết code.'
    ],
    pros: [
      'Thân thiện với người mới, toàn bộ biểu mẫu nhập liệu và gợi ý đều bằng tiếng Việt rõ ràng.',
      'Đa dạng mẫu trợ lý từ viết lách, tạo ảnh đến lập kế hoạch kinh doanh.'
    ],
    limitations: 'Các mô hình AI cao cấp nhất và lượt tạo không giới hạn nằm ở các gói nâng cấp trả phí.',
    studentTip: 'Khi sử dụng các trợ lý đóng gói sẵn, hãy quan sát xem nền tảng hỏi bạn những câu hỏi đầu vào nào (*Khách hàng mục tiêu là ai? Nỗi đau lớn nhất? Điểm khác biệt USP?*) — đó chính là cấu trúc vàng để bạn tự rèn kỹ năng **Prompt Engineering** độc lập!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 514,
    slug: 'locaai-vn',
    name: 'LocaAI (LocaTalk)',
    tagline: 'Nền tảng AI Dịch thuật Hội thoại Đa ngôn ngữ Thời gian thực "Make in Vietnam"',
    excerpt: 'Startup công nghệ ngôn ngữ Việt Nam phát triển giải pháp dịch thuật giọng nói – phụ đề trực tiếp đa chiều phục vụ Hội thảo Quốc tế, Giao thương Xuyên biên giới và Du lịch.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Freemium',
    pricingDetail: 'Cung cấp chế độ trải nghiệm dịch hội thoại trực tuyến và giải pháp linh hoạt cho sự kiện / doanh nghiệp.',
    level: 'Cơ bản',
    officialUrl: 'https://locaai.vn/',
    tags: ['Real-time AI Translation', 'Cross-border Event Tech', 'Multilingual Speech AI', 'Make in Viet Nam'],
    whatIsIt: 'LocaAI là startup đổi mới sáng tạo của Việt Nam chuyên sâu về công nghệ AI ngôn ngữ và ngữ cảnh địa phương, nổi bật với giải pháp **LocaTalk** giúp xóa bỏ rào cản ngôn ngữ trong các cuộc họp trực tuyến, hội chợ xúc tiến thương mại quốc tế (B2B Trade Fair) và đón tiếp khách du lịch nước ngoài tại Việt Nam.',
    bestFor: 'Sinh viên ngành Kinh doanh Quốc tế, Quản trị Sự kiện, Du lịch – Khách sạn hoặc Ban tổ chức hội thảo sinh viên có diễn giả khách mời quốc tế!',
    platforms: 'Web App, Mobile & Thiết bị thông dịch thông minh',
    vietnameseSupport: '100% Tiếng Việt tối ưu chiều Việt ↔ Anh / Trung / Nhật / Hàn và hàng chục ngôn ngữ khác.',
    studentPerk: 'Gợi mở giải pháp công nghệ chi phí hợp lý khi tổ chức các buổi Giao lưu Sinh viên Quốc tế (International Student Exchange) hoặc Webinar đa quốc gia.',
    useCases: [
      'Hiển thị phụ đề dịch thuật trực tiếp thời gian thực lên màn hình LED hội trường khi diễn giả nước ngoài thuyết trình cho sinh viên Việt Nam.',
      'Hỗ trợ giao tiếp tư vấn sản phẩm trôi chảy với khách mua hàng quốc tế tại các gian hàng triển lãm thương mại (Exhibition Booth).'
    ],
    pros: [
      'Tối ưu hóa tốt cách diễn đạt và danh từ riêng tiếng Việt khi dịch hai chiều sang các ngôn ngữ châu Á (Nhật, Hàn, Trung) và tiếng Anh.',
      'Đội ngũ phát triển trong nước hỗ trợ tùy biến từ điển thuật ngữ chuyên ngành của từng sự kiện.'
    ],
    limitations: 'Cần kết nối mạng Internet ổn định tại hội trường để đảm bảo tốc độ dịch tức thời không bị trễ nhịp.',
    studentTip: 'Trong đồ án môn **Marketing Du lịch / Tổ chức Hội nghị Triển lãm (MICE)** tại Việt Nam, việc ứng dụng công nghệ thuyết minh & phiên dịch AI thời gian thực theo điểm đến như LocaAI là điểm nhấn chuyển đổi số cực kỳ ấn tượng!',
    verifiedAt: '2026-11-25'
  },
  {
    id: 515,
    slug: 'kalapa-ai-ekyc',
    name: 'Kalapa (Big Data & AI)',
    tagline: 'Công ty Công nghệ Dữ liệu lớn, Định danh AI eKYC & Chống Gian lận Tài chính hàng đầu Việt Nam',
    excerpt: 'Đơn vị tiên phong về AI OCR, Sinh trắc học và Phân tích Dữ liệu thay thế (Alternative Data Scoring) đứng sau quy trình duyệt mở thẻ và chống trục lợi khuyến mãi của nhiều ngân hàng/Fintech VN.',
    category: 'Công cụ AI Việt Nam (Make-in-VN)',
    categorySlug: 'vietnam-ai-tools',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Cung cấp các công cụ AI OCR/Trích xuất văn bản trải nghiệm miễn phí trên web và giải pháp API cho doanh nghiệp Fintech, Bảo hiểm, Thương mại điện tử.',
    level: 'Nâng cao',
    officialUrl: 'https://kalapa.vn/',
    tags: ['Fintech AI Vietnam', 'Fraud Prevention', 'Alternative Credit Scoring', 'Vietnamese OCR'],
    whatIsIt: 'Kalapa là công ty công nghệ Dữ liệu lớn (Big Data) và Trí tuệ nhân tạo hàng đầu tại Việt Nam chuyên cung cấp giải pháp định danh khách hàng điện tử (eKYC), bóc tách dữ liệu giấy tờ tiếng Việt phức tạp (OCR y tế, hóa đơn, giấy đăng ký xe) và hệ thống chấm điểm chống gian lận tài chính (Anti-fraud).',
    bestFor: 'Sinh viên nghiên cứu mảng **Fintech Marketing, InsurTech (Bảo hiểm số)** và bài toán **Chống gian lận trục lợi khuyến mãi (Promo Abuse / Referral Fraud)** trong các chiến dịch tăng trưởng người dùng!',
    platforms: 'Web Demo Portal, Cloud API & Mobile SDK',
    vietnameseSupport: '100% Tiếng Việt (từng đạt giải cao tại các cuộc thi AI nhận diện tiếng Việt như Zalo AI Challenge / VLSP).',
    studentPerk: 'Kalapa mở một số tiện ích chuyển đổi ảnh chụp văn bản tiếng Việt sang chữ (VietOCR) và Demo công nghệ miễn phí cho cộng đồng sinh viên & kỹ sư trải nghiệm.',
    useCases: [
      'Giải bài toán nhức nhối nhất của **Growth Marketing tại Việt Nam**: Khi tung chiến dịch "Tặng 50.000đ cho người dùng mới tải App", làm sao ngăn chặn các đối tượng dùng 1.000 SIM rác gian lận rút cạn ngân sách Marketing? → Tích hợp AI eKYC & Anti-fraud của Kalapa!',
      'Tự động đọc hóa đơn khám chữa bệnh / hóa đơn mua sắm bằng AI OCR để hoàn tiền bảo hiểm hoặc tích điểm thưởng tức thì trong 1 phút.'
    ],
    pros: [
      'Đội ngũ kỹ sư AI/Data người Việt đạt nhiều thành tích học thuật và thực chiến xuất sắc trên dữ liệu bản địa.',
      'Bảo vệ trực tiếp hiệu quả ROI ngân sách thu hút khách hàng mới (Customer Acquisition Cost) cho doanh nghiệp số.'
    ],
    limitations: 'Là nền tảng công nghệ hạ tầng B2B nên người dùng cuối thường trải nghiệm gián tiếp bên trong ứng dụng Ngân hàng/Bảo hiểm.',
    studentTip: 'Điểm cộng cực lớn khi thi Case Study cho các siêu ứng dụng Ví điện tử / Ngân hàng số: Đừng chỉ đề xuất chương trình *"Giới thiệu bạn bè tặng tiền mặt"* một cách ngây thơ — hãy kèm ngay 1 slide **Quản trị rủi ro trục lợi khuyến mãi (Fraud Control bằng Device Fingerprinting & eKYC)** để chứng minh tư duy kinh doanh chín chắn!',
    verifiedAt: '2026-11-25'
  }
];

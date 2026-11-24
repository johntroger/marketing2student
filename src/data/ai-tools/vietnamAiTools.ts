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
  }
];

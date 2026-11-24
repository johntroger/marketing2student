import { MarketingTool } from '../../types';

export const designVideoAiTools: MarketingTool[] = [
  {
    id: 14,
    slug: 'canva',
    name: 'Canva',
    tagline: 'Nền tảng thiết kế ấn phẩm truyền thông, Slide & Video ngắn cho Marketer',
    excerpt: 'Công cụ thiết kế kéo thả phổ biến nhất cho sinh viên và đội ngũ Marketing: hàng nghìn mẫu Banner, Post Facebook, Infographic và Pitch Deck chuyên nghiệp.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí đầy đủ tính năng cơ bản; gói Pro trả phí hoặc hỗ trợ qua chương trình giáo dục/lớp học.',
    level: 'Cơ bản',
    officialUrl: 'https://www.canva.com/',
    tags: ['Design', 'Social Media', 'Presentation', 'Brand Kit'],
    whatIsIt: 'Canva là nền tảng thiết kế đồ họa trực tuyến và truyền thông thị giác tích hợp AI (Magic Studio), giúp Marketer không chuyên về thiết kế dễ dàng tạo ra bài đăng mạng xã hội, banner quảng cáo, infographic, video ngắn và bộ slide thuyết trình đồng bộ theo nhận diện thương hiệu.',
    bestFor: 'Mọi sinh viên Marketing, Social Media Executive và Content Creator cần sản xuất ấn phẩm truyền thông nhanh, đẹp và làm việc nhóm thời gian thực.',
    platforms: 'Web Browser, Windows/macOS Desktop App, iOS & Android',
    vietnameseSupport: 'Giao diện 100% tiếng Việt, kho phông chữ Việt hóa (Vietnamese Fonts) cực kỳ phong phú và chuẩn dấu.',
    studentPerk: 'Bản miễn phí cung cấp hàng trăm nghìn mẫu thiết kế; hỗ trợ làm việc nhóm trực tiếp trên cùng một bộ Slide thuyết trình hoặc bộ bài đăng Facebook.',
    useCases: [
      'Thiết kế quy chuẩn nhận diện thương hiệu (Logo, bảng mã màu HEX, cặp font chữ tiêu đề/nội dung) cho thương hiệu đồ án.',
      'Sản xuất trọn bộ bài đăng đa kênh (Carousel Instagram/Facebook, Banner Website, Poster sự kiện, Infographic) và Pitch Deck bảo vệ cuối kỳ.'
    ],
    quickSteps: [
      'Xác định bảng mã màu chủ đạo (3 màu theo quy tắc 60-30-10) và 2 phông chữ hỗ trợ tiếng Việt (1 font cho Heading, 1 font cho Body).',
      'Khởi tạo kích thước chuẩn theo kênh (ví dụ: 1080x1350px cho Facebook/IG Portrait, 1920x1080px cho Slide 16:9).',
      'Sử dụng lưới căn chỉnh (Guides & Rulers) để giữ khoảng trắng an toàn (Safe Zone) đồng nhất giữa các ấn phẩm.',
      'Xuất file chuẩn định dạng: PNG cho ảnh đăng mạng xã hội, PDF Standard cho tài liệu gửi email và MP4 cho video ngắn.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thiết kế 1 bộ bài đăng Carousel 5 ảnh trên Canva (kích thước 1080x1350px) giải thích 1 khái niệm hoặc kết quả nghiên cứu Marketing, đảm bảo sử dụng thống nhất đúng 1 cặp font chữ và 3 mã màu xuyên suốt.',
    pros: [
      'Đường cong học tập bằng 0, hỗ trợ font tiếng Việt phong phú và thư viện minh họa khổng lồ.',
      'Tính năng cộng tác nhóm thời gian thực (comment, sửa slide cùng lúc) và bộ công cụ xóa phông/tạo ảnh Magic Studio AI.'
    ],
    limitations: 'Nhiều tài nguyên đẹp thuộc gói Pro; nếu lạm dụng các template có sẵn mà không đổi màu/font sẽ dễ bị trùng lặp hình ảnh với nhiều trang khác.',
    studentTip: 'Hãy thiết lập quy chuẩn Brand Kit (mã màu HEX + font chữ cố định) ngay từ tuần đầu tiên để toàn bộ bài đăng và slide của nhóm đồng nhất như một thương hiệu thật.',
    alternatives: [
      { name: 'Figma', slug: 'figma', comparison: 'Figma chuyên nghiệp và chuẩn xác hơn hẳn khi thiết kế giao diện UI/UX Landing Page hoặc hệ thống Component.' },
      { name: 'CapCut', slug: 'capcut', comparison: 'CapCut mạnh hơn Canva khi dựng video ngắn TikTok/Reels có hiệu ứng âm thanh và phụ đề tự động.' }
    ],
    faqs: [
      {
        q: 'Nên chọn kích thước ảnh bao nhiêu trên Canva để đăng Facebook và Instagram hiển thị đẹp nhất?',
        a: 'Thay vì dùng ảnh vuông 1080x1080px truyền thống, hiện nay kích thước dọc 4:5 (1080x1350px) được tối ưu hiển thị chiếm nhiều diện tích màn hình điện thoại nhất trên cả Facebook lẫn Instagram Feed.'
      }
    ],
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 15,
    slug: 'capcut',
    name: 'CapCut',
    tagline: 'Trình dựng video ngắn TikTok / Reels / Shorts kèm phụ đề tự động AI',
    excerpt: 'Công cụ dựng video quốc dân cho Marketer hiện đại: cắt ghép nhanh, tự động tạo phụ đề tiếng Việt chuẩn xác, hiệu ứng chuyển cảnh bắt trend.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí các tính năng cắt ghép cốt lõi trên PC, Web và Mobile; các hiệu ứng nâng cao & tính năng AI đặc biệt thuộc gói Pro.',
    level: 'Cơ bản',
    officialUrl: 'https://www.capcut.com/',
    tags: ['Video Marketing', 'TikTok', 'Reels', 'Auto Captions'],
    whatIsIt: 'CapCut (thuộc ByteDance — công ty mẹ của TikTok) là phần mềm biên tập video ngắn đa nền tảng tích hợp AI, giúp Marketer cắt dựng clip dọc 9:16, lọc tạp âm, xóa phông nền và tạo phụ đề tiếng Việt tự động với tốc độ nhanh gấp nhiều lần các phần mềm dựng phim truyền thống.',
    bestFor: 'TikTok/Reels Creator, Social Media Marketer và nhóm sinh viên quay video TVC ngắn, UGC review sản phẩm hoặc phỏng vấn đường phố (Vox-pop).',
    platforms: 'Windows/macOS Desktop App (khuyên dùng), iOS & Android, Web Browser',
    vietnameseSupport: 'Giao diện 100% tiếng Việt; khả năng nhận diện giọng nói tạo phụ đề tiếng Việt tự động (Auto Captions) đạt độ chính xác rất cao.',
    studentPerk: 'Bản CapCut PC miễn phí cho phép dựng đa lớp (Multi-layer timeline), keyframe mượt mà và xuất video Full HD/4K 60fps không dính watermark.',
    useCases: [
      'Dựng video review sản phẩm, UGC (User-Generated Content) và mẫu quảng cáo video ngắn 15–60 giây cho TikTok, Reels, YouTube Shorts.',
      'Chèn phụ đề động (Dynamic Captions) và hiệu ứng âm thanh (SFX) để giữ chân người xem đang tắt tiếng trên mạng xã hội.'
    ],
    quickSteps: [
      'Quay các phân cảnh ngắn theo kịch bản phân cảnh (Storyboard: 3s Hook - 15s Nội dung chính - 5s CTA) và đưa vào CapCut PC.',
      'Cắt bỏ toàn bộ các khoảng nghỉ thừa giữa các câu nói (Jump-cut) để giữ nhịp độ video nhanh, gọn.',
      'Thêm chữ tiêu đề lớn (Hook Text) ở 3 giây đầu tiên kèm hiệu ứng âm thanh chuyển cảnh và nhạc nền âm lượng nhỏ (khoảng -18dB đến -25dB).',
      'Kiểm tra khung an toàn TikTok (tránh đặt chữ ở sát cạnh phải và đáy màn hình nơi có nút Tim/Caption) trước khi xuất file MP4 1080p.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Quay và dựng 1 video ngắn 30 giây giới thiệu giải pháp của dự án theo cấu trúc Hook - Problem - Solution - CTA trên CapCut, đảm bảo có phụ đề tiếng Việt rõ ràng trong vùng an toàn (Safe Zone) của giao diện TikTok.',
    pros: [
      'Tốc độ dựng video ngắn nhanh gấp 3–5 lần Premiere Pro đối với người không chuyên.',
      'Kho hiệu ứng âm thanh (SFX), nhãn dán, font chữ Việt hóa và nhạc xu hướng đồng bộ trực tiếp với hệ sinh thái TikTok.'
    ],
    limitations: 'Nhiều tính năng Auto Captions và hiệu ứng từng miễn phí nay đã chuyển sang nhãn Pro; trên bản Mobile cần chú ý xóa đoạn kết mặc định của CapCut.',
    studentTip: '3 giây đầu tiên (Visual & Audio Hook) quyết định hơn 70% tỷ lệ giữ chân người xem — luôn chèn chữ tiêu đề giải quyết đúng nỗi đau ngay khung hình đầu.',
    alternatives: [
      { name: 'Canva', slug: 'canva', comparison: 'Canva phù hợp hơn với video dạng slide thuyết trình hoặc motion graphic chữ đơn giản, còn CapCut vượt trội khi cắt ghép cảnh quay người thật.' }
    ],
    faqs: [
      {
        q: 'Làm sao để chữ phụ đề trong video CapCut không bị giao diện TikTok hoặc Reels che khuất?',
        a: 'Khi dựng video dọc 9:16 (1080x1920), hãy luôn đặt phụ đề ở vùng trung tâm hoặc khoảng 1/3 dưới nhưng cách đáy màn hình ít nhất 250–300px, và tránh sát lề phải nơi chứa dãy nút Tim, Bình luận, Chia sẻ.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 16,
    slug: 'figma',
    name: 'Figma',
    tagline: 'Thiết kế giao diện UI/UX Landing Page, Wireframe & Prototype tương tác',
    excerpt: 'Công cụ tiêu chuẩn công nghiệp để thiết kế wireframe Landing Page, luồng trải nghiệm người dùng (User Flow) và bộ UI Kit trước khi code web.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Có gói Starter miễn phí; Đặc biệt sinh viên và giảng viên được cấp gói Figma Education (tương đương gói Professional) miễn phí 100%.',
    level: 'Trung bình',
    officialUrl: 'https://www.figma.com/',
    tags: ['UI/UX', 'Landing Page', 'Wireframe', 'Prototype'],
    whatIsIt: 'Figma là nền tảng thiết kế giao diện người dùng (UI/UX), dựng khung sườn trang web (Wireframe), mô phỏng tương tác (Interactive Prototype) và bảng trắng cộng tác (FigJam) chạy trực tiếp trên đám mây, là tiêu chuẩn bắt buộc tại các công ty công nghệ và Digital Agency hiện nay.',
    bestFor: 'Sinh viên thiết kế bản mẫu Landing Page/App cho đồ án, Product Marketer, CRO Specialist và UI/UX Designer.',
    platforms: 'Web Browser, Windows/macOS Desktop App, Figma Mirror (iOS/Android)',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt hoàn hảo với toàn bộ kho Google Fonts.',
    studentPerk: 'Sinh viên đại học có email trường (`.edu.vn`) chỉ cần đăng ký tại `figma.com/education` là được nâng cấp lên gói Figma Professional và FigJam miễn phí 100% trong suốt thời gian học.',
    useCases: [
      'Lập bản đồ hành trình khách hàng (Customer Journey Map), sơ đồ Empathy Map và Brainstorm nhóm thời gian thực trên bảng trắng FigJam.',
      'Thiết kế Wireframe và giao diện Landing Page có thể bấm chuyển trang như thật (Prototype) để trình chiếu khi bảo vệ đồ án mà chưa cần tốn tiền thuê code.'
    ],
    quickSteps: [
      'Đăng ký tài khoản tại figma.com và xác minh tư cách sinh viên tại `figma.com/education` để mở khóa gói Pro miễn phí.',
      'Vào mục Figma Community tìm từ khóa "Landing Page Wireframe Kit" hoặc "Customer Journey Map" để nhân bản mẫu chuẩn về máy.',
      'Sử dụng tính năng Auto Layout và Components để sắp xếp các khối nội dung (Hero, Social Proof, Features, Pricing, FAQ, CTA) theo cấu trúc AIDA.',
      'Chuyển sang tab Prototype để nối các nút CTA với popup đăng ký, sau đó bấm nút Present (Play) để lấy link demo tương tác.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Sử dụng FigJam hoặc Figma để vẽ sơ đồ luồng chuyển đổi (User Flow) và bản Wireframe 2 phiên bản (Desktop 1440px & Mobile 390px) cho trang Landing Page chiến dịch của nhóm.',
    pros: [
      'Hoạt động mượt mà ngay trên trình duyệt, cả nhóm 5–10 sinh viên có thể cùng kéo thả và bình luận trực tiếp trên một màn hình.',
      'Kho tài nguyên Figma Community miễn phí hàng chục nghìn bộ UI Kit, Icon và mẫu Landing Page chuẩn UX.'
    ],
    limitations: 'Cần dành khoảng 2–3 giờ làm quen với khái niệm Frame và Auto Layout nếu trước đó chỉ quen dùng Canva.',
    studentTip: 'Đừng quên xác minh email `.edu.vn` để nhận gói Figma Education Pro miễn phí — dùng link Prototype tương tác khi thuyết trình sẽ gây ấn tượng cực mạnh với hội đồng chấm bài.',
    alternatives: [
      { name: 'Canva', slug: 'canva', comparison: 'Canva nhanh hơn cho ấn phẩm mạng xã hội, nhưng Figma vượt trội tuyệt đối khi thiết kế giao diện Website/App và Prototype bấm được.' }
    ],
    faqs: [
      {
        q: 'Làm sao để kích hoạt gói Figma Education miễn phí cho sinh viên Việt Nam?',
        a: 'Bạn chỉ cần đăng ký tài khoản Figma bằng email sinh viên do trường cấp (có đuôi `.edu.vn`), sau đó truy cập `figma.com/education/apply`, chọn đối tượng Student, điền tên trường đại học và ngành học là hệ thống duyệt tự động trong vài phút.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 91,
    slug: 'adobe-firefly',
    name: 'Adobe Firefly',
    tagline: 'Tạo ảnh AI & Chỉnh sửa mở rộng khung hình an toàn bản quyền thương mại',
    excerpt: 'Công cụ AI tạo sinh chính chủ Adobe giúp tạo ảnh quảng cáo, tách vật thể và mở rộng bối cảnh ảnh (Generative Fill) hợp pháp 100% cho thương hiệu.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Tặng 25 Generative Credits miễn phí mỗi tháng cho tài khoản Adobe miễn phí; tích hợp sẵn trong Creative Cloud.',
    level: 'Cơ bản',
    officialUrl: 'https://firefly.adobe.com/',
    tags: ['AI Image', 'Commercial Safe', 'Generative Fill', 'Adobe'],
    whatIsIt: 'Adobe Firefly là dòng mô hình AI tạo sinh hình ảnh và hiệu ứng chữ của Adobe, được huấn luyện trên kho ảnh bản quyền Adobe Stock và tài nguyên công cộng nên an toàn pháp lý tuyệt đối cho các chiến dịch quảng cáo thương mại.',
    bestFor: 'Brand Designer, Social Media Creator và sinh viên cần tạo ảnh minh họa sản phẩm hoặc mở rộng tỷ lệ ảnh từ ngang sang dọc 9:16.',
    platforms: 'Web Browser (firefly.adobe.com), tích hợp Photoshop & Illustrator',
    vietnameseSupport: 'Hỗ trợ gõ câu lệnh (Prompt) bằng tiếng Việt trực tiếp.',
    studentPerk: 'Mỗi tháng được cấp 25 Generative Credits miễn phí để tạo ảnh và dùng tính năng Generative Fill ngay trên trình duyệt web.',
    useCases: [
      'Thay đổi phông nền ảnh chụp sản phẩm thô thành bối cảnh studio sang trọng.',
      'Mở rộng ảnh vuông thành banner ngang 16:9 hoặc story dọc 9:16 mà không bị méo chủ thể.'
    ],
    pros: [
      'An toàn bản quyền thương mại (không vi phạm bản quyền nghệ sĩ).',
      'Hỗ trợ Prompt tiếng Việt và giao diện chỉnh góc máy, ánh sáng bằng nút bấm trực quan.'
    ],
    limitations: 'Bản miễn phí có gắn watermark nhỏ ở góc ảnh và giới hạn 25 credits/tháng.',
    studentTip: 'Dùng thanh chọn Reference Style & Lighting bên phải giao diện Firefly để chỉnh ánh sáng studio cho ảnh sản phẩm mà không cần nhớ từ khóa tiếng Anh dài.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 92,
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'Tạo hình ảnh nghệ thuật & Key Visual chiến dịch quảng cáo đẳng cấp nhất',
    excerpt: 'Công cụ AI tạo ảnh hàng đầu về thẩm mỹ ánh sáng, bố cục điện ảnh và concept sản phẩm cao cấp cho các chiến dịch Branding.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Các gói trả phí từ $10/tháng (Basic Plan); hiện đã có giao diện Web chính thức tại midjourney.com.',
    level: 'Trung bình',
    officialUrl: 'https://www.midjourney.com/',
    tags: ['Key Visual', 'AI Art', 'Branding', 'Concept Design'],
    whatIsIt: 'Midjourney là phòng lab AI tạo hình ảnh nổi tiếng nhất thế giới về độ tinh xảo nghệ thuật, ánh sáng nhiếp ảnh và khả năng giữ đồng nhất nhân vật/phong cách (`--sref`, `--cref`) cho các Key Visual quảng cáo.',
    bestFor: 'Art Director, Creative Agency và Marketer xây dựng Moodboard hoặc Key Visual chiến dịch truyền thông.',
    platforms: 'Web Browser (midjourney.com), Discord',
    vietnameseSupport: 'Nên viết Prompt bằng tiếng Anh để đạt chất lượng chi tiết cao nhất.',
    studentPerk: 'Có thể học hỏi hàng triệu câu lệnh (Prompts) miễn phí trong mục Explore trên web để nâng cao tư duy mô tả hình ảnh.',
    useCases: [
      'Dựng Moodboard ý tưởng hình ảnh chủ đạo (Key Visual) cho bài Pitching chiến dịch IMC.',
      'Tạo ảnh concept bao bì sản phẩm hoặc bối cảnh nhiếp ảnh quảng cáo.'
    ],
    pros: [
      'Chất lượng thẩm mỹ, ánh sáng và chất liệu ảnh vượt trội.',
      'Giao diện web mới rất dễ dùng với thanh trượt tùy chỉnh thông số.'
    ],
    limitations: 'Hiện chủ yếu yêu cầu gói trả phí từ $10/tháng.',
    studentTip: 'Nếu chưa mua gói Midjourney, bạn có thể vào mục Explore để học cấu trúc từ khóa ánh sáng, ống kính máy ảnh rồi áp dụng sang Leonardo AI hoặc Ideogram miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 93,
    slug: 'ideogram-ai',
    name: 'Ideogram',
    tagline: 'AI tạo Poster, Logo & Hình ảnh có chèn chữ (Typography) chuẩn xác nhất',
    excerpt: 'Khắc phục điểm yếu viết sai chữ của hầu hết AI khác: Ideogram tạo được Poster, áo thun, Logo và Banner có chữ đúng chính tả.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng hạn mức Credits làm mới hàng tuần (đủ tạo hàng chục ảnh miễn phí); gói Plus từ ~$16/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://ideogram.ai/',
    tags: ['Typography AI', 'Poster', 'Logo Concept', 'Banner'],
    whatIsIt: 'Ideogram là công cụ tạo ảnh AI chuyên biệt nổi tiếng với khả năng hiển thị văn bản (Typography) sắc nét, đúng chính tả ngay bên trong hình ảnh thiết kế như poster sự kiện, logo và bìa sách.',
    bestFor: 'Social Media Designer và sinh viên cần tạo nhanh ý tưởng Logo, Poster sự kiện hoặc ảnh trích dẫn (Quote).',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Tạo chữ tiếng Anh cực chuẩn; chữ tiếng Việt có dấu cần kiểm tra lại hoặc xóa sửa thêm trên Canva.',
    studentPerk: 'Cho phép tạo ảnh miễn phí hàng tuần với nhiều tỷ lệ khung hình khác nhau và tham khảo kho ảnh cộng đồng.',
    useCases: [
      'Brainstorm 10 phương án Logo hoặc Mascot thương hiệu cho dự án khởi nghiệp sinh viên.',
      'Tạo nền Poster sự kiện kèm tiêu đề chính bắt mắt.'
    ],
    pros: [
      'Xử lý chữ trong ảnh (Text Rendering) tốt nhất phân khúc miễn phí.',
      'Tính năng Magic Prompt tự động mở rộng câu lệnh ngắn thành mô tả chi tiết.'
    ],
    limitations: 'Các dấu phụ tiếng Việt (như ă, â, ơ, ư) đôi khi vẫn bị lỗi nhẹ nếu không gõ dấu hoặc chỉnh lại trên Canva.',
    studentTip: 'Đặt đoạn chữ bạn muốn hiện trên ảnh vào trong dấu ngoặc kép `"..."` khi viết Prompt trên Ideogram để AI giữ đúng chính tả.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 94,
    slug: 'leonardo-ai',
    name: 'Leonardo.ai',
    tagline: 'Studio tạo ảnh AI miễn phí 150 tokens/ngày với nhiều mô hình chuyên dụng',
    excerpt: 'Tặng 150 Fast Tokens miễn phí mỗi ngày, cho phép tạo ảnh sản phẩm, nhân vật 3D, minh họa vector và giữ đồng nhất phong cách cực tốt.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Tặng 150 Fast Tokens miễn phí làm mới mỗi ngày (~30–50 ảnh/ngày); các gói trả phí từ $10/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://leonardo.ai/',
    tags: ['AI Image', 'Free Daily Credits', '3D Illustration', 'Product Mockup'],
    whatIsIt: 'Leonardo.ai (thuộc hệ sinh thái Canva) là nền tảng studio tạo hình ảnh và video AI cung cấp hạn mức miễn phí hàng ngày hào phóng cùng nhiều bộ lọc phong cách (Presets) như Nhiếp ảnh, 3D, Anime, Thiết kế đồ họa.',
    bestFor: 'Sinh viên Marketing cần tạo lượng lớn hình ảnh minh họa bài đăng, nhân vật 3D (Mascot) và bối cảnh sản phẩm miễn phí.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Nên viết Prompt tiếng Anh (có thể nhờ ChatGPT dịch) để ra ảnh sắc nét nhất.',
    studentPerk: '150 tokens miễn phí mỗi ngày là quá đủ để sinh viên sản xuất toàn bộ ảnh minh họa cho một chiến dịch truyền thông.',
    useCases: [
      'Tạo hình ảnh Mascot 3D hoặc bộ minh họa đồng nhất phong cách cho bài viết blog và slide.',
      'Dùng tính năng Realtime Canvas phác thảo nhanh ý tưởng bố cục banner.'
    ],
    pros: [
      'Hạn mức miễn phí 150 tokens/ngày rất hào phóng.',
      'Có sẵn nhiều model tinh chỉnh đẹp (Phoenix, Kino XL, AlbedoBase XL).'
    ],
    limitations: 'Ảnh tạo trên gói Free hiển thị công khai trên thư viện cộng đồng.',
    studentTip: 'Sử dụng tính năng "Prompt Enhance" tích hợp sẵn trên Leonardo.ai để biến mô tả ngắn thành câu lệnh chuyên nghiệp.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 95,
    slug: 'heygen',
    name: 'HeyGen',
    tagline: 'Tạo video MC ảo (AI Avatar) thuyết trình & Lồng tiếng đa ngôn ngữ khớp khẩu hình',
    excerpt: 'Biến kịch bản văn bản thành video có người dẫn chương trình AI nói tiếng Việt tự nhiên, hoặc dịch video quảng cáo sang 40+ ngôn ngữ khớp môi.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo tối đa 3 video/tháng (độ dài tối đa 3 phút/video); gói Creator từ ~$24–$29/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.heygen.com/',
    tags: ['AI Avatar', 'Video Spokesperson', 'Dubbing', 'Video Marketing'],
    whatIsIt: 'HeyGen là nền tảng tạo video nhân vật ảo (AI Spokesperson) và dịch video đa ngôn ngữ (Video Translate) hàng đầu, cho phép gõ văn bản để tạo video người thật nói chuyện tự nhiên với khẩu hình miệng khớp chuẩn xác.',
    bestFor: 'Video Marketer, giảng viên tạo bài giảng ngắn, doanh nghiệp xuất khẩu cần dịch video giới thiệu sản phẩm sang tiếng Anh/Nhật/Hàn.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ giọng đọc tiếng Việt (cả giọng Bắc & Nam) và dịch video tiếng Việt sang tiếng nước ngoài khớp khẩu hình.',
    studentPerk: 'Tài khoản miễn phí tặng 3 lượt tạo video/tháng để sinh viên làm video MC giới thiệu dự án hoặc bản tin Marketing ngắn.',
    useCases: [
      'Tạo video MC ảo giới thiệu tính năng sản phẩm mới trên Landing Page mà không cần thuê studio quay phim.',
      'Dùng tính năng Video Translate chuyển video thuyết trình tiếng Việt của nhóm sang tiếng Anh chuẩn giọng bản xứ.'
    ],
    pros: [
      'Khẩu hình miệng (Lip-sync) và biểu cảm khuôn mặt tự nhiên nhất thị trường.',
      'Kho Avatar đa dạng bối cảnh văn phòng, studio, đời thường.'
    ],
    limitations: 'Bản miễn phí có gắn logo HeyGen ở góc dưới video và giới hạn 3 video/tháng.',
    studentTip: 'Hãy chọn khung hình dọc 9:16 và chèn slide sản phẩm làm phông nền phía sau MC ảo để video trông như bản tin chuyên nghiệp.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 96,
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Chuyển văn bản thành giọng nói AI (Text-to-Speech) truyền cảm như người thật',
    excerpt: 'Tạo giọng đọc Voice-over chuyên nghiệp cho TVC, video TikTok, Podcast và lồng tiếng đa ngôn ngữ với cảm xúc tự nhiên.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng 10.000 ký tự/tháng (~10 phút âm thanh); gói Starter giá rẻ chỉ từ $5/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://elevenlabs.io/',
    tags: ['Text-to-Speech', 'Voiceover', 'Audio AI', 'Podcast'],
    whatIsIt: 'ElevenLabs là công cụ tổng hợp giọng nói AI (AI Voice Generator) hàng đầu thế giới, hỗ trợ chuyển văn bản thành giọng đọc tự nhiên, có ngữ điệu nhấn nhá, tạo hiệu ứng âm thanh (Sound Effects) và nhân bản giọng nói.',
    bestFor: 'Video Creator làm TVC/Reels, Podcaster và Marketer cần lồng tiếng cho video quảng cáo không lộ mặt.',
    platforms: 'Web Browser (Cloud), API',
    vietnameseSupport: 'Mô hình Eleven Multilingual v2 đọc tiếng Việt có ngữ điệu, ngắt nghỉ rất tự nhiên.',
    studentPerk: '10.000 ký tự miễn phí mỗi tháng thừa sức lồng tiếng cho 5–8 video quảng cáo ngắn 60 giây.',
    useCases: [
      'Tạo giọng đọc Voice-over trầm ấm hoặc năng động cho video TVC 30 giây của đồ án.',
      'Tạo hiệu ứng âm thanh (Sound Effects) độc quyền bằng câu lệnh văn bản.'
    ],
    pros: [
      'Chất lượng giọng đọc cảm xúc vượt xa các công cụ đọc văn bản truyền thống.',
      'Điều chỉnh được độ ổn định (Stability) và độ biểu cảm của giọng.'
    ],
    limitations: 'Bản miễn phí yêu cầu ghi nguồn ElevenLabs nếu xuất bản thương mại công khai.',
    studentTip: 'Thêm dấu phẩy, dấu chấm hoặc dấu gạch ngang `—` vào kịch bản trước khi đưa vào ElevenLabs để giọng AI ngắt nghỉ đúng nhịp truyền cảm.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 97,
    slug: 'runway-ml',
    name: 'Runway (Gen-3 / Gen-4)',
    tagline: 'Tạo video từ văn bản/hình ảnh (Text/Image-to-Video) & Xóa vật thể trong video',
    excerpt: 'Công cụ AI sản xuất video điện ảnh hàng đầu dùng để biến ảnh tĩnh sản phẩm thành clip chuyển động quảng cáo mượt mà.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí tặng 125 credits một lần khi đăng ký (~25 giây video AI); gói Standard từ ~$12–$15/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://runwayml.com/',
    tags: ['AI Video', 'Image-to-Video', 'VFX', 'Creative'],
    whatIsIt: 'Runway là nền tảng sáng tạo video AI thế hệ mới, nổi tiếng với dòng mô hình Gen-3/Gen-4 giúp biến ảnh sản phẩm tĩnh thành cảnh quay chuyển động camera chuyên nghiệp (Zoom, Pan, Orbit) và bộ công cụ xóa vật thể khỏi video.',
    bestFor: 'Video Marketer, Creative Director làm TVC ý tưởng và sinh viên muốn tạo B-roll quảng cáo ấn tượng.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Dùng Prompt tiếng Anh để điều khiển góc máy chính xác.',
    studentPerk: '125 credits miễn phí ban đầu đủ để tạo 4–5 đoạn clip B-roll 5 giây chất lượng cao ghép vào TVC đồ án.',
    useCases: [
      'Biến 1 bức ảnh chụp chai nước hoa/mỹ phẩm tĩnh thành video quay chậm có hiệu ứng ánh sáng và giọt nước chuyển động.',
      'Xóa người thừa hoặc vật thể không mong muốn trong cảnh quay ngoại cảnh.'
    ],
    pros: [
      'Kiểm soát chuyển động camera (Camera Control) rất mượt mà và chân thực.',
      'Tích hợp hơn 30 công cụ AI Magic Tools chỉnh sửa video ngay trên trình duyệt.'
    ],
    limitations: '125 credits miễn phí chỉ cấp một lần lúc mới tạo tài khoản (không làm mới hàng tháng).',
    studentTip: 'Thay vì gõ văn bản từ đầu (Text-to-Video), hãy tạo ảnh đẹp trước rồi dùng chế độ **Image-to-Video** trên Runway để kiểm soát chuẩn 100% hình dáng sản phẩm.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 98,
    slug: 'kling-ai',
    name: 'Kling AI',
    tagline: 'Tạo video AI chuyển động vật lý chân thực & Thử đồ ảo (AI Virtual Try-On)',
    excerpt: 'Công cụ tạo video AI miễn phí credits hàng ngày/hàng tháng rất hào phóng, hỗ trợ biến ảnh thành video mượt và tính năng thử trang phục cho shop thời trang.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Tặng Credits miễn phí định kỳ cho tài khoản Free để tạo video 5 giây; có các gói trả phí nâng cao tốc độ.',
    level: 'Cơ bản',
    officialUrl: 'https://klingai.com/',
    tags: ['AI Video', 'Virtual Try-On', 'Fashion E-commerce', 'Image-to-Video'],
    whatIsIt: 'Kling AI là nền tảng tạo video và hình ảnh AI nổi bật với khả năng mô phỏng chuyển động vật lý tự nhiên, tạo video dài 5–10 giây từ ảnh tĩnh và tính năng Virtual Try-On (mặc thử quần áo lên người mẫu ảo).',
    bestFor: 'Sinh viên làm dự án Thời trang / Mỹ phẩm / F&B cần quay video lookbook hoặc video quảng cáo sản phẩm chi phí 0 đồng.',
    platforms: 'Web Browser (klingai.com)',
    vietnameseSupport: 'Dùng Prompt tiếng Anh.',
    studentPerk: 'Có hạn mức credits miễn phí định kỳ giúp sinh viên thực hành tạo video quảng cáo không tốn tiền.',
    useCases: [
      'Dùng tính năng AI Try-On đưa mẫu áo thiết kế của nhóm lên người mẫu ảo mà không cần thuê mẫu chụp lookbook.',
      'Tạo video chuyển động 5 giây từ ảnh sản phẩm tĩnh.'
    ],
    pros: [
      'Chuyển động nhân vật và trang phục rất tự nhiên, ít bị biến dạng tay chân.',
      'Tính năng Virtual Try-On cực kỳ thực tế cho ngành thời trang.'
    ],
    limitations: 'Hàng đợi xử lý video ở bản miễn phí đôi khi hơi lâu vào giờ cao điểm.',
    studentTip: 'Nếu nhóm bạn làm đồ án thương hiệu thời trang hoặc phụ kiện, tính năng Virtual Try-On + Image-to-Video của Kling AI sẽ giúp tiết kiệm toàn bộ chi phí thuê studio.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 99,
    slug: 'opus-clip',
    name: 'OpusClip',
    tagline: 'Cắt tự động 1 video dài (Podcast/Webinar) thành 10+ clip ngắn TikTok/Reels có điểm Viral',
    excerpt: 'AI tự tìm các đoạn cao trào trong video dài, tự động đóng khung mặt người nói (Auto-reframe 9:16), chèn phụ đề và chấm điểm tiềm năng Viral.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí xử lý 60 phút video/tháng (kèm watermark); gói Starter từ ~$15/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.opus.pro/',
    tags: ['Video Repurposing', 'Short Video', 'Podcast Clips', 'TikTok'],
    whatIsIt: 'OpusClip là công cụ tái chế nội dung video (Video Repurposing) bằng AI, tự động cắt gọt các video talkshow, webinar hoặc phỏng vấn dài thành hàng loạt video ngắn dọc 9:16 kèm phụ đề động và điểm đánh giá độ hấp dẫn (Virality Score).',
    bestFor: 'Podcast Creator, Personal Branding Marketer và nhóm sinh viên làm chiến dịch Content Repurposing đa kênh.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ nhận diện và tạo phụ đề tiếng Việt.',
    studentPerk: '60 phút xử lý miễn phí mỗi tháng đủ để cắt toàn bộ video phỏng vấn chuyên gia hoặc buổi talkshow của CLB thành 15–20 clip ngắn.',
    useCases: [
      'Biến 1 video tọa đàm dài 40 phút trên YouTube thành 10 video Reels/Shorts đăng rải đều cả tháng.',
      'Tham khảo lý do AI chấm điểm Hook để cải thiện cách mở đầu câu chuyện.'
    ],
    pros: [
      'Tiết kiệm hàng chục giờ xem lại và cắt thủ công video dài.',
      'Tự động giữ khuôn mặt người nói luôn nằm chính giữa khung hình dọc.'
    ],
    limitations: 'Bản miễn phí có watermark và giới hạn thời gian lưu trữ video.',
    studentTip: 'Áp dụng chiến lược "1 nội dung trụ cột -> 10 nội dung vệ tinh": quay 1 buổi chia sẻ 30 phút rồi đưa qua OpusClip để phủ sóng TikTok/Reels.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 100,
    slug: 'descript',
    name: 'Descript',
    tagline: 'Chỉnh sửa Video & Podcast dễ như sửa văn bản Word (Xóa chữ là cắt video)',
    excerpt: 'Tự động bóc băng chữ (Transcript), xóa các từ thừa "à, ừm" chỉ bằng 1 cú bấm và chỉnh sửa video bằng cách xóa đoạn văn bản.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng 1 giờ chuyển giọng nói thành văn bản/tháng và xuất video 720p; gói Hobbyist từ ~$12–$16/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.descript.com/',
    tags: ['Podcast Editing', 'Transcript', 'Video Editor', 'Studio Sound'],
    whatIsIt: 'Descript là trình biên tập âm thanh và video đột phá cho phép chỉnh sửa video thông qua văn bản bóc băng (Text-based Editing), tích hợp tính năng lọc tiếng ồn phòng thu (Studio Sound) và căn chỉnh ánh mắt nhìn thẳng camera (Eye Contact).',
    bestFor: 'Podcaster, YouTuber giảng dạy, Marketer quay video chia sẻ kiến thức và sinh viên bóc băng phỏng vấn sâu.',
    platforms: 'Windows, macOS Desktop App, Web Browser',
    vietnameseSupport: 'Hỗ trợ bóc băng (Transcribe) tiếng Việt.',
    studentPerk: 'Tính năng Studio Sound giúp biến âm thanh thu bằng mic điện thoại trong phòng ồn thành giọng thu âm phòng thu miễn phí trong hạn mức giờ Free.',
    useCases: [
      'Bóc băng tự động file ghi âm phỏng vấn khách hàng để đưa vào phần phân tích định tính.',
      'Cắt bỏ các đoạn nói vấp trong video thuyết trình bằng cách bôi đen chữ và bấm Delete.'
    ],
    pros: [
      'Tính năng Studio Sound khử tiếng ồn quạt, tiếng xe cộ cực kỳ ấn tượng.',
      'Sửa video theo văn bản nhanh hơn kéo thanh timeline truyền thống khi làm video nói chuyện.'
    ],
    limitations: 'Bản miễn phí giới hạn 1 giờ xử lý âm thanh/tháng.',
    studentTip: 'Nếu nhóm quay video thuyết trình ở nơi hơi ồn, hãy chạy qua tính năng Studio Sound của Descript trước khi ghép vào video cuối.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 101,
    slug: 'removebg',
    name: 'Remove.bg',
    tagline: 'Tách nền ảnh sản phẩm & chân dung tự động trong 3 giây chuẩn từng sợi tóc',
    excerpt: 'Công cụ tách phông nền tự động nhanh nhất thế giới: kéo thả ảnh sản phẩm hoặc ảnh thành viên nhóm vào là có ngay ảnh PNG nền trong suốt.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% không giới hạn lượt tách ảnh ở độ phân giải xem trước (đủ nét cho bài đăng Facebook/Slide); ảnh HD gốc tính theo Credits.',
    level: 'Cơ bản',
    officialUrl: 'https://www.remove.bg/',
    tags: ['Background Remover', 'E-commerce Photo', 'PNG', 'Quick Tool'],
    whatIsIt: 'Remove.bg là công cụ AI chuyên dụng tách chủ thể (người, sản phẩm, xe cộ) ra khỏi phông nền chỉ trong 3–5 giây với độ chính xác biên ảnh rất cao.',
    bestFor: 'Chủ shop TMĐT, Social Media Intern và sinh viên làm slide/poster cần tách nền ảnh sản phẩm nhanh.',
    platforms: 'Web Browser, Windows/macOS, Photoshop/Figma Plugin',
    vietnameseSupport: 'Giao diện cực kỳ đơn giản, hỗ trợ tiếng Việt.',
    studentPerk: 'Miễn phí tách nền không giới hạn ảnh kích thước tiêu chuẩn (khoảng 600px) không cần đăng nhập.',
    useCases: [
      'Tách nền ảnh sản phẩm chụp bằng điện thoại để đưa lên banner khuyến mãi trên Canva.',
      'Tách nền ảnh chân dung thành viên nhóm để làm slide giới thiệu đội ngũ đồng bộ.'
    ],
    pros: [
      'Nhanh nhất, sạch biên ảnh nhất và không cần đăng ký tài khoản cho kích thước chuẩn.',
      'Có sẵn nút thay nền màu trơn hoặc làm mờ nền ngay trên web.'
    ],
    limitations: 'Tải ảnh độ phân giải gốc Full HD yêu cầu đăng ký tài khoản (tặng 1 ảnh HD miễn phí) hoặc mua credits.',
    studentTip: 'Mẹo nhỏ: Nếu cần tách nền ảnh độ phân giải Full HD hoàn toàn miễn phí không giới hạn, bạn có thể dùng Photopea hoặc công cụ tách nền tích hợp sẵn trên Microsoft Designer / CapCut PC.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 102,
    slug: 'photopea',
    name: 'Photopea',
    tagline: 'Photoshop miễn phí 100% chạy trực tiếp trên trình duyệt (Mở được file PSD/AI)',
    excerpt: 'Không cần cài đặt Photoshop nặng máy hay dùng bản lậu: Photopea mở được file .PSD, .AI, .XD, hỗ trợ Layer, Mask và Mockup ngay trên Chrome.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% toàn bộ tính năng chỉnh sửa ảnh chuyên nghiệp (có quảng cáo nhỏ bên lề phải).',
    level: 'Trung bình',
    officialUrl: 'https://www.photopea.com/',
    tags: ['Photoshop Online', 'PSD', 'Mockup', 'Graphic Design'],
    whatIsIt: 'Photopea là trình chỉnh sửa đồ họa raster và vector chạy hoàn toàn trên trình duyệt web với giao diện và phím tắt giống tới 95% Adobe Photoshop, mở và xuất trực tiếp định dạng `.PSD`, `.AI`, `.PDF`, `.WEBP`.',
    bestFor: 'Sinh viên Marketing cần thay chữ vào file Mockup `.PSD` (áo thun, hộp sản phẩm, túi giấy) tải từ Freepik mà máy không cài Photoshop.',
    platforms: 'Web Browser (chạy cục bộ trên trình duyệt)',
    vietnameseSupport: 'Hỗ trợ chọn ngôn ngữ Tiếng Việt và tải thêm font chữ Việt hóa từ máy tính lên để gõ.',
    studentPerk: 'Miễn phí 100%, không cần tạo tài khoản, hợp pháp hoàn toàn và chạy mượt trên cả laptop cấu hình yếu.',
    useCases: [
      'Mở file Mockup bao bì sản phẩm `.PSD` tải về từ mạng, bấm đúp vào Smart Object để thay logo thương hiệu của nhóm vào.',
      'Nén và chuyển đổi hàng loạt ảnh banner sang định dạng `.webp` nhẹ nhất cho website SEO.'
    ],
    pros: [
      'Mở được file thiết kế chuyên nghiệp PSD/AI ngay lập tức không cần cài phần mềm.',
      'Phím tắt giống hệt Photoshop.'
    ],
    limitations: 'Có cột quảng cáo nhỏ ở bên phải màn hình bản miễn phí.',
    studentTip: 'Khi làm bộ nhận diện thương hiệu đồ án, hãy tải Mockup hộp/ly/áo `.PSD` miễn phí trên Freepik rồi mở bằng Photopea để lồng logo của nhóm vào chỉ trong 2 phút.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 103,
    slug: 'adobe-express',
    name: 'Adobe Express',
    tagline: 'Đối thủ của Canva từ nhà Adobe với kho font đẹp & công cụ nén/chuyển đổi miễn phí',
    excerpt: 'Thiết kế nhanh bài đăng mạng xã hội, chuyển đổi Video sang GIF, nén ảnh, ghép PDF miễn phí ngay trên trình duyệt với chất lượng Adobe.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free rất mạnh gồm hàng nghìn mẫu thiết kế, bộ Quick Actions (xóa nền, cắt video, đổi đuôi file) miễn phí vĩnh viễn.',
    level: 'Cơ bản',
    officialUrl: 'https://www.adobe.com/express/',
    tags: ['Quick Actions', 'Social Design', 'Adobe', 'PDF Tools'],
    whatIsIt: 'Adobe Express là nền tảng thiết kế nhanh của Adobe tích hợp AI Firefly và bộ công cụ Quick Actions miễn phí (xóa nền, đổi kích thước ảnh, chuyển MP4 sang GIF, ghép/nén PDF).',
    bestFor: 'Marketer cần bộ công cụ xử lý nhanh ảnh/video/PDF an toàn trên web và thích phong cách thiết kế của Adobe.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt với kho Adobe Fonts đẹp.',
    studentPerk: 'Bộ Quick Actions (xóa nền ảnh Full HD, cắt video, ghép PDF) hoàn toàn miễn phí không dính watermark.',
    useCases: [
      'Xóa nền ảnh sản phẩm giữ nguyên độ phân giải cao miễn phí qua Quick Actions.',
      'Chuyển đoạn clip sản phẩm ngắn sang ảnh động GIF để nhúng vào Email Marketing.'
    ],
    pros: [
      'Tách nền ảnh miễn phí giữ được độ phân giải cao hơn Remove.bg bản Free.',
      'Đồng bộ mượt nếu bạn có dùng file từ Photoshop/Illustrator.'
    ],
    limitations: 'Kho mẫu thiết kế mang phong cách Việt Nam chưa nhiều bằng Canva.',
    studentTip: 'Bookmark trang `adobe.com/express/feature/image/remove-background` để tách nền ảnh sản phẩm nét căng hoàn toàn miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 104,
    slug: 'kittl',
    name: 'Kittl',
    tagline: 'Thiết kế Logo, Bao bì, Áo thun & Typography nghệ thuật cực nhanh',
    excerpt: 'Nổi tiếng với các mẫu chữ nghệ thuật (Typography), nhãn dán sản phẩm, logo cổ điển và bao bì (Packaging) đẹp hơn hẳn mẫu thông thường.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo tối đa 20 dự án, tải ảnh độ phân giải tiêu chuẩn và dùng AI credits miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://www.kittl.com/',
    tags: ['Logo Design', 'Packaging', 'Typography', 'Print on Demand'],
    whatIsIt: 'Kittl là công cụ thiết kế đồ họa trực tuyến chuyên sâu về Typography, nhãn mác bao bì, logo và thiết kế in ấn (Print-on-Demand) với khả năng uốn chữ và đổ bóng 3D trực quan.',
    bestFor: 'Sinh viên thiết kế Logo, tem nhãn bao bì sản phẩm F&B/Mỹ phẩm hoặc làm dự án Print-on-Demand (POD).',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ tải font Việt hóa hoặc dùng các font hỗ trợ tiếng Việt có sẵn.',
    studentPerk: 'Gói Free đủ để thiết kế trọn bộ Logo và tem nhãn dán lên bao bì sản phẩm mẫu cho đồ án.',
    useCases: [
      'Thiết kế tem nhãn dán chai trà sữa, hộp mỹ phẩm hoặc túi cà phê cho dự án khởi nghiệp.',
      'Tạo Logo dạng huy hiệu (Badge) hoặc chữ cách điệu chuyên nghiệp trong 10 phút.'
    ],
    pros: [
      'Hiệu ứng uốn chữ, tạo khối và chất liệu giấy cổ điển cực kỳ đẹp.',
      'Tích hợp sẵn tính năng xem trước sản phẩm Mockup.'
    ],
    limitations: 'Xuất file Vector SVG sắc nét hoặc ảnh độ phân giải in ấn lớn cần gói Pro.',
    studentTip: 'Nếu nhóm bạn làm sản phẩm vật lý (đồ uống, mỹ phẩm, thời trang), hãy tìm mẫu nhãn mác trên Kittl để thiết kế bao bì đẹp vượt trội.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 105,
    slug: 'veed-io',
    name: 'VEED.io',
    tagline: 'Biên tập video Marketing online, Tạo phụ đề & Cắt ghép nhanh trên trình duyệt',
    excerpt: 'Không cần tải phần mềm nặng máy: VEED.io giúp cắt video, thêm thanh tiến trình (Progress Bar), dịch phụ đề và ghi hình màn hình ngay trên web.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí xuất video dưới 10 phút độ phân giải 720p (có watermark); gói Lite từ ~$12/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.veed.io/',
    tags: ['Online Video Editor', 'Subtitles', 'Screen Recorder', 'Social Video'],
    whatIsIt: 'VEED.io là trình biên tập video trực tuyến tích hợp AI hỗ trợ quay màn hình, tự động tạo và dịch phụ đề, chèn thanh tiến trình và sóng âm thanh cho video mạng xã hội.',
    bestFor: 'Marketer cần quay video hướng dẫn sử dụng sản phẩm (Product Demo) hoặc dịch phụ đề video tiếng Anh sang tiếng Việt nhanh trên web.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ nhận diện và dịch phụ đề tiếng Việt.',
    studentPerk: 'Có bộ công cụ miễn phí cắt/nén/chuyển đổi định dạng video nhanh ngay trên trình duyệt.',
    useCases: [
      'Quay màn hình vừa hướng dẫn sử dụng Landing Page/App vừa có khung mặt người nói ở góc.',
      'Nén dung lượng file video thuyết trình MP4 nặng xuống dưới 25MB để gửi qua Email/LMS.'
    ],
    pros: [
      'Chạy trực tiếp trên mọi máy tính yếu mà không cần cài đặt.',
      'Công cụ nén video (Video Compressor) giữ chất lượng tốt.'
    ],
    limitations: 'Bản miễn phí gắn watermark VEED.io khi xuất video chỉnh sửa.',
    studentTip: 'Dùng công cụ Video Compressor miễn phí của VEED.io khi file video bài tập của nhóm quá nặng không nộp lên hệ thống LMS của trường được.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 106,
    slug: 'suno-ai',
    name: 'Suno AI',
    tagline: 'Sáng tác nhạc nền & Bài hát quảng cáo (Brand Jingle) bằng AI trong 30 giây',
    excerpt: 'Chỉ cần gõ lời bài hát hoặc mô tả phong cách nhạc, Suno tạo ra ca khúc hoàn chỉnh có giọng hát tiếng Việt cực mượt để làm nhạc nền chiến dịch.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí tặng 50 credits mỗi ngày (tạo được ~10 bài hát/ngày); gói Pro từ $8–$10/tháng (được quyền thương mại).',
    level: 'Cơ bản',
    officialUrl: 'https://suno.com/',
    tags: ['AI Music', 'Brand Jingle', 'Audio Marketing', 'TikTok Sound'],
    whatIsIt: 'Suno AI là nền tảng tạo âm nhạc bằng AI hàng đầu thế giới, có khả năng sáng tác cả giai điệu, phối khí và giọng hát đa thể loại (Pop, Rap, Acoustic, Lo-fi, EDM) chỉ từ một đoạn lời bài hát.',
    bestFor: 'Creative Planner tạo nhạc hiệu thương hiệu (Brand Jingle) cho TVC, Video TikTok hoặc bài hát chủ đề chiến dịch đồ án.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hát tiếng Việt có dấu rất rõ chữ và đúng nhịp điệu.',
    studentPerk: '50 credits miễn phí mỗi ngày giúp sinh viên thử nghiệm hàng loạt bản Jingle độc quyền cho bài thuyết trình mà không lo dính bản quyền YouTube/TikTok.',
    useCases: [
      'Nhờ ChatGPT viết 4 câu Rap/Pop ngắn chứa tên thương hiệu dự án, sau đó đưa vào Suno AI để tạo bài hát Jingle phát mở màn lúc thuyết trình.',
      'Tạo nhạc nền không lời (Instrumental) cho video TVC 30 giây.'
    ],
    pros: [
      'Giọng hát AI tiếng Việt tự nhiên đến bất ngờ.',
      'Miễn phí 50 credits làm mới mỗi ngày.'
    ],
    limitations: 'Bản miễn phí không cấp bản quyền khai thác thương mại rộng rãi (chỉ dùng cho mục đích cá nhân/học tập).',
    studentTip: 'Bật công tắc "Custom Mode" và chọn "Instrumental" nếu bạn chỉ muốn tạo nhạc nền không lời êm dịu cho video giới thiệu sản phẩm.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 107,
    slug: 'coolors',
    name: 'Coolors',
    tagline: 'Phối bảng màu thương hiệu (Color Palette) & Kiểm tra độ tương phản chuẩn UI',
    excerpt: 'Nhấn phím Space để sinh ngẫu nhiên hàng nghìn bảng mã màu HEX hài hòa, hoặc tải ảnh sản phẩm lên để trích xuất bảng màu thương hiệu.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% tính năng tạo bảng màu, trích xuất màu từ ảnh và kiểm tra độ tương phản chữ/nền (Contrast Checker).',
    level: 'Cơ bản',
    officialUrl: 'https://coolors.co/',
    tags: ['Color Palette', 'Brand Identity', 'UI Design', 'HEX Codes'],
    whatIsIt: 'Coolors là công cụ tạo và khám phá bảng màu thiết kế nhanh nhất thế giới, giúp Marketer chọn được bộ 3–5 mã màu HEX hài hòa kèm công cụ kiểm tra độ tương phản chuẩn khả năng đọc (WCAG).',
    bestFor: 'Mọi sinh viên bắt đầu làm Brand Guideline, thiết kế Slide PowerPoint/Canva hoặc dựng Landing Page.',
    platforms: 'Web Browser, Figma Plugin, Chrome Extension, iOS/Android',
    vietnameseSupport: 'Giao diện trực quan bằng mã màu HEX/RGB quốc tế.',
    studentPerk: 'Miễn phí 100%, không cần đăng nhập vẫn xuất được ảnh bảng màu kèm mã HEX đưa vào Brand Guideline.',
    useCases: [
      'Tải ảnh sản phẩm mẫu của nhóm vào mục "Image Picker" để trích xuất ra bộ 5 màu đồng bộ nhất.',
      'Dùng "Contrast Checker" kiểm tra xem chữ trắng đặt trên nền màu thương hiệu có bị chói hoặc khó đọc không.'
    ],
    pros: [
      'Cực kỳ nhanh, bấm phím Space là ra ngay bảng màu phối chuẩn thẩm mỹ.',
      'Xuất được thẳng sang PNG, PDF hoặc CSS.'
    ],
    limitations: 'Lưu trữ nhiều hơn 10 bảng màu trên tài khoản đám mây cần bản Pro.',
    studentTip: 'Trước khi chọn màu cho Slide hay Landing Page, hãy khóa 1 màu chủ đạo trên Coolors rồi bấm phím Space để tìm 2 màu phụ trợ hài hòa tuyệt đối.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 108,
    slug: 'unsplash',
    name: 'Unsplash',
    tagline: 'Kho ảnh chụp nghệ thuật độ phân giải cao miễn phí bản quyền thương mại',
    excerpt: 'Hàng triệu bức ảnh nhiếp ảnh sắc nét, tự nhiên (không bị sến như ảnh stock cũ) hoàn toàn miễn phí để làm ảnh bìa bài viết và Landing Page.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Kho ảnh tiêu chuẩn miễn phí 100% theo giấy phép Unsplash License (không cần ghi nguồn bắt buộc nhưng khuyến khích); có gói Unsplash+ trả phí cho ảnh độc quyền.',
    level: 'Cơ bản',
    officialUrl: 'https://unsplash.com/',
    tags: ['Stock Photos', 'Free Images', 'Hero Banner', 'Editorial'],
    whatIsIt: 'Unsplash là thư viện ảnh nhiếp ảnh chất lượng cao do cộng đồng nhiếp ảnh gia toàn cầu đóng góp, cung cấp hàng triệu bức ảnh miễn phí bản quyền cho thiết kế web, blog và truyền thông.',
    bestFor: 'Content Writer, Web Designer và sinh viên tìm ảnh nền sạch đẹp cho Landing Page và Slide thuyết trình.',
    platforms: 'Web Browser, tích hợp trực tiếp trong Canva & Figma',
    vietnameseSupport: 'Nên tìm kiếm từ khóa bằng tiếng Anh để ra nhiều kết quả đẹp nhất.',
    studentPerk: 'Miễn phí 100% tải ảnh độ phân giải gốc siêu nét không dính watermark.',
    useCases: [
      'Tìm ảnh bối cảnh đời thực (Lifestyle) làm Hero Banner cho Landing Page.',
      'Chèn ảnh minh họa tự nhiên vào các bài viết Blog chuẩn SEO.'
    ],
    pros: [
      'Chất lượng ảnh nghệ thuật cao, hiện đại, không bị cảm giác "ảnh stock dàn dựng cứng nhắc".',
      'Tải trực tiếp không cần đăng ký tài khoản.'
    ],
    limitations: 'Ảnh gắn nhãn "Unsplash+" là ảnh trả phí (hãy lọc bỏ hoặc chỉ chọn ảnh Free).',
    studentTip: 'Tìm kiếm theo từ khóa kèm định hướng bố cục như `"minimalist desk workspace"`, `"coffee lifestyle natural light"` để có ảnh nền đặt chữ cực sang.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 109,
    slug: 'pexels',
    name: 'Pexels',
    tagline: 'Kho Ảnh & Video Stock 4K miễn phí bản quyền để dựng Reels, TikTok & Web',
    excerpt: 'Ngoài hàng triệu ảnh đẹp, Pexels cực kỳ mạnh về kho Video ngắn B-roll (dọc 9:16 và ngang 16:9) miễn phí 100% để ghép vào TVC quảng cáo.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% cả Ảnh và Video độ phân giải Full HD/4K theo giấy phép Pexels License.',
    level: 'Cơ bản',
    officialUrl: 'https://www.pexels.com/',
    tags: ['Free Video Stock', 'B-Roll', 'Stock Photos', 'Reels'],
    whatIsIt: 'Pexels là kho tài nguyên hình ảnh và video stock miễn phí bản quyền thuộc hệ sinh thái Canva, nổi bật với bộ lọc kích thước dọc/ngang cho cả ảnh và video B-roll.',
    bestFor: 'Video Editor dùng CapCut cần cảnh quay minh họa (B-roll) miễn phí bản quyền để chèn vào TVC/TikTok.',
    platforms: 'Web Browser, iOS/Android, tích hợp Canva & Figma',
    vietnameseSupport: 'Có giao diện Tiếng Việt (`pexels.com/vi-vn/`) hỗ trợ tìm kiếm từ khóa tiếng Việt.',
    studentPerk: 'Tải Video 4K và Ảnh miễn phí không giới hạn, không watermark, hợp pháp 100%.',
    useCases: [
      'Tải các đoạn video cảnh quay thiên nhiên, văn phòng, người dùng gõ laptop để làm cảnh đệm (B-roll) cho TVC đồ án.',
      'Lọc bộ lọc "Hướng: Dọc" để lấy video vừa khít khung hình TikTok/Reels.'
    ],
    pros: [
      'Kho Video miễn phí chất lượng rất cao và hỗ trợ tìm kiếm bằng tiếng Việt.',
      'Lọc nhanh theo màu sắc chủ đạo và hướng dọc/ngang.'
    ],
    limitations: 'Một số video quá phổ biến có thể được nhiều người cùng sử dụng.',
    studentTip: 'Khi dựng video trên CapCut mà thiếu cảnh quay minh họa, hãy vào Pexels chuyển sang tab "Video" và bật bộ lọc "Dọc" để tải B-roll 4K miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 110,
    slug: 'flaticon',
    name: 'Flaticon',
    tagline: 'Thư viện hàng triệu biểu tượng (Icons) đồng bộ phong cách cho Slide & UI Web',
    excerpt: 'Tìm bộ Icon vector đồng nhất (Flat, Outline, 3D) để minh họa các gạch đầu dòng trên Slide thuyết trình, Infographic và Landing Page.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Tải file PNG miễn phí không giới hạn (kích thước tối đa 512px, cần ghi nguồn tác giả); gói Premium mở khóa file SVG vector.',
    level: 'Cơ bản',
    officialUrl: 'https://www.flaticon.com/',
    tags: ['Icons', 'UI Design', 'Presentation', 'Infographic'],
    whatIsIt: 'Flaticon (thuộc hệ sinh thái Freepik) là kho cơ sở dữ liệu biểu tượng (Icons) và nhãn dán lớn nhất thế giới, cho phép tìm kiếm theo từng bộ đồng nhất phong cách (Icon Packs).',
    bestFor: 'Sinh viên làm Slide PowerPoint/Canva, thiết kế Infographic và UI/UX Designer.',
    platforms: 'Web Browser, Google Workspace Add-on, Figma Plugin',
    vietnameseSupport: 'Tìm kiếm từ khóa tiếng Anh để ra nhiều icon chính xác nhất.',
    studentPerk: 'Tải PNG kích thước 512px sắc nét hoàn toàn miễn phí và có thể đổi màu icon ngay trước khi tải.',
    useCases: [
      'Thay thế các dấu chấm tròn nhàm chán trên Slide thuyết trình bằng bộ Icon đồng nhất chủ đề.',
      'Minh họa các tính năng sản phẩm trên Landing Page.'
    ],
    pros: [
      'Cho phép chọn màu sắc HEX của thương hiệu ngay trên web trước khi bấm tải PNG.',
      'Các icon được gom theo bộ (Pack) nên nét vẽ rất đồng đều.'
    ],
    limitations: 'Bản miễn phí chỉ tải được file PNG (không tải được file vector SVG chỉnh sửa nét).',
    studentTip: 'Luôn bấm vào mục "Icon Packs" trên Flaticon để dùng toàn bộ icon từ cùng một tác giả — giúp Slide của bạn trông chuyên nghiệp gấp đôi.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 111,
    slug: 'lottiefiles',
    name: 'LottieFiles',
    tagline: 'Kho hoạt ảnh Vector siêu nhẹ (JSON/GIF) giúp Landing Page sống động mượt mà',
    excerpt: 'Thay thế ảnh GIF nặng nề bằng hoạt ảnh Lottie sắc nét, dung lượng chỉ vài KB để nhúng vào website, Figma hoặc slide thuyết trình.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Hàng chục nghìn hoạt ảnh cộng đồng miễn phí 100% (tải được định dạng Lottie JSON, GIF, MP4); tính năng lưu trữ đội nhóm nâng cao có phí.',
    level: 'Trung bình',
    officialUrl: 'https://lottiefiles.com/',
    tags: ['Motion UI', 'Animation', 'Landing Page', 'Micro-interaction'],
    whatIsIt: 'LottieFiles là thư viện và trình chỉnh sửa hoạt ảnh vector định dạng JSON (Lottie), cho phép hiển thị chuyển động mượt mà 60fps trên web và mobile với dung lượng nhẹ hơn ảnh GIF tới 10 lần.',
    bestFor: 'Web Designer, UI/UX Designer và sinh viên muốn làm Landing Page hoặc Slide có icon chuyển động hiện đại.',
    platforms: 'Web Browser, Figma Plugin, Webflow/WordPress/React',
    vietnameseSupport: 'Hoạt động tốt trên mọi nền tảng.',
    studentPerk: 'Tải miễn phí hàng nghìn animation cộng đồng ở dạng GIF nền trong suốt hoặc JSON.',
    useCases: [
      'Đổi màu một hoạt ảnh minh họa theo đúng mã màu thương hiệu của nhóm ngay trên trình duyệt rồi xuất ra GIF/JSON.',
      'Nhúng hoạt ảnh nhẹ vào trang Thank-you hoặc Hero Section của Landing Page.'
    ],
    pros: [
      'Đổi màu trực tiếp từng lớp trong animation ngay trên web trước khi tải.',
      'Siêu nhẹ, không làm chậm điểm tốc độ Google PageSpeed Insights.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượng file lưu trong không gian làm việc cá nhân.',
    studentTip: 'Cài plugin LottieFiles vào Figma để chèn thẳng hoạt ảnh động vào bản Prototype thuyết trình.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 112,
    slug: 'piktochart',
    name: 'Piktochart',
    tagline: 'Thiết kế Infographic, Báo cáo trực quan & Sơ đồ số liệu nhanh chóng',
    excerpt: 'Chuyên biệt cho việc trình bày số liệu nghiên cứu, báo cáo kết quả chiến dịch và Infographic dài theo dạng kéo thả.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo dự án không giới hạn thời gian và tải xuống tối đa 2 ảnh PNG mỗi tháng; có gói Education giá ưu đãi.',
    level: 'Cơ bản',
    officialUrl: 'https://piktochart.com/',
    tags: ['Infographic', 'Data Storytelling', 'Report Design', 'Charts'],
    whatIsIt: 'Piktochart là công cụ thiết kế đồ họa trực tuyến tập trung vào Infographic, báo cáo thường niên và biểu đồ dữ liệu trực quan từ bảng số liệu Excel/CSV.',
    bestFor: 'Content Marketer làm tuyến bài Infographic lan tỏa (Link Bait) và sinh viên tóm tắt báo cáo nghiên cứu thành 1 trang ảnh.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt đầy đủ.',
    studentPerk: 'Có trình tạo Infographic bằng AI (Piktochart AI) thử nghiệm miễn phí giúp dựng nhanh khung báo cáo từ văn bản.',
    useCases: [
      'Tóm tắt kết quả khảo sát 300 người thành 1 tấm Infographic bắt mắt để đăng Fanpage.',
      'Chuyển hóa bảng số liệu thành biểu đồ hình người (Icon Matrix Chart) trực quan.'
    ],
    pros: [
      'Kho mẫu Infographic chuyên sâu về số liệu và quy trình rất bài bản.',
      'Biểu đồ nhập từ Excel đẹp mắt.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt tải xuống (2 lần/tháng) và có logo nhỏ dưới chân.',
    studentTip: 'Dành 2 lượt tải miễn phí mỗi tháng cho các tấm Infographic tổng hợp số liệu quan trọng nhất của đồ án.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 113,
    slug: 'framer',
    name: 'Framer',
    tagline: 'Thiết kế & Xuất bản Landing Page tương tác mượt mà không cần biết lập trình',
    excerpt: 'Giao diện giống hệt Figma nhưng bấm Publish là thành website thật với hiệu ứng chuyển động chuyên nghiệp và điểm SEO cao.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% thiết kế và xuất bản website chạy trên tên miền phụ `.framer.website`; nối tên miền riêng `.com` từ ~$5–$15/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.framer.com/',
    tags: ['No-Code Web', 'Landing Page', 'Animations', 'Web Design'],
    whatIsIt: 'Framer là nền tảng thiết kế và xuất bản website No-Code thế hệ mới, cho phép copy thiết kế từ Figma sang, thêm hiệu ứng cuộn trang mượt mà và xuất bản thành trang web tốc độ cao chuẩn SEO.',
    bestFor: 'Sinh viên muốn tự tay dựng một trang Landing Page thật cho đồ án chạy quảng cáo mà không cần biết code HTML/CSS.',
    platforms: 'Web Browser, macOS/Windows Desktop App',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt, thiết lập thẻ Title/Meta Description/OG Image chuẩn SEO.',
    studentPerk: 'Sinh viên đại học có email `.edu.vn` có thể đăng ký **Framer Pro miễn phí** trong chương trình giáo dục (hoặc dùng gói Free xuất bản thẳng lên link `.framer.website` không tốn phí).',
    useCases: [
      'Dựng Landing Page thật cho chiến dịch đồ án, gắn được cả mã Google Analytics 4, GTM và Microsoft Clarity.',
      'Xây dựng trang Portfolio cá nhân có hiệu ứng cuộn trang đẳng cấp Agency.'
    ],
    pros: [
      'Website xuất bản có tốc độ tải cực nhanh và hiệu ứng chuyển động mượt như Apple.',
      'Có plugin copy trực tiếp từ Figma sang Framer.'
    ],
    limitations: 'Chỉnh sửa bố cục Responsive (Desktop/Tablet/Mobile) cần làm quen khoảng 1–2 buổi.',
    studentTip: 'Nếu nhóm cần một trang Landing Page thật có thể gắn mã GA4 và form Tally để chạy thử nghiệm chuyển đổi mà không tốn tiền mua hosting, hãy dùng gói miễn phí của Framer.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 114,
    slug: 'tinypng',
    name: 'TinyPNG (Tinypng.com)',
    tagline: 'Nén giảm tới 70% dung lượng ảnh PNG/JPG/WebP mà không làm mờ ảnh',
    excerpt: 'Công cụ nén ảnh tối giản giúp website và Landing Page tải nhanh gấp đôi, đạt điểm xanh Core Web Vitals trên Google PageSpeed Insights.',
    category: 'Thiết kế, Hình ảnh & Video AI',
    categorySlug: 'design-video-ai',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 100% nén tối đa 20 ảnh cùng lúc (mỗi ảnh tối đa 5MB) ngay trên web không cần đăng ký.',
    level: 'Cơ bản',
    officialUrl: 'https://tinypng.com/',
    tags: ['Image Compression', 'WebP', 'PageSpeed', 'SEO'],
    whatIsIt: 'TinyPNG sử dụng thuật toán nén thông minh (Smart Lossy Compression) để giảm dung lượng tệp ảnh PNG, JPEG và WebP tới 50–80% trong khi mắt thường hầu như không thấy sự giảm sút chất lượng.',
    bestFor: 'Content Editor đăng bài website, Web Designer và sinh viên làm SEO muốn tối ưu tốc độ tải trang.',
    platforms: 'Web Browser, WordPress Plugin, Photoshop Plugin',
    vietnameseSupport: 'Giao diện cực kỳ đơn giản: kéo thả ảnh vào là tải về.',
    studentPerk: 'Miễn phí hoàn toàn không cần tài khoản cho mọi nhu cầu nén ảnh bài viết hàng ngày.',
    useCases: [
      'Nén toàn bộ ảnh chụp màn hình và ảnh banner từ Canva (thường nặng 1–3MB) xuống còn 80–150KB trước khi tải lên website.',
      'Chuyển đổi định dạng ảnh sang WebP nhẹ hơn.'
    ],
    pros: [
      'Nhanh, không quảng cáo rối mắt, giữ nguyên độ sắc nét ảnh.',
      'Hỗ trợ nén hàng loạt 20 ảnh một lúc và tải về dạng file `.zip`.'
    ],
    limitations: 'Giới hạn dung lượng mỗi ảnh gốc tối đa 5MB ở bản miễn phí.',
    studentTip: 'Tạo thói quen: Ảnh tải từ Canva về -> Kéo qua TinyPNG -> Đổi tên file không dấu chứa từ khóa -> Mới tải lên website.',
    verifiedAt: '2026-11-24'
  }
];

import { MarketingTool } from '../../types';

export const aiImageDesignTools: MarketingTool[] = [
  {
    id: 91,
    slug: 'adobe-firefly',
    name: 'Adobe Firefly',
    tagline: 'Tạo ảnh AI & Chỉnh sửa mở rộng khung hình an toàn bản quyền thương mại',
    excerpt: 'Công cụ AI tạo sinh chính chủ Adobe giúp tạo ảnh quảng cáo, tách vật thể và mở rộng bối cảnh ảnh (Generative Fill) hợp pháp 100% cho thương hiệu.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
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
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
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
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
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
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
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
    id: 336,
    slug: 'flux-black-forest-labs',
    name: 'FLUX.1 (Black Forest Labs)',
    tagline: 'Họ mô hình tạo ảnh AI chân thực như chụp máy cơ & chuẩn chữ hàng đầu thế giới',
    excerpt: 'Được tạo ra bởi đội ngũ cha đẻ của Stable Diffusion: cho chất lượng da người, bàn tay, ánh sáng nhiếp ảnh và chữ viết trên ảnh đẹp bậc nhất hiện nay.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Bản FLUX.1 Schnell mã nguồn mở chạy miễn phí trên Hugging Face Spaces, Freepik, Poe, Mistral Le Chat; Playground chính thức tặng credits dùng thử.',
    level: 'Trung bình',
    officialUrl: 'https://bfl.ai/',
    tags: ['FLUX', 'Photorealistic AI', 'Key Visual', 'Open Weights'],
    whatIsIt: 'FLUX là dòng mô hình tạo ảnh từ văn bản (Text-to-Image) thế hệ mới do Black Forest Labs phát triển, dẫn đầu bảng xếp hạng chất lượng ảnh chân thực, bám sát câu lệnh phức tạp và hiển thị chữ rõ nét.',
    bestFor: 'Art Director, Designer và sinh viên cần tạo ảnh quảng cáo chân thực (không bị cảm giác da nhựa bóng nhẫy của AI đời cũ).',
    platforms: 'Web Playground (bfl.ai), Hugging Face Spaces, Freepik, Leonardo, API',
    vietnameseSupport: 'Viết Prompt bằng tiếng Anh để đạt độ chuẩn xác tối đa.',
    studentPerk: 'Có thể chạy mô hình **FLUX.1 Schnell** hoàn toàn miễn phí trên Hugging Face Spaces hoặc bên trong khung chat Mistral Le Chat!',
    useCases: [
      'Tạo ảnh chụp lifestyle người mẫu cầm sản phẩm chân thực cho bài Pitching IMC.',
      'Dùng tính năng FLUX Kontext chỉnh sửa chi tiết ảnh bằng câu lệnh giữ nguyên khuôn mặt nhân vật.'
    ],
    pros: [
      'Giải quyết triệt để lỗi bàn tay thừa ngón của các thế hệ AI cũ.',
      'Bố cục nhiếp ảnh và độ chân thực cực cao.'
    ],
    limitations: 'Chạy trực tiếp về máy cá nhân yêu cầu card đồ họa rời rất mạnh (nên dùng qua nền tảng đám mây).',
    studentTip: 'Mẹo dùng FLUX miễn phí mỗi ngày: Mở Hugging Face Spaces tìm "FLUX.1-schnell" hoặc gõ yêu cầu tạo ảnh ngay trong `chat.mistral.ai`.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 337,
    slug: 'recraft-ai',
    name: 'Recraft AI',
    tagline: 'Công cụ AI duy nhất xuất được File Vector (.SVG) thật, Bộ Icon đồng nhất & Mockup',
    excerpt: 'Vũ khí tối thượng cho Brand Designer: tạo Logo Vector `.svg` chỉnh sửa được từng đường nét trong Illustrator/Figma và sinh trọn bộ 10 tấm minh họa cùng 1 nét vẽ.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **50 credits làm mới mỗi ngày** (xuất được cả file Vector SVG và ảnh PNG miễn phí!).',
    level: 'Cơ bản',
    officialUrl: 'https://www.recraft.ai/',
    tags: ['Vector AI', 'SVG', 'Icon Set', 'Brand Illustration'],
    whatIsIt: 'Recraft AI là nền tảng thiết kế đồ họa bằng AI chuyên nghiệp đầu tiên hỗ trợ sinh trực tiếp đồ họa Vector `.SVG` nguyên bản, tạo bộ biểu tượng/minh họa đồng bộ phong cách (Image Sets) và lồng ghép Mockup 3D tự động.',
    bestFor: 'Sinh viên thiết kế Bộ nhận diện thương hiệu (Logo, Bộ Icon, Hệ thống Hình minh họa đồng nhất) cho đồ án và UI/UX Designer.',
    platforms: 'Web Browser (Infinite Canvas), Figma Plugin, iOS/Android',
    vietnameseSupport: 'Dùng Prompt tiếng Anh ngắn gọn.',
    studentPerk: '50 credits miễn phí mỗi ngày và cho phép tải thẳng file `.SVG` vector thật về mở trong Figma/Canva đổi màu từng chi tiết!',
    useCases: [
      'Dùng tính năng **Image Set** tạo một lúc 6 hình minh họa phẳng (Flat Illustrations) có cùng 1 bảng màu HEX thương hiệu để trang trí Landing Page và Slide.',
      'Tạo ý tưởng Logo hoặc Mascot dưới dạng Vector `.SVG` không bao giờ vỡ nét khi phóng to in Backdrop.'
    ],
    pros: [
      'Khóa chặt bảng màu thương hiệu (Brand Colors) trước khi tạo hình nên ảnh ra đúng tông màu 100%.',
      'Xuất file `.SVG` thật chứ không phải ảnh bitmap giả vector.'
    ],
    limitations: 'Ảnh tạo ở gói Free thuộc thư viện công khai.',
    studentTip: 'Trước khi bấm Generate trên Recraft, hãy nhập đúng 3 mã màu HEX thương hiệu của nhóm vào ô **Palette** — toàn bộ hình minh họa sinh ra sẽ ăn khớp tuyệt đối với Slide của bạn!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 338,
    slug: 'photoroom',
    name: 'Photoroom',
    tagline: 'Studio Chụp & Ghép nền Ảnh Sản phẩm Thương mại điện tử bằng AI số 1',
    excerpt: 'Chụp chai mỹ phẩm hay đôi giày đặt trên bàn học bằng điện thoại, Photoroom tự tách nền, tạo bóng đổ tự nhiên và đặt lên kệ đá cẩm thạch như chụp studio.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tách nền trắng/màu chuẩn sàn Shopee/TikTok Shop và xuất tới 250 ảnh miễn phí; tính năng AI Backgrounds nâng cao có dùng thử.',
    level: 'Cơ bản',
    officialUrl: 'https://www.photoroom.com/',
    tags: ['Product Photography', 'E-commerce Photo', 'AI Background', 'Shopee'],
    whatIsIt: 'Photoroom là ứng dụng chỉnh sửa ảnh thương mại điện tử bằng AI phổ biến nhất thế giới, tự động tách chủ thể sản phẩm, tạo bóng đổ vật lý (AI Shadows) và dựng bối cảnh chụp sản phẩm chuyên nghiệp.',
    bestFor: 'Chủ shop Shopee/TikTok Shop, Social Commerce Marketer và sinh viên tự chụp ảnh sản phẩm mẫu (Prototype) cho đồ án.',
    platforms: 'iOS, Android App, Web Browser (app.photoroom.com)',
    vietnameseSupport: 'Giao diện 100% tiếng Việt.',
    studentPerk: 'Tách nền và xuất khung ảnh chuẩn kích thước Shopee, Lazada, Instagram miễn phí cực nhanh ngay trên điện thoại.',
    useCases: [
      'Biến ảnh chụp sản phẩm mẫu tự làm trong phòng trọ thành bộ ảnh Lookbook/Catalog đặt giữa thiên nhiên hoặc bàn gỗ nắng sớm.',
      'Tạo ảnh nền trắng có bóng đổ nhẹ đồng loạt cho danh mục sản phẩm gian hàng.'
    ],
    pros: [
      'Đổ bóng dưới đáy sản phẩm (AI Instant Shadows) cực kỳ chân thật, không bị cảm giác "ảnh cắt ghép lơ lửng".',
      'Thao tác trên điện thoại chỉ mất 10 giây/ảnh.'
    ],
    limitations: 'Một số bối cảnh Studio Pro yêu cầu gói trả phí (có dùng thử 7 ngày).',
    studentTip: 'Khi ghép nền sản phẩm, bí quyết để nhìn như ảnh chụp thật 100% là bật tính năng **AI Shadows** (Bóng đổ mềm) theo đúng hướng nguồn sáng của nền.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 339,
    slug: 'krea-ai',
    name: 'Krea AI',
    tagline: 'Vẽ phác thảo sinh ảnh Thời gian thực (Realtime Canvas) & Nâng nét ảnh AI',
    excerpt: 'Kéo thả các hình khối tròn, vuông màu sắc bên trái màn hình tới đâu, Krea AI biến thành bức ảnh hoàn chỉnh theo thời gian thực ngay bên phải tới đó.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Có hạn mức tính toán miễn phí hàng ngày cho Realtime Generation và Enhancer cơ bản.',
    level: 'Trung bình',
    officialUrl: 'https://www.krea.ai/',
    tags: ['Realtime AI', 'Upscaler', 'Composition Control', 'Creative'],
    whatIsIt: 'Krea AI là studio sáng tạo thị giác thế hệ mới, nổi tiếng với bảng vẽ thời gian thực (Realtime Canvas giúp kiểm soát chính xác vị trí đặt vật thể) và công cụ Krea Enhancer nâng nét ảnh mờ.',
    bestFor: 'Designer muốn chủ động điều khiển bố cục (sản phẩm nằm bên trái, mặt trời bên phải) thay vì quay xổ số ngẫu nhiên bằng câu chữ.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Dùng Prompt tiếng Anh ngắn.',
    studentPerk: 'Miễn phí hạn mức dùng hàng ngày để trải nghiệm vẽ bố cục thời gian thực.',
    useCases: [
      'Sắp xếp vị trí các khối màu trên Canvas để tạo Key Visual có chừa sẵn khoảng trống (Negative Space) đặt chữ tiêu đề.',
      'Làm nét và tăng chi tiết cho các bức ảnh AI độ phân giải thấp.'
    ],
    pros: [
      'Kiểm soát bố cục trực quan tức thì chưa tới 0.5 giây.',
      'Tích hợp nhiều mô hình ảnh và video hiện đại trên một giao diện sạch đẹp.'
    ],
    limitations: 'Hạn mức miễn phí trong ngày có giới hạn số lượt nâng nét độ phân giải lớn.',
    studentTip: 'Khi cần tạo ảnh nền Banner có chừa trống góc trái để chèn chữ trên Canva, hãy dùng Realtime Canvas của Krea đặt vật thể sang góc phải ngay từ đầu.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 340,
    slug: 'magnific-ai',
    name: 'Magnific AI',
    tagline: 'Siêu nâng cấp độ phân giải & Tái tạo chi tiết ảnh sắc nét tới từng lỗ chân lông',
    excerpt: 'Công cụ Upscaler cao cấp nhất của các Agency quảng cáo (thuộc Freepik): biến ảnh nhỏ bị vỡ hạt thành ảnh đại cảnh khổ lớn in ấn Billboard sắc nét.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Thuộc gói trả phí cao cấp (hoặc truy cập tích hợp qua hệ sinh thái Freepik Premium+).',
    level: 'Nâng cao',
    officialUrl: 'https://magnific.ai/',
    tags: ['AI Upscaler', 'High Resolution', 'Print Quality', 'Advertising'],
    whatIsIt: 'Magnific AI là công cụ phóng đại và tái tạo chi tiết hình ảnh bằng AI tạo sinh (Generative Upscaler), cho phép đẩy độ phân giải lên tới 4K–10K đồng thời bổ sung chất liệu bề mặt chân thực.',
    bestFor: 'Production House, Art Director làm Key Visual in ấn OOH/Billboard khổ lớn.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Điều khiển bằng thanh trượt Creativity & HDR kèm mô tả tiếng Anh.',
    studentPerk: 'Sinh viên có thể tìm hiểu nguyên lý Generative Upscaling (nếu cần công cụ miễn phí 100% hãy dùng **Upscayl** ở ngay bên dưới).',
    useCases: [
      'Nâng cấp ảnh Key Visual từ kích thước màn hình điện thoại lên kích thước in ấn Poster/Standee khổ lớn không vỡ hạt.',
      'Biến ảnh render 3D thô sơ thành ảnh nhiếp ảnh siêu thực.'
    ],
    pros: [
      'Chất lượng tái tạo chi tiết bề mặt (da, vải, giọt nước, lá cây) đứng đầu thị trường.',
      'Có tính năng Relight đổi hướng ánh sáng bức ảnh.'
    ],
    limitations: 'Chi phí rất cao và không có gói miễn phí riêng.',
    studentTip: 'Nếu cần nâng nét ảnh đồ án hoàn toàn miễn phí 0 đồng trên laptop cá nhân, hãy tải phần mềm mã nguồn mở **Upscayl** thay cho Magnific.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 341,
    slug: 'clipdrop-jasper',
    name: 'Clipdrop',
    tagline: 'Bộ dao đa năng xử lý ảnh AI: Đánh sáng lại (Relight), Xóa chữ & Mở rộng nền',
    excerpt: 'Chỉnh lại nguồn sáng studio cho ảnh chụp tối bằng cách kéo bóng đèn ảo trên màn hình, xóa chữ chìm/vật thể thừa và mở rộng góc rộng Uncrop.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép dùng miễn phí hàng ngày các công cụ Relight, Cleanup, Remove Text ở độ phân giải tiêu chuẩn.',
    level: 'Cơ bản',
    officialUrl: 'https://clipdrop.co/',
    tags: ['Portrait Relight', 'Cleanup', 'Uncrop', 'Photo Editing'],
    whatIsIt: 'Clipdrop là bộ công cụ xử lý hình ảnh chuyên biệt bằng AI, nổi bật nhất với công cụ **Relight** (nhận diện chiều sâu 3D của bức ảnh để đặt thêm đèn màu chiếu sáng lại khuôn mặt/sản phẩm) và **Cleanup**.',
    bestFor: 'Social Media Creator chỉnh sửa ảnh chân dung diễn giả sự kiện bị thiếu sáng hoặc xóa chi tiết rác trong ảnh sản phẩm.',
    platforms: 'Web Browser, iOS & Android',
    vietnameseSupport: 'Thao tác kéo thả trực quan không cần gõ chữ.',
    studentPerk: 'Tính năng **Relight** và **Cleanup** dùng miễn phí ngay trên trình duyệt cực nhanh.',
    useCases: [
      'Đánh thêm ánh sáng viền (Rim Light) màu xanh/tím công nghệ lên ảnh chân dung thành viên hoặc diễn giả để làm Poster Talkshow chuyên nghiệp.',
      'Xóa dây điện, rác hoặc người qua đường dính vào ảnh chụp sự kiện.'
    ],
    pros: [
      'Công cụ Relight giả lập ánh sáng 3D cực kỳ ấn tượng chỉ trong 5 giây.',
      'Dễ dùng cho người không biết Photoshop.'
    ],
    limitations: 'Xuất ảnh độ phân giải HD lớn không giới hạn cần gói Pro.',
    studentTip: 'Khi làm Poster giới thiệu Diễn giả khách mời mà ảnh khách gửi hơi tối, hãy đưa vào **Clipdrop Relight** đặt 2 đèn màu thương hiệu hai bên vai — ảnh nhìn như vừa chụp trong Studio!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 342,
    slug: 'pebblely',
    name: 'Pebblely',
    tagline: 'Tạo 40 ảnh Bối cảnh Sản phẩm Lifestyle miễn phí cho Mỹ phẩm, Nước hoa & F&B',
    excerpt: 'Tải 1 tấm ảnh chai serum/hộp bánh lên, chọn chủ đề (Cafe, Phòng tắm, Hoa tươi, Bãi biển), AI tự dựng bối cảnh có bóng phản chiếu cực kỳ nịnh mắt.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Tặng ngay **40 ảnh tạo miễn phí** khi đăng ký tài khoản mới.',
    level: 'Cơ bản',
    officialUrl: 'https://pebblely.com/',
    tags: ['Product Studio', 'Lifestyle Photo', 'Cosmetics', 'E-commerce'],
    whatIsIt: 'Pebblely là công cụ AI chụp ảnh sản phẩm chuyên biệt cho các vật thể nhỏ và vừa (mỹ phẩm, trang sức, đồ uống, nến thơm, phụ kiện), tự động tách nền và vẽ bối cảnh xung quanh khớp phối cảnh và ánh sáng.',
    bestFor: 'Sinh viên làm đồ án ngành Mỹ phẩm, Chăm sóc cá nhân, Đồ uống đóng chai, Nến thơm, Thời trang phụ kiện.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Có sẵn hơn 17 chủ đề bối cảnh chọn bằng nút bấm không cần tự viết câu lệnh.',
    studentPerk: '40 tấm ảnh miễn phí không gắn watermark đủ để nhóm hoàn thành toàn bộ bộ ảnh bài đăng Fanpage và gian hàng Shopee cho cả học kỳ!',
    useCases: [
      'Tạo bộ 10 tấm ảnh sản phẩm đặt trên bàn đá hoa cương, cạnh lát cam tươi hoặc lá xanh cho chiến dịch sản phẩm thiên nhiên.',
      'Đặt nhiều sản phẩm cạnh nhau làm ảnh Combo khuyến mãi.'
    ],
    pros: [
      'Ánh sáng phản chiếu trên vỏ chai thủy tinh/nhựa trông rất tự nhiên.',
      '40 ảnh miễn phí không dính logo chìm.'
    ],
    limitations: '40 lượt miễn phí cấp một lần cho mỗi tài khoản.',
    studentTip: 'Xoay và đặt góc sản phẩm ngay ngắn trên khung vẽ trước khi bấm Generate để tiết kiệm và tối ưu trọn vẹn 40 tấm ảnh miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 343,
    slug: 'flair-ai',
    name: 'Flair.ai',
    tagline: 'Studio dựng Bối cảnh Chụp Sản phẩm AI kéo thả Đạo cụ 3D chuyên nghiệp',
    excerpt: 'Cho phép kéo thả thêm bục gỗ, cành cây, hoa lá ảo đặt cạnh chai sản phẩm của bạn rồi bấm Render để AI hòa trộn ánh sáng thành bức ảnh quảng cáo hoàn chỉnh.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo thử nghiệm lên tới **100 tấm ảnh sản phẩm miễn phí** (giới hạn số dự án).',
    level: 'Trung bình',
    officialUrl: 'https://flair.ai/',
    tags: ['AI Product Shoot', 'Brand Photography', 'Props Staging', 'Packaging'],
    whatIsIt: 'Flair.ai là công cụ nhiếp ảnh thương hiệu bằng AI kết hợp trình dàn dựng đạo cụ kéo thả (Drag-and-drop Staging) với tạo sinh phông nền.',
    bestFor: 'Brand Designer cần dàn dựng bố cục chụp sản phẩm (Art Direction) chính xác tới từng món đạo cụ trang trí.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Giao diện kéo thả trực quan.',
    studentPerk: 'Hạn mức dùng thử miễn phí hào phóng để dựng ảnh Key Visual sản phẩm cho bài thi Marketing.',
    useCases: [
      'Đặt hộp sản phẩm lên bục tròn (Podium), thêm vài lá trà bên cạnh rồi yêu cầu AI render ánh nắng chiếu xiên qua cửa sổ.',
      'Dựng ảnh quảng cáo người mẫu cầm túi xách hoặc mặc trang phục thương hiệu.'
    ],
    pros: [
      'Kiểm soát chính xác vị trí đạo cụ phụ trợ chứ không để AI vẽ bừa.',
      'Chất lượng ánh sáng mang đậm tính nhiếp ảnh thương mại cao cấp.'
    ],
    limitations: 'Chạy mượt nhất trên trình duyệt máy tính (Desktop).',
    studentTip: 'Kết hợp dựng bao bì 3D từ **Pacdora** xuất ra PNG nền trong suốt, sau đó đưa sang **Flair.ai** hoặc **Pebblely** để tạo ảnh chụp ngoại cảnh đẳng cấp Agency!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 344,
    slug: 'freepik-ai-suite',
    name: 'Freepik AI Suite (Pikaso)',
    tagline: 'Tổ hợp Tạo ảnh AI (Flux/Mystic), Sketch-to-Image, Tạo Video & Kho Stock đồ sộ',
    excerpt: 'Nâng cấp mạnh mẽ của ông lớn Freepik: tích hợp trình tạo ảnh AI siêu thực Mystic/Flux, biến nét vẽ nguệch ngoạc thành ảnh thật và Mockup tự động.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản miễn phí tặng khoảng 20 lượt tạo ảnh AI mỗi ngày + tải miễn phí hàng triệu Vector/PSD/Photo gắn nhãn Free.',
    level: 'Cơ bản',
    officialUrl: 'https://www.freepik.com/ai',
    tags: ['Freepik', 'Sketch to Image', 'Stock + AI', 'Mockup Generator'],
    whatIsIt: 'Freepik AI Suite là hệ sinh thái sáng tạo toàn diện kết hợp kho tài nguyên thiết kế truyền thống lớn nhất thế giới với bộ công cụ AI tạo ảnh, chỉnh sửa ảnh, Reimagine và tạo video.',
    bestFor: 'Mọi sinh viên thiết kế ấn phẩm truyền thông cần vừa tải file PSD/Vector miễn phí vừa tạo ảnh AI bổ sung.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Tìm tài nguyên và viết câu lệnh tiếng Anh cho kết quả tốt nhất.',
    studentPerk: '20 lượt tạo ảnh AI miễn phí làm mới mỗi ngày kèm kho Mockup PSD khổng lồ.',
    useCases: [
      'Dùng tính năng **Reimagine** tải 1 bức ảnh tham khảo lên để AI tạo ra các biến thể mới có bố cục tương tự mà không lo trùng ảnh.',
      'Vẽ vài nét phác thảo đơn giản bằng chuột trong Pikaso để biến thành hình minh họa hoàn chỉnh.'
    ],
    pros: [
      'Kết hợp liền mạch giữa tài nguyên thiết kế có sẵn và AI trên cùng 1 tài khoản.',
      'Mô hình Freepik Mystic/Flux cho ảnh rất sang trọng.'
    ],
    limitations: 'Bản miễn phí yêu cầu ghi nguồn (Attribution) đối với kho ảnh Stock thường.',
    studentTip: 'Dùng bộ lọc "Free" trên Freepik tìm file Mockup `.PSD`, sau đó mở trực tiếp bằng **Photopea.com** để thay thiết kế của nhóm vào.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 345,
    slug: 'meshy-ai',
    name: 'Meshy AI',
    tagline: 'Biến Văn bản hoặc Hình ảnh 2D thành Mô hình 3D có đủ màu sắc trong 60 giây',
    excerpt: 'Gõ mô tả linh vật thương hiệu (Brand Mascot) hoặc tải ảnh vẽ 2D lên, Meshy AI tự động dựng thành mô hình 3D xoay mọi góc để chèn vào Web/Slide/In 3D.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **200 credits miễn phí mỗi tháng** (đủ tạo ~10–20 mô hình 3D và tải file `.glb` / `.obj`).',
    level: 'Trung bình',
    officialUrl: 'https://www.meshy.ai/',
    tags: ['Text to 3D', 'Image to 3D', 'Brand Mascot', '3D Assets'],
    whatIsIt: 'Meshy AI là công cụ tạo mô hình 3D và phủ chất liệu bề mặt (AI Texturing) hàng đầu thế giới, biến ảnh 2D hoặc câu lệnh chữ thành vật thể 3D hoàn chỉnh kèm hoạt ảnh chuyển động cơ bản.',
    bestFor: 'Sinh viên thiết kế **Mascot 3D** cho thương hiệu, quà tặng Merchandise (móc khóa, blindbox) hoặc làm vật thể 3D nhúng lên Landing Page.',
    platforms: 'Web Browser, Blender/Unity Plugin',
    vietnameseSupport: 'Dùng ảnh đầu vào (Image-to-3D) hoặc Prompt tiếng Anh.',
    studentPerk: '200 credits miễn phí làm mới hàng tháng + cho tải file `.glb` chèn thẳng vào PowerPoint (Insert -> 3D Models) để xoay 360° ngay trên Slide!',
    useCases: [
      'Tạo ảnh Mascot dễ thương bằng Leonardo/Ideogram trước, sau đó tải vào mục **Image to 3D** của Meshy để biến thành tượng 3D Blindbox cực hot trend.',
      'Tải file `.glb` chèn vào PowerPoint sử dụng hiệu ứng chuyển trang **Morph** xoay 3D siêu mượt khi bảo vệ đồ án.'
    ],
    pros: [
      'Chế độ Image-to-3D bám rất sát hình dáng nhân vật gốc.',
      'Có sẵn thư viện gắn xương chuyển động (Auto-rigging: vẫy tay, nhảy múa) cho Mascot.'
    ],
    limitations: 'Bề mặt lưới 3D chi tiết siêu nhỏ chưa mịn bằng nghệ sĩ dựng tay lâu năm.',
    studentTip: 'Mẹo gây "Wow" trước hội đồng: Tải mô hình Mascot `.glb` từ Meshy chèn thẳng vào **Microsoft PowerPoint** rồi bật hiệu ứng chuyển cảnh **Morph** giữa 2 slide — chú Mascot sẽ xoay 3D sống động ngay trên màn chiếu!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 346,
    slug: 'tripo-3d',
    name: 'Tripo 3D',
    tagline: 'Tạo vật thể 3D siêu tốc từ 1 bức ảnh sản phẩm hoặc bản vẽ nhân vật',
    excerpt: 'Chỉ mất chưa tới 10 giây để dựng khối 3D nháp từ một bức ảnh đơn lẻ, hỗ trợ xuất file chuẩn cho thiết kế Web 3D (Spline), AR và trình chiếu.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí tặng **600 credits mỗi tháng** (tạo được khoảng 15–20 mô hình 3D miễn phí).',
    level: 'Cơ bản',
    officialUrl: 'https://www.tripo3d.ai/',
    tags: ['Image to 3D', 'AR Marketing', 'Fast 3D', 'Product Prototype'],
    whatIsIt: 'Tripo 3D là nền tảng tạo sinh mô hình 3D tốc độ cao, chuyên chuyển đổi hình ảnh sản phẩm/nhân vật 2D sang không gian ba chiều với cấu trúc lưới gọn gàng.',
    bestFor: 'Sinh viên làm ý tưởng sản phẩm mới (giày dép, đồ chơi, chai lọ cách điệu, quà tặng sự kiện) muốn có bản 3D nhanh.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Kéo thả trực tiếp hình ảnh 2D lên không cần viết câu lệnh phức tạp.',
    studentPerk: '600 credits miễn phí mỗi tháng rất rộng rãi để thử nghiệm nhiều phương án thiết kế.',
    useCases: [
      'Biến bản vẽ ý tưởng quà tặng sự kiện (Merchandise: gấu bông, huy hiệu, cúp) thành mô hình 3D xoay đa chiều.',
      'Đưa mô hình xuất từ Tripo sang **Spline 3D** để nhúng lên trang web dự án.'
    ],
    pros: [
      'Tốc độ dựng khối 3D cực nhanh (vài giây).',
      'Hạn mức miễn phí hàng tháng cao.'
    ],
    limitations: 'Vật thể trong suốt như kính mảnh đôi khi cần xử lý lại chất liệu.',
    studentTip: 'Hãy dùng ảnh đầu vào có phông nền trắng sạch và chụp góc nghiêng 3/4 rõ nét để Tripo 3D tái tạo mặt sau chuẩn xác nhất.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 347,
    slug: 'upscayl',
    name: 'Upscayl',
    tagline: 'Phần mềm Nâng cấp Ảnh mờ lên 4K sắc nét bằng AI miễn phí 100% (Mã nguồn mở)',
    excerpt: 'Cứu cánh mỗi khi tải ảnh logo đối tác hoặc ảnh tư liệu trên mạng bị mờ rỗ: chạy Offline ngay trên máy tính hoàn toàn miễn phí không giới hạn số lượng ảnh.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Bản cài đặt trên máy tính (Desktop App) miễn phí 100% trọn đời, không watermark, không giới hạn lượt dùng!',
    level: 'Cơ bản',
    officialUrl: 'https://upscayl.org/',
    tags: ['AI Upscaler', 'Open Source', '4K Image', 'Free Forever'],
    whatIsIt: 'Upscayl là phần mềm nâng cấp độ phân giải ảnh bằng AI (Real-ESRGAN) mã nguồn mở miễn phí phổ biến nhất thế giới trên Windows, macOS và Linux, giúp phóng đại ảnh gấp 4 lần–16 lần mà vẫn giữ cạnh sắc nét.',
    bestFor: 'Mọi sinh viên làm Slide, báo cáo Word, in Poster bị vướng những tấm ảnh logo/sơ đồ kích thước nhỏ bị vỡ hạt.',
    platforms: 'Windows, macOS, Linux (Miễn phí 100%)',
    vietnameseSupport: 'Giao diện 3 bước siêu đơn giản (Chọn ảnh -> Chọn kiểu làm nét -> Bấm Upscayl).',
    studentPerk: 'Miễn phí 100%, hỗ trợ nâng nét hàng loạt cả một thư mục ảnh cùng lúc mà không tốn một đồng mua credit.',
    useCases: [
      'Làm nét lại logo nhà tài trợ hoặc ảnh sản phẩm tải từ web có độ phân giải thấp (300px -> 1200px+) để chèn lên Backdrop.',
      'Tăng độ phân giải cho ảnh tạo từ các công cụ AI miễn phí.'
    ],
    pros: [
      'Không tốn phí, không cần kết nối mạng, không dính watermark.',
      'Có chế độ riêng cho Ảnh chụp thật (General Photo) và Ảnh vẽ/Logo (Digital Art).'
    ],
    limitations: 'Chạy nhanh nhất trên máy có card đồ họa hoặc MacBook Apple Silicon (máy văn phòng yếu sẽ chờ khoảng 10–20 giây/ảnh).',
    studentTip: 'Cài sẵn Upscayl trong máy: tuyệt đối đừng bao giờ để một tấm ảnh hay cái logo bị vỡ hạt mờ tịt xuất hiện trên Slide bảo vệ khóa luận của bạn!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 348,
    slug: 'playground-design',
    name: 'Playground',
    tagline: 'Thiết kế Poster, Nhãn dán (Sticker), Áo thun & Ấn phẩm đồ họa bằng câu lệnh AI',
    excerpt: 'Chọn một mẫu thiết kế đẹp có sẵn (Menu quán cà phê, Poster âm nhạc, Logo, Thiệp mời) rồi chỉ cần gõ câu lệnh để AI đổi nội dung và hình ảnh đồng bộ.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Cho phép tạo và chỉnh sửa một số lượt thiết kế miễn phí mỗi khung giờ; gói Pro mở không giới hạn.',
    level: 'Cơ bản',
    officialUrl: 'https://playground.com/',
    tags: ['Graphic Design AI', 'Stickers', 'Poster', 'Templates'],
    whatIsIt: 'Playground là công cụ thiết kế đồ họa ứng dụng AI tập trung vào các ấn phẩm thực tế như Sticker dán, Poster, Bìa sách, Menu F&B, Áo thun và Logo dựa trên mẫu thẩm mỹ cao.',
    bestFor: 'Sinh viên thiết kế bộ Sticker tặng kèm đơn hàng, Menu F&B hoặc áo đồng phục sự kiện CLB.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Chỉnh sửa chữ trực tiếp bằng câu lệnh.',
    studentPerk: 'Kho mẫu Sticker và Poster phong cách hiện đại miễn phí dùng thử hàng ngày.',
    useCases: [
      'Thiết kế bộ 5 hình dán (Die-cut Stickers) mang linh vật thương hiệu làm quà tặng tại Booth sự kiện.',
      'Tạo nhanh mẫu Menu hoặc Poster khuyến mãi cho dự án quán cà phê/trà sữa.'
    ],
    pros: [
      'Phong cách thẩm mỹ rất trẻ trung, hợp gu Gen Z.',
      'Dễ sửa chi tiết bằng hội thoại mà không cần rành kỹ thuật layer.'
    ],
    limitations: 'Giới hạn số lượt chỉnh sửa miễn phí liên tiếp trong vài giờ.',
    studentTip: 'Dùng Playground tạo bộ **Brand Sticker Pack** in ra phát miễn phí ở sự kiện hoặc kẹp vào túi hàng mẫu khi thuyết trình — hội đồng cực kỳ thích sự chỉn chu này!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 349,
    slug: 'vizcom-ai',
    name: 'Vizcom AI',
    tagline: 'Biến Bản vẽ tay Phác thảo Sản phẩm thành Ảnh Render 3D Công nghiệp trong vài giây',
    excerpt: 'Bạn vẽ tay hình dáng chai nước mới hoặc đôi giày bằng bút chì lên giấy, chụp ảnh đưa vào Vizcom để AI phủ chất liệu nhựa, kim loại, thủy tinh chân thực.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Studio cho phép tạo dự án cá nhân và render phác thảo thành sản phẩm hoàn toàn miễn phí!',
    level: 'Trung bình',
    officialUrl: 'https://www.vizcom.ai/',
    tags: ['Industrial Design', 'Sketch to Render', 'Product Concept', 'NPD'],
    whatIsIt: 'Vizcom là công cụ thiết kế công nghiệp bằng AI chuyên chuyển đổi bản vẽ nét phác thảo (Line Drawing / Sketch) thành hình ảnh sản phẩm hoàn thiện có chất liệu vật lý chuẩn xác.',
    bestFor: 'Sinh viên môn Quản trị Sản phẩm / Phát triển Sản phẩm mới (New Product Development) muốn tự phác thảo kiểu dáng sản phẩm độc quyền.',
    platforms: 'Web Browser, iPad',
    vietnameseSupport: 'Vẽ trực tiếp trên khung hoặc tải ảnh vẽ tay lên kèm vài từ tiếng Anh chỉ chất liệu.',
    studentPerk: 'Gói Free cho phép render không giới hạn bản vẽ phác thảo sang ảnh sản phẩm chất lượng studio.',
    useCases: [
      'Vẽ phác hình dáng lọ nước hoa, hộp quà Tết hoặc thiết bị thông minh theo ý tưởng riêng của nhóm rồi render thành ảnh sản phẩm thật.',
      'Thử nghiệm đổi 3 chất liệu bề mặt khác nhau (Nhựa nhám mờ vs Thủy tinh trong vs Nhôm xước) để khảo sát thị hiếu người tiêu dùng.'
    ],
    pros: [
      'Giữ nguyên 100% đường nét thiết kế gốc của bạn chứ không tự ý đổi hình dáng.',
      'Gói miễn phí rất hào phóng cho mục đích học tập.'
    ],
    limitations: 'Chuyên cho thiết kế kiểu dáng vật thể/sản phẩm (không dùng để tạo cảnh đông người).',
    studentTip: 'Chỉ cần vẽ viền đen trên giấy trắng thật rõ nét rồi chụp bằng điện thoại tải lên Vizcom — dù bạn vẽ tay không khéo, kết quả render ra vẫn đẹp như Industrial Designer chuyên nghiệp!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 350,
    slug: 'microsoft-designer',
    name: 'Microsoft Designer',
    tagline: 'Tạo Ảnh, Sticker, Khung Avatar & Xóa nền/Vật thể bằng AI miễn phí từ Microsoft',
    excerpt: 'Công cụ thiết kế AI miễn phí của Microsoft: tạo hình minh họa 3D cực nét, xóa nền ảnh độ phân giải gốc không dính watermark và làm khung ảnh sự kiện.',
    category: 'AI Tạo ảnh, Thiết kế & Đồ họa 3D',
    categorySlug: 'ai-image-design',
    pricing: 'Freemium',
    pricingDetail: 'Tặng **15 Boosts miễn phí mỗi tháng** với tài khoản Microsoft cá nhân; các tính năng chỉnh sửa cơ bản và xóa nền miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://designer.microsoft.com/',
    tags: ['Microsoft AI', 'Sticker Maker', 'Free Remove BG', 'Social Post'],
    whatIsIt: 'Microsoft Designer là ứng dụng thiết kế đồ họa và tạo ảnh AI tích hợp mô hình DALL-E của Microsoft, cung cấp sẵn các trình tạo Sticker nền trong suốt, Icon 3D, thiệp mời và công cụ xóa nền/làm mờ nền miễn phí.',
    bestFor: 'Sinh viên cần tạo nhanh các icon 3D phong cách đất sét (3D Clay/Plush/Glass) để trang trí Slide thuyết trình.',
    platforms: 'Web Browser, Windows 11, iOS & Android',
    vietnameseSupport: 'Hiểu câu lệnh tiếng Việt tốt và giao diện hỗ trợ tiếng Việt.',
    studentPerk: 'Tạo Sticker nền trong suốt tự động tách viền trắng sẵn sàng kéo thả sang PowerPoint/Canva hoàn toàn miễn phí.',
    useCases: [
      'Vào mục **Sticker Creator** gõ yêu cầu bằng tiếng Việt để tạo bộ hình dán 3D chèn vào Slide thuyết trình.',
      'Xóa nền hoặc xóa người thừa trong ảnh chụp tập thể nhóm.'
    ],
    pros: [
      'Ảnh 3D và Sticker sinh ra có ánh sáng trong trẻo, bắt mắt.',
      'Tự động tách nền sẵn cho Sticker không cần qua bước trung gian.'
    ],
    limitations: 'Giới hạn 15 lượt tạo AI mới mỗi tháng trên tài khoản miễn phí.',
    studentTip: 'Dùng mục **Sticker Creator** của Microsoft Designer để tạo các biểu tượng 3D độc đáo minh họa cho từng chương trong bộ Slide báo cáo của bạn.',
    verifiedAt: '2026-11-24'
  }
];

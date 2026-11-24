import { MarketingTool } from '../../types';

export const aiVideoAvatarTools: MarketingTool[] = [
  {
    id: 95,
    slug: 'heygen',
    name: 'HeyGen',
    tagline: 'Tạo video MC ảo (AI Avatar) thuyết trình & Lồng tiếng đa ngôn ngữ khớp khẩu hình',
    excerpt: 'Biến kịch bản văn bản thành video có người dẫn chương trình AI nói tiếng Việt tự nhiên, hoặc dịch video quảng cáo sang 40+ ngôn ngữ khớp môi.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
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
    id: 97,
    slug: 'runway-ml',
    name: 'Runway (Gen-3 / Gen-4)',
    tagline: 'Tạo video từ văn bản/hình ảnh (Text/Image-to-Video) & Xóa vật thể trong video',
    excerpt: 'Công cụ AI sản xuất video điện ảnh hàng đầu dùng để biến ảnh tĩnh sản phẩm thành clip chuyển động quảng cáo mượt mà.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
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
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
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
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
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
    id: 351,
    slug: 'sora-openai',
    name: 'Sora (OpenAI)',
    tagline: 'Mô hình tạo Video Điện ảnh & Chuyển động Vật lý từ Văn bản/Hình ảnh của OpenAI',
    excerpt: 'Biến kịch bản chữ hoặc bảng phân cảnh (Storyboard) thành các đoạn video độ phân giải cao với góc quay phức tạp và tính liên kết khung hình ấn tượng.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Tích hợp trong gói ChatGPT Plus ($20/tháng) và Pro, hỗ trợ tạo và nối cảnh Storyboard trên sora.com.',
    level: 'Trung bình',
    officialUrl: 'https://sora.com/',
    tags: ['Sora', 'Text to Video', 'Storyboard AI', 'TVC'],
    whatIsIt: 'Sora là mô hình tạo sinh video của OpenAI có khả năng mô phỏng thế giới vật lý 3D, ánh sáng điện ảnh và cho phép đạo diễn sắp xếp từng mốc thời gian trên thanh Storyboard.',
    bestFor: 'Creative Director dựng phim quảng cáo ý tưởng (Animatic / Concept TVC) trước khi bấm máy quay thật.',
    platforms: 'Web Browser (sora.com)',
    vietnameseSupport: 'Viết Prompt tiếng Anh chi tiết góc máy để đạt chất lượng cao nhất.',
    studentPerk: 'Nếu thành viên trong nhóm đã có sẵn tài khoản ChatGPT Plus phục vụ học tập thì được dùng kèm hạn mức Sora không phải mua riêng.',
    useCases: [
      'Dựng đoạn mở đầu (Intro TVC) đại cảnh bay flycam hoặc cảnh giả tưởng không thể tự đi quay bằng điện thoại.',
      'Thử nghiệm nối 2 cảnh khác nhau bằng tính năng Blend/Remix.'
    ],
    pros: [
      'Thanh công cụ Storyboard theo trục thời gian rất hợp tư duy làm phim quảng cáo.',
      'Màu sắc và chất liệu ánh sáng đậm chất điện ảnh.'
    ],
    limitations: 'Không có gói tạo video dài miễn phí hoàn toàn.',
    studentTip: 'Khi trình bày ý tưởng TVC trong môn Quản trị Quảng cáo, dựng 3 cảnh đầu bằng AI Video sẽ thuyết phục hội đồng mạnh hơn gấp nhiều lần bảng vẽ chữ thuần túy.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 352,
    slug: 'google-veo',
    name: 'Google Veo (Flow & AI Studio)',
    tagline: 'Mô hình tạo Video AI 1080p/4K kèm Âm thanh đồng bộ nguyên bản của Google',
    excerpt: 'Thế hệ tạo video đột phá của Google DeepMind: không chỉ tạo hình ảnh chuyển động cực mượt mà còn tự sinh tiếng bước chân, tiếng sóng biển và lời thoại khớp hình.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Trải nghiệm qua Google Gemini, Google Flow/Vids hoặc hạn mức ưu đãi sinh viên Google One AI Premium.',
    level: 'Trung bình',
    officialUrl: 'https://deepmind.google/technologies/veo/',
    tags: ['Google Veo', 'Video + Audio AI', 'Cinematic', 'TVC Concept'],
    whatIsIt: 'Google Veo là mô hình tạo video độ phân giải cao hàng đầu của Google DeepMind, hiểu sâu ngôn ngữ điện ảnh (Timelapse, Aerial shot, Bokeh) và sinh đồng thời cả âm thanh môi trường lẫn hội thoại khớp khẩu hình.',
    bestFor: 'Video Creator và nhóm sinh viên làm TVC quảng cáo ngắn cần cả hình ảnh lẫn âm thanh sống động.',
    platforms: 'Google Flow, Gemini Web/App, Vertex AI',
    vietnameseSupport: 'Hiểu câu lệnh mô tả bối cảnh tiếng Việt tốt.',
    studentPerk: 'Google thường xuyên mở chương trình miễn phí gói Google AI Pro cho sinh viên đại học có email `.edu` tại nhiều quốc gia.',
    useCases: [
      'Tạo cảnh quay sản phẩm đặt giữa thiên nhiên có sẵn tiếng suối chảy và chim hót tự nhiên.',
      'Giữ đồng nhất nhân vật xuyên suốt nhiều cảnh quay ngắn trong công cụ Google Flow.'
    ],
    pros: [
      'Tự tạo âm thanh (SFX + Ambient + Voice) khớp từng chuyển động trong video.',
      'Bám sát chuyển động vật lý chất lỏng và ánh sáng.'
    ],
    limitations: 'Tiêu tốn nhiều credits khi tạo ở chế độ chất lượng cao nhất.',
    studentTip: 'Khi viết Prompt cho Veo, hãy mô tả rõ 4 thành tố: `[Chủ thể] + [Hành động] + [Cỡ cảnh/Chuyển động máy quay] + [Âm thanh mong muốn]`.',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 353,
    slug: 'hailuo-minimax-video',
    name: 'Hailuo AI (MiniMax Video)',
    tagline: 'Tạo Video AI biểu cảm khuôn mặt cực kỳ chân thật & Tặng Credits miễn phí',
    excerpt: 'Được cộng đồng làm phim AI đánh giá rất cao về độ mượt mà của biểu cảm diễn viên và điều khiển góc quay camera theo cú pháp ngoặc vuông.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Tặng Credits miễn phí khi đăng ký và điểm danh hàng ngày để tạo video 6 giây không tốn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://hailuoai.video/',
    tags: ['Hailuo AI', 'Image to Video', 'Camera Control', 'Free Video AI'],
    whatIsIt: 'Hailuo AI (phát triển bởi MiniMax) là nền tảng tạo video từ ảnh và văn bản nổi bật với khả năng giữ nét mặt nhân vật tự nhiên, cảm xúc tinh tế và điều khiển chính xác chuyển động máy quay (`[Pan left]`, `[Zoom in]`).',
    bestFor: 'Sinh viên cần biến ảnh chụp/ảnh AI tĩnh thành các cảnh quay video cảm xúc miễn phí cho đồ án.',
    platforms: 'Web Browser (hailuoai.video), Mobile App',
    vietnameseSupport: 'Dùng ảnh đầu vào kèm câu lệnh tiếng Anh ngắn gọn.',
    studentPerk: 'Tặng điểm miễn phí cho người dùng mới đủ tạo hàng loạt cảnh B-roll cho 1 clip TVC 30 giây.',
    useCases: [
      'Biến ảnh khách hàng đang mỉm cười cầm sản phẩm thành cảnh quay chuyển động chậm (Slow-motion) đầy cảm xúc.',
      'Sử dụng tính năng Subject Reference để giữ mặt nhân vật chính giống nhau qua 5 cảnh quay khác nhau.'
    ],
    pros: [
      'Ít bị biến dạng khuôn mặt khi nhân vật quay đầu hoặc cười nói.',
      'Cú pháp điều khiển camera đơn giản, nghe lời.'
    ],
    limitations: 'Bản miễn phí có gắn watermark nhỏ ở góc dưới.',
    studentTip: 'Đặt lệnh điều khiển máy quay trong ngoặc vuông như `[Push in, Tilt up]` để video có chiều sâu điện ảnh như quay bằng Gimbal thật.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 354,
    slug: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    tagline: 'Tạo Video chuyển cảnh mượt mà giữa Khung hình Đầu & Khung hình Cuối (Keyframes)',
    excerpt: 'Tính năng Start Frame + End Frame cực kỳ lợi hại: tải lên ảnh trước và ảnh sau, Luma tự động vẽ đoạn video biến hình chuyển cảnh siêu thực ở giữa.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Có gói dùng thử miễn phí giới hạn số lượt tạo hàng tháng cho mục đích phi thương mại; gói Lite từ ~$9.99/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://lumalabs.ai/dream-machine',
    tags: ['Keyframes Video', 'Transition AI', 'Ray2', 'Visual Effects'],
    whatIsIt: 'Dream Machine (của Luma Labs — mô hình Ray2) là công cụ sáng tạo hình ảnh và video AI mạnh mẽ, đặc biệt xuất sắc khi nội suy chuyển động mượt mà từ ảnh bắt đầu (Start Keyframe) đến ảnh kết thúc (End Keyframe).',
    bestFor: 'Video Editor tạo hiệu ứng chuyển cảnh biến hình (Morphing Transition) độc đáo cho quảng cáo sản phẩm.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Dùng Prompt tiếng Anh ngắn.',
    studentPerk: 'Cho phép thử nghiệm tính năng Keyframe nội suy tạo hiệu ứng kỹ xảo không cần biết After Effects.',
    useCases: [
      'Tạo cảnh chuyển mượt từ hạt cà phê rang (Ảnh 1) biến thành ly cà phê sữa đá mát lạnh trên bàn (Ảnh 2).',
      'Kéo dài thời lượng cảnh quay (Extend) thêm 5 giây liên tiếp.'
    ],
    pros: [
      'Kiểm soát chính xác điểm đầu và điểm kết thúc của cảnh quay.',
      'Ánh sáng và tốc độ chuyển động rất năng động.'
    ],
    limitations: 'Bản miễn phí giới hạn số lượt tạo và không cấp quyền thương mại.',
    studentTip: 'Kỹ thuật **Start Frame + End Frame** là bí quyết số 1 để làm video quảng cáo F&B và Mỹ phẩm trông như kỹ xảo tiền tỷ!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 355,
    slug: 'pika-art',
    name: 'Pika (Pika.art)',
    tagline: 'Tạo Hiệu ứng Video AI Viral (Pikaffects: Bóp dẹp, Cắt bánh, Nổ tung, Hóa gấu bông)',
    excerpt: 'Công cụ tạo trend mạng xã hội TikTok/Reels cực nhanh: biến mọi sản phẩm trong ảnh thành chiếc bánh kem cắt ra được hoặc bóp mềm như đất sét.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic tặng **80–150 credits miễn phí mỗi tháng** để trải nghiệm Pikaffects và Image-to-Video.',
    level: 'Cơ bản',
    officialUrl: 'https://pika.art/',
    tags: ['Pikaffects', 'Viral Video', 'TikTok Trends', 'VFX'],
    whatIsIt: 'Pika là nền tảng tạo video ngắn sáng tạo nổi tiếng toàn cầu với bộ hiệu ứng **Pikaffects** (Cake-ify, Squish, Inflate, Melt) và **Pikaswaps** (thay đổi một món đồ ngay trong video đang chạy).',
    bestFor: 'Social Media Creator cần làm các đoạn Hook 3 giây đầu cực kỳ lạ mắt thu hút dừng lướt (Thumb-stopping) trên TikTok/Instagram.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Chọn thẳng hiệu ứng có sẵn trên giao diện cực dễ.',
    studentPerk: 'Credits miễn phí làm mới hàng tháng đủ tạo 5–10 clip hiệu ứng bắt trend cho Fanpage đồ án.',
    useCases: [
      'Làm video Hook 3 giây mở đầu: hộp sản phẩm của nhóm phồng to bay lên như bóng bay (Inflate) hoặc cắt ra như bánh kem (Cake-ify).',
      'Ghép thêm đạo cụ vui nhộn vào cảnh quay thật.'
    ],
    pros: [
      'Chỉ cần tải 1 tấm ảnh và chọn hiệu ứng có sẵn là ra ngay video viral không cần nghĩ câu lệnh.',
      'Cực kỳ hợp thị hiếu giải trí Gen Z.'
    ],
    limitations: 'Chuyên làm clip ngắn 3–5 giây tạo hiệu ứng thị giác hơn là phim dài nghiêm túc.',
    studentTip: 'Dùng 1 hiệu ứng bất ngờ của Pika đặt ở đúng **3 giây đầu tiên** của video quảng cáo để kéo chỉ số Hook Rate vọt lên trên 40%!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 356,
    slug: 'synthesia',
    name: 'Synthesia',
    tagline: 'Nền tảng tạo Video Đào tạo & Thuyết trình bằng Nhân vật Ảo (AI Avatar) chuẩn Doanh nghiệp',
    excerpt: ' Biến tài liệu hướng dẫn sản phẩm, bài thuyết trình thành video chuyên nghiệp với hơn 230 MC ảo đa sắc tộc và dịch thuật hơn 140 ngôn ngữ.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí cho phép tạo **3 phút video mỗi tháng** (chọn từ 9 AI Avatars chuẩn); gói Starter từ ~$18/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.synthesia.io/',
    tags: ['AI Avatar', 'Corporate Video', 'Product Demo', 'Multilingual'],
    whatIsIt: 'Synthesia là nền tảng sản xuất video doanh nghiệp bằng AI hàng đầu thế giới (được hơn 50% công ty Fortune 100 sử dụng), cho phép soạn slide kèm lời thoại văn bản để MC ảo thuyết trình rõ ràng.',
    bestFor: 'Product Marketer làm video hướng dẫn sử dụng (Onboarding Video) và truyền thông nội bộ B2B.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ giọng đọc tiếng Việt chuẩn xác.',
    studentPerk: 'Gói Free tặng 3 phút video mỗi tháng làm mới định kỳ không tốn phí.',
    useCases: [
      'Tạo video giới thiệu tính năng phần mềm/dịch vụ B2B lịch sự, chuyên nghiệp nhúng ngay đầu trang chủ.',
      'Chuyển bản PDF hướng dẫn thành video có người dẫn chuyện.'
    ],
    pros: [
      'Trình soạn thảo video bố cục từng cảnh giống hệt như làm slide PowerPoint nên rất dễ căn chỉnh chữ và ảnh minh họa.',
      'Phong thái Avatar đĩnh đạc chuẩn doanh nghiệp.'
    ],
    limitations: 'Bản miễn phí giới hạn 3 phút/tháng và ít Avatar trẻ trung kiểu TikTok hơn HeyGen.',
    studentTip: 'Nếu đồ án của bạn làm về mảng B2B, Ngân hàng, Giáo dục hay Y tế cần sự trang trọng thì chọn Synthesia; nếu cần năng động kiểu UGC mạng xã hội thì chọn HeyGen/Creatify.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 357,
    slug: 'creatify-ai',
    name: 'Creatify AI',
    tagline: 'Dán đường link Sản phẩm (Shopee/Shopify) để AI tự tạo Video Quảng cáo UGC trong 2 phút',
    excerpt: 'Công cụ chuyên biệt cho Performance Marketer: tự quét ảnh và mô tả từ URL sản phẩm, viết 5 kịch bản Hook khác nhau và ghép KOC ảo cầm nói chuyện.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Tặng **10 credits miễn phí** khi đăng ký (tạo được khoảng 2 video quảng cáo hoàn chỉnh để test quy trình); gói Starter từ ~$19/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://creatify.ai/',
    tags: ['URL to Video', 'AI UGC Ads', 'Performance Creative', 'TikTok Ads'],
    whatIsIt: 'Creatify AI là nền tảng tạo mẫu quảng cáo video ngắn (AI Video Ads) tự động từ đường dẫn trang sản phẩm (URL-to-Video), tích hợp kho nhân vật ảo phong cách người dùng đánh giá thật (UGC Creators).',
    bestFor: 'E-commerce & Performance Marketer cần sản xuất nhanh nhiều biến thể kịch bản video để chạy thử nghiệm A/B Test.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ viết kịch bản và giọng nói tiếng Việt.',
    studentPerk: '10 credits miễn phí giúp sinh viên trải nghiệm công nghệ tự động hóa sản xuất Creative quảng cáo hiện đại nhất.',
    useCases: [
      'Dán link trang Landing Page đồ án vào Creatify để xem AI tự bóc tách USP sản phẩm và đề xuất 5 kịch bản quảng cáo 30 giây như thế nào.',
      'So sánh chi phí và hiệu quả giữa UGC người thật quay vs AI UGC trong báo cáo.'
    ],
    pros: [
      'Quy trình URL -> Kịch bản -> Dựng cảnh -> Phụ đề diễn ra tự động cực nhanh.',
      'Tối ưu riêng cho tỷ lệ chuyển đổi quảng cáo trả phí.'
    ],
    limitations: 'Bản miễn phí gắn watermark và số lượt test ít.',
    studentTip: 'Kể cả khi bạn tự quay video người thật cho tự nhiên, bạn vẫn có thể dùng bước tạo kịch bản miễn phí của Creatify để lấy 5 ý tưởng Hook bán hàng sắc bén!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 358,
    slug: 'invideo-ai',
    name: 'InVideo AI',
    tagline: 'Chỉ cần gõ 1 chủ đề, AI tự viết Kịch bản, Tìm cảnh B-Roll, Lồng tiếng & Ghép Phụ đề',
    excerpt: 'Biến 1 đoạn mô tả ý tưởng thành video giải thích kiến thức (Explainer Video) hoặc YouTube Shorts hoàn chỉnh có đầy đủ cảnh quay minh họa trong 3 phút.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo tối đa **10 phút video AI mỗi tuần** và xuất 4 video/tuần (có watermark).',
    level: 'Cơ bản',
    officialUrl: 'https://invideo.io/ai/',
    tags: ['Prompt to Video', 'Faceless YouTube', 'Explainer Video', 'B-Roll'],
    whatIsIt: 'InVideo AI là công cụ sản xuất video tự động từ câu lệnh văn bản (Text-to-Full-Video), tự động kết hợp viết lời bình, ghép kho video stock bản quyền, lồng tiếng Voiceover và chèn phụ đề.',
    bestFor: 'Người xây kênh chia sẻ kiến thức không lộ mặt (Faceless Channel) và làm nhanh video tóm tắt tin tức/bài blog.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ tạo video và giọng đọc tiếng Việt bằng cách yêu cầu rõ trong câu lệnh.',
    studentPerk: 'Hạn mức 10 phút video AI miễn phí làm mới hàng tuần rất thoải mái để thực hành.',
    useCases: [
      'Chuyển hóa một bài viết nghiên cứu trên blog thành video giải thích ngắn 60 giây.',
      'Sửa video bằng câu lệnh chat (ví dụ: `"Đổi cảnh số 2 thành cảnh sinh viên đang họp nhóm và giảm nhỏ nhạc nền"`).'
    ],
    pros: [
      'Chỉnh sửa từng phân cảnh bằng cách gõ lệnh văn bản cực kỳ dễ.',
      'Tự khớp cảnh quay stock sát với từng câu thoại.'
    ],
    limitations: 'Bản miễn phí có watermark kho ảnh/logo nhỏ.',
    studentTip: 'Dùng InVideo AI để dựng bản nháp hình dung nhịp độ video (Video Animatic) cực nhanh trước khi quyết định đi quay các cảnh sản phẩm thật.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 359,
    slug: 'vizard-ai',
    name: 'Vizard.ai',
    tagline: 'Cắt Video Webinar/Talkshow dài thành hàng chục Clip ngắn chuẩn bố cục mạng xã hội',
    excerpt: 'Đối thủ đáng gờm của OpusClip với khả năng nhận diện tiếng Việt rất chuẩn, cho phép chỉnh sửa giao diện khung viền thương hiệu đẹp mắt như Canva.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí tải lên **60 phút video mỗi tháng** để AI tự động cắt clip ngắn và tạo phụ đề.',
    level: 'Cơ bản',
    officialUrl: 'https://vizard.ai/',
    tags: ['AI Clipping', 'Webinar Repurpose', 'Vietnamese Subtitles', 'TikTok'],
    whatIsIt: 'Vizard.ai là nền tảng cắt gọt và tái sử dụng video dài bằng AI, tự động chọn lọc các khoảnh khắc đắt giá nhất trong buổi hội thảo/podcast, đóng khung 2 người nói trên màn hình dọc và thêm phụ đề tiếng Việt.',
    bestFor: 'Ban truyền thông CLB/Khoa sau khi tổ chức Talkshow Zoom/StreamYard muốn cắt ra 15 clip ngắn đăng suốt tuần.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Nhận diện giọng nói và chèn phụ đề **Tiếng Việt** chính xác cao.',
    studentPerk: 'Khi dùng hết 60 phút miễn phí của OpusClip trong tháng, bạn có thêm 60 phút miễn phí nữa trên Vizard.ai!',
    useCases: [
      'Dán thẳng link YouTube buổi hội thảo dài 1 tiếng vào để Vizard tự trích xuất 10 đoạn trả lời hay nhất của diễn giả.',
      'Chế độ chia đôi màn hình trên - dưới tự động khi có cả MC và Khách mời cùng đối đáp.'
    ],
    pros: [
      'Trình chỉnh sửa khung viền tiêu đề trên/dưới rất linh hoạt, dễ gắn logo sự kiện.',
      'Bắt phụ đề tiếng Việt ít lỗi chính tả.'
    ],
    limitations: 'Xuất video ở gói Free độ phân giải 720p kèm watermark nhỏ.',
    studentTip: 'Kết hợp **StreamYard** (ghi hình Talkshow) + **Vizard.ai / OpusClip** (cắt tự động 15 Reels) là quy trình truyền thông hậu sự kiện nhàn và hiệu quả nhất cho sinh viên.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 360,
    slug: 'captions-ai',
    name: 'Captions (Mirage)',
    tagline: 'Ứng dụng Chỉnh ánh mắt nhìn thẳng Camera (AI Eye Contact) & Phụ đề bắt mắt cho Creator',
    excerpt: 'Bạn vừa nhìn giấy đọc kịch bản vừa quay điện thoại, tính năng AI Eye Contact tự chỉnh đồng tử mắt của bạn nhìn thẳng vào ống kính cực kỳ tự nhiên!',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Có tính năng dùng thử trên Web/App và công cụ nén/chuyển đổi miễn phí; xuất không giới hạn thuộc gói Pro (~$9.99/tháng).',
    level: 'Cơ bản',
    officialUrl: 'https://www.captions.ai/',
    tags: ['Eye Contact AI', 'Talking Head', 'Teleprompter', 'Reels Creator'],
    whatIsIt: 'Captions là studio sáng tạo video cá nhân bằng AI nổi tiếng nhất với tính năng máy nhắc chữ tích hợp, chỉnh ánh mắt nhìn thẳng ống kính (AI Eye Contact), tự động zoom vào ra theo nhịp nói và chèn hình minh họa B-roll tự động.',
    bestFor: 'Sinh viên xây dựng thương hiệu cá nhân (Talking-head Videos) hay bị quên lời phải nhìn kịch bản khi quay.',
    platforms: 'iOS, Android, macOS, Web Browser',
    vietnameseSupport: 'Hỗ trợ nhận diện phụ đề tiếng Việt chuẩn xác.',
    studentPerk: 'Tính năng máy nhắc chữ (Teleprompter) chạy trên màn hình điện thoại giúp quay 1 đúp ăn ngay không cần học thuộc lòng kịch bản dài.',
    useCases: [
      'Quay video thuyết trình cá nhân hoặc review chuyên môn nhìn kịch bản mà ánh mắt trên hình vẫn giao tiếp tự tin với người xem.',
      'Tự động chèn hiệu ứng phóng to nhẹ ở những câu nhấn mạnh quan trọng.'
    ],
    pros: [
      'Phong cách phụ đề chữ nhảy hiện đại đúng chuẩn các Top Creator quốc tế.',
      'Công nghệ chỉnh ánh mắt AI Eye Contact cực kỳ mượt.'
    ],
    limitations: 'Nhiều tính năng xuất video hoàn chỉnh yêu cầu đăng ký gói Pro trên ứng dụng.',
    studentTip: 'Nếu chưa quen nói trước ống kính mà dùng máy nhắc chữ miễn phí trên điện thoại, hãy đặt cửa sổ chữ sát ngay dưới cụm camera trước để mắt nhìn tự nhiên nhất!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 361,
    slug: 'd-id-studio',
    name: 'D-ID Creative Reality Studio',
    tagline: 'Làm sống dậy Ảnh Chân dung Tĩnh nói chuyện & Nhúng Trợ lý Mặt người thật lên Web',
    excerpt: 'Tải lên bất kỳ bức ảnh chân dung hoặc linh vật thương hiệu nào kèm file ghi âm, D-ID làm nhân vật cử động đầu và mấp máy môi nói chuyện tức thì.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Tài khoản dùng thử miễn phí tặng 14 ngày / 3–5 phút video để tạo nhân vật nói chuyện từ ảnh.',
    level: 'Cơ bản',
    officialUrl: 'https://www.d-id.com/',
    tags: ['Talking Photo', 'AI Agent Avatar', 'Mascot Video', 'Interactive'],
    whatIsIt: 'D-ID là nền tảng chuyên biến hình ảnh tĩnh thành video nhân vật nói chuyện sống động (Live Portrait) và tạo AI Agent có khuôn mặt trò chuyện trực tiếp với khách truy cập trên website.',
    bestFor: 'Sinh viên muốn cho **Linh vật thương hiệu (Mascot)** hoặc nhân vật lịch sử cất tiếng nói giới thiệu mở màn bài thuyết trình.',
    platforms: 'Web Browser, Canva App Integration, PowerPoint Add-in',
    vietnameseSupport: 'Hỗ trợ tải file ghi âm tiếng Việt lên hoặc chọn giọng đọc tiếng Việt có sẵn.',
    studentPerk: 'Tích hợp sẵn dưới dạng ứng dụng ngay bên trong giao diện thiết kế của **Canva**.',
    useCases: [
      'Làm cho bức tranh nhân vật đại diện thương hiệu tự cất lời chào hội đồng ở slide mở đầu.',
      'Thiết kế ý tưởng Trợ lý tư vấn ảo có khuôn mặt tương tác trực tiếp trên Kiosk điểm bán.'
    ],
    pros: [
      'Hoạt động được với cả ảnh vẽ hoạt hình/3D có khuôn mặt rõ ràng lẫn ảnh người thật.',
      'Kết nối thẳng trong Canva và PowerPoint.'
    ],
    limitations: 'Chỉ cử động phần đầu và khuôn mặt (phần thân và tay ít chuyển động hơn HeyGen).',
    studentTip: 'Thu âm giọng thật truyền cảm của một bạn trong nhóm rồi tải file MP3 đó vào D-ID ghép với ảnh Mascot — tự nhiên và cuốn hút hơn hẳn dùng giọng máy!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 362,
    slug: 'fliki-ai',
    name: 'Fliki',
    tagline: 'Chuyển Bài viết Blog hoặc Slide thành Video có Giọng đọc Tiếng Việt truyền cảm',
    excerpt: 'Chỉ cần dán đường link bài viết blog hoặc dàn ý gạch đầu dòng, Fliki tự chia từng cảnh, ghép video minh họa và đọc lồng tiếng Việt mượt mà.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **5 phút xuất video/âm thanh miễn phí mỗi tháng** (độ phân giải 720p).',
    level: 'Cơ bản',
    officialUrl: 'https://fliki.ai/',
    tags: ['Blog to Video', 'Text to Video', 'Vietnamese TTS', 'Reels'],
    whatIsIt: 'Fliki là công cụ chuyển văn bản và bài viết blog thành video (Blog-to-Video) tích hợp hơn 2.000 giọng đọc AI đa ngôn ngữ cực kỳ tự nhiên.',
    bestFor: 'Content Marketer muốn chuyển đổi nhanh các bài viết chữ trên website thành định dạng video ngắn đăng TikTok, Reels và YouTube Shorts.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Sở hữu nhiều giọng đọc Tiếng Việt (cả Bắc, Trung, Nam) rất rõ ràng.',
    studentPerk: '5 phút miễn phí làm mới hàng tháng đủ tạo 5–8 video ngắn 45 giây.',
    useCases: [
      'Dán URL bài viết trên blog của nhóm vào tính năng Blog-to-Video để tóm tắt thành 1 clip Reels.',
      'Tạo nhanh bản tin âm thanh hoặc video infographic chữ chạy.'
    ],
    pros: [
      'Giao diện chia theo từng dòng câu thoại giống như gõ văn bản nên cực kỳ dễ chỉnh sửa.',
      'Kho giọng đọc tiếng Việt đa dạng.'
    ],
    limitations: 'Bản miễn phí có watermark Fliki góc dưới.',
    studentTip: 'Giữ mỗi cảnh (Scene) chỉ dài khoảng 1 câu ngắn 10–15 chữ để nhịp chuyển hình nhanh, giữ chân người xem không bị chán.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 363,
    slug: 'topview-ai',
    name: 'TopView.ai',
    tagline: 'Trợ lý sản xuất Video Bán hàng E-commerce dựa trên Kho dữ liệu Quảng cáo triệu đô',
    excerpt: 'Học từ hàng triệu mẫu TikTok Shop Ads chuyển đổi cao nhất để tự động cắt ghép ảnh/clip sản phẩm thô của bạn thành video bán hàng đúng công thức nổ đơn.',
    category: 'AI Tạo Video, Avatar & Cắt Clip',
    categorySlug: 'ai-video-avatar',
    pricing: 'Freemium',
    pricingDetail: 'Tặng **10 credits miễn phí** khi tạo tài khoản mới để dựng thử video bán hàng sản phẩm.',
    level: 'Cơ bản',
    officialUrl: 'https://www.topview.ai/',
    tags: ['TikTok Shop Video', 'E-commerce Ads', 'Product Avatar', 'UGC'],
    whatIsIt: 'TopView.ai là công cụ biên tập video tiếp thị chuyên cho thương mại điện tử, hỗ trợ tạo Avatar cầm trực tiếp sản phẩm của bạn trên tay (Product Avatar) và dựng clip bán hàng theo công thức TikTok Top Ads.',
    bestFor: 'TikTok Shop / Shopee Video Seller muốn tạo video người mẫu cầm sản phẩm giới thiệu mà không cần thuê KOC.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ kịch bản và lồng tiếng Việt.',
    studentPerk: '10 credits miễn phí đủ để tạo thử video người mẫu ảo cầm hộp sản phẩm thiết kế của nhóm.',
    useCases: [
      'Tải ảnh hộp sản phẩm của nhóm lên tính năng **Product Avatar** để nhân vật ảo cầm sản phẩm lên giới thiệu như thật.',
      'Tự động ghép các đoạn quay sản phẩm rời rạc thành cấu trúc Hook - Pain - Demo - Offer.'
    ],
    pros: [
      'Tính năng ghép sản phẩm vào bàn tay người nói (Product Holding Avatar) rất thực tế cho E-commerce.',
      'Kho kịch bản được huấn luyện riêng từ quảng cáo chuyển đổi cao.'
    ],
    limitations: 'Số lượt miễn phí chỉ đủ dùng cho 1–2 sản phẩm trọng tâm.',
    studentTip: 'Khi bảo vệ đồ án E-commerce, chiếu 1 clip ngắn do Product Avatar cầm chính sản phẩm của nhóm review sẽ làm hội đồng vô cùng ấn tượng!',
    verifiedAt: '2026-11-24'
  }
];

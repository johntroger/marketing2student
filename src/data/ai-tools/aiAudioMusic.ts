import { MarketingTool } from '../../types';

export const aiAudioMusicTools: MarketingTool[] = [
  {
    id: 96,
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Chuyển văn bản thành giọng nói AI (Text-to-Speech) truyền cảm như người thật',
    excerpt: 'Tạo giọng đọc Voice-over chuyên nghiệp cho TVC, video TikTok, Podcast và lồng tiếng đa ngôn ngữ với cảm xúc tự nhiên.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
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
    id: 100,
    slug: 'descript',
    name: 'Descript',
    tagline: 'Chỉnh sửa Video & Podcast dễ như sửa văn bản Word (Xóa chữ là cắt video)',
    excerpt: 'Tự động bóc băng chữ (Transcript), xóa các từ thừa "à, ừm" chỉ bằng 1 cú bấm và chỉnh sửa video bằng cách xóa đoạn văn bản.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
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
    id: 106,
    slug: 'suno-ai',
    name: 'Suno AI',
    tagline: 'Sáng tác nhạc nền & Bài hát quảng cáo (Brand Jingle) bằng AI trong 30 giây',
    excerpt: 'Chỉ cần gõ lời bài hát hoặc mô tả phong cách nhạc, Suno tạo ra ca khúc hoàn chỉnh có giọng hát tiếng Việt cực mượt để làm nhạc nền chiến dịch.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
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
    id: 364,
    slug: 'udio-music',
    name: 'Udio',
    tagline: 'Sáng tác Âm nhạc AI chất lượng Phòng thu cao cấp & Hòa âm phối khí tinh xảo',
    excerpt: 'Đối thủ lớn nhất của Suno AI: nổi tiếng với độ trong trẻo âm thanh (Audio Fidelity), dải bass/trống sắc nét và khả năng nối dài từng đoạn Điệp khúc chuyên nghiệp.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **10 credits mỗi ngày + 100 credits dự phòng mỗi tháng** hoàn toàn miễn phí.',
    level: 'Trung bình',
    officialUrl: 'https://www.udio.com/',
    tags: ['AI Music', 'Soundtrack', 'Brand Audio', 'Jingle'],
    whatIsIt: 'Udio là nền tảng sáng tạo âm nhạc bằng AI được xây dựng bởi các cựu kỹ sư Google DeepMind, cho phép tạo từng phân đoạn 32 giây–2 phút rồi mở rộng Intro, Verse, Chorus và Outro với chất âm phòng thu chân thực.',
    bestFor: 'Creative Producer cần nhạc nền độc quyền chất lượng âm thanh cao (Cinematic, Indie, Jazz, EDM) cho phim thương hiệu.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Mạnh nhất ở nhạc không lời (Instrumental) và ca khúc tiếng Anh; có thể nhập lời tiếng Việt.',
    studentPerk: 'Credits miễn phí hàng ngày cho phép tải trực tiếp file âm thanh `.mp3` ghép vào TVC không dính bản quyền.',
    useCases: [
      'Tạo bản nhạc nền điện ảnh hào hùng hoặc piano sâu lắng khớp đúng nhịp cao trào 60 giây của TVC câu chuyện thương hiệu.',
      'Sáng tác bộ âm thanh nhận diện (Audio Logo / Sonic Branding 3–5 giây) cuối mỗi video.'
    ],
    pros: [
      'Chất lượng hòa âm nhạc cụ rất thật, ít bị rè kim loại.',
      'Kiểm soát cấu trúc mở rộng từng đoạn nhạc linh hoạt.'
    ],
    limitations: 'Hát tròn vành rõ chữ tiếng Việt đôi khi cần tạo vài lần để chọn bản chuẩn nhất (với nhạc hát tiếng Việt thì Suno dễ ăn ngay hơn, còn nhạc nền chất lượng cao thì Udio cực đỉnh).',
    studentTip: 'Dùng **Udio** làm nhạc nền không lời (Instrumental Cinematic) cho TVC, và dùng **Suno** khi cần bài hát bắt tai có lời tiếng Việt!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 365,
    slug: 'adobe-podcast-enhance',
    name: 'Adobe Podcast (Enhance Speech)',
    tagline: 'Biến Giọng thu âm Điện thoại rè vang thành Giọng Phòng thu Chuyên nghiệp miễn phí',
    excerpt: 'Công cụ cứu mạng của sinh viên quay video ngoại cảnh: xóa sạch tiếng gió, tiếng xe máy, tiếng vang phòng trống chỉ bằng 1 nút gạt miễn phí của Adobe!',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Tính năng **Enhance Speech** miễn phí 100% xử lý tối đa **30 phút/file và tổng cộng 1 giờ âm thanh mỗi ngày**!',
    level: 'Cơ bản',
    officialUrl: 'https://podcast.adobe.com/enhance',
    tags: ['Audio Cleanup', 'Noise Removal', 'Podcast', 'Free Adobe Tool'],
    whatIsIt: 'Adobe Podcast Enhance Speech là công cụ lọc tạp âm và tái tạo tần số giọng nói bằng AI của Adobe, biến bản thu âm bằng micro tai nghe rẻ tiền trong môi trường ồn ào thành chất giọng ấm, dày như thu bằng micro Shure trong phòng cách âm.',
    bestFor: 'Tất cả nhóm sinh viên tự quay video TVC, phỏng vấn đường phố (Vox-pop), thu lồng tiếng thuyết trình tại nhà mà không có micro xịn.',
    platforms: 'Web Browser (podcast.adobe.com/enhance)',
    vietnameseSupport: 'Xử lý giọng nói tiếng Việt tuyệt vời mà không làm méo dấu thanh.',
    studentPerk: 'Miễn phí tới **1 tiếng âm thanh mỗi ngày** chỉ cần đăng nhập tài khoản Adobe/Google miễn phí.',
    useCases: [
      'Tách âm thanh từ video phỏng vấn khách hàng ngoài quán cà phê ồn ào, đưa lên Adobe Enhance lọc sạch tạp âm rồi ghép ngược lại vào CapCut.',
      'Làm ấm và rõ giọng thu thuyết trình bài giảng/podcast của nhóm.'
    ],
    pros: [
      'Hiệu quả kỳ diệu chỉ với duy nhất 1 thanh kéo cường độ (Strength).',
      'Hoàn toàn miễn phí 1 giờ mỗi ngày.'
    ],
    limitations: 'Bản miễn phí chỉ nhận file âm thanh (`.mp3`, `.wav`) ở một số trình duyệt — nếu có file video `.mp4`, bạn chỉ cần xuất riêng tiếng từ CapCut ra `.mp3` mất 2 giây.',
    studentTip: 'Đừng bao giờ kéo thanh Strength lên kịch 100% (dễ nghe hơi giả); hãy để ở mức **75%–85%** để vừa sạch tiếng ồn vừa giữ hơi thở tự nhiên nhất!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 366,
    slug: 'turboscribe-whisper',
    name: 'TurboScribe (OpenAI Whisper)',
    tagline: 'Bóc băng Ghi âm Phỏng vấn sâu & Bài giảng Tiếng Việt ra chữ chính xác 99% miễn phí',
    excerpt: 'Vận hành trên mô hình Whisper mạnh nhất: tặng miễn phí 3 file ghi âm mỗi ngày (mỗi file dài tới 30 phút!) chuyển thẳng giọng nói tiếng Việt thành văn bản Word.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cực kỳ hào phóng: **Miễn phí 3 lượt bóc băng mỗi ngày** (mỗi file dài tối đa 30 phút = 90 phút miễn phí/ngày!).',
    level: 'Cơ bản',
    officialUrl: 'https://turboscribe.ai/',
    tags: ['Speech to Text', 'Interview Transcript', 'Whisper AI', 'Qualitative Research'],
    whatIsIt: 'TurboScribe là dịch vụ chuyển giọng nói thành văn bản (Audio/Video Transcription) chạy trên mô hình Whisper Large của OpenAI, hỗ trợ phân biệt người nói (Speaker Recognition - Người hỏi vs Đáp viên) và xuất file `.docx`, `.pdf`, `.srt`.',
    bestFor: 'Sinh viên làm **Nghiên cứu định tính (Phỏng vấn sâu In-depth Interview & Thảo luận nhóm Focus Group)** hoặc ghi âm bài giảng trên lớp.',
    platforms: 'Web Browser',
    vietnameseSupport: 'Nhận diện Tiếng Việt (kể cả giọng địa phương và nói xen từ tiếng Anh chuyên ngành) chuẩn tới 98–99%!',
    studentPerk: 'Miễn phí 3 cuộc phỏng vấn dài 30 phút mỗi ngày — cứu bạn khỏi cảnh ngồi đeo tai nghe gõ lại từng chữ suốt cả đêm!',
    useCases: [
      'Bóc băng 10 file ghi âm phỏng vấn khách hàng ra file Word (có chia rõ Người nói 1, Người nói 2), sau đó ném thẳng vào **NotebookLM** để trích xuất Insight.',
      'Xuất file phụ đề `.srt` chuẩn mốc thời gian để nạp vào video.'
    ],
    pros: [
      'Độ chính xác tiếng Việt vượt xa các công cụ gõ giọng nói thông thường.',
      'Tự động tách đoạn theo từng người nói.'
    ],
    limitations: 'Giới hạn 3 file/ngày ở gói Free (sang ngày hôm sau lại được cấp mới 3 lượt).',
    studentTip: 'Combo thần thánh cho môn Nghiên cứu Marketing: Ghi âm phỏng vấn điện thoại -> Bóc chữ bằng **TurboScribe** -> Đưa toàn bộ bản chữ vào **NotebookLM** phân tích chủ đề!',
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 367,
    slug: 'fireflies-ai',
    name: 'Fireflies.ai',
    tagline: 'Trợ lý AI tự động vào phòng họp Google Meet / Zoom ghi chép Biên bản họp (Meeting Notes)',
    excerpt: 'Tự động ghi âm, bóc băng cuộc họp nhóm hoặc họp khách hàng, sau đó tóm tắt các quyết định chính và danh sách việc cần làm (Action Items) cho từng thành viên.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí bóc băng không giới hạn cuộc họp (với 800 phút dung lượng lưu trữ trên tài khoản).',
    level: 'Cơ bản',
    officialUrl: 'https://fireflies.ai/',
    tags: ['Meeting Assistant', 'Google Meet', 'Action Items', 'Teamwork'],
    whatIsIt: 'Fireflies.ai là trợ lý ghi chép cuộc họp thông minh tích hợp lịch Google Calendar để tự động tham gia các buổi họp trên Google Meet, Zoom, Microsoft Teams, ghi lại toàn bộ nội dung và tóm tắt đầu việc.',
    bestFor: 'Nhóm trưởng đồ án họp nhóm online hàng tuần và Account Intern ghi biên bản họp với khách hàng (Meeting Minutes / Contact Report).',
    platforms: 'Web Browser, Chrome Extension, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ chọn ngôn ngữ cuộc họp là **Tiếng Việt** trong phần Settings để bóc băng và tóm tắt tiếng Việt chuẩn xác!',
    studentPerk: 'Miễn phí lưu trữ 800 phút họp và tải file ghi âm rời lên bóc băng.',
    useCases: [
      'Tự động lập Biên bản họp nhóm (ai hứa làm việc gì, deadline ngày nào) gửi cho các thành viên vắng mặt mà không cần 1 bạn ngồi cặm cụi ghi chép.',
      'Ghi lại trọn vẹn yêu cầu sửa bài (Feedback) của giảng viên hướng dẫn trong buổi duyệt bài qua Google Meet.'
    ],
    pros: [
      'Tự động nhận diện câu giao việc (Action Items) và câu hỏi.',
      'Hỗ trợ tiếng Việt rất tốt khi bật đúng cài đặt ngôn ngữ.'
    ],
    limitations: 'Tóm tắt AI nâng cao giới hạn số credits miễn phí ban đầu (nhưng phần bóc băng toàn văn vẫn mở).',
    studentTip: 'Nhớ vào `Settings -> Meeting Language` chuyển sang **Vietnamese** ngay sau khi đăng ký để Fireflies nghe chuẩn tiếng Việt 100% khi nhóm họp Google Meet.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 368,
    slug: 'tldv-meeting',
    name: 'tl;dv (Too Long; Didn’t View)',
    tagline: 'Quay video, Đánh dấu mốc quan trọng & Tóm tắt Họp Google Meet/Zoom miễn phí',
    excerpt: 'Công cụ quay lại màn hình cuộc họp Google Meet miễn phí (kể cả khi Gmail cá nhân không có nút Record trên Meet!) kèm tóm tắt AI.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Forever cho phép **quay video và bóc băng không giới hạn số cuộc họp** trên Google Meet, Zoom và MS Teams!',
    level: 'Cơ bản',
    officialUrl: 'https://tldv.io/',
    tags: ['Google Meet Recorder', 'User Research', 'Meeting Clips', 'Free Forever'],
    whatIsIt: 'tl;dv là công cụ ghi hình, bóc băng và cắt clip ngắn từ các buổi họp trực tuyến, giải quyết triệt để việc tài khoản Gmail miễn phí của sinh viên bị khóa tính năng quay lại cuộc họp trên Google Meet.',
    bestFor: 'Sinh viên phỏng vấn khách hàng qua Google Meet (UX/Market Research) và quay lại buổi giảng viên sửa khóa luận online.',
    platforms: 'Chrome Extension, Desktop App (macOS/Windows)',
    vietnameseSupport: 'Hỗ trợ nhận diện phụ đề cuộc họp bằng Tiếng Việt.',
    studentPerk: 'Quay lại video cả hình lẫn tiếng của buổi Google Meet hoàn toàn miễn phí không giới hạn số cuộc gọi!',
    useCases: [
      'Quay lại buổi phỏng vấn thử nghiệm người dùng (Usability Testing) nhìn khách hàng thao tác trên màn hình Landing Page của nhóm.',
      'Cắt nhanh 1 đoạn clip 30 giây lời dặn của giảng viên hoặc khách hàng gửi vào nhóm Zalo.'
    ],
    pros: [
      'Thay thế hoàn hảo tính năng Record trả phí của Google Workspace.',
      'Chia sẻ link xem lại có sẵn mốc thời gian từng phần cực kỳ tiện.'
    ],
    limitations: 'Video ở gói Free lưu trữ xem trực tuyến (muốn tải file MP4 gốc về máy cần gói Pro).',
    studentTip: 'Khi họp online duyệt đề tài với thầy cô qua Google Meet bằng Gmail thường không có nút Quay lại, hãy bật **tl;dv** để không bỏ sót bất kỳ góp ý sửa bài nào!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 369,
    slug: 'fathom-video',
    name: 'Fathom AI Notetaker',
    tagline: 'Trợ lý ghi hình & Tóm tắt Cuộc họp AI hào phóng nhất (Miễn phí không giới hạn!)',
    excerpt: 'Được xếp hạng #1 về độ hài lòng: miễn phí 100% không giới hạn cả quay video cuộc họp, bóc băng lẫn bản tóm tắt AI chi tiết ngay sau khi cúp máy 30 giây.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Bản cá nhân miễn phí 100% trọn đời cho cả Recording, Transcription và AI Summaries không giới hạn cuộc họp!',
    level: 'Cơ bản',
    officialUrl: 'https://fathom.video/',
    tags: ['Free AI Notetaker', 'Zoom', 'Google Meet', 'Meeting Summary'],
    whatIsIt: 'Fathom là ứng dụng ghi chép cuộc họp bằng AI nổi tiếng nhờ chính sách miễn phí toàn bộ tính năng cá nhân (ghi hình, bóc chữ đa ngôn ngữ và sinh tóm tắt AI theo mẫu) chỉ thu phí các tính năng quản trị đội Sales lớn.',
    bestFor: 'Sinh viên, Freelancer và Account Executive họp online thường xuyên trên Zoom, Google Meet, Microsoft Teams.',
    platforms: 'Windows, macOS App, Chrome Extension',
    vietnameseSupport: 'Hỗ trợ nhận diện tiếng Việt trong danh sách 28+ ngôn ngữ.',
    studentPerk: 'Không bị khóa giới hạn số lượt tóm tắt AI hàng tháng như nhiều công cụ họp khác.',
    useCases: [
      'Nhận ngay biên bản tóm tắt cuộc họp trình bày sạch đẹp chỉ 30 giây sau khi kết thúc buổi họp nhóm.',
      'Copy dán thẳng biên bản định dạng sẵn (kèm link trỏ đúng giây phát biểu) vào Google Docs hoặc Notion.'
    ],
    pros: [
      'Gói miễn phí cá nhân rộng rãi nhất phân khúc AI Meeting Notetaker.',
      'Tốc độ xử lý biên bản cực nhanh.'
    ],
    limitations: 'Cần cài ứng dụng nhẹ hoặc tiện ích trình duyệt trước giờ vào họp.',
    studentTip: 'Luôn lịch sự xin phép khách mời/đáp viên một câu trước khi cho bot ghi âm tham gia phòng phỏng vấn để thể hiện tác phong nghiên cứu chuyên nghiệp.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 370,
    slug: 'krisp-ai',
    name: 'Krisp AI',
    tagline: 'Chặn đứng tiếng ồn môi trường Thời gian thực (Tiếng chó sủa, Quạt, Quán Cafe) khi Họp',
    excerpt: 'Bạn đang ngồi ở quán cà phê ồn ào mà phải bật mic thuyết trình online, Krisp lọc sạch 100% tạp âm xung quanh ngay lúc bạn đang nói!',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **60 phút khử tiếng ồn mỗi ngày** và ghi chép cuộc họp cơ bản hoàn toàn miễn phí.',
    level: 'Cơ bản',
    officialUrl: 'https://krisp.ai/',
    tags: ['Real-time Noise Canceling', 'Online Presentation', 'Voice Clarity', 'Audio'],
    whatIsIt: 'Krisp AI là phần mềm khử tiếng ồn hai chiều theo thời gian thực (Real-time AI Noise Cancellation) hoạt động như một micro ảo nằm giữa tai nghe của bạn và Zoom/Google Meet/Discord/Teams.',
    bestFor: 'Sinh viên ở ký túc xá đông người hoặc ngồi quán cà phê cần thuyết trình, phỏng vấn xin việc online âm thanh trong trẻo.',
    platforms: 'Windows, macOS',
    vietnameseSupport: 'Lọc âm thanh trực tiếp trên máy tính với mọi ngôn ngữ.',
    studentPerk: '60 phút khử ồn miễn phí làm mới mỗi ngày vừa khít cho 1 buổi phỏng vấn tuyển dụng hoặc thuyết trình môn học.',
    useCases: [
      'Thuyết trình online hoặc phỏng vấn thực tập tại nhà mà không sợ tiếng còi xe, tiếng công trình xây dựng hay tiếng quạt lọt vào mic.',
      'Ghi âm giọng đọc trực tiếp vào CapCut/Canva sạch tiếng ồn ngay từ đầu.'
    ],
    pros: [
      'Xử lý trực tiếp trên thiết bị (On-device) nên không có độ trễ tiếng.',
      'Chặn được cả tiếng người khác nói chuyện ngay bàn bên cạnh.'
    ],
    limitations: 'Giới hạn 60 phút/ngày ở gói miễn phí.',
    studentTip: 'Chỉ bật công tắc Krisp vào đúng lúc đến lượt bạn thuyết trình hoặc vào ca phỏng vấn để luôn dư dả 60 phút miễn phí mỗi ngày.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 371,
    slug: 'murf-ai',
    name: 'Murf.ai',
    tagline: 'Studio Lồng tiếng Quảng cáo & E-Learning chuyên nghiệp điều chỉnh Cao độ/Nhịp nghỉ',
    excerpt: 'Trình biên tập Voiceover theo dòng thời gian cho phép ghép giọng đọc khớp từng giây với hình ảnh slide hoặc video sản phẩm.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng 10 phút tạo giọng nói để nghe thử nghiệm và chia sẻ link xem trước (tải file MP3 cần gói Creator).',
    level: 'Cơ bản',
    officialUrl: 'https://murf.ai/',
    tags: ['Studio Voiceover', 'E-Learning', 'Ad Narration', 'Audio Sync'],
    whatIsIt: 'Murf.ai là phòng thu lồng tiếng AI trực tuyến cung cấp khả năng kiểm soát chi tiết tốc độ đọc, nhấn trọng âm từng từ (Emphasis), khoảng lặng và đồng bộ trực tiếp với video/slide.',
    bestFor: 'Người làm video giới thiệu doanh nghiệp, khóa học E-learning và thuyết minh quảng cáo tiếng Anh.',
    platforms: 'Web Browser, Canva Add-on, Google Slides Add-on',
    vietnameseSupport: 'Mạnh nhất ở hệ thống giọng đọc tiếng Anh Mỹ/Anh/Úc chuyên nghiệp.',
    studentPerk: 'Có Add-on tích hợp thẳng vào Google Slides để khớp lời thuyết minh cho từng trang slide.',
    useCases: [
      'Ghép lời bình tiếng Anh chuẩn giọng phát thanh viên cho video dự thi cuộc thi Marketing quốc tế.',
      'Điều chỉnh nhấn mạnh (Emphasis) đúng vào tên thương hiệu và lợi ích chính.'
    ],
    pros: [
      'Giao diện Timeline ghép cả Nhạc nền + Giọng đọc + Hình ảnh rất trực quan.',
      'Chất giọng thuyết minh quảng cáo chững chạc.'
    ],
    limitations: 'Bản miễn phí không cho tải file âm thanh rời xuống máy (nếu cần tải MP3 miễn phí ngay hãy dùng **ElevenLabs**).',
    studentTip: 'Nếu cần xuất thẳng file MP3 giọng đọc tiếng Việt miễn phí thì ưu tiên dùng **ElevenLabs** (10.000 ký tự/tháng), còn làm slide tiếng Anh có sẵn Add-on thì thử Murf.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 372,
    slug: 'speechify',
    name: 'Speechify',
    tagline: 'Chuyển Sách Giáo trình, PDF & Bài báo dài thành Sách nói (Audiobook) nghe mọi lúc',
    excerpt: 'Giúp sinh viên "nghe" hết hàng chục trang tài liệu đọc trước buổi học (Pre-reading) bằng tai nghe trong lúc đi xe buýt hoặc tập thể dục với tốc độ 1.5x–2x.',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Bản miễn phí đọc không giới hạn bằng các giọng tiêu chuẩn và tặng dùng thử giọng AI HD.',
    level: 'Cơ bản',
    officialUrl: 'https://speechify.com/',
    tags: ['Text to Speech', 'Speed Reading', 'PDF Reader', 'Productivity'],
    whatIsIt: 'Speechify là ứng dụng đọc văn bản thành giọng nói (Text-to-Speech Reader) phổ biến số 1 trên di động và trình duyệt, hỗ trợ chụp ảnh trang sách giấy bằng camera để đọc thành tiếng và tô sáng từng chữ đang đọc.',
    bestFor: 'Sinh viên bận rộn cần tiêu hóa lượng lớn bài đọc Case Study Harvard / bài báo tiếng Anh mỗi tuần.',
    platforms: 'iOS, Android, Chrome Extension, Web App',
    vietnameseSupport: 'Hỗ trợ đọc cả văn bản tiếng Việt và tiếng Anh.',
    studentPerk: 'Vừa nghe tai nghe vừa nhìn dòng chữ tô sáng chạy theo giúp tăng tốc độ đọc hiểu tiếng Anh gấp 2 lần mà không bị buồn ngủ.',
    useCases: [
      'Nghe lại chính bài tiểu luận của mình trước khi nộp — tai nghe sẽ phát hiện ngay những câu văn bị lủng củng hoặc lặp từ mà mắt đọc lướt hay bỏ sót!',
      'Chụp trang sách giáo trình in giấy để nghe khi đang di chuyển.'
    ],
    pros: [
      'Đồng bộ vị trí đang đọc giữa laptop và điện thoại rất mượt.',
      'Chỉnh tăng tốc độ đọc mượt mà.'
    ],
    limitations: 'Giọng đọc truyền cảm cao cấp giới hạn số từ ở gói Free.',
    studentTip: 'Mẹo biên tập chuyên nghiệp: Hãy cho máy đọc to lại bài viết Copywriting của bạn một lượt — câu nào đọc lên bị hụt hơi là câu đó cần tách ngắn ra!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 373,
    slug: 'vocalremover-org',
    name: 'VocalRemover.org',
    tagline: 'Tách Nhạc nền (Beat) & Giọng hát khỏi Bài hát/Video bằng AI miễn phí 100%',
    excerpt: 'Muốn giữ lại phần nhạc nền của một TVC để lồng giọng mới, hoặc giữ nguyên giọng nói và xóa nhạc dính bản quyền trong clip? Tách sạch sẽ trong 10 giây miễn phí!',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% các tính năng cốt lõi (Tách Vocal/Music, Cắt nhạc, Đổi tông, Đo nhịp BPM) không cần đăng nhập!',
    level: 'Cơ bản',
    officialUrl: 'https://vocalremover.org/',
    tags: ['Stem Splitter', 'Remove Copyright Music', 'Audio Editing', 'Free Tool'],
    whatIsIt: 'VocalRemover.org là bộ công cụ xử lý âm thanh bằng AI miễn phí trên trình duyệt, tách riêng biệt rãnh Giọng nói/Hát (Vocals) và rãnh Nhạc đệm (Music) với độ sạch rất cao.',
    bestFor: 'Video Editor cần cứu các đoạn quay ngoại cảnh bị lọt tiếng nhạc quán cà phê gây dính gậy bản quyền YouTube/TikTok!',
    platforms: 'Web Browser',
    vietnameseSupport: 'Có giao diện Tiếng Việt (`vocalremover.org/vi/`) cực kỳ dễ dùng.',
    studentPerk: 'Miễn phí 100%, không cần tạo tài khoản, tải ngay file `.mp3` / `.wav` đã tách sạch.',
    useCases: [
      'Quay phỏng vấn hoặc vlog tại sự kiện có loa phát nhạc nền lớn -> Dùng VocalRemover tách bỏ hoàn toàn tiếng nhạc để không bị tắt tiếng bản quyền khi đăng TikTok/YouTube!',
      'Đo nhịp BPM của bài nhạc nền để cắt chuyển cảnh video khớp đúng phách trống.'
    ],
    pros: [
      'Nhanh, miễn phí, không quảng cáo làm phiền và chất lượng tách sạch bất ngờ.',
      'Có công cụ dò BPM rất hữu ích cho dân dựng clip.'
    ],
    limitations: 'Giới hạn tần suất nếu tải hàng chục file cực nặng liên tiếp trong vài phút.',
    studentTip: 'Đây là "phao cứu sinh" số 1 khi nhóm lỡ quay video ở trung tâm thương mại/quán nước có phát nhạc bản quyền dính vào lời thoại nhân vật!',
    verifiedAt: '2026-11-24'
  },
  {
    id: 374,
    slug: 'soundraw-io',
    name: 'SOUNDRAW',
    tagline: 'Tạo Nhạc nền Video tùy chỉnh Độ dài & Điểm Cao trào (Beat Drop) an toàn Bản quyền',
    excerpt: 'Chọn tâm trạng (Hào hứng, Ấm áp, Công nghệ), chọn đúng độ dài 45 giây của TVC và bấm chọn giây thứ 15 nhạc dồn dập lên cao trào theo đúng kịch bản!',
    category: 'AI Giọng nói, Âm nhạc & Họp trực tuyến',
    categorySlug: 'ai-audio-music',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí tạo và tùy chỉnh không giới hạn bản nhạc thử nghiệm trên web; tải file khai thác thương mại thuộc gói Creator.',
    level: 'Cơ bản',
    officialUrl: 'https://soundraw.io/',
    tags: ['Royalty-Free Music', 'Video BGM', 'Custom Tempo', 'Creator Music'],
    whatIsIt: 'SOUNDRAW là trình tạo nhạc nền AI cho nhà sáng tạo video, cho phép chỉnh cường độ từng khuông nhạc (Quiet, Medium, High, Very High) để âm nhạc ăn khớp tuyệt đối với diễn biến hình ảnh trong video.',
    bestFor: 'Video Producer cần nhạc nền biến thiên cường độ khớp với từng đoạn Mở đầu - Thắt nút - Cao trào - Kết thúc.',
    platforms: 'Web Browser, Premiere Pro Plugin',
    vietnameseSupport: 'Giao diện chọn thể loại và kéo thanh năng lượng trực quan.',
    studentPerk: 'Thử nghiệm phối hợp nhịp độ nhạc nền trực tiếp cùng video xem trước hoàn toàn miễn phí.',
    useCases: [
      'Hạ nhẹ nhạc cụ ở đoạn diễn viên đang thoại và đẩy mạnh trống ở đoạn chiếu cảnh sản phẩm hoàn thiện.',
      'Học tư duy thiết kế cấu trúc âm thanh (Sound Design) cho TVC quảng cáo.'
    ],
    pros: [
      'Kiểm soát chính xác giây nào nhạc nhẹ, giây nào nhạc bùng nổ (điều nhạc tải sẵn cố định khó làm được).',
      'An toàn bản quyền 100% vì mẫu âm thanh do chính đội ngũ SOUNDRAW tự thu.'
    ],
    limitations: 'Tải file xuống máy yêu cầu gói thuê bao.',
    studentTip: 'Dùng trình xem trước kèm video trên SOUNDRAW để luyện cảm nhận nhịp điệu âm nhạc (Pacing) khi biên tập TVC.',
    verifiedAt: '2026-11-24'
  }
];

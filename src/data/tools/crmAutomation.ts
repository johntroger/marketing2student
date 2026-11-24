import { MarketingTool } from '../../types';

export const crmAutomationTools: MarketingTool[] = [
  {
    id: 21,
    slug: 'hubspot-crm',
    name: 'HubSpot CRM & Marketing Hub',
    tagline: 'Hệ thống CRM quản lý khách hàng tiềm năng, Form & Email Automation',
    excerpt: 'Nền tảng CRM miễn phí hàng đầu giúp tạo form thu thập Lead trên Landing Page, quản lý phễu bán hàng và tự động gửi email cảm ơn.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Tools miễn phí vĩnh viễn: quản lý liên hệ CRM, tạo Lead Form, Live Chat, Landing Page và gửi tới 2.000 email/tháng.',
    level: 'Trung bình',
    officialUrl: 'https://www.hubspot.com/products/crm',
    tags: ['CRM', 'Lead Generation', 'Email Marketing', 'HubSpot'],
    whatIsIt: 'HubSpot CRM & Marketing Hub là nền tảng quản trị quan hệ khách hàng và Inbound Marketing hợp nhất hàng đầu thế giới, giúp doanh nghiệp thu thập thông tin khách hàng tiềm năng (Leads) qua biểu mẫu/Live Chat, lưu trữ lịch sử tương tác xuyên suốt, quản lý phễu bán hàng (Deal Pipeline) và gửi chiến dịch Email Marketing.',
    bestFor: 'Sinh viên học môn CRM, Inbound Marketing, B2B Marketing và nhóm dự án cần hệ thống thu thập & quản lý Lead chuyên nghiệp trên Landing Page.',
    platforms: 'Web Browser (Cloud), iOS & Android App, tích hợp WordPress, Shopify, Gmail & Outlook',
    vietnameseSupport: 'Hỗ trợ lưu trữ dữ liệu tiếng Việt, tạo Form và gửi Email Marketing tiếng Việt chuẩn mã Unicode.',
    studentPerk: 'Gói HubSpot Free CRM miễn phí trọn đời; đặc biệt nền tảng HubSpot Academy cung cấp các chứng chỉ quốc tế (Inbound Marketing, Email Marketing, Content Marketing) miễn phí 100% cực kỳ uy tín khi đưa vào CV.',
    useCases: [
      'Tạo Form đăng ký nhận tài liệu (Lead Magnet) hoặc đăng ký tư vấn nhúng vào Landing Page đồ án, dữ liệu khách tự động đổ về bảng CRM kèm nguồn UTM.',
      'Phân loại khách hàng theo giai đoạn vòng đời (Subscriber > Lead > MQL > SQL > Customer) và gửi chiến dịch Email chăm sóc.'
    ],
    quickSteps: [
      'Đăng ký tài khoản miễn phí tại hubspot.com (chọn gói Free CRM Tools).',
      'Vào mục Marketing > Forms để thiết kế biểu mẫu thu thập thông tin khách hàng (Họ tên, Email, SĐT, Nhu cầu) và lấy mã Embed nhúng vào Landing Page.',
      'Cài đặt mã HubSpot Tracking Code vào Google Tag Manager để hệ thống tự động ghi nhận khách đã xem những trang nào trước khi điền form.',
      'Vào mục CRM > Contacts & Deals để xem hồ sơ khách hàng và kéo thả tiến trình chăm sóc trên bảng Pipeline.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Tạo 1 biểu mẫu thu thập Lead trên HubSpot CRM, thiết lập 1 email tự động gửi tài liệu (Follow-up Email) ngay sau khi khách bấm gửi form, và chụp lại màn hình hồ sơ Contact Timeline trong CRM làm minh chứng luồng Inbound Marketing.',
    pros: [
      'Trải nghiệm hệ thống CRM & Marketing Automation chuẩn tập đoàn quốc tế hoàn toàn miễn phí.',
      'Ghi nhận tự động nguồn gốc khách hàng (Original Source / UTM) và lịch sử xem trang của từng Contact.'
    ],
    limitations: 'Các luồng tự động hóa đa nhánh phức tạp (Omni-channel Workflows) ở gói trả phí có giá rất cao dành cho doanh nghiệp lớn.',
    studentTip: 'Học lấy chứng chỉ Inbound Marketing miễn phí trên HubSpot Academy và thực hành nhúng Form HubSpot vào Landing Page của nhóm — điểm thực hành môn Digital/CRM chắc chắn sẽ nổi bật.',
    alternatives: [
      { name: 'Brevo (Sendinblue)', slug: 'brevo', comparison: 'Brevo mở khóa tính năng kịch bản Email Automation đa nhánh ngay ở gói miễn phí dễ dàng hơn HubSpot.' },
      { name: 'Tally Forms', slug: 'tally-forms', comparison: 'Tally tạo form khảo sát nhanh và đẹp hơn nếu bạn chỉ cần đổ dữ liệu đơn giản về Google Sheets.' }
    ],
    faqs: [
      {
        q: 'Chứng chỉ trên HubSpot Academy có mất phí thi hay hết hạn không?',
        a: 'Toàn bộ các khóa học và bài thi lấy chứng chỉ trên HubSpot Academy đều miễn phí 100%. Chứng chỉ có hiệu lực trong vòng 1–2 năm và có thể gắn trực tiếp lên hồ sơ LinkedIn với mã xác thực quốc tế.'
      }
    ],
    featured: true,
    verifiedAt: '2026-11-24'
  },
  {
    id: 22,
    slug: 'brevo',
    name: 'Brevo (Sendinblue)',
    tagline: 'Nền tảng Email Marketing & Automation thân thiện cho chiến dịch gửi thư',
    excerpt: 'Thiết kế email kéo thả đẹp mắt, phân đoạn danh sách khách hàng và gửi chiến dịch email tự động với chi phí tối ưu.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói miễn phí vĩnh viễn cho phép gửi tối đa 300 email/ngày (~9.000 email/tháng) và lưu trữ tới 100.000 liên hệ.',
    level: 'Cơ bản',
    officialUrl: 'https://www.brevo.com/',
    tags: ['Email Marketing', 'Newsletter', 'Automation', 'Segmentation'],
    whatIsIt: 'Brevo (tên cũ là Sendinblue) là nền tảng Email Marketing và Marketing Automation hàng đầu châu Âu, nổi bật với trình thiết kế email kéo thả hiện đại, phân đoạn khách hàng động (Dynamic Segmentation) và đặc biệt cho phép thiết lập luồng kịch bản gửi thư tự động (Automation Workflows) ngay trên gói miễn phí.',
    bestFor: 'Sinh viên thực hành môn Email Marketing, E-commerce Marketer và SME cần gửi bản tin Newsletter hoặc kịch bản chuỗi email chào mừng tự động.',
    platforms: 'Web Browser (Cloud), API, SMTP, Plugin cho WordPress/WooCommerce/Shopify',
    vietnameseSupport: 'Hiển thị tiếng Việt hoàn hảo trong trình thiết kế Email và các biến cá nhân hóa (`{{ contact.FIRSTNAME }}`).',
    studentPerk: 'Cho phép gửi 300 email/ngày miễn phí và mở khóa đầy đủ tính năng vẽ sơ đồ Automation Workflow (cho tối đa 2.000 liên hệ) mà Mailchimp đã cắt ở bản Free.',
    useCases: [
      'Thiết kế bản tin Email Newsletter chuyên nghiệp có chèn biến cá nhân hóa tên người nhận ở tiêu đề và lời chào.',
      'Vẽ kịch bản Automation: Khi khách đăng ký trên web > Chờ 2 phút > Gửi Email 1 tặng Ebook > Nếu sau 2 ngày khách đã mở mail nhưng chưa bấm link > Tự động gửi Email 2 nhắc nhở.'
    ],
    quickSteps: [
      'Đăng ký tài khoản miễn phí tại brevo.com và xác thực địa chỉ email người gửi (Sender).',
      'Vào mục Contacts > Lists để tải danh sách email thử nghiệm của các thành viên trong nhóm hoặc kết nối từ Form đăng ký.',
      'Mở mục Campaigns > Email để thiết kế thư bằng trình kéo thả Drag & Drop và chèn biến cá nhân hóa.',
      'Vào mục Automations để vẽ sơ đồ kịch bản chuỗi email tự động và theo dõi báo cáo Open Rate, Click-to-Open Rate (CTOR).'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dùng AI viết 2 phương án tiêu đề Email (Subject Line) khác nhau cho cùng một chiến dịch, gửi thử nghiệm trên Brevo và giải thích cách đọc các chỉ số Delivery Rate, Open Rate, CTR và Unsubscribe Rate.',
    pros: [
      'Hỗ trợ tính năng vẽ luồng Automation Workflow rẽ nhánh (If/Else) ngay trên gói miễn phí — cực kỳ giá trị để sinh viên thực hành.',
      'Giới hạn 300 email/ngày (~9.000 email/tháng) hào phóng hơn nhiều so với giới hạn 1.000 email/tháng của Mailchimp Free.'
    ],
    limitations: 'Ở gói miễn phí, cuối mỗi email sẽ có đính kèm dòng chữ nhỏ "Sent with Brevo".',
    studentTip: 'Kết hợp bài học "AI viết tiêu đề email cá nhân hóa" trên Marketing2Student rồi dựng luồng Automation thực tế trên Brevo để chụp sơ đồ workflow đưa vào đồ án.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot mạnh hơn về quản trị hồ sơ Sales CRM tổng thể, còn Brevo dễ dùng và hào phóng hơn ở tính năng vẽ kịch bản Email Automation miễn phí.' }
    ],
    faqs: [
      {
        q: 'Vì sao khi gửi Email Marketing thử nghiệm bằng Gmail cá nhân thì thư hay bị rơi vào mục Quảng cáo hoặc Spam?',
        a: 'Các dịch vụ gửi email hàng loạt như Brevo yêu cầu xác thực chữ ký tên miền riêng (DKIM, SPF, DMARC) để chứng minh uy tín người gửi. Nếu sinh viên dùng tạm địa chỉ `@gmail.com` làm Sender để test bài tập, bạn nên gửi cho danh sách nhỏ trong nhóm.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 23,
    slug: 'n8n-automation',
    name: 'n8n (Workflow Automation)',
    tagline: 'Tự động hóa quy trình Marketing & AI Agent mã nguồn mở không giới hạn',
    excerpt: 'Kết nối Webhook từ Form Landing Page, Google Sheets, Gemini/ChatGPT, Facebook Page và Telegram thành quy trình làm việc tự động 24/7.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Mã nguồn mở',
    pricingDetail: 'Miễn phí 100% trọn đời khi tự cài đặt trên máy tính/VPS (Self-hosted Community Edition); có bản Cloud dùng thử miễn phí.',
    level: 'Nâng cao',
    officialUrl: 'https://n8n.io/',
    tags: ['Automation', 'AI Agent', 'Webhook', 'No-Code'],
    whatIsIt: 'n8n là nền tảng tự động hóa quy trình làm việc (Workflow Automation) và xây dựng AI Agent dạng kéo thả các nút (Node-based) có mã nguồn mở, cho phép kết nối hơn 400 ứng dụng (Google Sheets, Telegram, Facebook, Gmail, Webhook) với các mô hình AI (OpenAI, Gemini, Claude) để vận hành hệ thống Marketing tự động 24/7.',
    bestFor: 'Sinh viên định hướng Martech / Growth Marketing / AI Automation và doanh nghiệp muốn tự động hóa quy trình nội dung & chăm sóc Lead với chi phí thấp nhất.',
    platforms: 'Self-hosted (Docker / Node.js trên Windows, macOS, Linux VPS), hoặc n8n Cloud trên Web Browser',
    vietnameseSupport: 'Xử lý dữ liệu JSON và văn bản tiếng Việt hoàn hảo; cộng đồng người dùng n8n Marketing tại Việt Nam rất lớn và sôi động.',
    studentPerk: 'Miễn phí 100% không giới hạn số lượng workflow khi bạn chạy bản Community Edition ngay trên máy tính cá nhân qua Docker hoặc `npx n8n` để làm đồ án.',
    useCases: [
      'Luồng Quản trị Lead tức thì: Khi khách điền Form trên Landing Page (Tally/Web) > Bắn Webhook sang n8n > Tự động nhờ AI phân loại nhu cầu > Ghi vào Google Sheets > Bắn thông báo ngay vào nhóm Telegram/Zalo của đội Sales.',
      'Luồng Trợ lý Nội dung AI: Tự động đọc tin tức mới qua RSS hoặc bảng từ khóa trong Google Sheets > Gọi nút AI Agent (Gemini/ChatGPT) tóm tắt và soạn bản nháp bài đăng đa kênh.'
    ],
    quickSteps: [
      'Cài đặt nhanh n8n trên máy tính cá nhân bằng Docker (`docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`) hoặc đăng ký bản dùng thử trên n8n.io.',
      'Tạo một Workflow mới bắt đầu bằng nút Trigger (ví dụ: Webhook, Tally Trigger, hoặc Schedule Trigger).',
      'Kéo thêm nút AI Agent (kết nối API Key miễn phí của Google Gemini AI Studio) và nút Google Sheets / Telegram.',
      'Bấm "Test Workflow" để xem dữ liệu chảy qua từng nút theo thời gian thực rồi bật công tắc "Active".'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Dựng 1 workflow tự động trên n8n gồm 4 nút: (1) Nhận dữ liệu từ Form khảo sát > (2) Dùng AI Gemini phân tích cảm xúc & tóm tắt phản hồi của khách > (3) Lưu vào Google Sheets > (4) Gửi thông báo về Telegram của nhóm.',
    pros: [
      'Tiết kiệm chi phí cực lớn so với Zapier hay Make.com vì bản Self-hosted hoàn toàn miễn phí và không tính tiền theo từng bước xử lý.',
      'Hỗ trợ nút AI Agent, Vector Store (RAG) và Memory nguyên bản ngay trên giao diện kéo thả.'
    ],
    limitations: 'Đòi hỏi tư duy logic luồng dữ liệu (Input -> Process -> Output) và hiểu khái niệm cơ bản về API Key hoặc Webhook.',
    studentTip: 'Sở hữu 1–2 sơ đồ workflow n8n thực tế trong Portfolio/CV là điểm cộng cực kỳ đắt giá khi ứng tuyển các vị trí AI Marketing, Martech hoặc Growth Intern năm 2026.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot là phần mềm CRM đóng gói sẵn, còn n8n là cầu nối linh hoạt giúp bạn tự lắp ráp quy trình nối bất kỳ công cụ nào với AI.' }
    ],
    faqs: [
      {
        q: 'Sinh viên không biết lập trình (Code) có học và dùng được n8n không?',
        a: 'Hoàn toàn dùng được. Hơn 90% thao tác trong n8n là kéo thả các khối có sẵn và nối dây giữa các ứng dụng. Khi cần biến đổi dữ liệu nhỏ, bạn chỉ cần chụp màn hình nhờ ChatGPT hoặc Claude viết giúp đoạn biểu thức ngắn.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 24,
    slug: 'tally-forms',
    name: 'Tally Forms',
    tagline: 'Tạo biểu mẫu khảo sát nghiên cứu thị trường & thu thập Lead không giới hạn',
    excerpt: 'Thay thế hoàn hảo cho Google Forms với giao diện đẹp như Notion, hỗ trợ logic rẽ nhánh, tính điểm trắc nghiệm và nhúng mượt mà vào web.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Miễn phí 99% tính năng cốt lõi: Không giới hạn số lượng biểu mẫu, không giới hạn số câu hỏi và không giới hạn số lượt người điền.',
    level: 'Cơ bản',
    officialUrl: 'https://tally.so/',
    tags: ['Survey', 'Market Research', 'Lead Form', 'UX'],
    whatIsIt: 'Tally (tally.so) là nền tảng tạo biểu mẫu trực tuyến và khảo sát nghiên cứu thị trường thế hệ mới với giao diện soạn thảo gõ phím liền mạch giống hệt Notion, cung cấp miễn phí không giới hạn lượt phản hồi kèm logic rẽ nhánh (Conditional Logic), tính điểm (Calculator) và kết nối trực tiếp Google Sheets.',
    bestFor: 'Sinh viên làm bảng hỏi khảo sát định lượng cho nghiên cứu khoa học / khóa luận tốt nghiệp, và Marketer cần nhúng form đăng ký đẹp mắt vào Landing Page.',
    platforms: 'Web Browser, hỗ trợ nhúng Popup, Standard Iframe hoặc Full-page link',
    vietnameseSupport: 'Hỗ trợ 100% tiếng Việt, cho phép tùy chỉnh toàn bộ chữ trên nút bấm và thông báo lỗi sang tiếng Việt.',
    studentPerk: 'Trong khi Typeform giới hạn bản miễn phí chỉ cho phép nhận 10 lượt trả lời/tháng, Tally cho phép sinh viên thu thập hàng nghìn phiếu khảo sát hoàn toàn miễn phí cùng đầy đủ tính năng rẽ nhánh câu hỏi gạn lọc (Screening Questions).',
    useCases: [
      'Thiết kế bảng hỏi khảo sát nghiên cứu thị trường (200–500 mẫu) có câu hỏi gạn lọc rẽ nhánh thông minh và thang đo Likert 5 mức độ.',
      'Tạo bài trắc nghiệm tương tác (Interactive Quiz Marketing) tính điểm tự động để thu hút khách hàng để lại email trên Landing Page.'
    ],
    quickSteps: [
      'Truy cập tally.so, tạo biểu mẫu mới và gõ trực tiếp tiêu đề cùng câu hỏi giống như đang soạn văn bản trên Notion (gõ phím `/` để chèn các loại câu hỏi).',
      'Sử dụng lệnh `/Conditional logic` để thiết lập điều kiện rẽ nhánh (ví dụ: nếu người trả lời chọn "Chưa từng sử dụng sản phẩm" thì chuyển thẳng tới trang cảm ơn).',
      'Vào tab Integrations sau khi xuất bản để bấm kết nối 1-click đổ toàn bộ câu trả lời theo thời gian thực vào file Google Sheets hoặc Notion.',
      'Copy đường link rút gọn hoặc mã Embed để nhúng trực tiếp vào trang Landing Page của dự án.'
    ],
    samplePromptOrTask: 'Bài tập thực hành: Thiết kế 1 bảng khảo sát nghiên cứu hành vi người tiêu dùng trên Tally có sử dụng ít nhất 1 điều kiện rẽ nhánh (Conditional Logic) và kết nối tự động đổ dữ liệu sạch sang Google Sheets.',
    pros: [
      'Giao diện tối giản, hiện đại trên điện thoại giúp tỷ lệ người dùng hoàn thành hết bảng khảo sát (Completion Rate) cao hơn hẳn biểu mẫu truyền thống.',
      'Chính sách miễn phí không giới hạn số lượt phản hồi và kết nối trực tiếp Google Sheets, Notion, Webhook (n8n).'
    ],
    limitations: 'Ở gói miễn phí có gắn một huy hiệu nhỏ "Made with Tally" ở cuối trang cảm ơn.',
    studentTip: 'Khi đi phát phiếu khảo sát khóa luận hoặc môn Nghiên cứu Marketing, dùng Tally thay cho form truyền thống sẽ tạo thiện cảm chuyên nghiệp và tăng tỷ lệ đáp viên trả lời trọn vẹn hơn.',
    alternatives: [
      { name: 'HubSpot CRM & Marketing Hub', slug: 'hubspot-crm', comparison: 'HubSpot Form phù hợp khi bạn muốn lưu người điền vào hệ thống Sales CRM để chăm sóc lâu dài, còn Tally vượt trội cho khảo sát nghiên cứu thị trường nhiều câu hỏi.' }
    ],
    faqs: [
      {
        q: 'Tally Forms bản miễn phí có giới hạn bao nhiêu người trả lời khảo sát trong một tháng không?',
        a: 'Không giới hạn (Unlimited submissions) theo chính sách sử dụng hợp lý của Tally. Sinh viên có thể yên tâm thu thập 300, 500 hay hàng nghìn phiếu khảo sát cho đề tài nghiên cứu mà không sợ form bị khóa giữa chừng như Typeform.'
      }
    ],
    featured: false,
    verifiedAt: '2026-11-24'
  },
  {
    id: 136,
    slug: 'mailchimp',
    name: 'Mailchimp',
    tagline: 'Nền tảng Email Marketing kinh điển với trình thiết kế mẫu thư & báo cáo trực quan',
    excerpt: 'Công cụ Email Marketing phổ biến hàng đầu thế giới với kho mẫu Email kéo thả đẹp, quản lý Audience và báo cáo chiến dịch dễ hiểu.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép lưu 500 liên hệ và gửi tối đa 1.000 email/tháng (500 email/ngày); các gói Essentials/Standard trả phí từ ~$13–$20/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://mailchimp.com/',
    tags: ['Email Marketing', 'Newsletter', 'Audience', 'Campaigns'],
    whatIsIt: 'Mailchimp là một trong những nền tảng Email Marketing lâu đời và phổ biến nhất thế giới, cung cấp trình thiết kế Email kéo thả, quản lý tệp người đăng ký (Audience) và phân tích Open Rate/Click Rate.',
    bestFor: 'Người mới bắt đầu học Email Marketing và doanh nghiệp nhỏ gửi bản tin định kỳ dưới 500 khách hàng.',
    platforms: 'Web Browser, iOS & Android, tích hợp WordPress/Shopify',
    vietnameseSupport: 'Hỗ trợ soạn thảo nội dung email tiếng Việt chuẩn Unicode.',
    studentPerk: 'Gói Free cho phép trải nghiệm thiết kế Email Newsletter và gửi thử chiến dịch thực tế cho 500 liên hệ.',
    useCases: [
      'Thiết kế một chiến dịch Email Newsletter hoàn chỉnh và phân tích báo cáo Click Map (xem người nhận bấm vào nút nào trong mail).',
      'Tạo Form đăng ký nhận tin (Signup Form) nhúng vào website.'
    ],
    pros: [
      'Giao diện thân thiện, tên tuổi phổ biến nên hầu hết các công ty đều từng sử dụng.',
      'Báo cáo Click Map trực quan.'
    ],
    limitations: 'Bản miễn phí hiện giới hạn khá chặt (500 contacts, 1.000 emails/tháng và không có Automation Journey).',
    studentTip: 'Nếu cần thực hành vẽ sơ đồ gửi Email tự động (Automation Workflow) miễn phí thì Brevo hào phóng hơn, còn Mailchimp phù hợp để học thiết kế Newsletter và đọc Click Map.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 137,
    slug: 'mailerlite',
    name: 'MailerLite',
    tagline: 'Email Marketing & Landing Page tối giản, tỷ lệ vào Inbox cao & Automation miễn phí',
    excerpt: 'Được giới Blogger và Creator đánh giá cao nhờ giao diện siêu sạch, cho phép tạo cả Landing Page thu Lead và Automation Email trên gói Free.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép lưu tới 1.000 người đăng ký, gửi 12.000 email/tháng, tạo 10 Landing Page và bật Email Automation.',
    level: 'Cơ bản',
    officialUrl: 'https://www.mailerlite.com/',
    tags: ['Email Automation', 'Landing Page', 'Newsletter', 'Creator'],
    whatIsIt: 'MailerLite là nền tảng Email Marketing hiện đại tập trung vào sự đơn giản và tỷ lệ gửi vào hộp thư chính (Deliverability) cao, tích hợp sẵn trình tạo Landing Page và chuỗi Email tự động.',
    bestFor: 'Blogger, Solopreneur và sinh viên muốn vừa tạo Landing Page tặng Ebook vừa tự động gửi Email chào mừng trên cùng 1 nền tảng miễn phí.',
    platforms: 'Web Browser, iOS App',
    vietnameseSupport: 'Hỗ trợ soạn Email và Landing Page tiếng Việt mượt mà.',
    studentPerk: 'Gói Free cực kỳ hào phóng: 1.000 subscribers, **12.000 email/tháng**, tặng kèm 10 Landing Page và Automation Builder.',
    useCases: [
      'Dựng phễu Lead Magnet trọn gói (Landing Page + Form + Email tự động gửi link tải tài liệu).',
      'Quản lý bản tin hàng tuần cho cộng đồng sinh viên.'
    ],
    pros: [
      'Hạn mức 12.000 email/tháng và Automation miễn phí vượt trội so với Mailchimp.',
      'Giao diện kéo thả siêu sạch sẽ, dễ học trong 15 phút.'
    ],
    limitations: 'Quá trình duyệt tài khoản mới của MailerLite yêu cầu mô tả rõ nguồn thu thập email (tránh spam).',
    studentTip: 'Khi đăng ký tài khoản MailerLite, hãy điền đầy đủ link website hoặc mô tả dự án học tập để được hệ thống duyệt kích hoạt gửi mail nhanh.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 138,
    slug: 'klaviyo',
    name: 'Klaviyo',
    tagline: 'Nền tảng Email & SMS Automation số 1 cho Thương mại điện tử (E-commerce)',
    excerpt: 'Chuyên biệt cho shop online (Shopify/WooCommerce): tự động gửi email nhắc giỏ hàng bị bỏ quên (Abandoned Cart) và gợi ý sản phẩm cá nhân hóa.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí lên tới 250 liên hệ hoạt động và 500 email/tháng (đầy đủ toàn bộ tính năng Flow Automation).',
    level: 'Nâng cao',
    officialUrl: 'https://www.klaviyo.com/',
    tags: ['E-commerce Email', 'Abandoned Cart', 'Segmentation', 'Retention'],
    whatIsIt: 'Klaviyo là nền tảng tự động hóa tiếp thị dựa trên dữ liệu hành vi mua hàng dành riêng cho Thương mại điện tử, nổi tiếng với khả năng kích hoạt kịch bản Abandoned Cart, Browse Abandonment và phân khúc khách hàng VIP theo doanh thu.',
    bestFor: 'E-commerce Marketer, CRM Specialist ngành bán lẻ và sinh viên làm đề tài tối ưu tỷ lệ mua lại (Retention) cho shop online.',
    platforms: 'Web Browser, tích hợp sâu Shopify, WooCommerce, Haravan',
    vietnameseSupport: 'Hỗ trợ nội dung email tiếng Việt.',
    studentPerk: 'Mở khóa toàn bộ các mẫu kịch bản Flow chuẩn ngành E-commerce (Welcome Series, Abandoned Cart, Win-back) ngay trên gói Free.',
    useCases: [
      'Thiết kế luồng tự động nhắc khách quay lại thanh toán sau 4 giờ bỏ quên giỏ hàng.',
      'Phân nhóm khách hàng theo số lần mua hàng và tổng chi tiêu (CLV).'
    ],
    pros: [
      'Kho kịch bản mẫu (Flows Library) cho E-commerce chuẩn chỉnh nhất thị trường.',
      'Đo lường chính xác doanh thu quy đổi mang về từ từng email.'
    ],
    limitations: 'Gói miễn phí giới hạn 250 contacts; chi phí tăng nhanh khi danh sách khách hàng lớn.',
    studentTip: 'Hãy tạo tài khoản Free để vào xem thư viện "Flows Library" của Klaviyo — bạn sẽ học được cách các thương hiệu E-commerce quốc tế thiết kế chuỗi chăm sóc khách hàng 360 độ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 139,
    slug: 'zapier',
    name: 'Zapier',
    tagline: 'Kết nối tự động hơn 7.000 ứng dụng (Google Sheets, Gmail, Slack, CRM) không cần code',
    excerpt: 'Nền tảng tự động hóa No-Code phổ biến nhất thế giới: hễ có sự kiện A (khách điền form) thì tự động làm hành động B (gửi mail + lưu bảng tính).',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép chạy 100 tác vụ (Tasks)/tháng với các luồng 2 bước (Trigger -> Action).',
    level: 'Cơ bản',
    officialUrl: 'https://zapier.com/',
    tags: ['No-Code Automation', 'Integrations', 'Productivity', 'Workflow'],
    whatIsIt: 'Zapier là nền tảng kết nối tự động hóa đám mây lớn nhất thế giới (hỗ trợ 7.000+ ứng dụng), giúp các Marketer không biết lập trình nối liền các công cụ rời rạc thành quy trình tự động.',
    bestFor: 'Người mới bắt đầu học tư duy Marketing Automation cần giao diện cực kỳ dễ hiểu.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Truyền tải dữ liệu tiếng Việt giữa các ứng dụng chuẩn xác.',
    studentPerk: 'Gói Free 100 tasks/tháng đủ để kết nối 1 biểu mẫu đăng ký đồ án tự động lưu vào Google Sheets và gửi thông báo về Gmail/Discord.',
    useCases: [
      'Tự động gửi thông báo về Slack/Discord mỗi khi có khách hàng mới điền Facebook Lead Ads hoặc Tally Form.',
      'Tự động lưu tệp đính kèm hóa đơn từ Gmail vào Google Drive.'
    ],
    pros: [
      'Số lượng ứng dụng tích hợp sẵn nhiều nhất thế giới, cài đặt cực nhanh.',
      'Dễ tiếp cận hơn n8n đối với người hoàn toàn không rành kỹ thuật.'
    ],
    limitations: 'Gói Free chỉ cho phép tạo luồng 2 bước đơn giản (không hỗ trợ rẽ nhánh hay Webhook ở bản Free); giá gói trả phí khá đắt nếu chạy số lượng lớn.',
    studentTip: 'Hãy bắt đầu làm quen tư duy Trigger -> Action trên Zapier, sau đó nâng cấp lên Make.com hoặc n8n khi cần chạy các luồng phức tạp nhiều bước miễn phí.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 140,
    slug: 'make-integromat',
    name: 'Make (Integromat)',
    tagline: 'Tự động hóa quy trình đa nhánh trực quan dạng bong bóng (1.000 Ops miễn phí/tháng)',
    excerpt: 'Mạnh mẽ và tiết kiệm hơn Zapier rất nhiều: cho phép vẽ kịch bản tự động nhiều nhánh rẽ, vòng lặp và kết nối API/AI trực quan.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free tặng **1.000 Operations/tháng** (hỗ trợ luồng nhiều bước, Router rẽ nhánh và Webhook miễn phí).',
    level: 'Trung bình',
    officialUrl: 'https://www.make.com/',
    tags: ['Automation', 'Visual Workflow', 'AI Automation', 'Webhook'],
    whatIsIt: 'Make (trước đây là Integromat) là nền tảng tự động hóa đám mây trực quan dạng sơ đồ hình tròn nối dây, cho phép xây dựng các kịch bản phức tạp có điều kiện rẽ nhánh, lặp dữ liệu và gọi API AI.',
    bestFor: 'Growth Marketer, AI Automation Builder và sinh viên muốn làm quy trình tự động nhiều bước trên đám mây mà không cần tự cài Docker như n8n.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Xử lý dữ liệu tiếng Việt hoàn hảo.',
    studentPerk: 'Gói Free 1.000 Operations/tháng hỗ trợ sẵn cả Webhook, HTTP Request và kết nối ChatGPT/Gemini API.',
    useCases: [
      'Tự động đọc dòng mới từ Google Sheets -> gọi AI viết bài Facebook -> tạo ảnh -> đăng lên Fanpage.',
      'Xử lý đơn hàng từ form web và phân loại gửi email khác nhau theo từng lựa chọn của khách.'
    ],
    pros: [
      'Giao diện kéo thả trực quan, xem được dữ liệu chạy qua từng bong bóng.',
      'Bản miễn phí 1.000 Ops/tháng làm được rất nhiều thứ mà Zapier khóa phí.'
    ],
    limitations: 'Giới hạn tối đa 2 kịch bản đang bật (Active Scenarios) cùng lúc ở gói Free.',
    studentTip: 'Nếu bạn không muốn cài đặt server cho n8n mà vẫn muốn làm AI Marketing Automation miễn phí trên trình duyệt, Make.com là lựa chọn số 1.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 141,
    slug: 'google-forms',
    name: 'Google Forms',
    tagline: 'Tạo bảng khảo sát & thu thập dữ liệu đổ thẳng Google Sheets miễn phí 100%',
    excerpt: 'Công cụ khảo sát quốc dân miễn phí tuyệt đối không giới hạn câu hỏi, lượt trả lời và đồng bộ tức thì sang Google Sheets để chạy thống kê.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% không giới hạn với tài khoản Google.',
    level: 'Cơ bản',
    officialUrl: 'https://docs.google.com/forms',
    tags: ['Survey', 'Market Research', 'Google Sheets', 'Free Tool'],
    whatIsIt: 'Google Forms là ứng dụng tạo biểu mẫu khảo sát và bài kiểm tra trắc nghiệm miễn phí thuộc bộ Google Workspace, kết nối nguyên bản với Google Sheets.',
    bestFor: 'Mọi sinh viên thu thập dữ liệu khảo sát nhanh, đăng ký tham gia sự kiện CLB và làm bài tập nghiên cứu.',
    platforms: 'Web Browser (Google Drive)',
    vietnameseSupport: 'Giao diện 100% tiếng Việt.',
    studentPerk: 'Miễn phí 100%, không giới hạn số lượt điền và tự động vẽ biểu đồ tròn/cột sơ bộ ngay trong tab Câu trả lời.',
    useCases: [
      'Thu thập phiếu khảo sát định lượng và xuất thẳng sang Google Sheets để làm sạch dữ liệu.',
      'Tạo form đăng ký tham gia workshop/sự kiện sinh viên.'
    ],
    pros: [
      'Độ tin cậy cao, ai cũng quen thao tác điền form.',
      'Hỗ trợ chia phần (Sections) để làm câu hỏi gạn lọc rẽ nhánh cơ bản.'
    ],
    limitations: 'Giao diện hơi đơn điệu so với Tally Forms và khó tùy biến CSS khi nhúng lên Landing Page.',
    studentTip: 'Luôn bật nút "Bắt buộc" (Required) cho các câu hỏi thang đo Likert và dùng tính năng "Chuyển tới phần dựa trên câu trả lời" để làm câu hỏi gạn lọc đối tượng khảo sát.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 142,
    slug: 'typeform',
    name: 'Typeform',
    tagline: 'Biểu mẫu khảo sát từng câu một (Conversational Form) tăng tỷ lệ hoàn thành',
    excerpt: 'Hiển thị mỗi lần chỉ 1 câu hỏi với chuyển động mượt mà như trò chuyện, giúp tăng mạnh tỷ lệ khách hàng điền hết form tư vấn giá trị cao.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free giới hạn 10 lượt trả lời/tháng; các gói trả phí từ ~$25–$29/tháng (có giảm giá cho giáo dục/sinh viên khi đăng ký).',
    level: 'Cơ bản',
    officialUrl: 'https://www.typeform.com/',
    tags: ['Conversational Form', 'UX', 'Lead Qualification', 'Quiz'],
    whatIsIt: 'Typeform là nền tảng tạo biểu mẫu và trắc nghiệm tương tác nổi tiếng với trải nghiệm hiển thị từng câu hỏi một (One-question-at-a-time) giúp người dùng không bị ngợp trước bảng hỏi dài.',
    bestFor: 'Thương hiệu cao cấp thu thập Lead B2B, tạo Quiz tương tác sản phẩm (ví dụ: Quiz chọn loại da/mỹ phẩm).',
    platforms: 'Web Browser',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt đầy đủ.',
    studentPerk: 'Có thể học thiết kế trải nghiệm hội thoại UX của Typeform (hoặc dùng Tally Forms để có giao diện đẹp miễn phí không giới hạn).',
    useCases: [
      'Thiết kế Quiz tìm hiểu nhu cầu khách hàng để gợi ý sản phẩm phù hợp.',
      'Trải nghiệm chuẩn UX form hỏi từng bước giảm tỷ lệ bỏ ngang.'
    ],
    pros: [
      'Trải nghiệm người dùng cực kỳ sang trọng và mượt mà.',
      'Tích hợp sâu với HubSpot, Google Analytics, Meta Pixel.'
    ],
    limitations: 'Gói miễn phí chỉ nhận tối đa 10 lượt phản hồi/tháng nên không dùng được cho khảo sát sinh viên diện rộng (hãy dùng Tally Forms thay thế).',
    studentTip: 'Hãy dùng Typeform để tham khảo cách viết câu hỏi thân thiện và cách thiết kế Quiz marketing, còn khi chạy khảo sát 300+ mẫu cho đồ án thì dùng Tally Forms hoặc Google Forms.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 143,
    slug: 'airtable',
    name: 'Airtable',
    tagline: 'Cơ sở dữ liệu kết hợp Bảng tính & Lịch Content Calendar cho đội ngũ Marketing',
    excerpt: 'Mạnh hơn Excel/Google Sheets khi quản lý tài sản sáng tạo (ảnh/video), lịch đăng bài đa kênh, danh sách KOC và luồng duyệt bài.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép tạo không giới hạn cơ sở dữ liệu (1.000 dòng/Base, tối đa 5 thành viên chỉnh sửa cùng lúc).',
    level: 'Trung bình',
    officialUrl: 'https://www.airtable.com/',
    tags: ['Content Calendar', 'Database', 'Marketing Ops', 'Collaboration'],
    whatIsIt: 'Airtable là nền tảng cơ sở dữ liệu đám mây dạng bảng tính (Spreadsheet-Database Hybrid) cho phép đính kèm trực tiếp file ảnh/video vào ô, liên kết chéo các bảng và chuyển đổi nhanh giữa dạng Bảng, Lịch (Calendar) và Kanban.',
    bestFor: 'Content Team quản lý lịch sản xuất nội dung, PR Team quản lý danh sách Booking KOC/KOL và Marketing Operations.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android',
    vietnameseSupport: 'Hỗ trợ dữ liệu tiếng Việt chuẩn xác.',
    studentPerk: 'Gói Free 1.000 bản ghi/Base và 5 người làm việc chung vừa đủ cho một nhóm sinh viên chạy chiến dịch.',
    useCases: [
      'Xây dựng bảng quản lý danh sách 100 KOC (kèm ảnh đại diện, link kênh, báo giá, trạng thái hợp đồng, link bài đăng).',
      'Quản lý Content Calendar kèm file ảnh thiết kế đính kèm ngay tại từng dòng.'
    ],
    pros: [
      'Đính kèm file ảnh/PDF trực tiếp vào ô dữ liệu và liên kết bảng thông minh.',
      'Có sẵn kho Marketing Templates rất chuyên nghiệp.'
    ],
    limitations: 'Gói Free giới hạn 1.000 dòng mỗi Base và khóa một số giao diện mở rộng (Timeline/Gantt).',
    studentTip: 'Khi đi thực tập tại Agency, rất nhiều team dùng Airtable hoặc Notion để quản lý Content Calendar và danh sách KOL — biết cách lọc View theo trạng thái trên Airtable là lợi thế lớn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 144,
    slug: 'clickup',
    name: 'ClickUp',
    tagline: 'Quản lý dự án Marketing, Gantt Chart tiến độ & Giao việc nhóm miễn phí',
    excerpt: 'Thay thế Trello với nhiều chế độ xem (List, Board, Calendar, Gantt), giúp trưởng nhóm phân công đầu việc, đặt deadline và theo dõi KPI chiến dịch.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Forever không giới hạn số lượng thành viên và tác vụ (Tasks), tặng kèm 60 lượt xem Gantt Chart.',
    level: 'Cơ bản',
    officialUrl: 'https://clickup.com/',
    tags: ['Project Management', 'Gantt Chart', 'Teamwork', 'Marketing Ops'],
    whatIsIt: 'ClickUp là nền tảng quản lý công việc và dự án tất-cả-trong-một, hỗ trợ quản lý đầu việc theo bảng Kanban, lịch đăng bài Calendar, sơ đồ tiến độ Gantt và tài liệu Docs.',
    bestFor: 'Nhóm trưởng đồ án Marketing cần phân chia công việc minh bạch, bám sát deadline và chụp sơ đồ Gantt đưa vào báo cáo.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android',
    vietnameseSupport: 'Hỗ trợ gõ tiếng Việt đầy đủ.',
    studentPerk: 'Gói Free Forever không giới hạn thành viên — cả lớp hay cả nhóm 10 người dùng chung miễn phí.',
    useCases: [
      'Lập bảng phân công công việc (WBS) và theo dõi tiến độ từng thành viên trong suốt 8 tuần làm đồ án.',
      'Chuyển sang chế độ Gantt View để chụp ảnh lịch trình triển khai chiến dịch IMC đưa vào Slide.'
    ],
    pros: [
      'Nhiều tính năng miễn phí không giới hạn thành viên.',
      'Có sẵn mẫu Marketing Campaign Management.'
    ],
    limitations: 'Nhiều nút tùy chỉnh nên ban đầu có thể hơi choáng ngợp với người mới.',
    studentTip: 'Chỉ cần dùng 3 chế độ xem cơ bản nhất của ClickUp (List, Board Kanban và Calendar) là đủ quản lý trơn tru cả một chiến dịch Marketing.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 145,
    slug: 'trello',
    name: 'Trello',
    tagline: 'Bảng Kanban kéo thả trực quan dễ dùng nhất để quản lý quy trình Content',
    excerpt: 'Quản lý quy trình sản xuất bài đăng (Ý tưởng -> Đang viết -> Đang thiết kế -> Đã đăng) bằng các thẻ kéo thả cực kỳ đơn giản.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí không giới hạn thẻ (Cards), tối đa 10 bảng (Boards) cho mỗi Workspace.',
    level: 'Cơ bản',
    officialUrl: 'https://trello.com/',
    tags: ['Kanban', 'Content Workflow', 'Teamwork', 'Simple'],
    whatIsIt: 'Trello (thuộc Atlassian) là công cụ quản lý công việc trực quan theo phương pháp bảng thẻ Kanban (Lists & Cards), nổi tiếng vì sự đơn giản, dễ học trong 5 phút.',
    bestFor: 'Sinh viên năm 1–2 lần đầu làm việc nhóm cần bảng phân công công việc gọn nhẹ, không phức tạp.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android',
    vietnameseSupport: 'Hỗ trợ tiếng Việt hoàn hảo.',
    studentPerk: 'Miễn phí 10 bảng Kanban kèm tính năng tự động hóa cơ bản Butler.',
    useCases: [
      'Tạo 4 cột: Backlog (Ý tưởng) -> In Progress (Đang làm) -> Review (Chờ duyệt) -> Done (Hoàn thành).',
      'Đính kèm ảnh thiết kế và hạn chót (Due Date) lên từng thẻ bài viết.'
    ],
    pros: [
      'Ai cũng biết dùng ngay lập tức không cần hướng dẫn.',
      'Giao diện kéo thả nhẹ nhàng, vui mắt.'
    ],
    limitations: 'Chế độ xem Lịch (Calendar) và Timeline nâng cao yêu cầu gói Standard/Premium.',
    studentTip: 'Nếu nhóm có thành viên ngại dùng phần mềm phức tạp, hãy chọn Trello để đảm bảo 100% thành viên chịu vào cập nhật tiến độ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 146,
    slug: 'lark-suite',
    name: 'Lark Suite',
    tagline: 'Siêu ứng dụng văn phòng All-in-One (Chat + Docs + Base + Lịch) cho đội nhóm',
    excerpt: 'Thay thế đồng thời Slack + Google Docs + Airtable + Zoom trên 1 nền tảng duy nhất với gói miễn phí siêu hào phóng tại Việt Nam.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Starter miễn phí cho tối đa 50 người dùng (100GB lưu trữ, Lark Base, Lark Docs, Họp video 60 phút, tự động hóa cơ bản).',
    level: 'Cơ bản',
    officialUrl: 'https://www.larksuite.com/',
    tags: ['Lark Base', 'Team Collaboration', 'CRM', 'All-in-One'],
    whatIsIt: 'Lark Suite là nền tảng cộng tác doanh nghiệp hợp nhất Chat, Lịch, Họp trực tuyến, Tài liệu (Docs) và Cơ sở dữ liệu tự động hóa (Lark Base) đang được rất nhiều Agency và doanh nghiệp thương mại điện tử tại Việt Nam sử dụng.',
    bestFor: 'Sinh viên chuẩn bị đi thực tập tại các công ty TikTok Shop / Agency Việt Nam và nhóm dự án cần quản lý vận hành tập trung.',
    platforms: 'Windows/macOS Desktop, Web Browser, iOS & Android',
    vietnameseSupport: 'Hỗ trợ giao diện 100% Tiếng Việt.',
    studentPerk: 'Gói miễn phí cho phép tới 50 thành viên sử dụng **Lark Base** (tính năng giống Airtable + Dashboard biểu đồ + Automation gửi tin nhắn về nhóm chat cực mạnh).',
    useCases: [
      'Dùng Lark Base tạo hệ thống mini-CRM quản lý khách hàng/đơn hàng và tự động bắn thông báo vào nhóm Lark Chat.',
      'Dùng Lark Minutes tự động ghi âm và bóc băng biên bản cuộc họp nhóm.'
    ],
    pros: [
      'Lark Base tích hợp sẵn Dashboard biểu đồ và Automation rất mạnh ngay trên gói miễn phí.',
      'Đang cực kỳ phổ biến tại các doanh nghiệp Việt Nam.'
    ],
    limitations: 'Cài đặt ứng dụng desktop sẽ trải nghiệm mượt hơn bản web.',
    studentTip: 'Thực hành dựng một hệ thống quản lý Content hoặc mini-CRM trên **Lark Base** sẽ giúp bạn ghi điểm rất mạnh khi phỏng vấn vào các công ty E-commerce/Agency tại Việt Nam.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 147,
    slug: 'calendly',
    name: 'Calendly',
    tagline: 'Tự động hóa đặt lịch hẹn phỏng vấn khách hàng & Tư vấn B2B không cần nhắn qua lại',
    excerpt: 'Gửi 1 đường link để khách hàng hoặc đáp viên phỏng vấn tự chọn khung giờ trống phù hợp và tự động tạo link Google Meet.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free miễn phí vĩnh viễn cho 1 loại sự kiện hẹn lịch không giới hạn số lượt đặt, kết nối đồng bộ Google Calendar & Google Meet.',
    level: 'Cơ bản',
    officialUrl: 'https://calendly.com/',
    tags: ['Scheduling', 'B2B Sales', 'User Interview', 'Automation'],
    whatIsIt: 'Calendly là công cụ tự động hóa đặt lịch hẹn (Appointment Scheduling), đồng bộ trực tiếp với Google Calendar để chỉ hiển thị những khung giờ bạn rảnh và tự động gửi lời mời lịch + link họp Google Meet/Zoom cho cả hai bên.',
    bestFor: 'B2B Marketer/Sales chốt lịch demo sản phẩm và sinh viên đặt lịch phỏng vấn sâu (In-depth Interview) khách hàng.',
    platforms: 'Web Browser, Chrome Extension, iOS & Android',
    vietnameseSupport: 'Hoạt động chuẩn xác theo múi giờ Việt Nam (GMT+7).',
    studentPerk: 'Gói Free miễn phí hoàn toàn cho 1 loại lịch hẹn (ví dụ: "Phỏng vấn khách hàng 30 phút") và tự động sinh link Google Meet.',
    useCases: [
      'Nhúng link Calendly vào trang Thank-you sau khi khách điền form tư vấn B2B để tăng tỷ lệ chốt lịch họp.',
      'Gửi link Calendly mời 15–20 đáp viên tự chọn giờ phỏng vấn cho bài nghiên cứu định tính.'
    ],
    pros: [
      'Loại bỏ hoàn toàn cảnh nhắn tin hỏi qua lại "Bạn rảnh thứ mấy?".',
      'Tự động quy đổi múi giờ khi hẹn khách hàng/giảng viên ở nước ngoài.'
    ],
    limitations: 'Gửi SMS/Email nhắc lịch tự động (Workflows) và tạo nhiều loại sự kiện cùng lúc cần gói Standard.',
    studentTip: 'Đặt link Calendly ngay trên CV hoặc trang Portfolio cá nhân để nhà tuyển dụng dễ dàng đặt lịch phỏng vấn với bạn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 148,
    slug: 'zoho-crm',
    name: 'Zoho CRM',
    tagline: 'Hệ thống CRM quản trị bán hàng & chăm sóc khách hàng tối ưu chi phí cho SME',
    excerpt: 'Nền tảng CRM nổi tiếng toàn cầu với gói miễn phí cho đội nhóm 3 người, hỗ trợ quản lý Leads, Deals, Contacts và quy trình bán hàng.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free Edition miễn phí cho tối đa 3 người dùng; các gói trả phí giá mềm hơn HubSpot/Salesforce (từ ~$14/user/tháng).',
    level: 'Trung bình',
    officialUrl: 'https://www.zoho.com/crm/',
    tags: ['CRM', 'Sales Pipeline', 'SME', 'Lead Management'],
    whatIsIt: 'Zoho CRM là phần mềm quản trị quan hệ khách hàng phổ biến cho doanh nghiệp vừa và nhỏ (SME), giúp quản lý phễu bán hàng, thu thập Lead từ Webform và tự động hóa tác vụ bán hàng.',
    bestFor: 'Sinh viên học môn Quản trị quan hệ khách hàng (CRM) muốn so sánh nhiều hệ thống CRM thực tế ngoài HubSpot.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ giao diện tiếng Việt.',
    studentPerk: 'Gói Free cho 3 thành viên cùng sử dụng để mô phỏng phòng Sales & Marketing trong môn học CRM.',
    useCases: [
      'Thiết lập bảng giai đoạn bán hàng (Sales Pipeline) và tạo Webform nhúng vào Landing Page.',
      'So sánh tính năng và chi phí giữa HubSpot CRM vs Zoho CRM trong bài tiểu luận.'
    ],
    pros: [
      'Chi phí nâng cấp rất hợp lý cho doanh nghiệp SME.',
      'Nằm trong hệ sinh thái 45+ ứng dụng kinh doanh của Zoho.'
    ],
    limitations: 'Giao diện nhiều mục thiết lập chi tiết cần thời gian làm quen.',
    studentTip: 'Khi làm bài tập so sánh giải pháp CRM cho doanh nghiệp SME Việt Nam, hãy đưa Zoho CRM và HubSpot CRM lên bàn cân cùng các phần mềm nội địa.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 149,
    slug: 'tawk-to',
    name: 'Tawk.to',
    tagline: 'Nhúng hộp thoại Live Chat chăm sóc khách hàng vào Website miễn phí 100%',
    excerpt: 'Cài đặt khung chat trực tuyến ở góc phải màn hình Landing Page để tư vấn khách hàng thời gian thực và theo dõi khách đang xem trang nào — miễn phí trọn đời.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% trọn đời không giới hạn số nhân viên trực chat, số cuộc hội thoại và website (chỉ thu phí nếu muốn xóa chữ "Powered by tawk.to").',
    level: 'Cơ bản',
    officialUrl: 'https://www.tawk.to/',
    tags: ['Live Chat', 'Customer Support', 'Conversion', 'Website Widget'],
    whatIsIt: 'Tawk.to là ứng dụng Live Chat và Knowledge Base miễn phí 100% phổ biến nhất thế giới, cho phép chủ website trò chuyện trực tiếp với khách đang truy cập web và xem khách đang dừng ở trang nào.',
    bestFor: 'Chủ website bán hàng, dịch vụ và sinh viên muốn gắn khung Live Chat chuyên nghiệp lên Landing Page đồ án.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android App, WordPress Plugin',
    vietnameseSupport: 'Hỗ trợ giao diện khung chat 100% tiếng Việt.',
    studentPerk: 'Miễn phí 100% trọn đời, có cả tính năng AI Assist trả lời tự động dựa trên dữ liệu bạn nạp vào.',
    useCases: [
      'Nhúng mã Live Chat Tawk.to vào Google Tag Manager để hiển thị nút chat góc dưới Landing Page.',
      'Cài đặt tin nhắn chào tự động (Chat Trigger) sau khi khách ở lại trang bảng giá quá 20 giây.'
    ],
    pros: [
      'Miễn phí hoàn toàn không giới hạn nhân viên trực chat.',
      'Thông báo ting ting về app điện thoại ngay khi có khách nhắn.'
    ],
    limitations: 'Có dòng chữ nhỏ "Powered by tawk.to" ở đáy khung chat bản miễn phí.',
    studentTip: 'Gắn Tawk.to vào Landing Page đồ án và cài câu chào tự động ("Chào bạn, bạn cần tư vấn chọn gói nào không?") để tăng trải nghiệm tương tác thực tế.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 150,
    slug: 'activecampaign',
    name: 'ActiveCampaign',
    tagline: 'Nền tảng Customer Experience Automation & Chấm điểm Lead (Lead Scoring) chuyên sâu',
    excerpt: 'Nổi tiếng với trình vẽ Automation mạnh nhất phân khúc SME: chấm điểm khách hàng tiềm năng (Lead Scoring) và gửi email/SMS cá nhân hóa theo hành vi.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 14 ngày; các gói trả phí từ ~$15–$49/tháng tùy số lượng liên hệ.',
    level: 'Nâng cao',
    officialUrl: 'https://www.activecampaign.com/',
    tags: ['Marketing Automation', 'Lead Scoring', 'CRM', 'Customer Journey'],
    whatIsIt: 'ActiveCampaign là nền tảng tự động hóa trải nghiệm khách hàng (CXA) hàng đầu, kết hợp Email Marketing, Sales CRM và hệ thống chấm điểm hành vi khách hàng (Lead Scoring) tinh vi.',
    bestFor: 'Marketing Automation Specialist và sinh viên nghiên cứu chuyên sâu về cơ chế Lead Scoring & Customer Lifecycle.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ nội dung email tiếng Việt.',
    studentPerk: '14 ngày dùng thử miễn phí để thực hành thiết kế các luồng Automation đa điều kiện và quy tắc cộng/trừ điểm Lead.',
    useCases: [
      'Thiết lập quy tắc Lead Scoring: khách mở email (+5 điểm), bấm xem trang Bảng giá (+15 điểm), đạt 50 điểm -> tự động báo Sales gọi điện.',
      'Học cách nối nhiều luồng Automation với nhau.'
    ],
    pros: [
      'Khả năng tự động hóa phân nhánh điều kiện cực kỳ sâu.',
      'Tỷ lệ email vào hộp thư chính (Deliverability) rất cao.'
    ],
    limitations: 'Không có gói miễn phí vĩnh viễn.',
    studentTip: 'Hãy dùng 14 ngày dùng thử để tìm hiểu tư duy **Lead Scoring** — một khái niệm rất hay được hỏi khi phỏng vấn vị trí Inbound/B2B Marketing.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 151,
    slug: 'getresponse',
    name: 'GetResponse',
    tagline: 'Bộ công cụ Email Marketing, Conversion Funnel & Tổ chức Webinar tích hợp',
    excerpt: 'Cung cấp giải pháp phễu bán hàng trọn gói gồm Email Autoresponder, Landing Page, Pop-up và phòng học/hội thảo trực tuyến Webinar.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Free cho phép lưu 500 liên hệ, gửi 2.500 newsletter/tháng và tạo 1 Landing Page; dùng thử gói trả phí 30 ngày.',
    level: 'Cơ bản',
    officialUrl: 'https://www.getresponse.com/',
    tags: ['Conversion Funnel', 'Email Marketing', 'Webinar', 'Landing Page'],
    whatIsIt: 'GetResponse là nền tảng tiếp thị trực tuyến đa năng kết hợp Email Marketing, xây dựng phễu chuyển đổi (Conversion Funnels), Landing Page và tổ chức Webinar.',
    bestFor: 'Marketer ngành Giáo dục / Đào tạo / Coaching (EdTech) cần tổ chức Webinar thu Lead.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ giao diện Tiếng Việt (`getresponse.com/vi`).',
    studentPerk: 'Có giao diện hoàn toàn bằng tiếng Việt và gói Free 2.500 email/tháng.',
    useCases: [
      'Xây dựng phễu Webinar: Trang đăng ký -> Email nhắc lịch tự động -> Phòng Webinar -> Email bán hàng sau hội thảo.',
      'Tạo Pop-up thu email khi khách chuẩn bị rời trang (Exit-intent Popup).'
    ],
    pros: [
      'Có giao diện tiếng Việt đầy đủ, dễ tiếp cận.',
      'Tích hợp sẵn công cụ tổ chức Webinar.'
    ],
    limitations: 'Tính năng Autoresponder và Webinar nằm ở gói trả phí sau 30 ngày dùng thử.',
    studentTip: 'Rất hữu ích để tham khảo cấu trúc mẫu "Conversion Funnel" có sẵn trong GetResponse cho các sản phẩm khóa học/dịch vụ.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 152,
    slug: 'jotform',
    name: 'Jotform',
    tagline: 'Tạo biểu mẫu khảo sát, Hợp đồng điện tử & Form đặt hàng tích hợp thanh toán',
    excerpt: 'Kho hơn 10.000 mẫu Form sẵn có từ khảo sát thị trường, đăng ký sự kiện đến đơn đặt hàng có tính tiền tự động.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Starter miễn phí tạo được tối đa 5 biểu mẫu, nhận 100 lượt gửi/tháng và đầy đủ tính năng kéo thả.',
    level: 'Cơ bản',
    officialUrl: 'https://www.jotform.com/',
    tags: ['Form Builder', 'Order Form', 'Survey', 'Workflow'],
    whatIsIt: 'Jotform là công cụ tạo biểu mẫu trực tuyến mạnh mẽ với hơn 10.000 mẫu sẵn có, hỗ trợ tính toán giá tiền, chữ ký điện tử, xuất file PDF tự động và quy trình phê duyệt.',
    bestFor: 'Event Marketer tạo form đăng ký sự kiện có mã QR check-in hoặc form đặt hàng nhanh.',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ giao diện và form tiếng Việt.',
    studentPerk: 'Có chương trình giảm 50% cho sinh viên/giáo dục và gói Starter miễn phí cho 5 form.',
    useCases: [
      'Tạo form đặt hàng sản phẩm mẫu tự động cộng tổng tiền đơn hàng.',
      'Tự động xuất câu trả lời thành file PDF đẹp mắt gửi qua email.'
    ],
    pros: [
      'Thư viện Widget và mẫu Form phong phú nhất.',
      'Hỗ trợ tạo PDF tự động từ dữ liệu khách điền.'
    ],
    limitations: 'Gói miễn phí giới hạn 100 lượt gửi/tháng (nếu cần khảo sát số lượng lớn hãy dùng Tally Forms hoặc Google Forms).',
    studentTip: 'Dùng Jotform khi cần làm form đăng ký sự kiện có chữ ký xác nhận hoặc tính tổng tiền giỏ hàng nhanh.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 153,
    slug: 'convertkit-kit',
    name: 'Kit (trước đây là ConvertKit)',
    tagline: 'Nền tảng Email Marketing & Bản tin trả phí số 1 cho Content Creator',
    excerpt: 'Chuyên biệt cho người làm nội dung, Blogger và Chuyên gia: gói miễn phí cho phép lưu tới 10.000 người đăng ký (Subscribers)!',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Newsletter miễn phí cực lớn: lên tới **10.000 subscribers**, không giới hạn Landing Page & Form, kèm 1 chuỗi Email Automation cơ bản.',
    level: 'Cơ bản',
    officialUrl: 'https://kit.com/',
    tags: ['Creator Economy', 'Newsletter', 'Email List', 'Personal Branding'],
    whatIsIt: 'Kit (tên mới của ConvertKit) là nền tảng Email Marketing được thiết kế riêng cho nhà sáng tạo nội dung (Creators, Writers, Educators), tập trung vào email văn bản sạch sẽ có tỷ lệ đọc cao và gắn thẻ phân loại sở thích người đọc (Tagging).',
    bestFor: 'Sinh viên xây dựng thương hiệu cá nhân (Personal Branding), Blogger và chủ kênh Newsletter kiến thức.',
    platforms: 'Web Browser (Cloud)',
    vietnameseSupport: 'Hỗ trợ soạn thảo email tiếng Việt.',
    studentPerk: 'Gói miễn phí cho phép lưu tới **10.000 subscribers** — lớn nhất trong tất cả các nền tảng Email Marketing uy tín hiện nay.',
    useCases: [
      'Xây dựng danh sách email độc giả trung thành cho blog cá nhân hoặc kênh YouTube/TikTok.',
      'Gắn thẻ (Tag) tự động phân loại độc giả theo đường link họ đã bấm trong bản tin.'
    ],
    pros: [
      'Hạn mức 10.000 subscribers miễn phí quá ấn tượng.',
      'Tập trung vào nội dung chữ chất lượng cao, ít bị rơi vào tab Quảng cáo của Gmail.'
    ],
    limitations: 'Ít mẫu thiết kế email màu mè dạng E-commerce (chủ yếu thiên về dạng thư chữ cá nhân hóa).',
    studentTip: 'Nếu bạn có định hướng xây dựng cộng đồng cá nhân hoặc Newsletter chia sẻ kiến thức Marketing lâu dài, hãy bắt đầu ngay với gói 10.000 subscribers miễn phí của Kit.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 154,
    slug: 'pipedrive',
    name: 'Pipedrive',
    tagline: 'CRM quản lý phễu bán hàng B2B trực quan theo từng bước chốt Deal',
    excerpt: 'Được thiết kế bởi các chuyên gia bán hàng: giao diện bảng cột tiến trình Deal cực kỳ rõ ràng giúp đội Sales không bao giờ bỏ sót khách hàng tiềm năng.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Dùng thử / Trả phí',
    pricingDetail: 'Dùng thử miễn phí 14 ngày đầy đủ tính năng; gói Essential từ ~$14/user/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://www.pipedrive.com/',
    tags: ['Sales CRM', 'B2B Pipeline', 'Deal Tracking', 'Sales Ops'],
    whatIsIt: 'Pipedrive là phần mềm CRM tập trung vào quy trình bán hàng (Sales-focused CRM), giúp theo dõi từng cơ hội kinh doanh (Deal) di chuyển qua các cột phễu cho đến khi chốt hợp đồng.',
    bestFor: 'B2B Sales/Account Executive và sinh viên học cách quản trị phễu bán hàng B2B (Lead -> Qualified -> Demo -> Proposal Sent -> Won).',
    platforms: 'Web Browser, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ dữ liệu tiếng Việt.',
    studentPerk: '14 ngày dùng thử miễn phí để sinh viên trải nghiệm cách quản lý Sales Pipeline và dự báo doanh thu.',
    useCases: [
      'Mô phỏng quy trình chăm sóc và chốt hợp đồng tài trợ cho CLB hoặc dự án B2B.',
      'Theo dõi tỷ lệ chuyển đổi giữa từng bước trong phễu bán hàng.'
    ],
    pros: [
      'Giao diện quản lý Deal đơn giản, tập trung hành động và nhắc việc cực tốt.',
      'Trực quan hóa tỷ lệ thắng (Win Rate) và giá trị phễu.'
    ],
    limitations: 'Không có gói miễn phí vĩnh viễn sau 14 ngày.',
    studentTip: 'Rất hay để tham khảo mô hình cột Pipeline chuẩn mực cho đội ngũ Account/Sales B2B.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 155,
    slug: 'crisp-chat',
    name: 'Crisp Chat',
    tagline: 'Hộp thư đa kênh (Web Live Chat + Messenger + Instagram + Email) & Chatbot',
    excerpt: 'Gom toàn bộ tin nhắn từ khung chat trên Website, Facebook Messenger, Instagram DM và Email về chung một hộp thư cho cả nhóm cùng trực.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Freemium',
    pricingDetail: 'Gói Basic miễn phí vĩnh viễn cho 2 nhân viên trực chat website không giới hạn hội thoại; gói Pro từ ~$25/workspace/tháng.',
    level: 'Cơ bản',
    officialUrl: 'https://crisp.chat/',
    tags: ['Live Chat', 'Omnichannel Inbox', 'Customer Support', 'MagicBrowse'],
    whatIsIt: 'Crisp là nền tảng nhắn tin khách hàng đa kênh (Omnichannel Messaging) kết hợp Live Chat website, hộp thư chung, cơ sở tri thức và Chatbot tự động.',
    bestFor: 'Startup SaaS, Website dịch vụ và nhóm sinh viên thích giao diện khung chat hiện đại hơn Tawk.to.',
    platforms: 'Web Browser, Windows/macOS, iOS & Android App',
    vietnameseSupport: 'Hỗ trợ giao diện tiếng Việt cho khách chat.',
    studentPerk: 'Gói Basic miễn phí cho 2 thành viên trực Live Chat không dính quảng cáo rối mắt và giao diện rất hiện đại.',
    useCases: [
      'Nhúng khung Live Chat hiện đại vào Landing Page đồ án.',
      'Xem thông tin trình duyệt, vị trí và trang khách đang mở ngay cạnh khung chat.'
    ],
    pros: [
      'Thiết kế giao diện rất đẹp, hiện đại chuẩn startup công nghệ.',
      'Nhẹ và dễ cài đặt qua Google Tag Manager.'
    ],
    limitations: 'Kết nối đồng bộ thêm Facebook Messenger/Instagram về cùng hộp thư cần gói Pro.',
    studentTip: 'Nếu bạn làm Landing Page phong cách hiện đại/công nghệ (SaaS, App), khung chat của Crisp nhìn sẽ tinh tế hơn Tawk.to.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 156,
    slug: 'google-apps-script',
    name: 'Google Apps Script (Tự động hóa Google Workspace)',
    tagline: 'Viết mã tự động hóa Gmail, Google Sheets, Docs & Webhook miễn phí 100% (Nhờ AI viết hộ)',
    excerpt: 'Tự động gửi email cá nhân hóa hàng loạt từ Google Sheets, tự động tạo báo cáo Google Docs/Slides từ bảng số liệu — miễn phí tuyệt đối không giới hạn.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
    pricing: 'Miễn phí 100%',
    pricingDetail: 'Miễn phí 100% tích hợp sẵn trong mọi file Google Sheets / Docs / Forms (gửi được tới 100 email/ngày với Gmail cá nhân).',
    level: 'Nâng cao',
    officialUrl: 'https://www.google.com/script/start/',
    tags: ['Google Sheets', 'Free Automation', 'Email Merge', 'Workspace'],
    whatIsIt: 'Google Apps Script là nền tảng lập trình nhẹ dựa trên JavaScript được tích hợp sẵn miễn phí bên trong Google Sheets, Docs và Forms, cho phép tự động hóa mọi thao tác lặp đi lặp lại trong hệ sinh thái Google.',
    bestFor: 'Marketer muốn tự động hóa gửi email từ Google Sheets, lọc dữ liệu hoặc nối Webhook mà không tốn một đồng mua phần mềm thứ ba.',
    platforms: 'Web Browser (Menu Tiện ích mở rộng > Apps Script trong Google Sheets)',
    vietnameseSupport: 'Xử lý văn bản và email tiếng Việt chuẩn UTF-8.',
    studentPerk: 'Miễn phí 100% trọn đời; hiện nay sinh viên chỉ cần mô tả yêu cầu cho ChatGPT/Claude/Gemini để AI viết sẵn toàn bộ đoạn code Apps Script rồi dán vào chạy.',
    useCases: [
      'Tạo hệ thống Mail Merge miễn phí: tự động lấy Tên + Email + Mã giảm giá riêng từ Google Sheets để gửi thư cảm ơn qua Gmail.',
      'Tự động bắn tin nhắn thông báo về Telegram/Slack ngay khi có người điền Google Forms.'
    ],
    pros: [
      'Miễn phí 100%, không lo giới hạn số lượng Operations hàng tháng như Zapier/Make.',
      'Chạy trực tiếp trên máy chủ Google nên rất ổn định.'
    ],
    limitations: 'Tài khoản Gmail cá nhân miễn phí giới hạn gửi tối đa 100 email/ngày qua Apps Script.',
    studentTip: 'Bạn không cần biết lập trình! Hãy mở Google Sheets -> Tiện ích mở rộng -> Apps Script, rồi nhờ Claude hoặc ChatGPT viết đoạn script theo đúng tên cột trong bảng của bạn.',
    verifiedAt: '2026-11-24'
  },
  {
    id: 35,
    slug: 'notion-ai',
    name: 'Notion & Notion AI',
    tagline: 'Không gian quản lý dự án Marketing, Content Calendar & Trợ lý AI tích hợp',
    excerpt: 'Công cụ quốc dân để quản lý kho tài liệu nhóm, lịch nội dung (Content Hub) và gọi AI tóm tắt biên bản họp ngay trong trang ghi chú.',
    category: 'Email Marketing, CRM & Tự động hóa',
    categorySlug: 'crm-email-automation',
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
  }
];

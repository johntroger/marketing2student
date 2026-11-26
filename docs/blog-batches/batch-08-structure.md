# Lô 8 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 3671221. Phạm vi: ID 71–80. Lô cấu trúc/metadata; chưa biên tập toàn văn hoặc kiểm chứng nguồn, số liệu và kết luận.

## Thay đổi

- Chuyển 6 bài theo bảng đối chiếu: ID 71 và 78 sang Thương hiệu; ID 72 sang Quảng cáo; ID 75 sang Sản phẩm, Giá & Phân phối; ID 77 sang CRM; ID 80 sang Nghiên cứu thị trường. Chuẩn hóa đồng thời category/categorySlug theo cấu hình chung; 4 bài giữ chuyên mục.
- Khai báo 8 Phân tích tình huống và 2 Hướng dẫn thực hành sau khi đọc mở đầu, các đề mục và kết luận; giữ dạng bài đề xuất của cả 10 bài.
- Khai báo publicationStatus: published; thêm coverAlt sau khi xem trực tiếp 10 ảnh, giữ nguyên ảnh và URL.
- Ghi sourceUrl từ mục Bài viết gốc của cả 10 bài. ID 76 dùng URL đã hiển thị trong văn bản liên kết, sửa href cho khớp như mô tả bên dưới. Không điền sourceVerifiedAt hoặc editor.
- Chuẩn hóa [&hellip;] thành … trong 10 mô tả, giữ ý nghĩa. Ghi modifiedAt là 26/11/2026, giữ nguyên ngày đăng.
- Giữ nguyên văn bản, tiêu đề, slug, tác giả, topic và tags. 110 bài ngoài lô giữ nguyên; HTML chỉ thay ở các trường hợp được ghi nhận bên dưới.

## Sửa liên kết nguồn ID 76

Mục Bài viết gốc của Food Tube hiển thị https://www.thinkwithgoogle.com/marketing-strategies/video/jamie-oliver-youtube-case-study/ nhưng href trỏ sang /land-rover-tim-thay-thanh-cong-voi-quang-cao-tuong-tac. Sửa riêng href thành URL Jamie Oliver đang hiển thị; không thay văn bản liên kết. sourceUrl ghi cùng URL này. Đây là đối chiếu nội bộ dữ liệu, chưa xác nhận tính khả dụng hoặc nội dung trang nguồn ngoài. ID 72 giữ nguyên URL HTTP theo dữ liệu cũ, chưa tự đổi giao thức.

## Sửa tràn ngang cục bộ

Trước sửa, website ở viewport 390 px có chiều rộng cuộn: ID 71: 695 px; 72: 511 px; 73: 695 px; 74: 503 px; 75: 695 px; 76: 483 px; 77: 741 px; 78: 419 px; 79: 776 px. ID 80 không tràn.

- Thêm max-width:100% cho 13 iframe YouTube ở ID 71 (7), 73 (2), 75 (2), 77 (1), 79 (1).
- Thêm overflow-wrap:anywhere cho 8 liên kết nguồn dài ở ID 71–76, 78 và 79. Nguồn ID 71 còn làm trang rộng 419 px sau khi giới hạn iframe; đã xử lý và kiểm tra lại.
- Giữ nguyên văn bản, href (trừ sửa nguồn ID 76 nêu riêng), src, title và width/height gốc. Không sửa code React/CSS nền tảng. Chưa xác nhận khả năng phát nội dung video bên thứ ba.

## Ghi nhận cho lượt biên tập nội dung

- ID 77 có lời kể ngôi thứ nhất và tiêu đề nói các email yêu thích của tôi. Cần đối chiếu tác giả nguồn và cách dẫn lời để tránh hiểu nhầm là trải nghiệm của tác giả metadata hiện tại.
- Các case study dùng dữ liệu lịch sử: ID 71 có mốc cập nhật 2023, ID 72 nói về Traverse 2014, ID 74 nói về vở diễn 2013. Không tự thay mốc năm hoặc trình bày các con số như dữ liệu hiện tại.
- Các nhận định về tình hình doanh nghiệp, pháp lý và dữ liệu cá nhân trong bài Temu, chức năng AI trong bài Slack, hiệu quả quảng cáo và các con số còn lại cần kiểm chứng trong lượt biên tập toàn văn.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 71 | Aviation American Gin: Sử dụng sự hài hước để nâng cao tinh thần | Thương hiệu & Hành vi khách hàng | Phân tích tình huống |
| 72 | Chevrolet thúc đẩy nhận thức về thương hiệu cho mẫu xe Traverse mới của mình | Quảng cáo & Tăng trưởng | Phân tích tình huống |
| 73 | Slack: Làm bùng nổ lĩnh vực giao tiếp trong kinh doanh | Thương hiệu & Hành vi khách hàng | Phân tích tình huống |
| 74 | YouTube và Broadway: Câu chuyện Cinderella | Social Media & Video Marketing | Phân tích tình huống |
| 75 | Temu: Kẻ phá vỡ thương mại điện tử giảm giá | Sản phẩm, Giá & Phân phối | Phân tích tình huống |
| 76 | Food Tube của đầu bếp Jamie Oliver: Công thức thành công trên YouTube | Social Media & Video Marketing | Phân tích tình huống |
| 77 | Ví dụ về Marketing B2B qua Email yêu thích của tôi mà bạn có thể học hỏi được | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 78 | Dove: Một cách tiếp cận hoàn hảo cho Digital Marketing | Thương hiệu & Hành vi khách hàng | Phân tích tình huống |
| 79 | Mối tình phá kỷ lục giữa evian® và YouTube | Social Media & Video Marketing | Phân tích tình huống |
| 80 | Tiếng nói của khách hàng (VoC): Thu thập dữ liệu + phân tích hợp lý để đưa ra chiến lược | Nghiên cứu thị trường & Insight | Hướng dẫn thực hành |

Tiến độ: 80/120 bài chuẩn hóa cấu trúc, còn 40 bài. Chi tiết trước/sau tại batch-08-structure.json cùng thư mục.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 71–80 thay đổi đúng metadata, style HTML và href nguồn ID 76 đã ghi nhận; văn bản thân bài giữ nguyên, 110 bài khác không đổi.
- TypeScript và build bản cuối thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- 10 ảnh trả HTTP 200 (5 JPEG, 5 WebP); đã xem trực tiếp để viết alt.
- Trình duyệt local: 10 bài đúng chuyên mục, dạng bài, alt và canonical; ảnh tải được. Đích nguồn ID 76 khớp URL hiển thị.
- Chuyên mục CRM có 16 bài, Sản phẩm có 4 và Nghiên cứu thị trường có 4.
- Bộ lọc Phân tích nghiên cứu có 30 bài (20 + 10), Hướng dẫn thực hành 24 (20 + 4), Góc nhìn 9, Phân tích tình huống 15, Cập nhật 2. Tải lại URL giữ đúng kết quả; liên kết topic cũ hoạt động.
- Cả 10 bài có scrollWidth 390 px trên viewport 390 px sau sửa. Không có lỗi JavaScript trong các trang đã kiểm tra; đã xem ảnh chụp desktop bài Temu và mobile bài evian.

## Phạm vi xuất bản

Codex tự commit/push và xác minh website sau pipeline. Chỉ commit dữ liệu Blog và hai báo cáo lô 8; giữ nguyên assets/ và docs/blog-review/. Việc kiểm chứng nguồn và biên tập toàn văn thuộc các lô nội dung sau.

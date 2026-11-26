# Lô 7 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 47bc8a2. Phạm vi: ID 61–70. Lô cấu trúc/metadata; chưa biên tập toàn văn hoặc kiểm chứng nguồn, số liệu và kết luận trong bài.

## Thay đổi

- Chuyển 3 bài theo bảng đối chiếu: ID 62 từ AI sang SEO & Content; ID 63 từ Quảng cáo sang Thương hiệu; ID 65 từ Thương hiệu sang Social & Video. Cập nhật đồng thời category/categorySlug theo cấu hình chung; 7 bài giữ chuyên mục.
- Khai báo 3 Góc nhìn, 5 Phân tích tình huống và 2 Hướng dẫn thực hành, sau khi đọc phần mở đầu, các đề mục và phần kết luận. Giữ dạng bài đề xuất của cả 10 bài.
- Khai báo trạng thái published, bổ sung coverAlt sau khi xem trực tiếp 10 ảnh. Giữ nguyên ảnh và URL hiện tại.
- Ghi sourceUrl từ mục Bài viết gốc có sẵn của cả 10 bài. Không điền sourceVerifiedAt hoặc editor; các URL này chưa được kiểm chứng trong lượt cấu trúc.
- Đổi ký hiệu [&hellip;] thành … trong 10 mô tả ngắn; không viết lại ý nghĩa mô tả.
- Ghi modifiedAt là 26/11/2026; giữ nguyên ngày đăng, tiêu đề, slug, tác giả, chủ đề cũ và thẻ.
- Giữ nguyên văn bản thân bài. HTML chỉ thêm style cục bộ để xử lý tràn ngang, chi tiết bên dưới. 110 bài ngoài lô giữ nguyên.

## Sửa bố cục HTML trong bài

Kiểm tra trước sửa trên cả local và website đang chạy xác nhận 8 bài tràn ngang ở viewport 390 px: ID 61 rộng 741 px; 63: 401 px; 64: 479 px; 65: 695 px; 66: 776 px; 67: 419 px; 68: 457 px; 69: 887 px.

- Thêm max-width:100% cho 10 iframe YouTube: ID 61 (1), 65 (2), 66 (1), 69 (6).
- Thêm overflow-wrap:anywhere cho 6 liên kết dài gây tràn: nguồn bài ID 63, 65, 67 và PDF case study ID 64, 66, 68.
- Giữ nguyên toàn bộ văn bản, href/src, title và width/height gốc của iframe; không thay code React hoặc CSS nền tảng. Không xác nhận khả năng phát nội dung video của bên thứ ba.

## Ghi nhận cho lượt biên tập toàn văn

- ID 61 và 67 có lời kể ngôi thứ nhất của nguồn dịch; đặc biệt ID 67 kể trải nghiệm từng làm việc tại Disney. Cần đối chiếu tác giả, cách ghi công và cách dẫn lời, tránh hiểu nhầm đây là trải nghiệm của tác giả metadata hiện tại. Lượt này chỉ ghi nhận, chưa đổi tên tác giả hoặc viết lại nội dung.
- ID 69 vẫn giữ mốc năm 2025 trong tiêu đề và thân bài; chưa được cập nhật thành hướng dẫn năm 2026. Các thuật ngữ sản phẩm quảng cáo, số liệu hiệu quả trong những case study và các nhận định về AI cần kiểm chứng ở lượt biên tập nội dung.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 61 | Thế hệ Z, AI và sức mạnh của Marketing sáng tạo | AI Marketing & Tự động hóa | Góc nhìn |
| 62 | Duy trì tính nhân sinh khi sử dụng công cụ AI tạo sinh cho content marketing | SEO & Content Marketing | Góc nhìn |
| 63 | Tại sao các nhà Marketing tiếp tục làm mới thương hiệu thay vì đặt cược vào quảng cáo phô trương | Thương hiệu & Hành vi khách hàng | Góc nhìn |
| 64 | Kraft mang đến một góc nhìn mới về thực phẩm cùng với Google | Quảng cáo & Tăng trưởng | Phân tích tình huống |
| 65 | Wimbledon: Điểm đột phá cho Digital Marketing | Social Media & Video Marketing | Phân tích tình huống |
| 66 | Hyatt mang trải nghiệm thương hiệu của mình vào cuộc sống với các giải pháp của Google | Quảng cáo & Tăng trưởng | Phân tích tình huống |
| 67 | Sự đổi mới bền bỉ và phép màu của Disney | Thương hiệu & Hành vi khách hàng | Phân tích tình huống |
| 68 | eHealth tăng cường nhận diện thương hiệu với Google Display Ads | Quảng cáo & Tăng trưởng | Phân tích tình huống |
| 69 | Video Marketing: Hướng dẫn toàn diện cho năm 2025 | Social Media & Video Marketing | Hướng dẫn thực hành |
| 70 | Gamification nội dung biến Marketing thành sân chơi cho sự tương tác | SEO & Content Marketing | Hướng dẫn thực hành |

Tiến độ: 70/120 bài chuẩn hóa cấu trúc, còn 50 bài. Chi tiết trước/sau tại batch-07-structure.json cùng thư mục.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 61–70 thay đổi, đúng các trường metadata và style HTML được ghi nhận. Văn bản, URL nguồn, slug, tiêu đề, tác giả và ngày đăng giữ nguyên; 110 bài khác không đổi.
- TypeScript và build sau khi sửa bố cục thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL; không mất URL cũ.
- Mười ảnh trả HTTP 200 (5 WebP, 4 JPEG, 1 PNG), đã xem trực tiếp để viết alt.
- Trình duyệt local: 10 bài đúng chuyên mục, dạng bài, alt và canonical. Ảnh tải được; không có lỗi JavaScript trong các trang đã kiểm tra.
- Trang chuyên mục Quảng cáo có 13 bài; Thương hiệu 15; AI 8.
- Bộ lọc Phân tích nghiên cứu có 30 bài (20 + 10); Hướng dẫn thực hành 22 (20 + 2); Góc nhìn 9; Phân tích tình huống 7; Cập nhật 2. Tải lại URL giữ đúng kết quả; liên kết topic cũ hoạt động.
- Sau sửa HTML, cả 10 bài có scrollWidth 390 px trên viewport 390 px. Đã xem ảnh chụp desktop bài Wimbledon và mobile bài Video Marketing.

## Phạm vi xuất bản

Codex tự commit/push và xác minh website sau pipeline. Chỉ commit dữ liệu Blog và hai báo cáo lô 7; giữ nguyên assets/ và docs/blog-review/. Việc kiểm chứng nguồn và biên tập toàn văn thực hiện ở các lô nội dung sau.

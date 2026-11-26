# Lô 9 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 28cbf3b. Phạm vi: ID 81–90. Lô cấu trúc/metadata; chưa biên tập toàn văn hoặc kiểm chứng nguồn, số liệu và kết luận.

## Thay đổi

- Chuyển 4 bài theo bảng đối chiếu: ID 81 và 85 sang Thương hiệu & Hành vi khách hàng; ID 86 và 90 sang Nền tảng & Chiến lược Marketing. Chuẩn hóa đồng thời category/categorySlug theo cấu hình chung; 6 bài giữ chuyên mục.
- Khai báo 3 Phân tích tình huống, 3 Phân tích nghiên cứu và 4 Hướng dẫn thực hành sau khi đọc mở đầu, các đề mục và kết luận.
- ID 90 chọn Hướng dẫn thực hành thay cho đề xuất Góc nhìn: phần chính là bộ thuật ngữ theo nhóm, giải nghĩa, ví dụ và hướng dẫn cách dùng; lời kể cá nhân không phải nội dung chi phối dạng bài.
- Khai báo publicationStatus: published; bổ sung coverAlt sau khi xem trực tiếp 10 ảnh, giữ nguyên ảnh và URL.
- Ghi sourceUrl từ liên kết Bài viết gốc/Nguồn bài viết có sẵn của cả 10 bài. Không điền sourceVerifiedAt hoặc editor; chưa kiểm chứng nguồn ngoài.
- Đổi [&hellip;] thành … trong 10 mô tả, giữ nguyên ý nghĩa. Ghi modifiedAt là 26/11/2026; giữ nguyên ngày đăng.
- Giữ nguyên văn bản, tiêu đề, slug, tác giả, topic, tags, URL nguồn và video. 110 bài ngoài lô không đổi; HTML chỉ thêm style xử lý tràn ngang như bên dưới.

## Sửa tràn ngang cục bộ

Trước sửa, kiểm tra website ở viewport 390 px ghi nhận chiều rộng cuộn: ID 81: 695 px; 82: 471 px; 83: 479 px; 86: 401 px; 87: 741 px; 90: 452 px. Các bài còn lại không tràn ngang.

- Thêm max-width:100% cho 3 iframe YouTube: ID 81 (2), ID 87 (1).
- Thêm overflow-wrap:anywhere cho 5 liên kết nguồn dài ở ID 81, 82, 83, 86 và 90.
- Giữ nguyên văn bản, href/src, title và width/height gốc. Không sửa React/CSS nền tảng; không xác nhận khả năng phát video bên thứ ba.

## Ghi nhận cho lượt biên tập nội dung

- ID 87 và 90 có lời kể trải nghiệm ngôi thứ nhất trong nguồn dịch; cần đối chiếu tác giả và cách ghi công, tránh hiểu nhầm là trải nghiệm của tác giả metadata hiện tại.
- ID 84, 85 và 89 có liên kết DOI trong bài; dạng Phân tích nghiên cứu được chọn theo nội dung thảo luận nghiên cứu. Chưa xác minh DOI, tác giả, phương pháp hay mức độ hỗ trợ của nguồn đối với kết luận.
- ID 85 nhắc quy định quyền riêng tư; ID 87 giới thiệu công cụ AI; ID 88 dùng dự báo thị trường cho năm 2025. Những nội dung này cần được kiểm chứng/cập nhật ở lượt biên tập toàn văn, không được coi là đã cập nhật chỉ vì modifiedAt thay đổi.
- ID 84, 85, 88 và 89 chưa dùng h2/h3 trong HTML; một số đoạn dùng chữ đậm như đề mục. Ghi nhận để tổ chức lại thân bài khi biên tập nội dung, chưa chuyển đổi hàng loạt trong lượt metadata.
- ID 81 và 90 còn phần quảng bá/tài nguyên của nguồn gốc; giữ nguyên để rà cùng toàn văn sau.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 81 | Guinness: Từ Black Stuff đến Vàng kỹ thuật số | Thương hiệu & Hành vi khách hàng | Phân tích tình huống |
| 82 | Thành công của VICE trên YouTube: Tăng lượng người xem bền vững thông qua các video đột phá | Social Media & Video Marketing | Phân tích tình huống |
| 83 | Land Rover tìm thấy thành công với quảng cáo tương tác | Quảng cáo & Tăng trưởng | Phân tích tình huống |
| 84 | Nếu Bạn Không Chọn Xanh, Tôi Sẽ Làm Thay! Khi Nào Người Tiêu Dùng Bù Đắp Cho Hành Vi Không Bền Vững Của Đối Tác? | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 85 | Khi quảng cáo hiệu quả phản tác dụng: Rủi ro của việc theo dõi quảng cáo [Tác động đến người tiêu dùng] | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 86 | Hướng dẫn Marketing giáo dục cho trường đại học | Nền tảng & Chiến lược Marketing | Hướng dẫn thực hành |
| 87 | 5 cách mà công cụ phân tích AI có thể giúp bạn trở thành một nhà Marketing giỏi hơn | AI Marketing & Tự động hóa | Hướng dẫn thực hành |
| 88 | 14 loại nội dung số mà bạn có thể chưa sử dụng đủ nhiều so với tiềm năng của nó | SEO & Content Marketing | Hướng dẫn thực hành |
| 89 | GenAI thành công và thất bại ở đâu trong việc tạo ra các câu chuyện Marketing trải nghiệm | AI Marketing & Tự động hóa | Phân tích nghiên cứu |
| 90 | 50 thuật ngữ Marketing (Marketing Buzzwords) cần biết và một số thuật ngữ cần tránh | Nền tảng & Chiến lược Marketing | Hướng dẫn thực hành |

Tiến độ: 90/120 bài chuẩn hóa cấu trúc, còn 30 bài. Chi tiết trước/sau tại batch-09-structure.json cùng thư mục.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 81–90 thay đổi đúng metadata và style đã ghi nhận. Văn bản, tiêu đề, slug, ngày đăng, tác giả và liên kết giữ nguyên; 110 bài khác không đổi.
- TypeScript và build thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL; không mất URL cũ.
- 10 ảnh trả HTTP 200 (7 WebP, 2 JPEG, 1 PNG), đã xem trực tiếp để viết alt.
- Trình duyệt local: 10 bài đúng chuyên mục, dạng bài, alt và canonical; ảnh tải được, không có lỗi JavaScript trong các trang đã kiểm tra.
- Chuyên mục Quảng cáo có 11 bài, Chiến lược có 6, AI có 8.
- Bộ lọc Phân tích nghiên cứu có 33 bài (20 + 13), Hướng dẫn thực hành 28 (20 + 8), Góc nhìn 9, Phân tích tình huống 18, Cập nhật 2. Tải lại URL giữ đúng kết quả; liên kết topic cũ hoạt động.
- Sau sửa, cả 10 bài có scrollWidth 390 px trên viewport 390 px. Đã xem ảnh chụp desktop bài ID 85 và mobile bài ID 89.

## Phạm vi xuất bản

Codex tự commit/push và xác minh website sau pipeline. Chỉ commit dữ liệu Blog và hai báo cáo lô 9; giữ nguyên assets/ và docs/blog-review/. Việc kiểm chứng nguồn và biên tập toàn văn thuộc các lô nội dung sau.

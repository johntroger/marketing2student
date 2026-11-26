# Lô 11 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 407d95f. Phạm vi: ID 101–110. Lô cấu trúc/metadata; chưa biên tập toàn văn hoặc kiểm chứng nguồn, số liệu và kết luận.

## Thay đổi

- Chuyển 3 bài: ID 103 và 106 sang Thương hiệu & Hành vi khách hàng; ID 109 sang CRM & Trải nghiệm khách hàng. Cập nhật đồng thời category/categorySlug theo cấu hình chung; 7 bài giữ chuyên mục.
- Khai báo 4 Phân tích nghiên cứu, 4 Hướng dẫn thực hành, 1 Phân tích tình huống và 1 Góc nhìn sau khi đọc mở đầu, các đề mục và kết luận. Giữ dạng bài đề xuất của cả 10 bài.
- Khai báo publicationStatus: published; bổ sung coverAlt sau khi xem trực tiếp 10 ảnh, giữ nguyên ảnh và URL.
- Ghi sourceUrl cho 9 bài: 5 URL Bài viết gốc (ID 101, 105, 107, 108, 109); 2 DOI có sẵn (102, 106); URL SAGE trong mục Nguồn tham khảo (103); URL AMA Research Insight được ghi trong mục Tải nghiên cứu gốc tại (104). Trang Research Insight là bài giới thiệu nghiên cứu, không mặc định là toàn văn nghiên cứu.
- ID 110 chỉ ghi Nguồn: Trịnh Bảo và không có liên kết; để trống sourceUrl. Không điền sourceVerifiedAt hoặc editor cho cả lô.
- Đổi [&hellip;] thành … trong các mô tả có ký hiệu này, giữ nguyên ý nghĩa; modifiedAt là 26/11/2026, giữ nguyên ngày đăng.
- Giữ nguyên văn bản, tiêu đề, slug, tác giả, topic, tags và các URL. 110 bài ngoài lô giữ nguyên. HTML chỉ thêm khung cuộn cho bảng trong ID 101.

## Sửa bố cục bảng ID 101

Trước sửa, website có chiều rộng cuộn 396 px trên viewport 390 px. Bảng thứ tư gồm 5 cột gây tràn; bọc riêng bảng bằng div có overflow-x:auto để người đọc cuộn ngang trong khung.

Giữ nguyên cả 5 bảng của bài, bao gồm văn bản, số liệu, ảnh, width và các thuộc tính HTML gốc. Không sửa React hoặc CSS nền tảng. Kiểm tra local sau sửa: khung rộng 308 px, nội dung rộng 355 px, cuộn ngang được 47 px; chiều rộng cuộn toàn trang là 390 px.

## Ghi nhận cho lượt biên tập nội dung

- ID 101 mô tả thử nghiệm của Hootsuite, được xếp Phân tích tình huống; không coi thử nghiệm này là nghiên cứu học thuật đã qua bình duyệt. Cần kiểm tra thiết kế, quy mô và giới hạn suy luận khi biên tập. Cụm LEF trong mở đầu cần rà ngữ cảnh hài hước, tránh được hiểu như chẩn đoán chuyên môn.
- ID 102, 103, 104 và 106 bàn về nghiên cứu; chưa xác minh tác giả, phương pháp, số liệu, DOI hoặc mức độ nguồn hỗ trợ kết luận. Việc ghi sourceUrl không phải xác minh nguồn.
- ID 105 và 109 giữ nguyên lời kể ngôi thứ nhất của nguồn HubSpot; cần đối chiếu tác giả và cách dẫn lời. Các mốc năm, số liệu hiệu quả video/email và giới thiệu công cụ trong ID 108 cần rà ở lượt toàn văn.
- ID 110 kể trải nghiệm và ghi Nguồn: Trịnh Bảo; cần đối chiếu tác giả metadata và cách ghi công. Không tự gán URL phỏng đoán hoặc đổi tên tác giả ở lượt cấu trúc.
- ID 102 còn dùng chữ đậm thay cho một số đề mục, chưa có h2/h3. Ghi nhận để tổ chức lại thân bài khi biên tập nội dung.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 101 | Liệu tương tác sớm có làm tăng phạm vi tiếp cận trên Instagram không? | Social Media & Video Marketing | Phân tích tình huống |
| 102 | Các tổ chức phi lợi nhuận: Tổ chức các sự kiện sáng tạo để thu hút các nhà tài trợ tiềm năng và mở ra nhiều cơ hội cho đi hơn | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 103 | Cách Nghe và Đọc Tin Tức Định Hình Cách Người Tiêu Dùng Hiểu và Cảm Nhận Thông Tin | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 104 | Meme Marketing: Tận Dụng Sức Mạnh Văn Hóa Internet Trong Thời Đại Số | Social Media & Video Marketing | Phân tích nghiên cứu |
| 105 | Mẹo và dữ liệu về video theo các nhà Marketing qua video | Social Media & Video Marketing | Hướng dẫn thực hành |
| 106 | Hiệu ứng Đại sứ: Các công ty có thể tăng cường hành vi bền vững bằng cách thúc đẩy người tiêu dùng trở thành Đại sứ vì xã hội | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 107 | Những người có sức ảnh hưởng đang định hình lại các hoạt động và sự kiện thương hiệu trực tiếp | Social Media & Video Marketing | Hướng dẫn thực hành |
| 108 | Làm thế nào để tạo ra một chiến lược tự động hóa tiếp thị | AI Marketing & Tự động hóa | Hướng dẫn thực hành |
| 109 | 4 loại email có mức độ tương tác cao nhất theo các nhà tiếp thị [+4 email không thành công] | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 110 | Tư Duy Marketing Yếu = Làm Seo Thất Bại | SEO & Content Marketing | Góc nhìn |

Tiến độ: 110/120 bài chuẩn hóa cấu trúc, còn 10 bài. Chi tiết trước/sau tại batch-11-structure.json cùng thư mục.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 101–110 thay đổi đúng metadata và khung cuộn bảng được ghi nhận. Văn bản, cả 5 bảng ID 101, slug, ngày đăng, tác giả và các URL giữ nguyên; 110 bài khác không đổi.
- TypeScript và build thành công. Sitemap đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- 10 ảnh trả HTTP 200 (5 WebP, 5 JPEG), đã xem trực tiếp để viết alt.
- Trình duyệt local: 10 bài đúng chuyên mục, dạng bài, alt và canonical; ảnh tải được, không có lỗi JavaScript trong các trang đã kiểm tra.
- Chuyên mục Quảng cáo có 10 bài, Nghiên cứu thị trường 5, AI 8.
- Bộ lọc Phân tích nghiên cứu có 39 bài (20 + 19), Hướng dẫn thực hành 36 (20 + 16), Góc nhìn 13, Phân tích tình huống 19, Cập nhật 3. Tải lại URL giữ đúng kết quả; link topic cũ hoạt động.
- Cả 10 bài có scrollWidth 390 px trên viewport 390 px. Đã xem ảnh chụp desktop ID 106, mobile ID 101 và bảng cuộn của ID 101.

## Phạm vi xuất bản

Codex tự commit/push và xác minh website sau pipeline. Chỉ commit dữ liệu Blog và hai báo cáo lô 11; giữ nguyên assets/ và docs/blog-review/. Kiểm chứng nguồn và biên tập toàn văn thuộc các lô nội dung sau.

# Lô 10 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: bb3d714. Phạm vi: ID 91–100. Lô cấu trúc/metadata; chưa biên tập toàn văn hoặc kiểm chứng nguồn, số liệu và kết luận.

## Thay đổi

- Chuyển 5 bài: ID 93 sang Nghiên cứu thị trường & Insight; ID 94 và 97 sang Thương hiệu & Hành vi khách hàng; ID 99 sang CRM & Trải nghiệm khách hàng; ID 100 sang Sản phẩm, Giá & Phân phối. Cập nhật đồng thời category/categorySlug theo cấu hình chung.
- Khai báo 4 Hướng dẫn thực hành, 3 Góc nhìn, 2 Phân tích nghiên cứu và 1 Cập nhật sau khi đọc mở đầu, các đề mục và kết luận.
- ID 92 chọn Cập nhật thay cho đề xuất Góc nhìn: bài đưa tin xu hướng ứng dụng AI trong bối cảnh thuế quan năm 2025 qua phỏng vấn và diễn biến ngành. Đây là dạng bài, không có nghĩa thông tin đã được cập nhật đến năm 2026.
- ID 94 chọn Góc nhìn thay cho đề xuất Phân tích nghiên cứu: trọng tâm là giải thích sức hút video ngắn qua trải nghiệm cá nhân, số liệu và lời khuyên, không phải phân tích một công trình nghiên cứu cụ thể.
- Khai báo publicationStatus: published; thêm coverAlt sau khi xem trực tiếp 10 ảnh, giữ nguyên ảnh và URL.
- Ghi sourceUrl cho 7 bài: 6 URL từ mục Bài viết gốc và DOI có sẵn của ID 100. ID 91, 93 và 98 để trống; không điền sourceVerifiedAt hoặc editor.
- Đổi [&hellip;] thành … trong 10 mô tả, giữ nguyên ý nghĩa; modifiedAt là 26/11/2026, giữ nguyên ngày đăng.
- Giữ nguyên văn bản, tiêu đề, slug, tác giả, topic, tags, href/src và kích thước HTML gốc. 110 bài ngoài lô giữ nguyên. Chỉ thêm style HTML cho phần gây tràn ngang.

## Nguồn chưa có URL bài

- ID 91 ghi Nguồn: Trịnh Bảo. Link nhóm Làm SEO bằng AI không phải URL nguồn bài, không dùng làm sourceUrl.
- ID 93 ghi Nguồn: Đức Sơn, Interloka brand agency và không có liên kết.
- ID 98 ghi Nguồn: Trịnh Bảo. Link Facebook được giới thiệu là bài trước về gom nhóm từ khóa/chủ đề, không lấy làm sourceUrl của bài hiện tại.

Cần đối chiếu cách ghi công và tác giả metadata của ba bài này trong lượt biên tập nội dung; không tự gán URL phỏng đoán hoặc đổi tác giả.

## Sửa tràn ngang cục bộ

Trước sửa trên website ở viewport 390 px: ID 94 có chiều rộng cuộn 741 px; ID 98: 1002 px; ID 99: 741 px. Bảy bài khác không tràn.

- Thêm max-width:100% cho 4 iframe YouTube: ID 94 (3), ID 99 (1).
- Thêm overflow-wrap:anywhere cho link Instagram hiển thị dài trong ID 94 và link Facebook trong ID 98.
- Giữ nguyên văn bản, href/src, title và width/height gốc; không sửa React/CSS nền tảng. Chưa xác nhận khả năng phát video bên thứ ba.

## Ghi nhận cho lượt biên tập nội dung

- ID 91, 93 và 98 cần đối chiếu nguồn và tác giả như trên; trải nghiệm và tỷ lệ thành công chưa được kiểm chứng.
- ID 92 phản ánh thị trường năm 2025. ID 94 và 99 có lời kể ngôi thứ nhất từ nguồn dịch, cần rà cách dẫn lời để tránh hiểu nhầm về tác giả.
- ID 94 dẫn số liệu khảo sát và nội dung về khả năng chú ý; đổi dạng bài không xác nhận hay phủ nhận độ chính xác. Giữ nguyên hasAcademicCitation để rà riêng ở lượt toàn văn.
- ID 97 phân tích nghiên cứu qua Research Insight; ID 100 dẫn DOI 10.1177/00222429241280405. Chưa kiểm chứng nguồn, tác giả, phương pháp hoặc số liệu, gồm tỷ lệ sản phẩm thất bại trong mở đầu ID 100.
- ID 92, 97 và 98 chưa dùng h2/h3; ID 96 còn lỗi diễn đạt/chính tả trong thân bài. Ghi nhận để biên tập sau.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 91 | Spin Content & Sáng Tạo Nội Dung | SEO & Content Marketing | Góc nhìn |
| 92 | Giữa lúc thuế quan tăng cao, các nhà Marketing tìm đến các giải pháp AI để tăng cường sức sáng tạo | AI Marketing & Tự động hóa | Cập nhật |
| 93 | Insight for strategy | Nghiên cứu thị trường & Insight | Góc nhìn |
| 94 | Tâm lý học của nội dung dạng ngắn: Tại sao chúng ta thích video ngắn gọn | Thương hiệu & Hành vi khách hàng | Góc nhìn |
| 95 | 11 Chiến lược tạo khách hàng tiềm năng để có được khách hàng tiềm năng chất lượng cao | Quảng cáo & Tăng trưởng | Hướng dẫn thực hành |
| 96 | Hướng dẫn tối ưu để tạo kế hoạch Content Marketing | SEO & Content Marketing | Hướng dẫn thực hành |
| 97 | Schadenfreude và Sympathy: Các thương hiệu nên tiếp cận hành vi xấu của khách hàng trung thành trên phương tiện truyền thông xã hội như thế nào | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 98 | Cách Chia Nhỏ Chủ Đề Content Seo | SEO & Content Marketing | Hướng dẫn thực hành |
| 99 | 22 Điểm tiếp xúc khách hàng sẽ tối ưu hóa hành trình khách hàng của bạn | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 100 | Cách tính thời gian ra mắt sản phẩm của bạn để đạt được thành công tối đa | Sản phẩm, Giá & Phân phối | Phân tích nghiên cứu |

Tiến độ: 100/120 bài chuẩn hóa cấu trúc, còn 20 bài. Chi tiết trước/sau tại batch-10-structure.json cùng thư mục.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 91–100 thay đổi đúng metadata và style được ghi nhận; văn bản, slug, tác giả, ngày đăng và các URL giữ nguyên. 110 bài khác không đổi.
- TypeScript và build thành công. Sitemap đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- 10 ảnh trả HTTP 200 (5 JPEG, 4 WebP, 1 PNG); đã xem trực tiếp để viết alt.
- Trình duyệt local: 10 bài đúng chuyên mục, dạng bài, alt và canonical; ảnh tải được, không có lỗi JavaScript trong các trang đã kiểm tra.
- Chuyên mục Nghiên cứu thị trường có 5 bài, Sản phẩm 5, Thương hiệu 16.
- Bộ lọc Phân tích nghiên cứu có 35 bài (20 + 15), Hướng dẫn thực hành 32 (20 + 12), Góc nhìn 12, Phân tích tình huống 18, Cập nhật 3. Tải lại URL giữ đúng kết quả; link topic cũ hoạt động.
- Cả 10 bài có scrollWidth 390 px trên viewport 390 px sau sửa. Đã xem ảnh chụp desktop ID 100 và mobile ID 98.

## Phạm vi xuất bản

Codex tự commit/push và xác minh website sau pipeline. Chỉ commit dữ liệu Blog và hai báo cáo lô 10; giữ nguyên assets/ và docs/blog-review/. Kiểm chứng nguồn và biên tập toàn văn thuộc các lô nội dung sau.

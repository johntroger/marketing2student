# Lô 3 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 89a227f. Phạm vi: ID 21–30. Lô này chỉnh cấu trúc và metadata; chưa biên tập thân bài hoặc kiểm chứng kết luận nghiên cứu.

## Thay đổi

- Chuyển 4 bài sang chuyên mục phù hợp theo bảng đối chiếu; 6 bài giữ chuyên mục, đồng thời chuẩn hóa tên theo danh mục hiện tại.
- Bổ sung dạng bài: 6 Phân tích nghiên cứu, 2 Hướng dẫn thực hành, 2 Góc nhìn; trạng thái published cho cả 10 bài.
- Bổ sung coverAlt: 5 bài dùng alt có sẵn; 5 bài cũ được mô tả sau khi xem ảnh bìa thực tế. Giữ nguyên ảnh, gồm cả JPEG và WebP.
- Bổ sung sourceUrl từ liên kết nguồn đang có: DOI, tài liệu Google Analytics, bài gốc Semrush và HubSpot. Không điền sourceVerifiedAt vì chưa kiểm chứng nguồn trong lô này.
- Chuẩn hóa ký hiệu [&hellip;] thành dấu … trong 5 mô tả ngắn, không viết lại nội dung mô tả.
- Ghi modifiedAt là 26/11/2026, giữ nguyên ngày đăng. Trường hợp ngày sửa trước ngày đăng cuối cùng ở ID 21 được xử lý.
- Giữ nguyên thân bài HTML, tiêu đề, slug, ảnh, ngày đăng, tác giả, chủ đề cũ và thẻ. 90 bài còn lại giữ nguyên.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 21 | Bài blog do AI hỗ trợ cần được biên tập ở đâu? | SEO & Content Marketing | Phân tích nghiên cứu |
| 22 | Từ 200 đánh giá đến một nhu cầu sản phẩm | Nghiên cứu thị trường & Insight | Phân tích nghiên cứu |
| 23 | Chatbot AI chăm sóc khách hàng nên trả lời thế nào để khách thấy được hỗ trợ? | CRM & Trải nghiệm khách hàng | Phân tích nghiên cứu |
| 24 | Ảnh quảng cáo AI có kéo thêm lượt nhấp? Cách thử trước khi tăng ngân sách | Đo lường & Phân tích dữ liệu | Phân tích nghiên cứu |
| 25 | Cách dùng AI kiểm tra link UTM trong GA4 | Đo lường & Phân tích dữ liệu | Hướng dẫn thực hành |
| 26 | Tham chiếu đến một thương hiệu đối thủ có thể tăng sự tham gia của người tiêu dùng | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 27 | Tại sao tăng trưởng bền vững đòi hỏi sự kết hợp đúng đắn giữa quảng cáo trả phí và truy cập tự nhiên | Nền tảng & Chiến lược Marketing | Góc nhìn |
| 28 | Những dấu hiệu cảnh báo về chiến lược nội dung: Những điều nhóm Marketing B2B mắc phải và cách khắc phục | SEO & Content Marketing | Góc nhìn |
| 29 | Làm chủ nghệ thuật lan truyền trên LinkedIn với công thức bốn bước của Hala Taha | Social Media & Video Marketing | Hướng dẫn thực hành |
| 30 | Truyền miệng trước khi mua ảnh hưởng đến truyền miệng sau khi mua như thế nào? | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |

Sau lô này, 30/120 bài đã chuẩn hóa cấu trúc, còn 90 bài. Chi tiết trước/sau tại batch-03-structure.json cùng thư mục.

## Phạm vi bàn giao

Codex tự xử lý dữ liệu, kiểm tra, commit/push và xác minh xuất bản. Không sửa code nền tảng hoặc nội dung ngoài Blog. Giữ nguyên assets/ và docs/blog-review/, không đưa các thư mục này vào commit. Các vấn đề về giọng kể, diễn giải và nguồn học thuật trong thân bài cũ sẽ được xử lý ở lô biên tập nội dung.

## Kiểm tra trước triển khai

- Đối chiếu với commit nền: chỉ ID 21–30 thay đổi. 90 bài khác giữ nguyên; không có dòng thân bài HTML hoặc slug bị đổi. Mô tả chỉ thay ký hiệu HTML thành dấu ba chấm tương ứng.
- Các cặp category/categorySlug và dạng bài khớp cấu hình. Không có ngày sửa trước ngày đăng sau khi xử lý ID 21.
- TypeScript và build thành công; sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- Mười ảnh bìa trả HTTP 200: 7 WebP và 3 JPEG. Năm ảnh cũ ID 26–30 đã được xem trực tiếp để bổ sung alt.
- Trình duyệt local kiểm tra cả 10 bài: chuyên mục, dạng bài, alt, ảnh và canonical đạt.
- CRM có 6 bài; Nghiên cứu thị trường & Insight có 3 bài; Nền tảng & Chiến lược Marketing có 1 bài sau ba lô.
- Bộ lọc Phân tích nghiên cứu có 25 bài, kiểm tra cả hai trang 20 + 5 bài và tải lại URL; Hướng dẫn thực hành có 3 bài; Góc nhìn có 2 bài.
- Liên kết topic cũ hoạt động. Kiểm tra bài cũ ID 28 ở màn hình 390 px không tràn ngang; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị, không thay thế kiểm chứng nguồn và biên tập thân bài.

# Lô 5 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 7d48a38. Phạm vi: ID 41–50. Lô cấu trúc/metadata; chưa biên tập thân bài hoặc kiểm chứng kết luận/số liệu của nguồn.

## Thay đổi

- Chuyển 6 bài sang chuyên mục theo bảng đối chiếu; 4 bài giữ chuyên mục. Cập nhật đồng thời category và categorySlug theo cấu hình chung.
- Sau khi đọc trọng tâm nội dung: khai báo 6 Hướng dẫn thực hành, 3 Phân tích nghiên cứu và 1 Cập nhật; trạng thái published cho cả 10 bài.
- Bổ sung coverAlt sau khi xem trực tiếp cả 10 ảnh bìa. Ảnh AVIF ID 42 được xem bằng bản sao PNG nền trắng; giữ nguyên AVIF và toàn bộ URL ảnh trên website.
- Bổ sung sourceUrl từ liên kết nguồn đang có trong bài. Không điền sourceVerifiedAt khi chưa kiểm chứng nguồn.
- Chuẩn hóa [&hellip;] thành dấu … trong 10 mô tả ngắn; không viết lại nội dung mô tả.
- Ghi modifiedAt là 26/11/2026; giữ ngày đăng và các mốc thời gian đã có. Bài Google AI Mode vẫn là thông tin theo thời điểm năm 2025, không được diễn đạt thành cập nhật mới năm 2026.
- Giữ nguyên thân bài HTML, tiêu đề, slug, ảnh, ngày đăng, tác giả, chủ đề cũ và thẻ. 70 bài ngoài lô giữ nguyên.

## Chốt dạng bài sau khi đọc nội dung

Bảng đối chiếu ban đầu ghi dạng bài như đề xuất, cần chốt theo trọng tâm bài thực tế. Lô này điều chỉnh bốn dòng, lưu lý do trong JSON riêng và giữ nguyên file đối chiếu local:

| ID | Đề xuất ban đầu | Dạng bài áp dụng | Căn cứ trong thân bài hiện có |
|---:|---|---|---|
| 41 | Hướng dẫn thực hành | Cập nhật | Nội dung thuật lại việc ra mắt AI Mode, thay đổi tính năng và phản ứng SEO theo mốc tháng 5/2025; không trình bày một quy trình thực hành. |
| 45 | Góc nhìn | Phân tích nghiên cứu | Thân bài mô tả nghiên cứu về 199 thương hiệu trên X trong năm năm, kết quả và hàm ý; trọng tâm là phân tích nghiên cứu, không phải góc nhìn riêng. |
| 46 | Hướng dẫn thực hành | Phân tích nghiên cứu | Thân bài tóm tắt mô hình và phân tích thực nghiệm chu kỳ meme, có phần giới thiệu nghiên cứu và DOI; khuyến nghị xuất phát từ nghiên cứu. |
| 50 | Hướng dẫn thực hành | Phân tích nghiên cứu | Thân bài trình bày nghiên cứu 516 Instagram Stories, phương pháp và các cấu hình nội dung; chưa phải một hướng dẫn có bước thực hành. |

Đây là xác định cách trình bày của bài đang có, không phải xác nhận tính đúng đắn của nghiên cứu hoặc số liệu đã dẫn.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 41 | Chế độ AI của Google có thể định hình lại tìm kiếm: Những điều người làm SEO cần biết | SEO & Content Marketing | Cập nhật |
| 42 | Nhắm mục tiêu 101: Hướng dẫn phân đoạn email cho người mới bắt đầu | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 43 | Tạo bản đồ hành trình mua hàng B2B trong 8 bước | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 44 | Các chiến thuật sáng tạo thúc đẩy hiệu suất quảng cáo B2B tốt hơn trên LinkedIn | Quảng cáo & Tăng trưởng | Hướng dẫn thực hành |
| 45 | Tại sao sự khác biệt về nội dung lại đánh bại sự bắt chước trên mạng xã hội X? | Social Media & Video Marketing | Phân tích nghiên cứu |
| 46 | Meme trong Marketing: Hãy hành động nhanh chóng nếu không chúng sẽ phản tác dụng | Social Media & Video Marketing | Phân tích nghiên cứu |
| 47 | Làm thế nào để tạo ra các chiến lược Marketing hiệu quả cho doanh nghiệp của bạn | Nền tảng & Chiến lược Marketing | Hướng dẫn thực hành |
| 48 | Cách tận dụng Marketing người ảnh hưởng B2B để phát triển thương hiệu của bạn | Social Media & Video Marketing | Hướng dẫn thực hành |
| 49 | Truyền thông mạng xã hội cho doanh nghiệp: Hướng dẫn thực hiện | Social Media & Video Marketing | Hướng dẫn thực hành |
| 50 | Có được công thức đúng: Cách kết hợp nội dung khác nhau giúp thúc đẩy sự tham gia của người dùng trên mạng xã hội | SEO & Content Marketing | Phân tích nghiên cứu |

Tiến độ: 50/120 bài chuẩn hóa cấu trúc, còn 70 bài. Chi tiết trước/sau tại batch-05-structure.json cùng thư mục.

## Phạm vi bàn giao

Codex tự kiểm tra, commit/push và xác minh website; không sửa code nền tảng hoặc nội dung ngoài Blog. Giữ nguyên assets/ và docs/blog-review/, không đưa vào commit. Giọng kể ngôi thứ nhất, các số liệu và thông tin theo thời điểm trong thân bài sẽ được rà ở lô biên tập nội dung.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 41–50 thay đổi; 70 bài khác giữ nguyên. Không có dòng thân bài HTML hoặc slug bị đổi. Mô tả chỉ được làm sạch ký hiệu HTML.
- Chuyên mục, dạng bài, trạng thái xuất bản và ngày sửa hợp lệ. Các điều chỉnh dạng bài ID 41, 45, 46, 50 có lý do riêng trong báo cáo; không điền sourceVerifiedAt.
- TypeScript và build thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL đã có.
- Mười ảnh bìa trả HTTP 200: 6 WebP, 3 JPEG và 1 AVIF. Đã xem cả 10 ảnh; AVIF tải và giải mã được trong trình duyệt.
- Kiểm tra local cả 10 bài: chuyên mục, dạng bài, alt, ảnh và canonical đạt.
- CRM có 12 bài; Nền tảng & Chiến lược Marketing có 2 bài; Quảng cáo & Tăng trưởng có 15 bài.
- Bộ lọc Phân tích nghiên cứu có 30 bài (20 + 10 trên hai trang); Hướng dẫn thực hành 13; Góc nhìn 3; Phân tích tình huống 2; Cập nhật 2. Tải lại URL giữ đúng kết quả.
- Link topic cũ hoạt động; bài ID 42 dùng ảnh AVIF không tràn ngang trên màn hình 390 px; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị, không thay thế việc kiểm chứng nghiên cứu hoặc cập nhật thông tin trong thân bài.

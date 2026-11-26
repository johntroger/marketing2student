# Lô 2 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: commit 5a2f489. Phạm vi: ID 11–20. Tiếp tục lô cấu trúc/metadata, chưa biên tập thân bài hoặc kiểm chứng kết luận nghiên cứu.

## Thay đổi

- Chuyển cả 10 bài theo bảng phân loại đã thống nhất; cập nhật categorySlug và category đúng cấu hình hiện tại.
- Khai báo dạng Phân tích nghiên cứu theo trọng tâm nội dung và bảng đối chiếu; publicationStatus là published.
- Bổ sung coverAlt từ alt ảnh có sẵn và sourceUrl từ URL DOI đã dẫn trong bài. Chưa điền sourceVerifiedAt vì đây không phải lô kiểm chứng nguồn.
- Ghi modifiedAt là 26/11/2026, giữ ngày đăng ban đầu.
- Giữ nguyên tiêu đề, mô tả, thân bài HTML, slug, ảnh, tác giả, chủ đề cũ và thẻ. Giữ nguyên 100 bài còn lại, bao gồm lô 1 và bài Search Console.

## Danh sách bài

| ID | Bài viết | Chuyên mục sau chuẩn hóa |
|---:|---|---|
| 11 | Gợi ý sản phẩm trên điện thoại và máy tính nên giống nhau không? | CRM & Trải nghiệm khách hàng |
| 12 | AI có thể giúp chọn phương án thiết kế sản phẩm ra sao? | Sản phẩm, Giá & Phân phối |
| 13 | Khách nên biết đang nói chuyện với chatbot từ lúc nào? | CRM & Trải nghiệm khách hàng |
| 14 | Khi nào nên thử nhân vật ảo trong chiến dịch influencer? | Social Media & Video Marketing |
| 15 | Khi AI viết bài mạng xã hội, thương hiệu dễ mất chất ở đâu? | SEO & Content Marketing |
| 16 | Khách hàng nhớ thương hiệu vì điều gì? | Thương hiệu & Hành vi khách hàng |
| 17 | AI viết tiêu đề email cá nhân hóa. Nên thử biến thể nào? | CRM & Trải nghiệm khách hàng |
| 18 | Tạo chân dung khách hàng bằng AI từ dữ liệu phỏng vấn | Nghiên cứu thị trường & Insight |
| 19 | AI đọc được lời khen mỉa mai trong bình luận không? | Nghiên cứu thị trường & Insight |
| 20 | AI viết mô tả sản phẩm cho hai nhóm khách như thế nào? | SEO & Content Marketing |

Chuyên mục Nghiên cứu thị trường & Insight nhận hai bài đầu tiên: ID 18–19. Số bài đã chuẩn hóa cấu trúc sau lô này: 20/120. Còn 100 bài. Chi tiết trước/sau ở batch-02-structure.json trong cùng thư mục.

## Phạm vi bàn giao

Codex tự chỉnh dữ liệu, kiểm tra, commit/push và xác minh xuất bản theo docs/RESPONSIBILITIES.md. Không sửa code nền tảng hoặc nội dung ngoài Blog. Giữ nguyên các thư mục local assets/ và docs/blog-review/, không đưa vào commit lô này.

## Kiểm tra trước triển khai

- So sánh với commit nền: chỉ 10 bài ID 11–20 thay đổi; các trường ngoài metadata của lô giữ nguyên. Không có dòng nội dung HTML hoặc slug bị thay đổi; 100 bài khác giữ nguyên.
- Mười cặp category/categorySlug và dạng bài khớp cấu hình hiện tại. Không điền sourceVerifiedAt khi chưa kiểm chứng nguồn.
- TypeScript và build thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL; không mất URL đã có.
- Cả 10 ảnh bìa trả HTTP 200, đúng định dạng image/webp.
- Trình duyệt local kiểm tra cả 10 bài: chuyên mục, dạng bài, alt ảnh và canonical đúng; ảnh tải được.
- Chuyên mục CRM có 5 bài; Sản phẩm, Giá & Phân phối có 3 bài; Nghiên cứu thị trường & Insight có 2 bài sau hai lô.
- Bộ lọc Phân tích nghiên cứu có 19 bài; Hướng dẫn thực hành có 1 bài. Tải lại URL giữ kết quả; liên kết topic cũ vẫn hoạt động.
- Kiểm tra màn hình 390 px không tràn ngang; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị, không xác nhận tính đúng đắn của kết luận nghiên cứu trong thân bài. Còn một trường hợp ngày sửa trước ngày đăng ở ID 21, ngoài phạm vi lô 2.

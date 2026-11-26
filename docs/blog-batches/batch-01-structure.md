# Lô 1 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 26/11/2026. Nền code: commit `9688dad`, bao gồm bản sửa Navbar `d1235d0`. Phạm vi: ID 1–10 trong bảng đối chiếu local `docs/blog-review/structure-map-2026-11-26.json`.

Lô này chuẩn hóa cấu trúc và metadata của 10 bài. Giữ nguyên toàn bộ slug, tiêu đề, mô tả, nội dung HTML, ảnh, ngày đăng, tác giả, chủ đề cũ và thẻ. 110 bài còn lại chưa chỉnh trong lô này, gồm 109 bài inline và bài Search Console ở module riêng.

## Thay đổi

- Chuyển 9 bài sang chuyên mục theo quyết định Marketing; 1 bài giữ AI Marketing. Cập nhật cả categorySlug và category theo cấu hình 10 chuyên mục của Antigravity.
- Khai báo articleFormat: 9 bài Phân tích nghiên cứu và 1 bài Hướng dẫn thực hành theo bảng đề xuất; không suy ra từ việc có DOI.
- Khai báo publicationStatus là published cho cả 10 bài đang xuất bản.
- Bổ sung coverAlt từ mô tả ảnh đã có trong thân bài.
- Bổ sung sourceUrl từ liên kết DOI đang được dẫn trong bài. Đây là ghi nhận nguồn đã có, chưa phải kiểm chứng nội dung hoặc metadata của nghiên cứu; không điền sourceVerifiedAt.
- Sửa modifiedAt thành ngày chỉnh metadata thực tế 26/11/2026. Giữ publishedAt cũ; xử lý được 10 trường hợp ngày sửa trước ngày đăng.
- Giữ thông tin tác giả đang có; không tự thêm tên người biên tập hoặc tuyên bố người viết đã kiểm duyệt.

## Danh sách bài

| ID | Bài | Chuyên mục sau chuẩn hóa | Dạng bài |
|---:|---|---|---|
| 1 | Khoảng cách giữa các lượt hiển thị quảng cáo | Quảng cáo & Tăng trưởng | Phân tích nghiên cứu |
| 2 | AI huấn luyện nhân viên bán hàng | CRM & Trải nghiệm khách hàng | Phân tích nghiên cứu |
| 3 | AI đọc từ khóa và giá thầu | Quảng cáo & Tăng trưởng | Phân tích nghiên cứu |
| 4 | AI đọc ảnh kệ hàng | Sản phẩm, Giá & Phân phối | Phân tích nghiên cứu |
| 5 | AI gợi ý cho nhân viên hỗ trợ | CRM & Trải nghiệm khách hàng | Phân tích nghiên cứu |
| 6 | Dữ liệu theo dõi quảng cáo | Đo lường & Phân tích dữ liệu | Phân tích nghiên cứu |
| 7 | AI đọc đơn hàng tăng thêm | Đo lường & Phân tích dữ liệu | Phân tích nghiên cứu |
| 8 | AI và mức sẵn lòng chi trả | Sản phẩm, Giá & Phân phối | Phân tích nghiên cứu |
| 9 | Brief tạo ảnh quảng cáo AI | AI Marketing & Tự động hóa | Phân tích nghiên cứu |
| 10 | Trợ lý AI trong livestream | Social Media & Video Marketing | Hướng dẫn thực hành |

Chi tiết trước/sau và slug từng bài nằm trong `batch-01-structure.json` cùng thư mục. Đây là báo cáo thay đổi, không phải bản thay thế cho thân bài.

## Ranh giới bàn giao

Không thay đổi code giao diện hoặc định nghĩa chuyên mục. Các thư mục local `assets/` và `docs/blog-review/` giữ nguyên, không đưa vào commit của lô này. Lô cấu trúc không thay thế việc biên tập và kiểm chứng nguồn của 10 bài này ở bước nội dung tiếp theo.

## Kiểm tra trước triển khai

- So sánh với commit nền: chỉ 10 bài thay đổi và chỉ các trường metadata thuộc phạm vi. Nội dung HTML giữ nguyên từng chuỗi; 110 bài khác giữ nguyên.
- TypeScript và build thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL; không mất URL có sẵn.
- Mười ảnh bìa hiện có trả HTTP 200 và đúng định dạng image/webp.
- Trình duyệt local: cả 10 trang có chuyên mục, dạng bài, alt ảnh và canonical đúng; ảnh tải được.
- Chuyên mục CRM và Sản phẩm/Giá/Phân phối đều nhận đúng 2 bài của lô.
- Bộ lọc Phân tích nghiên cứu nhận 9 bài; Hướng dẫn thực hành nhận 1 bài. Tải lại URL giữ nguyên kết quả.
- Link topic cũ Video & Livestream vẫn tìm thấy bài livestream.
- Màn hình 390 px không tràn ngang; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị; không xác nhận tính đúng đắn của các kết luận nghiên cứu trong thân bài.

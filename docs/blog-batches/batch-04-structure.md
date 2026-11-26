# Lô 4 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: 2eb7818. Phạm vi: ID 31–40. Chỉnh cấu trúc và metadata; chưa biên tập thân bài hay kiểm chứng kết luận/số liệu của nguồn.

## Thay đổi

- Chuyển 4 bài sang chuyên mục phù hợp; 6 bài giữ slug chuyên mục và chuẩn hóa tên theo cấu hình hiện tại.
- Bổ sung đủ năm dạng bài: 2 Phân tích tình huống, 1 Góc nhìn, 1 Cập nhật, 2 Phân tích nghiên cứu và 4 Hướng dẫn thực hành. Khai báo published cho cả 10 bài.
- Bổ sung coverAlt sau khi xem trực tiếp cả 10 ảnh bìa; giữ nguyên file và URL ảnh.
- Ghi sourceUrl từ liên kết nguồn đã dẫn trong bài: bài gốc HubSpot, Sprout Social, Forbes, Social Media Today, Hootsuite, AMA hoặc DOI. Không điền sourceVerifiedAt khi chưa kiểm chứng nguồn.
- Chuẩn hóa ký hiệu [&hellip;] thành dấu … trong 10 mô tả ngắn; không viết lại nội dung mô tả.
- Ghi modifiedAt là 26/11/2026; giữ nguyên ngày đăng và các mốc thời gian trong bài. Bài giờ đăng mạng xã hội năm 2025 không được đổi thành hướng dẫn năm 2026.
- Giữ nguyên thân bài HTML, tiêu đề, slug, ảnh, ngày đăng, tác giả, chủ đề cũ và thẻ. 80 bài còn lại giữ nguyên.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 31 | Biến khách hàng thành thành viên cộng đồng — cách cộng đồng biến đổi trải nghiệm Gymshark | CRM & Trải nghiệm khách hàng | Phân tích tình huống |
| 32 | Báo cáo hiệu suất sau khi đăng: Các thương hiệu táo bạo triển khai ROI mạng xã hội | Đo lường & Phân tích dữ liệu | Phân tích tình huống |
| 33 | Chuyển đổi các chiến dịch thành hành trình: Kỷ nguyên mới của Marketing | CRM & Trải nghiệm khách hàng | Góc nhìn |
| 34 | Pinterest bổ sung thêm ảnh ghép hỗ trợ AI, cập nhật thông tin chi tiết về xu hướng | AI Marketing & Tự động hóa | Cập nhật |
| 35 | Khi nào người tiêu dùng thích thương hiệu mới hơn thương hiệu đã thành danh? | Thương hiệu & Hành vi khách hàng | Phân tích nghiên cứu |
| 36 | Thời điểm tốt nhất để đăng bài trên mạng xã hội vào năm 2025 | Social Media & Video Marketing | Hướng dẫn thực hành |
| 37 | Khi nào người tiêu dùng quyết định đổi điểm thưởng? Vai trò của thiết kế chương trình khách hàng thân thiết | CRM & Trải nghiệm khách hàng | Phân tích nghiên cứu |
| 38 | Cách theo dõi, chứng minh và cải thiện ROI trên mạng xã hội của bạn | Đo lường & Phân tích dữ liệu | Hướng dẫn thực hành |
| 39 | Thu hút khán giả của bạn bằng nội dung có tính tương tác | SEO & Content Marketing | Hướng dẫn thực hành |
| 40 | Chiến lược tận dụng AI trong trải nghiệm của khách hàng | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |

Tiến độ sau lô này: 40/120 bài chuẩn hóa cấu trúc, còn 80 bài. Chi tiết trước/sau tại batch-04-structure.json cùng thư mục.

## Phạm vi bàn giao

Codex tự tích hợp, kiểm tra, commit/push và xác minh website theo phân công. Không sửa code nền tảng hoặc nội dung ngoài Blog. Giữ nguyên các thư mục local assets/ và docs/blog-review/, không đưa vào commit. Các bài kể trải nghiệm ở ngôi thứ nhất và các số liệu/thông tin theo thời điểm vẫn cần rà lại trong lô biên tập nội dung.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ 10 bài ID 31–40 thay đổi; 80 bài khác giữ nguyên. Không có dòng thân bài HTML hoặc slug bị đổi; mô tả chỉ được chuẩn hóa ký hiệu HTML.
- Chuyên mục, dạng bài và trạng thái xuất bản hợp lệ; không có ngày sửa trước ngày đăng. Không điền sourceVerifiedAt khi chưa kiểm chứng.
- TypeScript và build thành công; sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- Mười ảnh bìa trả HTTP 200: 7 WebP và 3 JPEG. Đã xem cả 10 ảnh để viết coverAlt.
- Kiểm tra local cả 10 trang: chuyên mục, dạng bài, alt, ảnh và canonical đạt.
- CRM có 10 bài; Đo lường có 11 bài; Thương hiệu có 16 bài trên các trang chuyên mục.
- Bộ lọc Phân tích nghiên cứu có 27 bài (20 + 7 trên hai trang); Hướng dẫn thực hành 7; Góc nhìn 3; Phân tích tình huống 2; Cập nhật 1. Tải lại URL giữ đúng bộ lọc.
- Link topic cũ còn hoạt động. Bài cũ ID 37 không tràn ngang trên màn hình 390 px; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị, không thay thế việc kiểm chứng nguồn hoặc cập nhật thông tin theo thời điểm trong thân bài.

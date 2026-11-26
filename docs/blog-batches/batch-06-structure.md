# Lô 6 chuẩn hóa cấu trúc Blog

Ngày thực hiện: 2026-11-26. Nền code: c2e80f2. Phạm vi: ID 51–60. Lô cấu trúc/metadata; chưa biên tập thân bài hoặc kiểm chứng kết luận, số liệu và quy định được nhắc trong nguồn.

## Thay đổi

- Chuyển 6 bài sang chuyên mục theo bảng đối chiếu; 4 bài giữ chuyên mục. Chuẩn hóa đồng thời category/categorySlug theo cấu hình chung.
- Khai báo 7 Hướng dẫn thực hành và 3 Góc nhìn; trạng thái published cho cả 10 bài.
- Sau khi đọc thân bài, ID 56 được chốt là Góc nhìn thay cho đề xuất Hướng dẫn thực hành: trọng tâm là lập luận, lời khuyên và trải nghiệm cá nhân về Google update, không phải quy trình từng bước.
- Bổ sung coverAlt sau khi xem trực tiếp 10 ảnh. Giữ nguyên ảnh và URL, gồm WebP, JPEG và PNG.
- Ghi sourceUrl cho 9 bài từ liên kết nguồn đã có. ID 56 không có URL nguồn nên để trống, không gắn link phỏng đoán; không điền sourceVerifiedAt cho cả lô.
- Chuẩn hóa [&hellip;] thành dấu … trong 10 mô tả ngắn, không viết lại nội dung mô tả.
- Ghi modifiedAt là 26/11/2026; giữ nguyên ngày đăng và các mốc năm trong nội dung.
- Giữ nguyên nội dung văn bản, tiêu đề, slug, ảnh, tác giả, chủ đề cũ và thẻ. 60 bài ngoài lô giữ nguyên. Chỉ HTML ID 59 được thêm max-width:100% vào đúng hai iframe LinkedIn; không đổi src, width/height gốc hoặc nội dung nhúng.

## Sửa bố cục riêng trong bài ID 59

Hai iframe LinkedIn có width cố định 504 px. Đối chiếu trước sửa: local và website đang chạy đều rộng cuộn 545 px trên màn hình 390 px. Thêm style max-width:100% vào đúng hai iframe của bài để giới hạn theo khung đọc. Đây là sửa HTML nội dung Blog, không sửa React hoặc CSS giao diện chung; giữ nguyên văn bản, src và chiều cao khung nhúng.

## Trường hợp cần rà khi biên tập nội dung

ID 56 ghi Nguồn: Trịnh Bảo ở cuối bài nhưng không kèm URL; thông tin tác giả trong metadata hiện có cần đối chiếu lại với nguồn này. Lô cấu trúc chỉ ghi nhận vấn đề, không tự gán URL hay đổi tên tác giả. Các trải nghiệm kể ở ngôi thứ nhất và số liệu trong những bài khác, đặc biệt ID 53 và 59, cũng cần được đối chiếu nguồn khi biên tập toàn văn.

## Danh sách bài

| ID | Bài viết | Chuyên mục | Dạng bài |
|---:|---|---|---|
| 51 | Quà tặng/sản phẩm khuyến mại liệu có còn hiệu quả không? | Quảng cáo & Tăng trưởng | Hướng dẫn thực hành |
| 52 | Điều chỉnh Chatbots đòi hỏi tâm lý học, không phải công nghệ | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 53 | Cách khuếch đại thương hiệu của bạn với bất kỳ ngân sách nào | Social Media & Video Marketing | Hướng dẫn thực hành |
| 54 | Tại sao Cá nhân hóa dựa trên dữ liệu vẫn còn khó khăn (và cách làm cho nó dễ dàng hơn) | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 55 | 6 ưu tiên Marketing mà các nhà lãnh đạo đặc biệt lưu ý vào năm 2025 | Nền tảng & Chiến lược Marketing | Góc nhìn |
| 56 | Google Update: Vì Sao Bạn Sợ? | SEO & Content Marketing | Góc nhìn |
| 57 | Email Marketing là gì? [Hướng dẫn chuyên sâu cho người mới bắt đầu] | CRM & Trải nghiệm khách hàng | Hướng dẫn thực hành |
| 58 | Thử nghiệm A/B trong Marketing là gì? Cách thực hiện + Ví dụ | Đo lường & Phân tích dữ liệu | Hướng dẫn thực hành |
| 59 | Cách thế hệ Z sử dụng AI để xây dựng thương hiệu cá nhân – đâu là cách mà tôi xây dựng sự hiện diện trên LinkedIn và đã tiếp cận hơn 140 triệu người | Social Media & Video Marketing | Hướng dẫn thực hành |
| 60 | Vai trò chuyển đổi của Marketing trong việc thúc đẩy thay đổi xã hội | Nền tảng & Chiến lược Marketing | Góc nhìn |

Tiến độ: 60/120 bài chuẩn hóa cấu trúc, còn 60 bài. Chi tiết trước/sau tại batch-06-structure.json cùng thư mục.

## Phạm vi bàn giao

Codex tự kiểm tra, commit/push và xác minh website. Không sửa code nền tảng hoặc nội dung ngoài Blog. Giữ nguyên assets/ và docs/blog-review/, không đưa các thư mục này vào commit.

## Kiểm tra trước triển khai

- Đối chiếu commit nền: chỉ ID 51–60 thay đổi; 60 bài khác giữ nguyên. Nội dung văn bản và slug không đổi. HTML chỉ thay ở hai iframe LinkedIn của ID 59, đúng phép thêm max-width:100%; src và width/height gốc giữ nguyên.
- Chuyên mục/dạng bài và ngày sửa hợp lệ. ID 56 để trống sourceUrl vì bài không có đường dẫn nguồn; cả lô không có sourceVerifiedAt.
- TypeScript và build sau khi sửa iframe thành công. Sitemap giữ đủ 120 bài, 10 chuyên mục và 651 URL, không mất URL cũ.
- Mười ảnh bìa trả HTTP 200: 4 WebP, 4 JPEG, 2 PNG. Đã xem trực tiếp cả 10 ảnh để bổ sung alt.
- Kiểm tra local 10 bài: chuyên mục, dạng bài, alt, ảnh và canonical đúng.
- CRM có 15 bài; Nền tảng & Chiến lược Marketing có 4 bài; Đo lường có 10 bài.
- Bộ lọc Phân tích nghiên cứu có 30 bài (20 + 10 trên hai trang); Hướng dẫn thực hành 20; Góc nhìn 6; Phân tích tình huống 2; Cập nhật 2. Tải lại URL giữ đúng kết quả; liên kết topic cũ hoạt động.
- Trước sửa iframe, cả local và website cũ có chiều rộng cuộn 545 px trên viewport 390 px. Sau sửa, bài ID 59 không tràn ngang trên local; không có lỗi JavaScript trên các trang đã kiểm tra.

Các kiểm tra trên xác nhận cấu trúc và hiển thị; việc kiểm chứng nguồn, quy định và các số liệu trong thân bài thuộc lô biên tập nội dung.

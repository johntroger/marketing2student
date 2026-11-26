# Quy trình Blog: Codex và Antigravity

## Phạm vi và nguồn dữ liệu

- Website hiện tại là React/Vite. Không xuất bản qua WordPress.
- Codex: nghiên cứu, viết bài, kiểm chứng nguồn, tạo ảnh, metadata, liên kết nội bộ, đưa bài vào dữ liệu và xuất bản theo yêu cầu.
- Antigravity: giao diện, thành phần React, chức năng, hạ tầng triển khai. Thay đổi tích hợp nhỏ phục vụ bài đăng phải được thông báo khi bàn giao.
- Nội dung bài mới: một module TypeScript cho mỗi bài trong `src/data/blog/`, xuất đối tượng đúng kiểu `Article` từ `src/types/index.ts`.
- Thư mục `src/data/blog/` chỉ chứa bài sẵn sàng xuất bản; giữ bản nháp ngoài thư mục này vì bộ sinh sitemap quét tất cả module `.ts` tại đây.
- Danh sách dùng cho website: import bài mới trong `src/data/articles.ts`, rồi thêm vào mảng `articles`. Giữ thứ tự bài mới trước để sidebar và điều hướng nhất quán.
- Ảnh đã xuất bản: `public/images/blog/<slug>.webp`. Dùng URL HTTPS tuyệt đối của domain trong `featuredImage` để metadata chia sẻ cũng có URL đầy đủ.
- `scripts/generate-sitemap.mjs` quét dữ liệu cũ và module trong `src/data/blog/`. Khai báo `slug` trực tiếp bằng chuỗi, không tính động.

## Quy ước nội dung

- Mỗi bài giải quyết một câu hỏi cụ thể cho sinh viên hoặc người mới làm Marketing; rà bài hiện có để tránh trùng chủ đề.
- Tách rõ thông tin có nguồn, diễn giải của người viết và tình huống giả định. Không bịa số liệu, trích dẫn, trải nghiệm hoặc kết quả chiến dịch.
- Đặt nguồn gần nhận định; ưu tiên tài liệu chính thức và nghiên cứu gốc. Có thể thêm bài tập và liên kết đến bài/công cụ liên quan.
- Không tự ghi tác giả đã kiểm duyệt hoặc dùng trải nghiệm ngôi thứ nhất của chủ website. Mặc định bài thử dùng tác giả `Marketing2Student`; đổi tên tác giả khi chủ dự án yêu cầu.
- `hasAcademicCitation` chỉ bật khi bài thực sự dẫn nghiên cứu học thuật; tài liệu hướng dẫn sản phẩm không được tính là nghiên cứu học thuật.
- `id` phải duy nhất. Trường `wpId` hiện được giao diện dùng để sắp xếp bài, kể cả bài local không có WordPress ID; chọn số nguyên duy nhất lớn hơn giá trị hiện có, không gọi API WordPress.
- Ngày đăng/sửa theo ngày xuất bản thực tế ở Việt Nam. Banner ưu tiên 16:9, WebP; đặt alt cụ thể trong nội dung nếu có ảnh trong thân bài. Giao diện đang dùng tiêu đề bài làm alt ảnh bìa.
- Lưu prompt và thông tin ảnh trong `docs/blog-assets/` để tái tạo; đây không phải nội dung hiển thị cho độc giả.

## Tránh xung đột khi cùng làm việc

1. Trước khi sửa, đọc `git status` và thông báo phạm vi file đang làm cho chủ dự án.
2. Không đồng thời sửa `src/data/articles.ts`, `scripts/generate-sitemap.mjs` hoặc `public/sitemap.xml`. Các module bài và ảnh riêng có thể chuẩn bị độc lập.
3. Nếu cùng một checkout có thay đổi chưa commit của công cụ khác, giữ nguyên và chỉ stage file/hunk của tác vụ mình. Không reset, stash hoặc ghi đè phần của bên kia.
4. Nếu khác checkout/máy: lấy thay đổi mới bằng `git pull --ff-only` khi working tree sạch trước khi tích hợp; nếu nhánh đã tách, xử lý hợp nhất rõ ràng, không force-push `main`.
5. Trong cùng checkout, tuần tự hóa bước build, sinh sitemap, commit và push. Dù viết ở file riêng, hai công cụ không cùng điều khiển Git index/HEAD.
6. Bàn giao bằng commit SHA, danh sách file, URL bài, URL pipeline, kết quả kiểm tra và phần còn vướng. Công cụ còn lại đọc commit mới trước khi tiếp tục.

## Kiểm tra và xuất bản

1. Kiểm tra slug, id và khóa sắp xếp không trùng; chuyên mục/chủ đề hợp lệ; nguồn, ngày, đường dẫn ảnh và liên kết nội bộ đúng.
2. Chạy `npm run typecheck` và `npm run build`. Build sinh lại sitemap; kiểm tra URL mới có trong sitemap và URL cũ không bị mất.
3. Xem bài và danh sách Blog ở màn hình máy tính/điện thoại; kiểm tra ảnh, bảng, metadata và lỗi hiển thị.
4. Xóa thư mục `dist/` do chính lượt build này tạo sau kiểm tra. Không xóa artifact hoặc file đang làm của bên khác.
5. Commit theo Conventional Commits, chỉ đưa file thuộc tác vụ. Push `origin main` theo quy tắc dự án trong `GEMINI.md` khi đã được yêu cầu đăng. Với yêu cầu chỉ soạn nháp, giữ nháp local theo yêu cầu đó.
6. Theo dõi GitHub Actions đến khi hoàn tất. Xác nhận URL bài, ảnh, sitemap và bundle thực tế trên website đã cập nhật. Pipeline thành công chưa đủ chứng minh Plesk đã đồng bộ.
7. Nếu website chưa cập nhật, tiếp tục kiểm tra webhook/deployment; báo chính xác bước bị chặn, không gọi bài là đã đăng thành công.

## Bài thử đầu tiên

- Slug: `search-console-hien-thi-tang-luot-nhap-giam`.
- Module: `src/data/blog/searchConsoleCtr.ts`.
- Ảnh: `public/images/blog/search-console-hien-thi-tang-luot-nhap-giam.webp`.
- Nguồn: tài liệu chính thức Google Search Console và Google Search Central, kiểm tra ngày 26/11/2026.
- Điều chỉnh tích hợp: sitemap nhận thêm module Blog để bài mới không bị bỏ sót.
- Kiểm tra local: TypeScript/build đạt; bài, banner, canonical, Open Graph, Article schema và điều hướng từ Blog đạt ở viewport 1440 px và 390 px; sitemap tăng từ 646 lên 647 URL, không mất URL cũ.
- Ghi nhận để Antigravity xử lý riêng: thanh điều hướng trên viewport 390 px làm trang có chiều rộng cuộn 448 px. Trang `/gioi-thieu` có cùng hiện tượng; vùng nội dung bài mới không tràn và không làm tăng chiều rộng trang. Không sửa Navbar trong lượt đăng bài này.

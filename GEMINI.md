# Quy tắc Triển khai & Đồng bộ Tự động (Marketing2Student)

## Phối hợp Antigravity và Codex

Đọc `docs/RESPONSIBILITIES.md` và `AGENTS.md` ở đầu lượt; đọc thêm `docs/BLOG_WORKFLOW.md` khi làm Blog. `docs/RESPONSIBILITIES.md` là thông báo phân công chung do chủ dự án yêu cầu lưu để áp dụng lâu dài.

Codex **chỉ** tự thực hiện trọn quy trình bài thuộc mục Blog (`https://marketing2student.com/blog`) và ảnh của các bài đó, gồm phân loại, metadata, tích hợp dữ liệu, kiểm tra, commit/push và xác minh xuất bản; không chuyển phần này cho Antigravity. Bài viết và nội dung tại **mọi mục ngoài Blog** vẫn do Antigravity viết, tích hợp và tự commit/push. Antigravity đồng thời phụ trách code nền tảng, giao diện, chức năng và hạ tầng; không cần đăng hay commit hộ bài Blog. Ranh giới theo khu vực xuất bản: bài hướng dẫn AI trong Blog thuộc Codex, còn trang công cụ AI tại sàn AI tools thuộc Antigravity. Chỉ phối hợp thêm khi có phụ thuộc kỹ thuật cụ thể hoặc chủ dự án thay đổi phân công. Việc pull commit chỉ là đồng bộ; tránh sửa đồng thời các file dùng chung và không yêu cầu chủ dự án nhắc lại phân công sau mỗi lô.

Sau khi hoàn tất mọi thay đổi mã nguồn hoặc dữ liệu (bài viết, công cụ, cấu hình SEO/sitemap) trong dự án `Marketing2student`:

1. **Kiểm tra trước khi đẩy code**:
   - Chạy `npx tsc --noEmit` (và `node scripts/generate-sitemap.mjs` nếu có thay đổi bài viết/công cụ/chuyên mục) để đảm bảo không có lỗi TypeScript và `public/sitemap.xml` luôn mới nhất.
   - Đảm bảo không còn thư mục `dist/` hoặc tệp tạm trước khi commit.

2. **Tự động Commit & Push lên `origin/main` để đồng bộ sang Plesk**:
   - Không dừng lại hỏi xác nhận "có muốn đồng bộ/push không" sau khi đã hoàn thành tác vụ chỉnh sửa được yêu cầu.
   - Chủ động `git add` đúng các tệp đã thay đổi thuộc phạm vi tác vụ, tạo commit với thông điệp rõ ràng (theo chuẩn Conventional Commits), và chạy `git push origin main` ngay lập tức để GitHub Actions (`.github/workflows/deploy-plesk.yml`) tự động build sang nhánh `release-production` và kích hoạt webhook cập nhật lên Plesk (`marketing2student.com`).
   - Chỉ bỏ qua bước push nếu người dùng yêu cầu rõ ràng là "chỉ sửa local, chưa đẩy lên mạng" hoặc khi kiểm tra `typecheck` bị lỗi.

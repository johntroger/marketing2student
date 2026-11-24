# Quy tắc Triển khai & Đồng bộ Tự động (Marketing2Student)

Sau khi hoàn tất mọi thay đổi mã nguồn hoặc dữ liệu (bài viết, công cụ, cấu hình SEO/sitemap) trong dự án `Marketing2student`:

1. **Kiểm tra trước khi đẩy code**:
   - Chạy `npx tsc --noEmit` (và `node scripts/generate-sitemap.mjs` nếu có thay đổi bài viết/công cụ/chuyên mục) để đảm bảo không có lỗi TypeScript và `public/sitemap.xml` luôn mới nhất.
   - Đảm bảo không còn thư mục `dist/` hoặc tệp tạm trước khi commit.

2. **Tự động Commit & Push lên `origin/main` để đồng bộ sang Plesk**:
   - Không dừng lại hỏi xác nhận "có muốn đồng bộ/push không" sau khi đã hoàn thành tác vụ chỉnh sửa được yêu cầu.
   - Chủ động `git add` đúng các tệp đã thay đổi thuộc phạm vi tác vụ, tạo commit với thông điệp rõ ràng (theo chuẩn Conventional Commits), và chạy `git push origin main` ngay lập tức để GitHub Actions (`.github/workflows/deploy-plesk.yml`) tự động build sang nhánh `release-production` và kích hoạt webhook cập nhật lên Plesk (`marketing2student.com`).
   - Chỉ bỏ qua bước push nếu người dùng yêu cầu rõ ràng là "chỉ sửa local, chưa đẩy lên mạng" hoặc khi kiểm tra `typecheck` bị lỗi.

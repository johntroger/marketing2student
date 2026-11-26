# Phối hợp nội dung và mã nguồn

- Đọc `docs/RESPONSIBILITIES.md` để biết phân công cố định; đọc thêm `docs/BLOG_WORKFLOW.md` trước khi làm Blog.
- Codex **chỉ** phụ trách bài thuộc mục Blog (`https://marketing2student.com/blog`) và ảnh của các bài đó: nội dung, phân loại, metadata, tích hợp dữ liệu, kiểm tra, tự commit/push và xác minh xuất bản. Trang chi tiết Blog có thể nằm ở `/<slug>`. Không chuyển bước commit/push hoặc đăng bài Blog cho Antigravity.
- Antigravity tiếp tục viết và quản lý bài/nội dung ở **mọi mục ngoài Blog**, đồng thời phụ trách code nền tảng, giao diện, chức năng và hạ tầng. Codex không tự chỉnh nội dung công cụ/AI tools hoặc các mục khác. Chỉ phối hợp khi có yêu cầu kỹ thuật cụ thể; pull commit là đồng bộ, không phải chuyển việc Blog. Không yêu cầu chủ dự án nhắc lại phân công sau mỗi lô.
- Giữ nguyên thay đổi ngoài phạm vi; không đưa file đang làm dở của công cụ khác vào commit.
- Quy trình xuất bản đã được chủ dự án cho phép: local → commit và push `main` → GitHub Actions → `release-production` → Plesk. Tuân thủ kiểm tra trước khi xuất bản trong `GEMINI.md`.

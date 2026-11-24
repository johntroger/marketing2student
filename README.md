# Marketing2Student — Sàn Công Cụ Marketing & Thư Viện Thực Chiến

Mã nguồn website **https://marketing2student.com/** đã được chuyển đổi từ WordPress sang kiến trúc **Modern React SPA (Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4)** đồng bộ với nền tảng `store.vneconomics.com` (`VneconomicsStore`).

## 1. Các trụ cột chính của nền tảng mới

1. **Sàn Công Cụ Digital Marketing & AI cho Sinh viên (`/cong-cu` & `/cong-cu/:slug`)**:
   - Tập hợp `24+` công cụ thiết yếu chia theo 6 nhóm (*AI Content & Copywriting*, *SEO & Nghiên cứu Từ khóa*, *Đo lường & Phân tích Dữ liệu*, *Thiết kế, Hình ảnh & Video AI*, *Social Media & Thư viện Quảng cáo*, *Email Marketing, CRM & Tự động hóa*).
   - Lọc theo mô hình chi phí (`Miễn phí 100%`, `Freemium`, `Mã nguồn mở`, `Dùng thử / Trả phí`) và mức độ tiếp cận (`Cơ bản`, `Trung bình`, `Nâng cao`).
   - Mỗi công cụ đều có đánh giá EEAT minh bạch: **Ưu điểm**, **Giới hạn bản miễn phí**, **Ứng dụng cho sinh viên** và **Student Tip**.
2. **Thư viện 119 Bài viết Thực chiến (`/blog` & `/<slug>`)**:
   - Giữ nguyên 100% slug gốc từ WordPress (`/<slug>`, `/category/<slug>`) để bảo toàn SEO.
   - Tái phân loại toàn bộ 94 bài `Uncategorized` và 25 bài mới (2026) vào 6 chuyên mục Marketing chuẩn.
3. **Phòng Lab 7 Dự án Sinh viên (`/du-an-sinh-vien` & `/<project-slug>`)**:
   - Lưu trữ 7 đồ án thương hiệu & Landing Page của sinh viên Đại học Nguyễn Tất Thành (*Golden*, *Bát Mộc Trà*, *Elora*, *Hoa Lan*, *AQUA REMIND*, *CHOKO*).

---

## 2. Cơ chế đồng bộ tự động từ Git sang Plesk (Giống `store.vneconomics.com`)

Dự án sử dụng quy trình **Git → GitHub Actions → Nhánh `release-production` → Plesk Git Extension** (đã cấu hình sẵn tại `.github/workflows/deploy-plesk.yml`):

1. **Khi bạn push code lên nhánh `main` trên GitHub**:
   - GitHub Actions tự động chạy `npm ci`, kiểm tra `npm run typecheck` và build `npm run build` (sinh `sitemap.xml`, `robots.txt` và bundle tối ưu trong `dist/`).
   - Chép `public/.htaccess` vào `dist/.htaccess` để Plesk Apache xử lý đúng định tuyến SPA (F5 không lỗi 404).
   - Đẩy toàn bộ nội dung thư mục `dist/` sang nhánh **`release-production`** của repository.
   - Gọi `PLESK_GIT_WEBHOOK_URL` (nếu bạn cấu hình trong GitHub Secrets) để kích hoạt Plesk kéo code ngay lập tức.

### Các bước kết nối lần đầu trên Plesk (`marketing2student.com`):
1. Tạo một repository mới trên GitHub (ví dụ `marketing2student`) và đẩy code từ `c:\Projects\Marketing2student` lên nhánh `main`:
   ```powershell
   git remote add origin https://github.com/<username>/marketing2student.git
   git push -u origin main
   ```
   *(Sau lần push đầu tiên, GitHub Actions sẽ tự động tạo ra nhánh `release-production`.)*
2. Vào **Plesk → Websites & Domains → `marketing2student.com` → Git → Add Repository**:
   - **Remote Git Repository**: URL repo GitHub của bạn (chọn SSH hoặc HTTPS).
   - **Branch**: chọn **`release-production`** (nhánh chỉ chứa bản build tĩnh `dist/`).
   - **Deployment mode**: chọn **Automatic deployment**.
   - **Target directory**: chọn **`/httpdocs`** (thư mục gốc của website).
3. Copy **Webhook URL** mà Plesk cấp, vào **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**, tạo secret tên **`PLESK_GIT_WEBHOOK_URL`** và dán URL vừa copy vào.
4. Từ đó về sau, mỗi lần bạn thêm công cụ mới vào `src/data/tools.ts` hoặc thêm bài viết vào `src/data/articles.ts` rồi `git push`, website `marketing2student.com` trên Plesk sẽ **tự động cập nhật trong ~1 phút**.

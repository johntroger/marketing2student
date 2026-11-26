# Thông báo phân công Codex và Antigravity

Áp dụng cho dự án Marketing2Student từ ngày 26/11/2026 và các lượt làm việc tiếp theo. Chủ dự án đã thống nhất: **Codex chỉ phụ trách trọn quy trình bài viết thuộc mục Blog tại https://marketing2student.com/blog. Antigravity tiếp tục viết bài và quản lý nội dung ở mọi mục khác, đồng thời phụ trách code nền tảng, giao diện và chức năng.** Phân công này được lưu để hai công cụ chủ động thực hiện, không yêu cầu chủ dự án nhắc lại trong mỗi lô.

Phân công xác định bên thực hiện công việc đã được giao, không tự tạo nhiệm vụ mới. Yêu cầu mới nhất của chủ dự án được ưu tiên nếu thay đổi phạm vi hoặc phân công. Đây là phân công công việc, không thay thế các giới hạn truy cập của môi trường.

## Phạm vi và trách nhiệm

Ranh giới được xác định theo khu vực xuất bản, không theo từ khóa chủ đề. Bài thuộc thư viện Blog là phạm vi Codex, kể cả trang chi tiết dùng đường dẫn gốc `/<slug>` hoặc trang chuyên mục `/category/<slug>`. Nội dung giới thiệu/review công cụ tại `/cong-cu`, `/ai-tools`, trang giới thiệu và các mục khác thuộc Antigravity. Ví dụ: một bài hướng dẫn AI được đăng trong Blog do Codex viết; nội dung trang công cụ AI thuộc sàn AI tools vẫn do Antigravity viết. Codex có thể đọc nội dung các mục khác để liên kết hoặc tham khảo trong Blog.

| Công việc | Bên phụ trách | Trách nhiệm đến khi hoàn tất |
|---|---|---|
| Bài viết và nội dung ở mọi mục ngoài Blog | Antigravity | Tiếp tục nghiên cứu, viết/biên tập, tích hợp, kiểm tra và tự commit/push các phần này khi được giao. Codex không tự sửa hoặc nhận trách nhiệm các nội dung ngoài Blog. |
| Nghiên cứu, viết mới, biên tập, kiểm tra nguồn bài Blog | Codex | Chuẩn bị và chỉnh nội dung theo phạm vi chủ dự án giao; nêu rõ phần đã/chưa kiểm chứng. |
| Phân loại bài, chuyên mục, dạng bài, thẻ, metadata, liên kết nội bộ | Codex | Tự chỉnh dữ liệu bài và áp dụng danh mục đã thống nhất; giữ nguyên slug bài đã đăng trừ khi chủ dự án yêu cầu đổi. |
| Banner, ảnh minh họa, tối ưu file ảnh, alt text | Codex | Tự tạo hoặc chỉnh ảnh được giao, lưu tài sản trong dự án và kết nối đúng với bài. |
| Tích hợp bài vào website | Codex | Tự sửa dữ liệu/import cần thiết trong src/data/articles.ts, src/data/blog/ và tài sản Blog; không giao bước tích hợp bài cho Antigravity. |
| Kiểm tra, commit, push và xuất bản bài Blog | Codex | Tự kiểm tra phù hợp, commit đúng file, push origin/main, theo dõi GitHub Actions và xác nhận Plesk/website đã cập nhật. Không yêu cầu Antigravity commit, push hoặc đăng hộ. |
| React, bố cục, responsive, thành phần hiển thị và điều hướng | Antigravity | Thực hiện thay đổi code được giao, kiểm tra và tự commit/push phần việc của mình. |
| Kiểu dữ liệu, logic bộ lọc/tìm kiếm/sắp xếp, cơ chế SEO và sinh sitemap | Antigravity | Phụ trách thay đổi cơ chế hoặc mở rộng schema. Codex cung cấp yêu cầu cụ thể khi việc bài viết cần khả năng mới. |
| Build, CI/CD, tích hợp dịch vụ và cấu hình triển khai | Antigravity | Phụ trách sửa lỗi hoặc thay đổi hạ tầng khi được giao. Codex vẫn tự chạy và theo dõi quy trình đang có để xuất bản bài. |

**Kết luận phân quyền:** bài viết thuộc Blog do Codex tự làm đến bước commit/push và xác minh xuất bản; bài viết ở các mục khác vẫn do Antigravity làm. Việc Antigravity pull một commit Blog chỉ là đồng bộ checkout, không phải nhận nhiệm vụ thực hiện, kiểm duyệt hay đăng các bài Blog đó.

## Ranh giới với các file dùng chung

- **src/data/articles.ts, src/data/blog/, public/images/blog/, docs/blog-batches/, docs/blog-assets/:** Codex chủ trì dữ liệu bài, ảnh và hồ sơ biên tập. Antigravity đọc để tích hợp code; tránh sửa nội dung khi Codex đang xử lý lô bài.
- **src/data/categories.ts:** Codex phụ trách tên, mô tả và danh sách chuyên mục/dạng bài của Blog đã được chủ dự án thống nhất. Antigravity phụ trách hàm xử lý và cấu trúc kỹ thuật trong file. Không sửa đồng thời hai phần trong cùng lượt tích hợp.
- **Nội dung ngoài Blog, gồm src/data/tools.ts, src/data/tools/, src/data/aiTools.ts và src/data/ai-tools/:** Antigravity chủ trì cả bài viết/dữ liệu và code tích hợp. Codex không đưa các thay đổi nội dung này vào lô Blog.
- **src/types/index.ts, src/utils/, src/pages/, src/components/, scripts/generate-sitemap.mjs, .github/workflows/:** Antigravity chủ trì cơ chế nền tảng. Codex sử dụng các trường và cơ chế đã có; nếu cần thay đổi chức năng, mô tả rõ file, yêu cầu và tiêu chí nghiệm thu để phối hợp. Khi chủ dự án giao Codex sửa code cụ thể, Codex thực hiện theo phân công mới đó.
- **public/sitemap.xml và public/robots.txt:** Codex được chạy bộ sinh hiện có khi cập nhật bài; bên nào chạy build/sinh file chỉ commit thay đổi phát sinh thuộc tác vụ của mình. Quyền sửa script sinh file khác với việc chạy script.
- **AGENTS.md, GEMINI.md và tài liệu phối hợp:** có thể cập nhật để phản ánh quyết định của chủ dự án; các tài liệu phải trỏ về thông báo này để tránh diễn đạt mâu thuẫn.

Codex không chuyển toàn bộ lô bài cho Antigravity chỉ vì có một vướng mắc kỹ thuật. Nếu có phụ thuộc thật, báo đúng phần bị chặn và tiếp tục phần bài viết độc lập có thể làm. Nếu không có lỗi code cản trở, Codex tiếp tục công việc đã được giao mà không yêu cầu Antigravity làm thêm.

## Quy trình phối hợp

1. Đầu lượt, đọc AGENTS.md, GEMINI.md, thông báo này và docs/BLOG_WORKFLOW.md nếu làm Blog. Kiểm tra git status và commit hiện tại; khi không có thay đổi tracked đang làm dở, đồng bộ bằng git pull --ff-only. Giữ nguyên các file untracked của chủ dự án hoặc công cụ khác.
2. Nêu ngắn gọn phạm vi file/lô đang làm trong cập nhật công việc. Cùng một checkout chỉ có một bên thực hiện bước tích hợp: sửa file dùng chung, build/sinh sitemap, stage, commit và push.
3. Không stage thay đổi của bên kia; không reset, stash, xóa hoặc ghi đè công việc ngoài phạm vi. Không force-push main. Nếu có xung đột thật sự, xác định đúng file và phần giao nhau trước khi tiếp tục tích hợp.
4. Mỗi bên tự kiểm tra và commit/push phần việc được giao theo quy tắc dự án. Codex làm Blog theo từng lô 10 bài; phân biệt lô cấu trúc/metadata với lô biên tập nội dung. Yêu cầu chỉ nghiên cứu/rà soát hoặc chỉ soạn nháp thì thực hiện đúng phạm vi đó; không xuất bản thay đổi nội dung website. Nếu chủ dự án yêu cầu chỉ local hoặc chưa đăng, giữ local theo yêu cầu.
5. Báo kết quả bằng phạm vi đã làm, commit SHA, kiểm tra và trạng thái triển khai. Chỉ nêu việc cần bên còn lại xử lý khi có phụ thuộc cụ thể; không mặc định chủ dự án phải chuyển tin sau mỗi lô.
6. Việc thông báo hoặc pull commit không chứng minh công cụ kia đã đọc tài liệu. Mỗi công cụ có trách nhiệm đọc các file quy tắc trong phiên làm việc của mình. Không tuyên bố đã gửi tin hay đã bàn giao cho Antigravity nếu mới chỉ ghi tài liệu trong Git.

## Thông báo ngắn có thể gửi một lần cho hai bên

> Phân công cố định của Marketing2Student: Codex chỉ phụ trách bài thuộc mục Blog (https://marketing2student.com/blog), gồm nội dung, hình ảnh, phân loại, metadata, tích hợp dữ liệu, kiểm tra và tự commit/push để xuất bản qua Git → Plesk. Bài viết và nội dung ở các mục khác trên website vẫn do Antigravity viết, tích hợp và tự commit/push. Antigravity đồng thời phụ trách code nền tảng, giao diện, chức năng và hạ tầng; không cần đăng hoặc commit hộ bài Blog. Hai bên đọc docs/RESPONSIBILITIES.md cùng AGENTS.md và GEMINI.md trước khi làm; tránh sửa đồng thời file dùng chung. Chỉ phối hợp thêm khi có yêu cầu kỹ thuật cụ thể hoặc chủ dự án thay đổi phân công.

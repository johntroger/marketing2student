import type { Article } from '../../types';

export const searchConsoleCtrArticle: Article = {
  id: 120,
  // New local article: wpId is retained only as the catalog's numeric sort key.
  wpId: 29700,
  slug: 'search-console-hien-thi-tang-luot-nhap-giam',
  title: 'Lượt hiển thị tăng nhưng lượt nhấp giảm: đọc Search Console thế nào?',
  excerpt: 'CTR giảm chưa đủ để kết luận bài viết kém hiệu quả. Thực hành đọc Search Console theo trang, truy vấn và thiết bị trước khi sửa nội dung.',
  category: 'Đo lường & Phân tích Dữ liệu',
  categorySlug: 'do-luong-marketing',
  topic: 'Đo lường GA4 & ROI',
  tags: ['Google Search Console', 'SEO', 'CTR', 'Phân tích dữ liệu'],
  featuredImage: 'https://marketing2student.com/images/blog/search-console-hien-thi-tang-luot-nhap-giam.webp',
  publishedAt: '2026-11-26',
  modifiedAt: '2026-11-26',
  readTime: '6 phút đọc',
  author: 'Marketing2Student',
  authorRole: 'Nội dung thực hành Digital Marketing',
  hasPracticalExercise: true,
  hasAcademicCitation: false,
  content: `
<p>Nhóm của Linh làm một website giới thiệu workshop cho sinh viên. Cuối tháng, báo cáo Google Search Console cho thấy lượt hiển thị tăng mạnh, còn lượt nhấp giảm. Một bạn đề nghị viết lại toàn bộ tiêu đề; bạn khác cho rằng website đang mất thứ hạng.</p>
<p><strong>Hãy kiểm tra lượt nhấp, lượt hiển thị và CTR trên cùng phạm vi dữ liệu, rồi tách theo trang, truy vấn và thiết bị trước khi quyết định sửa gì.</strong> Một tỷ lệ tổng hợp có thể che khuất những nhóm người tìm kiếm rất khác nhau.</p>
<p><em>Tình huống và toàn bộ số liệu dưới đây là giả định phục vụ học tập, không phải dữ liệu của Marketing2Student hay kết quả của một chiến dịch thực tế.</em></p>

<h2>Ba chỉ số trả lời ba câu hỏi khác nhau</h2>
<p>Lượt hiển thị cho biết kết quả của website xuất hiện trong Google Search bao nhiêu lần theo cách tính của báo cáo. Lượt nhấp ghi nhận các lần người dùng nhấp từ kết quả tìm kiếm đến website. CTR là tỷ lệ lượt nhấp trên lượt hiển thị. Đây là các chỉ số được mô tả trong <a href="https://support.google.com/webmasters/answer/7576553?hl=en" target="_blank" rel="noopener noreferrer">hướng dẫn báo cáo Hiệu suất của Google</a>.</p>
<blockquote><p><strong>CTR = Lượt nhấp ÷ Lượt hiển thị × 100%.</strong> CTR không cho biết người truy cập có đăng ký workshop hay mua hàng sau đó hay không.</p></blockquote>
<p>Trong ví dụ của Linh, kỳ trước có 10.000 lượt hiển thị và 500 lượt nhấp, tương ứng CTR 5%. Kỳ này có 20.000 lượt hiển thị và 400 lượt nhấp, tương ứng CTR 2%. Lượt hiển thị tăng 100%, lượt nhấp giảm 20%, còn CTR giảm 3 điểm phần trăm. Mỗi cách diễn đạt mô tả một thay đổi riêng.</p>

<h2>Vì sao phải tách nhóm trước khi sửa tiêu đề?</h2>
<p>Linh lọc một trang cụ thể, giữ nguyên quốc gia và thiết bị, rồi tự gom các truy vấn nhìn thấy trong báo cáo thành hai nhóm để học cách phân tích:</p>
<div style="overflow-x:auto;max-width:100%;contain:inline-size" role="region" aria-label="Bảng số liệu Search Console giả định" tabindex="0">
<table>
<caption>Số liệu giả định của một trang trong hai kỳ có độ dài bằng nhau</caption>
<thead><tr><th scope="col">Nhóm truy vấn</th><th scope="col">Hiển thị trước → sau</th><th scope="col">Nhấp trước → sau</th><th scope="col">CTR trước → sau</th></tr></thead>
<tbody>
<tr><th scope="row">Tìm tên workshop</th><td>5.000 → 3.000</td><td>400 → 240</td><td>8% → 8%</td></tr>
<tr><th scope="row">Tìm kiến thức chung</th><td>5.000 → 17.000</td><td>100 → 160</td><td>2% → khoảng 0,94%</td></tr>
<tr><th scope="row">Tổng trong ví dụ</th><td>10.000 → 20.000</td><td>500 → 400</td><td>5% → 2%</td></tr>
</tbody></table>
</div>
<p>Nhóm tìm tên workshop vẫn có CTR 8%, nhưng số lần hiển thị giảm. Nhóm kiến thức chung mang về thêm 60 lượt nhấp, dù CTR thấp hơn. Câu hỏi tiếp theo của Linh là: nhóm thứ hai đang tìm kiến thức nào, và trang giới thiệu workshop có đáp ứng nhu cầu đó không?</p>
<p><strong>Bảng này chưa chứng minh tiêu đề tốt hay xấu.</strong> Cũng chưa thể kết luận nhu cầu tìm tên workshop đã giảm trên toàn thị trường. Linh cần kiểm tra vị trí, các truy vấn cụ thể và bối cảnh tìm kiếm. Bảng giả định được thiết kế để cộng khớp; trong báo cáo thật, không nên ép tổng các dòng truy vấn phải bằng tổng của biểu đồ.</p>

<h2>Quy trình kiểm tra trước khi thay đổi nội dung</h2>
<ol>
<li><strong>Chọn hai khoảng thời gian có thể so sánh.</strong> Ví dụ, dùng hai kỳ đủ 28 ngày và ghi rõ ngày bắt đầu, ngày kết thúc. Giữ cùng loại tìm kiếm, quốc gia, thiết bị và bộ lọc trang. Tránh so một tuần chưa kết thúc với một tuần đầy đủ.</li>
<li><strong>Xác định trang đóng góp vào biến động.</strong> Trong báo cáo Hiệu suất, xem nhóm Trang trước, rồi lọc URL cần điều tra. Nếu chỉ một trang biến động, bắt đầu với trang đó sẽ giúp thu hẹp phạm vi công việc.</li>
<li><strong>Đọc truy vấn sau khi đã lọc trang.</strong> Tách truy vấn tìm thương hiệu và truy vấn tìm kiến thức; ghi rõ quy tắc tự phân nhóm. Xem riêng máy tính và điện thoại nếu tỷ trọng thiết bị thay đổi. Các chiều Trang, Truy vấn, Quốc gia và Thiết bị đều có trong <a href="https://support.google.com/webmasters/answer/7576553?hl=en" target="_blank" rel="noopener noreferrer">báo cáo Hiệu suất</a>.</li>
<li><strong>Đặt giả thuyết và tìm bằng chứng bổ sung.</strong> Nếu một nhóm truy vấn giảm vị trí, xem nội dung có còn đáp ứng nhu cầu không. Nếu vị trí tương đối ổn định nhưng CTR giảm, kiểm tra cách tiêu đề và phần mô tả hiển thị, cùng các kết quả cạnh tranh. Vị trí trung bình vẫn cần được đọc trong từng nhóm.</li>
<li><strong>Ghi một thay đổi có mục đích.</strong> Chẳng hạn, làm rõ đối tượng và nội dung workshop trong tiêu đề nếu người tìm đang hiểu sai. Lưu ngày sửa và đánh giá lại trên cùng nhóm dữ liệu; không coi mọi biến động sau ngày sửa là tác động do tiêu đề gây ra.</li>
</ol>
<p>Google nêu nhiều hướng điều tra khi lưu lượng giảm, gồm vấn đề kỹ thuật, thay đổi thứ hạng và tính mùa vụ. Với một trang đang hoạt động tốt, Google cũng khuyến nghị tránh thay đổi quá mạnh chỉ vì dao động nhỏ. Xem <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer">hướng dẫn phân tích sụt giảm lưu lượng tìm kiếm</a>.</p>

<h2>Lượt nhấp có chuyển thành kết quả Marketing không?</h2>
<p>Sau khi hiểu thay đổi trong tìm kiếm, Linh kiểm tra hành vi trên trang và sự kiện đăng ký đã được thiết lập trong GA4. Một nhóm có thêm lượt nhấp nhưng không mang lại đăng ký cần được xem khác với nhóm có ít lượt nhấp hơn nhưng đúng đối tượng.</p>
<p>Search Console mô tả hiệu suất trên kết quả tìm kiếm; Google Analytics giúp đọc các tương tác khi người dùng vào website. Lượt nhấp và phiên được tính khác nhau, nên không cần ép hai con số trùng nhau. Khi đối chiếu, chọn cùng khoảng ngày, trang đích, quốc gia và thiết bị, đồng thời lưu ý khác biệt cấu hình đo lường. Google giải thích cách phối hợp hai nguồn trong <a href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console" target="_blank" rel="noopener noreferrer">hướng dẫn dùng Search Console cùng Google Analytics</a>.</p>

<h2>Bài tập thực hành: viết một quyết định có căn cứ</h2>
<p>Dùng bảng giả định ở trên, viết ghi chú tối đa 150 từ cho trưởng nhóm. Ghi chú cần có:</p>
<ul>
<li>Một nhận xét đúng về nhóm tìm tên workshop và một nhận xét đúng về nhóm kiến thức chung.</li>
<li>Hai thông tin còn thiếu trước khi quyết định sửa trang.</li>
<li>Một thay đổi muốn thử, chỉ số sẽ theo dõi và điều kiện để tiếp tục hoặc dừng.</li>
</ul>
<p>Gợi ý tự kiểm tra: nếu ghi chú chỉ nói “CTR giảm nên phải đổi tiêu đề”, hãy quay lại bảng và giải thích vì sao nhóm tìm tên workshop giữ nguyên CTR mà vẫn mất lượt nhấp.</p>
<p>Đọc tiếp: <a href="/ai-kiem-tra-utm-ga4">Cách dùng AI kiểm tra link UTM trong GA4</a> và <a href="/cach-dat-tieu-de-seo-hieu-qua-voi-website-yeu">Cách đặt tiêu đề SEO hiệu quả với website yếu</a>.</p>

<h2>Nguồn tham khảo</h2>
<ul>
<li>Google Search Console Help. <a href="https://support.google.com/webmasters/answer/7576553?hl=en" target="_blank" rel="noopener noreferrer">Performance report (Search results): Overview and basic setup</a>.</li>
<li>Google Search Central. <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer">Debugging drops in Google Search traffic</a>.</li>
<li>Google Search Central. <a href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console" target="_blank" rel="noopener noreferrer">Using Search Console and Google Analytics data for SEO</a>.</li>
</ul>
<p><em>Nguồn được kiểm tra ngày 26/11/2026. Banner là hình minh họa tạo bằng AI, không phải ảnh chụp báo cáo Search Console.</em></p>
`,
};

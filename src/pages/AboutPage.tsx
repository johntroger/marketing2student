import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Bot, 
  ExternalLink, 
  Award, 
  Youtube, 
  Linkedin, 
  Facebook 
} from 'lucide-react';
import { useSEO } from '../utils/useSEO';
import { articles } from '../data/articles';
import { marketingTools } from '../data/tools';

export const AboutPage: React.FC = () => {
  useSEO({
    title: 'Giới Thiệu ThS. Trần Thanh Tùng & Phương Pháp Biên Tập EEAT — Marketing2Student',
    description: 'Tìm hiểu về ThS. Trần Thanh Tùng (MBA, Giảng viên Marketing tại Đại học Nguyễn Tất Thành) và phương pháp đào tạo Digital Marketing kết hợp nghiên cứu khoa học với AI & dữ liệu thực chiến.',
    canonicalUrl: 'https://marketing2student.com/gioi-thieu',
    keywords: ['ThS Trần Thanh Tùng', 'giảng viên marketing NTTU', 'marketing2student', 'vneconomics', 'tiêu chuẩn EEAT marketing'],
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10 space-y-8">
      {/* Lecturer Profile Hero Card */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-4 border-brand-100 shadow-md">
              <img
                src="/logo.jpg"
                alt="ThS. Trần Thanh Tùng - Giảng viên Marketing"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold">
              MBA • Giảng viên Đại học
            </span>
            <div className="flex items-center gap-2.5 mt-3">
              <a
                href="https://www.linkedin.com/in/tranthanhtung37/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white text-ink-800 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@vn-economics"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-600 hover:text-white text-ink-800 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/tungvneconomics"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white text-ink-800 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100 px-3 py-1 rounded-full border border-brand-200">
              GIỚI THIỆU VỀ ADMIN & GIẢNG VIÊN
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900">
              ThS. Trần Thanh Tùng (MBA. Tung Tran)
            </h1>
            <p className="text-sm text-ink-700 font-semibold">
              Giảng viên Marketing tại Trường Đại học Nguyễn Tất Thành (NTTU) • Nhà sáng lập hệ sinh thái học thuật VNEconomics & Marketing2Student
            </p>
            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
              Với tâm huyết đưa những công trình nghiên cứu Marketing quốc tế (Q1/Scopus) và các công nghệ AI tạo sinh, phân tích dữ liệu hiện đại đến gần hơn với sinh viên Việt Nam, <strong>Marketing2Student.com</strong> được xây dựng như một giảng đường mở — nơi lý thuyết gắn liền với bài tập thực hành và các dự án thương hiệu thực tế.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-100">
              <div>
                <div className="text-xl font-black text-brand-600">{marketingTools.length}+</div>
                <div className="text-xs text-ink-500">Công cụ Marketing & AI</div>
              </div>
              <div>
                <div className="text-xl font-black text-ink-900">{articles.length}+</div>
                <div className="text-xs text-ink-500">Chuyên đề & Bài phân tích</div>
              </div>
              <div>
                <div className="text-xl font-black text-emerald-600">EEAT</div>
                <div className="text-xs text-ink-500">Trích dẫn DOI học thuật</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-brand-600">Trụ cột 1</span>
          <h2 className="text-base sm:text-lg font-bold text-ink-900">
            Khoa học Marketing có Bằng chứng (Evidence-Based)
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
            Không truyền đạt những mẹo vặt cảm tính. Mỗi bài viết trên Marketing2Student đều chỉ rõ cơ chế tâm lý học khách hàng, điều kiện áp dụng và trích dẫn trực tiếp các bài báo khoa học quốc tế có mã định danh DOI.
          </p>
        </section>

        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-amber-600">Trụ cột 2</span>
          <h2 className="text-base sm:text-lg font-bold text-ink-900">
            Làm chủ AI Marketing & Đo lường GA4/A-B Testing
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
            Hướng dẫn sinh viên sử dụng AI như một trợ lý phân tích dữ liệu, kiểm tra mã UTM, đọc báo cáo quảng cáo tìm kiếm, xây dựng chân dung khách hàng từ phỏng vấn và biên tập nội dung giữ trọn chất riêng của thương hiệu.
          </p>
        </section>

        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-emerald-600">Trụ cột 3</span>
          <h2 className="text-base sm:text-lg font-bold text-ink-900">
            Sàn Công Cụ Marketing & AI Tuyển Chọn
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
            Thẩm định và phân loại chi tiết các phần mềm Digital Marketing, AI tạo sinh, SEO và Analytics phổ biến nhất — nói rõ bản miễn phí, giới hạn và mẹo ứng dụng ngay vào bài tập thực hành.
          </p>
        </section>
      </div>

      {/* Connected Ecosystem */}
      <section className="bg-gradient-to-r from-[#1c244b] to-[#046bd2] text-white rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-100">
            <Award className="w-4 h-4" />
            <span>HỆ SINH THÁI HỌC TẬP TOÀN DIỆN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold">
            Khám phá toàn bộ tài nguyên học tập cùng ThS. Trần Thanh Tùng
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Bên cạnh thư viện Marketing2Student, bạn có thể luyện thi trắc nghiệm trực tuyến trên VNEconomics.com hoặc tra cứu hơn 100+ công cụ phần mềm mã nguồn mở tại Vneconomics Store.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            to="/blog"
            className="px-5 py-2.5 rounded-xl bg-white text-ink-900 font-bold text-xs uppercase tracking-wider hover:bg-brand-50 transition-colors"
          >
            Đọc Bài Viết
          </Link>
          <a
            href="https://vneconomics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand-900/60 border border-white/25 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-brand-900/90 transition-colors"
          >
            <span>VNEconomics.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};

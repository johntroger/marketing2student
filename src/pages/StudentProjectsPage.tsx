import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles, CheckCircle2, Layers, ExternalLink, BookOpen } from 'lucide-react';
import { studentProjects } from '../data/studentProjects';
import { ProjectCard } from '../components/ProjectCard';
import { useSEO } from '../utils/useSEO';

export const StudentProjectsPage: React.FC = () => {
  useSEO({
    title: 'Phòng Lab Dự Án Sinh Viên Thực Chiến — Marketing2Student',
    description: `Trưng bày và phân tích ${studentProjects.length} dự án thương hiệu, Landing Page thương mại điện tử và chiến dịch Digital Marketing do sinh viên Đại học Nguyễn Tất Thành thực hiện dưới sự hướng dẫn của ThS. Trần Thanh Tùng.`,
    canonicalUrl: 'https://marketing2student.com/du-an-sinh-vien',
    keywords: ['dự án sinh viên marketing', 'đồ án digital marketing NTTU', 'landing page sinh viên', 'CHOKO', 'AQUA REMIND', 'Bát Mộc Trà', 'Elora', 'Golden mỹ phẩm thuần chay'],
  });

  return (
    <div className="bg-surface-100 min-h-screen pb-16 text-ink-900">
      {/* Top Hero Banner */}
      <div className="bg-white border-b border-slate-200/90 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-ink-500 mb-3">
            <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
            <span>›</span>
            <span className="text-ink-900 font-bold">Phòng Lab Dự Án Sinh Viên</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-ink-900 text-xs font-bold mb-2">
                <GraduationCap className="w-4 h-4 text-brand-600" />
                <span>STUDENT DIGITAL MARKETING LAB • NTTU</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight">
                Phòng Lab Đồ Án & Landing Page Thực Chiến Của Sinh Viên
              </h1>
              <p className="text-xs sm:text-sm text-ink-600 mt-2 leading-relaxed">
                Nơi lưu trữ và trưng bày các dự án xây dựng thương hiệu, thiết kế Landing Page chuyển đổi, tích hợp CRM và đo lường quảng cáo số do các nhóm sinh viên thực hiện trong học phần Digital Marketing (chỉ phục vụ mục đích học tập & nghiên cứu thực nghiệm).
              </p>
            </div>

            <div className="flex items-center gap-4 bg-brand-50/80 border border-brand-200 p-4 rounded-2xl shrink-0 self-start lg:self-auto">
              <div className="text-center px-3">
                <div className="text-2xl font-black text-brand-600">{studentProjects.length}</div>
                <div className="text-[10px] font-bold uppercase text-ink-600">Dự án Thương hiệu</div>
              </div>
              <div className="w-px h-10 bg-brand-200" />
              <div className="text-center px-3">
                <div className="text-2xl font-black text-ink-900">100%</div>
                <div className="text-[10px] font-bold uppercase text-ink-600">Thực hành Thực tế</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid of Student Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Educational Disclaimer & Methodology Box */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Phương Pháp Đào Tạo Project-Based Learning (PBL)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-ink-900">
            Sinh viên học được gì qua mỗi dự án Landing Page trên Marketing2Student?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-ink-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-ink-900 flex items-center gap-1.5 text-sm">
                <Layers className="w-4 h-4 text-brand-600" />
                <span>1. Định vị Thương hiệu & Copywriting</span>
              </div>
              <p className="leading-relaxed">
                Tự xây dựng câu chuyện thương hiệu (Brand Story), xác định chân dung khách hàng mục tiêu và viết thông điệp chạm đúng nỗi đau (Pain Points).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-ink-900 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2. Thiết kế Phễu Chuyển đổi & CRM</span>
              </div>
              <p className="leading-relaxed">
                Thiết kế giao diện Landing Page chuẩn AIDA, nhúng biểu mẫu thu thập khách hàng tiềm năng (HubSpot CRM / Lead Form) và kịch bản ưu đãi.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-ink-900 flex items-center gap-1.5 text-sm">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>3. Đo lường GA4, GTM & Google Ads</span>
              </div>
              <p className="leading-relaxed">
                Gắn thẻ theo dõi sự kiện trên Google Analytics 4, cấu hình link UTM và đánh giá hiệu quả tương tác thực tế của người truy cập.
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-500">
            <span>* Lưu ý: Toàn bộ sản phẩm, mức giá và biểu mẫu đặt hàng trong các dự án sinh viên chỉ phục vụ mục đích học tập, không phát sinh giao dịch thương mại.</span>
            <a
              href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 font-bold hover:underline flex items-center gap-1"
            >
              <span>Làm bài kiểm tra Digital Marketing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

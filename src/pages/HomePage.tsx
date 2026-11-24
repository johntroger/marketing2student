import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { ProjectCard } from '../components/ProjectCard';
import { ToolCard } from '../components/ToolCard';
import { articles } from '../data/articles';
import { categories } from '../data/categories';
import { studentProjects } from '../data/studentProjects';
import { marketingTools, toolCategories } from '../data/tools';
import { useSEO } from '../utils/useSEO';
import { 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Bot, 
  BarChart3,
  FileSearch,
  Video,
  TrendingUp,
  Layers,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Youtube,
  ExternalLink,
  Award,
  CheckSquare,
  Wrench,
  Search,
  Palette,
  Megaphone,
  Mail
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // Featured subsets
  const featuredTools = marketingTools.filter((t) => t.featured).slice(0, 8);
  const aiMarketingArticles = articles.filter((a) => a.categorySlug === 'ai-marketing').slice(0, 6);
  const practicalLabArticles = articles.filter((a) => a.hasPracticalExercise).slice(0, 6);
  const [discoverLimit, setDiscoverLimit] = useState(18);
  const discoverArticles = articles.slice(0, discoverLimit);

  // SEO & Schema for HomePage
  useSEO({
    title: 'Marketing2Student — Thư Viện Kiến Thức Marketing Thực Chiến & Phòng Lab Sinh Viên',
    description: 'Thư viện hơn 119 bài phân tích Digital Marketing, AI Marketing, Đo lường GA4/A-B Testing chuẩn học thuật EEAT và Phòng Lab Đồ án Sinh viên do ThS. Trần Thanh Tùng biên tập.',
    canonicalUrl: 'https://marketing2student.com/',
    ogImage: 'https://marketing2student.com/og-cover.png',
    keywords: ['marketing2student', 'ThS Trần Thanh Tùng', 'digital marketing', 'AI marketing', 'đo lường marketing', 'dự án sinh viên NTTU', 'vneconomics'],
    jsonLdSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Marketing2Student',
        'url': 'https://marketing2student.com/',
        'description': 'Thư viện kiến thức Marketing thực chiến và Phòng Lab dự án sinh viên',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://marketing2student.com/blog?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'ThS. Trần Thanh Tùng',
        'jobTitle': 'Giảng viên Marketing',
        'affiliation': {
          '@type': 'CollegeOrUniversity',
          'name': 'Trường Đại học Nguyễn Tất Thành (NTTU)'
        },
        'url': 'https://marketing2student.com/gioi-thieu',
        'sameAs': [
          'https://www.linkedin.com/in/tranthanhtung37/',
          'https://www.facebook.com/tungvneconomics',
          'https://www.youtube.com/@vn-economics',
          'https://vneconomics.com/'
        ]
      }
    ]
  });

  const quickShortcuts = [
    { label: 'Sàn Công Cụ AI', icon: <Wrench className="w-5 h-5 text-brand-600" />, link: '/cong-cu', external: false },
    { label: 'Tools Miễn Phí', icon: <Sparkles className="w-5 h-5 text-emerald-600" />, link: '/cong-cu?pricing=Mi%E1%BB%85n+ph%C3%AD+100%25', external: false },
    { label: 'AI Marketing 2026', icon: <Bot className="w-5 h-5 text-blue-600" />, link: '/category/ai-marketing', external: false },
    { label: 'Đo Lường & GA4', icon: <BarChart3 className="w-5 h-5 text-teal-700" />, link: '/category/do-luong-marketing', external: false },
    { label: 'Phòng Lab Sinh Viên', icon: <GraduationCap className="w-5 h-5 text-indigo-600" />, link: '/du-an-sinh-vien', external: false },
    { label: 'Khóa Học YouTube', icon: <Youtube className="w-5 h-5 text-rose-600" />, link: 'https://www.youtube.com/watch?v=-FFQdJ3918M&list=PLKmW2URrf3HjXe1Xv5nUlyBtuPmyE8lSt', external: true },
    { label: 'Thi Thử Marketing', icon: <CheckSquare className="w-5 h-5 text-emerald-600" />, link: 'https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/', external: true },
    { label: 'Về Giảng Viên', icon: <Award className="w-5 h-5 text-amber-500" />, link: '/gioi-thieu', external: false },
  ];

  const categoryIconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-4 h-4" />,
    BarChart3: <BarChart3 className="w-4 h-4" />,
    FileSearch: <FileSearch className="w-4 h-4" />,
    Video: <Video className="w-4 h-4" />,
    TrendingUp: <TrendingUp className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    Search: <Search className="w-4 h-4" />,
    Palette: <Palette className="w-4 h-4" />,
    Megaphone: <Megaphone className="w-4 h-4" />,
    Mail: <Mail className="w-4 h-4" />,
  };

  return (
    <div className="bg-surface-100 min-h-screen pb-16 text-ink-900">
      {/* 1. Hero & Lecturer Bio Section */}
      <section className="bg-white pb-6 shadow-xs border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Big Main Banner (2 cols) - Deep Navy (#1C244B) to Royal Blue (#046BD2) */}
            <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-gradient-to-br from-[#1c244b] via-[#172859] to-[#046bd2] text-white p-7 sm:p-10 flex flex-col justify-between min-h-[265px] border border-brand-900 shadow-soft">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-100 text-xs font-semibold backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Sàn Công Cụ Marketing & Thư Viện Thực Chiến</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white">
                  Chọn Đúng Công Cụ. <br />
                  <span className="text-brand-100">Làm Chủ AI & Marketing Thực Chiến.</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                  Tổng hợp & thẩm định {marketingTools.length}+ công cụ Digital Marketing, AI cho Marketing (nói rõ bản miễn phí & giới hạn) cùng {articles.length} bài phân tích chuẩn EEAT và {studentProjects.length} dự án sinh viên.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/cong-cu"
                  className="px-5 py-2.5 rounded-lg bg-white text-ink-900 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-brand-50 transition-colors flex items-center gap-1.5"
                >
                  <Wrench className="w-4 h-4 text-brand-600" />
                  <span>Khám Phá Sàn Công Cụ ({marketingTools.length}+)</span>
                </Link>
                <Link
                  to="/blog"
                  className="px-4 py-2.5 rounded-lg bg-brand-900/60 text-white text-xs font-semibold border border-white/25 hover:bg-brand-900/80 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-brand-100" />
                  <span>Thư Viện {articles.length} Bài Viết</span>
                </Link>
              </div>
            </div>

            {/* 2 Mini Side Cards (1 col): Lecturer Profile & External Quiz/Course Portal */}
            <div className="grid grid-rows-2 gap-3">
              {/* Card 1: Giới thiệu về Admin - ThS. Trần Thanh Tùng */}
              <div className="bg-brand-50/70 border border-brand-200 rounded-xl p-5 text-ink-900 flex flex-col justify-between shadow-2xs hover:border-brand-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <img
                    src="/logo.jpg"
                    alt="ThS. Trần Thanh Tùng"
                    className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-xs shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-brand-600 text-white px-2 py-0.5 rounded">
                      GIẢNG VIÊN HƯỚNG DẪN
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-ink-900 mt-1.5">
                      ThS. Trần Thanh Tùng (MBA)
                    </h3>
                    <p className="text-xs text-ink-700 mt-0.5 leading-snug">
                      Giảng viên Marketing tại Đại học Nguyễn Tất Thành (NTTU) • Sáng lập hệ sinh thái VNEconomics.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-brand-200/60 mt-2">
                  <Link to="/gioi-thieu" className="text-xs font-bold flex items-center gap-1 text-brand-600 hover:underline">
                    <span>Hồ sơ giảng viên & phương pháp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/tranthanhtung37/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-ink-700 hover:text-brand-600 flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card 2: Kiểm tra kiến thức & Nghiên cứu VNEconomics */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 text-ink-900 flex flex-col justify-between shadow-2xs hover:border-brand-300 transition-colors">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                    TRẮC NGHIỆM & NGHIÊN CỨU
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-ink-900 mt-2">
                    Đánh Giá Năng Lực Digital Marketing
                  </h3>
                  <p className="text-xs text-ink-600 mt-0.5">
                    Hệ thống bài thi trắc nghiệm Digital Marketing, E-Marcomme và chuyên khảo trên VNEconomics.com.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold flex items-center gap-1 text-brand-600 hover:underline"
                  >
                    <span>Làm bài kiểm tra ngay</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://vneconomics.com/kinh-te-ky-thuat-so/digital-marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1 text-ink-700 hover:text-brand-600"
                  >
                    <span>Đọc bài nghiên cứu</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick 8-Shortcuts Row */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 pt-6 text-center">
            {quickShortcuts.map((sc, idx) =>
              sc.external ? (
                <a
                  key={idx}
                  href={sc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer p-2 rounded-lg hover:bg-brand-50/50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100/90 border border-slate-200 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-300 transition-all shadow-2xs">
                    {sc.icon}
                  </div>
                  <span className="text-xs font-medium text-ink-700 mt-2 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors">
                    {sc.label}
                  </span>
                </a>
              ) : (
                <Link
                  key={idx}
                  to={sc.link}
                  className="flex flex-col items-center group cursor-pointer p-2 rounded-lg hover:bg-brand-50/50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100/90 border border-slate-200 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-300 transition-all shadow-2xs">
                    {sc.icon}
                  </div>
                  <span className="text-xs font-medium text-ink-700 mt-2 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors">
                    {sc.label}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
        {/* 2. "SÀN CÔNG CỤ MARKETING & AI CHO SINH VIÊN" Section */}
        <section className="bg-white rounded-xl shadow-soft border border-slate-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-5 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-white bg-brand-600 px-2.5 py-0.5 rounded">
                  SÀN CÔNG CỤ MARKETING
                </span>
                <span className="text-xs text-ink-500 font-medium">
                  • Tuyển chọn & thẩm định riêng cho Sinh viên Marketing
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-ink-900 mt-1">
                Công Cụ Digital Marketing & AI Khuyên Dùng ({marketingTools.length}+ Tools)
              </h2>
            </div>

            <Link
              to="/cong-cu"
              className="text-xs text-brand-600 font-bold hover:underline flex items-center self-start sm:self-auto"
            >
              <span>Xem Toàn Bộ Sàn Công Cụ</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tool Categories Quick Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-5">
            {toolCategories.map((tc) => (
              <Link
                key={tc.id}
                to={`/cong-cu?cat=${tc.slug}`}
                className="p-2.5 rounded-lg border border-slate-200/80 hover:border-brand-600 bg-slate-50/60 hover:bg-brand-50/40 transition-all flex items-center gap-2 group"
              >
                <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-brand-600 shrink-0">
                  {categoryIconMap[tc.iconName] || <Wrench className="w-3.5 h-3.5" />}
                </div>
                <span className="text-[11px] font-bold text-ink-800 group-hover:text-brand-600 line-clamp-1">
                  {tc.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* 3. "CHUYÊN MỤC KIẾN THỨC" Category Grid (6 Categories) */}
        <section className="bg-white rounded-xl shadow-soft border border-slate-200 p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900">
              CHUYÊN MỤC KIẾN THỨC MARKETING
            </h2>
            <Link to="/blog" className="text-xs text-brand-600 font-bold hover:underline flex items-center">
              <span>Xem Toàn Bộ {articles.length} Bài Viết</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((c) => {
              const count = articles.filter((a) => a.categorySlug === c.slug).length;
              return (
                <Link
                  key={c.id}
                  to={`/category/${c.slug}`}
                  className="p-3.5 rounded-xl border border-slate-200/80 hover:border-brand-600 hover:shadow-card transition-all flex flex-col justify-between group bg-slate-50/40 hover:bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                        {categoryIconMap[c.iconName] || <Layers className="w-4 h-4" />}
                      </div>
                      <span className="text-[11px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                        {count} bài
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                      {c.name}
                    </h3>
                    <p className="text-[11px] text-ink-500 line-clamp-2 mt-1 leading-snug">
                      {c.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-emerald-700 mt-3 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Chuẩn học thuật EEAT</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. "PHÒNG LAB DỰ ÁN CỦA SINH VIÊN" Section (All 7 Student Projects) */}
        <section className="bg-white rounded-xl shadow-soft border border-slate-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-5 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-white bg-brand-600 px-2.5 py-0.5 rounded">
                  STUDENT MARKETING LAB
                </span>
                <span className="text-xs text-ink-500 font-medium">
                  • Đồ án thực hành của sinh viên Đại học Nguyễn Tất Thành
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-ink-900 mt-1">
                Dự Án Thương Hiệu & Landing Page Thực Chiến Của Sinh Viên ({studentProjects.length} Dự Án)
              </h2>
            </div>

            <Link
              to="/du-an-sinh-vien"
              className="text-xs text-brand-600 font-bold hover:underline flex items-center self-start sm:self-auto"
            >
              <span>Xem Tất Cả {studentProjects.length} Dự Án Sinh Viên</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studentProjects.slice(0, 4).map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          {/* Secondary row for remaining 3 projects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {studentProjects.slice(4, 7).map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        {/* 4. "TIÊU ĐIỂM AI MARKETING & ĐO LƯỜNG 2026" Section */}
        <section className="bg-white rounded-xl shadow-soft border border-slate-200 p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded">
                MỚI NHẤT 2026
              </span>
              <h2 className="text-sm sm:text-base font-extrabold text-ink-900 tracking-tight">
                Ứng dụng AI Marketing & Phân tích Quảng cáo có Bài tập Thực hành
              </h2>
            </div>

            <Link to="/category/ai-marketing" className="text-xs text-brand-600 font-bold hover:underline flex items-center">
              <span>Xem Chuyên Mục AI Marketing &gt;</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {aiMarketingArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* 5. "BÀI VIẾT CÓ BÀI TẬP THỰC HÀNH & TRÍCH DẪN KHOA HỌC" */}
        <section className="bg-white rounded-xl shadow-soft border border-slate-200 p-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900 flex items-center gap-1.5">
                <span className="bg-ink-900 text-white px-2 py-0.5 rounded text-[10px] font-bold">EEAT LAB</span>
                <span>TÌNH HUỐNG & TRÍCH DẪN HỌC THUẬT</span>
              </span>
              <div className="hidden md:flex items-center gap-4 text-xs text-ink-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-brand-600" /> Có Bài Tập Thực Hành
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Trích Dẫn Nghiên Cứu DOI
                </span>
              </div>
            </div>

            <Link to="/blog?exercise=1" className="text-xs text-brand-600 font-bold hover:underline">
              Xem Tất Cả &gt;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {practicalLabArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* 6. "KHO KIẾN THỨC MARKETING TOÀN DIỆN" Feed (All 119 Articles) */}
        <section className="space-y-4">
          <div className="sticky top-14 z-10 bg-surface-100 pt-2 pb-2">
            <div className="bg-white border-b-2 border-brand-600 py-2.5 text-center shadow-xs rounded-t-lg">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase text-brand-700 tracking-wider">
                KHO KIẾN THỨC HAY VỀ MARKETING ({articles.length} BÀI VIẾT)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {discoverArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More & View All Buttons */}
          <div className="text-center pt-6 flex flex-wrap items-center justify-center gap-3">
            {discoverLimit < articles.length && (
              <button
                onClick={() => setDiscoverLimit((prev) => Math.min(prev + 18, articles.length))}
                className="px-8 py-2.5 bg-white border border-slate-300 text-ink-900 text-xs font-bold rounded-lg shadow-2xs hover:bg-slate-50 hover:border-brand-500 transition-colors uppercase tracking-wider"
              >
                Xem Thêm Bài Viết ({articles.length - discoverLimit} bài còn lại)
              </button>
            )}
            <Link
              to="/blog"
              className="px-8 py-2.5 bg-brand-600 text-white text-xs font-bold rounded-lg shadow-xs hover:bg-brand-700 transition-colors uppercase tracking-wider"
            >
              Mở Bộ Lọc Toàn Bộ Thư Viện
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

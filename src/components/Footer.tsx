import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, ExternalLink, Youtube, Linkedin, Facebook, Wrench } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      {/* Signature Pastel Sky-Blue Top Banner (#D1EFFF) matching Marketing2Student brand */}
      <div className="bg-brand-100 border-b border-brand-200/80 py-6">
        <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-ink-900 text-white px-2.5 py-0.5 rounded">
              HỆ SINH THÁI HỌC THUẬT & THỰC CHIẾN
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-ink-900 mt-1">
              Kết nối Kiến thức Digital Marketing, Kiểm tra Năng lực & Sàn Công cụ Số
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://vneconomics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>VNEconomics.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://store.vneconomics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Sàn Công Cụ VibeLab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-brand-200 flex items-center justify-center p-0.5 shadow-sm overflow-hidden">
                <img src="/logo.jpg" alt="Marketing2Student - ThS. Trần Thanh Tùng" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-ink-900 block leading-none">
                  Marketing2Student
                </span>
                <span className="text-[11px] text-brand-600 font-semibold">
                  ThS. Trần Thanh Tùng • Giảng viên Đại học Nguyễn Tất Thành
                </span>
              </div>
            </Link>
            <p className="text-sm text-ink-600 max-w-md leading-relaxed">
              Sàn giới thiệu công cụ Digital Marketing, AI Marketing và thư viện kiến thức thực chiến chuẩn EEAT (GA4, A/B Testing, SEO) dành cho sinh viên Việt Nam.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/tungvneconomics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white text-ink-700 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tranthanhtung37/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-brand-600 hover:text-white text-ink-700 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@vn-economics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-rose-600 hover:text-white text-ink-700 flex items-center justify-center transition-colors"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <span className="text-slate-300">•</span>
              <Link
                to="/gioi-thieu"
                className="inline-flex items-center gap-1 text-xs font-semibold text-ink-700 hover:text-brand-600 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Tiêu chuẩn biên tập EEAT</span>
              </Link>
            </div>
          </div>

          {/* Chuyên mục */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-4">Chuyên mục cốt lõi</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/category/ai-marketing" className="text-ink-600 hover:text-brand-600 transition-colors">AI Marketing & Tự động hóa</Link>
              </li>
              <li>
                <Link to="/category/do-luong-marketing" className="text-ink-600 hover:text-brand-600 transition-colors">Đo lường & Phân tích Dữ liệu</Link>
              </li>
              <li>
                <Link to="/category/seo-content-marketing" className="text-ink-600 hover:text-brand-600 transition-colors">SEO & Content Marketing</Link>
              </li>
              <li>
                <Link to="/category/social-video-marketing" className="text-ink-600 hover:text-brand-600 transition-colors">Social Media & Video</Link>
              </li>
              <li>
                <Link to="/cong-cu" className="text-brand-600 font-semibold hover:underline flex items-center gap-1">
                  <Wrench className="w-4 h-4" />
                  <span>Sàn Công Cụ Marketing & AI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Học liệu & Kiểm tra */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-4">Học liệu & Trắc nghiệm</h3>
            <ul className="space-y-2.5 text-xs text-ink-600 leading-normal">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=-FFQdJ3918M&list=PLKmW2URrf3HjXe1Xv5nUlyBtuPmyE8lSt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors flex items-center gap-1"
                >
                  <span>• Khóa học Digital Marketing (YouTube)</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors flex items-center gap-1"
                >
                  <span>• Kiểm tra kiến thức Digital Marketing</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://vneconomics.com/kiem-tra-kien-thuc-e-marcomme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors flex items-center gap-1"
                >
                  <span>• Kiểm tra kiến thức E-Marcomme</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://vneconomics.com/kinh-te-ky-thuat-so/digital-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors flex items-center gap-1"
                >
                  <span>• Bài nghiên cứu về Digital Marketing</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} Marketing2Student.com — Biên tập bởi ThS. Trần Thanh Tùng (Hệ sinh thái VNEconomics).</p>
          <p className="flex items-center gap-1">
            Nền tảng thế hệ mới xây dựng với <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> trên kiến trúc VneconomicsStore (Vite + React + Tailwind CSS).
          </p>
        </div>
      </div>
    </footer>
  );
};

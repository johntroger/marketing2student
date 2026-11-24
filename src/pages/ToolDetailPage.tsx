import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowLeft,
  Wrench,
  Tag,
  GraduationCap,
} from 'lucide-react';
import { marketingTools } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { ReviewSection } from '../components/ReviewSection';
import { getArticleCover } from '../utils/imageGenerator';
import { useSEO } from '../utils/useSEO';

export const ToolDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const tool = useMemo(() => {
    return marketingTools.find((t) => t.slug === slug);
  }, [slug]);

  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return marketingTools
      .filter((t) => t.categorySlug === tool.categorySlug && t.id !== tool.id)
      .slice(0, 4);
  }, [tool]);

  const coverUrl = tool
    ? getArticleCover({
        title: tool.name,
        category: tool.category,
        topic: tool.tagline,
        readTime: tool.pricing,
      })
    : '';

  useSEO({
    title: tool ? `${tool.name} — Đánh Giá & Hướng Dẫn Cho Sinh Viên | Marketing2Student` : 'Chi tiết công cụ Marketing',
    description: tool?.excerpt || 'Thông số, chi phí và ứng dụng thực tế của công cụ Marketing.',
    canonicalUrl: tool ? `https://marketing2student.com/cong-cu/${tool.slug}` : 'https://marketing2student.com/cong-cu',
    ogImage: coverUrl,
    keywords: tool ? [tool.name, tool.category, ...tool.tags, 'công cụ marketing', 'marketing2student'] : [],
    jsonLdSchemas: tool
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            description: tool.excerpt,
            applicationCategory: tool.category,
            url: tool.officialUrl,
            offers: {
              '@type': 'Offer',
              price: tool.pricing === 'Miễn phí 100%' || tool.pricing === 'Mã nguồn mở' ? '0' : '0',
              priceCurrency: 'VND',
            },
          },
        ]
      : [],
  });

  if (!tool) {
    return (
      <div className="bg-surface-100 min-h-[70vh] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-soft border border-slate-200">
            <Wrench className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-ink-900">Không tìm thấy công cụ</h2>
            <Link
              to="/cong-cu"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-bold uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Về Sàn Công Cụ Marketing</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-100 min-h-screen py-6 text-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-ink-500 flex-wrap">
          <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
          <span>›</span>
          <Link to="/cong-cu" className="text-brand-600 hover:underline">Sàn Công Cụ Marketing</Link>
          <span>›</span>
          <Link to={`/cong-cu?cat=${tool.categorySlug}`} className="text-brand-600 hover:underline">
            {tool.category}
          </Link>
          <span>›</span>
          <span className="text-ink-900 font-bold">{tool.name}</span>
        </nav>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Cover */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img src={coverUrl} alt={tool.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 text-xs space-y-1.5">
                <div className="font-bold text-ink-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-brand-600" />
                  <span>Lời khuyên dành cho Sinh viên (Student Tip):</span>
                </div>
                <p className="text-ink-700 leading-relaxed">{tool.studentTip}</p>
              </div>
            </div>

            {/* Right Specs & CTA */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                  {tool.category}
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Đã thẩm định EEAT ({tool.verifiedAt})</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900">{tool.name}</h1>
              <p className="text-sm font-semibold text-brand-700">{tool.tagline}</p>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">{tool.excerpt}</p>

              {/* Specs Grid */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 space-y-2 text-xs">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-ink-500 font-medium">Mô hình chi phí:</span>
                  <span className="col-span-8 font-bold text-ink-900">{tool.pricing} — {tool.pricingDetail}</span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-ink-500 font-medium">Mức độ tiếp cận:</span>
                  <span className="col-span-8 font-semibold text-ink-800">{tool.level}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/cong-cu?q=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 hover:bg-brand-50 text-ink-700"
                  >
                    <Tag className="w-3 h-3 text-brand-600" />
                    <span>{tag}</span>
                  </Link>
                ))}
              </div>

              {/* Action CTA */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors"
                >
                  <span>Truy Cập Trang Chính Thức</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/cong-cu"
                  className="px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-ink-800 font-semibold text-xs transition-colors"
                >
                  So sánh công cụ khác
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases, Pros & Limitations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Sinh viên dùng vào việc gì?</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-ink-700 leading-relaxed">
              {tool.useCases.map((u, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Ưu điểm nổi bật</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-ink-700 leading-relaxed">
              {tool.pros.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50/60 rounded-2xl border border-amber-200 p-6 shadow-soft space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Giới hạn cần biết trước</span>
            </h2>
            <p className="text-xs text-amber-900/90 leading-relaxed">{tool.limitations}</p>
          </div>
        </div>

        {/* Community Discussion */}
        <ReviewSection articleSlug={`tool_${tool.slug}`} articleTitle={`Công cụ: ${tool.name}`} />

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-ink-900">
                CÔNG CỤ CÙNG NHÓM ({tool.category})
              </h3>
              <Link to={`/cong-cu?cat=${tool.categorySlug}`} className="text-xs text-brand-600 font-bold hover:underline">
                Xem tất cả ›
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedTools.map((rel) => (
                <ToolCard key={rel.id} tool={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

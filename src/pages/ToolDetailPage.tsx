import React, { useMemo, useState } from 'react';
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
  HelpCircle,
  BookOpen,
  ListChecks,
  Copy,
  Check,
  GitCompare,
  Globe,
  Monitor,
  Users,
  Gift,
} from 'lucide-react';
import { marketingTools } from '../data/tools';
import { articles } from '../data/articles';
import { ToolCard } from '../components/ToolCard';
import { ArticleCard } from '../components/ArticleCard';
import { ReviewSection } from '../components/ReviewSection';
import { getArticleCover } from '../utils/imageGenerator';
import { useSEO } from '../utils/useSEO';
import { normalizeVietnamese } from '../utils/search';

export const ToolDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const tool = useMemo(() => {
    return marketingTools.find((t) => t.slug === slug);
  }, [slug]);

  const relatedTools = useMemo(() => {
    if (!tool) return [];
    return marketingTools
      .filter((t) => t.categorySlug === tool.categorySlug && t.id !== tool.id)
      .slice(0, 4);
  }, [tool]);

  // Tự động khớp bài viết thực hành liên quan từ thư viện 119 bài (SEO Internal Linking Cluster)
  const relatedAcademicArticles = useMemo(() => {
    if (!tool) return [];
    if (tool.relatedArticleSlugs && tool.relatedArticleSlugs.length > 0) {
      const explicit = articles.filter((a) => tool.relatedArticleSlugs?.includes(a.slug));
      if (explicit.length >= 4) return explicit.slice(0, 4);
    }

    const toolCatToArticleCat: Record<string, string> = {
      'vietnam-martech': 'quang-cao-b2b-tang-truong',
      'ai-content-copywriting': 'ai-marketing',
      'seo-keyword-research': 'seo-content-marketing',
      'analytics-tracking': 'do-luong-marketing',
      'design-video-ai': 'social-video-marketing',
      'social-ads-research': 'quang-cao-b2b-tang-truong',
      'crm-email-automation': 'ai-marketing',
      'ecommerce-landing-page': 'quang-cao-b2b-tang-truong',
      'market-research-academic': 'thuong-hieu-hanh-vi-khach-hang',
      'performance-ads-affiliate': 'quang-cao-b2b-tang-truong',
    };

    const targetArticleCat = toolCatToArticleCat[tool.categorySlug] || 'ai-marketing';
    const normTokens = tool.tags.map((t) => normalizeVietnamese(t));

    const scored = articles.map((art) => {
      let score = 0;
      const hay = normalizeVietnamese(`${art.title} ${art.excerpt} ${art.topic} ${art.tags.join(' ')}`);
      for (const tk of normTokens) {
        if (tk.length >= 2 && hay.includes(tk)) score += 3;
      }
      if (art.categorySlug === targetArticleCat) score += 2;
      if (art.hasPracticalExercise) score += 1;
      return { art, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4).map((s) => s.art);
  }, [tool]);

  // Auto-fallback cho dữ liệu AEO/GEO khi nhập hàng loạt công cụ mới
  const aeoDirectAnswer = useMemo(() => {
    if (!tool) return '';
    return (
      tool.whatIsIt ||
      `${tool.name} là ${tool.tagline.toLowerCase()}. ${tool.excerpt} Công cụ thuộc nhóm ${tool.category}, hoạt động theo mô hình ${tool.pricing} (${tool.pricingDetail}) với độ khó ở mức ${tool.level}.`
    );
  }, [tool]);

  const howToSteps = useMemo(() => {
    if (!tool) return [];
    if (tool.quickSteps && tool.quickSteps.length > 0) return tool.quickSteps;
    return [
      `Truy cập trang chủ chính thức của ${tool.name} tại ${tool.officialUrl} và khởi tạo tài khoản (${tool.pricing}).`,
      `Thiết lập dự án đầu tiên theo mục tiêu nhóm: ${tool.useCases[0] || tool.tagline}.`,
      `Áp dụng lời khuyên thực chiến: ${tool.studentTip}`,
      `Trích xuất báo cáo hoặc kết quả đầu ra để đối chiếu KPI và trình bày trong đồ án Marketing.`,
    ];
  }, [tool]);

  const faqList = useMemo(() => {
    if (!tool) return [];
    const baseFaqs = tool.faqs ? [...tool.faqs] : [];
    const defaultFaqs = [
      {
        q: `${tool.name} là gì và sinh viên Marketing dùng vào việc gì?`,
        a: `${aeoDirectAnswer} Trong học tập và dự án thực tế, sinh viên thường dùng ${tool.name} để: ${tool.useCases.join(' ')}`,
      },
      {
        q: `${tool.name} có miễn phí không? Chi phí và giới hạn bản miễn phí như thế nào?`,
        a: `${tool.name} áp dụng mô hình ${tool.pricing} (${tool.pricingDetail}). ${
          tool.studentPerk ? `Ưu đãi/Đặc quyền sinh viên: ${tool.studentPerk}` : ''
        } Tuy nhiên cần lưu ý giới hạn: ${tool.limitations}`,
      },
      {
        q: `Mẹo sử dụng ${tool.name} hiệu quả nhất khi làm đồ án môn học là gì?`,
        a: `${tool.studentTip} Mức độ tiếp cận của công cụ được đánh giá ở ngưỡng "${tool.level}", rất phù hợp cho ${
          tool.bestFor || 'sinh viên chuyên ngành Marketing và Digital Marketer thực chiến'
        }.`,
      },
    ];

    const existingQuestions = new Set(baseFaqs.map((f) => f.q.toLowerCase()));
    for (const df of defaultFaqs) {
      if (!existingQuestions.has(df.q.toLowerCase()) && baseFaqs.length < 4) {
        baseFaqs.push(df);
      }
    }
    return baseFaqs;
  }, [tool, aeoDirectAnswer]);

  const coverUrl = tool
    ? getArticleCover({
        title: tool.name,
        category: tool.category,
        topic: tool.tagline,
        readTime: tool.pricing,
      })
    : '';

  useSEO({
    title: tool
      ? `${tool.name} Là Gì? Đánh Giá, Chi Phí & Hướng Dẫn Thực Hành Cho Sinh Viên | Marketing2Student`
      : 'Chi tiết công cụ Marketing',
    description: tool
      ? `${tool.name}: ${tool.excerpt} Xem chi tiết bảng giá (${tool.pricing}), ưu nhược điểm, quy trình 4 bước thực hành và mẹo áp dụng vào đồ án.`
      : 'Thông số, chi phí và ứng dụng thực tế của công cụ Marketing.',
    canonicalUrl: tool ? `https://marketing2student.com/cong-cu/${tool.slug}` : 'https://marketing2student.com/cong-cu',
    ogImage: coverUrl,
    ogType: 'article',
    publishedTime: tool?.verifiedAt,
    modifiedTime: tool?.verifiedAt,
    keywords: tool
      ? [
          tool.name,
          `${tool.name} là gì`,
          `hướng dẫn sử dụng ${tool.name}`,
          `cách dùng ${tool.name} miễn phí`,
          tool.category,
          ...tool.tags,
          'công cụ marketing cho sinh viên',
          'marketing2student',
        ]
      : [],
    jsonLdSchemas: tool
      ? [
          // 1. SoftwareApplication + Author Review (SEO & GEO Entity)
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            alternateName: tool.tags[0] || tool.name,
            description: aeoDirectAnswer,
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: tool.category,
            operatingSystem: tool.platforms || 'Web Browser, Cloud SaaS',
            inLanguage: 'vi-VN',
            url: `https://marketing2student.com/cong-cu/${tool.slug}`,
            sameAs: [tool.officialUrl],
            image: coverUrl,
            featureList: tool.useCases,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'VND',
              description: `${tool.pricing} — ${tool.pricingDetail}`,
              availability: 'https://schema.org/InStock',
            },
            review: {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: 'ThS. Trần Thanh Tùng',
                jobTitle: 'Giảng viên Marketing • Trường Đại học Nguyễn Tất Thành (NTTU)',
                url: 'https://marketing2student.com/gioi-thieu',
              },
              datePublished: tool.verifiedAt,
              reviewBody: `${tool.excerpt} Ưu điểm: ${tool.pros.join('; ')}. Giới hạn cần lưu ý: ${tool.limitations}. Lời khuyên cho sinh viên: ${tool.studentTip}`,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: tool.featured ? '4.9' : '4.7',
                bestRating: '5',
                worstRating: '1',
              },
            },
          },
          // 2. BreadcrumbList Schema
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Trang chủ',
                item: 'https://marketing2student.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Sàn Công Cụ Marketing',
                item: 'https://marketing2student.com/cong-cu',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: tool.category,
                item: `https://marketing2student.com/cong-cu?cat=${tool.categorySlug}`,
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: tool.name,
                item: `https://marketing2student.com/cong-cu/${tool.slug}`,
              },
            ],
          },
          // 3. HowTo Schema (AEO Step-by-Step Featured Snippet)
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `Cách sử dụng ${tool.name} hiệu quả cho đồ án & chiến dịch Marketing`,
            description: `Quy trình ${howToSteps.length} bước thiết lập và ứng dụng ${tool.name} thực chiến dành cho sinh viên Marketing.`,
            step: howToSteps.map((st, idx) => ({
              '@type': 'HowToStep',
              position: idx + 1,
              name: `Bước ${idx + 1}`,
              text: st,
            })),
          },
          // 4. FAQPage Schema (AEO / GEO People Also Ask & AI Overviews)
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqList.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          },
        ]
      : [],
  });

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

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
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-6">
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

        {/* 1. Main Hero & Entity Datasheet Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Cover & Student Tip */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img src={coverUrl} alt={tool.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 text-xs space-y-1.5">
                <div className="font-bold text-ink-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Lời khuyên thực chiến cho Sinh viên (Student Tip):</span>
                </div>
                <p className="text-ink-700 leading-relaxed">{tool.studentTip}</p>
              </div>

              {tool.studentPerk && (
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1.5">
                  <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đặc quyền Miễn phí & Ưu đãi Giáo dục (.edu.vn):</span>
                  </div>
                  <p className="text-emerald-900/90 leading-relaxed">{tool.studentPerk}</p>
                </div>
              )}
            </div>

            {/* Right Specs & GEO Entity Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                  {tool.category}
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Thẩm định EEAT • Cập nhật: {tool.verifiedAt}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900">
                {tool.name} — Đánh Giá, Chi Phí & Hướng Dẫn Thực Hành
              </h1>
              <p className="text-sm font-semibold text-brand-700">{tool.tagline}</p>

              {/* AEO Direct Answer Box (Tối ưu cho AI Overviews, Perplexity & ChatGPT Search) */}
              <div className="bg-slate-50 border-l-4 border-brand-600 rounded-r-xl p-4 space-y-1">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-brand-700">
                  Tóm tắt định nghĩa cốt lõi ({tool.name} là gì?)
                </div>
                <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-medium">
                  {aeoDirectAnswer}
                </p>
              </div>

              {/* GEO Entity Specs Matrix */}
              <div className="bg-white border border-slate-200/90 rounded-xl divide-y divide-slate-100 text-xs">
                <div className="grid grid-cols-12 gap-2 p-3 items-center">
                  <span className="col-span-4 text-ink-500 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>Mô hình chi phí:</span>
                  </span>
                  <span className="col-span-8 font-bold text-ink-900">
                    {tool.pricing} — <span className="font-normal text-ink-700">{tool.pricingDetail}</span>
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3 items-center">
                  <span className="col-span-4 text-ink-500 font-medium flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>Độ khó tiếp cận:</span>
                  </span>
                  <span className="col-span-8 font-semibold text-ink-800">{tool.level}</span>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3 items-center">
                  <span className="col-span-4 text-ink-500 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>Phù hợp nhất cho:</span>
                  </span>
                  <span className="col-span-8 text-ink-800">
                    {tool.bestFor || 'Sinh viên Marketing làm đồ án thực chiến, Content & Performance Marketer.'}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3 items-center">
                  <span className="col-span-4 text-ink-500 font-medium flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>Nền tảng hỗ trợ:</span>
                  </span>
                  <span className="col-span-8 text-ink-800">{tool.platforms || 'Web Browser (Cloud SaaS)'}</span>
                </div>

                <div className="grid grid-cols-12 gap-2 p-3 items-center">
                  <span className="col-span-4 text-ink-500 font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>Hỗ trợ Tiếng Việt:</span>
                  </span>
                  <span className="col-span-8 text-ink-800">
                    {tool.vietnameseSupport || 'Hỗ trợ tốt dữ liệu và ký tự tiếng Việt.'}
                  </span>
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
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors"
                >
                  <span>Mở Trang Chủ {tool.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to={`/cong-cu?cat=${tool.categorySlug}`}
                  className="px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-ink-800 font-semibold text-xs transition-colors"
                >
                  So sánh công cụ cùng nhóm
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Use Cases, Pros & Limitations (3-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Ứng dụng thực tế vào Đồ án</span>
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

        {/* 3. HowTo Step-by-Step Guide & Practical Exercise / Prompt Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: HowTo Steps (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-brand-600" />
                <span>Quy Trình {howToSteps.length} Bước Thực Hành Nhanh ({tool.name})</span>
              </h2>
              <span className="text-[10px] font-bold uppercase bg-brand-50 text-brand-700 border border-brand-200 px-2 py-0.5 rounded">
                HowTo Schema
              </span>
            </div>

            <ol className="space-y-3">
              {howToSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-ink-800 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-lg bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Practical Task / Prompt & Alternatives Comparison (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {tool.samplePromptOrTask && (
              <div className="bg-gradient-to-br from-[#1c244b] to-[#046bd2] text-white rounded-2xl p-6 shadow-soft space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>BÀI TẬP / MẪU CÂU LỆNH THỰC HÀNH</span>
                  </span>
                  <button
                    onClick={() => handleCopyPrompt(tool.samplePromptOrTask!)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/15 font-mono">
                  {tool.samplePromptOrTask}
                </p>
              </div>
            )}

            {tool.alternatives && tool.alternatives.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-3">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
                  <GitCompare className="w-4 h-4 text-brand-600" />
                  <span>Đặt Lên Bàn Cân So Sánh (Alternatives)</span>
                </h2>
                <div className="space-y-2.5">
                  {tool.alternatives.map((alt, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="font-bold text-ink-900 flex items-center justify-between">
                        <span>So với {alt.name}</span>
                        {alt.slug && (
                          <Link
                            to={`/cong-cu/${alt.slug}`}
                            className="text-[11px] text-brand-600 hover:underline font-semibold"
                          >
                            Xem công cụ ›
                          </Link>
                        )}
                      </div>
                      <p className="text-ink-600 leading-relaxed">{alt.comparison}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Optional Long-Form SEO Content Body (Dành cho bài viết review chuyên sâu 1.500+ từ) */}
        {tool.contentHtml && (
          <article className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8 lg:p-10">
            <div
              className="article-prose text-sm sm:text-base text-ink-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tool.contentHtml }}
            />
          </article>
        )}

        {/* 5. AEO / GEO FAQ Box */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded border-l-4 border-brand-600">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink-900">
              CÂU HỎI THƯỜNG GẶP VỀ {tool.name.toUpperCase()} (AEO / GEO FAQ)
            </h2>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded hidden sm:inline">
              FAQPage JSON-LD
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {faqList.map((f, fIdx) => (
              <div key={fIdx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 text-xs">
                <h3 className="font-bold text-ink-900 flex items-start gap-2 text-xs sm:text-sm">
                  <HelpCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{f.q}</span>
                </h3>
                <p className="mt-2 text-ink-600 pl-6 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Related Academic & Practical Articles (SEO Internal Linking Cluster) */}
        {relatedAcademicArticles.length > 0 && (
          <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>BÀI VIẾT HỌC THUẬT & BÀI TẬP ỨNG DỤNG LIÊN QUAN</span>
              </h2>
              <Link to="/blog" className="text-xs text-brand-600 font-bold hover:underline">
                Xem kho 119 bài viết ›
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {relatedAcademicArticles.map((art) => (
                <ArticleCard key={art.id} article={art} />
              ))}
            </div>
          </div>
        )}

        {/* 7. Lecturer / Editorial Bio Bar (EEAT Author Authority) */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="ThS. Trần Thanh Tùng"
              className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-200 shadow-xs shrink-0"
            />
            <div>
              <h3 className="font-extrabold text-ink-900 text-sm sm:text-base flex items-center gap-1.5">
                <span>Thẩm định chuyên môn: ThS. Trần Thanh Tùng (MBA)</span>
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
              </h3>
              <p className="text-xs text-ink-600 mt-0.5">
                Giảng viên Marketing • Trường Đại học Nguyễn Tất Thành (NTTU) • Chủ biên hệ sinh thái học thuật VNEconomics & Marketing2Student
              </p>
            </div>
          </div>
          <Link
            to="/gioi-thieu"
            className="px-4 py-2 rounded-xl border border-brand-600 text-brand-700 bg-brand-50 text-xs font-bold hover:bg-brand-100 transition-colors shrink-0 text-center"
          >
            Tiêu chuẩn thẩm định EEAT
          </Link>
        </div>

        {/* 8. Community Discussion */}
        <ReviewSection articleSlug={`tool_${tool.slug}`} articleTitle={`Công cụ: ${tool.name}`} />

        {/* 9. Related Tools */}
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

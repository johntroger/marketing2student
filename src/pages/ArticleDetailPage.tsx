import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Heart,
  BookOpen,
  Sparkles,
  GraduationCap,
  Tag,
  ExternalLink,
  Layers,
  Users,
  Eye,
  FileText
} from 'lucide-react';
import { articles } from '../data/articles';
import { studentProjects } from '../data/studentProjects';
import { categories } from '../data/categories';
import { getArticleCover } from '../utils/imageGenerator';
import { ArticleCard } from '../components/ArticleCard';
import { ProjectCard } from '../components/ProjectCard';
import { useSEO } from '../utils/useSEO';
import { ReviewSection } from '../components/ReviewSection';
import { StudentProject } from '../types';

export const ProjectDetailView: React.FC<{ project: StudentProject }> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'live'>('overview');

  const coverUrl = getArticleCover({
    title: project.brandName,
    category: 'AI Marketing & Tự động hóa',
    topic: project.industry,
    readTime: project.semester,
    featuredImage: project.coverImage,
  });

  const otherProjects = useMemo(() => {
    return studentProjects.filter((p) => p.id !== project.id).slice(0, 3);
  }, [project.id]);

  useSEO({
    title: `${project.brandName} — Dự Án Digital Marketing Sinh Viên | Marketing2Student`,
    description: project.excerpt,
    canonicalUrl: `https://marketing2student.com/du-an-sinh-vien/${project.slug}`,
    ogImage: coverUrl,
    ogType: 'article',
    publishedTime: project.publishedAt,
    keywords: [project.brandName, project.industry, ...project.marketingAngles, 'dự án sinh viên NTTU', 'marketing2student'],
    jsonLdSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': `${project.brandName} — Đồ án Digital Marketing`,
        'description': project.excerpt,
        'url': `https://marketing2student.com/du-an-sinh-vien/${project.slug}`,
        'image': coverUrl,
        'datePublished': project.publishedAt,
        'author': {
          '@type': 'Organization',
          'name': project.studentGroup
        }
      }
    ]
  });

  return (
    <div className="bg-surface-100 min-h-screen py-6 text-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-ink-500 flex-wrap">
          <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
          <span>›</span>
          <Link to="/du-an-sinh-vien" className="text-brand-600 hover:underline">Phòng Lab Dự Án Sinh Viên</Link>
          <span>›</span>
          <span className="text-ink-900 font-bold truncate max-w-md">{project.brandName}</span>
        </nav>

        {/* Project Summary Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={coverUrl}
                  alt={project.brandName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="bg-ink-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-100" />
                    <span>STUDENT LAB</span>
                  </span>
                </div>
              </div>

              {project.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.gallery.slice(0, 4).map((imgUrl, idx) => (
                    <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                      <img src={imgUrl} alt={`${project.brandName} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900">
                <strong>Lưu ý học thuật:</strong> Đây là sản phẩm thực hành học phần Digital Marketing của sinh viên Trường Đại học Nguyễn Tất Thành. Mọi thông tin sản phẩm, giá bán và biểu mẫu chỉ phục vụ mục đích học tập.
              </div>
            </div>

            {/* Right Metadata & Strategy Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-brand-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                    {project.semester}
                  </span>
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded">
                    {project.industry}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 leading-tight">
                  {project.brandName}
                </h1>
                <p className="text-xs text-ink-500 mt-1 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-brand-600" />
                  <span>Thực hiện bởi: <strong>{project.studentGroup}</strong> • Giảng viên hướng dẫn: <strong>ThS. Trần Thanh Tùng</strong></span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                {project.excerpt}
              </p>

              {/* Strategic Highlights */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-900">
                  Điểm sáng Chiến lược & Kỹ thuật Marketing:
                </h3>
                <ul className="space-y-2 text-xs text-ink-700">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Angles */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {project.marketingAngles.map((ang, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200"
                  >
                    #{ang}
                  </span>
                ))}
              </div>

              {/* View Mode Switcher Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-slate-100 text-ink-700 hover:bg-slate-200'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Phân Tích & Nội Dung Đồ Án</span>
                </button>
                <button
                  onClick={() => setActiveTab('live')}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors ${
                    activeTab === 'live'
                      ? 'bg-ink-900 text-white shadow-xs'
                      : 'bg-slate-100 text-ink-700 hover:bg-slate-200'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Xem Toàn Bộ Landing Page Gốc Của Sinh Viên</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content Display */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-ink-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>
                {activeTab === 'overview'
                  ? `Nội dung Landing Page & Copywriting của dự án ${project.brandName}`
                  : `Bản dựng Landing Page thực hành: ${project.brandName}`}
              </span>
            </h2>
            <span className="text-xs text-ink-400">Mã trang WP: #{project.wpId}</span>
          </div>

          <div
            className="article-prose text-xs sm:text-sm text-ink-800 leading-relaxed overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />
        </div>

        {/* Review & Feedback Section for Student Project */}
        <ReviewSection articleSlug={project.slug} articleTitle={`Dự án Sinh viên: ${project.brandName}`} />

        {/* Other Student Projects */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-ink-900">
              CÁC DỰ ÁN SINH VIÊN KHÁC TRONG PHÒNG LAB
            </h3>
            <Link to="/du-an-sinh-vien" className="text-xs text-brand-600 font-bold hover:underline">
              Xem tất cả {studentProjects.length} dự án ›
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check if slug matches a Student Project first (preserves original root URLs like /choko-2/, /aquaremindofficial/, /elora-seochill/, etc.)
  const matchedProject = useMemo(() => {
    if (!slug) return undefined;
    return studentProjects.find((p) => p.slug === slug);
  }, [slug]);

  const article = useMemo(() => {
    if (!slug) return undefined;
    return articles.find((a) => a.slug === slug);
  }, [slug]);

  const categoryObj = useMemo(() => {
    if (!article) return null;
    return categories.find((c) => c.slug === article.categorySlug);
  }, [article]);

  // Related articles in same category
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.categorySlug === article.categorySlug && a.id !== article.id)
      .slice(0, 6);
  }, [article]);

  // Recent articles for Sticky Right Sidebar (replaces broken [wpp] sidebar with clean Recent + Popular Academic posts)
  const latestSidebarArticles = useMemo(() => {
    return articles.slice(0, 5);
  }, []);

  const popularSidebarArticles = useMemo(() => {
    return articles.filter((a) => a.hasPracticalExercise || a.hasAcademicCitation).slice(0, 6);
  }, []);

  // Previous / Next article navigation
  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article) return { prevArticle: null, nextArticle: null };
    const idx = articles.findIndex((a) => a.id === article.id);
    return {
      prevArticle: idx > 0 ? articles[idx - 1] : null,
      nextArticle: idx >= 0 && idx < articles.length - 1 ? articles[idx + 1] : null,
    };
  }, [article]);

  const coverUrl = article
    ? getArticleCover({
        title: article.title,
        category: article.category,
        topic: article.topic,
        readTime: article.readTime,
        featuredImage: article.featuredImage,
      })
    : '';

  const faqItems = useMemo(() => {
    if (!article) return [];
    return [
      {
        q: `Trọng tâm cốt lõi của bài viết "${article.title}" là gì?`,
        a: `${article.excerpt} Bài viết thuộc chuyên mục ${article.category}, tập trung vào chủ đề "${article.topic}".`,
      },
      {
        q: `Bài viết này dành cho đối tượng người đọc nào?`,
        a: `Phù hợp cho sinh viên chuyên ngành Marketing, Quản trị kinh doanh, Marketer thực chiến và chủ doanh nghiệp muốn ra quyết định dựa trên dữ liệu và bằng chứng khoa học.`,
      },
      {
        q: `Làm thế nào để áp dụng kiến thức trong bài vào thực tế?`,
        a: article.hasPracticalExercise
          ? `Bài viết có sẵn phần "Bài tập thực hành" từng bước. Bạn hãy thực hiện theo hướng dẫn trong bài và gửi kết quả xuống khung Thảo luận bên dưới để cùng trao đổi.`
          : `Bạn có thể đối chiếu khung lý thuyết trong bài với chiến dịch hiện tại của thương hiệu, đồng thời kết hợp công cụ đo lường GA4 và thử nghiệm A/B.`,
      },
    ];
  }, [article]);

  useSEO({
    title: article
      ? `${article.title} | Marketing2Student`
      : matchedProject
      ? `${matchedProject.brandName} — Dự Án Sinh Viên | Marketing2Student`
      : 'Bài viết Marketing2Student',
    description: article?.excerpt || matchedProject?.excerpt || 'Thư viện kiến thức Marketing thực chiến chuẩn EEAT.',
    canonicalUrl: article
      ? `https://marketing2student.com/${article.slug}`
      : matchedProject
      ? `https://marketing2student.com/${matchedProject.slug}`
      : 'https://marketing2student.com/blog',
    ogImage: coverUrl || 'https://marketing2student.com/og-cover.png',
    ogType: 'article',
    publishedTime: article?.publishedAt || matchedProject?.publishedAt,
    modifiedTime: article?.modifiedAt,
    keywords: article ? [article.title, article.category, article.topic, ...article.tags, 'marketing2student'] : [],
    jsonLdSchemas: article
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': article.title,
            'description': article.excerpt,
            'image': coverUrl,
            'datePublished': article.publishedAt,
            'dateModified': article.modifiedAt,
            'author': {
              '@type': 'Person',
              'name': article.author,
              'jobTitle': article.authorRole,
              'url': 'https://marketing2student.com/gioi-thieu',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Marketing2Student',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://marketing2student.com/logo.jpg',
              },
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `https://marketing2student.com/${article.slug}`,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Trang chủ',
                'item': 'https://marketing2student.com/',
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': article.category,
                'item': `https://marketing2student.com/category/${article.categorySlug}`,
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': article.title,
                'item': `https://marketing2student.com/${article.slug}`,
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqItems.map((f) => ({
              '@type': 'Question',
              'name': f.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': f.a,
              },
            })),
          },
        ]
      : [],
  });

  if (matchedProject) {
    return <ProjectDetailView project={matchedProject} />;
  }

  if (!article) {
    return (
      <div className="bg-surface-100 min-h-[70vh] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-soft border border-slate-200">
            <BookOpen className="w-14 h-14 text-slate-300 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-ink-900">Không tìm thấy bài viết</h2>
            <p className="mt-2 text-sm text-ink-500">
              Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật đường dẫn.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Về Thư Viện Bài Viết Marketing2Student</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-100 min-h-screen py-6 text-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-ink-500 flex-wrap">
          <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
          <span>›</span>
          <Link to="/blog" className="text-brand-600 hover:underline">Blog</Link>
          <span>›</span>
          <Link to={`/category/${article.categorySlug}`} className="text-brand-600 hover:underline">
            {article.category}
          </Link>
          <span>›</span>
          <span className="text-ink-900 font-semibold truncate max-w-md">{article.title}</span>
        </nav>

        {/* Top Summary Card (VneconomicsStore 2-Column Header Style adapted for Academic & Practical Marketing Article) */}
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Cover Image (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                <img
                  src={coverUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="bg-brand-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs">
                    {article.category.split('&')[0].trim()}
                  </span>
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>EEAT VERIFIED</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Article Metadata & Quick Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Link
                  to={`/category/${article.categorySlug}`}
                  className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200 font-bold hover:bg-brand-100 transition-colors"
                >
                  {article.category}
                </Link>
                {article.hasPracticalExercise && (
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Có Bài Tập Thực Hành</span>
                  </span>
                )}
                {article.hasAcademicCitation && (
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Có Trích Dẫn Nghiên Cứu (DOI)</span>
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink-900 leading-snug">
                {article.title}
              </h1>

              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author & Date Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-ink-500">
                <Link to="/gioi-thieu" className="flex items-center gap-2 group">
                  <img
                    src="/logo.jpg"
                    alt={article.author}
                    className="w-7 h-7 rounded-full object-cover border border-brand-200"
                  />
                  <span className="font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
                    {article.author}
                  </span>
                </Link>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  <span>Đăng ngày: {article.publishedAt}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Tags & Save Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {article.tags.map((t, i) => (
                    <Link
                      key={i}
                      to={`/blog?q=${encodeURIComponent(t)}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-ink-700 transition-colors"
                    >
                      <Tag className="w-3 h-3 text-brand-600" />
                      <span>{t}</span>
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-ink-800 hover:text-brand-600 hover:border-brand-400 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-brand-600 text-brand-600' : ''}`} />
                  <span>{isBookmarked ? 'Đã lưu bài học' : 'Lưu bài học'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Reading Layout: Article Prose (8 cols) + Sticky Right Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Main Article Content + AEO FAQ + Author Box + Discussion (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <article className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 sm:p-8 lg:p-10">
              {/* Article HTML Body */}
              <div
                className="article-prose text-sm sm:text-base text-ink-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Bottom Tag Pills */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-ink-700 mr-1">Chủ đề liên quan:</span>
                  {article.tags.map((t, idx) => (
                    <Link
                      key={idx}
                      to={`/blog?q=${encodeURIComponent(t)}`}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200/70 hover:bg-brand-100 transition-colors"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 hover:text-rose-600 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>Bài viết hữu ích</span>
                </button>
              </div>
            </article>

            {/* Previous / Next Post Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/${prevArticle.slug}`}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-600 shadow-soft transition-all group flex flex-col justify-between"
                >
                  <span className="text-[11px] font-bold text-ink-400 uppercase flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5 text-brand-600" />
                    <span>Bài viết trước</span>
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-2 mt-1.5">
                    {prevArticle.title}
                  </h4>
                </Link>
              ) : <div />}

              {nextArticle && (
                <Link
                  to={`/${nextArticle.slug}`}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-600 shadow-soft transition-all group flex flex-col justify-between text-right"
                >
                  <span className="text-[11px] font-bold text-ink-400 uppercase flex items-center justify-end gap-1">
                    <span>Bài viết tiếp theo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-2 mt-1.5">
                    {nextArticle.title}
                  </h4>
                </Link>
              )}
            </div>

            {/* Lecturer / Editorial Bio Bar (VneconomicsStore Publisher Style) */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.jpg"
                  alt="ThS. Trần Thanh Tùng"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-200 shadow-xs shrink-0"
                />
                <div>
                  <h3 className="font-extrabold text-ink-900 text-sm sm:text-base flex items-center gap-1.5">
                    <span>ThS. Trần Thanh Tùng (MBA)</span>
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  </h3>
                  <p className="text-xs text-ink-600 mt-0.5">
                    Giảng viên Marketing • Trường Đại học Nguyễn Tất Thành (NTTU)
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    <Link
                      to="/gioi-thieu"
                      className="px-3 py-1 rounded-lg border border-brand-600 text-brand-700 bg-brand-50 text-[11px] font-bold hover:bg-brand-100 transition-colors"
                    >
                      Phương pháp giảng dạy
                    </Link>
                    <a
                      href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg border border-slate-300 text-ink-700 bg-white text-[11px] font-semibold flex items-center gap-1 hover:bg-slate-50 transition-colors"
                    >
                      <span>Thi thử Digital Marketing</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-ink-600 border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-6 shrink-0">
                <div>
                  <span className="text-ink-400 block text-[11px]">Tiêu chuẩn</span>
                  <span className="font-bold text-brand-600 text-sm">Chuẩn EEAT</span>
                </div>
                <div>
                  <span className="text-ink-400 block text-[11px]">Kho học liệu</span>
                  <span className="font-bold text-ink-900 text-sm">{articles.length}+ bài viết</span>
                </div>
              </div>
            </div>

            {/* AEO / GEO FAQ Box */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-6 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider bg-slate-50 p-3 rounded text-ink-900 border-l-4 border-brand-600">
                TÓM TẮT HỎI ĐÁP NHANH (AEO / GEO & THẨM ĐỊNH EEAT)
              </h2>
              <div className="space-y-3">
                {faqItems.map((f, fIdx) => (
                  <div key={fIdx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 text-xs">
                    <h4 className="font-bold text-ink-900 flex items-center gap-2 text-xs sm:text-sm">
                      <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{f.q}</span>
                    </h4>
                    <p className="mt-2 text-ink-600 pl-6 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Firebase Realtime Academic Discussion & Exercise Submission */}
            <ReviewSection articleSlug={article.slug} articleTitle={article.title} />
          </div>

          {/* RIGHT: Sticky Sidebar (Replaces Astra Sticky Sidebar & fixes broken [wpp] popular posts widget) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            {/* Widget 1: Bài viết mới nhất */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-900 pb-3 border-b border-slate-100 mb-4 flex items-center justify-between">
                <span>BÀI VIẾT MỚI NHẤT</span>
                <span className="text-[10px] text-brand-600 bg-brand-50 px-2 py-0.5 rounded">2026</span>
              </h3>
              <div className="space-y-3.5">
                {latestSidebarArticles.map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.slug}`}
                    className="group flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    <img
                      src={getArticleCover({
                        title: item.title,
                        category: item.category,
                        featuredImage: item.featuredImage,
                      })}
                      alt={item.title}
                      className="w-16 h-11 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-ink-400 mt-1 block">
                        {item.publishedAt} • {item.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 2: Bài viết tiêu điểm & nhiều lượt xem (Replaces broken [wpp range='all' limit=10...]) */}
            <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-900 pb-3 border-b border-slate-100 mb-4 flex items-center justify-between">
                <span>BÀI VIẾT TIÊU ĐIỂM & THỰC HÀNH</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </h3>
              <div className="space-y-3">
                {popularSidebarArticles.map((item, idx) => (
                  <Link
                    key={item.id}
                    to={`/${item.slug}`}
                    className="group flex items-start gap-3 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-brand-600 font-semibold mt-0.5 block">
                        {item.topic}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Student Lab Promo */}
            <div className="bg-gradient-to-br from-[#1c244b] to-[#046bd2] text-white rounded-2xl p-5 shadow-soft space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded">
                <GraduationCap className="w-3.5 h-3.5 text-brand-100" />
                <span>PHÒNG LAB SINH VIÊN</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold leading-snug">
                Khám phá 7 Dự án Thương hiệu & Landing Page của Sinh viên NTTU
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Xem cách sinh viên áp dụng lý thuyết Marketing vào thiết kế trang đích CHOKO, AQUA REMIND, Bát Mộc Trà, Nước hoa Elora và Golden.
              </p>
              <Link
                to="/du-an-sinh-vien"
                className="block w-full text-center py-2.5 px-4 rounded-xl bg-white text-ink-900 font-bold text-xs uppercase tracking-wider hover:bg-brand-50 transition-colors"
              >
                Vào Phòng Lab Sinh Viên
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Articles Grid */}
        {relatedArticles.length > 0 && (
          <div className="space-y-3 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-ink-900">
                BÀI VIẾT CÙNG CHUYÊN MỤC ({categoryObj?.name || article.category})
              </h3>
              <Link
                to={`/category/${article.categorySlug}`}
                className="text-xs text-brand-600 font-bold hover:underline"
              >
                Xem Tất Cả ›
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

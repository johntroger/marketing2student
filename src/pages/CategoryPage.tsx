import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, topics } from '../data/categories';
import { articles } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { useSEO } from '../utils/useSEO';
import { matchArticle } from '../utils/search';
import { 
  Filter, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Check, 
  ShieldCheck, 
  BookOpen, 
  FileCheck2, 
  Award,
  Sparkles
} from 'lucide-react';

const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  'ai-marketing': 'ai-marketing',
  'do-luong-marketing': 'do-luong-marketing',
  'seo': 'seo-content-marketing',
  'content-marketing': 'seo-content-marketing',
  'seo-content-marketing': 'seo-content-marketing',
  'social-media-marketing': 'social-video-marketing',
  'video-marketing': 'social-video-marketing',
  'social-video-marketing': 'social-video-marketing',
  'quang-cao-so': 'quang-cao-b2b-tang-truong',
  'marketing-b2b': 'quang-cao-b2b-tang-truong',
  'quang-cao-b2b-tang-truong': 'quang-cao-b2b-tang-truong',
  'branding': 'thuong-hieu-hanh-vi-khach-hang',
  'uncategorized': 'thuong-hieu-hanh-vi-khach-hang',
  'thuong-hieu-hanh-vi-khach-hang': 'thuong-hieu-hanh-vi-khach-hang',
};

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [onlyExercise, setOnlyExercise] = useState(false);
  const [sortBy, setSortBy] = useState<'latest' | 'practical' | 'academic'>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    setCurrentPage(1);
    setSelectedTopic('');
    setOnlyExercise(false);
  }, [slug]);

  const category = useMemo(() => {
    if (!slug) return undefined;
    const normalizedSlug = CATEGORY_SLUG_ALIASES[slug] || slug;
    return categories.find((c) => c.slug === normalizedSlug || c.id === normalizedSlug);
  }, [slug]);

  const categoryArticles = useMemo(() => {
    if (!category) return [];
    // If legacy slug is uncategorized, show all or category articles
    if (slug === 'uncategorized') {
      return articles;
    }
    return articles.filter((a) => a.categorySlug === category.slug);
  }, [category, slug]);

  const filteredArticles = useMemo(() => {
    return categoryArticles
      .filter((item) => {
        const matchesSearch = matchArticle(item, searchTerm);
        const matchesTopic = !selectedTopic || item.topic.toLowerCase() === selectedTopic.toLowerCase();
        const matchesExercise = !onlyExercise || item.hasPracticalExercise;
        return matchesSearch && matchesTopic && matchesExercise;
      })
      .sort((a, b) => {
        if (sortBy === 'practical' && a.hasPracticalExercise !== b.hasPracticalExercise) {
          return a.hasPracticalExercise ? -1 : 1;
        }
        if (sortBy === 'academic' && a.hasAcademicCitation !== b.hasAcademicCitation) {
          return a.hasAcademicCitation ? -1 : 1;
        }
        return b.wpId - a.wpId;
      });
  }, [categoryArticles, searchTerm, selectedTopic, onlyExercise, sortBy]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPage]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTopic('');
    setOnlyExercise(false);
    setCurrentPage(1);
  };

  const hasActiveFilters = Boolean(searchTerm || selectedTopic || onlyExercise);

  useSEO({
    title: category ? `${category.name} — Kiến Thức & Tình Huống Thực Chiến | Marketing2Student` : 'Chuyên mục Marketing',
    description: category?.description || 'Khám phá bài viết chuyên sâu theo chuyên mục tại Marketing2Student.',
    canonicalUrl: category ? `https://marketing2student.com/category/${category.slug}` : 'https://marketing2student.com/blog',
    keywords: category ? [category.name, 'marketing2student', 'ThS Trần Thanh Tùng', 'digital marketing'] : [],
    jsonLdSchemas: category ? [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': category.name,
        'description': category.description,
        'url': `https://marketing2student.com/category/${category.slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': 'https://marketing2student.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://marketing2student.com/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': category.name, 'item': `https://marketing2student.com/category/${category.slug}` }
        ]
      }
    ] : []
  });

  if (!category) {
    return (
      <div className="bg-surface-100 min-h-[70vh] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-xl shadow-soft border border-slate-200">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-ink-900">Không tìm thấy chuyên mục yêu cầu</h2>
            <p className="mt-2 text-sm text-ink-500">Chuyên mục bạn tìm kiếm không tồn tại hoặc đã được chuyển đường dẫn.</p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-xs"
            >
              <span>Về Thư Viện Bài Viết</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-100 min-h-screen pb-16 text-ink-900">
      {/* Category Header Banner */}
      <div className="bg-white border-b border-slate-200/90 py-7 shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-ink-500 mb-3">
            <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
            <span>›</span>
            <Link to="/blog" className="text-brand-600 hover:underline">Thư viện Blog</Link>
            <span>›</span>
            <span className="text-ink-900 font-bold">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-100 text-ink-900 border border-brand-200">
                  CHUYÊN MỤC MARKETING
                </span>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Biên tập chuẩn EEAT
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-900">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-ink-600 mt-1 max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-brand-50/70 p-3.5 rounded-xl border border-brand-200 self-start md:self-auto shadow-2xs">
              <div className="text-center px-2">
                <div className="text-lg font-black text-ink-900">{categoryArticles.length}</div>
                <div className="text-[10px] uppercase text-ink-600 font-bold">Bài viết</div>
              </div>
              <div className="w-px h-8 bg-brand-200" />
              <div className="text-center px-2">
                <div className="text-lg font-black text-brand-600">EEAT</div>
                <div className="text-[10px] uppercase text-ink-600 font-bold">Thẩm định</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Body */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-1 hidden lg:block bg-white p-4 rounded-xl shadow-soft border border-slate-200 h-fit space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 font-extrabold text-xs uppercase tracking-wider text-ink-900">
              <Filter className="w-4 h-4 text-brand-600" />
              <span>CHUYÊN MỤC</span>
            </div>

            <div className="space-y-1 text-xs">
              <Link
                to="/blog"
                className="w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors text-ink-600 hover:text-brand-600 hover:bg-slate-50"
              >
                <span>Tất Cả Bài Viết ({articles.length})</span>
              </Link>
              {categories.map((c) => {
                const isCurrent = c.slug === category.slug;
                return (
                  <Link
                    key={c.id}
                    to={`/category/${c.slug}`}
                    className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
                      isCurrent ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate pr-1">• {c.shortName}</span>
                    {isCurrent && <ChevronRight className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Chủ Đề Kỹ Năng</h4>
              <div className="space-y-1 text-xs">
                {topics.map((t) => (
                  <label
                    key={t.id}
                    onClick={() => { setSelectedTopic(selectedTopic === t.name ? '' : t.name); setCurrentPage(1); }}
                    className={`flex items-center gap-2 py-1 px-1.5 rounded cursor-pointer transition-colors ${
                      selectedTopic === t.name ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 border rounded flex items-center justify-center shrink-0 ${
                      selectedTopic === t.name ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
                    }`}>
                      {selectedTopic === t.name && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </span>
                    <span className="truncate">{t.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={handleClearFilters}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-ink-900 text-white text-xs font-bold rounded-lg shadow-xs hover:bg-ink-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>XÓA BỘ LỌC</span>
                </button>
              </div>
            )}
          </aside>

          {/* RIGHT CONTENT */}
          <main className="lg:col-span-4 space-y-4">
            <div className="bg-slate-200/70 p-3 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-ink-600 font-medium">Sắp xếp theo:</span>
                <button
                  onClick={() => setSortBy('latest')}
                  className={`px-4 py-1.5 rounded font-semibold transition-all ${
                    sortBy === 'latest'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-ink-800 hover:bg-slate-50'
                  }`}
                >
                  Mới nhất
                </button>
                <button
                  onClick={() => setSortBy('practical')}
                  className={`px-4 py-1.5 rounded font-semibold transition-all flex items-center gap-1 ${
                    sortBy === 'practical'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-ink-800 hover:bg-slate-50'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Có bài tập thực hành</span>
                </button>
                <button
                  onClick={() => setSortBy('academic')}
                  className={`px-4 py-1.5 rounded font-semibold transition-all ${
                    sortBy === 'academic'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-ink-800 hover:bg-slate-50'
                  }`}
                >
                  Trích dẫn nghiên cứu
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-ink-700">
                  <span className="text-brand-600 font-bold">{currentPage}</span>/{totalPages}
                </span>
                <div className="flex items-center">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="w-8 h-8 bg-white border border-slate-300 rounded-l flex items-center justify-center disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4 text-ink-600" />
                  </button>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    className="w-8 h-8 bg-white border border-l-0 border-slate-300 rounded-r flex items-center justify-center disabled:opacity-40"
                  >
                    <ChevronRight className="w-4 h-4 text-ink-600" />
                  </button>
                </div>
              </div>
            </div>

            {paginatedArticles.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {paginatedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-slate-200 shadow-soft">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-ink-800">Không tìm thấy bài viết phù hợp</h3>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded uppercase tracking-wider"
                >
                  XÓA BỘ LỌC
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="w-10 h-8 rounded border border-slate-300 bg-white text-ink-700 text-xs font-bold flex items-center justify-center disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-8 rounded text-xs font-bold transition-all ${
                        pageNum === currentPage
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-ink-700 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="w-10 h-8 rounded border border-slate-300 bg-white text-ink-700 text-xs font-bold flex items-center justify-center disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* EEAT & Academic Summary Block */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 mt-8 space-y-6 text-ink-800 shadow-soft">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
                  PHƯƠNG PHÁP HỌC THUẬT & THỰC CHIẾN
                </span>
                <h2 className="text-lg font-bold text-ink-900 mt-2">
                  Định hướng học tập chuyên mục {category.name}
                </h2>
                <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                  Các bài viết thuộc chuyên mục <strong>{category.name}</strong> trên Marketing2Student được biên soạn nhằm thu hẹp khoảng cách giữa lý thuyết học thuật trên giảng đường và quyết định tối ưu chiến dịch hàng ngày của Marketer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-ink-900 mb-1">
                    <FileCheck2 className="w-4 h-4 text-brand-600" />
                    <span>Trích Dẫn Nghiên Cứu (DOI)</span>
                  </div>
                  <p className="text-ink-600 leading-normal">
                    Mỗi nguyên lý về hành vi khách hàng, định giá hay thử nghiệm quảng cáo đều đối chiếu với các công bố khoa học quốc tế uy tín.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-ink-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Bài Tập Tình Huống Thực Tế</span>
                  </div>
                  <p className="text-ink-600 leading-normal">
                    Đi kèm bài tập thực hành từng bước với dữ liệu giả lập (GA4, UTM, A/B Testing, Prompt AI) để sinh viên rèn kỹ năng ra quyết định.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-ink-900 mb-1">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Chuẩn SEO, AEO & GEO</span>
                  </div>
                  <p className="text-ink-600 leading-normal">
                    Cấu trúc nội dung tường minh, trả lời trực diện câu hỏi chuyên môn kèm Schema JSON-LD chuẩn hóa.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

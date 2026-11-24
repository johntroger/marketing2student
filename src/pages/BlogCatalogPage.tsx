import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  SlidersHorizontal, 
  X, 
  Check,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../data/articles';
import { categories, topics } from '../data/categories';
import { useSEO } from '../utils/useSEO';
import { matchArticle } from '../utils/search';

export const BlogCatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const initialQuery = searchParams.get('q') || searchParams.get('s') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialTopic = searchParams.get('topic') || '';
  const initialTag = searchParams.get('tag') || '';
  const initialOnlyExercise = searchParams.get('exercise') === '1';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [onlyExercise, setOnlyExercise] = useState(initialOnlyExercise);
  const [sortBy, setSortBy] = useState<'latest' | 'practical' | 'academic'>('latest');

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || searchParams.get('s') || '');
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedTopic(searchParams.get('topic') || '');
    setSelectedTag(searchParams.get('tag') || '');
    setOnlyExercise(searchParams.get('exercise') === '1');
    setCurrentPage(1);
  }, [searchParams]);

  useSEO({
    title: 'Thư Viện Bài Viết Marketing Thực Chiến — Marketing2Student',
    description: `Tra cứu và học tập từ hơn ${articles.length} bài viết chuyên sâu về AI Marketing, SEO, Content, Đo lường GA4 và Chiến lược Thương hiệu trên Marketing2Student.`,
    canonicalUrl: 'https://marketing2student.com/blog',
    keywords: ['blog marketing2student', 'thư viện marketing', 'AI marketing', 'SEO thực chiến', 'đo lường marketing'],
  });

  const filteredArticles = useMemo(() => {
    return articles
      .filter((item) => {
        const matchesSearch = matchArticle(item, searchTerm);
        const matchesCategory =
          !selectedCategory ||
          item.category.toLowerCase() === selectedCategory.toLowerCase() ||
          item.categorySlug.toLowerCase() === selectedCategory.toLowerCase();
        const matchesTopic =
          !selectedTopic || item.topic.toLowerCase() === selectedTopic.toLowerCase();
        const matchesTag =
          !selectedTag ||
          item.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
        const matchesExercise = !onlyExercise || item.hasPracticalExercise;

        return matchesSearch && matchesCategory && matchesTopic && matchesTag && matchesExercise;
      })
      .sort((a, b) => {
        if (sortBy === 'practical') {
          if (a.hasPracticalExercise !== b.hasPracticalExercise) {
            return a.hasPracticalExercise ? -1 : 1;
          }
        }
        if (sortBy === 'academic') {
          if (a.hasAcademicCitation !== b.hasAcademicCitation) {
            return a.hasAcademicCitation ? -1 : 1;
          }
        }
        return b.wpId - a.wpId;
      });
  }, [searchTerm, selectedCategory, selectedTopic, selectedTag, onlyExercise, sortBy]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPage]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTopic('');
    setSelectedTag('');
    setOnlyExercise(false);
    setSearchParams({});
    setCurrentPage(1);
  };

  const handleRemoveSearchTerm = () => {
    setSearchTerm('');
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('q');
    newParams.delete('s');
    setSearchParams(newParams);
  };

  const hasActiveFilters = Boolean(searchTerm || selectedCategory || selectedTopic || selectedTag || onlyExercise);

  const FilterSidebar = (
    <div className="space-y-5 text-ink-800">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200 font-extrabold text-xs uppercase tracking-wider text-ink-900">
        <Filter className="w-4 h-4 text-brand-600" />
        <span>BỘ LỌC KIẾN THỨC</span>
      </div>

      {/* 1. Theo Chuyên Mục */}
      <div>
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Theo Chuyên Mục</h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => { setSelectedCategory(''); setCurrentPage(1); }}
            className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
              !selectedCategory ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
            }`}
          >
            <span>Tất Cả Chuyên Mục ({articles.length})</span>
            {!selectedCategory && <ChevronRight className="w-3.5 h-3.5 text-brand-600" />}
          </button>
          {categories.map((c) => {
            const isSelected =
              selectedCategory.toLowerCase() === c.name.toLowerCase() ||
              selectedCategory.toLowerCase() === c.slug.toLowerCase();
            return (
              <button
                key={c.id}
                onClick={() => { setSelectedCategory(c.name); setCurrentPage(1); }}
                className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
                  isSelected
                    ? 'text-brand-600 font-bold bg-brand-50'
                    : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate pr-1">• {c.shortName}</span>
                {isSelected && <ChevronRight className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Đặc trưng Học thuật & Thực hành */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Định Dạng Học Tập</h4>
        <div className="space-y-2 text-xs text-ink-700">
          <label
            onClick={() => { setOnlyExercise(!onlyExercise); setCurrentPage(1); }}
            className="flex items-center gap-2 cursor-pointer hover:text-brand-600"
          >
            <span className={`w-3.5 h-3.5 border rounded flex items-center justify-center shrink-0 ${
              onlyExercise ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
            }`}>
              {onlyExercise && <Check className="w-2.5 h-2.5 stroke-[3]" />}
            </span>
            <span>Có Bài Tập Thực Hành</span>
          </label>
        </div>
      </div>

      {/* 3. Chủ đề chuyên sâu */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Chủ Đề Kỹ Năng</h4>
        <div className="space-y-1 text-xs max-h-56 overflow-y-auto pr-1">
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
        <div className="pt-2">
          <button
            onClick={handleClearFilters}
            className="w-full py-2 bg-ink-900 hover:bg-ink-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>XÓA TẤT CẢ BỘ LỌC</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-surface-100 min-h-screen py-5 text-ink-900">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Breadcrumbs */}
        <div className="text-xs text-ink-500 mb-4 flex items-center gap-1.5">
          <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
          <ChevronRight className="w-3 h-3 text-ink-400" />
          <span className="text-ink-700 font-semibold">Thư Viện Bài Viết Marketing</span>
          {selectedCategory && (
            <>
              <ChevronRight className="w-3 h-3 text-ink-400" />
              <span className="text-ink-900 font-bold">{selectedCategory}</span>
            </>
          )}
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block w-60 shrink-0 bg-white border border-slate-200/90 p-4 rounded-xl shadow-soft">
            {FilterSidebar}
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden w-full flex items-center justify-between bg-white border border-slate-200/90 p-3 rounded-xl shadow-soft">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 text-white font-bold text-xs rounded-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>BỘ LỌC CHỦ ĐỀ {hasActiveFilters ? '(Đang lọc)' : ''}</span>
            </button>
            <span className="text-xs text-ink-600 font-semibold">
              {filteredArticles.length} bài viết
            </span>
          </div>

          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
              <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <span className="font-bold text-sm text-brand-600">BỘ LỌC BÀI VIẾT</span>
                    <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                      <X className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>
                  {FilterSidebar}
                </div>
                <div className="pt-3 border-t mt-4">
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="w-full py-2.5 bg-brand-600 text-white font-bold text-xs uppercase rounded-lg"
                  >
                    Xem {filteredArticles.length} bài viết
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT COLUMN */}
          <section className="flex-1 min-w-0 w-full space-y-3">
            {/* In-Catalog Search Bar */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchTerm(val);
                    setCurrentPage(1);
                    const newParams = new URLSearchParams(searchParams);
                    if (val.trim()) {
                      newParams.set('q', val.trim());
                    } else {
                      newParams.delete('q');
                    }
                    setSearchParams(newParams, { replace: true });
                  }}
                  placeholder="Tìm kiếm nhanh bài viết theo từ khóa (có dấu hoặc không dấu)..."
                  className="w-full pl-9 pr-8 py-2 text-xs border border-slate-200 rounded-lg text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                />
                {searchTerm && (
                  <button
                    onClick={handleRemoveSearchTerm}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="text-xs text-ink-500 font-medium w-full sm:w-auto text-right flex items-center justify-between sm:justify-end gap-2">
                <span>Đang hiển thị:</span>
                <span className="font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200/60">
                  {filteredArticles.length} bài viết
                </span>
              </div>
            </div>

            {/* Sort Bar */}
            <div className="bg-slate-200/70 p-3 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-ink-600 font-medium mr-1">Sắp xếp theo:</span>
                <button
                  onClick={() => setSortBy('latest')}
                  className={`px-4 py-2 rounded font-semibold shadow-xs transition-all ${
                    sortBy === 'latest'
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-ink-800 hover:bg-white/80'
                  }`}
                >
                  Mới nhất
                </button>
                <button
                  onClick={() => setSortBy('practical')}
                  className={`px-4 py-2 rounded font-semibold shadow-xs transition-all flex items-center gap-1 ${
                    sortBy === 'practical'
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-ink-800 hover:bg-white/80'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ưu tiên Bài tập thực hành</span>
                </button>
                <button
                  onClick={() => setSortBy('academic')}
                  className={`px-4 py-2 rounded font-semibold shadow-xs transition-all flex items-center gap-1 ${
                    sortBy === 'academic'
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-ink-800 hover:bg-white/80'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Có trích dẫn nghiên cứu</span>
                </button>
              </div>

              {/* Mini Pagination */}
              <div className="flex items-center gap-2">
                <span className="text-brand-600 font-bold">{currentPage}</span>
                <span className="text-ink-400">/{totalPages}</span>
                <div className="flex items-center border border-slate-300 rounded overflow-hidden bg-white">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="p-1.5 hover:bg-slate-100 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <div className="w-[1px] h-4 bg-slate-200"></div>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="p-1.5 hover:bg-slate-100 disabled:opacity-40"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-1.5 bg-white p-2.5 rounded-lg border border-slate-200 text-xs">
                <span className="text-ink-500 font-medium">Đang lọc:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 border border-brand-200 text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    <span>{selectedCategory}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('')} />
                  </span>
                )}
                {selectedTopic && (
                  <span className="inline-flex items-center gap-1 border border-brand-200 text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    <span>{selectedTopic}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedTopic('')} />
                  </span>
                )}
                {selectedTag && (
                  <span className="inline-flex items-center gap-1 border border-brand-200 text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    <span>Thẻ: {selectedTag}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedTag('')} />
                  </span>
                )}
                {onlyExercise && (
                  <span className="inline-flex items-center gap-1 border border-brand-200 text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    <span>Có bài tập thực hành</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setOnlyExercise(false)} />
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 border border-slate-300 text-ink-800 bg-slate-50 px-2 py-0.5 rounded">
                    <span>"{searchTerm}"</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={handleRemoveSearchTerm} />
                  </span>
                )}
              </div>
            )}

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-3.5">
                {paginatedArticles.map((item) => (
                  <ArticleCard key={item.id} article={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-ink-900">Không tìm thấy bài viết phù hợp</h3>
                <p className="mt-1 text-xs text-ink-500 max-w-sm mx-auto">
                  Hãy thử tìm bằng từ khóa chung hơn hoặc xóa bớt bộ lọc bên trái.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase rounded-lg shadow-xs"
                >
                  Xóa toàn bộ bộ lọc
                </button>
              </div>
            )}

            {/* Bottom Pagination */}
            {totalPages > 1 && (
              <div className="py-8 flex items-center justify-center gap-2 flex-wrap">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
                  className="p-2 border border-slate-300 bg-white text-ink-600 rounded hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => { setCurrentPage(pNum); window.scrollTo(0, 0); }}
                      className={`w-9 h-9 text-xs font-bold rounded transition-all ${
                        currentPage === pNum
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-ink-700 hover:bg-slate-50'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => { setCurrentPage((p) => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
                  className="p-2 border border-slate-300 bg-white text-ink-600 rounded hover:bg-slate-50 disabled:opacity-40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

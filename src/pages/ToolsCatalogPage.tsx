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
  Wrench,
  Bot,
  Flag,
} from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { marketingTools, toolCategories } from '../data/tools';
import { aiTools } from '../data/aiTools';
import { useSEO } from '../utils/useSEO';
import { matchTool } from '../utils/search';

export const ToolsCatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('cat') || '';
  const initialPricing = searchParams.get('pricing') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCat, setSelectedCat] = useState(initialCat);
  const [selectedPricing, setSelectedPricing] = useState(initialPricing);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'free_first' | 'name'>('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
    setSelectedCat(searchParams.get('cat') || '');
    setSelectedPricing(searchParams.get('pricing') || '');
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCat, selectedPricing, selectedLevel, sortBy]);

  useSEO({
    title: 'Sàn Công Cụ Digital Marketing & AI Cho Sinh Viên — Marketing2Student',
    description: `Khám phá ${marketingTools.length}+ công cụ Digital Marketing, AI Content, SEO, Đo lường GA4 và Tự động hóa được ThS. Trần Thanh Tùng tuyển chọn và thẩm định cho sinh viên.`,
    canonicalUrl: 'https://marketing2student.com/cong-cu',
    keywords: ['công cụ marketing', 'AI tools marketing', 'công cụ SEO miễn phí', 'GA4', 'Meta Ad Library', 'marketing2student'],
    jsonLdSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Sàn Công Cụ Digital Marketing & AI Cho Sinh Viên — Marketing2Student',
        description: `Danh mục ${marketingTools.length}+ công cụ Digital Marketing và AI đã qua thẩm định EEAT dành cho sinh viên và Marketer thực chiến.`,
        url: 'https://marketing2student.com/cong-cu',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: marketingTools.length,
          itemListElement: marketingTools.map((t, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: t.name,
            description: t.tagline,
            url: `https://marketing2student.com/cong-cu/${t.slug}`,
          })),
        },
      },
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
            name: 'Sàn Công Cụ Marketing & AI',
            item: 'https://marketing2student.com/cong-cu',
          },
        ],
      },
    ],
  });

  const filteredTools = useMemo(() => {
    return marketingTools
      .filter((t) => {
        const matchesSearch = matchTool(t, searchTerm);
        const matchesCat =
          !selectedCat ||
          t.categorySlug === selectedCat ||
          t.category.toLowerCase() === selectedCat.toLowerCase();
        const matchesPricing = !selectedPricing || t.pricing === selectedPricing;
        const matchesLevel = !selectedLevel || t.level === selectedLevel;
        return matchesSearch && matchesCat && matchesPricing && matchesLevel;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
          return a.id - b.id;
        }
        if (sortBy === 'free_first') {
          const rank = (p: string) => (p === 'Miễn phí 100%' ? 0 : p === 'Mã nguồn mở' ? 1 : p === 'Freemium' ? 2 : 3);
          return rank(a.pricing) - rank(b.pricing);
        }
        return a.name.localeCompare(b.name);
      });
  }, [searchTerm, selectedCat, selectedPricing, selectedLevel, sortBy]);

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage) || 1;
  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTools.slice(start, start + itemsPerPage);
  }, [filteredTools, currentPage]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCat('');
    setSelectedPricing('');
    setSelectedLevel('');
    setCurrentPage(1);
    setSearchParams({});
  };

  const hasActiveFilters = Boolean(searchTerm || selectedCat || selectedPricing || selectedLevel);

  const FilterSidebar = (
    <div className="space-y-5 text-ink-800">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200 font-extrabold text-xs uppercase tracking-wider text-ink-900">
        <Filter className="w-4 h-4 text-brand-600" />
        <span>BỘ LỌC CÔNG CỤ</span>
      </div>

      {/* Nhóm công cụ */}
      <div>
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Nhóm Công Cụ</h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => setSelectedCat('')}
            className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
              !selectedCat ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
            }`}
          >
            <span>Tất cả nhóm ({marketingTools.length})</span>
            {!selectedCat && <ChevronRight className="w-3.5 h-3.5 text-brand-600" />}
          </button>
          {toolCategories.map((c) => {
            const isActive = selectedCat === c.slug || selectedCat === c.name;
            const catCount = marketingTools.filter((t) => t.categorySlug === c.slug).length;
            return (
              <button
                key={c.id}
                onClick={() => { setSelectedCat(c.slug); setCurrentPage(1); }}
                className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
                  isActive ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate pr-1">• {c.name} ({catCount})</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chi phí */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Chi Phí & Bản Quyền</h4>
        <div className="space-y-1.5 text-xs">
          {['Miễn phí 100%', 'Freemium', 'Mã nguồn mở', 'Dùng thử / Trả phí'].map((p) => (
            <label
              key={p}
              onClick={() => setSelectedPricing(selectedPricing === p ? '' : p)}
              className={`flex items-center gap-2 py-1 px-1.5 rounded cursor-pointer transition-colors ${
                selectedPricing === p ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:bg-slate-50'
              }`}
            >
              <span
                className={`w-3.5 h-3.5 border rounded flex items-center justify-center shrink-0 ${
                  selectedPricing === p ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
                }`}
              >
                {selectedPricing === p && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </span>
              <span>{p}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Trình độ */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Mức Độ Tiếp Cận</h4>
        <div className="space-y-1.5 text-xs">
          {['Cơ bản', 'Trung bình', 'Nâng cao'].map((lvl) => (
            <label
              key={lvl}
              onClick={() => setSelectedLevel(selectedLevel === lvl ? '' : lvl)}
              className={`flex items-center gap-2 py-1 px-1.5 rounded cursor-pointer transition-colors ${
                selectedLevel === lvl ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:bg-slate-50'
              }`}
            >
              <span
                className={`w-3.5 h-3.5 border rounded flex items-center justify-center shrink-0 ${
                  selectedLevel === lvl ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
                }`}
              >
                {selectedLevel === lvl && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </span>
              <span>{lvl}</span>
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
            <span>XÓA BỘ LỌC</span>
          </button>
        </div>
      )}

      {/* Cross-link to AI Tools Directory */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          to="/ai-tools"
          className="block p-3 rounded-xl bg-gradient-to-br from-[#1c244b] to-[#046bd2] text-white shadow-xs hover:opacity-95 transition-opacity space-y-1"
        >
          <div className="flex items-center justify-between text-xs font-extrabold">
            <span className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-amber-300" />
              <span>Sàn AI Tools ({aiTools.length}+)</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-[11px] text-slate-200 leading-snug">
            Tìm ChatGPT, NotebookLM, Tạo ảnh/Video AI, Làm Slide & Vibe Coding tại Sàn AI riêng biệt.
          </p>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-surface-100 min-h-screen pb-16 text-ink-900">
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/90 py-7 shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-ink-500 mb-3">
            <Link to="/" className="text-brand-600 hover:underline">Trang chủ</Link>
            <span>›</span>
            <span className="text-ink-900 font-bold">Sàn Công Cụ Marketing & AI</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-100 text-ink-900 text-[10px] font-black uppercase tracking-wider mb-1.5">
                <Wrench className="w-3.5 h-3.5 text-brand-600" />
                <span>MARKETING TOOLS DIRECTORY FOR STUDENTS</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">
                Sàn Công Cụ Digital Marketing & Martech Tuyển Chọn
              </h1>
              <p className="text-xs sm:text-sm text-ink-600 mt-1 max-w-2xl leading-relaxed">
                Tổng hợp, phân loại và thẩm định {marketingTools.length}+ nền tảng SEO, Đo lường GA4, Thiết kế, TMĐT, Quảng cáo, PR & CRM — nói rõ chi phí, giới hạn bản miễn phí và mẹo áp dụng vào đồ án.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-brand-50/80 p-3.5 rounded-xl border border-brand-200 self-start md:self-auto">
              <div className="text-center px-2">
                <div className="text-lg font-black text-brand-600">{marketingTools.length}+</div>
                <div className="text-[10px] uppercase text-ink-600 font-bold">Công cụ chuẩn</div>
              </div>
              <div className="w-px h-8 bg-brand-200" />
              <div className="text-center px-2">
                <div className="text-lg font-black text-emerald-600">EEAT</div>
                <div className="text-[10px] uppercase text-ink-600 font-bold">Minh bạch</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Marketplace Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pt-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-60 shrink-0 bg-white border border-slate-200/90 p-4 rounded-xl shadow-soft">
            {FilterSidebar}
          </aside>

          {/* Mobile Filter Bar */}
          <div className="lg:hidden w-full flex items-center justify-between bg-white border border-slate-200/90 p-3 rounded-xl shadow-soft">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 text-white font-bold text-xs rounded-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>BỘ LỌC CÔNG CỤ {hasActiveFilters ? '(Đang lọc)' : ''}</span>
            </button>
            <span className="text-xs text-ink-600 font-semibold">{filteredTools.length} công cụ</span>
          </div>

          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
              <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <span className="font-bold text-sm text-brand-600">BỘ LỌC CÔNG CỤ</span>
                    <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                      <X className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>
                  {FilterSidebar}
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-2.5 bg-brand-600 text-white font-bold text-xs uppercase rounded-lg mt-4"
                >
                  Xem {filteredTools.length} công cụ
                </button>
              </div>
            </div>
          )}

          {/* Right Grid */}
          <section className="flex-1 min-w-0 w-full space-y-3">
            {/* Search & Count */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm GA4, Canva, Semrush, Heatmap, AI viết bài..."
                  className="w-full pl-9 pr-8 py-2 text-xs border border-slate-200 rounded-lg text-ink-900 focus:outline-none focus:border-brand-600"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="text-xs text-ink-500 font-medium">
                Hiển thị <span className="font-bold text-brand-600">{filteredTools.length}</span> công cụ
              </div>
            </div>

            {/* Sort Bar */}
            <div className="bg-slate-200/70 p-3 rounded-lg flex flex-wrap items-center gap-2 text-xs">
              <span className="text-ink-600 font-medium mr-1">Sắp xếp:</span>
              <button
                onClick={() => setSortBy('featured')}
                className={`px-3.5 py-1.5 rounded font-semibold transition-all flex items-center gap-1 ${
                  sortBy === 'featured' ? 'bg-brand-600 text-white shadow-xs' : 'bg-white text-ink-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Khuyên dùng cho Sinh viên</span>
              </button>
              <button
                onClick={() => setSortBy('free_first')}
                className={`px-3.5 py-1.5 rounded font-semibold transition-all ${
                  sortBy === 'free_first' ? 'bg-brand-600 text-white shadow-xs' : 'bg-white text-ink-800'
                }`}
              >
                Miễn phí lên trước
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-3.5 py-1.5 rounded font-semibold transition-all ${
                  sortBy === 'name' ? 'bg-brand-600 text-white shadow-xs' : 'bg-white text-ink-800'
                }`}
              >
                Tên A–Z
              </button>
              <button
                onClick={() => {
                  setSelectedCat(selectedCat === 'vietnam-martech' ? '' : 'vietnam-martech');
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded font-bold transition-all flex items-center gap-1 ml-auto ${
                  selectedCat === 'vietnam-martech'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Công cụ Việt Nam ({marketingTools.filter((t) => t.categorySlug === 'vietnam-martech').length})</span>
              </button>
            </div>

            {/* Tools Grid */}
            {paginatedTools.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5">
                  {paginatedTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="py-6 flex items-center justify-center gap-2 flex-wrap">
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
              </>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-slate-200 shadow-soft">
                <Wrench className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-ink-900">Không tìm thấy công cụ phù hợp</h3>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-5 py-2 bg-brand-600 text-white text-xs font-bold rounded-lg uppercase"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

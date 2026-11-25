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
  Bot,
  Wrench,
  Flag,
  GraduationCap,
} from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { aiTools, aiToolCategories } from '../data/aiTools';
import { marketingTools } from '../data/tools';
import { useSEO } from '../utils/useSEO';
import { matchTool } from '../utils/search';

export const AiToolsCatalogPage: React.FC = () => {
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
    title: 'Sàn AI Tools Cho Sinh Viên, NCKH & Sáng Tạo — Marketing2Student',
    description: `Khám phá ${aiTools.length}+ công cụ Trí tuệ Nhân tạo (LLM, AI Nghiên cứu khoa học, Tạo ảnh/Video/Nhạc, Làm Slide, Vibe Coding & AI Agents) đã thẩm định EEAT kèm ưu đãi .edu.vn.`,
    canonicalUrl: 'https://marketing2student.com/ai-tools',
    keywords: [
      'sàn ai tools',
      'công cụ AI miễn phí cho sinh viên',
      'AI nghiên cứu khoa học',
      'ChatGPT',
      'Claude',
      'NotebookLM',
      'Vibe Coding',
      'marketing2student',
    ],
    jsonLdSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Sàn AI Tools Cho Sinh Viên, NCKH & Sáng Tạo — Marketing2Student',
        description: `Danh mục ${aiTools.length}+ công cụ AI toàn diện đã qua thẩm định EEAT về chi phí, hỗ trợ tiếng Việt, đặc quyền sinh viên .edu.vn và hướng dẫn Prompt thực chiến.`,
        url: 'https://marketing2student.com/ai-tools',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: aiTools.length,
          itemListElement: aiTools.map((t, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: t.name,
            description: t.tagline,
            url: `https://marketing2student.com/ai-tools/${t.slug}`,
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
            name: 'Sàn AI Tools',
            item: 'https://marketing2student.com/ai-tools',
          },
        ],
      },
    ],
  });

  const filteredTools = useMemo(() => {
    return aiTools
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
        <span>BỘ LỌC SÀN AI TOOLS</span>
      </div>

      {/* Nhóm công cụ AI */}
      <div>
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Chuyên Mục AI</h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => {
              setSelectedCat('');
              setCurrentPage(1);
            }}
            className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
              !selectedCat ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
            }`}
          >
            <span>Tất cả công cụ AI ({aiTools.length})</span>
            {!selectedCat && <ChevronRight className="w-3.5 h-3.5 text-brand-600" />}
          </button>
          {aiToolCategories.map((c) => {
            const isActive = selectedCat === c.slug || selectedCat === c.name;
            const catCount = aiTools.filter((t) => t.categorySlug === c.slug).length;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCat(c.slug);
                  setCurrentPage(1);
                }}
                className={`w-full flex items-center justify-between py-1.5 px-2 rounded text-left transition-colors ${
                  isActive ? 'text-brand-600 font-bold bg-brand-50' : 'text-ink-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate pr-1">
                  • {c.name} ({catCount})
                </span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chi phí */}
      <div className="pt-3 border-t border-slate-200">
        <h4 className="text-xs font-bold uppercase mb-2 text-ink-900">Chi Phí & Hạn Mức</h4>
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

      {/* Cross-link to Martech Tools Directory */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          to="/cong-cu"
          className="block p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-300 transition-colors space-y-1"
        >
          <div className="flex items-center justify-between text-xs font-extrabold text-ink-900">
            <span className="flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-brand-600" />
              <span>Sàn Công Cụ Martech</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
          </div>
          <p className="text-[11px] text-ink-500 leading-snug">
            Tra cứu thêm {marketingTools.length}+ công cụ SEO, GA4, Ads, CRM, TMĐT & Make-in-VN.
          </p>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-surface-100 min-h-screen pb-16 text-ink-900">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1c244b] via-[#1e2d67] to-[#046bd2] text-white border-b border-brand-900 py-7 shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-brand-100 mb-3">
            <Link to="/" className="hover:underline font-semibold">
              Trang chủ
            </Link>
            <span>›</span>
            <span className="text-white font-bold">Sàn AI Tools ({aiTools.length}+)</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/15 border border-white/20 text-white text-[10px] font-black uppercase tracking-wider mb-2">
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>AI TOOLS DIRECTORY FOR STUDENTS & RESEARCHERS</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sàn AI Tools Toàn Diện — Học Tập, NCKH, Sáng Tạo & Vibe Coding
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 mt-1.5 max-w-3xl leading-relaxed">
                Hệ sinh thái {aiTools.length}+ công cụ Trí tuệ Nhân tạo tuyển chọn: ghi rõ hạn mức miễn phí hàng ngày, đặc quyền email sinh viên (.edu.vn), độ chuẩn tiếng Việt và mẫu câu lệnh thực hành.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/20 self-start md:self-auto shrink-0">
              <div className="text-center px-2">
                <div className="text-lg font-black text-amber-300">{aiTools.length}+</div>
                <div className="text-[10px] uppercase text-slate-200 font-bold">AI Tools</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center px-2">
                <div className="text-lg font-black text-emerald-300">{aiToolCategories.length}</div>
                <div className="text-[10px] uppercase text-slate-200 font-bold">Chuyên mục</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Marketplace Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pt-6">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 bg-white border border-slate-200/90 p-4 rounded-xl shadow-soft">
            {FilterSidebar}
          </aside>

          {/* Mobile Filter Bar */}
          <div className="lg:hidden w-full flex items-center justify-between bg-white border border-slate-200/90 p-3 rounded-xl shadow-soft">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 text-white font-bold text-xs rounded-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>BỘ LỌC AI TOOLS {hasActiveFilters ? '(Đang lọc)' : ''}</span>
            </button>
            <span className="text-xs text-ink-600 font-semibold">{filteredTools.length} công cụ AI</span>
          </div>

          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
              <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <span className="font-bold text-sm text-brand-600">BỘ LỌC SÀN AI TOOLS</span>
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
                  Xem {filteredTools.length} công cụ AI
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
                  placeholder="Tìm NotebookLM, Rayyan, VOSviewer, ATLAS.ti, ReciteWorks, AI Hay, SciSpace..."
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
                Hiển thị <span className="font-bold text-brand-600">{filteredTools.length}</span> công cụ AI
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
              <div className="flex flex-wrap items-center gap-2 ml-auto">
                <button
                  onClick={() => {
                    setSelectedCat(selectedCat === 'ai-research-academic' ? '' : 'ai-research-academic');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded font-bold transition-all flex items-center gap-1 ${
                    selectedCat === 'ai-research-academic'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>AI NCKH ({aiTools.filter((t) => t.categorySlug === 'ai-research-academic').length})</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCat(selectedCat === 'vietnam-ai-tools' ? '' : 'vietnam-ai-tools');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded font-bold transition-all flex items-center gap-1 ${
                    selectedCat === 'vietnam-ai-tools'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>AI Việt Nam ({aiTools.filter((t) => t.categorySlug === 'vietnam-ai-tools').length})</span>
                </button>
              </div>
            </div>

            {/* AI Tools Grid */}
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
                      onClick={() => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        window.scrollTo(0, 0);
                      }}
                      className="p-2 border border-slate-300 bg-white text-ink-600 rounded hover:bg-slate-50 disabled:opacity-40"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pNum = i + 1;
                      return (
                        <button
                          key={pNum}
                          onClick={() => {
                            setCurrentPage(pNum);
                            window.scrollTo(0, 0);
                          }}
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
                      onClick={() => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        window.scrollTo(0, 0);
                      }}
                      className="p-2 border border-slate-300 bg-white text-ink-600 rounded hover:bg-slate-50 disabled:opacity-40"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-slate-200 shadow-soft">
                <Bot className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-ink-900">Không tìm thấy công cụ AI phù hợp</h3>
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

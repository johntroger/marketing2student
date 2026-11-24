import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Menu, 
  X,
  ShieldCheck,
  LogIn,
  LogOut,
  User as UserIcon,
  Clock,
  ArrowRight,
  ExternalLink,
  Youtube,
  CheckSquare,
  Wrench
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { articles } from '../data/articles';
import { marketingTools } from '../data/tools';
import { searchArticles, searchTools } from '../utils/search';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch: _onOpenSearch }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signInWithGoogle, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === '/blog') {
      const q = searchParams.get('q') || '';
      setSearchQuery(q);
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent, customQuery?: string) => {
    e.preventDefault();
    const q = (customQuery !== undefined ? customQuery : searchQuery).trim();
    setIsSearchFocused(false);
    if (q) {
      navigate(`/blog?q=${encodeURIComponent(q)}`);
    } else {
      navigate('/blog');
    }
  };

  const handleSelectSuggestion = (slug: string) => {
    setIsSearchFocused(false);
    navigate(`/${slug}`);
  };

  const searchResults = searchQuery.trim() ? searchArticles(articles, searchQuery, 4) : [];
  const toolResults = searchQuery.trim() ? searchTools(marketingTools, searchQuery, 3) : [];

  const trendingTags = [
    { label: 'Google Analytics 4', q: 'GA4' },
    { label: 'ChatGPT & Claude', q: 'ChatGPT' },
    { label: 'Meta Ad Library', q: 'Meta Ad' },
    { label: 'AI Marketing', q: 'AI Marketing' },
    { label: 'Semrush & SEO', q: 'SEO' },
    { label: 'Canva & CapCut', q: 'Canva' },
    { label: 'HubSpot CRM', q: 'HubSpot' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/90 shadow-xs">
      {/* Top Signature Pastel Sky-Blue Utility Bar (#D1EFFF) - Full Width, Single Clean Line */}
      <div className="w-full bg-brand-100 border-b border-brand-200/80 text-[11px] font-medium hidden lg:block text-ink-900">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="font-bold text-ink-900">
              ThS. Trần Thanh Tùng • Giảng viên Marketing (NTTU)
            </span>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              href="https://www.youtube.com/watch?v=-FFQdJ3918M&list=PLKmW2URrf3HjXe1Xv5nUlyBtuPmyE8lSt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 transition-colors flex items-center gap-1 font-semibold"
            >
              <Youtube className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Khóa học Digital Marketing</span>
            </a>
            <span className="text-brand-600/35">|</span>
            <a
              href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 transition-colors flex items-center gap-1"
            >
              <CheckSquare className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>Trắc nghiệm Digital Marketing</span>
            </a>
            <span className="text-brand-600/35">|</span>
            <a
              href="https://vneconomics.com/kiem-tra-kien-thuc-e-marcomme/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 transition-colors"
            >
              <span>Trắc nghiệm E-Marcomme</span>
            </a>
            <span className="text-brand-600/35">|</span>
            <a
              href="https://vneconomics.com/kinh-te-ky-thuat-so/digital-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand-600 transition-colors font-semibold"
            >
              <span>Nghiên cứu VNEconomics</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Search & Brand Bar - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pt-2.5 pb-2">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-white border-2 border-brand-200 flex items-center justify-center p-0.5 shadow-2xs group-hover:scale-105 group-hover:border-brand-600 transition-all overflow-hidden">
              <img src="/logo.jpg" alt="Marketing2Student - ThS. Trần Thanh Tùng" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-ink-900 group-hover:text-brand-600 transition-colors whitespace-nowrap">
                  Marketing2Student
                </span>
                <span className="bg-brand-600 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-wide shrink-0">
                  ACADEMY
                </span>
              </div>
              <p className="text-[10px] text-ink-600 font-medium tracking-wide mt-1 hidden sm:block whitespace-nowrap">
                Sàn Công Cụ Marketing & Thư Viện Thực Chiến
              </p>
            </div>
          </Link>

          {/* Desktop Search Box with Instant Autocomplete */}
          <div ref={searchContainerRef} className="flex-1 min-w-0 max-w-3xl hidden sm:block relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center bg-white border-2 border-brand-600 rounded-xl overflow-hidden shadow-2xs focus-within:border-brand-700 transition-colors">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsSearchFocused(false);
                  }}
                  placeholder="Tìm công cụ (GA4, Canva, Semrush, AI...) hoặc bài viết Marketing..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchFocused(true);
                    }}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full mr-1 transition-colors"
                    title="Xóa tìm kiếm"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-5 sm:px-6 py-2.5 font-semibold text-xs sm:text-sm flex items-center justify-center transition-colors shrink-0"
                >
                  <Search className="w-4 h-4 mr-1.5" />
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </form>

            {/* Live Autocomplete Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-2xl border border-slate-200/90 py-2.5 z-50 text-xs max-h-96 overflow-y-auto">
                {searchQuery.trim() ? (
                  (toolResults.length > 0 || searchResults.length > 0) ? (
                    <div>
                      {toolResults.length > 0 && (
                        <div>
                          <div className="px-3.5 pb-1.5 pt-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-600 border-b border-slate-100 flex items-center justify-between">
                            <span>Công cụ Marketing ({toolResults.length})</span>
                            <span className="text-[10px] lowercase font-normal text-slate-400">bấm xem chi tiết</span>
                          </div>
                          <div className="divide-y divide-slate-100">
                            {toolResults.map((tool) => (
                              <div
                                key={tool.id}
                                onClick={() => {
                                  setIsSearchFocused(false);
                                  navigate(`/cong-cu/${tool.slug}`);
                                }}
                                className="px-3.5 py-2 hover:bg-brand-50/50 cursor-pointer flex items-center justify-between gap-3 transition-colors group"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <Wrench className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                                    <span className="font-bold text-ink-900 group-hover:text-brand-600 truncate">{tool.name}</span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                                      {tool.pricing}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-ink-500 truncate mt-0.5">{tool.tagline}</p>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 shrink-0" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {searchResults.length > 0 && (
                        <div className={toolResults.length > 0 ? 'mt-1.5 border-t border-slate-200 pt-1.5' : ''}>
                          <div className="px-3.5 pb-1.5 pt-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                            <span>Bài viết kiến thức ({searchResults.length})</span>
                            <span className="text-[10px] lowercase font-normal text-slate-400">bấm để đọc ngay</span>
                          </div>
                          <div className="divide-y divide-slate-100">
                            {searchResults.map((item) => (
                              <div
                                key={item.id}
                                onClick={() => handleSelectSuggestion(item.slug)}
                                className="px-3.5 py-2.5 hover:bg-brand-50/50 cursor-pointer flex items-center justify-between gap-3 transition-colors group"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-ink-900 group-hover:text-brand-600 transition-colors truncate">
                                      {item.title}
                                    </span>
                                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 shrink-0">
                                      {item.category.split('&')[0].trim()}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-ink-500 truncate mt-0.5">
                                    {item.excerpt}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0 text-ink-500 font-semibold text-[11px]">
                                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                                  <span>{item.readTime}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 transition-colors ml-1" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-2 px-3 border-t border-slate-100 mt-1 flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSearchFocused(false);
                            navigate(`/cong-cu?q=${encodeURIComponent(searchQuery.trim())}`);
                          }}
                          className="flex-1 py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Tìm trong Sàn Công Cụ</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleSearchSubmit(e)}
                          className="flex-1 py-2 px-3 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Tìm trong {articles.length} Bài viết</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-ink-600 font-medium">Không tìm thấy bài viết khớp với "{searchQuery}"</p>
                      <p className="text-[11px] text-ink-400 mt-1">Thử từ khóa khác hoặc tìm trong toàn bộ kho bài viết</p>
                      <button
                        type="button"
                        onClick={(e) => handleSearchSubmit(e)}
                        className="mt-2.5 px-4 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold"
                      >
                        Xem toàn bộ {articles.length} bài viết
                      </button>
                    </div>
                  )
                ) : (
                  <div className="px-3.5 py-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Chủ đề Marketing được quan tâm
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {trendingTags.map((t) => (
                        <button
                          key={t.q}
                          type="button"
                          onClick={(e) => {
                            setSearchQuery(t.q);
                            handleSearchSubmit(e, t.q);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-ink-700 text-xs font-medium transition-colors"
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Trending Suggestions Ribbon - Clean, no horizontal scrollbar */}
            <div className="hidden lg:flex items-center gap-2.5 mt-1.5 text-[11px] text-ink-500 overflow-hidden">
              <span className="text-ink-400 font-medium shrink-0">Nổi bật:</span>
              <div className="flex items-center gap-2.5 flex-wrap max-h-4 overflow-hidden">
                {trendingTags.map((t) => (
                  <Link
                    key={t.q}
                    to={`/blog?q=${encodeURIComponent(t.q)}`}
                    className="hover:text-brand-600 transition-colors whitespace-nowrap"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Actions: VNEconomics + Auth + Tools Pill + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href="https://store.vneconomics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-700 font-semibold text-xs shadow-2xs transition-colors shrink-0"
              title="Khám phá Sàn Công Cụ Số VibeLab - Vneconomics Store"
            >
              <span>Vneconomics Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || 'Avatar'} 
                      className="w-7 h-7 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xs">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                  )}
                  <span className="hidden xl:inline text-xs font-semibold text-ink-800 max-w-[110px] truncate">
                    {user.displayName || user.email}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="font-bold text-ink-900 truncate">{user.displayName || 'Tài khoản Sinh viên'}</p>
                      <p className="text-[11px] text-ink-500 truncate mt-0.5">{user.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 font-semibold flex items-center gap-2 transition-colors mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-ink-900 font-semibold text-xs shadow-2xs transition-colors"
                title="Đăng nhập với Google"
              >
                <LogIn className="w-3.5 h-3.5 text-brand-600" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </button>
            )}

            {/* Tools Directory Counter Button */}
            <Link 
              to="/cong-cu" 
              className="relative p-2.5 hover:bg-brand-50 rounded-xl transition-colors border border-slate-200/80 bg-white"
              title={`Sàn ${marketingTools.length}+ Công cụ Marketing & AI`}
            >
              <Wrench className="w-5 h-5 text-ink-900" />
              <span className="absolute -top-1.5 -right-1.5 bg-brand-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-2xs">
                {marketingTools.length}
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-ink-900 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div ref={mobileSearchRef} className="sm:hidden mt-2.5 relative">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="flex items-center bg-white border border-brand-600 rounded-xl overflow-hidden shadow-2xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Tìm bài viết AI Marketing, SEO, GA4..."
                className="w-full px-3 py-2 text-xs text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 mr-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="submit"
                className="bg-brand-600 text-white px-3.5 py-2 font-semibold text-xs flex items-center justify-center"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Category & Lab Navigation Ribbon - Full Width */}
      <div className="w-full bg-slate-50/80 border-t border-slate-200/80 text-xs hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-2 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap text-ink-700">
          <div className="flex items-center gap-5 lg:gap-7">
            <Link to="/" className="font-bold text-ink-900 hover:text-brand-600 transition-colors">TRANG CHỦ</Link>
            <Link to="/cong-cu" className="font-extrabold text-brand-600 hover:underline flex items-center gap-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>SÀN CÔNG CỤ ({marketingTools.length}+)</span>
            </Link>
            <Link to="/blog" className="font-bold text-ink-800 hover:text-brand-600 transition-colors">BÀI VIẾT ({articles.length})</Link>
            <Link to="/category/ai-marketing" className="hover:text-brand-600 transition-colors font-medium">AI Marketing</Link>
            <Link to="/category/do-luong-marketing" className="hover:text-brand-600 transition-colors font-medium">Đo lường & GA4</Link>
            <Link to="/category/seo-content-marketing" className="hover:text-brand-600 transition-colors font-medium">SEO & Content</Link>
            <Link to="/category/social-video-marketing" className="hover:text-brand-600 transition-colors font-medium hidden xl:inline">Social & Video</Link>
            <Link to="/gioi-thieu" className="hover:text-brand-600 transition-colors flex items-center gap-1 text-ink-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Giới thiệu Giảng viên</span>
            </Link>
          </div>
          <div className="text-[11px] text-ink-500 hidden lg:block shrink-0">
            <span>Chuẩn học thuật & thực chiến 2026</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2.5 text-sm">
          {!user ? (
            <button
              onClick={() => {
                signInWithGoogle();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-50 border border-brand-200 text-brand-700 font-bold rounded-xl"
            >
              <LogIn className="w-4 h-4" />
              <span>Đăng nhập với Google</span>
            </button>
          ) : (
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-brand-600" />
                <span className="font-bold text-ink-900 text-xs truncate max-w-[200px]">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-rose-600 font-bold"
              >
                Đăng xuất
              </button>
            </div>
          )}

          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-900 font-bold">
            Trang chủ
          </Link>
          <Link to="/cong-cu" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-brand-600 font-extrabold">
            Sàn Công Cụ Marketing & AI ({marketingTools.length}+)
          </Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-900 font-bold">
            Thư viện Bài viết ({articles.length})
          </Link>
          <Link to="/category/ai-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-700">
            • AI Marketing & Tự động hóa
          </Link>
          <Link to="/category/do-luong-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-700">
            • Đo lường & Phân tích Dữ liệu
          </Link>
          <Link to="/category/seo-content-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-700">
            • SEO & Content Marketing
          </Link>
          <Link to="/category/social-video-marketing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-700">
            • Social Media & Video Marketing
          </Link>
          <Link to="/gioi-thieu" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-ink-700">
            Giới thiệu ThS. Trần Thanh Tùng
          </Link>

          <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
            <a
              href="https://www.youtube.com/watch?v=-FFQdJ3918M&list=PLKmW2URrf3HjXe1Xv5nUlyBtuPmyE8lSt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-rose-50 text-rose-700 font-semibold border border-rose-200"
            >
              <span>Khóa học Digital Marketing (YouTube)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://vneconomics.com/kiem-tra-kien-thuc-digital-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-50 text-brand-700 font-semibold border border-brand-200"
            >
              <span>Kiểm tra kiến thức Digital Marketing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

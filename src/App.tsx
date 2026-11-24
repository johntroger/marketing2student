import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogCatalogPage } from './pages/BlogCatalogPage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ToolsCatalogPage } from './pages/ToolsCatalogPage';
import { AiToolsCatalogPage } from './pages/AiToolsCatalogPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { Search, X, Clock } from 'lucide-react';
import { articles } from './data/articles';
import { searchArticles } from './utils/search';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof (window as unknown as { gtag?: Function }).gtag === 'function') {
      (window as unknown as { gtag: Function }).gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}

function QuickSearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() ? searchArticles(articles, query, 8) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-ink-900/60 backdrop-blur-sm">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-ink-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm bài viết AI Marketing, SEO, GA4, UTM..."
            className="w-full py-4 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-400 hover:text-ink-600 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
            {filtered.map((a) => (
              <div
                key={a.id}
                onClick={() => {
                  navigate(`/${a.slug}`);
                  onClose();
                }}
                className="p-3.5 hover:bg-brand-50/40 cursor-pointer flex items-center justify-between transition-colors"
              >
                <div>
                  <h4 className="text-xs font-bold text-ink-900 line-clamp-1">{a.title}</h4>
                  <p className="text-[11px] text-ink-500 line-clamp-1 mt-0.5">{a.excerpt}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-ink-400">• {a.topic}</span>
                  </div>
                </div>
                <div className="flex items-center text-ink-500 text-xs font-medium shrink-0 ml-3">
                  <Clock className="w-3.5 h-3.5 text-brand-600 mr-1" />
                  <span>{a.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        ) : query.trim() ? (
          <div className="p-8 text-center text-xs text-ink-500">
            Không tìm thấy kết quả nào cho "{query}"
          </div>
        ) : (
          <div className="p-4 bg-slate-50 text-[11px] text-ink-400 flex items-center justify-between">
            <span>Gõ từ khóa để tìm trong {articles.length} bài viết Marketing</span>
            <span className="font-mono">ESC để đóng</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar onOpenSearch={() => setSearchOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cong-cu" element={<ToolsCatalogPage />} />
              <Route path="/cong-cu/:slug" element={<ToolDetailPage />} />
              <Route path="/ai-tools" element={<AiToolsCatalogPage />} />
              <Route path="/ai-tools/:slug" element={<ToolDetailPage />} />
              <Route path="/blog" element={<BlogCatalogPage />} />
              <Route path="/tai-nguyen" element={<ToolsCatalogPage />} />

              {/* Category routes (both modern & WordPress legacy /category/:slug) */}
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/danh-muc/:slug" element={<CategoryPage />} />

              {/* Lecturer Profile & EEAT Editorial Methodology */}
              <Route path="/gioi-thieu" element={<AboutPage />} />
              <Route path="/tieu-chi" element={<AboutPage />} />

              {/* Article Detail routes (both /bai-viet/:slug and original WordPress root /:slug) */}
              <Route path="/bai-viet/:slug" element={<ArticleDetailPage />} />
              <Route path="/:slug" element={<ArticleDetailPage />} />

              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <QuickSearchDialog
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
          />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, BookOpen, Sparkles, ArrowUpRight, Tag } from 'lucide-react';
import { Article } from '../types';
import { getArticleCover } from '../utils/imageGenerator';

interface ArticleCardProps {
  article: Article;
  onSelect?: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect }) => {
  const coverUrl = getArticleCover({
    title: article.title,
    category: article.category,
    topic: article.topic,
    readTime: article.readTime,
    featuredImage: article.featuredImage,
  });

  const handleCardClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(article);
    }
  };

  return (
    <article className="group relative bg-white border border-slate-200/90 hover:border-brand-600 rounded-xl shadow-soft hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between overflow-hidden">
      {/* Article Cover Image + Badges */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Link to={`/${article.slug}`} onClick={handleCardClick} className="block w-full h-full">
          <img
            src={coverUrl}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Top-Left: Category Pill */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-ink-900/90 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs backdrop-blur-xs flex items-center gap-1">
            <BookOpen className="w-2.5 h-2.5 text-brand-100" />
            <span>{article.category.split('&')[0].trim()}</span>
          </span>
        </div>

        {/* Bottom Badges: Practical Lab / Academic Citation */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
          {article.hasPracticalExercise ? (
            <span className="bg-brand-600/95 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider flex items-center gap-1 backdrop-blur-xs">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Có bài tập thực hành</span>
            </span>
          ) : (
            <span className="bg-emerald-700/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider flex items-center gap-1 backdrop-blur-xs">
              <ShieldCheck className="w-2.5 h-2.5" />
              <span>EEAT VERIFIED</span>
            </span>
          )}
        </div>
      </div>

      {/* Article Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          {/* Topic & Published Date */}
          <div className="flex items-center justify-between text-[11px] text-ink-500 mb-1">
            <span className="font-semibold text-brand-600 truncate max-w-[155px]">
              {article.topic}
            </span>
            <span className="text-slate-400 text-[10px]">
              {article.publishedAt}
            </span>
          </div>

          {/* Title: 2 lines clamp */}
          <Link
            to={`/${article.slug}`}
            onClick={handleCardClick}
            className="block text-xs sm:text-sm font-bold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug"
            title={article.title}
          >
            {article.title}
          </Link>

          {/* Excerpt */}
          <p className="mt-1.5 text-[11px] text-ink-500 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Footer Meta Row: Read time & Primary Tag */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-ink-600 font-semibold text-[11px]">
            <Clock className="w-3.5 h-3.5 text-brand-600" />
            <span>{article.readTime}</span>
          </div>

          {article.tags && article.tags[0] && (
            <div className="flex items-center gap-1 text-[10px] font-medium text-ink-700 bg-brand-50 border border-brand-200/70 px-2 py-0.5 rounded">
              <Tag className="w-2.5 h-2.5 text-brand-600" />
              <span className="truncate max-w-[95px]">{article.tags[0]}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover action bar */}
      <div className="bg-ink-900 text-white text-center text-xs font-semibold py-1.5 hidden group-hover:flex items-center justify-center gap-1 transition-all">
        <span>Đọc bài phân tích & thực hành</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </article>
  );
};

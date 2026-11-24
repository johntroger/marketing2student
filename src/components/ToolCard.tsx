import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, ArrowUpRight, Wrench, Tag, Bot } from 'lucide-react';
import { MarketingTool } from '../types';
import { getArticleCover } from '../utils/imageGenerator';

interface ToolCardProps {
  tool: MarketingTool;
}

const pricingBadgeColors: Record<MarketingTool['pricing'], string> = {
  'Miễn phí 100%': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Mã nguồn mở': 'bg-teal-50 text-teal-700 border-teal-200',
  'Freemium': 'bg-brand-50 text-brand-700 border-brand-200',
  'Dùng thử / Trả phí': 'bg-amber-50 text-amber-800 border-amber-200',
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const detailPath = tool.isAiTool ? `/ai-tools/${tool.slug}` : `/cong-cu/${tool.slug}`;

  const coverUrl = getArticleCover({
    title: tool.name,
    category: tool.category,
    topic: tool.tagline,
    readTime: tool.pricing,
  });

  return (
    <article className="group relative bg-white border border-slate-200/90 hover:border-brand-600 rounded-xl shadow-soft hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between overflow-hidden">
      {/* Cover */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Link to={detailPath} className="block w-full h-full">
          <img
            src={coverUrl}
            alt={tool.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="absolute top-2 left-2 z-10 flex items-center gap-1">
          <span className="bg-ink-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1 backdrop-blur-xs">
            {tool.isAiTool ? (
              <Bot className="w-2.5 h-2.5 text-indigo-200" />
            ) : (
              <Wrench className="w-2.5 h-2.5 text-brand-100" />
            )}
            <span>{tool.level}</span>
          </span>
        </div>

        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
          {tool.featured && (
            <span className="bg-brand-600/95 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Khuyên dùng</span>
            </span>
          )}
          <span className="bg-emerald-700/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5" />
            <span>EEAT</span>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          <div className="flex items-center justify-between gap-1 text-[10px] mb-1.5">
            <span className="font-semibold text-brand-600 truncate">
              {tool.category}
            </span>
          </div>

          <Link
            to={detailPath}
            className="block text-xs sm:text-sm font-extrabold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-1"
            title={tool.name}
          >
            {tool.name}
          </Link>

          <p className="mt-1 text-[11px] text-ink-500 line-clamp-2 leading-relaxed">
            {tool.excerpt}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 text-[10px]">
          <span className={`font-bold px-2 py-0.5 rounded border truncate ${pricingBadgeColors[tool.pricing]}`}>
            {tool.pricing}
          </span>

          {tool.tags[0] && (
            <span className="inline-flex items-center gap-1 text-ink-600 bg-slate-100 px-2 py-0.5 rounded font-medium truncate">
              <Tag className="w-2.5 h-2.5 text-brand-600 shrink-0" />
              <span className="truncate">{tool.tags[0]}</span>
            </span>
          )}
        </div>
      </div>

      {/* Hover Action Bar */}
      <Link
        to={detailPath}
        className="bg-ink-900 text-white text-center text-xs font-semibold py-1.5 hidden group-hover:flex items-center justify-center gap-1 transition-all"
      >
        <span>Xem đánh giá & hướng dẫn dùng</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  );
};

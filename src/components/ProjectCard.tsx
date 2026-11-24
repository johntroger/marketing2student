import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles, ArrowUpRight, Layers, Users } from 'lucide-react';
import { StudentProject } from '../types';
import { getArticleCover } from '../utils/imageGenerator';

interface ProjectCardProps {
  project: StudentProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const coverUrl = getArticleCover({
    title: project.brandName,
    category: 'AI Marketing & Tự động hóa',
    topic: project.industry,
    readTime: project.semester,
    featuredImage: project.coverImage,
  });

  return (
    <article className="group relative bg-white border border-slate-200/90 hover:border-brand-600 rounded-xl shadow-soft hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Link to={`/du-an-sinh-vien/${project.slug}`} className="block w-full h-full">
          <img
            src={coverUrl}
            alt={project.brandName}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Top-Left Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="bg-ink-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-brand-100" />
            <span>PHÒNG LAB SINH VIÊN</span>
          </span>
        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-2.5 left-2.5">
          <span className="bg-brand-600/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{project.semester}</span>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-600 mb-1">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{project.industry}</span>
          </div>

          <Link
            to={`/du-an-sinh-vien/${project.slug}`}
            className="block text-sm sm:text-base font-extrabold text-ink-900 group-hover:text-brand-600 transition-colors line-clamp-1"
          >
            {project.brandName}
          </Link>

          <p className="mt-1.5 text-xs text-ink-600 line-clamp-2 leading-relaxed">
            {project.excerpt}
          </p>

          {/* Marketing Angles Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.marketingAngles.slice(0, 3).map((angle, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200/60"
              >
                {angle}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-ink-500 text-[11px] truncate">
            <Users className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span className="truncate">{project.studentGroup}</span>
          </div>
          <Link
            to={`/du-an-sinh-vien/${project.slug}`}
            className="text-brand-600 font-bold text-xs flex items-center gap-0.5 shrink-0 group-hover:underline"
          >
            <span>Khám phá</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

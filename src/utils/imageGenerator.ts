/**
 * Dynamic 16:9 SVG Cover Generator for Marketing2Student
 * Used as fallback or custom visual card when an article/project needs a branded 16:9 cover.
 */

interface CoverOptions {
  title: string;
  category: string;
  topic?: string;
  readTime?: string;
  featuredImage?: string;
}

const categoryPalettes: Record<string, { from: string; to: string; accent: string }> = {
  'AI Marketing & Tự động hóa': { from: '#1c244b', to: '#046bd2', accent: '#7cc7ff' },
  'Đo lường & Phân tích Dữ liệu': { from: '#0f172a', to: '#0d9488', accent: '#5eead4' },
  'SEO & Content Marketing': { from: '#1e1b4b', to: '#4338ca', accent: '#a5b4fc' },
  'Social Media & Video Marketing': { from: '#3b0764', to: '#7e22ce', accent: '#d8b4fe' },
  'Quảng cáo số, B2B & Tăng trưởng': { from: '#141d2c', to: '#1d4ed8', accent: '#60a5fa' },
  'Thương hiệu & Hành vi Khách hàng': { from: '#1c244b', to: '#2563eb', accent: '#93c5fd' },
};

export function getArticleCover({ title, category, topic, readTime, featuredImage }: CoverOptions): string {
  if (featuredImage && !featuredImage.startsWith('data:image/gif')) {
    return featuredImage;
  }

  const palette = categoryPalettes[category] || { from: '#1c244b', to: '#046bd2', accent: '#7cc7ff' };
  const badgeLabel = readTime || 'Chuẩn EEAT';

  const cleanTitle = title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const cleanCategory = category.replace(/&/g, '&amp;');
  const cleanTopic = (topic || 'Kiến thức Marketing thực chiến').replace(/&/g, '&amp;');

  const displayTitle = cleanTitle.length > 52 ? cleanTitle.slice(0, 50) + '...' : cleanTitle;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${palette.from}"/>
        <stop offset="100%" stop-color="${palette.to}"/>
      </linearGradient>
      <linearGradient id="glow" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.08"/>
      </pattern>
    </defs>

    <rect width="800" height="450" fill="url(#bg)"/>
    <rect width="800" height="450" fill="url(#glow)"/>
    <rect width="800" height="450" fill="url(#grid)"/>

    <circle cx="700" cy="80" r="140" fill="${palette.accent}" opacity="0.18" filter="blur(30px)"/>
    <circle cx="100" cy="380" r="160" fill="#ffffff" opacity="0.06" filter="blur(40px)"/>

    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="270" height="34" rx="17" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="1" stroke-opacity="0.25"/>
      <text x="18" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="0.4">
        ${cleanCategory}
      </text>

      <rect x="282" y="0" width="120" height="34" rx="17" fill="#d1efff" fill-opacity="0.22" stroke="#d1efff" stroke-width="1" stroke-opacity="0.5"/>
      <text x="300" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#d1efff">
        ${badgeLabel}
      </text>
    </g>

    <g transform="translate(50, 160)">
      <text x="0" y="40" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="31" font-weight="800" fill="#ffffff" letter-spacing="-0.4">
        ${displayTitle}
      </text>
      <rect x="0" y="70" width="80" height="4" rx="2" fill="${palette.accent}"/>
      <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="500" fill="#e2e8f0" opacity="0.92">
        Chủ đề: ${cleanTopic}
      </text>
    </g>

    <g transform="translate(50, 370)">
      <line x1="0" y1="0" x2="700" y2="0" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1"/>
      <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#ffffff" opacity="0.85">
        MARKETING2STUDENT • THƯ VIỆN MARKETING THỰC CHIẾN
      </text>
      <text x="700" y="32" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="${palette.accent}">
        MARKETING2STUDENT.COM
      </text>
    </g>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

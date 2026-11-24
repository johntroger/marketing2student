import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  jsonLdSchemas?: Record<string, any>[];
}

export function useSEO({
  title,
  description,
  keywords,
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://marketing2student.com/',
  ogImage = 'https://marketing2student.com/og-cover.png',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  jsonLdSchemas = [],
}: SEOProps) {
  useEffect(() => {
    document.title = title.includes('Marketing2Student') ? title : `${title} | Marketing2Student`;

    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Marketing2Student — ThS. Trần Thanh Tùng');
    setMetaTag('property', 'og:locale', 'vi_VN');

    if (ogType === 'article') {
      if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
      if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);
      setMetaTag('property', 'article:publisher', 'https://marketing2student.com');
    }

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    const injectedScriptIds: string[] = [];
    document.querySelectorAll('script[data-dynamic-seo="true"]').forEach((el) => el.remove());

    jsonLdSchemas.forEach((schema, idx) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-seo', 'true');
      script.id = `dynamic-jsonld-${idx}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      injectedScriptIds.push(script.id);
    });

    return () => {
      injectedScriptIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [title, description, canonicalUrl, ogImage, ogType, publishedTime, modifiedTime, keywords, jsonLdSchemas]);
}

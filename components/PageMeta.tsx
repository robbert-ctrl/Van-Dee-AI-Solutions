import React, { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

/**
 * PageMeta Component
 * Updates document head meta tags for each page to improve SEO
 * Sets title, description, OG tags, and Twitter cards dynamically
 */
export const PageMeta: React.FC<PageMetaProps> = ({ title, description, path, keywords }) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Van Dee AI Solutions`;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    const fullUrl = `https://vandeeaisolutions.com${path}`;

    // Primary Meta Tags
    updateMeta('description', description);
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Open Graph Tags
    updateMeta('og:title', `${title} | Van Dee AI Solutions`, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', fullUrl, true);
    updateMeta('og:type', 'website', true);

    // Twitter Tags
    updateMeta('twitter:title', `${title} | Van Dee AI Solutions`, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:url', fullUrl, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

  }, [title, description, path, keywords]);

  return null; // This component doesn't render anything visible
};

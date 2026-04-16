import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs Component
 * Renders visible breadcrumb navigation + BreadcrumbList JSON-LD schema
 * for rich snippets in Google search results.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbItems = [{ label: 'Home', path: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path
        ? { item: `https://vandeeaisolutions.com${item.path}` }
        : {}),
    })),
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visible Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="py-3 text-sm text-slate-400"
      >
        <ol className="flex items-center gap-1 flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight size={14} className="text-slate-300 mx-1" />
                )}
                {isLast ? (
                  <span className="text-slate-600 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : item.path ? (
                  <Link
                    to={item.path}
                    className="hover:text-brand-600 transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home size={14} />}
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

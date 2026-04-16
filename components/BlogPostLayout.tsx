import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const ChatWidget = React.lazy(() => import('./ChatWidget').then(module => ({ default: module.ChatWidget })));

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  children: React.ReactNode;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ title, date, readTime, category, slug, children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <main id="main-content" className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: title }]} />

          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 mb-6 transition-colors">
            <ArrowLeft size={14} /> Terug naar blog
          </Link>

          <article className="prose-wrapper">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
              <span className="bg-brand-50 text-brand-600 px-2 py-1 rounded-full font-semibold text-xs">{category}</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              {title}
            </h1>

            <div className="article-content text-slate-700 leading-relaxed">
              {children}
            </div>

            <div className="mt-16 p-8 bg-brand-50 border border-brand-100 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                Klaar om zelf aan de slag te gaan?
              </h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                Doe de gratis AI Readiness Scan en ontdek welke processen in uw bedrijf
                het meeste besparingspotentieel hebben.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/ai-scan"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors"
                >
                  Start de AI Scan <ArrowRight size={18} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 border border-gray-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Hoe wij werken
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>

      <style>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: rgb(30, 41, 59);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .article-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: rgb(30, 41, 59);
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .article-content p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .article-content ul li {
          list-style-type: disc;
        }
        .article-content ol li {
          list-style-type: decimal;
        }
        .article-content a {
          color: rgb(99, 102, 241);
          text-decoration: underline;
        }
        .article-content a:hover {
          color: rgb(79, 70, 229);
        }
        .article-content strong {
          color: rgb(30, 41, 59);
          font-weight: 600;
        }
        .article-content blockquote {
          border-left: 4px solid rgb(99, 102, 241);
          padding-left: 1.25rem;
          font-style: italic;
          color: rgb(71, 85, 105);
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
};

import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

const posts = [
  {
    slug: '5-processen-automatiseren-mkb',
    title: '5 Processen die elk MKB kan Automatiseren met AI',
    excerpt: 'Welke bedrijfsprocessen zijn geschikt voor AI automatisering? Een overzicht van 5 concrete use cases met ROI en implementatietijd per proces.',
    date: '10 april 2026',
    readTime: '7 min',
    category: 'Praktijk',
  },
  {
    slug: 'wat-kost-ai-automatisering',
    title: 'Wat Kost AI Automatisering voor MKB? — Transparante Prijzen',
    excerpt: 'Een eerlijk overzicht van wat AI automatisering werkelijk kost: van kleine projecten (€3.000) tot grotere trajecten (€30.000+). Inclusief voorbeelden.',
    date: '3 april 2026',
    readTime: '6 min',
    category: 'Kosten & ROI',
  },
  {
    slug: 'ai-vs-handmatig-werk',
    title: 'AI Automatisering vs. Handmatig Werk — Het Echte Verschil',
    excerpt: 'Wat is het echte verschil tussen AI automatisering en handmatig werk? Een vergelijking op tijd, kosten, fouten en schaalbaarheid met cijfers.',
    date: '27 maart 2026',
    readTime: '8 min',
    category: 'Inzicht',
  },
];

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Blog — AI Automatisering Inzichten voor MKB"
        description="Praktische artikelen over AI automatisering voor MKB-bedrijven. Leer over ROI, implementatie, veiligheid en kansen. Concrete voorbeelden uit de praktijk."
        path="/blog"
        keywords="AI automatisering blog, AI artikelen MKB, AI tips, workflow automatisering tips, AI inzichten"
      />
      <Header />
      <main id="main-content" className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={[{ label: 'Blog' }]} />

          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="text-brand-600" size={24} />
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Blog & Kennisbank
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Inzichten over AI Automatisering voor MKB
            </h1>
            <p className="text-slate-500 text-lg">
              Praktische artikelen, concrete voorbeelden en eerlijke inzichten over hoe AI
              automatisering MKB-bedrijven helpt tijd en geld te besparen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-brand-200 transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="bg-brand-50 text-brand-600 px-2 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-brand-600 font-semibold text-sm inline-flex items-center gap-1">
                  Lees artikel <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center bg-brand-50 border border-brand-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Wilt u direct aan de slag?
            </h2>
            <p className="text-slate-600 mb-6">
              Doe de gratis AI Readiness Scan en ontdek in 2 minuten welke processen in uw
              bedrijf het meest geschikt zijn voor automatisering.
            </p>
            <Link
              to="/ai-scan"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors"
            >
              Start de Gratis AI Scan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

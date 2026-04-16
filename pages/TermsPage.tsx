import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { Terms } from '../components/Terms';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Algemene Voorwaarden"
        description="Algemene voorwaarden van Van Dee AI Solutions. Duidelijke afspraken over samenwerking, eigendom code, garanties en ondersteuning."
        path="/terms"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: 'Algemene Voorwaarden' }]} />
        </div>
        <Terms />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

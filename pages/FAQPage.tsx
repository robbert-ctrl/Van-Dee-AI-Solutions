import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Veelgestelde Vragen over AI Automatisering"
        description="Antwoorden op alle vragen over AI automatisering voor MKB: veiligheid, ROI, integratie, kosten en garanties. Transparante informatie van Van Dee AI Solutions."
        path="/faq"
        keywords="AI automatisering vragen, ROI AI automatisering, data veiligheid AI, AI integratie MKB, kosten AI automatisering"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: 'Veelgestelde Vragen' }]} />
        </div>
        <FAQ />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { HowItWorks } from '../components/HowItWorks';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Hoe Werkt AI Automatisering? — Ons 3-Stappen Proces"
        description="Van gratis verkenningsgesprek tot werkende AI-automatisering in 3 stappen. Discovery, Development, Deployment. 100% eigendom van de code. Transparant en agile."
        path="/how-it-works"
        keywords="AI implementatie proces, workflow automatisering stappen, AI automatisering MKB, agile AI development, AI integratie bedrijf"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Hoe Het Werkt' }]} />
        </div>
        <HowItWorks />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Over Ons — AI Automatisering Specialist Tiel"
        description="Maak kennis met Robbert van Dee, oprichter van Van Dee AI Solutions in Tiel. AI-automatisering specialist voor MKB-bedrijven. Persoonlijke aanpak, moderne technologie."
        path="/about"
        keywords="AI consultant Tiel, AI specialist Gelderland, workflow automatisering MKB, AI implementatie Nederland, Robbert van Dee"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Over Ons' }]} />
        </div>
        <About />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

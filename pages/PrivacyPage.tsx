import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { Privacy } from '../components/Privacy';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Privacybeleid"
        description="Lees hoe Van Dee AI Solutions uw gegevens beschermt. Transparant privacybeleid conform AVG."
        path="/privacy"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: 'Privacybeleid' }]} />
        </div>
        <Privacy />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

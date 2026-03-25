import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-black font-sans">
      <PageMeta
        title="Veelgestelde Vragen"
        description="Antwoorden op alle vragen over AI automatisering: veiligheid, ROI, integratie en garanties. Transparante informatie voor Nederlandse MKB-bedrijven."
        path="/faq"
        keywords="AI automatisering vragen, ROI AI, data veiligheid, AI integratie, werkend prototype garantie"
      />
      <Header />
      <main id="main-content" className="pt-20">
        <FAQ />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

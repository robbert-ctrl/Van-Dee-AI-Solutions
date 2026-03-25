import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { HowItWorks } from '../components/HowItWorks';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-black font-sans">
      <PageMeta
        title="Hoe Het Werkt"
        description="Van gratis verkenningsgesprek tot werkende AI-automatisering in 4 stappen. Transparant proces, weekly sprints, 100% eigendom van de code. Leer hoe wij samen uw bedrijf transformeren."
        path="/how-it-works"
        keywords="AI implementatie proces, workflow automatisering stappen, agile AI development, prototype garantie"
      />
      <Header />
      <main id="main-content" className="pt-20">
        <HowItWorks />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

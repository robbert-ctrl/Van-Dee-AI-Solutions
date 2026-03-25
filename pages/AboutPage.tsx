import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-black font-sans">
      <PageMeta
        title="Over Ons"
        description="Ontdek wie Van Dee AI Solutions is en waarom wij de juiste partner zijn voor uw AI-automatisering. Persoonlijke aanpak, moderne technologie, transparante samenwerking."
        path="/about"
        keywords="AI consultant Nederland, workflow automatisering specialist, AI implementatie, early adopter programma"
      />
      <Header />
      <main id="main-content" className="pt-20">
        <About />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

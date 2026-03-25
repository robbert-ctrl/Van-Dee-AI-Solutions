import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { Privacy } from '../components/Privacy';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-black font-sans">
      <PageMeta
        title="Privacybeleid"
        description="Lees hoe Van Dee AI Solutions uw gegevens beschermt. Transparant privacybeleid conform AVG. Uw data veiligheid is onze topprioriteit."
        path="/privacy"
      />
      <Header />
      <main id="main-content" className="pt-20">
        <Privacy />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

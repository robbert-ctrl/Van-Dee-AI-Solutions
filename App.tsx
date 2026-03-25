import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Qualifier } from './components/Qualifier';
import { Solutions } from './components/Solutions';
import { SocialProof } from './components/SocialProof';
import { Contact } from './components/Contact';
import { FAQMini } from './components/FAQMini';
import { Footer } from './components/Footer';

// Page components
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// Lazy load the ChatWidget so the heavy AI SDK doesn't block initial page load
const ChatWidget = React.lazy(() => import('./components/ChatWidget').then(module => ({ default: module.ChatWidget })));

// Main Funnel Component (Homepage)
const MainFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-cyan selection:text-black font-sans">
      <Header />
      <main id="main-content" className="flex flex-col gap-0">
        {/* TRUE CONVERSION FUNNEL - 6 SECTIONS */}
        <Hero />          {/* 1. Problem + Hook + CTA (popup Cal embed) */}
        <Qualifier />     {/* 2. Is this for you? Self-filtering */}
        <Solutions />     {/* 3. What we automate + Terminal demos */}
        <SocialProof />   {/* 4. Early Adopter results & trust building */}
        <Contact />       {/* 5. Dedicated booking (inline Cal embed) */}
        <FAQMini />       {/* 6. Critical objections + Lead magnet */}
      </main>
      <Footer />

      {/* Suspense wrapper handles the loading state of the lazy component */}
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Funnel - Homepage */}
        <Route path="/" element={<MainFunnel />} />

        {/* Separate Educational Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

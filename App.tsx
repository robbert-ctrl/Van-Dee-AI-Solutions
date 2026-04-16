import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProofCounter } from './components/SocialProofCounter';
import { SectionBridge } from './components/SectionBridge';
import { ProblemAgitation } from './components/ProblemAgitation';
import { ROICalculator } from './components/ROICalculator';
import { Solutions } from './components/Solutions';
import { ProcessSummary } from './components/ProcessSummary';
import { Authority } from './components/Authority';
import { SocialProof } from './components/SocialProof';
import { RiskReversalWithScarcity } from './components/RiskReversalWithScarcity';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { ExitIntentPopup } from './components/ExitIntentPopup';

// New Funnel (single-page)
import { Funnel } from './components/funnel/Funnel';

// Page components
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AIScanPage } from './pages/AIScanPage';
import { AIAutomatiseringTielPage } from './pages/AIAutomatiseringTielPage';
import { BlogPage } from './pages/BlogPage';
import { Post5ProcessenPage } from './pages/blog/Post5ProcessenPage';
import { PostWatKostAIPage } from './pages/blog/PostWatKostAIPage';
import { PostAIvsHandmatigPage } from './pages/blog/PostAIvsHandmatigPage';

// Lazy load the ChatWidget so the heavy AI SDK doesn't block initial page load
const ChatWidget = React.lazy(() => import('./components/ChatWidget').then(module => ({ default: module.ChatWidget })));

// Psychology-Optimized Conversion Funnel
// Sequence: Reciprocity → Authority → Liking → Commitment → Loss Aversion → Scarcity → Consistency
const MainFunnel: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <main id="main-content" className="flex flex-col">
        {/* 1. FIRST IMPRESSIONS — Loss-framed hook (50ms to earn trust) */}
        <Hero />

        {/* ANCHORING — First numbers seen set the reference point */}
        <SocialProofCounter />

        <SectionBridge text="Herkenbaar? Dit is wat het u kost." />

        {/* 2. LOSS AVERSION — Make them FEEL the cost (Prospect Theory) */}
        <ProblemAgitation />

        <SectionBridge text="Benieuwd wat dit u precies kost?" bg="surface" />

        {/* 3. COMMITMENT — First micro-action (Endowment Effect, Sunk Cost) */}
        <ROICalculator />

        <SectionBridge text="Zo pakken we dat aan." />

        {/* 4. FRAMING EFFECT — Before/After outcomes (AIDA: Interest→Desire) */}
        <Solutions />

        <SectionBridge text="Van probleem naar oplossing in 3 stappen." bg="surface" />

        {/* 5. ZEIGARNIK — Clear process reduces uncertainty, creates pull to complete */}
        <ProcessSummary />

        {/* 6. AUTHORITY + LIKING — Founder credibility (Cialdini) */}
        <Authority />

        <SectionBridge text="Dit zijn de resultaten." />

        {/* 7. SOCIAL PROOF — Results & trust signals (Cialdini) */}
        <SocialProof />

        <SectionBridge text="Overtuigd? Wij nemen het risico." bg="surface" />

        {/* 8. RISK REVERSAL + SCARCITY — Guarantees flow naturally into capacity limit */}
        <RiskReversalWithScarcity />

        {/* 9. PEAK-END RULE — Memorable final moment (Fogg Model) */}
        <FinalCTA />
      </main>
      <Footer />

      <FloatingCTA />
      <ExitIntentPopup />

      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Funnel />} />
        <Route path="/oud" element={<MainFunnel />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/ai-scan" element={<AIScanPage />} />
        <Route path="/ai-automatisering-tiel" element={<AIAutomatiseringTielPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/5-processen-automatiseren-mkb" element={<Post5ProcessenPage />} />
        <Route path="/blog/wat-kost-ai-automatisering" element={<PostWatKostAIPage />} />
        <Route path="/blog/ai-vs-handmatig-werk" element={<PostAIvsHandmatigPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

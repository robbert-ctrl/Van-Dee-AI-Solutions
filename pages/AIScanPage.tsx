import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AIReadinessQuiz } from '../components/AIReadinessQuiz';
import { Brain, Clock, CheckCircle2, Sparkles, ArrowRight, FileText, Target, Lock } from 'lucide-react';

const ChatWidget = React.lazy(() => import('../components/ChatWidget').then(module => ({ default: module.ChatWidget })));

export const AIScanPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="Gratis AI Readiness Scan — Test Uw Bedrijf"
        description="Ontdek in 2 minuten hoeveel uw MKB-bedrijf kan besparen met AI-automatisering. Gratis AI Readiness Scan met persoonlijk adviesrapport."
        path="/ai-scan"
        keywords="AI readiness scan, AI test bedrijf, AI automatisering MKB, besparen met AI, gratis AI analyse"
      />
      <Header />
      <main id="main-content" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ label: 'AI Readiness Scan' }]} />

          {/* Hero */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <Brain className="text-brand-600" size={24} />
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Gratis AI Readiness Scan
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Hoe klaar is uw MKB-bedrijf voor AI Automatisering?
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Beantwoord 6 korte vragen en ontdek direct welke processen u kunt automatiseren,
              hoeveel tijd u bespaart, en waar de grootste kansen liggen. Inclusief persoonlijk
              adviesrapport met concrete aanbevelingen.
            </p>
          </div>

          {/* Intro / Value Prop */}
          <section className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Waarom een AI Readiness Scan doen?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              De meeste MKB-bedrijven weten dat AI automatisering kansen biedt, maar hebben geen idee waar ze
              moeten beginnen. De AI Readiness Scan is een gestructureerde analyse die in minder dan 2 minuten
              duidelijk maakt <strong>welke processen in uw bedrijf het meest geschikt zijn voor automatisering</strong>,
              welke tijdsbesparing realistisch is, en wat de eerste stap zou moeten zijn.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Op basis van de antwoorden geven we u direct inzicht in: uw automatiseringspotentieel, welke
              sectoren binnen uw bedrijf de grootste besparingskansen hebben, en een concrete roadmap.
              Dit is <strong>geen verkoopgesprek</strong> — het is een eerlijke analyse die u ook kunt gebruiken
              als u uiteindelijk niet met ons samenwerkt.
            </p>

            {/* What you get */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center mb-3">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">2 minuten</h3>
                <p className="text-sm text-slate-600">
                  Zes korte vragen. Geen registratie vooraf. U krijgt direct uw score.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
                  <Target size={20} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Persoonlijke score</h3>
                <p className="text-sm text-slate-600">
                  Uw AI Readiness Score van 0–100 met concrete uitleg per onderdeel.
                </p>
              </div>
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                <div className="w-10 h-10 rounded-lg bg-violet-600 text-white flex items-center justify-center mb-3">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Gratis rapport</h3>
                <p className="text-sm text-slate-600">
                  Optioneel ontvangt u een uitgebreid PDF-rapport per email met aanbevelingen.
                </p>
              </div>
            </div>
          </section>

          {/* The Quiz */}
          <AIReadinessQuiz />

          {/* How it works */}
          <section className="max-w-4xl mx-auto mt-20 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
              Hoe werkt de AI Readiness Scan?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Beantwoord 6 vragen</h3>
                <p className="text-sm text-slate-600">
                  Over uw huidige processen, team grootte, pijnpunten en doelen. Elke vraag duurt minder dan 20 seconden.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Krijg direct uw score</h3>
                <p className="text-sm text-slate-600">
                  Uw AI Readiness Score verschijnt onmiddellijk met een overzicht van kansen per categorie.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Persoonlijk adviesrapport</h3>
                <p className="text-sm text-slate-600">
                  Laat uw email achter en ontvang binnen 24 uur een gepersonaliseerd PDF-rapport met concrete aanbevelingen.
                </p>
              </div>
            </div>
          </section>

          {/* Mini FAQ */}
          <section className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
              Veelgestelde vragen over de AI Scan
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  Is de AI Readiness Scan echt gratis?
                </h3>
                <p className="text-sm text-slate-600 pl-7">
                  Ja, 100% gratis. Geen verborgen kosten, geen creditcard, geen registratie vooraf.
                  U krijgt direct uw score te zien. Het optionele PDF-rapport is ook gratis.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                  <Lock size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  Wat gebeurt er met mijn gegevens?
                </h3>
                <p className="text-sm text-slate-600 pl-7">
                  Uw antwoorden worden gebruikt om uw score te berekenen en (indien u dat kiest) uw rapport te personaliseren.
                  Wij delen uw gegevens nooit met derden en gebruiken ze niet voor marketing aan andere partijen.
                  Zie onze <Link to="/privacy" className="text-brand-600 hover:underline">privacyverklaring</Link> voor details.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                  <Sparkles size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  Moet ik een verkoopgesprek voeren?
                </h3>
                <p className="text-sm text-slate-600 pl-7">
                  Nee. De scan geeft u direct waarde zonder verplichting tot contact. Als u interesse heeft in een
                  gratis verkenningsgesprek, kunt u dat zelf inplannen. <Link to="/how-it-works" className="text-brand-600 hover:underline">Lees hoe ons proces werkt →</Link>
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                  <Target size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  Voor welke bedrijven is dit relevant?
                </h3>
                <p className="text-sm text-slate-600 pl-7">
                  De scan is ontworpen voor MKB-bedrijven met 5–50 medewerkers die merken dat hun team veel tijd
                  kwijt is aan repetitieve taken. Sectoren: administratie, finance, zorg, retail, logistiek, en
                  dienstverlening. <Link to="/ai-automatisering-tiel" className="text-brand-600 hover:underline">Lokaal in Tiel en omgeving →</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Related content */}
          <section className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Wilt u meer weten voordat u de scan doet?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/about" className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1">
                Over Van Dee AI Solutions <ArrowRight size={14} />
              </Link>
              <Link to="/how-it-works" className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1">
                Hoe wij werken <ArrowRight size={14} />
              </Link>
              <Link to="/faq" className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1">
                Veelgestelde vragen <ArrowRight size={14} />
              </Link>
              <Link to="/blog" className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1">
                Blog & inzichten <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

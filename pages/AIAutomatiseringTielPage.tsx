import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';
import { Reveal } from '../components/Reveal';
import { CalPopupButton } from '../components/CalPopupButton';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  FileText,
  Building2,
  Truck,
  Stethoscope,
  ShoppingBag,
  Users,
  Shield,
  Calendar,
  Phone,
} from 'lucide-react';

const ChatWidget = React.lazy(() =>
  import('../components/ChatWidget').then((module) => ({ default: module.ChatWidget }))
);

const localBenefits = [
  {
    icon: <MapPin size={24} />,
    title: 'Lokaal in Tiel',
    description:
      'Persoonlijk contact, geen anonieme helpdesk. Direct overleggen bij u op kantoor of online.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Snel schakelen',
    description:
      'Geen wachtlijsten. Als lokale specialist reageer ik dezelfde dag en start ik binnen een week.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Kennis van de regio',
    description:
      'Ik begrijp de uitdagingen van MKB-bedrijven in Tiel, de Betuwe en het Rivierenland.',
  },
];

const useCases = [
  {
    icon: <FileText size={24} />,
    sector: 'Administratie & Financieel',
    examples: [
      'Factuurverwerking automatiseren',
      'Boekhouding koppelen aan AI',
      'Rapportages automatisch genereren',
    ],
    saving: '8-12 uur/week',
  },
  {
    icon: <Building2 size={24} />,
    sector: 'Zakelijke Dienstverlening',
    examples: [
      'Offertes automatisch opstellen',
      'Klantvragen beantwoorden met AI',
      'Contractbeheer digitaliseren',
    ],
    saving: '10-15 uur/week',
  },
  {
    icon: <Truck size={24} />,
    sector: 'Logistiek & Transport',
    examples: [
      'Planning optimaliseren met AI',
      'Voorraadbeheer automatiseren',
      'Track & trace integraties',
    ],
    saving: '6-10 uur/week',
  },
  {
    icon: <ShoppingBag size={24} />,
    sector: 'Retail & E-commerce',
    examples: [
      'Productbeschrijvingen genereren',
      'Klantenservice chatbot',
      'Bestellingen automatisch verwerken',
    ],
    saving: '8-14 uur/week',
  },
  {
    icon: <Stethoscope size={24} />,
    sector: 'Zorg & Welzijn',
    examples: [
      'Dossiervorming automatiseren',
      'Afsprakenplanning optimaliseren',
      'Rapportages en verslaglegging',
    ],
    saving: '5-10 uur/week',
  },
  {
    icon: <Users size={24} />,
    sector: 'HR & Recruitment',
    examples: [
      'CV-screening met AI',
      'Onboarding automatiseren',
      'Verlof- en urenregistratie',
    ],
    saving: '6-8 uur/week',
  },
];

export const AIAutomatiseringTielPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <PageMeta
        title="AI Automatisering Tiel — Lokale AI-Expert voor MKB"
        description="AI automatisering specialist in Tiel, Gelderland. Bespaar 10-20 uur per week met slimme AI-oplossingen. Gratis verkenningsgesprek voor MKB-bedrijven in de regio."
        path="/ai-automatisering-tiel"
        keywords="AI automatisering Tiel, AI Tiel, AI Gelderland, MKB automatisering Betuwe, AI specialist Rivierenland, workflow automatisering Tiel"
      />
      <Header />

      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'AI Automatisering Tiel' }]} />
        </div>

        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal width="100%">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-50 border border-brand-200 rounded-full">
                  <MapPin size={16} className="text-brand-600" />
                  <span className="text-brand-600 font-semibold text-sm">
                    Gevestigd in Tiel, Gelderland
                  </span>
                </div>
              </Reveal>

              <Reveal width="100%" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                  AI Automatisering in{' '}
                  <span className="text-brand-600">Tiel</span>
                  <br className="hidden sm:block" />
                  voor MKB-Bedrijven
                </h1>
              </Reveal>

              <Reveal width="100%" delay={0.15}>
                <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
                  Uw bedrijf in Tiel, de Betuwe of het Rivierenland verspilt uren aan handmatig
                  werk. Als lokale AI-specialist automatiseer ik uw processen zodat uw team zich
                  kan richten op wat echt telt.
                </p>
              </Reveal>

              <Reveal width="100%" delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CalPopupButton
                    calLink="vandeeaisolutions/discoverycall"
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
                  >
                    <Calendar size={20} />
                    Gratis Verkenningsgesprek
                  </CalPopupButton>
                  <Link
                    to="/ai-scan"
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-600 text-brand-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-50 transition-colors"
                  >
                    Doe de Gratis AI Scan
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>

              <Reveal width="100%" delay={0.25}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  {['Geen verplichtingen', '30 min, online of op locatie', 'Gratis analyserapport'].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 text-slate-500">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Waarom Lokaal Section */}
        <section className="py-16 bg-surface-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Waarom een <span className="text-brand-600">lokale</span> AI-specialist?
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                  Grote consultancybureaus kennen uw regio niet. Als ondernemer in Tiel begrijp ik
                  de uitdagingen van het lokale MKB.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {localBenefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 0.15} width="100%">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-200 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Sectoren / Use Cases */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  AI automatisering voor{' '}
                  <span className="text-brand-600">elke sector</span> in Tiel
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                  Of u nu in de logistiek, dienstverlening, retail of zorg werkt — er zijn altijd
                  processen die sneller en slimmer kunnen.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Reveal key={useCase.sector} delay={index * 0.1} width="100%">
                  <div className="bg-surface-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 transition-all duration-300 h-full group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                        {useCase.icon}
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">
                        {useCase.saving} besparing
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{useCase.sector}</h3>
                    <ul className="space-y-2">
                      {useCase.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2 text-sm text-slate-500">
                          <Zap size={14} className="text-brand-600 mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Proces kort */}
        <section className="py-16 bg-surface-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  In <span className="text-brand-600">3 stappen</span> naar AI-automatisering
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                  Van eerste gesprek tot werkend systeem — transparant en zonder verrassingen.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Gratis Verkenning',
                  description:
                    'In 30 minuten analyseren we uw processen en identificeren we de grootste besparingskansen. Op locatie in Tiel of online.',
                  highlight: 'Gratis & vrijblijvend',
                },
                {
                  step: '2',
                  title: 'Ontwikkeling',
                  description:
                    'In 2-8 weken bouwen we uw AI-automatisering. Weekly sprints, zodat u elke week voortgang ziet.',
                  highlight: 'Prototype in 2 weken',
                },
                {
                  step: '3',
                  title: 'Live & Support',
                  description:
                    'We lanceren het systeem, trainen uw team en bieden 30 dagen support. U bent 100% eigenaar van de code.',
                  highlight: '30 dagen support',
                },
              ].map((phase, index) => (
                <Reveal key={phase.step} delay={index * 0.15} width="100%">
                  <div className="text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                    <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{phase.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                      {phase.highlight}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal width="100%" delay={0.4}>
              <div className="text-center mt-8">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
                >
                  Bekijk ons volledige proces
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Lokale SEO Content Block */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal width="100%">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  AI automatisering voor bedrijven in Tiel en omgeving
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Als AI-automatiseringsspecialist gevestigd in <strong>Tiel</strong> help ik
                    MKB-bedrijven in de <strong>Betuwe</strong>, het <strong>Rivierenland</strong> en
                    heel <strong>Gelderland</strong> om hun bedrijfsprocessen te automatiseren met
                    kunstmatige intelligentie. Van factuurverwerking tot klantenservice — de
                    mogelijkheden zijn eindeloos.
                  </p>
                  <p>
                    Veel bedrijven in Tiel en omgeving werken nog met handmatige processen die
                    onnodig veel tijd kosten. Denk aan het overnemen van gegevens uit e-mails,
                    het handmatig opstellen van offertes, of het beantwoorden van steeds dezelfde
                    klantvragen. Met moderne AI-tools zoals <strong>GPT</strong>,{' '}
                    <strong>Claude</strong> en <strong>Gemini</strong> kunnen deze taken volledig
                    of gedeeltelijk worden geautomatiseerd.
                  </p>
                  <p>
                    Het voordeel van een lokale specialist? Ik kom graag bij u langs voor een
                    persoonlijk gesprek. Geen anonieme helpdesk of wekenlange wachttijden — maar
                    direct contact met de persoon die uw automatisering bouwt. Dat maakt de
                    samenwerking transparanter en het resultaat beter.
                  </p>
                  <p>
                    Of uw bedrijf nu in <strong>Tiel</strong>, <strong>Culemborg</strong>,{' '}
                    <strong>Geldermalsen</strong>, <strong>Zaltbommel</strong>,{' '}
                    <strong>Buren</strong> of elders in de regio gevestigd is — ik help u graag
                    ontdekken wat AI voor uw bedrijf kan betekenen. Het eerste verkenningsgesprek
                    is altijd gratis en vrijblijvend.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Klaar om te ontdekken wat AI voor uw bedrijf in Tiel kan doen?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Boek een gratis verkenningsgesprek. In 30 minuten weet u precies welke processen u
                kunt automatiseren en hoeveel tijd u bespaart.
              </p>

              <CalPopupButton
                calLink="vandeeaisolutions/discoverycall"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold px-10 py-5 rounded-xl text-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                <Phone size={20} />
                Boek Gratis Verkenningsgesprek
                <ArrowRight size={18} />
              </CalPopupButton>

              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" /> Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" /> Op locatie of online
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" /> Geschreven analyserapport
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

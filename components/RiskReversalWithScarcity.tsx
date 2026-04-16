import React, { useState } from 'react';
import { Shield, CheckCircle, Lock, Plus, Minus, Users } from 'lucide-react';
import { Reveal } from './Reveal';
import { FAQSchema } from './FAQSchema';

const guarantees = [
  {
    icon: Shield,
    title: 'Gratis Verkenningsgesprek',
    desc: '30 minuten, geen kosten, geen verplichtingen. U houdt het analyserapport, altijd.',
  },
  {
    icon: CheckCircle,
    title: 'Betaal Na Werkend Prototype',
    desc: 'U betaalt pas als u een werkend prototype heeft gezien en goedgekeurd. Niet tevreden? Geen kosten.',
  },
  {
    icon: Lock,
    title: '100% Code Eigendom',
    desc: 'Alle code, documentatie en data zijn van u. Geen vendor lock-in, geen abonnementen.',
  },
];

const faqs = [
  {
    question: 'Waarom zou ik met een nieuw bedrijf werken?',
    answer:
      'Drie redenen: (1) Persoonlijke aandacht - ik werk met een beperkt aantal klanten tegelijk. (2) Modernste tech - nieuwste AI-modellen, geen legacy. (3) Het gratis verkenningsgesprek geeft u zekerheid.',
  },
  {
    question: 'Is mijn data veilig?',
    answer:
      'Absoluut. Uw data wordt nooit gebruikt om publieke AI-modellen te trainen. Voor gevoelige informatie bieden we local deployment opties.',
  },
  {
    question: 'Wat als het niet werkt?',
    answer:
      'U betaalt pas na het eerste werkende prototype. Geen waarde? Geen verdere betaling.',
  },
  {
    question: 'Is het gratis gesprek een verkoopgesprek?',
    answer:
      'Nee. Ik analyseer of AI technisch haalbaar is voor uw situatie. Als ik geen waarde kan bieden, zeg ik dat eerlijk.',
  },
  {
    question: 'Hoe bepalen we of de automatisering werkt?',
    answer:
      'Concrete doelen worden schriftelijk vastgelegd. Na implementatie meten we of die doelen gehaald zijn. Simpel en transparant.',
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}> = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group gap-4"
    >
      <span
        className={`text-base sm:text-lg font-medium transition-colors duration-300 ${
          isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'
        }`}
      >
        {question}
      </span>
      <div
        className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${
          isOpen
            ? 'bg-brand-600/10 border-brand-600 text-brand-600'
            : 'border-gray-200 text-slate-400 group-hover:text-brand-600 group-hover:border-brand-600'
        }`}
      >
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <div
      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-5 sm:px-6 pb-6 text-slate-500 leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

export const RiskReversalWithScarcity: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema faqs={faqs} />

      <section className="bg-surface-50 section-padding">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                Geen risico, geen verplichtingen
              </h2>
              <p className="text-lg text-slate-500">
                Wij nemen het risico, niet u.
              </p>
            </Reveal>
          </div>

          {/* Guarantee Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((g, index) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={0.1 + index * 0.15} width="100%">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                    <div className="bg-emerald-50 text-emerald-600 rounded-xl p-3 inline-flex mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {g.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">{g.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bridge: Guarantees → Scarcity */}
          <Reveal delay={0.5} width="100%">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6">
                <Users size={22} className="text-brand-600 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-slate-800 font-semibold">
                    Wij nemen het risico. Maar onze capaciteit is beperkt.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Als solo consultant werk ik met maximaal 3 klanten tegelijk.
                    Elke klant krijgt mijn volledige aandacht.
                  </p>
                </div>
              </div>

              {/* Capacity Indicator */}
              <div className="flex items-center justify-center gap-4 mt-6 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-600" />
                <div className="w-10 h-10 rounded-full bg-brand-600" />
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-dashed border-brand-300" />
              </div>
              <p className="text-sm text-brand-600 font-semibold">
                2 van 3 plekken bezet
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Beschikbaarheid wordt regelmatig bijgewerkt
              </p>
            </div>
          </Reveal>

          {/* FAQ Accordion */}
          <Reveal delay={0.6} width="100%">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                Veelgestelde vragen
              </h3>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

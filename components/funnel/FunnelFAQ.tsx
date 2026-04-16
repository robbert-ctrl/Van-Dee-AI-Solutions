import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from './useReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Vervangt AI mijn team?',
    answer:
      'Nee. AI maakt je team vrij voor werk dat er echt toe doet: klantcontact, strategie, creativiteit. De saaie repetitieve taken gaan weg — niet de mensen. In de praktijk worden medewerkers juist gelukkiger omdat hun werk zinvoller wordt.',
  },
  {
    question: 'Dit klinkt ingewikkeld. Heb ik technische kennis nodig?',
    answer:
      'Nee. Wij regelen de techniek van A tot Z. Jij levert inzicht in je processen, wij vertalen dat naar werkende AI. Jouw team leert er vervolgens mee werken in 1–2 sessies. Je hoeft geen regel code te begrijpen.',
  },
  {
    question: 'Hoe zit het met mijn bedrijfsdata?',
    answer:
      'Jouw data blijft van jou. We werken met enterprise-grade beveiliging en — indien gewenst — met oplossingen waarbij je data nooit naar externe AI-modellen wordt gestuurd. Volledig AVG-proof. Voor gevoelige sectoren bieden we lokale deployment.',
  },
  {
    question: 'Wat als het geen ROI oplevert?',
    answer:
      'We beginnen altijd met een pilot op één proces om waarde te bewijzen voordat we opschalen. Geen resultaat na de pilot? Dan stopt het daar. Jij draagt geen risico — wij wel. Je betaalt pas na het eerste werkende resultaat.',
  },
  {
    question: 'Is dit wel relevant voor mijn bedrijf?',
    answer:
      'Als je team repetitieve taken doet, bespaart AI je tijd en geld. Punt. Of je nu in finance, logistiek, administratie, zorg of dienstverlening zit — er is altijd laaghangend fruit. Tijdens het gesprek kijken we specifiek naar jouw situatie.',
  },
  {
    question: 'Wat kost dit?',
    answer:
      'Pilot-projecten starten rond €3.000. Grotere trajecten lopen van €8.000 tot €30.000, afhankelijk van scope en integratie. Tijdens het strategiegesprek krijg je een eerlijke inschatting voor jouw situatie — zonder verplichtingen.',
  },
  {
    question: 'Hoe lang duurt een traject?',
    answer:
      'Van eerste gesprek tot werkend resultaat: gemiddeld 6–10 weken. Eerste prototype vaak al binnen 2–3 weken. Wij werken in korte sprints zodat je elke week vooruitgang ziet.',
  },
  {
    question: 'Wat moet ik voorbereiden voor het gesprek?',
    answer:
      'Niets. Kom zoals je bent. Tijdens de 30 minuten stellen wij de vragen. Handig om alvast na te denken over: welke taken kosten jouw team het meeste tijd?',
  },
];

export const FunnelFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="section-padding bg-[color:var(--color-cream-100)] border-y border-[color:var(--color-line)]">
      <div className="container-funnel">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* Left: header */}
          <div ref={headerRef} className="reveal md:sticky md:top-28 md:self-start">
            <div className="divider-hairline mb-6" />
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
              07 — Je vragen
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[color:var(--color-navy-900)] mb-6 tracking-tight leading-[1.05]">
              Alles wat je wilt weten voor het gesprek.
            </h2>
            <p className="text-[color:var(--color-ink-500)] leading-relaxed">
              Geen tijd voor een gesprek zonder antwoorden. Hieronder staan de vragen die bijna elke
              MKB-ondernemer stelt.
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div ref={listRef} className="reveal">
            <div className="space-y-0 bg-white border border-[color:var(--color-line)] rounded-2xl overflow-hidden">
              {faqs.map((faq, idx) => (
                <FaqRow
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  isLast={idx === faqs.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqRow: React.FC<{
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}> = ({ faq, isOpen, onToggle, isLast }) => {
  return (
    <div className={isLast ? '' : 'border-b border-[color:var(--color-line)]'}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left transition-colors hover:bg-[color:var(--color-cream)]"
      >
        <span
          className={`font-display text-lg md:text-xl font-semibold tracking-tight transition-colors ${
            isOpen ? 'text-[color:var(--color-primary-600)]' : 'text-[color:var(--color-navy-900)]'
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
            isOpen
              ? 'bg-[color:var(--color-primary-600)] border-[color:var(--color-primary-600)] text-white rotate-180'
              : 'border-[color:var(--color-line-strong)] text-[color:var(--color-ink-500)]'
          }`}
        >
          {isOpen ? <Minus size={16} strokeWidth={2.25} /> : <Plus size={16} strokeWidth={2.25} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-[color:var(--color-ink-500)] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

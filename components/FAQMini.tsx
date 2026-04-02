import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { FAQSchema } from './FAQSchema';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`border-b border-white/10 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none group gap-4"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-neon-cyan' : 'text-white group-hover:text-gray-200'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 shrink-0 ${isOpen ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan rotate-180' : 'text-gray-400 group-hover:text-white'}`}>
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};


export const FAQMini: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Only 5 critical objection-handling questions (prioritized for SMB concerns)
  const faqs = [
    {
      question: "Waarom zou ik met een nieuw bedrijf werken?",
      answer: "Drie redenen: (1) Persoonlijke aandacht - ik werk met een beperkt aantal klanten tegelijk, geen wachtlijsten. (2) Early adopter samenwerking - transparante tarieven en directe toegang. (3) Modernste tech - nieuwste AI-modellen, geen legacy systemen. Plus: het gratis verkenningsgesprek geeft u zekerheid. 30 minuten, geen verplichtingen."
    },
    {
      question: "Is mijn data veilig?",
      answer: "Absoluut. Veiligheid is mijn topprioriteit. Ik bouw systemen waarbij uw data nooit gebruikt wordt om publieke AI-modellen te trainen (tenzij expliciet gewenst). Voor zeer gevoelige informatie bieden we 'local deployment' opties, waarbij de AI volledig op uw eigen servers draait."
    },
    {
      question: "Wat als het niet werkt?",
      answer: "U betaalt pas na het eerste werkende prototype. Ziet u geen waarde? Dan stopt het daar. Geen cure-no-pay, maar 'geen waarde-geen verdere betaling'. Het eerste verkenningsgesprek is sowieso gratis."
    },
    {
      question: "Is het gratis verkenningsgesprek een verkoopgesprek?",
      answer: "Nee. Het verkenningsgesprek is bedoeld om te kwalificeren en te adviseren. Ik analyseer of uw bedrijf klaar is voor AI. Als ik geen toegevoegde waarde kan bieden, zeg ik dat eerlijk. Ik geloof in langetermijnrelaties, niet in snelle sales."
    },
    {
      question: "Hoe bepalen we of de automatisering werkt?",
      answer: "In het gratis verkenningsgesprek bepalen we samen concrete doelen: bijvoorbeeld '10 uur per week besparen op facturatie' of '50% minder handmatige data-invoer'. Die doelen worden schriftelijk vastgelegd. Na implementatie meten we of we die doelen halen. Simpel en transparant."
    }
  ];

  return (
    <>
      {/* Add FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      <section id="faq-mini" className="py-24 relative bg-deep-space">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 border border-white/10">
                <HelpCircle className="text-neon-purple" size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Laatste <span className="text-neon-cyan">Vragen?</span></h2>
            <p className="text-gray-400">
              Transparante antwoorden op de meest gestelde vragen.
            </p>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.2}>
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden mb-12 shadow-2xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>

        {/* Links to full FAQ and Garanties */}
        <Reveal width="100%" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
            <a href="/faq" className="text-neon-cyan hover:text-neon-purple transition-colors text-sm font-medium">
              Meer vragen? Bekijk volledige FAQ →
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="/faq#garanties" className="text-neon-cyan hover:text-neon-purple transition-colors text-sm font-medium">
              Bekijk onze garanties →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </>
  );
};

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { FAQSchema } from './FAQSchema';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-brand-50' : 'hover:bg-gray-50'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none group gap-4"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-slate-600'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${isOpen ? 'bg-brand-50 border-brand-200 text-brand-600 rotate-180' : 'border-gray-200 text-slate-400 group-hover:text-slate-600'}`}>
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-slate-500 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Waarom zou ik met een nieuw bedrijf werken?",
      answer: "Drie redenen: (1) Persoonlijke aandacht - ik werk met een beperkt aantal klanten tegelijk, geen wachtlijsten. (2) Early adopter samenwerking - transparante tarieven en directe toegang. (3) Modernste tech - nieuwste AI-modellen, geen legacy systemen. Plus: het gratis verkenningsgesprek geeft u zekerheid. 30 minuten, geen verplichtingen."
    },
    {
      question: "Heb je wel ervaring?",
      answer: "Ja. Ik ben gespecialiseerd in moderne AI-implementaties - geen legacy code of verouderde methodes. Ik werk met dezelfde tools als grote consultancy firms (GPT, Claude, Gemini), maar met praktische, no-nonsense aanpak. Het gratis verkenningsgesprek bestaat om te bewijzen dat ik uw probleem begrijp en kan oplossen. Geen theoretisch verhaal, maar een concrete aanpak."
    },
    {
      question: "Wat als het niet werkt?",
      answer: "U betaalt pas na het eerste werkende prototype. Ziet u geen waarde? Dan stopt het daar. Geen cure-no-pay, maar 'geen waarde-geen verdere betaling'. Het eerste verkenningsgesprek is sowieso gratis."
    },
    {
      question: "Hoe werken de early adopter voorwaarden?",
      answer: "Als early adopter help je mij bewijzen dat deze aanpak werkt in de praktijk. In ruil: transparante samenwerking, directe toegang, en tarieven op maat. Geen standaard prijslijst - elk project is maatwerk. Tijdens de gratis analyse krijg je een eerlijke inschatting van tijd en kosten."
    },
    {
      question: "Is het gratis verkenningsgesprek een verkoopgesprek?",
      answer: "Nee. Het verkenningsgesprek is bedoeld om te kwalificeren en te adviseren. Ik analyseer of uw bedrijf klaar is voor AI. Als ik geen toegevoegde waarde kan bieden, zeg ik dat eerlijk. Ik geloof in langetermijnrelaties, niet in snelle sales."
    },
    {
      question: "Hoe snel is de terugverdientijd (ROI)?",
      answer: "Vaak binnen 1 tot 3 maanden. Omdat we beginnen met 'laaghangend fruit' (processen die veel tijd kosten maar eenvoudig te automatiseren zijn), is de impact direct merkbaar in de operationele kosten."
    },
    {
      question: "Is mijn data veilig?",
      answer: "Absoluut. Veiligheid is mijn topprioriteit. Ik bouw systemen waarbij uw data nooit gebruikt wordt om publieke AI-modellen te trainen (tenzij expliciet gewenst). Voor zeer gevoelige informatie bieden we 'local deployment' opties, waarbij de AI volledig op uw eigen servers draait."
    },
    {
      question: "Werkt dit met mijn huidige software?",
      answer: "Ja. Ik ben gespecialiseerd in het bouwen van 'bruggen' (API's). Of u nu Salesforce, HubSpot, of een ander systeem gebruikt (zoals AFAS, Exact, of zelfs verouderde systemen); ik kan er een AI-laag bovenop bouwen zonder dat u uw hele IT-infrastructuur hoeft te vervangen."
    },
    {
      question: "Wie is eigenaar van de code?",
      answer: "U bent 100% eigenaar. Geen licentiekosten voor altijd, geen vendor lock-in. Na oplevering ontvangt u alle broncode, toegangsrechten en documentatie. Ik geloof in onafhankelijkheid."
    },
    {
      question: "Vervangt AI mijn personeel?",
      answer: "Mijn doel is augmentatie, niet vervanging. AI neemt de 'saaie', repetitieve taken over (data invoer, sorteren, basisklantvragen), waardoor uw team zich kan richten op creativiteit, strategie en persoonlijk klantcontact. In de praktijk zien we dat medewerkers gelukkiger worden omdat hun werk zinvoller wordt."
    },
    {
      question: "Wat is de 'Werkend Prototype of Geld Terug' garantie?",
      answer: "Simpel: U betaalt pas na het eerste werkende prototype. Niet tevreden? U krijgt 100% van uw betaling terug. Geen gedoe, geen vragen. Ik draag het risico, niet u. U gaat pas verder als u zeker weet dat het werkt."
    },
    {
      question: "Waarom krijg ik zoveel extra's gratis?",
      answer: "Ik wil dat u succesvol bent, ook als we niet samenwerken. De Implementatie Accelerators (Prompt Library, Integratie Gids, etc.) zijn dingen die ik toch al heb gemaakt. Voor u kunnen ze weken werk besparen, voor mij kost het niks om te delen. Win-win."
    },
    {
      question: "Wat is de 'Resultaat Garantie'?",
      answer: "Als uw automatisering niet de beloofde tijdsbesparing levert binnen 6 maanden, blijf ik gratis doorwerken tot het wel gebeurt. Geen extra kosten. U wint, of u wint. Simpel. Ik word pas succesvol als u succesvol bent."
    },
    {
      question: "Hoe bepalen we of de automatisering werkt?",
      answer: "In de gratis analyse bepalen we samen concrete doelen: bijvoorbeeld '10 uur per week besparen op facturatie' of '50% minder handmatige data-invoer'. Die doelen worden schriftelijk vastgelegd. Na implementatie meten we of we die doelen halen. Simpel en transparant."
    },
    {
      question: "Werken jullie ook lokaal in Tiel en Gelderland?",
      answer: "Ja, Van Dee AI Solutions is gevestigd in Tiel en wij bedienen MKB-bedrijven in heel Gelderland — met name in de regio Betuwe en Rivierenland (Culemborg, Geldermalsen, Zaltbommel, Buren). Lokaal werken betekent korte lijnen, persoonlijk contact, en vaak een fysieke kick-off meeting. Zie onze pagina over AI automatisering in Tiel voor meer details."
    }
  ];

  return (
    <>
      {/* Add FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      <section id="faq" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 mb-6 border border-violet-200">
                <HelpCircle className="text-violet-600" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Veelgestelde <span className="text-brand-600">Vragen</span> over AI Automatisering</h1>
            <p className="text-slate-500">
              Transparante antwoorden over veiligheid, ROI en integratie.
            </p>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.2}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-12">
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

        <Reveal width="100%" delay={0.4}>
          <div className="flex flex-col items-center gap-4 mt-12">
              <a
                  href="https://cal.com/vandeeaisolutions/discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Button glow className="group px-8 py-4 text-lg">
                      Boek Verkenningsgesprek <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
                  </Button>
              </a>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  to="/ai-scan"
                  className="text-brand-600 hover:text-brand-700 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Of doe eerst de gratis AI Scan <ArrowRight size={14} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-slate-500 hover:text-brand-600 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Bekijk ons proces <ArrowRight size={14} />
                </Link>
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
  );
};
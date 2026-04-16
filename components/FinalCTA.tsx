import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';

const bullets = [
  'Knelpunten analyse van uw huidige processen',
  'Tech-stack mapping en API mogelijkheden',
  'Eerlijke haalbaarheid en ROI inschatting',
];

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="bg-navy-900 text-white section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start met uw gratis analyse
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              In 30 minuten weet u precies welke processen u kunt automatiseren
              en hoeveel u bespaart.
            </p>
          </Reveal>

          {/* Meeting agenda bullets */}
          <Reveal delay={0.2} width="100%">
            <div className="inline-block text-left mb-10">
              {bullets.map((bullet) => (
                <p key={bullet} className="text-gray-300 mb-2">
                  &#10003; {bullet}
                </p>
              ))}
            </div>
          </Reveal>

          {/* CTA Button */}
          <Reveal delay={0.35} width="100%">
            <CalPopupButton
              calLink="vandeeaisolutions/discoverycall"
              className="bg-white text-navy-900 font-bold py-5 px-10 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-3"
            >
              <Calendar size={22} />
              Boek Gratis Verkenningsgesprek
              <ArrowRight size={18} />
            </CalPopupButton>
          </Reveal>

          {/* Scarcity reminder */}
          <Reveal delay={0.45} width="100%">
            <p className="text-sm text-amber-300 font-medium mt-4">
              Momenteel 1 plek beschikbaar
            </p>
          </Reveal>

          {/* Trust indicators */}
          <Reveal delay={0.5} width="100%">
            <p className="text-sm text-gray-400 mt-4">
              Geen verplichtingen &middot; Geen verkooppraatje &middot; U houdt
              het rapport, altijd
            </p>
          </Reveal>

          {/* Internal links + LinkedIn */}
          <Reveal delay={0.6} width="100%">
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-400">
              <Link to="/faq" className="hover:text-white transition-colors">
                Veelgestelde vragen
              </Link>
              <span>&middot;</span>
              <Link to="/how-it-works" className="hover:text-white transition-colors">
                Hoe het werkt
              </Link>
              <span>&middot;</span>
              <a
                href="https://www.linkedin.com/in/robbertvandee/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

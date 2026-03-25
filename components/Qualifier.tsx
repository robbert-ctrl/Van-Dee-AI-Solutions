import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';

export const Qualifier: React.FC = () => {
  const goodFit = [
    "u 5-50 medewerkers heeft",
    "uw team veel handmatig/repetitief werk doet",
    "u al software gebruikt maar die niet samenwerken",
    "u wilt groeien zonder direct mensen aan te nemen",
    "u klaar bent om te investeren in tijdsbesparing"
  ];

  const notGoodFit = [
    "uw proces volledig fysiek is (geen data/emails)",
    "medewerkers regelmatig zonder werk zitten"
  ];

  return (
    <section className="py-20 relative bg-deep-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Is Dit Iets <span className="text-neon-cyan">Voor Mij?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Eerlijk over wie we wel en niet kunnen helpen.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit */}
          <Reveal delay={0.1}>
            <div className="glass-panel p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-400" size={28} />
                Dit is voor u als:
              </h3>
              <ul className="space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not Good Fit */}
          <Reveal delay={0.2}>
            <div className="glass-panel p-8 rounded-2xl border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <XCircle className="text-red-400" size={28} />
                Dit is niet voor u als:
              </h3>
              <ul className="space-y-4">
                {notGoodFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} width="100%">
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Twijfelt u? Het gratis verkenningsgesprek geeft duidelijkheid.</p>
            <CalPopupButton
              calLink="vandeeaisolutions/discoverycall"
              className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:shadow-[0_0_50px_rgba(0,243,255,0.5)] inline-flex items-center justify-center"
            >
              Boek Verkenningsgesprek
            </CalPopupButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Euro } from 'lucide-react';
import { Reveal } from './Reveal';
import { CalPopupButton } from './CalPopupButton';
import { useDelayedPulse } from '../hooks/useDelayedPulse';

// Loss counter: 20 uur/week ÷ 5 dagen ÷ 8 uur ÷ 3600 sec × €45/uur = ~€0.3125/sec
const WASTE_PER_SECOND = (20 / 5 / 8 / 3600) * 45;

const Hero: React.FC = () => {
  const [wastedAmount, setWastedAmount] = useState(0);
  const { ref: pulseRef, shouldPulse } = useDelayedPulse(3000);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      setWastedAmount(elapsed * WASTE_PER_SECOND);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCalculator = () => {
    const section = document.getElementById('roi-calculator');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="bg-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Copy */}
          <div>
            <Reveal width="100%">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-800 leading-tight tracking-tight">
                Uw team verspilt{' '}
                <span className="text-loss-600">20+ uur per week</span>{' '}
                aan werk dat een computer in 20 minuten doet.
              </h1>
            </Reveal>

            <Reveal width="100%" delay={0.1}>
              <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl">
                Ontdek in 30 minuten gratis welke processen u morgen al kunt automatiseren.
              </p>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div ref={pulseRef}>
                  <button
                    onClick={handleScrollToCalculator}
                    className={`btn-primary inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-700 transition-colors ${shouldPulse ? 'animate-cta-pulse' : ''}`}
                  >
                    Bereken Uw Besparing
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <CalPopupButton
                  calLink="vandeeaisolutions/discoverycall"
                  className="btn-cta inline-flex items-center justify-center gap-2 border-2 border-brand-600 text-brand-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-50 transition-colors"
                >
                  Plan Gratis Gesprek
                </CalPopupButton>
              </div>
            </Reveal>

            {/* Trust bar */}
            <Reveal width="100%" delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                {[
                  'Geen verplichtingen',
                  '30 min, online',
                  'Gratis analyserapport',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-500">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Realtime loss counter */}
            <Reveal width="100%" delay={0.4}>
              <div className="mt-6 bg-loss-600/5 border border-loss-600/20 rounded-lg px-4 py-3 max-w-md">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  Sinds u deze pagina opende:
                  <span className="text-loss-600 font-bold text-lg" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <Euro size={14} className="inline -mt-0.5" />
                    {wastedAmount.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-slate-500">verspild</span>
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  *Gemiddeld MKB: 20 uur/week &times; &euro;45/uur aan handmatig werk
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column: Before/After visual (hidden on mobile) */}
          <div className="hidden lg:block">
            <Reveal width="100%" delay={0.2}>
              <div className="bg-surface-50 rounded-2xl border border-gray-100 shadow-sm p-8">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                  Tijdvergelijking per week
                </p>

                {/* Before */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-loss-600" />
                      <span className="font-semibold text-slate-800">Handmatig</span>
                    </div>
                    <span className="text-loss-600 font-bold text-lg">20 uur/week</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="bg-loss-600 h-4 rounded-full transition-all duration-1000"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-slate-800">Geautomatiseerd</span>
                    </div>
                    <span className="text-emerald-600 font-bold text-lg">2 uur/week</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className="bg-emerald-600 h-4 rounded-full transition-all duration-1000"
                      style={{ width: '10%' }}
                    />
                  </div>
                </div>

                {/* Savings callout */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-slate-500 text-sm">Uw besparing</p>
                  <p className="text-3xl font-bold text-emerald-600 mt-1">18 uur/week</p>
                  <p className="text-slate-500 text-sm mt-1">terug voor werk dat ertoe doet</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

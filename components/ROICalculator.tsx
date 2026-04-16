import React, { useState, useEffect } from 'react';
import { Calculator, Euro, ArrowRight, CheckCircle, Mail, Lock } from 'lucide-react';
import { Reveal } from './Reveal';

export const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState<number>(10);
  const [rate, setRate] = useState<number>(45);
  const [complexity, setComplexity] = useState<'low' | 'med' | 'high'>('med');
  const [savings, setSavings] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const multiplier = complexity === 'low' ? 0.8 : complexity === 'med' ? 1.0 : 1.3;
    setSavings(hours * rate * 52 * multiplier);
  }, [hours, rate, complexity]);

  const getContext = () => {
    if (savings > 20000) return 'Dat is het salaris van een parttime medewerker';
    if (savings > 10000) return 'Dat is 3-4 maanden huur van een kantoorpand';
    return 'Dat is een mooie investering terug';
  };

  const validateEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!validateEmail(email)) {
      setEmailError('Voer een geldig e-mailadres in.');
      return;
    }

    setSubmitting(true);

    try {
      const webhookUrl =
        (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_WEBHOOK_URL) ||
        'https://hook.eu1.make.com/6yx8k47vez6pjss2915cjylt1bvcx7iq';

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          savings: Math.round(savings),
          hours,
          rate,
          complexity,
        }),
      });

      setSubmitted(true);
    } catch {
      setEmailError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="roi-calculator" className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calculator className="text-brand-600" size={24} />
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                ROI Calculator
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Bereken Uw Besparing
            </h2>
            <p className="text-slate-500 text-lg">
              Verschuif de sliders en zie direct wat automatisering u oplevert.
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.15}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* LEFT - Inputs */}
              <div className="space-y-8">
                {/* Slider: Hours */}
                <div>
                  <label className="flex justify-between text-sm text-slate-500 mb-3">
                    <span>Uren handmatig werk per week</span>
                    <span className="text-brand-600 font-bold">{hours} uur</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                </div>

                {/* Slider: Rate */}
                <div>
                  <label className="flex justify-between text-sm text-slate-500 mb-3">
                    <span>Uurtarief medewerker</span>
                    <span className="text-brand-600 font-bold">
                      <Euro size={14} className="inline -mt-0.5" />
                      {rate} / uur
                    </span>
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="5"
                    value={rate}
                    onChange={(e) => setRate(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                </div>

                {/* Complexity Buttons */}
                <div>
                  <label className="block text-sm text-slate-500 mb-3">
                    Complexiteit van taken
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['low', 'med', 'high'] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setComplexity(c)}
                        className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                          complexity === c
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                        }`}
                      >
                        {c === 'low' ? 'Eenvoudig' : c === 'med' ? 'Gemiddeld' : 'Complex'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT - Output */}
              <div className="border-2 border-brand-100 bg-brand-50/30 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">
                    Potenti&euml;le jaarlijkse besparing
                  </p>
                  <div className="flex items-baseline gap-1 my-4">
                    <Euro size={32} className="text-emerald-600 self-start mt-1" />
                    <span className="text-5xl font-bold text-emerald-600">
                      {savings.toLocaleString('nl-NL', { maximumFractionDigits: 0 })}
                    </span>
                    <span className="text-slate-500 text-base font-normal ml-1">/ jaar</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{getContext()}</p>
                  <p className="text-xs text-slate-400">
                    *Conservatieve schatting. Werkelijke besparingen vari&euml;ren per bedrijf.
                  </p>

                  {/* Benchmark reference */}
                  <div className="mt-4 pt-3 border-t border-dashed border-gray-200">
                    <p className="text-xs text-slate-400 flex items-center justify-between">
                      <span>Gemiddeld MKB: &euro;23.400/jaar</span>
                      <span className={savings > 23400 ? 'text-emerald-600 font-semibold' : 'text-brand-600 font-semibold'}>
                        {savings > 23400 ? 'U bespaart bovengemiddeld' : 'Uw potentieel'}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  {submitted ? (
                    <div className="flex items-center gap-3 text-emerald-600">
                      <CheckCircle size={24} />
                      <p className="text-sm font-medium">
                        Check uw inbox voor uw persoonlijke besparingsrapport
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="email"
                          placeholder="uw@email.nl"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError('');
                          }}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm"
                        />
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Lock size={12} /> Wij delen uw gegevens nooit met derden
                      </p>
                      {emailError && (
                        <p className="text-loss-600 text-xs">{emailError}</p>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-60 text-sm"
                      >
                        {submitting ? (
                          'Verzenden...'
                        ) : (
                          <>
                            Ontvang Uw Persoonlijke Analyse
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

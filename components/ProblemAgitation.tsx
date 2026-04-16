import React from 'react';
import { FileText, Mail, BarChart3, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { useCountUp } from '../hooks/useCountUp';

interface PainPoint {
  icon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number | string }>;
  title: string;
  body: string;
  lossNumber: string;
}

const painPoints: PainPoint[] = [
  {
    icon: FileText,
    title: 'Factuurverwerking',
    body: 'Uw boekhouder besteedt 8 uur/week aan handmatige invoer.',
    lossNumber: '€18.720/jaar aan salaris voor copy-paste werk',
  },
  {
    icon: Mail,
    title: 'Email sorteren',
    body: 'Elke dag 45 minuten offertes, klachten en vragen handmatig doorsturen.',
    lossNumber: '195 uur per jaar verloren',
  },
  {
    icon: BarChart3,
    title: 'Rapportages maken',
    body: 'Elke maandag 3 uur Excel draaitabellen bijwerken.',
    lossNumber: 'Uw concurrent heeft dit al geautomatiseerd',
  },
];

const CostOfDelay: React.FC = () => {
  const { ref, value } = useCountUp(360);

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center mt-8 max-w-md mx-auto bg-white rounded-xl border border-loss-600/20 p-6">
      <p className="text-sm text-slate-500 mb-1">Elke week dat u wacht kost u</p>
      <p ref={ref} className="text-3xl font-bold text-loss-600" style={{ fontVariantNumeric: 'tabular-nums' }}>
        &euro;{value}
      </p>
      <a
        href="#roi-calculator"
        onClick={handleScroll}
        className="inline-flex items-center gap-1 text-brand-600 font-semibold text-sm mt-3 hover:text-brand-700 transition-colors"
      >
        Bereken uw exacte kosten
        <ArrowRight size={14} />
      </a>
    </div>
  );
};

const ProblemAgitation: React.FC = () => {
  return (
    <section className="bg-surface-50 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-800 tracking-tight">
              Wat kost handmatig werk u <em className="not-italic text-loss-600">écht</em>?
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} width="100%" delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {point.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-5 flex-grow">
                    {point.body}
                  </p>

                  <p className="text-loss-600 font-bold text-sm leading-snug">
                    {point.lossNumber}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal width="100%" delay={0.4}>
          <p className="text-center text-slate-500 text-sm mt-10 lg:mt-12">
            Dit zijn conservatieve schattingen. De werkelijke kosten liggen vaak hoger.
          </p>
        </Reveal>

        {/* Cost-of-delay + CTA */}
        <Reveal width="100%" delay={0.5}>
          <CostOfDelay />
        </Reveal>
      </div>
    </section>
  );
};

export { ProblemAgitation };

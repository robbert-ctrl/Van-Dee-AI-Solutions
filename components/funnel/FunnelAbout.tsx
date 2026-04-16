import React from 'react';
import { MapPin, FileCheck2, Layers } from 'lucide-react';
import { useReveal } from './useReveal';

/**
 * About / Guide — StoryBrand "Guide" section.
 * Empathy + authority. Short, personal, human.
 * The customer is the hero; Robbert is the guide.
 */
export const FunnelAbout: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  const photoRef = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding bg-[color:var(--color-cream)]">
      <div className="container-funnel">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start max-w-5xl mx-auto">
          {/* Photo column */}
          <div ref={photoRef} className="reveal">
            <div className="relative w-52 md:w-72 shrink-0">
              {/* Navy offset plate */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[color:var(--color-navy-900)]"
              />
              <div className="relative rounded-2xl overflow-hidden border border-[color:var(--color-navy-900)] aspect-[4/5] bg-[color:var(--color-cream-100)]">
                <img
                  src="/overons.jpg"
                  alt="Robbert van Dee — oprichter van Van Dee AI Solutions, gevestigd in Tiel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={288}
                  height={360}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              {/* Location pin badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-[color:var(--color-line)] rounded-full px-3 py-1.5 shadow-sm whitespace-nowrap">
                <MapPin size={12} className="text-[color:var(--color-primary-600)]" strokeWidth={2.25} />
                <span className="text-xs font-medium text-[color:var(--color-navy-900)]">Tiel, Gelderland</span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div ref={ref} className="reveal">
            <div className="divider-hairline mb-6" />
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-ink-400)] mb-4">
              06 — Wie ik ben
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[color:var(--color-navy-900)] mb-8 tracking-tight leading-[1.1]">
              Ik ben <span className="italic">Robbert</span>. Ik maak AI concreet.
            </h2>

            <div className="space-y-5 text-lg text-[color:var(--color-ink-500)] leading-relaxed">
              <p>
                Ik heb te vaak gezien hoe bedrijven maanden en duizenden euro's verspillen aan de
                verkeerde AI-tools, omdat er niemand was die het vertaalde naar hun échte processen.
              </p>
              <p>
                Daarom werk ik niet met standaardpakketten. Ik werk met{' '}
                <span className="text-[color:var(--color-navy-900)] font-medium">jouw workflow</span>,{' '}
                <span className="text-[color:var(--color-navy-900)] font-medium">jouw team</span>, en{' '}
                <span className="text-[color:var(--color-navy-900)] font-medium">jouw cijfers</span>.
              </p>
              <p>
                Vanuit Tiel help ik Nederlandse MKB-bedrijven om AI meetbaar, betaalbaar en zonder
                vendor lock-in te maken. Geen consultant-speak, geen lange rapporten — een plan dat
                je morgen kunt uitvoeren.
              </p>
            </div>

            {/* Authority strip */}
            <div className="mt-10 pt-8 border-t border-[color:var(--color-line)] grid sm:grid-cols-3 gap-6">
              <TrustItem
                icon={<MapPin size={16} strokeWidth={2} />}
                label="Gevestigd"
                value="Tiel, NL"
              />
              <TrustItem
                icon={<FileCheck2 size={16} strokeWidth={2} />}
                label="KVK"
                value="85394041"
              />
              <TrustItem
                icon={<Layers size={16} strokeWidth={2} />}
                label="Werkt met"
                value="Claude · OpenAI · Gemini"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--color-ink-400)] mb-1.5">
      <span className="text-[color:var(--color-primary-600)]">{icon}</span>
      {label}
    </div>
    <div className="font-display text-base md:text-lg font-medium text-[color:var(--color-navy-900)] tracking-tight">
      {value}
    </div>
  </div>
);

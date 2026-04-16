import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { useReveal } from './useReveal';
import { trackEvent } from './analytics';

/**
 * Final booking section — inline Cal.com embed.
 * Loads embed.js and mounts the Cal widget into a dedicated mount point.
 */
export const FunnelBooking: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [calLoaded, setCalLoaded] = useState(false);
  const headerRef = useReveal<HTMLDivElement>();
  const embedContainerRef = useReveal<HTMLDivElement>({ threshold: 0.05 });

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return;

    // Cal.com embed.js loader (IIFE from their official snippet)
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          // eslint-disable-next-line prefer-rest-params
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              // eslint-disable-next-line prefer-rest-params
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // @ts-expect-error — Cal is a runtime global
    window.Cal('init', 'discoverycall', { origin: 'https://cal.com' });

    // @ts-expect-error — runtime global
    window.Cal.ns.discoverycall('inline', {
      elementOrSelector: mountRef.current,
      config: { layout: 'month_view', theme: 'light' },
      calLink: 'vandeeaisolutions/discoverycall',
    });

    // @ts-expect-error — runtime global
    window.Cal.ns.discoverycall('ui', {
      cssVarsPerTheme: {
        light: {
          'cal-brand': '#EA580C',
          'cal-text': '#0F172A',
          'cal-bg': '#FFFFFF',
        },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });

    // Detect when the Cal iframe has mounted so we can hide the spinner.
    const mountNode = mountRef.current;
    const observer = new MutationObserver(() => {
      if (mountNode.querySelector('iframe')) {
        setCalLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(mountNode, { childList: true, subtree: true });

    // Safety fallback — hide spinner after 6s even if detection fails
    const fallback = window.setTimeout(() => setCalLoaded(true), 6000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // Track Cal.com lifecycle events: user engaged with calendar, picked a slot, completed booking
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onMessage = (event: MessageEvent) => {
      // Only accept messages from Cal.com origin
      if (!event.origin?.includes('cal.com') && !event.origin?.includes('app.cal.com')) return;

      const data = event.data;
      if (!data || typeof data !== 'object') return;

      // Cal.com emits events with a `type` or `action` key
      const type = data.type || data.action || (data.data && data.data.type);

      switch (type) {
        case 'linkReady':
        case 'eventTypeViewed':
          trackEvent({ name: 'cal_loaded', location: 'booking' });
          break;
        case 'bookingSuccessful':
        case 'bookingSuccessfulV2':
          trackEvent({ name: 'booking_completed', location: 'booking', meta: { source: 'cal_embed' } });
          break;
        case '__dimensionChanged':
          // Cal.com resize event — user scrolled inside embed, signals engagement
          break;
        case '__routeChanged':
          // User navigated to time-slot view or confirmation
          if (data.data?.route?.includes('confirmation')) {
            trackEvent({ name: 'booking_completed', location: 'booking', meta: { source: 'cal_route' } });
          } else if (data.data?.route) {
            trackEvent({ name: 'cal_interaction', location: 'booking', meta: { route: String(data.data.route).slice(0, 48) } });
          }
          break;
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const bullets = [
    'Mini-audit van 3 processen waar je direct uren kunt winnen',
    "ROI-inschatting in euro's voor jouw specifieke situatie",
    'Advies: past het 90-Dagen Traject bij jou, of kun je het zelf?',
    'De Tech Stack Audit Spreadsheet mee naar huis — ook als we niet verder gaan',
  ];

  return (
    <section
      id="boek-gesprek"
      className="section-padding bg-[color:var(--color-navy-900)] text-[color:var(--color-cream)] relative overflow-hidden"
    >
      {/* Let Cal.com embed manage its own height — we only ensure no horizontal overflow */}
      <style>{`
        .cal-embed-shell cal-inline,
        .cal-embed-shell cal-inline > div {
          width: 100% !important;
        }
        .cal-embed-shell iframe {
          width: 100% !important;
          border: 0 !important;
          display: block !important;
        }
      `}</style>
      {/* Ambient background accents */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 60%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #FAFAF7 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-funnel relative">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="mx-auto mb-6 h-[2px] w-12 bg-[color:var(--color-primary-600)]" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--color-primary-400)] mb-5">
            08 — Het gesprek
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6"
            style={{ color: 'var(--color-cream)' }}
          >
            Ontdek welke <span className="font-bold" style={{ color: 'var(--color-primary-500)' }}>€52.000</span> je terug kunt winnen.
            <br />
            <span className="italic" style={{ color: 'var(--color-primary-500)' }}>Laten we praten.</span>
          </h2>
          <p className="text-lg md:text-xl text-[color:var(--color-ink-300)] leading-relaxed max-w-2xl mx-auto">
            30 minuten. Vrijblijvend. Je krijgt een concreet advies — of we nu samenwerken of niet.
          </p>
        </div>

        {/* Split layout: value bullets left, Cal.com embed right */}
        <div ref={embedContainerRef} className="reveal grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Value proposition column */}
          <aside className="space-y-8">
            <div>
              <h3
                className="font-display text-xl font-semibold mb-5 tracking-tight"
                style={{ color: 'var(--color-cream)' }}
              >
                Wat je uit het gesprek haalt
              </h3>
              <ul className="space-y-4">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color:var(--color-primary-600)] flex items-center justify-center mt-0.5">
                      <Check size={14} strokeWidth={2.75} className="text-white" />
                    </span>
                    <span className="text-[0.9375rem] text-[color:var(--color-ink-300)] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[color:var(--color-ink-300)]">Duur</span>
                <span className="font-semibold" style={{ color: 'var(--color-cream)' }}>30 minuten</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: 'var(--color-ink-300)' }}>Prijs</span>
                <span className="font-semibold" style={{ color: 'var(--color-primary-500)' }}>Gratis</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: 'var(--color-ink-300)' }}>Verplichtingen</span>
                <span className="font-semibold" style={{ color: 'var(--color-cream)' }}>Geen</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: 'var(--color-ink-300)' }}>Format</span>
                <span className="font-semibold" style={{ color: 'var(--color-cream)' }}>Online via video</span>
              </div>
            </div>
          </aside>

          {/* Cal.com inline embed wrapper — grows with Cal's natural content height (no internal scroll) */}
          <div className="cal-embed-shell relative bg-white rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] min-h-[520px]">
            {/* Loading placeholder — absolutely positioned so Cal.com can mount beneath, then hidden once iframe appears */}
            {!calLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center text-[color:var(--color-ink-400)] bg-white pointer-events-none">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[color:var(--color-primary-600)] border-t-transparent animate-spin mx-auto mb-4" />
                  <p className="text-sm">Agenda wordt geladen…</p>
                </div>
              </div>
            )}

            {/* Mount point for Cal.com — Cal manages its own height via postMessage resize */}
            <div
              ref={mountRef}
              id="cal-booking-inline"
              className="relative z-0 w-full"
            />
          </div>
        </div>

        {/* Reassurance strip under embed */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-[color:var(--color-ink-300)]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald-600)]" />
            Vrijblijvend
          </span>
          <span className="text-white/20">·</span>
          <span>30 minuten</span>
          <span className="text-white/20">·</span>
          <span>Geen verplichtingen</span>
          <span className="text-white/20">·</span>
          <span>Online via video</span>
        </div>
      </div>
    </section>
  );
};

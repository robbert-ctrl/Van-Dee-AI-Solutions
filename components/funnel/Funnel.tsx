import React, { useCallback, useEffect } from 'react';
import { startAnalytics, trackEvent } from './analytics';
import { useTrackSection } from './useTrackSection';
import { FunnelNav } from './FunnelNav';
import { FunnelHero } from './FunnelHero';
import { FunnelPain } from './FunnelPain';
import { FunnelSolution } from './FunnelSolution';
import { FunnelResults } from './FunnelResults';
import { FunnelOffer } from './FunnelOffer';
import { FunnelAbout } from './FunnelAbout';
import { FunnelFAQ } from './FunnelFAQ';
import { FunnelBooking } from './FunnelBooking';
import { FunnelFooter } from './FunnelFooter';

/**
 * Funnel — single-page discovery-call funnel.
 * One goal: get the visitor to book a call via the inline Cal.com embed.
 *
 * Section order:
 *  1. Hero             (benefit headline + one CTA)
 *  2. Pain             (4 PAS pain cards + bridge)
 *  3. Solution         (3-step process + 3-guarantee teaser + CTA)
 *  4. Results          (3 metric cards + tech trust bar)
 *  5. Offer            (Grand Slam: named package + bonus + 4 guarantees + scarcity)
 *  6. About / Guide    (Robbert — empathy + authority)
 *  7. FAQ              (8 accordion Q&As)
 *  8. Booking          (inline Cal.com embed — primary goal)
 *  9. Footer           (minimal — no exit nav)
 */
export const Funnel: React.FC = () => {
  // Start analytics on mount (logs page_view + begins flush loop)
  useEffect(() => {
    const stop = startAnalytics();
    return stop;
  }, []);

  // Central handler — takes a location so we know which CTA was clicked
  const scrollToBooking = useCallback((location = 'unknown') => {
    trackEvent({ name: 'cta_click', location, meta: { target: 'booking' } });
    const el = document.getElementById('boek-gesprek');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] text-[color:var(--color-navy-900)]">
      <FunnelNav onCtaClick={() => scrollToBooking('nav')} />

      <main id="main-content">
        <SectionTrack name="hero"><FunnelHero onCtaClick={() => scrollToBooking('hero')} /></SectionTrack>
        <SectionTrack name="pain"><FunnelPain onCtaClick={() => scrollToBooking('pain_bridge')} /></SectionTrack>
        <SectionTrack name="solution"><FunnelSolution onCtaClick={() => scrollToBooking('solution')} /></SectionTrack>
        <SectionTrack name="results"><FunnelResults /></SectionTrack>
        <SectionTrack name="offer"><FunnelOffer onCtaClick={() => scrollToBooking('offer')} /></SectionTrack>
        <SectionTrack name="about"><FunnelAbout /></SectionTrack>
        <SectionTrack name="faq"><FunnelFAQ /></SectionTrack>
        <SectionTrack name="booking"><FunnelBooking /></SectionTrack>
      </main>

      <FunnelFooter />
    </div>
  );
};

/* ─────────── Section-view tracking wrapper ─────────── */
const SectionTrack: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => {
  const ref = useTrackSection(name, 0.3);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {children}
    </div>
  );
};

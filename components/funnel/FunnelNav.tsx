import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

/**
 * FunnelNav — sticky navigation with ONLY brand + single CTA.
 * No menu links, no dropdowns, no exit points.
 */
export const FunnelNav: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[color:var(--color-cream)]/90 backdrop-blur-md border-b border-[color:var(--color-line)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-funnel flex items-center justify-between py-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 group" aria-label="Van Dee AI Solutions — home">
          <div className="w-9 h-9 rounded-lg bg-[color:var(--color-navy-900)] flex items-center justify-center">
            <span className="text-[color:var(--color-cream)] font-display font-bold text-base leading-none tracking-tight">vd</span>
          </div>
          <span className="hidden sm:inline font-display text-lg font-semibold text-[color:var(--color-navy-900)] tracking-tight">
            Van Dee <span className="text-[color:var(--color-ink-400)] font-normal">AI&nbsp;Solutions</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          {/* Scarcity badge — only visible md+ */}
          <div
            role="status"
            aria-label="Beschikbaarheid: 2 van 4 plekken in Q2 2026"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-cream-100)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary-600)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary-600)]" />
            </span>
            <span className="text-xs font-medium text-[color:var(--color-ink-500)]">
              Q2 2026 — <span className="text-[color:var(--color-navy-900)] font-semibold">2/4 plekken</span>
            </span>
          </div>

          {/* Single CTA */}
          <button
            onClick={onCtaClick}
            className="btn-primary text-sm px-4 py-2.5 md:px-5 md:py-3"
          >
            <Calendar size={16} strokeWidth={2.25} />
            <span className="hidden sm:inline">Plan gesprek</span>
            <span className="sm:hidden">Plan</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

/**
 * Minimal footer — brand, contact, KvK, privacy.
 * No navigation links that create exit points.
 */
export const FunnelFooter: React.FC = () => {
  return (
    <footer className="bg-[color:var(--color-cream)] border-t border-[color:var(--color-line)]">
      <div className="container-funnel py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start md:items-end">
          {/* Brand & essentials */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[color:var(--color-navy-900)] flex items-center justify-center">
                <span className="text-[color:var(--color-cream)] font-display font-bold text-base leading-none tracking-tight">vd</span>
              </div>
              <span className="font-display text-lg font-semibold text-[color:var(--color-navy-900)] tracking-tight">
                Van Dee <span className="text-[color:var(--color-ink-400)] font-normal">AI&nbsp;Solutions</span>
              </span>
            </div>
            <p className="text-sm text-[color:var(--color-ink-500)] leading-relaxed max-w-md">
              AI-implementatie voor Nederlandse MKB-bedrijven. Meetbaar, betaalbaar, zonder vendor lock-in.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
            <a
              href="mailto:robbert@vandeeaisolutions.com"
              className="flex items-center gap-2 text-[color:var(--color-ink-500)] hover:text-[color:var(--color-navy-900)] transition-colors"
            >
              <Mail size={16} strokeWidth={2} />
              robbert@vandeeaisolutions.com
            </a>
            <a
              href="https://www.linkedin.com/company/vandee-ai-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[color:var(--color-ink-500)] hover:text-[color:var(--color-navy-900)] transition-colors"
            >
              <Linkedin size={16} strokeWidth={2} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-10 pt-6 border-t border-[color:var(--color-line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[color:var(--color-ink-400)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Van Dee AI Solutions</span>
            <span className="hidden sm:inline text-[color:var(--color-line-strong)]">·</span>
            <span>Tiel, Gelderland</span>
            <span className="hidden sm:inline text-[color:var(--color-line-strong)]">·</span>
            <span>KVK 85394041</span>
          </div>
          <a
            href="/privacy"
            className="text-[color:var(--color-ink-500)] hover:text-[color:var(--color-navy-900)] transition-colors"
          >
            Privacybeleid
          </a>
        </div>
      </div>
    </footer>
  );
};

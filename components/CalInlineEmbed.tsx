import React, { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { Loader2, ExternalLink } from 'lucide-react';
import { useCalConfig } from '../hooks/useCalConfig';

interface CalInlineEmbedProps {
  calLink: string;
  config?: {
    layout?: 'month_view' | 'week_view' | 'column_view';
    theme?: 'light' | 'dark' | 'auto';
  };
}

export const CalInlineEmbed: React.FC<CalInlineEmbedProps> = ({
  calLink,
  config = { layout: 'month_view', theme: 'dark' }
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Use shared Cal.com configuration hook
  useCalConfig((config.theme || 'light') as 'light' | 'dark' | 'auto');

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();

        // Initialize inline embed
        cal("inline", {
          elementOrSelector: "#cal-inline-embed",
          calLink: calLink,
          config: {
            layout: (config.layout || "month_view") as any,
            theme: (config.theme || "light") as any
          }
        });

        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        console.error('Failed to load Cal.com inline embed:', error);
        setIsLoading(false);
        setHasError(true);
      }
    })();
  }, [calLink, config.layout, config.theme]);

  // Loading state
  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          width: '100%',
          minHeight: '700px'
        }}
      >
        <div className="flex flex-col items-center gap-4 text-gray-400">
          <Loader2 className="animate-spin" size={40} />
          <p>Agenda wordt geladen...</p>
        </div>
      </div>
    );
  }

  // Error state - show fallback link
  if (hasError) {
    return (
      <div
        className="flex items-center justify-center bg-white/5 rounded-2xl border border-white/10"
        style={{
          width: '100%',
          minHeight: '700px'
        }}
      >
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <p className="text-gray-300">
            Agenda kon niet worden geladen.
          </p>
          <a
            href={`https://cal.com/${calLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
          >
            Open agenda in nieuw tabblad
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      id="cal-inline-embed"
      style={{
        width: '100%',
        minHeight: '700px',
        overflow: 'visible'
      }}
    />
  );
};

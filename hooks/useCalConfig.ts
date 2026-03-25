import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

/**
 * Custom hook to configure Cal.com embed with consistent branding
 * Extracted to avoid duplication between CalPopupButton and CalInlineEmbed
 */
export const useCalConfig = (theme: 'light' | 'dark' | 'auto' = 'dark') => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          "styles": {
            "branding": {
              "brandColor": "#00f3ff"  // neon-cyan
            }
          },
          "hideEventTypeDetails": false,
          "theme": theme
        });
      } catch (error) {
        console.error('Failed to initialize Cal.com:', error);
      }
    })();
  }, [theme]);
};

import { useEffect, useRef } from 'react';
import { trackEvent } from './analytics';

/**
 * Fires a 'section_view' event the first time the element enters the viewport.
 *
 * Deduplication via module-level Set keyed by sessionId+sectionName,
 * so React 18 StrictMode's double-mount doesn't fire duplicate events.
 */
const firedKeys = new Set<string>();

export function useTrackSection(sectionName: string, threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sessionId =
      typeof window !== 'undefined' ? sessionStorage.getItem('vd_session_id') ?? 'anon' : 'ssr';
    const key = `${sessionId}:${sectionName}`;

    if (firedKeys.has(key)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firedKeys.has(key)) {
            firedKeys.add(key);
            trackEvent({ name: 'section_view', location: sectionName });
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -15% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName, threshold]);

  return ref;
}

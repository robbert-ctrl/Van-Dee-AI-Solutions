/**
 * Van Dee Analytics — thin wrapper around Vercel Analytics
 *
 * All events flow to Vercel Web Analytics, visible in the Vercel project dashboard.
 * Custom events are automatically categorized and searchable there.
 *
 * Privacy-first:
 *   - No cookies set by us
 *   - Anonymous session ID in sessionStorage (resets per tab close)
 *   - No PII stored
 */
import { track as vercelTrack } from '@vercel/analytics';

export type FunnelEvent = {
  /** Event name, e.g. 'cta_click' | 'section_view' | 'download' | 'booking_completed' */
  name: string;
  /** Where it happened — e.g. 'hero' | 'nav' | 'offer' */
  location?: string;
  /** Extra structured metadata (flattened into Vercel event properties) */
  meta?: Record<string, string | number | boolean>;
};

const SESSION_KEY = 'vd_session_id';

/** Stable session ID per browser tab (used by useTrackSection for dedup) */
function getSessionId(): string {
  if (typeof window === 'undefined') return 'ssr';
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

/**
 * Track a single event.
 * Safe to call from event handlers, effects, or anywhere client-side.
 */
export function trackEvent(event: FunnelEvent): void {
  if (typeof window === 'undefined') return;

  try {
    // Flatten meta + location into top-level properties for Vercel
    const props: Record<string, string | number | boolean> = {};
    if (event.location) props.location = event.location;
    if (event.meta) {
      for (const [k, v] of Object.entries(event.meta)) {
        if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
          props[k] = v;
        }
      }
    }
    vercelTrack(event.name, props);
  } catch {
    // Vercel Analytics not initialized — fine in dev or if script blocked
  }

  if (import.meta.env?.DEV) {
    // eslint-disable-next-line no-console
    console.log('📊 [track]', event.name, event.location ?? '', event.meta ?? '');
  }
}

/**
 * Called once on app mount. Initializes the session ID.
 * Vercel's <Analytics /> component handles pageview tracking automatically.
 */
export function startAnalytics(): () => void {
  if (typeof window === 'undefined') return () => {};
  getSessionId(); // ensure session ID is generated
  return () => {};
}

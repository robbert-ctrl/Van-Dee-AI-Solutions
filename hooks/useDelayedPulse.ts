import { useEffect, useRef, useState } from 'react';

export function useDelayedPulse(delayMs = 3000) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setShouldPulse(true), delayMs);
        } else {
          if (timer) clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delayMs]);

  return { ref, shouldPulse };
}

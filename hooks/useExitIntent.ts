import { useEffect, useState, useCallback } from 'react';

const SESSION_KEY = 'vandee-exit-intent-shown';

export function useExitIntent(delayMs = 10000) {
  const [showPopup, setShowPopup] = useState(false);

  const dismiss = useCallback(() => {
    setShowPopup(false);
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {}
  }, []);

  useEffect(() => {
    // Don't run on touch devices
    if (!window.matchMedia('(hover: hover)').matches) return;

    // Already shown this session
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {}

    let timeoutReached = false;
    const timer = setTimeout(() => {
      timeoutReached = true;
    }, delayMs);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && timeoutReached) {
        setShowPopup(true);
        try {
          sessionStorage.setItem(SESSION_KEY, 'true');
        } catch {}
        document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delayMs]);

  return { showPopup, dismiss };
}

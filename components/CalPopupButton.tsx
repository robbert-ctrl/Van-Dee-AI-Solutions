import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useCalConfig } from '../hooks/useCalConfig';

interface CalPopupButtonProps {
  calLink: string;
  children: React.ReactNode;
  className?: string;
  config?: {
    theme?: 'light' | 'dark' | 'auto';
  };
}

export const CalPopupButton: React.FC<CalPopupButtonProps> = ({
  calLink,
  children,
  className = '',
  config = { theme: 'dark' }
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Use shared Cal.com configuration hook
  useCalConfig(config.theme || 'dark');

  // Simple timeout to hide loading state after Cal.com initialization
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // If Cal.com fails to load, fallback to direct link
  if (hasError) {
    return (
      <a
        href={`https://cal.com/${calLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"theme":"dark"}'
      className={className}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={16} />
          Laden...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

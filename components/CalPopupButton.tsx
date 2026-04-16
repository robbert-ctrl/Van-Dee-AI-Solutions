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
  config = { theme: 'light' }
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useCalConfig((config.theme || 'light') as 'light' | 'dark' | 'auto');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
      data-cal-config='{"theme":"light"}'
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

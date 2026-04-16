import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  glow = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-xl",
    secondary: "bg-white text-slate-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
    outline: "border border-brand-600 text-brand-600 hover:bg-brand-50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

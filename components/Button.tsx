import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-secondary text-primary hover:bg-white hover:text-primary shadow-[0_4px_14px_0_rgba(197,160,89,0.39)]",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary",
    text: "text-white hover:text-secondary px-4 py-2 hover:bg-white/5",
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

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const hoverClasses = hover 
    ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]' 
    : '';

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
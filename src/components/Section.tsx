import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  icon: Icon, 
  children, 
  className = "" 
}) => {
  return (
    <section className={`
      rounded-lg shadow-md p-6 
      bg-white dark:bg-gray-800 
      transition-colors duration-200
      ${className}
    `}>
      <h2 className="
        text-2xl font-bold 
        text-gray-800 dark:text-gray-200 
        mb-4 flex items-center gap-2
      ">
        {Icon && <Icon className="text-blue-600 dark:text-blue-400" size={24} />}
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
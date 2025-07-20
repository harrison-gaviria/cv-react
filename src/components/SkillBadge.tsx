import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  skill: string;
  icon?: LucideIcon;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, icon: Icon, className = '' }) => {
  return (
    <span className={`
      inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
      bg-blue-100 dark:bg-blue-900/80
      text-blue-800 dark:text-blue-200
      transition-colors duration-200
      ${className}
    `}>
      {Icon && <Icon size={14} className="text-blue-600 dark:text-blue-300" />}
      {skill}
    </span>
  );
};

export default SkillBadge;
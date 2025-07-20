import React from 'react';
import { useTheme } from 'src/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg transition-colors ${
          isDark 
            ? 'bg-white text-blue-700' 
            : 'bg-blue-700 text-white hover:bg-blue-600'
        }`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
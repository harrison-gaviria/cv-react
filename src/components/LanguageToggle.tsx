import React from 'react';
import { useLanguage } from 'src/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          language === 'es' 
            ? 'bg-white text-blue-600' 
            : 'bg-blue-700 text-white hover:bg-blue-600'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          language === 'en' 
            ? 'bg-white text-blue-600' 
            : 'bg-blue-700 text-white hover:bg-blue-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;

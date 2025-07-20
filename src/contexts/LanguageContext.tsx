import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { Language, LanguageContextType, Translations } from 'src/types';
import { translations } from 'src/data/translations';


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('cv-language') : null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang as Language;
    }

    const browserLang = typeof window !== 'undefined' ? navigator.language : '';
    return browserLang.startsWith('en') ? 'en' : 'es';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cv-language', newLanguage);
    }
  };

  const t: Translations = translations[language];
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
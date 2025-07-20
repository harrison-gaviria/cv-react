import React from 'react';
import LanguageToggle from 'src/components/LanguageToggle';
import ThemeToggle from 'src/components/ThemeToggle';
import { useTranslation } from 'src/hooks/useTranslation';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-700 text-white">
      <div className="container mx-auto px-6 pb-2 pt-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-white text-left text-4xl font-bold mb-2">Harrison Alonso Arroyave Gaviria</h1>
            <p className="text-white text-left text-xl text-blue-100">{t.profession}</p>
          </div>

          <div className="flex gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
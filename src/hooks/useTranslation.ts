// src/hooks/useTranslation.ts
import { useContext } from 'react';
import LanguageContext from 'src/contexts/LanguageContext';
import { LanguageContextType } from 'src/types';

/**
 * Custom hook to access language context
 * Provides current language, translation function, and language setter
 *
 * @returns {LanguageContextType} Language context with current translations
 * @throws {Error} When used outside of LanguageProvider
 */
export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      'useTranslation must be used within a LanguageProvider. ' +
      'Make sure to wrap your component with <LanguageProvider>.'
    );
  }

  return context;
};

/**
 * Hook to get only the current language without translations
 * Useful when you only need to know the current language
 *
 * @returns {string} Current language ('es' | 'en')
 */
export const useCurrentLanguage = () => {
  const { language } = useTranslation();
  return language;
};

/**
 * Hook to get only the translation object
 * Useful when you only need translations without language control
 *
 * @returns {Translations} Current translations object
 */
export const useTranslations = () => {
  const { t } = useTranslation();
  return t;
};

/**
 * Hook to get only the language setter
 * Useful in components that only need to change language
 *
 * @returns {Function} Language setter function
 */
export const useLanguageSetter = () => {
  const { setLanguage } = useTranslation();
  return setLanguage;
};

export default useTranslation;
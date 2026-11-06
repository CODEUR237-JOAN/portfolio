import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

const LanguageContext = createContext();

const translations = { en, fr };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved || 'fr';
  });

  // Update <html lang> attribute and persist choice
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = useCallback((section, key) => {
    try {
      return translations[language]?.[section]?.[key] ?? key;
    } catch {
      return key;
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

import React, { createContext, useState, useContext } from 'react';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // default to French

  const translations = {
    en,
    fr
  };

  const t = (section, key) => {
    return translations[language][section][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

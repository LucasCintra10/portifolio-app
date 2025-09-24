"use client";
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    about: "About",
    name: "Lucas",
    surname: "Cintra",
    role: "Frontend Engineer blending",
    design: "design",
    performance: "high performance",
    userExperience: "user experience",
    roleDescription: "to build impactful digital products.",
    available: "Available for work",
    location: "Franca, Sao Paulo, Brazil",
    currently: "Currently",
    jobTitle: "Freelance Frontend Engineer",
    jobPeriod: "July 2025 — Present",
    skills: "Skills"
  },
  pt: {
    about: "Sobre",
    name: "Lucas",
    surname: "Cintra",
    role: "Engenheiro Frontend combinando",
    design: "design",
    performance: "alta performance",
    userExperience: "experiência do usuário",
    roleDescription: "para construir produtos digitais impactantes.",
    available: "Disponível para trabalho",
    location: "Franca, São Paulo, Brasil",
    currently: "Atualmente",
    jobTitle: "Engenheiro Frontend Freelance",
    jobPeriod: "Julho 2025 — Presente",
    skills: "Habilidades"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
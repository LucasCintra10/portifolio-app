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
    skills: "Skills",
    experience: "Experience",
    experiencePeriod: "2023 - 2025",
    oticketPeriod: "July 2023 - July 2025",
    fullStackDeveloper: "Full-Stack Developer",
    oticketCompany: "Oticket",
    oticketDescription: "Developed and maintained web applications using React, Next.js, Node.js and GO. Collaborated with cross-functional teams to design and implement new features, ensuring optimal performance and user experience.",
    unifacefPeriod: "February 2023 - June 2023",
    itIntern: "IT Intern",
    unifacefCompany: "UniFACEF",
    unifacefDescription: "Provided technical support and troubleshooting for hardware and software issues. Assisted in the maintenance of IT infrastructure, including network management and system updates.",
    technicalSupport: "Technical Support",
    systemMaintenance: "System Maintenance"
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
    skills: "Habilidades",
    experience: "Experiência",
    experiencePeriod: "2023 - 2025",
    oticketPeriod: "Julho 2023 - Julho 2025",
    fullStackDeveloper: "Desenvolvedor Full-Stack",
    oticketCompany: "Oticket",
    oticketDescription: "Desenvolvi e mantive aplicações web usando React, Next.js, Node.js e GO. Colaborei com equipes multifuncionais para projetar e implementar novas funcionalidades, garantindo performance otimizada e experiência do usuário.",
    unifacefPeriod: "Fevereiro 2023 - Junho 2023",
    itIntern: "Estagiário de TI",
    unifacefCompany: "UniFACEF",
    unifacefDescription: "Forneci suporte técnico e resolução de problemas para questões de hardware e software. Auxiliei na manutenção da infraestrutura de TI, incluindo gerenciamento de rede e atualizações de sistema.",
    technicalSupport: "Suporte Técnico",
    systemMaintenance: "Manutenção de Sistemas"
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
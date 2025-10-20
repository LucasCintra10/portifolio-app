"use client";
import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    about: "About",
    name: "Lucas",
    surname: "Cintra",
    role: "Full-stack Engineer blending",
    design: "design",
    performance: "high performance",
    userExperience: "user experience",
    roleDescription: "to build impactful digital products.",
    available: "Available for work",
    location: "Franca, Sao Paulo, Brazil",
    currently: "Currently",
    jobTitle: "Freelance Full-stack Engineer",
    jobPeriod: "July 2025 — Present",
    skills: "Skills",
    experience: "Experience",
    experiencePeriod: "2023 - 2025",
    oticketPeriod: "July 2023 - July 2025",
    fullStackDeveloper: "Full-Stack Developer",
    oticketCompany: "Oticket",
    oticketDescription:
      "Developed and maintained web applications using React, Next.js, Node.js and GO. Collaborated with cross-functional teams to design and implement new features, ensuring optimal performance and user experience.",
    unifacefPeriod: "February 2023 - June 2023",
    itIntern: "IT Intern",
    unifacefCompany: "UniFACEF",
    unifacefDescription:
      "Provided technical support and troubleshooting for hardware and software issues. Assisted in the maintenance of IT infrastructure, including network management and system updates.",
    technicalSupport: "Technical Support",
    systemMaintenance: "System Maintenance",
    contact: "Contact",
    projects: "Projects",
    mortydexDescription:
      "A project to demonstrate the capabilities of consuming an Rest API and using Next.js to build a responsive and fast web application.",
    ordinisDescription:
      "A project developed using Next.js and Node.js to help a school manage their patrimony, allowing users to create, read, update, and delete items in the inventory.",
    projectView: "View Project",
    contactDescription:
      "Always interested in new opportunities, collaborations, and conversations about technology and design. Feel free to reach out!",
    socials: "Socials",
    footerDescription: "© 2025 Lucas Cintra. All rights reserved.",
  },
  pt: {
    about: "Sobre",
    name: "Lucas",
    surname: "Cintra",
    role: "Engenheiro Full-stack combinando",
    design: "design",
    performance: "alta performance",
    userExperience: "experiência do usuário",
    roleDescription: "para construir produtos digitais impactantes.",
    available: "Disponível para trabalho",
    location: "Franca, São Paulo, Brasil",
    currently: "Atualmente",
    jobTitle: "Engenheiro Full-stack Freelance",
    jobPeriod: "Julho 2025 — Presente",
    skills: "Habilidades",
    experience: "Experiência",
    experiencePeriod: "2023 - 2025",
    oticketPeriod: "Julho 2023 - Julho 2025",
    fullStackDeveloper: "Desenvolvedor Full-Stack",
    oticketCompany: "Oticket",
    oticketDescription:
      "Desenvolvi e mantive aplicações web usando React, Next.js, Node.js e GO. Colaborei com equipes multifuncionais para projetar e implementar novas funcionalidades, garantindo performance otimizada e experiência do usuário.",
    unifacefPeriod: "Fevereiro 2023 - Junho 2023",
    itIntern: "Estagiário de TI",
    unifacefCompany: "UniFACEF",
    unifacefDescription:
      "Forneci suporte técnico e resolução de problemas para questões de hardware e software. Auxiliei na manutenção da infraestrutura de TI, incluindo gerenciamento de rede e atualizações de sistema.",
    technicalSupport: "Suporte Técnico",
    systemMaintenance: "Manutenção de Sistemas",
    projects: "Projetos",
    mortydexDescription:
      "Um projeto para demonstrar as capacidades de consumir uma API Rest e usar Next.js para construir uma aplicação web responsiva e rápida.",
    ordinisDescription:
      "Um projeto desenvolvido usando Next.js e Node.js para ajudar uma escola a gerenciar seu patrimônio, permitindo que os usuários criem, leiam, atualizem e excluam itens no inventário.",
    projectView: "Ver Projeto",
    contact: "Contato",
    contactDescription:
      "Sempre interessado em novas oportunidades, colaborações e conversas sobre tecnologia e design. Sinta-se à vontade para entrar em contato!",
    socials: "Redes Sociais",
    footerDescription: "© 2025 Lucas Cintra. Todos os direitos reservados.",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const t = (key) => translations[language][key] || key;

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

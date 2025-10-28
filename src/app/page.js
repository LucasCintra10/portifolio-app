"use client";
import { MapPinIcon, SunIcon, MoonIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ButtonSection from "@/components/ButtonSection";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "Typescript",
  "UI/UX Design",
  "SEO",
  "Core Web Vitals",
  "GraphQL",
  "Tailwind CSS",
  "Node.js",
  "SSR / SSG / SPA",
  "GO",
  "PostgreSQL",
  "Jest",
  "Cypress",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) {
              setActiveSection("about");
            } else if (entry.target === experienceRef.current) {
              setActiveSection("experience");
            } else if (entry.target === projectRef.current) {
              setActiveSection("project");
            } else if (entry.target === contactRef.current) {
              setActiveSection("contact");
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex justify-center flex-col items-center relative bg-background text-text transition-colors duration-500">
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none transition-colors duration-500"></div>

      <nav className="hidden md:fixed left-8 top-1/2 transform -translate-y-1/2 z-20 md:flex flex-col space-y-4">
        <ButtonSection onClick={() => scrollToSection(aboutRef)} activeSection={activeSection} />
        <ButtonSection onClick={() => scrollToSection(experienceRef)} activeSection={activeSection} />
        <ButtonSection onClick={() => scrollToSection(projectRef)} activeSection={activeSection} />
        <ButtonSection onClick={() => scrollToSection(contactRef)} activeSection={activeSection} />
      </nav>

      <div className="absolute right-4 top-12 mb-4 flex space-x-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 text-xs font-mono border border-border rounded-xl hover:border-primary transition-all duration-300 flex items-center  justify-center cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleLanguage}
          className="w-10 h-10 text-xs font-mono border border-border rounded-xl hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          {language === "en" ? "PT" : "EN"}
        </button>
      </div>

      <motion.section
        ref={aboutRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[38%] h-screen flex flex-col space-y-4 items-center justify-center"
      >
        <div>
          <motion.div variants={itemVariants} className="flex flex-col space-y-1">
            <span className="text-secondary text-sm font-mono uppercase mb-4">{t("about")}</span>
            <h1 className="w-0 text-5xl font-light text-wrap mb-4">
              <span>{t("name")}</span>
              <br />
              <span className="text-secondary">{t("surname")}</span>
            </h1>
            <h2 className="text-secondary mb-4">
              {t("role")} <span className="text-primary">{t("design")}</span>,{" "}
              <span className="text-primary">{t("performance")}</span>,{" "}
              <span className="text-primary">{t("userExperience")}</span> {t("roleDescription")}
            </h2>
            <h3 className="flex items-center space-x-2">
              <div className="h-2 w-2 mr-3 bg-green-500 rounded-full animate-pulse "></div>
              <p className="text-sm text-secondary font-mono">{t("available")}</p>
            </h3>
            <h3 className="text-secondary text-sm">
              <MapPinIcon className="h-4 w-4 inline-block mr-1" />
              {t("location")}
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col space-y-1">
            <span className="text-secondary text-sm font-mono uppercase mb-4">{t("currently")}</span>
            <h2 className="text-primary">{t("jobTitle")}</h2>
            <h3 className="text-secondary text-xs">{t("jobPeriod")}</h3>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col ">
            <span className="text-secondary text-sm font-mono uppercase mb-4">{t("skills")}</span>
            <div>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-primary text-xs border border-border rounded-full px-2 py-1 mr-2 mb-2 hover:border-primary transition-all duration-300 inline-block"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={experienceRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[38%] h-screen mt-8 flex flex-col items-center md:justify-center"
      >
        <motion.div variants={itemVariants} className="w-full flex space-y-1 flex-col justify-between items-baseline">
          <h2 className="text-primary text-3xl">{t("experience")}</h2>
          <span className="text-secondary text-sm font-mono uppercase">{t("experiencePeriod")}</span>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 mt-12 border-b border-border pb-8">
          <h3 className="text-secondary text-xl">{t("oticketPeriod")}</h3>
          <div className="flex flex-col">
            <span className="text-primary text-lg">{t("fullStackDeveloper")}</span>
            <span className="text-secondary">{t("oticketCompany")}</span>
          </div>
          <span className="text-secondary">{t("oticketDescription")}</span>
          <div className="text-xs flex flex-wrap gap-6">
            <span className="pr-2">React </span>
            <span>Next.js </span>
            <span>Node.js </span>
            <span>GO</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 mt-12 border-b border-border pb-8">
          <h3 className="text-secondary text-xl">{t("unifacefPeriod")}</h3>
          <div className="flex flex-col">
            <span className="text-primary">{t("itIntern")}</span>
            <span className="text-secondary">{t("unifacefCompany")}</span>
          </div>
          <span className="text-secondary">{t("unifacefDescription")}</span>
          <div className="text-xs flex flex-wrap gap-6">
            <span className="pr-2">{t("technicalSupport")}</span>
            <span>{t("systemMaintenance")}</span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={projectRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[38%] h-screen mt-8 flex flex-col items-center md:justify-center"
      >
        <motion.div variants={itemVariants} className="w-full flex space-y-1 flex-col justify-between items-baseline">
          <h2 className="text-primary text-3xl">{t("projects")}</h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-12 border border-border rounded-xl p-4 hover:border-primary transition-all duration-300 cursor-pointer group"
          onClick={() => window.open("https://web-mortydex.vercel.app/", "_blank")}
        >
          <div className="flex justify-between items-start">
            <span className="text-secondary text-xs font-mono uppercase">2025</span>
            <Image src="/mortydex.svg" alt="MortyDex Logo" width={40} height={40} className="flex-shrink-0" />
          </div>
          <h3 className="text-primary text-xl hover:text-secondary transition-all duration-300">MortyDex</h3>
          <span className="text-secondary">{t("mortydexDescription")}</span>
          <a
            href="https://web-mortydex.vercel.app/"
            className="cursor-pointer text-secondary group-hover:text-primary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projectView")}
            <ArrowLongRightIcon className="h-4 w-4 inline-block ml-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-12 border border-border rounded-xl p-4 hover:border-primary transition-all duration-300 cursor-pointer group"
          onClick={() => window.open("https://ordinis.vercel.app/", "_blank")}
        >
          <div className="flex justify-between items-start">
            <span className="text-secondary text-xs font-mono uppercase">2023</span>
            <Image src="/ordinis.svg" alt="Ordinis Logo" width={40} height={40} className="flex-shrink-0" />
          </div>
          <h3 className="text-primary text-xl hover:text-secondary transition-all duration-300">Ordinis</h3>
          <span className="text-secondary">{t("ordinisDescription")}</span>
          <a
            href="https://ordinis.vercel.app/"
            className="cursor-pointer text-secondary group-hover:text-primary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projectView")}
            <ArrowLongRightIcon className="h-4 w-4 inline-block ml-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        ref={contactRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[38%] h-[90vh] mt-8 flex flex-col items-center justify-center"
      >
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 justify-between items-baseline">
          <h2 className="text-primary text-3xl">{t("contact")}</h2>
          <span className="text-secondary">{t("contactDescription")}</span>
          <a
            href="mailto:lucasrcintra10@hotmail.com"
            className="hover:text-secondary transition-all duration-300 text-primary group"
          >
            lucasrcintra10@hotmail.com
            <ArrowLongRightIcon className="h-6 w-6 inline-block ml-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </motion.div>
        <motion.div variants={itemVariants} className="w-full flex flex-col mt-12 ">
          <h3 className="text-secondary text-sm font-mono uppercase mb-4">{t("socials")}</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/lucasrcintra/" target="_blank" rel="noopener noreferrer">
              <div className="w-38 h-24 p-4 border border-border flex flex-col justify-center rounded-xl text-primary hover:border-primary transition-all duration-300 cursor-pointer">
                <span>LinkedIn</span>
                <span className="text-secondary">lucasrcintra</span>
              </div>
            </a>
            <a href="https://github.com/LucasCintra10" target="_blank" rel="noopener noreferrer">
              <div className="w-38 h-24 p-4 border border-border flex flex-col justify-center rounded-xl text-primary hover:border-primary transition-all duration-300 cursor-pointer">
                <span>GitHub</span>
                <span className="text-secondary">@LucasCintra10</span>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.section>

      <motion.footer
        variants={itemVariants}
        className="w-[90%] md:w-[38%] flex flex-col border-t border-border pt-4 pb-4 items-center"
      >
        <span className="text-secondary text-sm">{t("footerDescription")}</span>
      </motion.footer>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
    </div>
  );
}

"use client";
import { MapPinIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen flex justify-center flex-col items-center relative bg-background text-text transition-colors duration-500">

      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

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
      <motion.header
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
      </motion.header>

      <motion.div
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
      </motion.div>
    </div>
  );
}

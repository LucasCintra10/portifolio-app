"use client";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

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
];

export default function Home() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex justify-center">
      <div className="absolute right-4 top-6 justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono border border-border rounded-full px-3 py-1 hover:border-primary transition-all duration-300"
          >
            {language === "en" ? "PT" : "EN"}
          </button>
        </div>
      <header className="w-[90%] mt-8 flex flex-col space-y-4">
        <span className="text-secondary text-sm font-mono uppercase mb-4">{t("about")}</span>
        <h1 className="w-0 text-5xl font-light text-wrap">
          <span>{t("name")}</span>
          <br />
          <span className="text-secondary">{t("surname")}</span>
        </h1>
        <h2 className="text-secondary">
          {t("role")} <span className="text-primary">{t("design")}</span>, {" "}
          <span className="text-primary">{t("performance")}</span>, {" "}
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

        <div className="mt-12 flex flex-col space-y-1">
          <span className="text-secondary text-sm font-mono uppercase mb-4">{t("currently")}</span>
          <h2 className="text-primary">{t("jobTitle")}</h2>
          <h3 className="text-secondary text-xs">{t("jobPeriod")}</h3>
        </div>

        <div className="mt-12 flex flex-col space-y-1">
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
        </div>
      </header>
    </div>
  );
}

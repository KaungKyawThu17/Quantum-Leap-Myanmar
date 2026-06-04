import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { i18nContent, type Lang, type LocalizedContent } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  content: LocalizedContent;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "my") setLangState(saved);
    } catch {
      // Ignore storage access errors in restricted browser contexts.
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      // Ignore storage access errors in restricted browser contexts.
    }
  };

  const content = i18nContent[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

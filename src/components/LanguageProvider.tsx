"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/data/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "fr") {
      setLocale(saved);
    }
  }, []);

  function toggle() {
    const next = locale === "en" ? "fr" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);
    document.documentElement.lang = next;
  }

  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale], toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}

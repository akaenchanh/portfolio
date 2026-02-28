"use client";

import { useTranslation } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, toggle } = useTranslation();

  return (
    <button
      onClick={toggle}
      aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
      className="rounded-full px-2.5 py-1 text-xs font-semibold text-muted transition-colors hover:text-foreground"
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}

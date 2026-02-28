"use client";

import { FadeIn } from "./FadeIn";
import { useTranslation } from "./LanguageProvider";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-muted uppercase">
            {t.about.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "./FadeIn";
import { useTranslation } from "./LanguageProvider";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-muted uppercase">
            {t.experience.title}
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-12">
          {t.experience.items.map((exp, i) => (
            <FadeIn key={`${exp.company}-${exp.period}`} delay={i * 0.1}>
              <div className="group">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-muted">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

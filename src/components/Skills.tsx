"use client";

import { FadeIn } from "./FadeIn";
import { useTranslation } from "./LanguageProvider";

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-muted uppercase">
            {t.skills.title}
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {t.skills.categories.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

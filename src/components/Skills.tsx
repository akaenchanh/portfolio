"use client";

import { motion } from "framer-motion";
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
                {group.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1 + skillIndex * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full border border-border bg-surface/50 px-3 py-1 text-sm text-muted transition-all hover:border-foreground/30 hover:bg-surface hover:text-foreground hover:shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

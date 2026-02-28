"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "./LanguageProvider";

export function Experience() {
  const { t } = useTranslation();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-muted uppercase">
            {t.experience.title}
          </h2>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative mt-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-0.5 bg-border md:block md:left-1/2 md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-foreground md:left-1/2" />

                  {/* Content Card */}
                  <div
                    className={`ml-12 transition-all hover:scale-[1.02] md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="group rounded-xl border border-border bg-surface/50 p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
                      {/* Date Badge */}
                      <div className="mb-4">
                        <span className="inline-block rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role and Company */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-muted">
                          {exp.company}
                        </p>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.15 + hIndex * 0.05,
                            }}
                            className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

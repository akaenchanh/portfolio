"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "./LanguageProvider";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

function AvatarPlaceholder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full text-muted/40"
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12Zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8Z" />
    </svg>
  );
}

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-3xl">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8"
        >
          {/*TODO:  Replace src with photo: /avatar.jpg (place in public/) */}
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-surface">
            <Image
              src="/avatar.jpg"
              alt="Annabelle Kaenchanh"
              fill
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <AvatarPlaceholder />
            </div>
          </div>
        </motion.div>
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="mb-4 text-sm font-medium tracking-widest text-muted uppercase"
        >
          {t.hero.role}
        </motion.p>
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          Annabelle
          <br />
          Kaenchanh
        </motion.h1>
        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {t.hero.cta}
          </a>
          <a
            href="#experience"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            {t.hero.ctaSecondary}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            {t.hero.resume}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

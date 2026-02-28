export type Locale = "en" | "fr";

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    cta: string;
    ctaSecondary: string;
    resume: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: {
      company: string;
      role: string;
      period: string;
      highlights: string[];
    }[];
  };
  projects: {
    title: string;
    viewCode: string;
    viewDemo: string;
    items: ProjectItem[];
  };
  skills: {
    title: string;
    categories: { category: string; items: string[] }[];
  };
  contact: {
    title: string;
    description: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineer",
      tagline:
        "I build reliable, scalable systems and craft clean software that solves real problems. Currently focused on full-stack development and distributed systems.",
      cta: "Get in touch",
      ctaSecondary: "View my work",
      resume: "Resume",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm Annabelle — a software engineer who loves turning complex problems into simple, elegant solutions. I care deeply about code quality, developer experience, and building products that people actually enjoy using.",
        "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or learning something completely unrelated to tech. I believe the best engineers are endlessly curious.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Company Name",
          role: "Senior Software Engineer",
          period: "2024 — Present",
          highlights: [
            "Led development of a customer-facing platform serving 100k+ users",
            "Designed and implemented microservices architecture reducing latency by 40%",
            "Mentored a team of 4 junior developers through code reviews and pair programming",
          ],
        },
        {
          company: "Previous Company",
          role: "Software Engineer",
          period: "2022 — 2024",
          highlights: [
            "Built RESTful APIs and GraphQL services powering the core product",
            "Migrated legacy monolith to a modern React + Node.js stack",
            "Improved CI/CD pipeline reducing deployment time from 30 min to 5 min",
          ],
        },
        {
          company: "First Company",
          role: "Junior Software Engineer",
          period: "2020 — 2022",
          highlights: [
            "Developed full-stack features using TypeScript, React, and PostgreSQL",
            "Collaborated with product and design teams in an agile environment",
            "Wrote comprehensive unit and integration tests achieving 90% coverage",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      viewCode: "Code",
      viewDemo: "Demo",
      items: [
        {
          name: "Cloud Dashboard",
          description:
            "A real-time monitoring dashboard for cloud infrastructure with live metrics, alerting, and resource management.",
          tech: ["React", "TypeScript", "D3.js", "WebSocket"],
          github: "https://github.com/annabellekaenchanh/cloud-dashboard",
          demo: "https://cloud-dashboard.example.com",
        },
        {
          name: "CLI Task Runner",
          description:
            "A fast, extensible command-line tool for automating development workflows with plugin support and parallel execution.",
          tech: ["Rust", "TOML", "GitHub Actions"],
          github: "https://github.com/annabellekaenchanh/cli-task-runner",
        },
        {
          name: "Recipe API",
          description:
            "A RESTful API for managing and searching recipes with full-text search, authentication, and rate limiting.",
          tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
          github: "https://github.com/annabellekaenchanh/recipe-api",
          demo: "https://recipe-api.example.com",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          category: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
        },
        {
          category: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "Vue.js"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          category: "DevOps & Tools",
          items: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "I'm always open to new opportunities and interesting conversations. Feel free to reach out.",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      role: "Ingénieure logiciel",
      tagline:
        "Je conçois des systèmes fiables et évolutifs, et je développe des logiciels propres qui résolvent de vrais problèmes. Actuellement spécialisée en développement full-stack et systèmes distribués.",
      cta: "Me contacter",
      ctaSecondary: "Voir mon parcours",
      resume: "CV",
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Bonjour, je suis Annabelle — une ingénieure logiciel passionnée par la transformation de problèmes complexes en solutions simples et élégantes. J'accorde une grande importance à la qualité du code, à l'expérience développeur et à la création de produits que les gens aiment vraiment utiliser.",
        "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à l'open source ou d'apprendre quelque chose de complètement différent du monde de la tech. Je crois que les meilleurs ingénieurs sont éternellement curieux.",
      ],
    },
    experience: {
      title: "Expérience",
      items: [
        {
          company: "Nom de l'entreprise",
          role: "Ingénieure logiciel senior",
          period: "2024 — Présent",
          highlights: [
            "Direction du développement d'une plateforme client servant plus de 100 000 utilisateurs",
            "Conception et implémentation d'une architecture microservices réduisant la latence de 40 %",
            "Mentorat d'une équipe de 4 développeurs juniors via des revues de code et du pair programming",
          ],
        },
        {
          company: "Entreprise précédente",
          role: "Ingénieure logiciel",
          period: "2022 — 2024",
          highlights: [
            "Développement d'APIs REST et de services GraphQL alimentant le produit principal",
            "Migration d'un monolithe vers une stack moderne React + Node.js",
            "Amélioration du pipeline CI/CD réduisant le temps de déploiement de 30 min à 5 min",
          ],
        },
        {
          company: "Première entreprise",
          role: "Ingénieure logiciel junior",
          period: "2020 — 2022",
          highlights: [
            "Développement de fonctionnalités full-stack avec TypeScript, React et PostgreSQL",
            "Collaboration avec les équipes produit et design dans un environnement agile",
            "Rédaction de tests unitaires et d'intégration complets atteignant 90 % de couverture",
          ],
        },
      ],
    },
    projects: {
      title: "Projets",
      viewCode: "Code",
      viewDemo: "Démo",
      items: [
        {
          name: "Cloud Dashboard",
          description:
            "Un tableau de bord de monitoring en temps réel pour l'infrastructure cloud avec des métriques live, des alertes et la gestion des ressources.",
          tech: ["React", "TypeScript", "D3.js", "WebSocket"],
          github: "https://github.com/annabellekaenchanh/cloud-dashboard",
          demo: "https://cloud-dashboard.example.com",
        },
        {
          name: "CLI Task Runner",
          description:
            "Un outil en ligne de commande rapide et extensible pour automatiser les workflows de développement avec support de plugins et exécution parallèle.",
          tech: ["Rust", "TOML", "GitHub Actions"],
          github: "https://github.com/annabellekaenchanh/cli-task-runner",
        },
        {
          name: "Recipe API",
          description:
            "Une API RESTful pour gérer et rechercher des recettes avec recherche plein texte, authentification et limitation de débit.",
          tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
          github: "https://github.com/annabellekaenchanh/recipe-api",
          demo: "https://recipe-api.example.com",
        },
      ],
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          category: "Langages",
          items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
        },
        {
          category: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "Vue.js"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
          category: "DevOps & Outils",
          items: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "Je suis toujours ouverte à de nouvelles opportunités et à des échanges intéressants. N'hésitez pas à me contacter.",
    },
  },
};

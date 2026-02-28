export type Locale = "en" | "fr";

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  category: string;
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
    allCategories: string;
    noProjects: string;
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
      role: "Data Scientist | Web Developer",
      tagline:
        "Recently graduated, I am enthusiastic and eager to learn and actively contribute to your team. Passionate about data science, AI, and full-stack development.",
      cta: "Get in touch",
      ctaSecondary: "View my work",
      resume: "Resume",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm Annabelle — a Data Scientist and Web Developer with a passion for turning data into insights and building innovative solutions. I hold an engineering degree from ESIEE Paris, specialized in Data Science and Artificial Intelligence, and completed a Master's in Data Science at Heriot-Watt University in Edinburgh.",
        "I have experience in full-stack development, working with Java Spring, Node.js, Angular, React, and Vue.js. I'm also passionate about data analysis, machine learning, and creating interactive dashboards with Power BI, R, and Python. When I'm not coding, you'll find me playing tennis, practicing piano, or exploring new technologies.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Disneyland",
          role: "FullStack Engineer",
          period: "October 2024 — Present",
          highlights: [
            "Working in the ecommerce team developing and maintaining web applications",
            "Building scalable solutions for online commerce platforms",
            "Collaborating with cross-functional teams to deliver high-quality user experiences",
          ],
        },
        {
          company: "Oxyl - OxA",
          role: "FullStack Developer",
          period: "October 2023 — October 2024",
          highlights: [
            "Developed an Oracle server with MVC architecture and microservices",
            "Created APIs to integrate various artificial intelligence systems",
            "Built a chatbot with a user-friendly interface",
            "OxA is an AI-powered tool used within the company to assist collaborators daily, serving as a personalized coach during training",
          ],
        },
        {
          company: "Engie - eDayWork",
          role: "FullStack Developer",
          period: "May — July 2023",
          highlights: [
            "Onboarded to the platform and added absence management features",
            "Implemented personalized explanations for executive package benefits",
            "Modified and improved the user interface",
          ],
        },
        {
          company: "NewroFactory - Oxyl",
          role: "FullStack Developer",
          period: "February — May 2023",
          highlights: [
            "Developed CRUD management through web services, web application, and command-line interface",
            "Iterative development replacing legacy frameworks step by step",
            "Implemented code reviews at each stage to ensure best practices and modular architecture",
            "Practiced Scrum methodology and TDD approach with training on Git, Maven, Angular, React, VueJS, Web services, and AWS",
          ],
        },
        {
          company: "Setec eocen",
          role: "Data Scientist",
          period: "May — August 2022",
          highlights: [
            "Reviewed and analyzed AI use cases for the innovation program",
            "Studied the relevance of AI in Project Management",
            "Developed AI solutions using machine learning",
            "Identified and implemented the best AI approaches",
            "Developed algorithms in Python",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      viewCode: "Code",
      viewDemo: "Demo",
      allCategories: "All",
      noProjects: "No projects found",
      items: [
        {
          name: "Data Professions Survey Analysis",
          description:
            "Personal project analyzing a survey on data professions using Power BI. Extracted, cleaned, and transformed raw data to create an interactive dashboard and understand market trends.",
          tech: ["Power BI", "Data Analysis", "Data Visualization"],
          category: "Data Science",
        },
        {
          name: "Titanic Dataset Algorithm Portfolio",
          description:
            "5th year project using various machine learning algorithms for Titanic dataset analysis. Continuously improved the portfolio by exploring new methods and adjusting hyperparameters to optimize results.",
          tech: ["Python", "Machine Learning", "Data Science"],
          category: "Data Science",
        },
        {
          name: "Data Visualization Dashboards",
          description:
            "4th year project creating interactive dashboards in R and Python. Cleaned data from an online dataset, designed interactive dashboards, and performed data analysis and interpretation.",
          tech: ["R", "Python", "Data Visualization", "Dashboard"],
          category: "Data Science",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          category: "Programming Languages",
          items: ["Java (OCA & OCP Certified)", "C", "Python", "R", "SQL", "HTML/CSS"],
        },
        {
          category: "Frontend",
          items: ["React", "Angular", "Vue.js", "Next.js"],
        },
        {
          category: "Backend & Frameworks",
          items: ["Java Spring", "Node.js", "JEE", "JSP", "Spring MVC", "Spring Security"],
        },
        {
          category: "Data & Analytics",
          items: ["Power BI", "Machine Learning", "Data Visualization"],
        },
        {
          category: "DevOps & Tools",
          items: ["Git", "GitHub", "GitLab", "Docker", "Amazon AWS", "Postman", "Maven"],
        },
        {
          category: "Design & Multimedia",
          items: ["Photoshop", "Adobe Premiere Pro"],
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
      role: "Data Scientist | Développeuse Web",
      tagline:
        "Fraîchement diplômée, je suis enthousiaste et désireuse d'apprendre et de contribuer activement à votre équipe. Passionnée par la data science, l'IA et le développement full-stack.",
      cta: "Me contacter",
      ctaSecondary: "Voir mon parcours",
      resume: "CV",
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Bonjour, je suis Annabelle — Data Scientist et Développeuse Web passionnée par la transformation de données en insights et la création de solutions innovantes. Je suis diplômée d'ESIEE Paris, spécialisée en Data Science et Intelligence Artificielle, et j'ai complété un Master en Data Science à l'Université Heriot-Watt d'Édimbourg.",
        "J'ai de l'expérience en développement full-stack, travaillant avec Java Spring, Node.js, Angular, React et Vue.js. Je suis également passionnée par l'analyse de données, le machine learning et la création de tableaux de bord interactifs avec Power BI, R et Python. Quand je ne code pas, vous me trouverez en train de jouer au tennis, de pratiquer le piano ou d'explorer de nouvelles technologies.",
      ],
    },
    experience: {
      title: "Expérience",
      items: [
        {
          company: "Disneyland",
          role: "Ingénieure FullStack",
          period: "Octobre 2024 — Présent",
          highlights: [
            "Travail dans l'équipe ecommerce développant et maintenant des applications web",
            "Construction de solutions évolutives pour les plateformes de commerce en ligne",
            "Collaboration avec des équipes interfonctionnelles pour offrir des expériences utilisateur de haute qualité",
          ],
        },
        {
          company: "Oxyl - OxA",
          role: "Développeuse FullStack",
          period: "Octobre 2023 — Octobre 2024",
          highlights: [
            "Développement d'un serveur Oracle avec architecture MVC et microservices",
            "Création d'APIs pour intégrer différents systèmes d'intelligence artificielle",
            "Création d'un chatbot avec une interface utilisateur",
            "OxA est un outil alimenté par l'IA utilisé au sein de l'entreprise pour accompagner les collaborateurs au quotidien, servant de coach personnalisé lors des formations",
          ],
        },
        {
          company: "Engie - eDayWork",
          role: "Développeuse FullStack",
          period: "Mai — Juillet 2023",
          highlights: [
            "Prise en main de la plateforme et ajout des fonctionnalités de gestion des absences",
            "Implémentation d'explications personnalisées pour les avantages du forfait cadre",
            "Modification et amélioration de l'interface utilisateur",
          ],
        },
        {
          company: "NewroFactory - Oxyl",
          role: "Développeuse FullStack",
          period: "Février — Mai 2023",
          highlights: [
            "Développement de la gestion CRUD via des services web, application web et interface en ligne de commande",
            "Développement itératif remplaçant les frameworks legacy étape par étape",
            "Mise en place de revues de code à chaque étape pour assurer les bonnes pratiques et l'architecture modulaire",
            "Pratique de la méthodologie Scrum et approche TDD avec formation sur Git, Maven, Angular, React, VueJS, Web services et AWS",
          ],
        },
        {
          company: "Setec eocen",
          role: "Data Scientist",
          period: "Mai — Août 2022",
          highlights: [
            "Examen et analyse des cas d'usage IA du programme d'innovation",
            "Étude de la pertinence de l'IA dans la Gestion de Projet",
            "Développement de solutions IA utilisant le machine learning",
            "Identification et implémentation des meilleures approches IA",
            "Développement d'algorithmes en Python",
          ],
        },
      ],
    },
    projects: {
      title: "Projets",
      viewCode: "Code",
      viewDemo: "Démo",
      allCategories: "Tous",
      noProjects: "Aucun projet trouvé",
      items: [
        {
          name: "Analyse d'un sondage sur les professions de la data",
          description:
            "Projet personnel utilisant Power BI pour analyser un sondage sur les professions de la data. Extraction, nettoyage et transformation des données brutes pour créer un tableau de bord interactif et comprendre les tendances du marché.",
          tech: ["Power BI", "Analyse de données", "Visualisation de données"],
          category: "Data Science",
        },
        {
          name: "Portfolio d'algorithmes pour l'analyse du jeu de données sur le Titanic",
          description:
            "Projet de 5ème année utilisant différents algorithmes d'apprentissage automatique pour l'analyse du dataset Titanic. Amélioration continue du portfolio en explorant de nouvelles méthodes et en ajustant les hyperparamètres pour optimiser les résultats.",
          tech: ["Python", "Machine Learning", "Data Science"],
          category: "Data Science",
        },
        {
          name: "Création de dashboards en R et Python",
          description:
            "Projet de 4ème année créant des tableaux de bord interactifs en R et Python. Nettoyage de données d'un jeu de données trouvé sur Internet, conception d'un dashboard interactif, analyse et interprétation des données.",
          tech: ["R", "Python", "Visualisation de données", "Dashboard"],
          category: "Data Science",
        },
      ],
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          category: "Langages de programmation",
          items: ["Java (Certifications OCA et OCP)", "C", "Python", "R", "SQL", "HTML/CSS"],
        },
        {
          category: "Frontend",
          items: ["React", "Angular", "Vue.js", "Next.js"],
        },
        {
          category: "Backend & Frameworks",
          items: ["Java Spring", "Node.js", "JEE", "JSP", "Spring MVC", "Spring Security"],
        },
        {
          category: "Data & Analytics",
          items: ["Power BI", "Machine Learning", "Visualisation de données"],
        },
        {
          category: "DevOps & Outils",
          items: ["Git", "GitHub", "GitLab", "Docker", "Amazon AWS", "Postman", "Maven"],
        },
        {
          category: "Design & Multimédia",
          items: ["Photoshop", "Adobe Premiere Pro"],
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

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
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
];

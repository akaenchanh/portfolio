export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
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
];

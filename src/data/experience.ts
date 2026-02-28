export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
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
];

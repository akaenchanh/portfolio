export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
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
      "Presented final project to Product Owner",
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
];

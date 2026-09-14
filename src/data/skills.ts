// Technical Skills

export interface SkillItem {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
  category?: string;
}

export interface SkillsData {
  languages: SkillItem[];
  frameworks: SkillItem[];
  tools: SkillItem[];
  subjects: string[];
}

export const skills: SkillsData = {
  languages: [
    { name: "C/C++", level: "advanced" },
    { name: "JavaScript", level: "advanced" },
    { name: "TypeScript", level: "advanced" },
    { name: "Python", level: "intermediate" },
    { name: "HTML", level: "advanced" },
    { name: "CSS", level: "advanced" }
  ],
  frameworks: [
    { name: "React.js", level: "advanced" },
    { name: "Next.js", level: "advanced" },
    { name: "Express.js", level: "advanced" },
    { name: "Tailwind CSS", level: "advanced" },
    { name: "Shadcn UI", level: "intermediate" }
  ],
  tools: [
    { name: "Git & GitHub", level: "advanced" },
    { name: "PostgreSQL", level: "intermediate" },
    { name: "MongoDB", level: "intermediate" },
    { name: "SQL", level: "intermediate" },
    { name: "Prisma ORM", level: "intermediate" },
    { name: "VS Code", level: "advanced" },
    { name: "Linux", level: "intermediate" }
  ],
  subjects: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOPs)",
    "Operating Systems"
  ]
};

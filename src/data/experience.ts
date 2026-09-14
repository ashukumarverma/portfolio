// Work Experience

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type?: string;
  technologies: string[];
  responsibilities: string[];
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Systems Engineer",
    duration: "April 2026 - Present",
    type: "Full Time",
    technologies: ["AI Full Stack", "LangChain", "LangGraph", "GCP", "ADK", "FastAPI", "React", "PostgreSQL", "VectorDB", "LLM"],
    responsibilities: [
      "Agent builing and integration with vector database and LLM",
      "Building Agentic system for enterprise level AI applications."
    ]
  },
  {
    company: "7 Seers",
    role: "Software Development Engineer",
    duration: "August 2025 - February 2026",
    type: "Full Time",
    technologies: ["Next.js", "Node.js", "Express.js", "Socket.IO", "SQL", "TypeScript", "Tailwind CSS", "REST API", "Graph API"],
    responsibilities: [
      "Developed and deployed full-stack features, enhancing core application functionality from backend processing to frontend.",
      "Integrated payment routing system enabling automated splits and payouts for a multi-vendor platform.",
      "Enhanced website performance and responsiveness through code optimization, leading to faster load times and an improved user experience, and also implemented dynamic social media content feeds to boost user engagement.",
      "Implemented a real-time notification system for integration with external streaming software (OBS)."
    ]
  },
  {
    company: "7 Seers",
    role: "Software Engineer Intern",
    duration: "July 2025 - August 2025",
    type: "Internship",
    technologies: ["Next.js", "Node.js", "Express.js", "Socket.IO", "SQL", "TypeScript", "Tailwind CSS", "REST API", "Graph API"],
    responsibilities: [
      "Developed and deployed full-stack features, enhancing core application functionality from backend processing to frontend.",
      "Integrated payment routing system enabling automated splits and payouts for a multi-vendor platform.",
      "Enhanced website performance and responsiveness through code optimization.",
      "Implemented dynamic social media content feeds to boost user engagement."
    ]
  },
  {
    company: "MITMAAI - MIT Muzaffarpur Alumni Association International",
    role: "Full Stack Developer",
    duration: "2024 - 2025",
    type: "Part Time",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "TailwindCSS", "Prisma", "Framer Motion"],
    responsibilities: [
      "Developed a dynamic and responsive alumni portal using Next.js for the frontend and PostgreSQL for data storage.",
      "Built a role-based dashboard system with separate access for superadmin, admins and alumni.",
      "Designed and integrated components for alumni registration, event management, and 3D Earth visualization showing animated markers for alumni locations around the globe."
    ]
  }
];

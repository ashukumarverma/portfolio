// Personal & Profile Information

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  leetcode?: string;
  twitter?: string;
}

export interface ProfileStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface InterestItem {
  name: string;
  icon: string;
}

export interface Profile {
  name: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  role: string;
  titles: string[];
  location: string;
  email: string;
  tagline: string;
  bio: string;
  aboutParagraphs: string[];
  status: string;
  stats: ProfileStat[];
  interests: InterestItem[];
  social: SocialLinks;
}

export const profile: Profile = {
  name: "Ashutosh Kumar",
  displayName: "Ashutosh Kumar",
  firstName: "Ashutosh",
  lastName: "Kumar",
  role: "Software Development Engineer (SDE)",
  titles: [
    "Software Development Engineer",
    "Full Stack Developer",
    "AI, Reactjs, Nextjs, Nodejs, FastAPI, PostgreSQL"
  ],
  location: "Pune, India",
  email: "hello@ashukrv.in",
  status: "Working at TCS",
  tagline: "Crafting exceptional digital experiences at the intersection of design & engineering.",
  bio: "Passionate Software Development Engineer (SDE) with expertise in building modern, scalable web applications. Currently working as an SDE, I specialize in Next.js, React, Node.js, and TypeScript. I love creating innovative solutions and contributing to impactful projects.",
  aboutParagraphs: [
    "I am a passionate Software Development Engineer focused on building scalable, performant, and delightful web applications. Currently working as an SDE, I specialize in Next.js, React, Node.js, and TypeScript.",
    "With a strong foundation in Data Structures, Algorithms, and System Design, I bridge the gap between creative visual architecture and robust backend engineering to deliver impactful digital products."
  ],
  stats: [
    { label: "Years Exp.", value: 1, suffix: "+" },
    { label: "DSA Solved", value: 400, suffix: "+" },
    { label: "LeetCode Rating", value: 1717, suffix: "" }
  ],
  interests: [
    { name: "Web Development", icon: "Globe" },
    { name: "System Design", icon: "Network" },
    { name: "Competitive Coding", icon: "Trophy" },
    { name: "Open Source", icon: "GitBranch" }
  ],
  social: {
    github: "https://github.com/ashukumarverma",
    linkedin: "https://linkedin.com/in/ashukumarverma",
    leetcode: "https://leetcode.com/u/ashukumarverma"
  }
};

// Achievements and Awards

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  date?: string;
  category?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: "GATE Qualified",
    description: "Qualified Graduate Aptitude Test in Engineering in Computer Science & Information Technology (CS/IT)",
    year: "2024, 2025",
    category: "National Exam"
  },
  {
    title: "LeetCode Top 11.79%",
    description: "400+ DSA problems solved with a contest rating of 1717",
    date: "Dec 2024",
    link: "https://leetcode.com/u/ashukumarverma",
    category: "Competitive Programming"
  },
  {
    title: "LeetCode Biweekly Contest 144",
    description: "Secured 1303rd rank out of 22,518 global contestants",
    date: "Dec 2024",
    category: "Contest Ranking"
  },
  {
    title: "Subhadra Krishna Award",
    description: "First Prize for overall excellence in academics and extracurricular activities, MITMAAI",
    year: "2024",
    link: "https://mitmaai.org",
    category: "Academic Award"
  }
];

// Education Information

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Muzaffarpur Institute of Technology, Muzaffarpur, Bihar",
    duration: "2021 - 2025",
    grade: "CGPA: 8.25",
    description: "Specialized in Computer Science & Information Technology, Data Structures, Algorithms, Database Management, and Full Stack Development."
  },
  {
    degree: "Intermediate Science - PCM",
    institution: "Lady Anusuya Singhania Educational Academy, Jhalawar, Rajasthan",
    duration: "2018 - 2020",
    grade: "Percentage: 80.8%",
    description: "Focus on Physics, Chemistry, and Advanced Mathematics."
  }
];

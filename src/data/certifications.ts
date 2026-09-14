export interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
}

export const certifications: Certification[] = [
    {
        title: "The Joy of Computing using Python",
        issuer: "NPTEL",
        date: "May 2024",
        credentialId: "NPTEL24CS57S56250009730418581",
        credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS57S56250009730418581",
        skills: ["Python (Programming Language)"],
    },
    {
        title: "Data Science",
        issuer: "Internshala Trainings",
        date: "July 2023",
        credentialId: "gexbzb4z0qs",
        credentialUrl: "https://trainings.internshala.com/verify-certificate/",
        skills: ["Data Science", "Python (Programming Language)"],
    },
    {
        title: "Learn Java Script",
        issuer: "One Month",
        date: "March 2023",
        credentialId: "9AE64EBA",
        skills: ["JavaScript"],
    },
    {
        title: "CSS Certificate",
        issuer: "HackerRank",
        date: "December 2022",
        credentialId: "160d0564aae3",
        credentialUrl: "https://www.hackerrank.com/certificates/160d0564aae3",
        skills: ["CSS"],
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "August 2022",
        credentialUrl: "https://www.credly.com/badges/your-badge-id",
    },
    {
        title: "CSS Essential Training",
        issuer: "LinkedIn",
        date: "May 2022",
    },
    {
        title: "HTML Essential Training",
        issuer: "LinkedIn",
        date: "February 2022",
    },
    {
        title: "Certificate of participation - World Education Day Fair-2022",
        issuer: "Internshala",
        date: "January 2022",
    },
    {
        title: "Critical Thinking for Better Judgment and Decision-Making",
        issuer: "LinkedIn",
        date: "January 2022",
    },
    {
        title: "PCAP: Programming Essentials in Python",
        issuer: "Cisco Networking Academy",
        date: "January 2022",
        skills: ["Python (Programming Language)"],
    },
    {
        title: "What is Graphic Design?",
        issuer: "LinkedIn",
        date: "January 2022",
    },
    {
        title: "HTML",
        issuer: "Sololearn",
        date: "October 2021",
        credentialId: "#1014-18970961",
        credentialUrl: "https://www.sololearn.com/Certificate/1014-18970961/pdf/",
    },
];

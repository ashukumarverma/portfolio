// Projects Information

export interface ProjectLinks {
  code?: string;
  demo?: string;
}

export interface Project {
  id?: string;
  title: string;
  name?: string;
  description: string;
  technologies: string[];
  features?: string[];
  links: ProjectLinks;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "s3-bucket-manager",
    title: "S3 Bucket Manager",
    name: "S3 Bucket Manager",
    description: "Modern web-based file manager for AWS S3 buckets with instant preview, upload, and management capabilities. Solves the friction of managing S3 files directly through AWS Console.",
    technologies: ["Next.js", "TypeScript", "AWS S3 SDK", "TailwindCSS", "React"],
    features: [
      "Secure authentication with AWS credentials stored in browser localStorage for seamless session management.",
      "Real-time file management: upload, download, delete files with drag-and-drop support.",
      "Media preview support: instantly preview images, stream audio/video, and auto-generate thumbnails.",
      "Modern UI with grid/list views, real-time search, file filtering, and sorting capabilities.",
      "Copy public links instantly without navigating through AWS Console.",
      "Fully responsive interface optimized for developers and DevOps workflows."
    ],
    links: {
      code: "https://github.com/ashukumarverma/s3-bucket-manager",
      demo: "https://s3.ashukrv.in"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "artlink",
    title: "ArtLink: Art Media & Marketplace",
    name: "ArtLink: Art Media & Marketplace",
    description: "Full-stack web platform enabling artists to showcase, sell, and manage their artwork with personalized user roles (Admin, Artist, General) and dynamic interfaces.",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "TailwindCSS", "Prisma", "Shadcn UI"],
    features: [
      "Full-stack web platform enabling artists to showcase, sell, and manage their artwork with personalized user roles.",
      "Implemented Admin dashboard, Profile Section, Explore Section, Commission Work Section, and fully dynamic role-based route security."
    ],
    links: {
      code: "https://github.com/ashukumarverma/artlink",
      demo: ""
    },
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "dochive",
    title: "DocHive: Collaborative Document Tool",
    name: "DocHive: Collaborative Document Editing Tool",
    description: "Real-time collaborative document editing workspace integrating React frontend with ExpressJS backend and Socket.IO for seamless multi-user live editing.",
    technologies: ["MongoDB", "Express.js", "React", "JavaScript", "Socket.io", "Bootstrap"],
    features: [
      "Real-time collaborative editing using Socket.IO live sync functionality, allowing multiple users to edit documents simultaneously.",
      "Implemented user authentication, document creation, user-specific and shared document searching, and granular document sharing permissions."
    ],
    links: {
      code: "https://github.com/ashukumarverma/dochive",
      demo: ""
    },
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true
  }
];

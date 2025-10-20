export interface ProjectProp {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  imagePosition: "left" | "right";
}

export const projects: ProjectProp[] = [
  {
    id: 1,
    title: "360-degree personnel assessment website",
    description:
      "Developed a web-based application for university staff performance evaluation using a 360-degree feedback model. The system allows multi-role evaluations (supervisors, peers, and subordinates) to ensure comprehensive results. Key features include role-based access control, role request & approval workflow, real-time evaluation tracking, and automated report generation for performance analysis",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760936890/Screenshot_2025-10-20_120752_kscdzq.png",
    techStack: [
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Express",
      "Prisma",
      "Fly.io",
    ],
    liveDemo: "https://portal-web-evaluation360-dev.fly.dev/",
    github: "https://github.com/erisk405/Evaluate",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "URL Shortener",
    description:
      "Developed a web application for shortening long URLs into short links with integrated click tracking and analytics. Features include short URL generation (Base62 encoding), click & IP tracking, GeoLocation analysis (via IpInfo API), and usage statistics dashboards. Built with TypeScript, Node.js, Express, React, Prisma, and PostgreSQL, deployed on Render/Vercel for scalability.",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760937323/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646d6d706e6777796d2f696d6167652f75706c6f61642f76313734333636303734332f73686f72746c696e6b5f6f79767372302e6a7067_mmkavc.jpg",
    techStack: ["React", "Express", "Prisma", "Render"],
    liveDemo: "https://shortlinksyn.onrender.com",
    github: "https://github.com/erisk405/ShortLink-Client",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Book-theater-tickets",
    description:
      "Built a web application for dynamic seat selection, booking, and ticket management using TypeScript, Next.js, Prisma, and relational database, with interactive UI and real-time updates.",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760937598/bookingSys_nwdlpy.png",
    techStack: ["Next.js", "Prisma", "WebSocket", "Vercel"],
    liveDemo: "https://book-theater-tickets.vercel.app/",
    github: "https://github.com/erisk405/Book-theater-tickets",
    imagePosition: "left",
  },
];

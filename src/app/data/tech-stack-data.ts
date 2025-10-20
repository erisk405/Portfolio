import { SkillProps } from "@/shared/types/skill-type";
import { TechStack } from "@/shared/types/tech-stack.type";

export const techStackData: TechStack[] = [
  // Languages
  {
    title: "TypeScript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "C#",
    description:
      "A modern object-oriented programming language developed by Microsoft.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    title: "JavaScript",
    description:
      "The most popular language for building interactive web applications.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Python",
    description:
      "A versatile programming language known for its simplicity and readability.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org/",
  },
  {
    title: "Dart (Flutter)",
    description:
      "A programming language optimized for UI, often used with Flutter for mobile apps.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    url: "https://dart.dev/",
  },
  {
    title: "SQL (PostgreSQL, SQL Server)",
    description: "Structured Query Language for relational databases.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org/",
  },
  {
    title: "HTML",
    description: "The standard markup language for creating web pages.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Rust (basic)",
    description:
      "A systems programming language focused on safety and performance.",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760953477/puu_co19r0.png",
    url: "https://www.rust-lang.org/",
  },

  // Frontend Frameworks & Libraries
  {
    title: "React.js",
    description: "A JavaScript library for building user interfaces.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev/",
  },
  {
    title: "Next.js",
    description:
      "A React framework with hybrid static & server rendering, great for full-stack apps.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org/",
  },
  {
    title: "Angular",
    description:
      "A TypeScript-based framework for building scalable web applications.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    url: "https://angular.io/",
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760953555/Tailwind_CSS_Logo.svg_w4sj2e.png",
    url: "https://tailwindcss.com/",
  },
  {
    title: "shadcn/ui",
    description:
      "A collection of accessible components built with Radix and Tailwind CSS.",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    url: "https://ui.shadcn.com/",
  },

  // Backend Frameworks & Libraries
  {
    title: "ASP.NET Core",
    description:
      "A cross-platform, high-performance framework for building backend services.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    url: "https://learn.microsoft.com/en-us/aspnet/core/",
  },
  {
    title: "Express.js",
    description: "A minimal and flexible Node.js web application framework.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    url: "https://expressjs.com/",
  },
  {
    title: "Prisma ORM",
    description: "A next-generation ORM for Node.js and TypeScript.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    url: "https://www.prisma.io/",
  },

  // Database
  {
    title: "PostgreSQL",
    description: "An advanced open source relational database system.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org/",
  },
  {
    title: "SQL Server",
    description:
      "A relational database management system developed by Microsoft.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    url: "https://learn.microsoft.com/en-us/sql/sql-server/",
  },

  // Containerization & Orchestration
  {
    title: "Docker",
    description:
      "A platform to build, run, and ship applications in containers.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    url: "https://www.docker.com/",
  },
  {
    title: "Kubernetes (basic)",
    description:
      "An open-source system for automating deployment and scaling of containerized apps.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    url: "https://kubernetes.io/",
  },
  {
    title: "Render",
    description: "A unified cloud platform to build and run apps and websites.",
    image: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
    url: "https://render.com/",
  },
  {
    title: "Vercel",
    description:
      "A platform for frontend frameworks and static sites, optimized for Next.js.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    url: "https://vercel.com/",
  },

  // Version Control
  {
    title: "Git (GitHub)",
    description:
      "Version control system for tracking code changes and collaboration.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com/",
  },

  // Cloud & Deployment
  {
    title: "fly.io",
    description: "A platform for running full-stack apps close to your users.",
    image:
      "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760953407/22525303_kwa7z0.png",
    url: "https://fly.io/",
  },
];

export const softSkills: SkillProps[] = [
  {
    title: "Problem Solving",
    emoji: "💡",
    description: "Ability to identify and solve complex problems.",
  },
  {
    title: "Active Learning",
    emoji: "📚",
    description: "Ability to learn new skills and concepts quickly.",
  },
  {
    title: "Analytical Skill",
    emoji: "🔍",
    description: "Ability to analyze data and make informed decisions.",
  },
  {
    title: "Communication",
    emoji: "💬",
    description: "Ability to communicate effectively with others.",
  },
  {
    title: "Growth Mindset",
    emoji: "🚀",
    description: "Ability to embrace challenges and learn from failures.",
  },
];

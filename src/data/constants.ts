export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
  FASTAPI = "fastapi",
  JAVA = "java",
  SQL = "sql",
  SUPABASE = "supabase",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Building dynamic web apps! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type safety for the win 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Structural foundation of the web 🌐🧱",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Styling and responsive layouts 🎨✨",
    color: "#264de4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building interactive UIs with hooks & components ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue.js",
    shortDescription: "Progressive and reactive UI development 💚",
    color: "#42b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Server-side rendering and full-stack magic 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Rapid UI development with utility classes 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend JavaScript powering APIs 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Minimalist web framework for Node.js 🚂💨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational databases done right 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL databases 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control to save the day 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaborating and managing code 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatting done cleanly 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "JavaScript package ecosystem 📦💯",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Realtime backend platform 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Content management and web publishing 🧓",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Unix environment & shell operations 🔓🐧",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization & reproducible environments 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "High-performance reverse proxy & load balancer 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Scalable cloud infrastructure & storage 🌐☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Keyboard-driven terminal text editor 🚪🏃",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment & edge serverless 🚀▲",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 25,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance Python APIs 🚀⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 26,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented backend programming ☕",
    color: "#5382a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SQL]: {
    id: 27,
    name: "sql",
    label: "SQL",
    shortDescription: "Querying and managing relational data 🗄️",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 28,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Open-source Firebase alternative with Postgres ⚡",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "6 Months",
    endDate: "Internship",
    title: "Full Stack Developer Intern",
    company: "QuickIntell",
    description: [
      "Developed and maintained full-stack applications, contributing to frontend, backend, API development, database integration, debugging, and deployment in a production-oriented environment."
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.FASTAPI,
      SkillNames.POSTGRES,
      SkillNames.MONGODB
    ],
  }
];

export const EDUCATION = [
  {
    id: 1,
    startDate: "2024",
    endDate: "2028",
    title: "B.Tech — Electronics and Computer Engineering",
    company: "VIT Chennai",
    description: ["Current CGPA: 8.8/10"],
  }
];

export type LeadershipPosition = {
  id: number;
  title: string;
  organization: string;
  description: string;
  metrics: string[];
  certificateUrl?: string;
  highlightBadge?: string;
};

export const LEADERSHIP: LeadershipPosition[] = [
  {
    id: 1,
    title: "Programme Representative",
    organization: "VIT Chennai",
    highlightBadge: "★ SELECTED TWICE",
    description:
      "Selected as Programme Representative twice, representing ~438 students and serving as a key communication bridge between students and faculty. Coordinated academic communication, collected student concerns, and communicated feedback to faculty.",
    metrics: ["~438 Students Represented", "Elected 2x"],
    certificateUrl: "https://drive.google.com/file/d/1I6PzJGMMnhPvupDPrJojqcpglyMZYJJx/view",
  },
  {
    id: 2,
    title: "Discipline Representative",
    organization: "VIT Chennai",
    description:
      "Served as student discipline representative, supporting campus discipline-related coordination, institutional protocol alignment, and student community communication.",
    metrics: ["Campus Discipline Coordination"],
    certificateUrl: "https://drive.google.com/file/d/1sv9YrISBmNMm9TP3q3X5aqjLP1DZgjLj/view",
  },
  {
    id: 3,
    title: "Sports Representative",
    organization: "VIT Chennai",
    description:
      "Coordinated 4 major sports events serving approximately 890–1,100 participants per event, managing event operations, scheduling, referee coordination, and logistics.",
    metrics: ["4 Major Events", "890–1,100 Participants / Event"],
    certificateUrl: "https://drive.google.com/file/d/1NPZiju1upzgkXf7qnxBI3e2dzEp2aVXd/view",
  },
  {
    id: 4,
    title: "Management Lead",
    organization: "Sangam Club, VIT Chennai",
    description:
      "Led a 37-member team, overseeing club event planning, volunteer coordination, venue logistics, and smooth operational execution.",
    metrics: ["37-Member Team Led"],
    certificateUrl: "https://drive.google.com/file/d/16tEGSiUnRWMmVI6Cd_kwIumqOcuOY1jA/view",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};



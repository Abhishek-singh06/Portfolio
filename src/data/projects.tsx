export type Project = {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  achievement?: string;
};

const projects: Project[] = [
  // =========================================================================
  // 1. FINAL FEATURED PROJECTS
  // =========================================================================
  {
    id: "unifetch",
    title: "UniFetch",
    type: "Peer-to-Peer Delivery Network",
    category: "Delivery Network",
    description:
      "Student-powered peer delivery platform connecting students who need something with others already traveling in that direction.",
    features: [
      "Trip Matching",
      "Campus Credits",
      "INR/UPI Payments",
      "Negotiation Chat",
      "Real-Time Tracking",
      "OTP-Secured Delivery",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Abhishek-singh06/unifetch",
    live: "https://unifetch.netlify.app/",
    featured: true,
  },
  {
    id: "getplaced",
    title: "GetPlaced",
    type: "AI-Powered Placement & Career Platform",
    category: "AI & Career Platform",
    achievement: "2nd Place — Smart AI Hackathon — VIT Chennai",
    description:
      "AI-powered placement-readiness platform analyzing GitHub, LeetCode, resumes, skills, and projects to generate personalized career insights.",
    features: [
      "Readiness Score",
      "Skill-Gap Analysis",
      "GitHub & LeetCode Analytics",
      "ATS Resume Analysis",
      "AI Resume Feedback",
      "Personalized Career Roadmap",
    ],
    technologies: ["React", "Node.js", "FastAPI", "MongoDB", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/Abhishek-singh06/getPlaced",
    live: "https://getplaced.siqht.in/",
    featured: true,
  },
  {
    id: "quantlab",
    title: "QuantLab",
    type: "Quantitative Research & Backtesting Platform",
    category: "FinTech & Algorithmic Systems",
    description:
      "Full-stack quantitative research and algorithmic stock backtesting platform featuring microservices architecture, statistical modeling, and telemetry monitoring.",
    features: [
      "Algorithmic Backtesting",
      "Statistical Modeling",
      "Microservices Architecture",
      "Telemetry Health Monitoring",
      "Docker Orchestration",
    ],
    technologies: ["React", "TypeScript", "Vite", "Spring Boot", "FastAPI", "Python", "PostgreSQL", "Docker"],
    github: "https://github.com/Abhishek-singh06/Quant-lab",
    live: undefined,
    featured: true,
  },
  {
    id: "medextract",
    title: "MedExtract",
    type: "Medical Document Processing Platform",
    category: "Document Processing",
    description:
      "Platform focused on extracting and structuring information from medical documents for easier processing and accessible presentation.",
    features: [
      "Automated Extraction",
      "Document Parsing",
      "Structured Presentation",
      "Data Processing",
    ],
    technologies: ["JavaScript", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Abhishek-singh06/MedExtract",
    live: undefined,
    featured: true,
  },
  {
    id: "cityflow",
    title: "CityFlow",
    type: "Transit Operations Platform",
    category: "Transit Operations",
    description:
      "Transit operations platform combining GIS route planning, crew-bus scheduling, driver-rest validation, conflict detection, spatial analysis, and KPI monitoring.",
    features: [
      "GIS Route Planning",
      "Crew-Bus Scheduling",
      "Driver-Rest Validation",
      "Conflict Detection",
      "Spatial Analysis",
      "KPI Monitoring",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Leaflet", "Turf.js"],
    github: undefined,
    live: undefined,
    featured: true,
  },
  {
    id: "aec-coordination",
    title: "AEC Coordination Intelligence System",
    type: "Enterprise Construction Coordination Platform",
    category: "Enterprise Engineering",
    description:
      "Enterprise-grade coordination system modeling multi-trade construction workflows as Directed Acyclic Graphs (DAG), computing critical path variance, and automating approval gates.",
    features: [
      "DAG Dependency Engine",
      "Blast Radius Shift Calculation",
      "Approval Gatekeeper",
      "Critical Path Timeline",
      "Chronological Audit Trail",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Lucide React"],
    github: "https://github.com/Abhishek-singh06/coordination-intelligence-as-01",
    live: "https://coordination-system.netlify.app/",
    featured: true,
  },

  // =========================================================================
  // 2. FINAL OTHER PROJECTS
  // =========================================================================
  {
    id: "property-post-maker",
    title: "Property Post Maker",
    type: "Marketing Creative Generation Tool",
    category: "Marketing Automation",
    description:
      "Web application for creating high-resolution real estate marketing creatives in seconds with custom brand integration and instant PNG export.",
    features: [
      "Instant Creative Generation",
      "High-Res PNG Export",
      "Brand Configuration",
      "Responsive Layout",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "html2canvas"],
    github: "https://github.com/Abhishek-singh06/Initial-Property-Post-Maker",
    live: "https://abhishek-singh06.github.io/Initial-Property-Post-Maker/",
    featured: false,
  },
  {
    id: "react-password-generator",
    title: "React Password Generator",
    type: "Security & Utility Tool",
    category: "Utility & Security",
    description:
      "Interactive password generator with configurable length, character set controls, real-time strength validation, and clipboard integration.",
    features: [
      "Configurable Length",
      "Character Set Toggles",
      "Strength Validator",
      "One-Click Clipboard Copy",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Abhishek-singh06/react-password-generator",
    live: "https://fervent-volhard-f2991a.netlify.app/",
    featured: false,
  },
  {
    id: "cric-stat",
    title: "Cric-Stat",
    type: "Full-Stack Cricket Analytics Platform",
    category: "Sports Analytics",
    description:
      "Full-stack cricket statistics tracker allowing users to log players, matches, and performances with interactive KPI dashboards and charts.",
    features: [
      "Player Profiles & Roles",
      "Match Fixture Tracking",
      "Performance Metrics",
      "Interactive Chart Dashboard",
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Recharts"],
    github: "https://github.com/Abhishek-singh06/cric-stat",
    live: undefined,
    featured: false,
  },
  {
    id: "cricket-game",
    title: "Cricket Game",
    type: "Interactive Web Game",
    category: "Web Gaming",
    description:
      "Browser-based cricket simulation game inspired by the Rock-Paper-Scissors concept (Bat, Ball, Stump) featuring computer AI and instant score calculation.",
    features: [
      "Bat-Ball-Stump Concept",
      "Computer AI Opponent",
      "Instant Score Engine",
      "Interactive Gameplay",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Abhishek-singh06/CRICKET-GAME-",
    live: "https://abhishek-singh06.github.io/CRICKET-GAME-/",
    featured: false,
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    type: "Audio Streaming Web App",
    category: "Media Streaming",
    description:
      "Spotify-inspired audio player web app featuring real-time playback controls, seek bar, dynamic track playlist, album art, and responsive layout.",
    features: [
      "Audio Playback Controls",
      "Real-Time Seek Bar",
      "Dynamic Track Playlist",
      "Responsive Dark UI",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Abhishek-singh06/SPOTIFY-CLONE",
    live: undefined,
    featured: false,
  },
  {
    id: "calculator",
    title: "Calculator",
    type: "Interactive Web Utility",
    category: "Web Utility",
    description:
      "Clean, responsive web calculator supporting standard arithmetic operations, expression parsing, keyboard navigation, and error handling.",
    features: [
      "Arithmetic Engine",
      "Keypad Grid UI",
      "Clean Input Handling",
      "Responsive Design",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: undefined,
    live: undefined,
    featured: false,
  },
];

export default projects;

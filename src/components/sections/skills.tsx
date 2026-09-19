"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Bot,
  Wrench,
  Cpu,
  Boxes,
  Network,
  Binary,
  FolderGit2,
  Terminal,
  Sparkles,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGooglegemini,
  SiVisualstudiocode,
} from "react-icons/si";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SKILLS, SkillNames } from "@/data/constants";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  category: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  color?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  folder: string;
  icon: React.ComponentType<{ className?: string }>;
  items: TechItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    folder: "languages/",
    icon: Code2,
    items: [
      {
        name: "Java",
        category: "Languages",
        iconSrc: SKILLS[SkillNames.JAVA]?.icon,
        color: SKILLS[SkillNames.JAVA]?.color,
      },
      {
        name: "JavaScript",
        category: "Languages",
        iconSrc: SKILLS[SkillNames.JS]?.icon,
        color: SKILLS[SkillNames.JS]?.color,
      },
      {
        name: "SQL",
        category: "Languages",
        iconSrc: SKILLS[SkillNames.SQL]?.icon,
        color: SKILLS[SkillNames.SQL]?.color,
      },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    folder: "frontend/",
    icon: Layout,
    items: [
      {
        name: "HTML5",
        category: "Frontend",
        icon: <SiHtml5 className="w-4 h-4 text-[#e34f26]" />,
      },
      {
        name: "CSS3",
        category: "Frontend",
        icon: <SiCss3 className="w-4 h-4 text-[#1572b6]" />,
      },
      {
        name: "React",
        category: "Frontend",
        iconSrc: SKILLS[SkillNames.REACT]?.icon,
        color: SKILLS[SkillNames.REACT]?.color,
      },
      {
        name: "Next.js",
        category: "Frontend",
        iconSrc: SKILLS[SkillNames.NEXTJS]?.icon,
        color: SKILLS[SkillNames.NEXTJS]?.color,
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        iconSrc: SKILLS[SkillNames.TAILWIND]?.icon,
        color: SKILLS[SkillNames.TAILWIND]?.color,
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    folder: "backend/",
    icon: Server,
    items: [
      {
        name: "Node.js",
        category: "Backend",
        iconSrc: SKILLS[SkillNames.NODEJS]?.icon,
        color: SKILLS[SkillNames.NODEJS]?.color,
      },
      {
        name: "FastAPI",
        category: "Backend",
        iconSrc: SKILLS[SkillNames.FASTAPI]?.icon,
        color: SKILLS[SkillNames.FASTAPI]?.color,
      },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    folder: "databases/",
    icon: Database,
    items: [
      {
        name: "MySQL",
        category: "Databases",
        icon: <SiMysql className="w-4 h-4 text-[#4479a1]" />,
      },
      {
        name: "MongoDB",
        category: "Databases",
        iconSrc: SKILLS[SkillNames.MONGODB]?.icon,
        color: SKILLS[SkillNames.MONGODB]?.color,
      },
      {
        name: "PostgreSQL",
        category: "Databases",
        iconSrc: SKILLS[SkillNames.POSTGRES]?.icon,
        color: SKILLS[SkillNames.POSTGRES]?.color,
      },
      {
        name: "Supabase",
        category: "Databases",
        iconSrc: SKILLS[SkillNames.SUPABASE]?.icon,
        color: SKILLS[SkillNames.SUPABASE]?.color,
      },
    ],
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    folder: "ai-ml/",
    icon: Bot,
    items: [
      {
        name: "Gemini API",
        category: "AI / ML",
        icon: <SiGooglegemini className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />,
      },
      {
        name: "AI Integration",
        category: "AI / ML",
        icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    folder: "tools/",
    icon: Wrench,
    items: [
      {
        name: "Git",
        category: "Tools",
        iconSrc: SKILLS[SkillNames.GIT]?.icon,
        color: SKILLS[SkillNames.GIT]?.color,
      },
      {
        name: "GitHub",
        category: "Tools",
        iconSrc: SKILLS[SkillNames.GITHUB]?.icon,
        color: SKILLS[SkillNames.GITHUB]?.color,
      },
      {
        name: "VS Code",
        category: "Tools",
        icon: <SiVisualstudiocode className="w-4 h-4 text-[#007acc]" />,
      },
    ],
  },
  {
    id: "core-cs",
    name: "Core CS",
    folder: "core-cs/",
    icon: Cpu,
    items: [
      {
        name: "Data Structures and Algorithms",
        category: "Core CS",
        icon: <Binary className="w-4 h-4 text-emerald-400" />,
      },
      {
        name: "OOP",
        category: "Core CS",
        icon: <Boxes className="w-4 h-4 text-amber-400" />,
      },
      {
        name: "DBMS",
        category: "Core CS",
        icon: <Database className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "Operating Systems",
        category: "Core CS",
        icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      },
      {
        name: "Computer Networks",
        category: "Core CS",
        icon: <Network className="w-4 h-4 text-indigo-400" />,
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="relative flex w-full min-h-screen flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Subtle ambient lighting layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/[0.025] blur-[120px] rounded-full"
      />

      <div className="w-full relative z-10 space-y-10">
        {/* Section Header */}
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Technologies I use to build full-stack applications."
          className="relative mb-8 md:mb-12"
        />

        {/* IDE / Developer Workspace Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border/80 dark:border-white/10",
            "bg-card/90 dark:bg-[#0c1017]/95 backdrop-blur-2xl shadow-2xl pointer-events-auto",
            "ring-1 ring-white/5"
          )}
        >
          {/* Top Bar: macOS/IDE style terminal bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/60 dark:border-white/10 bg-secondary/30 dark:bg-[#161b22]/70">
            {/* Left Prompt & File Path */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-foreground/90 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <Terminal className="w-3.5 h-3.5 text-muted-foreground ml-1" />
              <span className="text-foreground font-semibold">~/abhishek/skills</span>
              <span className="hidden sm:inline text-muted-foreground/60 text-xs">
                (branch: <span className="text-primary/90">main</span>)
              </span>
            </div>

            {/* Right Window Control Buttons */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/50" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/50" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/50" />
            </div>
          </div>

          {/* Workspace Body: Responsive Multi-Column Categories Grid */}
          <TooltipProvider delayDuration={150}>
            <div className="p-5 sm:p-7 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {SKILL_CATEGORIES.map((category, catIndex) => {
                const CategoryIcon = category.icon;
                const isCoreCS = category.id === "core-cs";

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.06,
                      ease: "easeOut",
                    }}
                    className={cn(
                      "flex flex-col gap-3.5 p-4 sm:p-5 rounded-xl border border-border/60 dark:border-white/5",
                      "bg-secondary/20 dark:bg-white/[0.02] hover:bg-secondary/30 transition-colors duration-200",
                      isCoreCS && "md:col-span-2"
                    )}
                  >
                    {/* Category Directory Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-border/40">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-primary/10 text-primary">
                          <CategoryIcon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-foreground">
                          {category.folder}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                        {category.name}
                      </span>
                    </div>

                    {/* Chips Grid */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.items.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <div
                              className={cn(
                                "group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium",
                                "bg-card/80 dark:bg-[#161b22]/90 text-foreground/90 border border-border/70 dark:border-white/10",
                                "transition-all duration-200 cursor-default select-none",
                                "hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground",
                                "hover:shadow-sm"
                              )}
                            >
                              {/* Technology Icon */}
                              {tech.iconSrc ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={tech.iconSrc}
                                  alt={tech.name}
                                  className="w-3.5 h-3.5 object-contain opacity-90 group-hover:scale-110 transition-transform duration-200"
                                  loading="lazy"
                                />
                              ) : tech.icon ? (
                                <span className="group-hover:scale-110 transition-transform duration-200">
                                  {tech.icon}
                                </span>
                              ) : (
                                <Code2 className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                              )}
                              <span>{tech.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="text-xs font-mono py-1 px-2.5 bg-card/95 border-border shadow-md"
                          >
                            <span className="font-semibold text-foreground">{tech.name}</span>
                            <span className="text-muted-foreground"> • {tech.category} • Used in projects</span>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

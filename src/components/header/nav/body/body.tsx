"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

const itemVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.05 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.25,
      delay: i * 0.02,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentHash(window.location.hash);

    const handleHash = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="flex flex-col justify-center space-y-1 sm:space-y-2 py-4">
      {links.map((link, index) => {
        const { title, href, target } = link;
        const isSelected = selectedLink.index === index;
        const isCurrentRoute =
          href === "/"
            ? pathname === "/" && !currentHash
            : href.startsWith("/#")
            ? currentHash === href.slice(1)
            : pathname === href;

        const numPrefix = String(index + 1).padStart(2, "0");

        return (
          <motion.div
            key={title}
            custom={index}
            variants={itemVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="group relative"
            onMouseEnter={() => setSelectedLink({ isActive: true, index })}
          >
            <Link
              href={href}
              target={target}
              onClick={() => setIsActive(false)}
              className={cn(
                "relative inline-flex items-center gap-3 sm:gap-5 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl transition-all duration-200",
                isSelected
                  ? "bg-foreground/[0.04] dark:bg-white/[0.04]"
                  : "hover:bg-foreground/[0.02]"
              )}
            >
              {/* Monospace index number */}
              <span
                className={cn(
                  "font-mono text-xs sm:text-sm transition-colors duration-200",
                  isSelected
                    ? "text-primary font-semibold"
                    : "text-muted-foreground/40 group-hover:text-muted-foreground/80"
                )}
              >
                {numPrefix}
              </span>

              {/* Main Nav Title with Controlled Typography */}
              <span
                className={cn(
                  "font-display uppercase tracking-tight transition-all duration-200",
                  "text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold leading-tight",
                  isSelected
                    ? "text-foreground translate-x-1"
                    : selectedLink.isActive
                    ? "text-muted-foreground/35 group-hover:text-foreground/80"
                    : "text-foreground/80 group-hover:text-foreground"
                )}
              >
                {title}
              </span>

              {/* Subtle Indicator for active/hovered state */}
              {isCurrentRoute && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary ml-1 shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              )}

              {href.startsWith("http") && (
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

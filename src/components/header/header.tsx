"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

interface HeaderProps {
  loader?: boolean;
}

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isActive) {
        setIsActive(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive]);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000] px-4 sm:px-8 py-3"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .85)" : "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Author Brand Name */}
        <Link href="/" className="flex items-center">
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-foreground hover:text-primary transition-colors">
            {config.author}
          </span>
        </Link>

        {/* Center: Desktop Quick Section Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/60 bg-background/60 backdrop-blur-md shadow-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-full transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Controls & Menu */}
        <div className="flex items-center gap-3">
          <FunnyThemeToggle className="w-6 h-6 hidden md:flex" />
          {isHome && process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
          {config.githubUsername && config.githubRepo && (
            <GitHubStarsButton
              username={config.githubUsername}
              repo={config.githubRepo}
              className="hidden sm:flex"
            />
          )}
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close menu" : "Open menu"}
            aria-expanded={isActive}
            className={cn(
              styles.el,
              "m-0 px-2.5 h-8 bg-secondary/30 hover:bg-secondary/60 border border-border/50 rounded-lg flex items-center justify-center gap-2"
            )}
          >
            <div className="relative hidden md:flex items-center text-xs font-medium">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        </div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(false)}
        className={styles.background}
      />
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

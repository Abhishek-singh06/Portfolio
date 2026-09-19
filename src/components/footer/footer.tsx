import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";

function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/80 px-4 py-6 sm:px-8 bg-background/50 backdrop-blur-sm">
      {/* Copyright */}
      <p className="text-xs text-muted-foreground order-3 sm:order-1 text-center sm:text-left">
        ©{" "}
        <Suspense fallback={null}>
          <CopyrightYear />
        </Suspense>{" "}
        {config.author}. All rights reserved.
      </p>

      {/* Social Profiles */}
      <div className="order-1 sm:order-2">
        <SocialMediaButtons />
      </div>

      {/* Internal Navigation: Blog & Newsletter */}
      <nav
        className="flex items-center gap-2 sm:gap-3 z-10 order-2 sm:order-3"
        aria-label="Footer navigation"
      >
        {footer.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              "group relative px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground",
              "transition-all duration-200 ease-out",
              "hover:text-foreground hover:bg-secondary/40",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
          >
            <span>{link.title}</span>
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary/70 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;

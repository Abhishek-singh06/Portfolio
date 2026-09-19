"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { height } from "../anim";
import Body from "./body/body";
import NavPreview from "./image/image";
import MotionToggle from "@/components/motion-toggle";
import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setIsActive(false)}
      className="relative w-full overflow-hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 md:py-10",
          "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14"
        )}
      >
        {/* Left Column: Vertical Navigation */}
        <div className="w-full lg:w-auto flex-1">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>

        {/* Right Column: Contextual Card Preview (Desktop Only) */}
        <NavPreview selectedIndex={selectedLink.index} />
      </div>

      {/* Subtle reduced-motion control tucked at bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-3 right-4 sm:right-8 z-20"
      >
        <MotionToggle />
      </motion.div>
    </motion.div>
  );
};

export default Index;

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { beliefs } from "@/lib/data";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeliefProps {
  title: string;
  tag: string;
  icon: LucideIcon;
  bgColor: string;
  quote: string;
  description: string;
  expanded?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  isMobile?: boolean;
}

const BeliefCard: React.FC<BeliefProps> = ({
  title,
  tag,
  icon: Icon,
  bgColor,
  quote,
  description,
  expanded,
  onHoverStart,
  onHoverEnd,
  isMobile,
}) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg relative min-w-[280px]"
      style={{
        backgroundColor: bgColor,
        backgroundImage: expanded
          ? `linear-gradient(to bottom, ${bgColor}, rgba(0,0,0,0.7))`
          : "",
      }}
      animate={{
        flex: isMobile ? 1 : expanded ? 3 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.19, 1.0, 0.22, 1.0], // Easing for smoother motion
      }}
      onHoverStart={!isMobile ? onHoverStart : undefined}
      onHoverEnd={!isMobile ? onHoverEnd : undefined}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-full">
              <span className="text-white">
                <Icon className="w-6 h-6" />
              </span>
            </div>
            <span className="text-xl font-bold text-white">{tag}</span>
          </div>

          <h2 className="text-3xl font-serif text-white mb-6 font-bold line-clamp-2">
            {title}
          </h2>
        </div>

        <motion.div
          className="mt-auto flex-grow overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <blockquote
            className={cn(
              "text-white/90 font-light mb-6 text-sm lg:text-base border-l-2 pl-4 border-white/30 italic",
              isMobile || expanded ? "line-clamp-none" : "line-clamp-3"
            )}
          >
            {quote}
          </blockquote>
          {(expanded || isMobile) && (
            <div className="text-white/80 text-sm lg:text-base leading-relaxed max-h-[200px] overflow-y-auto">
              <p>{description}</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Subtle gradient overlay at the bottom for visual appeal */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent ${
          expanded && !isMobile ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

const Beliefs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHoverStart = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <div className="space-y-12">
      <div>
        <motion.h1
          className="text-3xl md:text-5xl mb-4 font-title text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Beliefs
        </motion.h1>
        <div className="w-20 h-1 bg-red mx-auto rounded-full" />
      </div>

      <motion.div
        className={`flex flex-col ${
          isMobile ? "gap-8" : "lg:flex-row gap-6"
        } min-h-[500px] ${isMobile ? "" : "lg:h-[600px]"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {beliefs.map((belief, index) => (
          <BeliefCard
            key={index}
            {...belief}
            expanded={isMobile ? true : expandedIndex === index}
            onHoverStart={() => !isMobile && handleHoverStart(index)}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Beliefs;

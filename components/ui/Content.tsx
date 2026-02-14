"use client";
import React, { useRef, useState } from "react";
import { BackgroundRippleEffect } from "./RippleBack";
import { Highlight } from "../ui/hero";
import { motion } from "motion/react";
import { Spotlight } from "./Spotlight";
import { SkillCard } from "@/app/page";

export function BackgroundRippleEffectDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative flex min-h-screen w-full flex-col items-center lg:items-start justify-start overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <Spotlight className="left-1/2 -translate-x-1/2 lg:left-1/5 lg:translate-x-0" />

      <div className="mt-32 sm:mt-40 md:mt-48 lg:mt-60 w-full flex flex-col">
        <p className="text-[10px] sm:text-xs text-white font-zllight uppercase text-center tracking-[6px] sm:tracking-[10px]">
          Software Developer
        </p>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 2,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="
            sticky lg:top-0
            mx-auto
            font-zlbold
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[150px]
            text-center
            z-[998]
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            text-transparent
            bg-clip-text
            leading-tight
          "
        >
          RAHUL GOGOI
        </motion.p>
      </div>

      {/* Cursor circle (desktop only) */}
      {visible && (
        <div
          className="hidden lg:block absolute w-5 h-5 bg-primary rounded-full pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
    </div>
  );
}

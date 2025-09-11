"use client";
import React, { useRef, useState } from "react";
import { BackgroundRippleEffect } from "./RippleBack";
import { Highlight } from "../ui/hero";
import { motion } from "motion/react";

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
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden"
    >
      <BackgroundRippleEffect />
      <div className="mt-60 w-full flex flex-col">
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
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" mx-auto font-bold text-[150px] relative z-[998] bg-gradient-to-r from-white/50 via-primary to-white/50 text-transparent bg-clip-text"
        >
          RAHUL GOGOI
        </motion.p>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-3xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-[50px] text-center mx-auto "
        >
          <Highlight className="text-black dark:text-white">
            Full-stack developer
          </Highlight>{" "}
          focused on <br /> building performant web apps and user-centric
          solutions.
        </motion.h1>
      </div>

      {/* Cursor circle */}
      {visible && (
        <div
          className="absolute w-5 h-5 bg-primary rounded-full pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { BackgroundRippleEffect } from "./RippleBack";
import { Highlight } from "../ui/hero";
import { motion } from "motion/react";
import { Spotlight } from "./Spotlight";

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
      <Spotlight className=" left-1/5" />
      <div className="mt-60 w-full flex flex-col">
        <p className=" text-xs text-white font-zllight uppercase text-center tracking-[10px]">
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
          className=" sticky top-0 mx-auto font-zlbold text-[150px] z-[998] bg-gradient-to-r from-transparent via-white to-transparent text-transparent bg-clip-text"
        >
          RAHUL GOGOI
        </motion.p>
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

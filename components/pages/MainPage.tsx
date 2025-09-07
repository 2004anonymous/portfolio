"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero";
import Button from "../widgets/buttons/Button";

export function MainPage() {
  return (
    <HeroHighlight>
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
        className=" font-bold text-[190px] bg-gradient-to-r from-white/50 via-primary to-white/50 text-transparent bg-clip-text"
      >
        RAHUI. GOGOI
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
        className="text-xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-[58px] text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          Full-stack developer
        </Highlight>{" "}
        focused on <br /> building performant web apps and user-centric
        solutions.
      </motion.h1>
      {/* <Button icon={<Airplay/>} variant="primary" className=" py-4 px-8 rounded-full">Hello</Button> */}
    </HeroHighlight>
  );
}

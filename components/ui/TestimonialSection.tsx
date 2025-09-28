import React from "react";
import Button from "../widgets/buttons/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.9 }}
      transition={{ duration: 0.8 }}
      className=" flex items-center justify-center bg-black px-6 py-20"
    >
      <div className="w-full max-w-6xl bg-neutral-900 border-dashed border border-neutral-800 grid md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold font-zllight text-white leading-snug">
            Build websites faster and 10x better than your competitors with{" "}
            <span className="text-white font-extrabold">Aceternity UI Pro</span>
          </h2>

          <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
            With the best in class components and templates, stand out from the
            crowd and get more attention to your website. Trusted by founders
            and entrepreneurs from all over the world.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button className=" rounded-none border-none bg-white py-2 text-black text-sm">
              Hire Me
            </Button>
            <Button
              icon={<ArrowUpRight />}
              iconPosition="right"
              className=" rounded-none bg-black border-none text-sm py-3 text-white"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 flex flex-col justify-center border-dashed border-t md:border-t-0 md:border-l border-neutral-800">
          <p className="text-neutral-300 text-sm leading-relaxed">
            Manu is an artist, I didn&apos;t know what I wanted when we started,
            but his intuition and eye for design more than made up for it. We
            went from &quot;I want something dark theme and high...
          </p>

          <div className=" mt-6 space-x-3 flex items-center">
            <Image
              src="/developer.jpg"
              alt="Rahul Gogoi"
              className="rounded-lg h-10 w-10 object-cover"
              width={500}
              height={500}
            />
            <div className="">
              <p className="font-zlbold text-white">Rahul Gogoi</p>
              <p className="text-neutral-400 text-xs">
                President at TAC, CEO at Rogue
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;

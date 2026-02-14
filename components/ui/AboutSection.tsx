import React from "react";
import SectionCTC from "../widgets/buttons/SectionCTC";
import Image from "next/image";
import Button from "../widgets/buttons/Button";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const AboutSection = () => {
  return (
    <div className="w-full bg-slate-50/10 px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 space-y-8">

      <SectionCTC text="About me" />

      {/* Top Intro Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6">
        <div className="text-xl sm:text-2xl text-white leading-8 sm:leading-10 lg:max-w-[45%] font-[200]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          possimus doloremque reprehenderit saepe,
        </div>

        <p className="text-xs sm:text-sm text-slate-50/40 leading-5 lg:max-w-[30%] text-left lg:text-end hover:text-white transition-colors duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nesciunt itaque quae, saepe ab voluptate impedit atque autem fuga non
          optio pariatur sequi ipsa explicabo.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Text Card */}
        <div className="col-span-1 md:col-span-2 min-h-[350px] md:min-h-[400px] w-full rounded-3xl bg-white/5 backdrop-blur-md shadow-lg p-6 sm:p-8">

          <div className="text-2xl sm:text-3xl md:text-4xl leading-snug md:leading-[49px] max-w-full md:max-w-[95%]">
            Hi, I’m Rahul Gogoi — a full-stack developer passionate about
            crafting scalable systems, writing clean code, and exploring new
            tech every day.
          </div>

          <div className="mt-5 h-[1px] bg-slate-50/30 w-2/3 md:w-[60%]"></div>

          <p className="text-xs sm:text-sm text-slate-50/40 py-6 max-w-full md:max-w-[70%] leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum
            nemo ipsam libero tempore architecto vitae tenetur sit soluta velit
            laboriosam commodi similique.
          </p>

          <div className="flex items-center flex-wrap gap-4">
            <Button icon={<Facebook size={18} />} className="rounded-full p-3 sm:p-4 bg-black" />
            <Button icon={<Linkedin size={18} />} className="rounded-full p-3 sm:p-4 bg-black" />
            <Button icon={<Instagram size={18} />} className="rounded-full p-3 sm:p-4 bg-black" />
            <Button icon={<Github size={18} />} className="rounded-full p-3 sm:p-4 bg-black" />
          </div>
        </div>

        {/* Image Card */}
        <div className="col-span-1 rounded-3xl overflow-hidden group h-[300px] md:h-auto">
          <Image
            alt="Developer Image"
            src={"/developer.jpg"}
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>

      {/* Bottom Link */}
      <div className="flex items-center justify-center mt-10 group cursor-pointer">
        <p className="text-sm text-slate-50/60 group-hover:text-white duration-300 underline pb-0.5 me-1">
          More about Me
        </p>
        <ArrowUpRight
          size={20}
          className="group-hover:rotate-45 duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default AboutSection;

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
    <div className=" w-full bg-slate-50/10 px-5 md:px-20 py-16 space-y-6">
      {/* <div className=" rounded-3xl mx-auto min-w-[600px] max-h-[500px] w-full overflow-hidden">
        <Image
          alt="Developer Image"
          src={"/hiring.png"}
          width={5000}
          height={5000}
          className=" w-full h-full object-cover"
        />
      </div> */}

      <SectionCTC text="About me" />
      <div className=" flex items-center justify-between pb-6">
        <div className=" text-2xl text-white leading-10 max-w-[45%] font-[200]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          possimus doloremque reprehenderit saepe,
        </div>
        <p className=" max-w-[30%] text-xs text-slate-50/30 leading-5 text-end hover:text-white transition-colors duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nesciunt itaque quae, saepe ab voluptate impedit atque autem fuga non
          optio pariatur sequi ipsa explicabo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        <div className="col-span-2 min-h-[400px] w-full rounded-3xl bg-white/5 backdrop-blur-md shadow-lg p-8">
          <div className=" text-4xl leading-[49px] max-w-[95%]">
            Hi, I’m Rahul Gogoi — a full-stack developer passionate about
            crafting scalable systems, writing clean code, and exploring new
            tech every day.
          </div>
          <div className=" mt-5 h-[1px] bg-slate-50/30 w-[60%]"></div>
          <p className=" text-xs text-slate-50/30 py-6 max-w-[70%] leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum
            nemo ipsam libero tempore architecto vitae tenetur sit soluta velit
            laboriosam commodi similique.
          </p>
          <div className=" flex items-center space-x-4">
            <Button
              icon={<Facebook />}
              className=" rounded-full p-4 bg-black"
            />
            <Button
              icon={<Linkedin />}
              className=" rounded-full p-4 bg-black"
            />
            <Button
              icon={<Instagram />}
              className=" rounded-full p-4 bg-black"
            />
            <Button icon={<Github />} className=" rounded-full p-4 bg-black" />
          </div>
        </div>
        <div className="col-span-1 bg-orange rounded-3xl overflow-hidden group">
          <Image
            alt="Developer Image"
            src={"/developer.jpg"}
            width={500}
            height={500}
            className=" w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>

      <div className=" flex items-center justify-center mt-10 group">
        <p className=" text-sm cursor-pointer text-slate-50/60 group-hover:text-white duration-300 underline pb-0.5 me-1 ">
          More about Me
        </p>{" "}
        <ArrowUpRight
          size={20}
          className=" group-hover:rotate-45 duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import SectionCTC from "../widgets/buttons/SectionCTC";
import { Qualifications } from "@/lib/constants";

const Qualification = () => {
  return (
    <div className=" py-20 px-20 w-full">
      <SectionCTC text="Qualifications" />

      <div className=" flex items-center justify-between pb-6 mt-6">
        <div className=" text-xl text-white leading-8 max-w-[45%] font-[200]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          possimus doloremque reprehenderit saepe,
        </div>
        <p className=" max-w-[30%] text-xs text-slate-50/30 leading-5 text-end hover:text-white transition-colors duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nesciunt itaque quae, saepe ab voluptate impedit atque autem fuga non
          optio pariatur sequi ipsa explicabo.
        </p>
      </div>

      <div className=" py-5">
        {Qualifications.map((qualification, index) => (
          <ExperienceCard
            key={index}
            title={qualification.title}
            description={qualification.description}
            duration={qualification.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Qualification;

type ExperienceCardProps = {
  title: string;
  description: string;
  duration: string;
};

const ExperienceCard = ({
  title,
  description,
  duration,
}: ExperienceCardProps) => {
  return (
    <div className=" transition-all duration-300 hover:px-10 flex py-8 items-center justify-between bg-gradient-to-r from-transparent via-slate-50/10 to-transparent">
      <div>
        <h4>{title}</h4>
        <p className=" text-slate-50/50 text-xs mt-2">{description}</p>
      </div>
      <div className=" text-4xl font-black">{duration}</div>
    </div>
  );
};

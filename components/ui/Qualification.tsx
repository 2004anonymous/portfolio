import React from "react";
import SectionCTC from "../widgets/buttons/SectionCTC";
import { Qualifications } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

const Qualification = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 w-full">
      <SectionCTC text="Qualifications" />

      {/* Intro Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 mt-6">
        <div className="text-xl sm:text-2xl text-white leading-8 sm:leading-10 lg:max-w-[45%] font-[200]">
          A combination of academic learning and real-world experience that has
          shaped my growth as a full-stack developer.
        </div>

        <p className="text-xs sm:text-sm text-slate-50/40 leading-5 lg:max-w-[30%] text-left lg:text-end hover:text-white transition-colors duration-300">
          📌Built on strong academic foundations and strengthened through
          real-world development experience.
        </p>
      </div>

      {/* Experience List */}
      <div className="py-5 space-y-4">
        {Qualifications.map((qualification, index) => (
          <ExperienceCard
            key={index}
            title={qualification.title}
            description={qualification.description}
            duration={qualification.duration}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center text-xs">
          <p className="text-slate-50/40 me-4">Check out More •</p>
          <div className="cursor-pointer space-x-1 text-slate-50/80 flex items-center hover:translate-x-1 transition-transform duration-300">
            <span className="underline">View More</span>
            <ArrowUpRight size={18} />
          </div>
        </div>
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
    <div className="transition-all duration-300 hover:px-4 sm:hover:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 sm:py-9 bg-gradient-to-r from-transparent via-slate-50/10 to-transparent rounded-xl">
      <div>
        <h4 className="text-lg sm:text-xl text-white">{title}</h4>
        <p className="text-slate-50/50 text-xs sm:text-sm mt-2 max-w-full sm:max-w-[80%]">
          {description}
        </p>
      </div>

      <div className="text-2xl sm:text-4xl font-black text-white">
        {duration}
      </div>
    </div>
  );
};

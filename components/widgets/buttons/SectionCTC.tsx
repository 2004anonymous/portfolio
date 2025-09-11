import React from "react";

type Props = {
  text: string;
}

const SectionCTC = ({text}: Props) => {
  return (
    <div className=" group bg-gradient-to-r from-white/5 to-white/40 hover:from-white/40 hover:to-white/5 duration-500 transition-colors inline-flex rounded-full">
      <div className=" relative bg-black text-white inline-flex py-2 px-10 m-[2px] rounded-full cursor-default items-center">
        <div className=" absolute left-4 top-1/2 group-hover:scale-200 flex items-center justify-center -translate-y-1/2 -translate-x-1/2 h-3 w-3 group-hover:left-0 transition-all bg-white rounded-full duration-300">
        </div>
        <span className=" text-sm">{text}</span>
      </div>
    </div>
  );
};

export default SectionCTC;

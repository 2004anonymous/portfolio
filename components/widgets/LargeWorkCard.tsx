import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
  type Props = {
    poster: string;
  };
const LargeWorkCard = ({ poster }: Props) => {

  return (
    <div className="min-w-[40%] relative overflow-hidden  min-h-[500px] group transition-all duration-300 hover:scale-90 rounded-2xl">
      <Image
        height={1000}
        width={1000}
        src={poster}
        className=" w-full h-full object-cover"
        alt="Description"
      />
      <div className="absolute inset-0 z-50 bg-black/10 transition-all group-hover:bg-black/40 duration-300 flex flex-col justify-center items-center p-6">
        <div className=" inline-flex h-20 shadow-lg shadow-slate-50/30 rounded-full bg-black w-20 cursor-pointer items-center justify-center translate-y-[200px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300 transition-all">
          <ArrowUpRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default LargeWorkCard;

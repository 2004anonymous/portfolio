import { ChevronRight, ChevronsRight } from "lucide-react";
import React from "react";

const SlideButton = () => {
  return (
    <div className="h-16 ps-16 inline-flex group  relative py-3 pe-8 rounded-full bg-slate-50/10 transition-all duration-500  cursor-pointer items-center overflow-hidden">
      {/* Animated dot / blob */}
      <div
        className="
      absolute top-1/2 left-[20%] 
      h-12 w-12 
      -translate-x-1/2 -translate-y-1/2 
      rounded-full bg-black 
      transition-all duration-500 
      group-hover:h-[140%] group-hover:w-[180%]
      flex items-center justify-center
    "
      >
        <ChevronsRight className="text-white transition-opacity duration-300 group-hover:opacity-100 opacity-80" />
      </div>

      {/* Text */}
      <span className="relative z-10">Content</span>
    </div>
  );
};

export default SlideButton;

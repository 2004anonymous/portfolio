"use client"
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const HeaderCTC = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className=" text-xs transition-all duration-300 after:content-[''] after:block after:w-full after:h-[1px] after:top-full after:border-b after:border-white after:transition-all after:duration-300 after:transform after:scale-x-0 hover:after:scale-x-100 capitalize cursor-pointer">
      {children}
    </div>
  );
};

export default HeaderCTC;

"use client"
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const HeaderCTC = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className=" font-medium text-xs tracking-[1px] uppercase cursor-pointer">
      {children}
    </div>
  );
};

export default HeaderCTC;

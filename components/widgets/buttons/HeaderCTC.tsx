"use client"
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const HeaderCTC = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className=" text-xs capitalize cursor-pointer">
      {children}
    </div>
  );
};

export default HeaderCTC;

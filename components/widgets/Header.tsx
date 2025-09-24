"use client";
import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import HeaderCTC from "./buttons/HeaderCTC";

const Header = () => {
  return (
    <div className=" min-h-20 pt-5 w-full bg-gradient-to-b from-black/80 via-black/50 to-transparent absolute z-[999] top-0 right-0 left-0 mx-auto">
      <div className=" flex w-full max-w-[1400px] mx-auto h-full items-center justify-between">
        <div className=" flex items-center space-x-10">
          <div className=" bg-black shadow shadow-gray-500/10 p-2 rounded-xl">
            <Image
            alt="Logo"
            src={"/ic_logo.png"}
            height={200}
            width={200}
            className=" h-7 w-7"
          />
          </div>
          <div className=" flex items-center justify-center space-x-12">
          <HeaderCTC onClick={() => {}}>about me</HeaderCTC>
          <HeaderCTC onClick={() => {}}>education</HeaderCTC>
          <HeaderCTC onClick={() => {}}>projects</HeaderCTC>
          <HeaderCTC onClick={() => {}}>resume</HeaderCTC>
          <HeaderCTC onClick={() => {}}>Blog</HeaderCTC>
        </div>
        </div>

        {/* <div className=" flex items-center justify-center space-x-14">
          <HeaderCTC onClick={() => {}}>More about me</HeaderCTC>
          <HeaderCTC onClick={() => {}}>education</HeaderCTC>
          <HeaderCTC onClick={() => {}}>projects</HeaderCTC>
          <HeaderCTC onClick={() => {}}>resume</HeaderCTC>
        </div> */}

        <Button className=" py-3 text-xs bg-white text-black hover:text-white px-8 rounded-full">Get in touch</Button>
      </div>
    </div>
  );
};

export default Header;

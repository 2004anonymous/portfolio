"use client";
import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import HeaderCTC from "./buttons/HeaderCTC";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-[999] backdrop-blur-md w-full px-20 pb-4 pt-7">
      <div className="flex w-full h-full items-center justify-between mx-auto">
        <div className="flex items-center space-x-10">
          <div className="bg-white shadow shadow-gray-500/10 p-1.5 rounded-xl">
            <Image
              alt="Logo"
              src={"/ic_logo.png"}
              height={200}
              width={200}
              className="h-8 w-8 brightness-0"
            />
          </div>
          <div className="flex items-center justify-center space-x-12">
            <HeaderCTC onClick={() => {}}>about me</HeaderCTC>
            <HeaderCTC onClick={() => {}}>education</HeaderCTC>
            <HeaderCTC onClick={() => {}}>projects</HeaderCTC>
            <HeaderCTC onClick={() => {}}>resume</HeaderCTC>
            <HeaderCTC onClick={() => {}}>Blog</HeaderCTC>
          </div>
        </div>

        <div>
          <Button icon={<ArrowUpRight size={20} />} iconPosition="right" className="py-3 text-xs bg-white text-black hover:text-white px-5 rounded-full">
            Get in touch
          </Button>
          {/* <div className=" flex items-center justify-center group">
            <p className=" text-sm cursor-pointer text-white group-hover:text-white duration-300 underline pb-0.5 me-1 ">
              Get in touch
            </p>{" "}
            <ArrowUpRight
              size={28}
              className=" group-hover:rotate-45 duration-300 transition-all"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

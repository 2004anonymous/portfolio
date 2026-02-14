"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./buttons/Button";
import HeaderCTC from "./buttons/HeaderCTC";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[999] backdrop-blur-md w-full px-4 sm:px-6 md:px-10 lg:px-20 pb-4 pt-5 sm:pt-7">
      <div className="flex w-full items-center justify-between mx-auto">

        {/* Left Section */}
        <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-10">
          <div className="bg-white shadow shadow-gray-500/10 p-1.5 rounded-xl">
            <Image
              alt="Logo"
              src={"/ic_logo.png"}
              height={200}
              width={200}
              className="h-7 w-7 sm:h-8 sm:w-8 brightness-0"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12">
            <HeaderCTC onClick={() => {}}>about me</HeaderCTC>
            <HeaderCTC onClick={() => {}}>education</HeaderCTC>
            <HeaderCTC onClick={() => {}}>projects</HeaderCTC>
            <HeaderCTC onClick={() => {}}>resume</HeaderCTC>
            <HeaderCTC onClick={() => {}}>Blog</HeaderCTC>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block">
          <Button
            icon={<ArrowUpRight size={20} />}
            iconPosition="right"
            className="py-2 sm:py-3 text-xs bg-white text-black hover:text-white px-4 sm:px-5 rounded-full"
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-5 flex flex-col space-y-5 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg">
          <HeaderCTC onClick={() => {}}>about me</HeaderCTC>
          <HeaderCTC onClick={() => {}}>education</HeaderCTC>
          <HeaderCTC onClick={() => {}}>projects</HeaderCTC>
          <HeaderCTC onClick={() => {}}>resume</HeaderCTC>
          <HeaderCTC onClick={() => {}}>Blog</HeaderCTC>

          <Button
            icon={<ArrowUpRight size={18} />}
            iconPosition="right"
            className="py-3 text-xs bg-black text-white px-5 rounded-full"
          >
            Get in touch
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;

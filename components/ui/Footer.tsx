import React from "react";
import SlideButton from "../widgets/buttons/SlideButton";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-auto bg-black py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 w-full">
      {/* Top CTA Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[85px]">
          Let&apos;s Connect <br /> There
        </div>
        <SlideButton />
      </div>

      {/* Divider */}
      <div className="border-y border-slate-50/20 mt-12 mb-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Branding */}
          <div className="w-full lg:w-[40%]">
            <div className="flex items-center">
              <div className="rounded-lg bg-black p-1 shadow shadow-gray-500/50 me-2">
                <Image
                  alt="Rahul Logo"
                  src={"/ic_logo.png"}
                  height={100}
                  width={100}
                  className="h-7 w-7"
                />
              </div>
              <div>
                <p className="text-xs leading-[14px] text-slate-50/50">
                  @Portfolio <br />
                  <span className="text-white/80 text-sm font-medium">
                    Rahul Gogoi
                  </span>
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-50/30 leading-5 mt-4 max-w-full lg:pe-20">
              Full-Stack Developer building scalable, modern, and user-focused
              applications. Passionate about clean code, performance, and
              continuous learning.
            </p>
          </div>

          {/* Right Info Columns */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-white text-xs">Address</p>
              <p className="text-slate-50/30 leading-5 text-xs mt-5">
                123 Main St, Anytown, USA, 12345, <br />
                Tingkhong, Dibrugarh, Assam
              </p>
            </div>

            <div>
              <p className="text-white text-xs">Email Address</p>
              <p className="text-slate-50/30 leading-5 text-xs mt-5 break-words">
                rahulrgogoi4@gmail.com <br />
                xa1244661@gmail.com <br />
                rahul.gogoi@gstechonlogies.co
              </p>
            </div>

            <div>
              <p className="text-white text-xs">Phone Number</p>
              <p className="text-slate-50/30 leading-5 text-xs mt-5">
                +1 (123) 456-7890 <br />
                +1 (234) 567-8901 <br />
                +1 (345) 678-9012
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <div className="flex items-center space-x-6">
            <Instagram size={18} />
            <Facebook size={18} />
            <Linkedin size={18} />
            <Github size={18} />
          </div>

          <div className="flex items-center space-x-5 text-slate-50/50 text-xs">
            <p>Projects</p>
            <p>Skills</p>
            <p>🔒Developer</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-slate-50/50 text-xs w-full text-center">
        2004 All rights reserved @ v1.0.0
      </p>
    </div>
  );
};

export default Footer;

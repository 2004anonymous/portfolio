import React from "react";
import SlideButton from "../widgets/buttons/SlideButton";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" h-auto bg-black py-20 px-20 w-full">
      <div className=" flex items-start justify-between">
        <div className=" text-7xl leading-[85px]">
          Let&apos;s Connect <br /> There
        </div>
        <SlideButton />
      </div>

      {/* devider */}
      <div className=" border-y border-slate-50/20 mt-10 mb-7 py-10">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-[40%] h-auto">
            <div className=" flex items-center justify-start">
              <div className=" rounded-lg bg-black p-1 shadow shadow-gray-500/50 me-2">
                <Image
                  alt="Rahul Logo"
                  src={"/ic_logo.png"}
                  height={100}
                  width={100}
                  className=" h-7 w-7"
                />
              </div>
              <div>
                <p className=" text-xs leading-[14px] text-slate-50/50">
                  @Portfolio <br />{" "}
                  <span className=" text-white/80 text-sm font-medium">
                    Rahul Gogoi
                  </span>
                </p>
              </div>
            </div>
            <p className=" text-xs text-slate-50/30 leading-5 mt-2 pe-28">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              maiores perspiciatis impedit mollitia dicta beatae voluptatem,
              suscipit, laudantium eos voluptates libero! Laudantium ipsam
              facilis exercitationem qui dicta, iure non animi!
            </p>
          </div>
          <div className="w-[60%] flex flex-col md:flex-row justify-end items-start space-x-4">
            <div className=" flex-1 flex justify-end">
              <div>
                <p className=" text-white text-xs">Address</p>
                <p className=" text-slate-50/30 leading-5 text-xs mt-5">
                  123 Main St, Anytown, USA, 12345, <br /> Tingkhong, Dibrugarh,
                  Assam
                </p>
              </div>
            </div>
            <div className=" flex justify-end flex-1">
              <div>
                <p className=" text-white text-xs">Email Address</p>
                <p className=" text-slate-50/30 leading-5 text-xs mt-5">
                  rahulrgogoi4@gmail.com <br /> xa1244661@gmail.com <br />{" "}
                  rahul.gogoi@gstechonlogies.co
                </p>
              </div>
            </div>
            <div className=" flex justify-end flex-1">
              <div>
                <p className=" text-white text-xs">Phone Number</p>
                <p className=" text-slate-50/30 leading-5 text-xs mt-5">
                  +1 (123) 456-7890 <br /> +1 (234) 567-8901 <br /> +1 (345)
                  678-9012
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between mt-5">
          <div className=" flex items-center justify-center space-x-8">
            <Instagram size={18} />
            <Facebook size={18} />
            <Linkedin size={18} />
            <Github size={18} />
          </div>
          <div className=" flex items-center justify-center space-x-5">
            <p className=" text-slate-50/50 text-xs"> Projects</p>
            <p className=" text-slate-50/50 text-xs"> Skils</p>
            <p className=" text-slate-50/50 text-xs"> 🔒Developer</p>
          </div>
        </div>
      </div>
      <p className=" text-slate-50/50 text-xs w-full text-center mx-auto">
        2004 All rights reserved@ v1.0.0
      </p>
    </div>
  );
};

export default Footer;

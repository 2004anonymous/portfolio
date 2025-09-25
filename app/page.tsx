import AboutSection from "@/components/ui/AboutSection";
import { BackgroundRippleEffectDemo } from "@/components/ui/Content";
import Footer from "@/components/ui/Footer";
import Qualification from "@/components/ui/Qualification";
import Button from "@/components/widgets/buttons/Button";
import Header from "@/components/widgets/Header";
import LargeWorkCard from "@/components/widgets/LargeWorkCard";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BackgroundRippleEffectDemo />
      <div className=" relative min-h-screen w-full py-20 bg-[#A6A09B] overflow-x-hidden">
        <div className=" px-20">
          <div>
            <span className=" text-sm text-white capitalize font-ms">
              Since - 2004
            </span>
            <div className=" flex items-start justify-between">
              <div className=" mt-5 text-4xl text-black md:text-5xl lg:text-5xl leading-[60px] font-zlbold uppercase">
                <span className=" text-[#F54927]">Highlights</span> of <br /> my
                works and experiences
              </div>
              <div className=" w-[40%] ms-10">
                <p className=" text-black text-sm leading-5 font-ms">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur pariatur voluptatem, architecto maiores debitis
                  deserunt sequi dolorem dolor quo amet soluta quis atque ipsam
                  veritatis natus aperiam, magni odit eaque.
                </p>
                <Button icon={<ArrowUpRight size={24}/>} iconPosition="right" className=" rounded-full py-3.5 mt-5 px-6 bg-black transition-all duration-300 hover:text-black hover:bg-white text-white text-sm">
                  check out all projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-10 flex space-x-10">
          <LargeWorkCard/>
          <LargeWorkCard/>
          <LargeWorkCard/>
          <LargeWorkCard/>
        </div>
      </div>
      <Qualification />
      <AboutSection />
      <Footer />
    </div>
  );
}

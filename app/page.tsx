import AboutSection from "@/components/ui/AboutSection";
import { BackgroundRippleEffectDemo } from "@/components/ui/Content";
import Footer from "@/components/ui/Footer";
import Qualification from "@/components/ui/Qualification";
import Work from "@/components/ui/Work";
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
      <Work/>
      <Qualification />
      <AboutSection />
      <Footer />
    </div>
  );
}

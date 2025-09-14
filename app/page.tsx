import AboutSection from "@/components/ui/AboutSection";
import { BackgroundRippleEffectDemo } from "@/components/ui/Content";
import Footer from "@/components/ui/Footer";
import Qualification from "@/components/ui/Qualification";
import Header from "@/components/widgets/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Header />
      <BackgroundRippleEffectDemo />
      <Qualification />
      <AboutSection />
      <Footer />
    </div>
  );
}

import AboutSection from "@/components/ui/AboutSection";
import { BackgroundRippleEffectDemo } from "@/components/ui/Content";
import Footer from "@/components/ui/Footer";
import Qualification from "@/components/ui/Qualification";
import Work from "@/components/ui/Work";
import Header from "@/components/widgets/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <BackgroundRippleEffectDemo />
      <Work />
      <AboutSection />
      <Qualification />
      <Footer />
    </div>
  );
}

export const SkillCard = () => {
  return (
    <div className=" flex items-center justify-start space-x-2">
      <Image
        src="/icons/ic_docker.png"
        alt="Developer"
        className="h-8 w-8"
        width={100}
        height={100}
      />
      <p className=" font-zllight">Docker</p>
    </div>
  );
};

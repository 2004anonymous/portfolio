import { MainPage } from "@/components/pages/MainPage";
import { BackgroundRippleEffectDemo } from "@/components/ui/Content";
import Button from "@/components/widgets/buttons/Button";
import SectionCTC from "@/components/widgets/buttons/SectionCTC";
import SlideButton from "@/components/widgets/buttons/SlideButton";
import Header from "@/components/widgets/Header";
import { PersonStanding } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <BackgroundRippleEffectDemo/>
      <div className=" h-screen p-20">
        <SectionCTC />
        <SlideButton />
        <Button icon={<PersonStanding className=" text-white" />} className=" min-h-20 min-w-20 rounded-full bg-slate-50/10 p-0" />
      </div>
    </>
  );
}

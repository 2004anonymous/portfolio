import { useEffect, useRef, useState } from "react";
import { Banner } from "../component/Banner";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import Hero from "../component/Hero";
import Item from "../component/Item";
import Loader from "../component/Loader";
import { NavBar } from "../component/NavBar";
import { url } from "inspector";
import Experience from "../component/Experience";
import Skills from "../component/Skills";
import About from "../component/About";
import { Contact } from "./Contact";
import Connect from "../component/Connect";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Toast from "../component/Toast";
import Heading from "../component/Heading";
import Projects from "../component/Projects";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const downloadApk = () => {
    const navigateTo =
      "https://github.com/2004anonymous/releases/releases/download/Anonymous/app-release.apk";
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = navigateTo;
    }, 4000);
  };

  return (
    <div className="relative w-screen h-full bg-black">
      <NavBar />
      <Hero />
      <div className=" bg-black py-5 mt-18">
        <div className="w-full h-10 bg-black absolute -top-5 left-0 right-0 blur-xl"></div>

        {/* service section */}
        <div className="flex md:hidden lg:hidden justify-center">
        <Heading name="About Me"/>
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects/>
        <Connect />
        <div className="text-white mt-10 px-5 lg:px-32">
          <h1 className="lg:text-2xl md:text-2xl text-lg font-extrabold">
            Current projects
          </h1>
          <p className="text-sm text-gray-500 max-w-96 my-5">
            Currently i'm working on an android based application, Primary use
            of this application is to find all the ug papers under DU.
          </p>
          <div>
            <button className="rounded-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-sm me-2">
              Learn more
            </button>
            <button
              className="py-2 px-4 rounded-lg border border-gray-500 text-sm duration-200 bg-gradient-to-r bg-white text-black"
              onClick={downloadApk}
            >
              Download
            </button>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
      {isLoading && <Loader />}
      <Toast content="anonymous@portfolio.com"/>
    </div>
  );
};

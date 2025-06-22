import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center px-5 lg:px-24 bg-black pt-16 md:pt-24 lg:pt-32">
      <div className=" text-gray-500 flex space-x-3 border rounded-full px-5 border-gray-800 py-2 mb-5">
        <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
        <h1 className="text-xs">Fullstack developer</h1>
      </div>
      <div>
        <h1 className=" text-2xl lg:text-4xl font-black text-gray-400 text-start md:text-center lg:text-center items-center">
        <span>Providing The best{" "}</span>
          <div className=" inline-block">
          <p className=" w-full shrink bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" id="text">
            Experience
          </p>
          </div>
          <br />
          <span className="text-lg md:text-xl text-gray-300">
            Through this portfolio.
          </span>
        </h1>
        <p className=" text-gray-300 text-sm w-full lg:w-4/6 lg:px-5 px-0 m-auto mt-5 text-start lg:text-center leading-6">
            Hello !
          my name is rahul Gogoi, I'm from Dibrugarh. Currently i'm a student of
          BCA at DHSK college. Professionally i'm a Fullstack Web and Android
          developer. I have 3 year experience on the field of development and
          1.5 year work experience.
        </p>
      </div>
      <div className="mt-10 hidden md:flex lg:flex space-x-2">
        <div className="h-12 w-12 rounded-full border border-gray-600 flex bg-gray-950 justify-center items-center animate-bounce cursor-pointer hover:text-black hover:bg-white duration-200 text-white ">
        <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;

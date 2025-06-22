import React from "react";
import Heading from "./Heading";

const Experience = () => {
  return (
    <div className="px-0 lg:px-24" id="ExperienceSection">
      <Heading name="Work Experiences"/>
      <div className="flex justify-around items-center flex-wrap mt-10">
      <div className="min-w-80 h-auto relative group cursor-pointer duration-200 flex-1 m-5">
          <div className=" absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-0 group-hover:opacity-35 duration-200"></div>
          <div className="w-full h-full rounded-lg border border-gray-700 bg-gray-950 text-white p-5 lg:p-10">
            <p className="text-gray-600 text-xs">01</p>
            <h1 className=" text-lg font-extrabold my-2">
              Android Development
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis a nulla esse minus, omnis aut maiores dolorum libero
              quisquam nihil porro ad corporis cupiditate nobis tenetur. At
              fugiat blanditiis voluptate.
            </p>
            <button className="text-sm text-gray-400 mt-3 rounded-full space-x-2 flex justify-center items-center">
              <div className="h-7 w-7 rounded-full border border-gray-500 flex justify-center items-center me-2">
                <i className="fa-solid fa-info"></i>
              </div>
              See more
            </button>
          </div>
        </div>

        <div className="min-w-80 h-auto relative group cursor-pointer duration-200 flex-1 m-5">
          <div className=" absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-0 group-hover:opacity-35 duration-200"></div>
          <div className="w-full h-full rounded-lg border border-gray-700 bg-gray-950 text-white p-5 lg:p-10">
            <p className="text-gray-600 text-xs">01</p>
            <h1 className=" text-lg font-extrabold my-2">
              Android Development
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis a nulla esse minus, omnis aut maiores dolorum libero
              quisquam nihil porro ad corporis cupiditate nobis tenetur. At
              fugiat blanditiis voluptate.
            </p>
            <button className="text-sm text-gray-400 mt-3 rounded-full space-x-2 flex justify-center items-center">
              <div className="h-7 w-7 rounded-full border border-gray-500 flex justify-center items-center me-2">
                <i className="fa-solid fa-info"></i>
              </div>
              See more
            </button>
          </div>
        </div>

        <div className="min-w-80 h-auto relative group cursor-pointer duration-200 flex-1 m-5">
          <div className=" absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-0 group-hover:opacity-35 duration-200"></div>
          <div className="w-full h-full rounded-lg border border-gray-700 bg-gray-950 text-white p-5 lg:p-10">
            <p className="text-gray-600 text-xs">01</p>
            <h1 className=" text-lg font-extrabold my-2">
              Android Development
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis a nulla esse minus, omnis aut maiores dolorum libero
              quisquam nihil porro ad corporis cupiditate nobis tenetur. At
              fugiat blanditiis voluptate.
            </p>
            <button className="text-sm text-gray-400 mt-3 rounded-full space-x-2 flex justify-center items-center">
              <div className="h-7 w-7 rounded-full border border-gray-500 flex justify-center items-center me-2">
                <i className="fa-solid fa-info"></i>
              </div>
              See more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;

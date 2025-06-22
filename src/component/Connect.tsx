import React, { useState } from "react";
import Heading from "./Heading";
import { LocateIcon, Mail, Phone } from "lucide-react";
import Toast from "./Toast";

const Connect = () => {
  const [isShowing, setIsShowing] = useState(false);
  const showToast = () => {
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 2000);
  }
  return (
    <div className="px-5 md:px-8 lg:px-24 py-10">
      <Heading name="Get in touch" />
      <p className="text-gray-500 text-sm my-5 text-center">
        Let's connect together and disscuss about the projects and make
        something new, unique and meaningfull Services.
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row mt-10 justify-center md:space-x-5 space-x-0 space-y-10 md:space-y-0 lg:space-y-0 lg:space-x-8">
        <div className="flex space-x-3 bg-black">
          <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-md bg-gradient-to-r from-purple-500 to bg-pink-500">
            <Phone color="#ffffff" width={18} />
          </div>
          <div className="text-white text-sm">
            <h1 className="text-gray-400 text-xs font-bold">Call me</h1>
            <p>
              +91 <span>8638133781</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-3 bg-black">
          <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-md bg-gradient-to-r from-purple-500 to bg-pink-500">
            <Mail color="#ffffff" width={18} />
          </div>
          <div className="text-white text-sm">
            <h1 className="text-gray-400 text-xs font-bold">Email</h1>
            <p>rahulrgogoi4@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-3 bg-black">
          <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-md bg-gradient-to-r from-purple-500 to bg-pink-500">
            <LocateIcon color="#ffffff" width={18} />
          </div>
          <div className="text-white text-sm">
            <h1 className="text-gray-400 text-xs font-bold">Address</h1>
            <p>Lachit nagar, Dibrugarh, Assam</p>
          </div>
        </div>
      </div>
      <div className=" relative w-full md:w-96 lg:w-1/2 m-auto mt-8">
        <input
          type="email"
          className=" py-3 px-5 rounded-lg focus:outline-none border border-gray-500 text-black text-sm w-full invalid:border-red-500 invalid:border-2 bg-slate-300"
          placeholder="your@email.com"
        />
        <button className="absolute py-2 px-5 bg-purple-500 rounded-lg text-white text-sm right-1 top-1 bottom-1 hover:bg-purple-700 duration-200" onClick={showToast}>
          Subscribe
        </button>
      </div>
      {isShowing && <Toast content="Subscribed succesfully"/>}
    </div>
  );
};

export default Connect;

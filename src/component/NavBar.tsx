import { FC, useEffect, useState } from "react";
import logo from "../assets/logoRahul.png";
import { log } from "console";
import {motion, AnimatePresence} from "framer-motion"
import {
  AlignJustify,
  X,
  House,
  UserRound,
  FolderOpenDot,
  Download,
} from "lucide-react";

export const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" lg:from-transparent lg:to-transparent bg-gradient-to-r from-purple-500 to-pink-500 backdrop-filter backdrop-blur-xl bg-opacity-50 sticky top-0 px-5 lg:px-24 py-3 flex justify-between items-center bg-transparent z-50">
      <div className="flex items-center justify-center">
        <img src={logo} className=" h-10 w-10 lg:h-12 lg:w-12" alt="" />
      </div>

      <ul className="hidden lg:flex justify-center items-center space-x-10 text-gray-400">
        <div className="relative justify-center flex items-center cursor-pointer space-x-2 group">
          <div className=" absolute px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl hover:opacity-50 scale-125 opacity-0 duration-300"></div>
          <House color="#ffffff" size={18} />
          <li className=" text-xs cursor-pointer duration-200 group-hover:text-white">
            Home
          </li>
        </div>
        <div className="relative justify-center flex items-center cursor-pointer space-x-2 group">
          <div className=" absolute px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl hover:opacity-50 scale-125 opacity-0 duration-300"></div>
          <UserRound color="#ffffff" size={18} />
          <li className=" text-xs cursor-pointer duration-200 group-hover:text-white">
            About
          </li>
        </div>
        <div className="relative justify-center flex items-center cursor-pointer space-x-2 group">
          <div className=" absolute px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl hover:opacity-50 scale-125 opacity-0 duration-300"></div>
          <FolderOpenDot color="#ffffff" size={18} />
          <li className=" text-xs cursor-pointer duration-200 group-hover:text-white ">
            Projects
          </li>
        </div>

        <div className="relative justify-center flex items-center cursor-pointer space-x-2 group">
          <div className=" absolute px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl hover:opacity-50 scale-125 opacity-0 duration-300"></div>
          <Download color="#ffffff" size={18} />
          <li className=" text-xs cursor-pointer duration-200 group-hover:text-white ">
            Resume
          </li>
        </div>
      </ul>
      <div className="hidden lg:flex space-x-4">
        <a
          href="https://www.linkedin.com/in/rahul-gogoi-aa5609258/"
          className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
        >
          <i className="fa-brands fa-linkedin-in text-black group-hover:text-white duration-200"></i>
        </a>
        <a
          href="https://www.facebook.com/rahul817rx"
          className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
        >
          <i className="fa-brands fa-facebook-f text-black group-hover:text-white duration-200"></i>
        </a>
        <a
          href="#"
          className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
        >
          <i className="fa-brands fa-twitter text-black group-hover:text-white duration-200"></i>
        </a>
        <a
          href="https://github.com/2004anonymous"
          className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
        >
          <i className="fa-brands fa-github text-black group-hover:text-white duration-200"></i>
        </a>
      </div>

      <div className="flex lg:hidden justify-center items-center">
        <button onClick={toggleNavMenu}>
          <AlignJustify color="#ffffff" />
        </button>
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
        initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
         className=" animate-slideIn px-5 pb-10 pt-4 lg:hidden flex w-full h-auto bg-purple-500 absolute top-0 left-0 right-0 text-white">
          <div className="flex flex-col justify-start items-center w-full">
            <div className="flex justify-between w-full items-center mb-10">
              <div className="flex items-center justify-center">
                <img src={logo} className=" h-10 w-10 lg:h-12 lg:w-12" alt="" />
              </div>
              <button onClick={toggleNavMenu}>
                <X color="#ffffff" />
              </button>
            </div>
            <ul className=" space-y-2 w-full">
              <li className="flex space-x-2 justify-start items-center bg-transparent hover:bg-purple-200 duration-200 py-3 px-5 rounded-md cursor-pointer ">
                <House color="#ffffff" size={18} />{" "}
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li className="flex space-x-2 justify-start items-center bg-transparent hover:bg-purple-200 duration-200 py-3 px-5 rounded-md cursor-pointer ">
                <UserRound color="#ffffff" size={18} />{" "}
                <a href="#" className="text-sm">
                  About
                </a>
              </li>
              <li className="flex space-x-2 justify-start items-center bg-transparent hover:bg-purple-200 duration-200 py-3 px-5 rounded-md cursor-pointer ">
                <FolderOpenDot color="#ffffff" size={18} />{" "}
                <a href="#" className="text-sm">
                  Project
                </a>
              </li>
              <li className="flex space-x-2 justify-start items-center bg-transparent hover:bg-purple-200 duration-200 py-3 px-5 rounded-md cursor-pointer ">
                <Download color="#ffffff" size={18} />{" "}
                <a href="#" className="text-sm">
                  Resume
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-10">
              <a
                href="https://www.linkedin.com/in/rahul-gogoi-aa5609258/"
                className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
              >
                <i className="fa-brands fa-linkedin-in text-black group-hover:text-white duration-200"></i>
              </a>
              <a
                href="https://www.facebook.com/rahul817rx"
                className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
              >
                <i className="fa-brands fa-facebook-f text-black group-hover:text-white duration-200"></i>
              </a>
              <a
                href="#"
                className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
              >
                <i className="fa-brands fa-twitter text-black group-hover:text-white duration-200"></i>
              </a>
              <a
                href="https://github.com/2004anonymous"
                className="h-8 w-8 group rounded-full bg-white border border-white flex justify-center items-center duration-200 hover:bg-black cursor-pointer"
              >
                <i className="fa-brands fa-github text-black group-hover:text-white duration-200"></i>
              </a>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

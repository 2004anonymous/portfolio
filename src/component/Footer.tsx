import logo from "../assets/logoRahul.png";
export const Footer = () => {
  return (
    <footer className="w-full py-32 text-white">
      <div className="flex justify-center items-center">
        <img src={logo} className="h-12 w-12" alt="" />
        <div>
          <p className="text-xs text-gray-500 mt-2">Portfolio of Rahul Gogoi</p>
          <h1 className="text-sm font-bold text-gray-300">
            @ 2024 All rights Reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};

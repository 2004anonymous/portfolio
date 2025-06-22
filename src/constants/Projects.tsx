import { ExternalLink, RotateCwSquare } from "lucide-react";
import { getRandomColor } from "./navItems";

const Projects = [
  {
    type: "Android",
    profile:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    projectName: "Chating Point",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate, ullam totam dicta cumque quis magni error corporis veniam fugit praesentium! Facilis labore, maxime consequuntur nulla esse voluptatum maiores aperiam.",
  },
  {
    type: "Android",
    profile:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    projectName: "Exam Orbit",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate, ullam totam dicta cumque quis magni error corporis veniam fugit praesentium! Facilis labore, maxime consequuntur nulla esse voluptatum maiores aperiam.",
  },
  {
    type: "Web",
    profile:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    projectName: "Rent & PG",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate, ullam totam dicta cumque quis magni error corporis veniam fugit praesentium! Facilis labore, maxime consequuntur nulla esse voluptatum maiores aperiam.",
  },
];
const projectLogo = (type: string) => {
  let pType = <i className="fa-solid fa-layer-group"></i>
  if (type === "Android") {
    pType = <i className="fa-brands fa-android"></i>
  }else if(type === "Web"){
    pType = <i className="fa-solid fa-code"></i>
  }
  return pType;
}
export const getResult = (type: string): JSX.Element[] => {
  return Projects.map(
    (project, index) => (
      <div key={index} className="p-5 lg:p-6 min-w-80 bg-white rounded-lg flex-1 m-5 hover:-translate-y-2 duration-300">
        <div className="flex justify-between items-center">
        
            <button><RotateCwSquare color="#a855f7"/></button>
        </div>
        <h1 className="text-xl mt-3 font-extrabold text-black">{<span>{projectLogo(project.type)}</span>} {project.projectName}</h1>
        <p className="text-sm text-gray-500 mt-3">{project.description}</p>
        <div className="mt-3 space-x-2">
            <span className={`rounded-lg py-2 px-3 bg-[${getRandomColor()}] text-white text-xs`}>java</span>
            <span className={`rounded-lg py-2 px-3 bg-[${getRandomColor()}] text-white text-xs`}>kotlin</span>
            <span className={`rounded-lg py-2 px-3 bg-[${getRandomColor()}] text-white text-xs`}>firebase</span>
        </div>
      </div>
    )
  );
};

import { IProjectCard } from "../interfaces/IProjectCard";
import { styles } from "../styles/styles";
import { Technologies } from "../data/Technologies";
import { AiOutlineGithub } from "react-icons/ai";
export const ProjectCard = ({
  image,
  projectName,
  createDate,
  description,
  liveDemo,
  sourceCode,
}: IProjectCard) => {
  return (
    <div className={`${styles.cardElement} overflow-hidden`}>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="flex h-fit w-fit items-center justify-center rounded-t-2xl overflow-hidden ">
          <img src={image} alt="Card" className="" />
        </div>
        <div className="bg-gray-300 flex align-center text-center justify-center flex-col w-full overflow-hidden h-full">
          <div className="flex align-center text-center justify-center text-3xl font-mono">
            {projectName}
          </div>
          <div className=" flex align-center text-center justify-center text-sm font-serif">
            {createDate}
          </div>
          <div className="border-b-2 border-slate-100 pt-2 mb-4 w-[65%] m-auto"></div>
          <div className="font-serif text-sm leading-4 text-black">
            {description}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full bg-slate-300">
          {liveDemo ? (
            <div className="cursor-pointer hover:text-white hover:bg-slate-900 w-full text-center">
   
              Live Demo{" "}
            </div>
          ) : (
            ``
          )}
          {sourceCode ? (
            <div className="cursor-pointer text-center hover:text-white hover:bg-slate-900 w-full flex flex-row align-center justify-center">
              <AiOutlineGithub className="my-auto"/> Source Code{" "}
            </div>
          ) : (
            ``
          )}
        </div>
      </div>
    </div>
  );
};

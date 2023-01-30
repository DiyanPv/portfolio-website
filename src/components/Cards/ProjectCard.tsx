import { IProjectCard } from "../../interfaces/IProjectCard";
import { styles } from "../../styles/styles";
import { AiOutlineGithub } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
export const ProjectCard = ({
  image,
  projectName,
  createDate,
  description,
  liveDemo,
  sourceCode,
}: IProjectCard) => {
  return (
    <div className={`${styles.cardElement} overflow-hidden cursor-pointer`}>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="flex h-fit w-fit items-center justify-center rounded-t-2xl ">
          <img src={image} alt="Card" className="" />
        </div>

        <div className="bg-gray-300 flex align-center text-center justify-center flex-col w-full">
          <div className="flex align-center text-center justify-center text-3xl font-mono">
            {projectName}
          </div>
          <div className=" flex align-center text-center justify-center text-sm font-serif">
            {createDate}
          </div>
          <div className="border-b-2 border-slate-100 pt-2 mb-4 w-[65%] m-auto"></div>
          <div className="font-sans text-sm leading-4 text-black h-28 ml-4 mr-4"   style={{ textShadow: "1px 1px 2px #999" }}>
            {description}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full bg-slate-300">
          {liveDemo ? (
            <a href={liveDemo} target="_blank" className="cursor-pointer hover:text-white hover:bg-slate-900 w-full text-center align-center justify-center flex">
              <div className="cursor-pointer hover:text-white hover:bg-zinc-600 w-full text-center align-center justify-center flex">
                <BsPlayFill className="my-auto" />
                Live Demo
              </div>
            </a>
          ) : (
            ``
          )}
          {sourceCode ? (
            <a href={sourceCode} target="_blank" className="cursor-pointer text-center hover:text-white hover:bg-slate-900 w-full flex flex-row align-center justify-center">
            <div className="cursor-pointer text-center hover:text-white hover:bg-zinc-600 w-full flex flex-row align-center justify-center">
              <AiOutlineGithub className="my-auto" /> Source Code
            </div>
            </a>
          ) : (
            ``
          )}
        </div>
      </div>
    </div>
  );
};

import { IoLogoLinkedin } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { TechnologiesComponent } from "./Technologies";
export const Content = () => {



  return (
    <div
      className="flex flex-col justify-around w-full h-screen items-center container"
      id="mainPage"
    >
      <div className="p-16 fadeLeftMini flex flex-col justify-center align-center pt-20">
        <div
          id="text"
          className="font-bold drop-shadow-4xl fadeRightMini text-white lg:text-6xl md:text-3xl font-family: 'Bebas Neue'"
          style={{ textShadow: "4px 3px 7px #000" }}
        >
          Diyan's Portfolio
        </div>
        <div className="border-b-2 border-slate-400 pt-4 "></div>
        <div
          className={`text-gray-700 lg:text-xl md:text-sm sm:text-xs flex justify-center items-center font-semibold `}
        >
          React Web Developer | Fullstack
        </div>
        <div className="flex flex-row justify-center mt-2">
          <a
            href="https://www.linkedin.com/in/diyan-p-b640b120a/"
            target="_blank"
          >
            <IoLogoLinkedin fontSize={36} className="mr-6" />
          </a>
          <a href="https://github.com/DiyanPv" target="_blank">
            <IoLogoGithub fontSize={36} className="mr-6" />
          </a>
          <a href="mailto:diyanpetrov61@gmail.com" target="_blank">
            <CgMail fontSize={36} />
          </a>
        </div>
      </div>
      <TechnologiesComponent/>
    </div>
  );
};

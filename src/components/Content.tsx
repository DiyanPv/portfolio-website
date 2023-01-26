import { IoLogoLinkedin } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
export const Content = () => {
  return (
    <div className="flex flex-col justify-center w-full lg:w-full h-screen items-center flex-wrap">
      <div className="p-16 fadeLeftMini">
        <div className="font-bold fadeRightMini text-white lg:text-4xl md:text-2xl font-serif">
          Diyan's Portfolio.
        </div>
        <div className="border-b-2 border-slate-400 pt-4 "></div>
        <div className="text-amber-300 lg:text-lg md:text-sm sm:text-xs flex justify-center items-center">
          React Web Developer | Fullstack
        </div>
        <div className="flex flex-row justify-center mt-2">
          <a href="https://www.linkedin.com/in/diyan-p-b640b120a/" target="_blank">
            <IoLogoLinkedin fontSize={32} className="mr-6" />
          </a>
          <a href="https://github.com/DiyanPv" target="_blank">
            <IoLogoGithub fontSize={32} className="mr-6" />
          </a>
          <a href="mailto:diyanpetrov61@gmail.com" target="_blank">
            <CgMail fontSize={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

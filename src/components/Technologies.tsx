import { TechnologiesCard } from "./TechnologiesCard";
import { Technologies } from "../data/Technologies";
import { useState, ChangeEvent } from "react";
export const TechnologiesComponent = () => {
  const [isNameShown, setisNameShown] = useState(false);

  return (
    <div className="relative">
      <div className=" absolute lg:bottom-60 lg:w-full md:bottom-64 flex items-center justify-center text-slate-900 font-serif text-4xl md:text-2xl fadeTopInfinite font-bold" style={{textShadow: "1px 1px 2px rgb(220,240,255)"}}>
        Tech Stack
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-600 h-1 mb-2 absolute lg:bottom-52 lg:w-full md:bottom-60 flex items-center justify-center text-slate-600 font-mono text-2xl"></div>
      <div className="flex fadeRightMini lg:flex-row flex-wrap w-full items-center justify-center absolute bottom-0 lg:pb-14 md:pb-6 ">
        {Technologies.map((el) => {
          return <TechnologiesCard name={el.name} key={el.name} image={el.image} setisNameShown={setisNameShown} isNameShown={isNameShown}/>;
        })}
      </div>
    </div>
  );
};

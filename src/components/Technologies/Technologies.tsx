import { TechnologiesCard } from "../Cards/TechnologiesCard";
import { Technologies } from "../../data/Technologies";
import { useState, ChangeEvent } from "react";
export const TechnologiesComponent = () => {
  const [isNameShown, setisNameShown] = useState(false);

  return (
    <div className="relative flex justify-between flex-col">
      <div
        className="flex items-center justify-center text-slate-900 font-serif text-3xl md:text-2xl fadeTopInfinite font-bold"
        style={{ textShadow: "1px 1px 2px rgb(220,240,255)" }}
      >
        Tech Stack
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-600 h-1 mb-2 lg:w-full flex items-center justify-center text-slate-600 font-mono text-2xl"></div>
      <div className="flex fadeRightMini lg:flex-row flex-row flex-wrap w-full h-fit items-center justify-center lg:mb-6">
        {Technologies.map((el) => {
          return (
            <TechnologiesCard
              name={el.name}
              key={el.name}
              image={el.image}
              setisNameShown={setisNameShown}
              isNameShown={isNameShown}
            />
          );
        })}
      </div>
    </div>
  );
};

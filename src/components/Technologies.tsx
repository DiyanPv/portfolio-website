import { TechnologiesCard } from "./TechnologiesCard";
import { Technologies } from "../data/Technologies";

export const TechnologiesComponent = () => {
  return (
    <div>
      <div className=" absolute lg:bottom-56 lg:w-full md:bottom-64 flex items-center justify-center text-slate-600 font-mono text-2xl">
        Tech Stack
      </div>
      <div className="border-t-2 border-gray-600 pt-4 absolute lg:bottom-48 lg:w-full md:bottom-60 flex items-center justify-center text-slate-600 font-mono text-2xl">

      </div>
      <div className="flex fadeRightMini lg:flex-row flex-wrap w-full items-center justify-center absolute bottom-0 pb-16 pt-10 object-fit ">
        {Technologies.map((el) => {
          return <TechnologiesCard image={el.image} />;
        })}
      </div>
    </div>
  );
};

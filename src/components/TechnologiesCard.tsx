import { ITechnologiesCard } from "../interfaces/ITechnologiesCard";
import { ChangeEvent } from "react";
export const TechnologiesCard = ({
  image,
  setisNameShown,
  isNameShown,
  name,
}: ITechnologiesCard) => {
  const onEnter = () => {
    setisNameShown(!isNameShown);
   
  };



  return (
    <div onClick={() => onEnter()}>
      <div
        className={`lg:w-12 lg:h-12 sm:w-12 sm:h-12 md:w-8 md:h-10 lg:mt-6 ml-4 mr-4 md:mt-10 md:ml-6 md:mr-6 sm:mt-4 items-center flex flex-col`}
      >
        {isNameShown ? (
          <div className="font-serif text-sm font-bold fadeTopMini sm:text-xs text-zinc-300">{name}</div>
        ) : (
          ``
        )}

        <img src={image} className="hover:cursor-pointer w-full h-full" />
      </div>
    </div>
  );
};

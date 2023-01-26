import { ITechnologiesCard } from "../interfaces/ITechnologiesCard";
import { ChangeEvent } from "react";
export const TechnologiesCard = ({
  image,
  setisNameShown,
  isNameShown,
  name,
}: ITechnologiesCard) => {
  const onEnter = () => {
    setisNameShown(true);
    setTimeout(() => {
      setisNameShown(false);
    }, 3000);
  };

  return (
    <div onMouseEnter={() => onEnter()}>
      <div
        className={`lg:w-14 lg:h-14 md:w-8 md:h-10 ml-4 mr-4 mt-4 items-center flex flex-col`}
      >
        {isNameShown ? <div className="font-serif text-sm font-bold">{name}</div> : ``}

        <img src={image} className="hover:cursor-pointer w-full h-full" />
        
      </div>
    </div>
  );
};

import { ITechnologiesCard } from "../interfaces/ITechnologiesCard";
export const TechnologiesCard = ({ image }: ITechnologiesCard) => {
    console.log(image)
  return (
    <div>
      <div className={`lg:w-14 lg:h-14 md:w-12 md:h-12 ml-2 mr-2 mt-4 items-center flex justify-center bg-cover`}>
        <img src={image} className="hover:cursor-pointer w-full h-full" />
      </div>
    </div>
  );
};

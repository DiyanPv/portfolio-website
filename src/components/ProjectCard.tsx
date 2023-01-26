import { IProjectCard } from "../interfaces/IProjectCard";
import { styles } from "../styles/styles";
import { Technologies } from "../data/Technologies";
export const ProjectCard = ({ image }: IProjectCard) => {
  return (
    <div className={styles.cardElement}>
      <div className="flex flex-col h-full w-full">
        <div className="flex h-fit w-full items-center justify-center rounded-t-2xl overflow-hidden ">
          <img src={image} alt="Card" className="h-full  w-full object-cover" />
        </div>
        <div className="bg-gray-400">Hello</div>
      </div>
    </div>
  );
};

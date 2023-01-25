import { IProjectCard } from "../interfaces/IProjectCard";
import { styles } from "../styles/styles";
export const ProjectCard = ({ image }: IProjectCard) => {
  return (
    <div className={styles.cardElement}>
      <div className="flex flex-col h-full w-full">
        <div className="flex h-1/3 w-full object-contain items-center justify-center bg-gray-200 rounded-t-3xl">
          <img src={image} alt="Card" />
        </div>
        <div className="bg-gray-400">Hello</div>
      </div>
    </div>
  );
};

import { ICertificateCard } from "../../interfaces/ICertificateCard";
import { styles } from "../../styles/styles";
export const CertificationCard = (props: ICertificateCard) => {
  return (
    <div className={`${styles.certificates} overflow-hidden cursor-pointer`}>
      <div className="flex flex-col h-full w-fit overflow-hidden">
        <a href={props.url} target="_blank">
          <div className="flex h-full w-fit items-center justify-center rounded-t-2xl ">
            <img alt="Card" className="" src={props.img} />
          </div>
        </a>
      </div>
    </div>
  );
};

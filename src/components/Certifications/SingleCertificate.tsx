import { styles } from "../../styles/styles";
import { IHonorableCertificate } from "../../interfaces/IHonorableCertificate";
export const HonorableCertificates = (props: IHonorableCertificate) => {
  return (
    <div
      className={`${styles.certificates} overflow-hidden cursor-pointer py-3 text-white px-1 justify-center align-center`}
      style={{textShadow: "4px 3px 7px #000"}}
    >
      <a href={props.link} target="_blank">
        <div className="flex flex-col h-full w-fit overflow-hidden">
          <div className="flex h-full w-fit items-center justify-center rounded-t-2xl ">
            {props.name}
          </div>
        </div>
      </a>
    </div>
  );
};
//  text-shadow: `#474747 3px 5px 2px`
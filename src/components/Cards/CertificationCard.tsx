import { ICertificateCard } from "../../interfaces/ICertificateCard";
import { styles } from "../../styles/styles";
export const CertificationCard = (props: ICertificateCard) => {
  return (
    <div className={`${styles.cardElement} overflow-hidden cursor-pointer`}>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="flex h-fit w-fit items-center justify-center rounded-t-2xl ">
          <img alt="Card" className="" />
        </div>

        <div className="bg-gray-300 flex align-center text-center justify-center flex-col w-full">
          <div className="flex align-center text-center justify-center text-3xl font-mono">
            {}
          </div>
          <div className=" flex align-center text-center justify-center text-sm font-serif">
            {}
          </div>
          <div className="border-b-2 border-slate-100 pt-2 mb-4 w-[65%] m-auto"></div>
          <div
            className="font-sans text-sm leading-4 text-black h-28 ml-4 mr-4"
            style={{ textShadow: "1px 1px 2px #999" }}
          >
            {}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full bg-slate-300"></div>
      </div>
    </div>
  );
};

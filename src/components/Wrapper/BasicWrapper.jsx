import { SiVisualstudiocode } from "react-icons/si";
import {GrCertificate} from "react-icons/gr"
export const BasicWrapper = (props) => {
  return (
    <div className="h-fit">
      <div className={`${props.bgImage && `bgTransition`} w-full h-4 b-b-2 pt-4`}></div>
      <div className={`container flex flex-col text-center ${props.bgImage && `bgwavy`} h-full`}>
        <div>
          <div className="pt-16 flex justify-center align-center text-projects font-bold">
            {props.isProjects ? <SiVisualstudiocode className="my-auto"/> : <GrCertificate className="my-auto"/>}
            <div className="">{props.pageTitle}</div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

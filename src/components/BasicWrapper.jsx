import { SiVisualstudiocode } from "react-icons/si";
export const BasicWrapper = (props) => {
  return (
    <div className="h-fit">
      <div className="bgTransition w-full h-4 b-b-2 pt-4"></div>
      <div className={`container flex flex-col text-center bgwavy h-full`}>
        <div>
          <div className="pt-16 flex justify-center align-center text-projects">
            <SiVisualstudiocode className="my-auto mr-4" />
            {props.pageTitle}
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

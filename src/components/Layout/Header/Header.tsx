import { useLocation } from "react-router-dom";
import { logo } from "../../../assets/extras";
export const Header = () => {
  const location = useLocation();

  return (
    <div className="flex pt-4 text-white items-center sticky top-0 ">
      <div className="flex grow"></div>
      <nav className=" grow ">
        <ul className="flex flex-row justify-around">
          <li>Home</li>
          <li>Projects</li>
          <li>Certificates</li>
        </ul>
      </nav>
    </div>
  );
};

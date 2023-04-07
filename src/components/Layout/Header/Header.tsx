import { useLocation } from "react-router-dom";
import { Link, LinkProps } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
interface CustomLinkProps extends LinkProps {
  activeStyle?: React.CSSProperties;
}

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const CustomLink: React.FC<CustomLinkProps> = ({
    to,
    activeStyle,
    children,
    ...rest
  }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} style={isActive ? activeStyle : undefined} {...rest}>
        {children}
      </Link>
    );
  };

  const MiniNav = () => {
    return (
      <nav className="glassmorphism h-screen w-[70%] mr-2 text-sm text-white fixed">
        <p className="cursor-pointer ml-2 mt-2 hover:text-white">X</p>
        <ul className="flex flex-col text-end my-6 gap-4 mr-4">
          <CustomLink
            to={"/"}
            activeStyle={{ color: "black", fontSize: `medium` }}
          >
            Home
          </CustomLink>
          <CustomLink
            to={"/projects"}
            activeStyle={{ color: "black", fontSize: `medium` }}
          >
            Projects
          </CustomLink>
          <CustomLink
            to={"/certificates"}
            activeStyle={{
              color: "black",
              fontSize: `small`,
            }}
          >
            Certificates
          </CustomLink>
        </ul>
      </nav>
    );
  };
  return (
    <div className="">
      <div
        className="responsivenav flex justify-end text-2xl font-bold"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {isNavOpen ? <MiniNav /> : <HiMenuAlt4 fontSize={32} />}
      </div>

      <div className="flex pt-2 text-white items-center fixed top-0 z-50 bg-gray-800 pb-2 navbar w-full">
        <div className="flex grow"></div>
        <nav className=" grow font-bold">
          <ul className="flex flex-row justify-around">
            <CustomLink
              to={"/"}
              activeStyle={{ color: "black", fontSize: `large` }}
            >
              Home
            </CustomLink>
            <CustomLink
              to={"/projects"}
              activeStyle={{ color: "black", fontSize: `large` }}
            >
              Projects
            </CustomLink>
            <CustomLink
              to={"/certificates"}
              activeStyle={{
                color: "black",
                fontSize: `large`,
              }}
            >
              Certificates
            </CustomLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

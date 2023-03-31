import { useLocation } from "react-router-dom";
import { Link, LinkProps } from "react-router-dom";
interface CustomLinkProps extends LinkProps {
  activeStyle?: React.CSSProperties;
}
export const Header = () => {
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
  return (
    <div className="flex mt-4 text-white items-center sticky top-0 ">
      <div className="flex grow"></div>
      <nav className=" grow ">
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
  );
};

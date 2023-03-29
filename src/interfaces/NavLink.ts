import { NavLinkProps } from "react-router-dom";

export interface CustomNavLinkProps extends NavLinkProps {
    activeClassName?: { [key: string]: string };
  }
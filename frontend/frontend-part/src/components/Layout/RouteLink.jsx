import React from "react";
import { NavLink } from "react-router-dom";
import { HomeSvg } from "../SVGs/formSvgs";
import { SidebarContext } from "./Sidebar";
import { useContext } from "react";

const RouteLink = ({ name, link, children }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <NavLink
      to={link}
      className={`w-full  flex  items-center border-b border-b-[#798cc7]  transition-colors duration-150
        ${isOpen ? "p-2 pr-3 justify-start gap-2 hover:border-transparent hover:rounded-lg hover:bg-[rgb(65,65,162)]" : "px-1.5 justify-center"}
        `}
    >
      {children}
      {isOpen && (
        <p className="text-white font-semibold tracking-wide">{name}</p>
      )}
    </NavLink>
  );
};

export default RouteLink;

import React from "react";
import { LogoSvg } from "../SVGs/formSvgs";

import { NavLink, useNavigate } from "react-router-dom";

const LogoComp = () => {
  const navigate = useNavigate();

  return (
    <NavLink
      to="/"
      id="app-logo-container"
      className="ml-3 w-fit  h-full flex gap-3 items-center justify-between"
    >
      <LogoSvg />

      <h1
        id="app-logo-text"
        className=" text-black h-fit text-2xl font-bold tracking-wider contrast-200 "
      >
        AuthDemo
      </h1>
    </NavLink>
  );
};

export default LogoComp;

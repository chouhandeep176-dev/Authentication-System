import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationBtn = ({ text, LinkAddress }) => {
  const navigate = useNavigate();

  return (
    <NavLink
      to={LinkAddress}
      id="login-small-btn"
      className="w-fit h-fit text-center px-4 py-1 text-white bg-blue-500 hover:bg-blue-400  border rounded-lg tracking-wide font-semibold
           transition-all duration-200 ease-in-out"
    >
      {text}
    </NavLink>
  );
};

export default NavigationBtn;

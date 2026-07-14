import React from "react";
import { useNavigate } from "react-router-dom";
import LogoComp from "./Layout/LogoComp.jsx";

const LoginBackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      id="back-btn-container"
      className="px-3 w-full min-h-12 flex justify-between items-center border-b border-b-[#5c5c5c]"
    >
      <div
        onClick={() => {
          navigate(-1);
        }}
        className=" h-full w-15 flex items-center justify-center"
      >
        <svg
          className="rounded-[50px] hover:bg-[#5c5c5c] hover:fill-white fill-[#5c5c5c]
            transition-all duration-200 ease-in-out
            "
          aria-hidden="true"
          role="img"
          width="35"
          height="35"
          viewBox="0 0 24 24"
        >
          <path
            // fill="#5c5c5c
            d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z"
          ></path>
        </svg>
      </div>

      <LogoComp />
    </div>
  );
};

export default LoginBackButton;

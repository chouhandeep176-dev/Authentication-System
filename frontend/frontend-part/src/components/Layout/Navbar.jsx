import React from "react";
import LogoComp from "./LogoComp.jsx";
import NavigationBtn from "./NavigationBtn.jsx";
import { Link } from "react-router-dom";
import profilePic from "../SVGs/profilePic.svg";
import { useSelector } from "react-redux";
import { CloseSidebarSvg } from "../SVGs/formSvgs.jsx";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.userSlice);
  console.log(isAuthenticated);

  return (
    <div
      id="navbar"
      className="w-full h-12 border-b border-b-[#5c5c5c] flex justify-between items-center"
    >
      {/* //? logo content --> */}
      <LogoComp />
      {/* <CloseSidebarSvg /> */}

      <div
        id="login-signup-conntainer"
        className="w-fit h-full mr-3 flex items-center justify-between gap-3 "
      >
        {/* // ! show login and signup only when when logged out --> */}

        {!isAuthenticated && (
          //? Login button -->
          <NavigationBtn text="Log In" LinkAddress="/auth/login" />
        )}

        {!isAuthenticated && (
          //? Login button -->
          <NavigationBtn text="Sign Up" LinkAddress="/auth/signup" />
        )}

        {/* //? Profile icon only appears when user is logged in --> */}
        {isAuthenticated && (
          <Link to="/profile">
            <img
              src={profilePic}
              alt="profile pic"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

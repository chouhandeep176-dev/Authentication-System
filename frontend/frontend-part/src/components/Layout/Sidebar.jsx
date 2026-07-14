import React, { createContext, useState } from "react";
import { CloseSidebarSvg } from "../SVGs/formSvgs.jsx";
import { NavLink } from "react-router-dom";
import RouteLink from "./RouteLink.jsx";
import { HomeSvg, UserSvg, ProfileSvg, LogoutSvg } from "../SVGs/formSvgs.jsx";
import LogoutSideBtn from "./LogoutSideBtn.jsx";
import ProfileArea from "./ProfileArea.jsx";
import { useSelector } from "react-redux";

export const SidebarContext = createContext();

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const { isAuthenticated } = useSelector((state) => state.userSlice);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        id="sidebar"
        className={` bg-[rgb(17,17,55)] flex flex-col justify-between 

           absolute top-12 left-0 h-[calc(100vh-3rem)]  z-50 w-1/2
          md:static md:translate-x-0

           transition-all duration-300

          ${isOpen ? "w-60" : "w-15"}
        `}
      >
        <div className="w-full h-full flex flex-col gap-1 box-border ">
          {/* //? side bar close btn --> */}
          <div
            className={`w-full  flex flex-row-reverse  border-b border-b-[#798cc7]
            ${isOpen ? "p-2 pr-3" : "p-1 py-2 justify-center mb-5"}
            `}
          >
            <CloseSidebarSvg />
          </div>

          {/* //? home route --> */}
          <RouteLink name="Home" link="/">
            <HomeSvg />
          </RouteLink>

          {/* //! show profile and logout only when logged in --> */}

          {isAuthenticated && (
            //? Profile route -->
            <RouteLink name="Profile" link="/profile">
              <ProfileSvg />
            </RouteLink>
          )}

          {isAuthenticated && (
            //? Logot button -->
            <LogoutSideBtn>
              <LogoutSvg />
            </LogoutSideBtn>
          )}
        </div>

        {isAuthenticated && (
          //? profile area -->
          <ProfileArea />
        )}
      </div>
    </SidebarContext.Provider>
  );
};

export default Sidebar;

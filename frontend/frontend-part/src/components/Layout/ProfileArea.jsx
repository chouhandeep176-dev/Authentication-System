import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import profilePic from "../SVGs/profilePic.svg";
import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { useSelector } from "react-redux";

const ProfileArea = () => {

  //? fetch name and email from redux store -->
    const { name, email} = useSelector((state) => state.userSlice.user);


const { isOpen } = useContext(SidebarContext);
  return (
    <NavLink
      to="/profile"
      id="profile-area-container"
      className="w-full flex justify-center py-2 items-center"
    >
      <div
        id="profile-area"
        className={`w-full h-full my-1 px-2 flex justify-start items-center gap-2 transition-colors duration-150
              ${isOpen && "hover:border-transparent rounded-lg hover:bg-[rgb(65,65,162)]"}
              `}
      >
        <img
          src={profilePic}
          alt="profile pic"
          className={`
                ${isOpen ? "w-10 h-10 rounded-full" : "w-12 h-12 px-1 rounded-lg hover:bg-[rgb(65,65,162)]"}
                `}
        />

        {/* //? Profile area text --> */}
        {isOpen && (
          <div className=" flex flex-col items-start gap-1.5 ">
            <p className="leading-none text-sm text-white font-semibold tracking-wide">
              {name}
            </p>
            <p className="leading-none text-[12px] text-[#cdcdcd] font-semibold tracking-wide">
              {email}
            </p>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default ProfileArea;

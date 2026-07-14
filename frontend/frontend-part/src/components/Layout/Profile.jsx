import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div id="profile" className="flex flex-1 flex-col gap-2 items-center">
      {/* //? Profile top area --> */}
      <div className="w-full px-5 py-[0.6rem]  flex justify-between items-center border-b border-b-[#5c5c5c] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <h2 className="text-[#363636] font-semibold text-xl tracking-wide contrast-200">
          User Profile
        </h2>

        <p
          className="relative pl-7 text-[#363636] px-3 py-1 font-semibold tracking-wide text-sm border rounded-lg 
          before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-500 
          before:rounded-full before:left-2 before:top-1/2 before:-translate-y-1/2"
        >
          Logged In
        </p>
      </div>

      {/* //? profile card --> */}
      <div className="w-full flex flex-1 justify-center items-center">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profile;

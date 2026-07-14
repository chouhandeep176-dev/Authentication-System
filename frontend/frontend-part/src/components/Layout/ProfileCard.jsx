import React from "react";
import profilePic from "../SVGs/profilePic.svg";
import { UserSvg, EmailSvg, CalenderSvg } from "../SVGs/formSvgs";
import ProfileField from "./ProfileField";
import { useSelector } from "react-redux";

const ProfileCard = () => {

  const user = useSelector((state) => state.userSlice.user);

  if(!user)
    return null;

  console.log("user data : ",  user)

  const { name, email, date } = user;

  const formatted_date = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div
      id="profile-card"
      className="w-[96%] flex flex-col items-center px-4 py-2 border border-black rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
    >
      {/* //? profile image area --> */}
      <div className="w-full flex flex-col items-center mb-4">
        <img
          src={profilePic}
          alt="profile pic"
          className="w-32 h-32 rounded-full"
        />

        <h3 className="text-[#363636] font-bold text-lg tracking-wide contrast-200">
          {name}
        </h3>

        <p className="font-[12px] text-sm tracking-wide contrast-200 text-center">
          Welocome back! Here is your Profile information
        </p>
      </div>

      {/* //? Profile fields --> */}
      <ProfileField KeyName="Name" value={name}>
        <UserSvg
          area="profile"
          style="border rounded-full bg-[rgb(17,17,55)] text-[rgb(17,17,55)]"
        />
      </ProfileField>

      {/* //? Email fields --> */}
      <ProfileField KeyName="Email" value={email}>
        <EmailSvg
          area="profile"
          style="border rounded-full bg-[rgb(17,17,55)] text-[rgb(17,17,55)]"
        />
      </ProfileField>

      {/* //? Email fields --> */}
      <ProfileField KeyName="Member Since" value={formatted_date}>
        <CalenderSvg />
      </ProfileField>
    </div>
  );
};

export default ProfileCard;

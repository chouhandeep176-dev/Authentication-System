import React from "react";

const ProfileField = ({ KeyName, value, children }) => {
  return (
    <div className="w-full py-2 px-3 border-t border-t-[#5c5c5c] flex justify-between items-center">
      <div id="profile-field-KeyName" className="flex items-center gap-2">
        {children}

        <p className="text-[#363636] font-semibold tracking-wide">{KeyName}</p>
      </div>

      <p
        id="profile-field-value"
        className="text-[#363636] font-semibold tracking-wide"
      >
        {value}
      </p>
    </div>
  );
};

export default ProfileField;

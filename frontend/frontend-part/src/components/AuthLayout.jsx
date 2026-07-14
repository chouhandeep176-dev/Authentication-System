import React from "react";
import LoginBackButton from "./LoginBackButton.jsx";
import LoginForm from "./login-form/LoginForm.jsx";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div id="login-container" className="w-screen border-b-2 border-b-[blue] min-h-screen flex flex-col">
      {/* //! back botton --> */}
      <LoginBackButton />

      {/* //! login form container --> */}
      <div className=" w-full  flex-1 px-2 flex justify-center items-center">
        {/* //? login or sign --> */}
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;

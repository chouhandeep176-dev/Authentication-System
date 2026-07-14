import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginSignupBtn = ({ isSubmitting, purpose }) => {
  const buttonText =
    purpose === "login" ?
      isSubmitting ? "Logging In..."
      : "Log In"
    : isSubmitting ? "Signing Up..."
    : "Sign up";

  const btnParagraph =
    purpose === "login" ?
      "Don't have an account ?"
    : "Already have an account ?";

  const btnLinkText = purpose === "login" ? "Sign up" : "Log In";
  const btnLinkPath = purpose === "login" ? "/auth/signup" : "/auth/login";

  //? login fail error handling -->
  const { loginError, signupError } = useSelector((state) => state.userSlice);

  return (
    <div className="mt-0.5 px-4 flex flex-col justify-center  ">
      {/* //? login fail error handling --> */}
      {(loginError || signupError) && (
        <p className="text-center text-sm mb-1 text-red-500 w-full contrast-150">
          {purpose === "login" ? loginError : signupError}
        </p>
      )}

      <button
        disabled={isSubmitting}
        className="w-full h-9 text-center text-white bg-blue-500 hover:bg-blue-400  border rounded-lg tracking-wide font-semibold
           transition-all duration-200 ease-in-out"
        type="submit"
      >
        {buttonText}
      </button>

      <p className="text-[.8rem] tracking-wide contrast-200 text-center flex justify-center gap-1.5">
        {btnParagraph}

        <NavLink
          className=" text-blue-500 font-medium hover:text-blue-700 hover:underline transition-all duration-200 "
          to={btnLinkPath}
        >
          {btnLinkText}
        </NavLink>
      </p>
    </div>
  );
};

export default LoginSignupBtn;

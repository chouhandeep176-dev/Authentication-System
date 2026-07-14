import React, { useState } from "react";
import FormHeading from "../login-form/FormHeading.jsx";
import { EmailSvg, EyeOpenSvg, LockSvg } from "../SVGs/formSvgs.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  setUserData,
  clearLoginError,
} from "../../features/user slice/userSlice.js";

import FormField from "./FormField.jsx";
import PasswordField from "./PasswordField.jsx";
import LoginSignupBtn from "./LoginSignupBtn.jsx";
import { useEffect } from "react";

import toast from "react-hot-toast";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange", // instant validation
    reValidateMode: "onChange",
  });

  //? clear error on page reload -->
  useEffect(() => {
    dispatch(clearLoginError());
  }, []);

  //? dispatch and navigate -->

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? what to do on submit -->
  async function onSubmit(formData) {
    // console.log(formData);

    try {
      dispatch(loginStart());

      const res = await fetch("http://localhost:3000/auth/login", {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.Email,
          password: formData.Password,
        }),
      });
      const resData = await res.json();

      console.log(resData);

      if (!res.ok || !resData.success) {
        dispatch(loginFailure(resData.message));
        // alert("login unsuccesful !");
        // navigate("/");
        return;
      }

      dispatch(loginSuccess(resData.user));
      toast.success("login successful !");
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("unknown error occured !");
      navigate("/");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="loginForm"
      className=" w-100 h-fit mt-2 py-5 black flex flex-col justify-center gap-3 border border-[#5c5c5c] rounded-lg shadow-xl shadow-[#5c5c5c]/10"
    >
      {/* //! login form heading --> */}

      <FormHeading
        headingText="Log into your account"
        headingParagraph="Enter your credentials to access your account"
      />
      {/* //! actual form --> */}

      {/* //? Email field --> */}
      <FormField
        register={register}
        errors={errors}
        name="Email"
        validaions={{
          required: "Email is required for login !",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email",
          },
        }}
      >
        <EmailSvg />
      </FormField>

      {/* //? password field --> */}
      <PasswordField
        register={register}
        labelName="Password"
        name="Password"
        errors={errors}
      />

      {/* //? login button --> */}
      <LoginSignupBtn isSubmittin={isSubmitting} purpose="login" />
    </form>
  );
};

export default LoginForm;

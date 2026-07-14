import React from "react";
import FormHeading from ".././components/login-form/FormHeading.jsx";
import {
  EmailSvg,
  EyeOpenSvg,
  LockSvg,
  UserSvg,
} from "../components/SVGs/formSvgs.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  loginFailure,
  signupFailure,
  clearSignupError,
} from "../features/user slice/userSlice.js";

import FormField from "./login-form/FormField.jsx";
import PasswordField from "./login-form/PasswordField.jsx";
import LoginSignupBtn from "./login-form/LoginSignupBtn.jsx";

import toast from "react-hot-toast";


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    trigger,
  } = useForm({
    mode: "onChange", // instant validation
    reValidateMode: "onChange",
  });

  // //? clear error on page reload -->
  useEffect(() => {
    dispatch(clearSignupError());
  }, []);

  //? dispatch and navigate -->

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? what to do on submit -->
  async function onSubmit(formData) {
    console.log(formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "post",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Email,
          password: formData.Password,
        }),
      });

      //? convert into json -->
      const resData = await res.json();

      //? Error -->
      if (!res.ok || !resData.success) {
        dispatch(signupFailure(resData.message)); //? set error in state
        return;
      }

      //? when success -->
      toast.success("signup successful ");
      navigate("/auth/login");
    } catch (err) {
      toast.error("unknown error occured !");
      navigate("/");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="signupForm"
      className="w-100 h-fit mt-2 mb-2 py-3 black flex flex-col justify-center gap-1 border border-[#5c5c5c] rounded-lg shadow-xl shadow-[#5c5c5c]/10"
    >
      {/* //! signup form heading --> */}

      <FormHeading
        headingText="Create your account"
        headingParagraph="Fill in the details to get started "
      />

      {/* //? Full name field --> */}
      <FormField
        register={register}
        errors={errors}
        labelName="Full Name"
        name="Name"
        validaions={{
          required: "Name is required for signup !",
          min: {
            value: 2,
            message: "Name must be 2 character long !",
          },
          max: {
            value: 20,
            message: "Name can not be longer than 20 character !",
          },
        }}
      >
        {/* //? SVG as children --> */}
        <UserSvg />
      </FormField>

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
        {/* //? SVG as children --> */}

        <EmailSvg />
      </FormField>

      {/* //? password field --> */}
      <PasswordField
        register={register}
        labelName="Password"
        name="Password"
        errors={errors}
        watch={watch}
      />

      {/* //? confirm password field --> */}
      <PasswordField
        register={register}
        labelName="Confirm Password"
        name="confirmPassword"
        errors={errors}
        watch={watch}
        rules={{
          validate: (value) =>
            value === watch("Password") || "Passwords do not match",
        }}
      />

      {/* //? login button --> */}
      <LoginSignupBtn isSubmittin={isSubmitting} purpose="signup" />
    </form>
  );
};

export default Signup;

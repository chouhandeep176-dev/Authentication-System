import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  clearSignupError,
  clearLoginError,
} from "../../features/user slice/userSlice.js";
import { EyeOpenSvg, LockSvg } from "../SVGs/formSvgs";
import { useForm } from "react-hook-form";

const PasswordField = ({
  register,
  errors,
  labelName,
  name,
  watch,
  rules = {},
}) => {
  //? show or hide password -->
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();

  const { onChange, ...rest } = register(name, {
    required: "Password is required for login !",
    minLength: {
      value: 8,
      message: "password's length must be greater than 7 !",
    },
    maxLength: {
      value: 15,
      message: "password's length must be lesser than 16 !",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message: "Must contain at least 1 letter and 1 number",
    },
    ...rules,
  });

  return (
    <div className=" px-4  flex flex-col items-start justify-center gap-1.5">
      {/* //? password label --> */}
      <label
        htmlFor={name}
        className="font-bold text-sm tracking-wide contrast-200"
      >
        {labelName}
      </label>

      {/* //? password input field --> */}
      <div
        className={`w-full h-9 flex justify-between items-center gap-3 border border-[#5c5c5c] rounded-lg contrast-75 p-2
        ${errors[name] ? "border-red-500" : "border-[#5c5c5c]"}
        `}
      >
        <LockSvg />

        <input
          {...rest}
          onChange={(e) => {
            onChange(e); // RHF validation
            dispatch(clearLoginError()); //  your logic
            dispatch(clearSignupError());
          }}
          autoComplete="new-password"
          type={showPass ? "text" : "password"}
          className="focus:outline-none placeholder:text-[#5c5c5c] focus:ring-0 text-sm w-full bg-transparent autofill:bg-transparent"
          id={name}
          name={name}
          placeholder={name}
        />

        <EyeOpenSvg showPass={showPass} setShowPass={setShowPass} />
      </div>

      {/* //? handle password related error here --> */}
      {errors[name] && (
        <p
          className="
            text-[12px] text-red-500 w-full contrast-150"
        >
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default PasswordField;

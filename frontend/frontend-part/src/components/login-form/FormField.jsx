import React from "react";
import { useDispatch } from "react-redux";
import {
  clearLoginError,
  clearSignupError,
} from "../../features/user slice/userSlice.js";
import { EmailSvg } from "../SVGs/formSvgs.jsx";

const FormField = ({ register, errors, name, validaions, children }) => {
  const dispatch = useDispatch();

  const field = register(name, { ...validaions });

  return (
    <div className=" px-4 flex flex-col items-start justify-center gap-1.5">
      {/* //? label field --> */}
      <label
        htmlFor={name}
        className="font-bold text-sm tracking-wide contrast-200"
      >
        {name}
      </label>

      {/* // ? input field --> */}
      <div
        className={`w-full h-9 flex items-center gap-3 border border-[#5c5c5c] rounded-lg contrast-75 p-2
        ${errors[name] ? "border-red-500" : "border-[#5c5c5c]"}
        `}
      >
        {children}
        <input
          {...field}
          onChange={(e) => {
            field.onChange(e); //  RHF handler
            dispatch(clearLoginError()); //  your logic
            dispatch(clearSignupError());
          }}
          autoComplete="new-password"
          className="focus:outline-none placeholder:text-[#5c5c5c] focus:ring-0 text-sm w-full"
          id={name}
          name={name}
          placeholder={name}
        />
      </div>

      {/* // ? handle input error here --> */}
      {errors[name] && (
        <p className="text-[12px] text-red-500 w-full contrast-150">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormField;

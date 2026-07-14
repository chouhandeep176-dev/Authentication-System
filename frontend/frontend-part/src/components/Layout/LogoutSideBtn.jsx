import React from "react";
import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../../features/user slice/userSlice.js";
import toast from "react-hot-toast";

const LogoutSideBtn = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleClick() {

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "post",
        credentials: "include",
      });

      const data = await res.json();

      console.log(data);

      //? remove user data after logout -->
      toast.success("logout done "); 
      dispatch(logoutSuccess());
      navigate("/", { replace: true });
    } catch (err) {
      toast.error("unknown error occured !");
      navigate("/");
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full  flex  items-center border-b border-b-[#798cc7]  transition-colors duration-150 
        ${isOpen ? "p-2 pr-3 justify-start gap-2 hover:border-transparent hover:rounded-lg hover:bg-[rgb(65,65,162)]" : "px-1.5 justify-center"}
        `}
    >
      {children}

      {isOpen && (
        <p className="text-white font-semibold tracking-wide">Logout</p>
      )}
    </button>
  );
};

export default LogoutSideBtn;

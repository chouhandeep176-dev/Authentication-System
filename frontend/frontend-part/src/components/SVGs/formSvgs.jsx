import React, { useContext } from "react";
import { SidebarContext } from "../Layout/Sidebar.jsx";

export const UserSvg = ({ area = "", style = "" }) => {
  return (
    <svg
      className={`${area === "profile" && "rounded-full p-0.5 bg-[#efeefd] text-[#5d4de3]"}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={`${area === "profile" ? "37" : "30"}`}
      height={`${area === "profile" ? "37" : "30"}`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"
      ></path>
    </svg>
  );
};

export const CalenderSvg = ()=>{
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full p-0.5 bg-[#efeefd] text-[#5d4de3]"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="37 "
      height="37  "
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.435 4.955h-1.94v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-7v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-1.93a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h12.87a2.5 2.5 0 0 0 2.5-2.5v-11a2.5 2.5 0 0 0-2.5-2.5m1.5 13.5c0 .83-.67 1.5-1.5 1.5H5.565c-.83 0-1.5-.67-1.5-1.5v-8.42h15.87zm0-9.42H4.065v-1.58c0-.83.67-1.5 1.5-1.5h1.93v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h7v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h1.94c.83 0 1.5.67 1.5 1.5z"
      ></path>
      <path
        fill="currentColor"
        d="M11.492 17.173v-3.46a.075.075 0 0 0-.114-.064l-.638.392a.15.15 0 0 1-.228-.128v-.651c0-.105.055-.203.146-.257l.764-.457a.3.3 0 0 1 .154-.043h.626a.3.3 0 0 1 .3.3v4.367a.3.3 0 0 1-.3.3h-.409a.3.3 0 0 1-.301-.299"
      ></path>
    </svg>
  );
}



export const EmailSvg = ({ area = "", style = "" }) => {
  return (
    <svg
      className={`${area === "profile" && "rounded-full p-1 bg-[#efeefd] text-[#5d4de3]"}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={`${area === "profile" ? "37" : "30"}`}
      height={`${area === "profile" ? "37" : "30"}`}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3"></rect>
        <path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"></path>
      </g>
    </svg>
  );
};

export const LockSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M16 10V6a4 4 0 0 0-8 0v4"></path>
        <rect width="18" height="12" x="3" y="10" rx="2"></rect>
      </g>
    </svg>
  );
};

export const EyeOpenSvg = ({ showPass, setShowPass }) => {
  return (
    <svg
      onClick={() => {
        setShowPass(!showPass);
      }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45M4.83 12c.59 1.15 3 5.25 7.17 5.25s6.58-4.1 7.17-5.25c-.59-1.15-3-5.25-7.17-5.25S5.42 10.85 4.83 12"
      ></path>
      <path
        fill="currentColor"
        d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25"
      ></path>

      {!showPass && (
        <line
          x1="4"
          y1="20"
          x2="20"
          y2="4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};



export const LogoSvg = () => {
  return (
    <svg
      className="text-[rgb(23,23,69)]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="36"
      height="36"
      viewBox="0 0 8 8"
    >
      <path
        fill="currentColor"
        d="m0 1l1 1v3l1 1V4l1 1v3H2L0 6m8-5v5L6 8H5V5l1-1v2l1-1V2M2 2l2-2l2 2l-2 2"
      ></path>
    </svg>
  );
};

export const CloseSidebarSvg = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <svg
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="text-white p-1 rounded-lg hover:bg-[rgb(65,65,162)] "
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="35"
      height="35"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <path d="M9 3v18"></path>
      </g>
    </svg>
  );
};

export const ProfileSvg = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <svg
      className={`text-white font-semibold
        ${!isOpen && "p-1 w-full rounded-lg hover:bg-[rgb(65,65,162)] mb-1"}
        `}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={`${isOpen ? "22" : "32"}`}
      height={`${isOpen ? "22" : "32"}`}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinejoin="round"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        ></path>
        <circle cx="12" cy="7" r="3"></circle>
      </g>
    </svg>
  );
};

export const LogoutSvg = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <svg
      className={`text-white font-semibold
        ${!isOpen && "p-1 w-full rounded-lg hover:bg-[rgb(65,65,162)] mb-1"}
        `}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={`${isOpen ? "22" : "32"}`}
      height={`${isOpen ? "22" : "32"}`}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
      ></path>
    </svg>
  );
};

export const HomeSvg = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <svg
      className={`text-white font-semibold
        ${!isOpen && "p-1 w-full rounded-lg hover:bg-[rgb(65,65,162)] mb-1"}
        `}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={`${isOpen ? "22" : "32"}`}
      height={`${isOpen ? "22" : "32"}`}
      viewBox="0 0 2048 2048"
    >
      <path
        fill="currentColor"
        d="m1024 165l941 942l-90 90l-83-82v805h-640v-640H896v640H256v-805l-83 82l-90-90zm640 1627V987l-640-640l-640 640v805h384v-640h512v640z"
      ></path>
    </svg>
  );
};


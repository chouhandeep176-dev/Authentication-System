import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Sidebar from "./Sidebar.jsx"

const Layout = () => {
  return (
    <div id="layout" className="w-screen h-screen flex flex-col">
      {console.log("render once")}
      <Navbar />
      <div id="sidebar-outlet-container" className="flex flex-1 w-screen">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout

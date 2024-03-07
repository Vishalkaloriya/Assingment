import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdPrint } from "react-icons/md";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="items">
          <l1 className="navleft">
            <IoMenu className="nav-icon" onClick={toggleSidebar} />
          </l1>
          <l1 className="navleft">
            <NavLink to="/">Home</NavLink>
          </l1>
          <l1 className="navleft">
            <NavLink to="https://vishalkaloriya.netlify.app/">Support</NavLink>
          </l1>
        </div>
        <div className="items">
          <li className="navright">
            <MdPrint className="nav-icon" />
          </li>
        </div>
      </nav>
      <Sidebar isOpen={sidebarOpen} />
    </>
  );
};

export default Header;

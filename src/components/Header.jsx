import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdPrint } from "react-icons/md";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mainContentRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePrint = () => {
    setSidebarOpen(false); // Hide the sidebar before printing
    setTimeout(() => {
      window.print();
      setSidebarOpen(true); // Show the sidebar after printing
    }, 500);
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
            <MdPrint className="nav-icon" onClick={handlePrint} />
          </li>
        </div>
      </nav>
      <div ref={mainContentRef}>
        <Sidebar isOpen={sidebarOpen} mainContentRef={mainContentRef} />
      </div>
    </>
  );
};

export default Header;

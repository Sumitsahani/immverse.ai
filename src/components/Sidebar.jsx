import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineCastForEducation, MdOutlineDashboard } from "react-icons/md";
import { RiProgress1Fill } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import { PiCertificateBold } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleSidebar}>
        <AiOutlineMenu />
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <MdOutlineDashboard /> Dashboard
          </li>
          <li>
            <AiOutlineHome /> My Journey
          </li>
          <li>
            <MdOutlineCastForEducation /> My Courses
          </li>
          <li>
            <RiProgress1Fill /> Progress
          </li>
          <li>
            <BsCalendarCheck /> DIY
          </li>
          <li>
            <PiCertificateBold /> Certificates
          </li>
          <li>
            <AiOutlineSetting /> Settings
          </li>
          <li>
            <AiOutlineLogout /> Logout
          </li>
        </ul>
      </aside>

      {/* Overlay (for closing sidebar) */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;

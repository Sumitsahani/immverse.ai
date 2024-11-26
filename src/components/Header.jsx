import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";



const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src="/img/immvesre_logo.svg" alt="Logo" /></div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Dashboard</li>
          <li>Category</li>
          <li>Validate Certificate</li>
        </ul>
      </nav>
      <div className='icon-logo'>
      <IoNotificationsOutline />
      <IoMoonOutline />
      <RxAvatar /><h1>Avishker</h1>
      <IoIosArrowDown />
    
      </div>
    </header>
  );
};

export default Header;

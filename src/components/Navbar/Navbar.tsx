import React from 'react';
import { RiMenuFill } from "react-icons/ri";
import './navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-flex">
        <div className="navbar-title">Asim</div>
        <ul className="navbar-menu navbar-menu-lg">
          <li className="navbar-menu-link"><a href="#hero">Home</a></li>
          <li className="navbar-menu-link"><a href="#about">About</a></li>
          <li className="navbar-menu-link"><a href="#projects">Projects</a></li>
          <li className="navbar-menu-link"><a href="#skills">Skills</a></li>
          <li className="navbar-menu-link"><a href="#contact">Contact</a></li>
        </ul>
        <RiMenuFill className="navbar-menu-icon navbar-menu-icon-md" size={30} />
      </div>
    </div>
  )
}

export default Navbar;
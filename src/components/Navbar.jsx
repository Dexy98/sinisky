import React, { useRef } from 'react';
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navigation" ref={navRef}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={scritta} alt="scritta" />
      </div>
      <div className="nav-links">
        <Link to="/sinisky" className="uppercase">home</Link>
        <Link to="/sinisky/Service" className="uppercase">service</Link>
        <Link to="/sinisky/Contatti" className="uppercase">contatti</Link>
      <button className='nav-btn nav-close-btn' onClick={showNavBar}>
        <FaTimes />
      </button>
      </div>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;

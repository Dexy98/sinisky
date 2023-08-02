import React from 'react';
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
 

  const showNavBar = () => {
    setClick(!click);
  }


  return (
    <div className="navigation" >
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={scritta} alt="scritta" />
      </div>
      <div className={click ? "nav active" : "nav"} >
        <Link to="/sinisky" className="uppercase text-white">home</Link>
        <Link to="/sinisky/Service" className="uppercase text-white">service</Link>
        <Link to="/sinisky/Contatti" className="uppercase text-white">contatti</Link>
      </div>
      <div className='nav-btn text-4xl text-white' onClick={showNavBar}>
      {click ? <FaTimes /> : <FaBars />}
      </div>

    </div>
  );
};

export default Navbar;

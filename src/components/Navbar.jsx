import React from 'react';
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={scritta} alt="scritta" className="ml-1" />
      </div>
      <div className="nav-links">
        <Link to="/sinisky" className="uppercase links">
          home
        </Link>
        <Link to="/sinisky/Service" className="uppercase links">
          service
        </Link>
        <Link to="/sinisky/Contatti" className="uppercase links">
          contatti
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

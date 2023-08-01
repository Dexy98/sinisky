import React from 'react'
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navigation">
              <div className="logo">
                <img src={logo} alt="logo" />
                <img src={scritta} alt="scritta" className="ml-1" />
              </div>
              <div className="nav-links">
                <a href="./Home" className="uppercase links">
                  home
                </a>
                <a href="./Service" className="uppercase links">
                  service
                </a>
                <a href="./Contatti" className="uppercase links">
                  contatti
                </a>
              </div>
            </div>
  )
}

export default Navbar
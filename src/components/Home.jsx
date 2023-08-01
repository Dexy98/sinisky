// Home.js

import React from "react";
import sfondo from "../assets/sfondo.png";
import logo from "../assets/logo.svg";
import scritta from "../assets/scritta.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="overlay">
      <div className="wrap">
        <div className="box-img">
          <img src={sfondo} alt="sfondo" />
          <div className="content">
            <div className="navigation">
              <div className="logo">
                <img src={logo} alt="logo" />
                <img src={scritta} alt="scritta" className="ml-1" />
              </div>
              <div className="nav-links">
                <a href="./" className="uppercase links">
                  home
                </a>
                <a href="./" className="uppercase links">
                  service
                </a>
                <a href="./" className="uppercase links">
                  contatti
                </a>
              </div>
            </div>
            <div className="title">
              <h1 className="text-white">
                EFFICIENZA DIGITALE{" "} <br />
                <span className="color-primary">ASSISTENZA TOTALE</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

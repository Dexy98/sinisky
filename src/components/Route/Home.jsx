
import React from "react";
import sfondo from "../../assets/sfondorid.png";
import "./Home.css";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>

    <div className="overlay">
      <div className="wrap">
        <div className="box-img">
          <img src={sfondo} alt="sfondo" />
          <div className="content">
          <Navbar />
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
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
    </>
  );
};

export default Home;

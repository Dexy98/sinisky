import React from "react";
import Navbar from "../Navbar";
import sfondo from "../../assets/sfondorid.png";
import Footer from "../Footer";

const Contatti = () => {
  return (
    <>
    <div className="w-full h-screen bg-slate-900 overlay ">
      <div className="box-img relative flex">
        <img src={sfondo} alt="sfondo" />
        <div className="content">
          <Navbar />
          <div className=" z-[] flex text-center justify-center content-center w-[100] text-[44px] font-bold tracking-[4.4px] mb-4">
            <h1>CONTATTI</h1>
          </div>
          <div className=" w-[auto] h-[auto] text-center text-[34px] leading-[50px] tracking-[2.72px]">
            <h4>
              Sinisky Computer & Co. <br />
              Via dello Stadio, 12 87029,Scalea, CS <br />
              Email: info@sinisky.com <br /> Tel: 098590688
            </h4>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contatti;

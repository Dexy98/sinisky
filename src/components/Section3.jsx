import React from "react";
import "./Section3.css";
import sfondo from "../assets/3.jpeg";

const Section3 = () => {
  return (
    <div className="relative">
      <img className="w-full  " src={sfondo} alt="" />
      <h4 className="testo-hero3">
        Siamo consapevoli di quanto sia importante per voi avere un computer
        efficiente e funzionante, sia per il lavoro che per il tempo libero, e
        per questo ci impegniamo a fornire un servizio rapido ed efficiente per
        le riparazioni.
      </h4>
    </div>
  );
};

export default Section3;

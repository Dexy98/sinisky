import React from "react";
import "./Styles/Section2.css";
import seconda from "../assets/2.png";
const Section2 = () => {
  return (
    <article className="section2">
      <div className="gradient2"></div>
      <div className="wrap-img2">
        <img src={seconda} alt="2" />
      </div>
      <div className="testo-hero2">
        <h4>
          Ma non ci limitiamo solo alla vendita! Il nostro team di tecnici
          altamente qualificati è pronto ad aiutarvi con qualsiasi problema che
          possiate riscontrare sul vostro computer. Dalla risoluzione di
          problemi di software alla sostituzione di componenti hardware, il
          nostro obiettivo è restituire al vostro dispositivo il massimo delle
          prestazioni.
        </h4>
      </div>
    </article>
  );
};

export default Section2;

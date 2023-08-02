import React from "react";
import "./Section1.css";
import prima from "../assets/1.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Section1 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]); 

  return (
    <article className="section1">
      <div className="gradient1"></div>
      <div className="wrap-img1">
        <motion.img
          style={{
            scale,
          }}
          src={prima}
          alt="1"
        />
      </div>
      <div className="testo-hero1">
        <h4>
          La nostra passione per la tecnologia ci guida a fornire prodotti delle
          migliori marche e delle ultime tendenze, garantendo prestazioni
          elevate e affidabilità. Che siate alla ricerca di un potente PC per il
          gaming, un laptop per il lavoro o un dispositivo per l'uso quotidiano,
          il nostro personale esperto sarà felice di assistervi nella scelta del
          prodotto più adatto a voi.
        </h4>
      </div>
    </article>
  );
};

export default Section1;

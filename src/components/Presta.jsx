import React, { useState, forwardRef } from "react";
import icones from "../style/icones/info.png";
import { AnimatePresence, motion } from "framer-motion";
import cancel from "../style/icones/cancel.png";

const Presta = forwardRef((props, ref) => {
  const [info, setInfo] = useState(false);
  return (
    <>
      <div className="separator1"></div>
      <div className="presta-container" ref={ref}>
        <p className="title">Nos prestations </p>
        <div className="all-cards-contain">
          <div className="cards">
            <motion.div
              className="card"
              initial={{ y: "40vh" }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0 }}
            >
              <div className="filter"></div>
              <p className="card-title">Illimité</p>
              <p className="card-price">80 €</p>
              <div className="separator"></div>
              <div className="spe-contain">
                <p>Accès Open Gym</p>
                <p>WOD</p>
                <p>HIIT</p>
                <p>Spé gym-haltéro</p>
              </div>
              <p className="spe-price">Tarifs Réduit 72€</p>
              <img
                className="icon"
                src={icones}
                alt="info"
                onClick={() => {
                  setInfo(true);
                }}
              />
              <AnimatePresence>
                {info && (
                  <motion.aside
                    className="icon-display"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100vw" }}
                  >
                    <img
                      className="cancel-modal"
                      src={cancel}
                      alt="fermer"
                      onClick={() => {
                        setInfo(false);
                      }}
                    />
                    <p className="icon-display-title">Tarif Réduit</p>
                    <p className="icon-display-info">
                      {" "}
                      Couple <br /> - <br /> Force de l'ordre
                      <br /> -<br /> Pompier
                      <br /> -<br /> Militaire
                    </p>
                  </motion.aside>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="cards">
            <motion.div
              className="card"
              initial={{ y: "40vh" }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0 }}
            >
              <div className="filter"></div>
              <p className="card-title">2 Séances</p>
              <p className="card-price">60 €</p>
              <div className="separator"></div>
              <div className="spe-contain">
                <p>Accès Open Gym</p>
                <p>WOD</p>
                <p>HIIT</p>
                <p>Spé gym-haltéro</p>
              </div>
              <p className="spe-price">Tarifs Réduit 54€</p>
              <img
                className="icon"
                src={icones}
                alt="info"
                onClick={() => {
                  setInfo(true);
                }}
              />
              <AnimatePresence>
                {info && (
                  <motion.aside
                    className="icon-display"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100vw" }}
                  >
                    <img
                      className="cancel-modal"
                      src={cancel}
                      alt="fermer"
                      onClick={() => {
                        setInfo(false);
                      }}
                    />
                    <p className="icon-display-title">Tarif Réduit</p>
                    <p className="icon-display-info">
                      {" "}
                      Couple <br /> - <br /> Force de l'ordre
                      <br /> -<br /> Pompier
                      <br /> -<br /> Militaire
                    </p>
                  </motion.aside>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="inscription">
          <p>Frais d'inscription 62 €</p>
        </div>
      </div>
    </>
  );
});

export default Presta;

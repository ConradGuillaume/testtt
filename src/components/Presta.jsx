import React, { useState } from "react";
import { motion } from "framer-motion";

const Presta = () => {
  return (
    <div className="presta-container">
      <p className="title">Nos prestations </p>
      <div className="cards">
        <div className="card">
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
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="filter"></div>
          <p className="card-title">2 Séances</p>
          <p className="card-price">60 €</p>
          <div className="spe-contain">
            <p>Accès Open Gym</p>
            <p>WOD</p>
            <p>HIIT</p>
            <p>Spé gym-haltéro</p>
          </div>
          <p className="spe-price">Tarifs Réduit 72€</p>
        </div>
      </div>
    </div>
  );
};

export default Presta;

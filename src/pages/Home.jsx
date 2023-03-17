import React from "react";
import Header from "../components/Header";
import logo from "../style/images/Logo/logo.png";
import crack from "../style/images/background/crack.png";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="top">
        <img src={logo} alt="" className="logo" />
      </div>
      <article>
        <div className="containtitle">
          <img className="crack" src={crack} alt="" />
          <p>Sculptez votre corps</p>
        </div>

        <button className="Beginner">Séance découverte </button>
        <div className="btn-container">
          <button> Ouverte à tous !</button>
        </div>
      </article>
    </div>
  );
};

export default Home;

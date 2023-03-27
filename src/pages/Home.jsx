import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import logo from "../style/images/Logo/logo.png";
import crack from "../style/images/background/test.png";
import { motion } from "framer-motion";
import image1 from "../style/images/background/image1.jpg";
import image2 from "../style/images/background/image2.jpg";
import image3 from "../style/images/background/image3.jpg";
import Presta from "../components/Presta";
import Coachs from "../components/Coachs";

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      <div className="home-contain">
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
            <div className="btn-container">
              <button> Réservez votre séance !</button>
            </div>
          </article>
        </div>
        <div className="pres">
          <h1>Crossfit PBC</h1>
          <h2>
            Salle de sport secteur <br /> Sarreguemines / Sarralbe
          </h2>
          <div className="wordcontain">
            <motion.p
              className="keyword"
              id="first"
              initial={{ x: 16 }}
              whileInView={{
                transition: { delay: 1 },
                x: 0,
                zIndex: 2,
              }}
            >
              Haltérophilie
            </motion.p>
            <motion.p className="keyword">Fitness</motion.p>
            <motion.p
              className="keyword"
              id="last"
              initial={{ x: -16 }}
              whileInView={{
                transition: { delay: 1 },
                x: 0,
                zIndex: 2,
              }}
            >
              Endurance
            </motion.p>
          </div>
          <div className="carousel">
            {images.map((image, i) => (
              <div key={i} className={`slide ${i === index ? "active" : ""}`}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <p className="info">
            Le CrossFit est un entraînement complet et intense qui te pousse
            au-delà de tes limites pour te faire sentir plus fort et plus en
            forme que jamais auparavant.
          </p>
        </div>
        <button className="test">Essayer le Crossfit</button>
        <Presta />
        <Coachs />
      </div>
    </>
  );
};

export default Home;

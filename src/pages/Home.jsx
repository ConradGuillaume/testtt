import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import logo from "../style/images/Logo/logo.png";
import crack from "../style/images/background/test.png";
import { motion } from "framer-motion";
import Presta from "../components/Presta";
import image1 from "../style/images/background/pbc.webp";
import image2 from "../style/images/background/pbc2.webp";
import image3 from "../style/images/background/pbc3.webp";
import image4 from "../style/images/background/eddie.webp";
import image5 from "../style/images/background/eddie2.webp";
import image6 from "../style/images/background/pauline.webp";
import image7 from "../style/images/background/run.webp";
import image8 from "../style/images/background/soulever1.webp";
import image9 from "../style/images/background/soulever2.webp";
import image10 from "../style/images/background/tirer.webp";
import Coachs from "../components/Coachs";
import StrongPoint from "../components/StrongPoint";
import Chat from "../components/Chat";
import Avis from "../components/Avis";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
    { src: image8, alt: "Image 8" },
    { src: image9, alt: "Image 9" },
    { src: image10, alt: "Image 10" },
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
            Qu'est-ce que le Crossfit ? <br />
            Le Crossfit est un programme d'entraînement qui regroupe
            l'Haltérophilie, la gymnastique et l'aérobie. <br />
            Les entraînement sont basés sur la réalisation de mouvements
            fonctionnels constamment variés,exécutés à haute intensité
          </p>
        </div>
        <button className="test">Essayer le Crossfit</button>
        <Presta />
        <Coachs />
        <StrongPoint />
        <Avis />
        <Contact />
        <Social />
        <Footer />
      </div>
    </>
  );
};

export default Home;

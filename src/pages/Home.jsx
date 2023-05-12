import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
import deskimg1 from "../style/images/backgroundXL/carouselXl/coach.webp";
import deskimg2 from "../style/images/backgroundXL/carouselXl/coach2.webp";
import deskimg3 from "../style/images/backgroundXL/carouselXl/coach3.webp";
import deskimg4 from "../style/images/backgroundXL/carouselXl/rame.webp";
import deskimg5 from "../style/images/backgroundXL/carouselXl/run.webp";
import deskimg6 from "../style/images/backgroundXL/carouselXl/salle1.webp";
import deskimg7 from "../style/images/backgroundXL/carouselXl/salle2.webp";
import deskimg8 from "../style/images/backgroundXL/carouselXl/salle3.webp";
import deskimg9 from "../style/images/backgroundXL/carouselXl/soulever.webp";
import deskimg10 from "../style/images/backgroundXL/carouselXl/soulever2.webp";
import Coachs from "../components/Coachs";
import StrongPoint from "../components/StrongPoint";
import Chat from "../components/Chat";
import Avis from "../components/Avis";

import Contact from "../components/Contact";
import Social from "../components/Social";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  const [index, setIndex] = useState(0);
  const homeRef = useRef(null);
  const prestationRef = useRef(null);
  const contactRef = useRef(null);
  const equipeRef = useRef(null);
  const handleButtonClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const useIsMedium = () => {
    return useMediaQuery({ query: "(min-width: 768px)" });
  };

  const isMedium = useIsMedium();
  const variants = isMedium
    ? {
        initial: { opacity: 0, x: "20vh" },
        whileInView: { transition: { delay: 0.4 }, x: 0, opacity: 1 },
        initial1: { opacity: 0, x: "20vh" },
        whileInView1: { transition: { delay: 0.6 }, x: 0, opacity: 1 },
        initial2: { opacity: 0, x: "20vh" },
        whileInView2: { transition: { delay: 0.8 }, x: 0, opacity: 1 },
      }
    : {
        initial: { x: 16 },
        initial1: { x: 0 },
        initial2: { x: -16 },
        whileInView: { transition: { delay: 1 }, x: 0, zIndex: 2 },
        whileInView1: { transition: { delay: 1 }, x: 0, zIndex: 2 },
        whileInView2: { transition: { delay: 1 }, x: 0, zIndex: 2 },
      };
  const images = [
    { src: image1, desktopSrc: deskimg6, alt: "Image 1" },
    { src: image2, desktopSrc: deskimg7, alt: "Image 2" },
    { src: image3, desktopSrc: deskimg8, alt: "Image 3" },
    { src: image4, desktopSrc: deskimg4, alt: "Image 4" },
    { src: image5, desktopSrc: deskimg5, alt: "Image 5" },
    { src: image6, desktopSrc: deskimg1, alt: "Image 6" },
    { src: image7, desktopSrc: deskimg2, alt: "Image 7" },
    { src: image8, desktopSrc: deskimg3, alt: "Image 8" },
    { src: image9, desktopSrc: deskimg9, alt: "Image 9" },
    { src: image10, desktopSrc: deskimg10, alt: "Image 10" },
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
          <Header
            ref={homeRef}
            homeRef={homeRef}
            prestationRef={prestationRef}
            contactRef={contactRef}
            equipeRef={equipeRef}
          />
          <NavBar
            prestationRef={prestationRef}
            contactRef={contactRef}
            equipeRef={equipeRef}
          />
          <div className="top">
            <img src={logo} alt="" className="logo" />
          </div>
          <article>
            <div className="containtitle">
              <img className="crack" src={crack} alt="" />
              <p className="titleS">Sculptez votre corps</p>
              <p className="titleXL">
                Dépassez <span>vos limites</span>
                <br /> atteignez vos objectifs
              </p>
            </div>
            <div className="btn-container">
              <button> Réservez votre séance !</button>
            </div>
          </article>
        </div>
        <div className="pres">
          <motion.h1
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{ transition: { delay: 0.5 }, opacity: 1, y: 0 }}
          >
            Crossfit PBC
          </motion.h1>
          <h2>
            Salle de sport secteur <br /> Sarreguemines / Sarralbe
          </h2>
          <div className="wordCarouselContain">
            <div className="wordcontain">
              <motion.p
                className="keyword"
                id="first"
                initial="initial"
                whileInView="whileInView"
                variants={variants}
              >
                Haltérophilie
              </motion.p>
              <motion.p
                className="keyword"
                initial="initial1"
                whileInView="whileInView2"
                variants={variants}
              >
                Fitness
              </motion.p>
              <motion.p
                className="keyword"
                id="last"
                initial="initial2"
                whileInView="whileInView2"
                variants={variants}
              >
                Endurance
              </motion.p>
            </div>
            <div className="carousel">
              {images.map((image, i) => (
                <div key={i} className={`slide ${i === index ? "active" : ""}`}>
                  <img className="mobile" src={image.src} alt={image.alt} />
                  <img
                    className="desktop"
                    src={image.desktopSrc}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="infoButtonContain">
            <p className="info">
              Qu'est-ce que le Crossfit ? <br /> <br />
              Le Crossfit est un programme d'entraînement qui regroupe
              l'Haltérophilie, la gymnastique et l'aérobie. <br />
              Les entraînement sont basés sur la réalisation de mouvements
              fonctionnels constamment variés,exécutés à haute intensité
            </p>

            <motion.button
              className="test"
              onClick={handleButtonClick}
              whileInView={{ scale: [1.02, 1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Essayer le Crossfit
            </motion.button>
          </div>
        </div>
        <Presta ref={prestationRef} />
        <Coachs ref={equipeRef} />
        <StrongPoint />
        <Avis />
        <Contact ref={contactRef} />
        <Social />
        <Footer />
      </div>
    </>
  );
};

export default Home;

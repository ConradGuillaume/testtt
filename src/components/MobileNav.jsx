import React, { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import logo from "../style/images/Logo/logo.png";

const MobileNav = ({ homeRef, prestationRef, contactRef, equipeRef }) => {
  const [burger, SetBurger] = useState(false);
  const animStick1 = useAnimation();
  const animStick2 = useAnimation();
  const animStick3 = useAnimation();

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is null:", ref);
    }
  };

  const handleBurgerClick = () => {
    console.log("Burger clicked, current state:", burger);
    animStick1.start({
      rotate: burger ? 0 : 45,
      scale: burger ? 1 : 1.3,
      translateX: 0,
      translateY: burger ? 0 : 15,
    });
    animStick2.start({ opacity: burger ? 1 : 0 });
    animStick3.start({
      rotate: burger ? 0 : -45,
      scale: burger ? 1 : 1.3,
      translateX: 0,
      translateY: burger ? 0 : -15,
    });
    SetBurger(!burger);
  };

  return (
    <div className="menu">
      <div onClick={handleBurgerClick} className="burger">
        <motion.div animate={animStick1} className="stick-1"></motion.div>
        <motion.div animate={animStick2} className="stick-2"></motion.div>
        <motion.div animate={animStick3} className="stick-3"></motion.div>
      </div>
      <AnimatePresence>
        {burger && (
          <motion.nav
            initial={{ x: "150vw" }}
            animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
            exit={{
              x: "50vw",
              opacity: 0,
              transition: { duration: 1, type: "spring" },
            }}
            className="burger-nav"
          >
            <div className="filter"></div>
            <img className="logo" src={logo} alt="logo" />
            <li
              onClick={() => {
                scrollToRef(homeRef);
                console.log("Accueil clicked");
              }}
              className="nav-item"
            >
              Accueil
            </li>
            <li
              onClick={() => {
                scrollToRef(prestationRef);
                console.log("Prestations clicked");
              }}
              className="nav-item"
            >
              Prestations
            </li>
            <li
              onClick={() => {
                scrollToRef(contactRef);
                console.log("Contact clicked");
              }}
              className="nav-item"
            >
              Contact
            </li>
            <li
              onClick={() => {
                scrollToRef(equipeRef);
                console.log("L'équipe clicked");
              }}
              className="nav-item"
            >
              L'équipe
            </li>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

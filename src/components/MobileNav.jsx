import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import logo from "../style/images/Logo/logo.png";

const MobileNav = () => {
  const [burger, SetBurger] = useState(false);
  const animStick1 = useAnimation();
  const animStick2 = useAnimation();
  const animStick3 = useAnimation();

  const handleBurgerClick = () => {
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
            <li>
              <NavLink to="/"> Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/prestation">Prestations</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/equipe">L'équipe</NavLink>
            </li>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

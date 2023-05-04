import React from "react";

const NavBar = ({ prestationRef, contactRef, equipeRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li className="button" onClick={() => scrollToSection(prestationRef)}>
          Prestations
        </li>
        <li className="button" onClick={() => scrollToSection(contactRef)}>
          Contact
        </li>
        <li className="button" onClick={() => scrollToSection(equipeRef)}>
          L'équipe
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

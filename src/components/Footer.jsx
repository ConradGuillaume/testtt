import React from "react";
import logo from "../style/images/Logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <p className="footer__contact-info">
          Pauline Brettnacher
          <br />
          Numéro : +33 1 23 45 67 89
          <br />
          Adresse : 91A Rue nationale, 57910 Hambach
          <br />
          Adresse mail : PBC@exemple.com
          <br />
          Horaires : Lun-Ven 9h-18h
        </p>
        <p className="partner">Partenaires</p>
        <ul>
          <li>
            <a href="">Nom de partenaria</a>
          </li>
          <li>
            <a href="">Nom de partenaria</a>
          </li>
          <li>
            <a href="">Nom de partenaria</a>
          </li>
          <li>
            <a href="">Nom de partenaria</a>
          </li>
        </ul>
        <br />
        <a className="legal" >
          Mentions légales
        </a>
      </div>
      <div className="footer__logo-copyright">
        <img className="footer__logo" src={logo} alt="Votre Logo" />{" "}
        {/* Remplacez par le chemin vers votre logo */}
        <p>© 2023 CROSSFITPBC. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

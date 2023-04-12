import React from "react";
import logo from "../style/images/Logo/logo.png";
import { Link } from "react-router-dom";

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
            <a href="https://www.fitandrack.com/">Fit&Rack</a>
          </li>
          <li>
            <a href="https://nocco.com/fr/">Nocco</a>
          </li>
          <li>
            <a href="https://www.lifeaidbevco.eu/fr/?gclid=CjwKCAjwrdmhBhBBEiwA4Hx5g0EeuFVdMJK3_FO4aFM4hZzvQEEB3FQXIRH3hV0JIK39M2ZCDYA6ZhoCK0oQAvD_BwE">
              Fitaid
            </a>
          </li>
          <li>
            <a href="https://healthy-life.fr/">Healthy-Life</a>
          </li>
          <li>
            <a href="https://wodabox.com/">Wodabox</a>
          </li>
        </ul>
        <br />
        <a className="legal">Mentions légales</a>
        <Link to="/policy" className="policy">
          Privacy-Policy
        </Link>
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

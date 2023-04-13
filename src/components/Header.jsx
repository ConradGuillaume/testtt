import React, { forwardRef } from "react";
import MobileNav from "../components/MobileNav";
import fb from "../style/images/Logo/fb.png";
import insta from "../style/images/Logo/insta.png";
import tiktok from "../style/images/Logo/tiktok.png";

const Header = forwardRef((props, ref) => {
  const { homeRef, prestationRef, contactRef, equipeRef } = props;
  return (
    <div className="header_container" ref={ref}>
      <ul className="social">
        <li className="imgcontain">
          <a href="https://www.facebook.com/paulinebcoaching/?locale=fr_FR">
            <img src={fb} alt="Facebook" />
          </a>
        </li>
        <li className="imgcontain">
          <a href="https://www.instagram.com/crossfit_pbc/">
            <img src={insta} alt="Instagram" />
          </a>
        </li>
        <li className="imgcontain">
          <a href="https://www.tiktok.com/@crossfitpbc">
            <img src={tiktok} alt="Tiktok" />
          </a>
        </li>
      </ul>
      <MobileNav
        homeRef={homeRef}
        prestationRef={prestationRef}
        contactRef={contactRef}
        equipeRef={equipeRef}
      />
    </div>
  );
});

export default Header;

import React from "react";
import MobileNav from "../components/MobileNav";
import fb from "../style/images/Logo/fb.png";
import insta from "../style/images/Logo/insta.png";
import tiktok from "../style/images/Logo/tiktok.png";

const Header = () => {
  return (
    <div className="header_container">

      <div className="social">
        <div className="imgcontain">
          <img src={fb} alt="Facebook" />
        </div>
        <div className="imgcontain">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="imgcontain">
          <img src={tiktok} alt="Tiktok" />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;

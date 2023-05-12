import React from "react";

const Social = () => {
  return (
    <div className="social-container">
      <div className="title-contain">
        <p className="title">Suivez-nous !</p>
      </div>
      <ul>
        <li>
          <a
            className="fb"
            href="https://www.facebook.com/paulinebcoaching"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            className="insta"
            href="https://www.instagram.com/crossfit_pbc/"
            target="_blank"
          ></a>
        </li>
        <li>
          <a
            className="tiktok"
            href="https://www.tiktok.com/@crossfitpbc"
            target="_blank"
          ></a>
        </li>
      </ul>
      <div className="cracked"></div>
    </div>
  );
};

export default Social;

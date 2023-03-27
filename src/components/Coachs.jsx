import React from "react";
import bottom from "../style/images/background/coach.png";
import coachp from "../style/images/Coach/coach.png";
import coach1 from "../style/images/Coach/coach1.png";

const Coachs = () => {
  return (
    <div className="Coach-container">
      <p className="Coach-title">Nos Coachs </p>
      <div className="coach">
        <div className="name-contain">
          <p className="name"> Pauline <br /> Brettnacher</p>
        </div>
        <img className="top" src={bottom} alt="" />
        <div className="coach-contain">
          <img className="The-coach" src={coach1} alt="" />
        </div>
      </div>
      <div className="coach">
        <div className="name-contain">
          <p className="name"> Eddie Belakebi</p>
        </div>
        <img className="top" src={bottom} alt="" />
        <div className="coach-contain">
          <img className="The-coach2" src={coachp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coachs;

import React from "react";
import bottom from "../style/images/background/coach1.png";
import coachp from "../style/images/Coach/coach.png";
import coach1 from "../style/images/Coach/coach1.png";
import altère from "../style/images/Logo/haltere.png";

const Coachs = () => {
  return (
    <div className="Coach-container">
      <p className="Coach-title">Nos Coachs </p>
      <div className="coach">
        <div className="name-contain">
          <p className="name">
            {" "}
            Pauline <br /> Brettnacher
          </p>
        </div>
        <img className="top" src={bottom} alt="" />
        <div className="coach-contain">
          <img className="The-coach" src={coach1} alt="" />
        </div>
      </div>
      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
        praesentium provident porro, sint vel recusandae? Repudiandae voluptatum
        labore ut ex quaerat distinctio totam
      </p>
      <ul className="licence">
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
      </ul>
      <div className="coach">
        <div className="name-contain">
          <p className="name"> Eddie Belakebi</p>
        </div>
        <img className="top" src={bottom} alt="" />
        <div className="coach-contain">
          <img className="The-coach2" src={coachp} alt="" />
        </div>
      </div>

      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
        praesentium provident porro, sint vel recusandae? Repudiandae voluptatum
        labore ut ex quaerat distinctio totam
      </p>
      <ul className="licence">
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
        <li>
          <img src={altère} alt="altère" />
          <p>Lorem ipsum dolor</p>
        </li>
      </ul>
    </div>
  );
};

export default Coachs;

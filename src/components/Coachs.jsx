import React, { forwardRef } from "react";
import griffe from "../style/images/Coach/griffe.png";
import coachp from "../style/images/background/eddie2.webp";
import coach1 from "../style/images/Coach/coach1.png";
import altère from "../style/images/Logo/haltere.png";

const Coachs = forwardRef((props, ref) => {
  return (
    <>
      <div className="intersec"></div>
      <div className="Coach-container" ref={ref}>
        <p className="Coach-title">Nos Coachs </p>
        <div className="coach">
          <div className="name-contain-p">
            <p className="name-p"> Pauline Schaeffer</p>
          </div>
          <div className="coach-contain"></div>
        </div>
        <p className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
          praesentium provident porro, sint vel recusandae? Repudiandae
          voluptatum labore ut ex quaerat distinctio totam
        </p>
        <ul className="licence">
          <li>
            <img src={altère} alt="altère" />
            <p>BPJEPS AGFF </p>
          </li>
          <li>
            <img src={altère} alt="altère" />
            <p>CROSSFIT LEVEL 1</p>
          </li>
        </ul>
        <div className="coach">
          <div className="name-contain">
            <p className="name"> Eddie Belakebi</p>
          </div>
          <div className="coach-contain"></div>
        </div>
        <p className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
          praesentium provident porro, sint vel recusandae? Repudiandae
          voluptatum labore ut ex quaerat distinctio totam
        </p>
        <ul className="licence">
          <li>
            <img src={altère} alt="altère" />
            <p>BPJEPS AGFF </p>
          </li>
          <li>
            <img src={altère} alt="altère" />
            <p>CROSSFIT LEVEL 1 </p>
          </li>
          <li>
            <img src={altère} alt="altère" />
            <p>CROSSFIT LEVEL 2</p>
          </li>
          <li>
            <img src={altère} alt="altère" />
            <p>
              CROSSFIT <br /> GYMNASTIQUE
            </p>
          </li>
        </ul>
      </div>
      <div className="separator2"></div>
    </>
  );
});

export default Coachs;

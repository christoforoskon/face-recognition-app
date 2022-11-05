import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="ma6 mt0">
      <Tilt
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "white",
          transitionSpeed: "400",
        }}
        className="tilt1 tilt-scale shadow-2 pa2"
      >
        <img src={face} alt="face" />
      </Tilt>
    </div>
  );
};

export default Logo;

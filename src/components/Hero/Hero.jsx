import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="container-fluid hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="headName">
              The fastest way to identify plant diseases
            </h1>
            <p className="headPara">
              Wegan identifies the plant disease and gives solutions
            </p>
            <Button link="/Disease" name="Get Started"></Button>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

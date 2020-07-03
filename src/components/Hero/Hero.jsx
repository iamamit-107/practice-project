import React from "react";
import RightHero from "./RightHero";
import LeftHero from "./LeftHero";

const Hero = () => {
  return (
    <div
      className="hero pt-5 pb-5"
      style={{
        background:
          "linear-gradient(86deg, rgba(251,252,234,1) 73%, rgba(228,247,243,1) 81%)",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col-lg-8">
            <LeftHero />
          </div>
          <div className="col-lg-4">
            <RightHero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./RightHero.scss";
import img from "../../images/hero-img.gif";

const RightHero = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide right-hero"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p>Life Insurance</p>
            <h5>Family Health Care</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p>Life Insurance</p>
            <h5>Family Health Care</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p>Life Insurance</p>
            <h5>Family Health Care</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHero;

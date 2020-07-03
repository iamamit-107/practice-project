import React from "react";
import Slider from "react-slick";

import shop1 from "../../images/shop1.gif";
import shop2 from "../../images/shop2.gif";
import shop3 from "../../images/shop3.gif";
import shop4 from "../../images/shop4.gif";

const Daily = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="daily" style={{ backgroundColor: "white" }}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div>
            <h2 className="text-left pl-3 mb-3">Daily Essentials</h2>
            <Slider {...settings}>
              <div className="px-3 btn">
                <img src={shop1} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop2} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop3} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop4} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop1} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop2} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop3} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop4} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;

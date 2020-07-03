import React from "react";
import Slider from "react-slick";

import shop1 from "../../images/best-seller1.gif";
import shop2 from "../../images/best-seller2.gif";
import shop3 from "../../images/best-seller3.gif";
import shop4 from "../../images/best-seller4.gif";

const BestSeller = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          <div className="col-12">
            <h2 className="pl-3 mb-5">Bestsellers</h2>
          </div>
          <div className="col-12 text-right" style={{ outline: "none" }}>
            <h5 className="mb-3 btn">
              <strong>VIEW ALL</strong>{" "}
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </h5>
          </div>
        </div>
        <div className="row">
          <div>
            <Slider {...settings}>
              <div className="px-3 btn">
                <img src={shop1} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop2} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop3} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop4} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop1} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop2} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop3} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
              <div className="px-3 btn">
                <img src={shop4} className="img-fluid" alt="" />
                <p>
                  <strong>Shop Now</strong>
                </p>
                <p>Vitamin-C Serum</p>
                <p>
                  <strong>Rs. 2,500</strong>
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

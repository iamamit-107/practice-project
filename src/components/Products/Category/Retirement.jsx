import React from "react";

import "../Products.scss";
import saving from "../../../images/family3.jpg";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

const Retirement = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="saving">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-6">
            <div className="sanchay text-left">
              <div>
                <Slider {...settings}>
                  <div>
                    <h1>Retirement San</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem repellat dolorem cum aut alias reiciendis veniam
                      minima nesciunt sit ipsum.
                    </p>
                    <p className="text-right">Details > </p>

                    <div className="clearfix">
                      <div className="float-left">
                        <div className="btn">Calculate Premium</div>
                      </div>
                      <div className="float-right">
                        <div
                          className="btn btn-orange rounded-pill"
                          style={{ color: "#fff", backgroundColor: "#f7941e" }}
                        >
                          Book an appointment
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Retirement San</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem repellat dolorem cum aut alias reiciendis veniam
                      minima nesciunt sit ipsum.
                    </p>
                    <p className="text-right">Details > </p>

                    <div className="clearfix">
                      <div className="float-left">
                        <div className="btn">Calculate Premium</div>
                      </div>
                      <div className="float-right">
                        <div
                          className="btn btn-orange rounded-pill"
                          style={{ color: "#fff", backgroundColor: "#f7941e" }}
                        >
                          Book an appointment
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="saving-img">
              <img
                src={saving}
                className="img-fluid"
                style={{ borderRadius: "20px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retirement;

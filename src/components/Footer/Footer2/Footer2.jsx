import React from "react";

import "./footer2.scss";

import brand from "../../../images/tag-brands.gif";
import shipping from "../../../images/shipping.gif";
import products from "../../../images/online-products.gif";

const Footer2 = () => {
  return (
    <div
      className="footer2 pt-5 pb-5"
      style={{ backgroundColor: "#f3f3f3", textTransform: "uppercase" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="inner-div d-flex">
              <img src={brand} className="img-fluid" alt="" />
              <div className="text-left ml-3">
                <p>
                  <strong>1500+ Brands</strong>
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  Well Curated Products
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner-div d-flex">
              <img src={shipping} className="img-fluid" alt="" />
              <div className="text-left ml-3">
                <p>
                  <strong>1500+ Brands</strong>
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  for orders above INR 1000
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner-div d-flex">
              <img src={products} className="img-fluid" alt="" />
              <div className="text-left ml-3">
                <p>
                  <strong>1500+ Brands</strong>
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  source directly from brands
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner-div">
              <div className="text-left ml-3">
                <p>
                  <strong>Show some love on Social Media</strong>
                </p>
              </div>
              <div className="icons d-flex justify-content-around">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-pinterest-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;

import React from "react";
import "./footer3.scss";

import ScrollToTop from "react-scroll-to-top";
import "react-scroll-to-top/lib/index.css";

const Footer3 = () => {
  return (
    <div className="footer3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <ScrollToTop smooth>
              <button className="btn btn-top  scroll-to-top">
                <i class="fa fa-angle-up" aria-hidden="true"></i> Back to top
              </button>
            </ScrollToTop>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-md-5 text-left">
            <h4>About Us</h4>
            <li>
              <a href="">About Beatnik</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Students Discount</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">International</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </div>
          <div className="col-md-5 text-left">
            <h4>Customer Care</h4>
            <li>
              <a href="">Customer Enquiry</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Book Beauty Service</a>
            </li>
            <li>
              <a href="">Discover Store Event</a>
            </li>
            <li>
              <a href="">Find a store</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <p className="border-top d-block text-secondary ml-5 mr-5 pt-3">
                Copyright © 2020 all right reserved by Beatnik Technology
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;

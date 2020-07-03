import React from "react";

import "./news.css";

import news1 from "../../images/news1.gif";
import news2 from "../../images/news2.gif";

import news11 from "../../images/news11.png";
import { motion } from "framer-motion";
//import news21 from "../../images/news22.png";

const News = () => {
  return (
    <div className="news py-5" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pb-5">
            <h1>
              News & <span style={{ fontWeight: "bolder" }}>Event</span>
            </h1>
          </div>
          <div className="col-md-4">
            <div class="card ">
              <img src={news1} class="card-img-top img-fluid" alt="..." />
              <div class="card-body text-left py-5">
                <h5 class="card-title">New Premium Rate has been introduced</h5>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum accusantium iure totam, exercitationem ad tenetur
                  reiciendis. Explicabo qui aut deleniti.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card ">
              <img src={news2} class="card-img-top img-fluid" alt="..." />
              <div class="card-body text-left py-5">
                <h5 class="card-title">New Premium Rate has been introduced</h5>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum accusantium iure totam, exercitationem ad tenetur
                  reiciendis. Explicabo qui aut deleniti.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-left px-3 ">
              <h3 className="border-bottom pb-2 pt-2 m-0">Recent News</h3>
              <div className="double-card d-flex border-bottom p-2">
                <img src={news11} alt="" className="img-fluid" />
                <p className="pl-3 pt-2">
                  New Premium Rate has been introduced
                </p>
              </div>
              <div className="double-card d-flex border-bottom p-2">
                <img src={news11} alt="" className="img-fluid" />
                <p className="pl-3 pt-2">
                  New Premium Rate has been introduced
                </p>
              </div>
              <div className="double-card d-flex border-bottom p-2">
                <img src={news11} alt="" className="img-fluid" />
                <p className="pl-3 pt-2">
                  New Premium Rate has been introduced
                </p>
              </div>
              <div className="double-card d-flex border-bottom p-2">
                <img src={news11} alt="" className="img-fluid" />
                <p className="pl-3 pt-2">
                  New Premium Rate has been introduced
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn rounded-pill btn-lg mt-5"
              style={{
                backgroundColor: "#232075",
                color: "white",
                padding: "5px 30px",
              }}
            >
              See More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

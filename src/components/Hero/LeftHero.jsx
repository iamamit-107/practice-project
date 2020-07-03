import React from "react";
import "./RightHero.scss";

import { motion } from "framer-motion";

import cash from "../../images/cash.gif";
import saving from "../../images/saving.gif";
import children from "../../images/children.gif";
import retirement from "../../images/retirement.gif";
import investment from "../../images/investment.gif";

const LeftHero = () => {
  return (
    <div className="left-hero text-left pb-5">
      <h1 className="mb-5 pb-5">Family Protection Plans</h1>
      <div className="hero-btn d-flex row text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-grp btn col-lg-2 col-md-4 "
        >
          <img src={cash} alt="" className="img-fluid" />
          <p>Savings</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-grp btn col-lg-2 col-md-4"
        >
          <img src={saving} alt="" className="img-fluid" />
          <p>Savings</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-grp btn col-lg-2 col-md-4"
        >
          <img src={investment} alt="" className="img-fluid" />
          <p>Savings</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-grp btn col-lg-2 col-md-4"
        >
          <img src={children} alt="" className="img-fluid" />
          <p>Savings</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-grp btn col-lg-2 col-md-4"
        >
          <img src={retirement} alt="" className="img-fluid" />
          <p>Savings</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftHero;

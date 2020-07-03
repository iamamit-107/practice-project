import React, { useState } from "react";
import "./Products.scss";
import Saving from "./Category/Savings";
import EarlyCash from "./Category/EarlyCash";
import Retirement from "./Category/Retirement";
import Children from "./Category/Children";

import { motion } from "framer-motion";

const Products = () => {
  const [category, setCategory] = useState("savings");
  console.log(category);

  const handleClick = (category) => {
    setCategory(category);
  };

  const renderCategory = () => {
    console.log(category);
    if (category === "savings") {
      return <Saving />;
    } else if (category === "earlyCash") {
      return <EarlyCash />;
    } else if (category === "children") {
      return <Children />;
    } else if (category === "retirement") {
      return <Retirement />;
    }
  };
  return (
    <div className="products pb-5 pt-5" style={{ backgroundColor: "#f3f3f3" }}>
      <motion.div className="container">
        <div className="row">
          <div className="col-12 text-left product-heading">
            <h1>
              Our <span>Products</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              culpa et fuga voluptatem molestias, expedita natus tempore officia
              exercitationem porro aspernatur, saepe velit repellendus ex
              mollitia quis nemo deserunt odio?
            </p>
          </div>
        </div>

        <div className="row pt-5">
          <div
            className="col-md-3"
            style={{ backgroundColor: "#2c302e", borderRadius: "20px" }}
          >
            <div className="product-category">
              <div className="buttons mt-5">
                <div>
                  <button
                    className="btn"
                    onClick={() => handleClick("savings")}
                  >
                    Savings
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => handleClick("earlyCash")}
                  >
                    Early Cash
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => handleClick("children")}
                  >
                    Children
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => handleClick("retirement")}
                  >
                    Retirement
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-9"
            style={{ backgroundColor: "#fff", paddingRight: "0" }}
          >
            {renderCategory()}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
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
      </motion.div>
    </div>
  );
};

export default Products;

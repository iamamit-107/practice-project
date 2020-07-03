import React from "react";

import calculator from "../../images/calculator.gif";
import policy from "../../images/policy.gif";
import transaction from "../../images/transaction.gif";

import "./need.scss";

const Need = () => {
  return (
    <div className="need-section" style={{ backgroundColor: "#fff" }}>
      <div className="container pb-5">
        <div className="row  pb-5">
          <div className="col-md-12 col-lg-8 mx-auto form-sec">
            <div className="email-form d-flex align-items-center">
              <div
                class="input-group mb-3 mr-2"
                style={{ width: "70%", paddingLeft: "30px" }}
              >
                <span class="input-group-text" id="basic-addon1">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="What Do You Need?"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="buttons d-flex shadow">
                <div className="inner-btn btn">
                  <div className="btn-bg">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-clipboard-check"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </div>
                  <p>Products</p>
                </div>
                <div className="inner-btn btn">
                  <div className="btn-bg">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-person-square"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </div>
                  <p>Hospital</p>
                </div>
                <div className="inner-btn btn">
                  <div className="btn-bg">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-geo-alt"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </div>
                  <p>Brandch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="d-flex align-items-center pt-5 pb-5 justify-content-center content-box"
              style={{ backgroundColor: "#f1f3ff", borderRadius: "20px" }}
            >
              <img src={calculator} alt="" className="img-fluid" />
              <h3 className="ml-3">Premium Calculator</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="d-flex align-items-center pt-5 pb-5 justify-content-center content-box"
              style={{ backgroundColor: "#f9e9ff", borderRadius: "20px" }}
            >
              <img src={policy} alt="" className="img-fluid" />
              <h3 className="ml-3">Policy Information</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="d-flex align-items-center pt-5 pb-5 justify-content-center content-box"
              style={{ backgroundColor: "#ffeeee", borderRadius: "20px" }}
            >
              <img src={calculator} alt="" className="img-fluid" />
              <h3 className="ml-3">My Transaction</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Need;

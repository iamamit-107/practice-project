import React from "react";

import google from "../../../images/google2.png";
import apple from "../../../images/apple2.png";

const Footer1 = () => {
  return (
    <div
      className="footer1 py-5"
      style={{ backgroundColor: "#3f414d", color: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="email d-flex align-items-center">
              <svg
                style={{ fontSize: "30px" }}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-envelope-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                />
              </svg>
              <h6 className="ml-2 mb-0" style={{ textTransform: "uppercase" }}>
                get special discount in your box
              </h6>
            </div>
            <div className="email-submit d-flex mt-3">
              <input
                className="form-control mr-2"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid white",
                  borderRadius: "0px",
                }}
                type="email"
                placeholder="Enter Your Email Id"
                aria-label="Search"
                required
              />
              <button class="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="phone d-flex align-items-center">
              <svg
                width="1em"
                style={{ fontSize: "30px" }}
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-phone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
              <h6 className="ml-2 mb-0" style={{ textTransform: "uppercase" }}>
                experience the nayka mobile app
              </h6>
            </div>
            <div className="icons d-flex justify-content-around mt-3">
              <img src={google} className="img-fluid mr-3" alt="" />
              <img src={apple} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="phone d-flex">
              <svg
                width="1em"
                style={{ fontSize: "30px" }}
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                />
              </svg>
              <div>
                <h6
                  className="ml-2 mb-0"
                  style={{ textTransform: "uppercase", textAlign: "left" }}
                >
                  for any help you may call us at <br />
                  +91 922-220-220
                </h6>
                <p className="pt-2">(Monday to Saturday, 9AM - 9PM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;

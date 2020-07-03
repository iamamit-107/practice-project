import React from "react";

import logo from "../../images/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="upper-header" style={{ backgroundColor: "#f9dc84" }}>
        <div className="container">
          <div className="row d-flex align-items-center pt-2 pb-2">
            <div className="col-md-6">
              <div className="text-left">
                <p className="m-0">
                  <strong>Get All Your Daily Essentials</strong>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right d-flex justify-content-end">
                <li>
                  <i class="fa fa-mobile" aria-hidden="true"></i> Get App
                </li>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Store &
                  Events
                </li>
                <li>
                  <i class="fa fa-gift" aria-hidden="true"></i> Gift Card
                </li>
                <li>
                  <i class="fa fa-question-circle" aria-hidden="true"></i> Help
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav border-bottom">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  brands
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  nykaa fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  beauty advice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  nykaa network
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <form class="d-flex align-items-center search-header bg-lights">
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
                <input
                  class="bg-lights ml-2"
                  type="search"
                  placeholder="Search for Products, Brnads, etc"
                  aria-label="Search"
                />
              </form>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/"
                  style={{ fontWeight: "normal", textTransform: "capitalize" }}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                  <span>Account</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-bag-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5 bg-light triangle">
        <div className="container"></div>
      </div>
    </>
  );
};

export default Header;

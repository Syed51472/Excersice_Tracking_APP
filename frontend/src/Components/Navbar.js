import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
const Navbar = (props) => {
  const navigate = useNavigate();
  console.log("state", props.state);
  function loginBtn() {
    navigate("/Login");
    props.setStateLogin(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <span className="xLogo">X</span>
            <span className="cersice">cersice</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Excersice Tracking
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="nav menubar">
                <li className="nav-item">
                  <Link
                    className="nav-link animated_link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link animated_link" to="/aboutus">
                    About Us
                  </Link>
                </li>
                {props.showDashboard == true && (
                  <li className="nav-item">
                    <Link className="nav-link animated_link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link animated_link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link animated_link" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                {props.showDashboard == true && (
                  <li className="nav-item">
                    <Link className="nav-link animated_link" to="/activityform">
                      Add Activity
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  {props.stateLogin ? (
                    <button
                      className="nav-link customBtn"
                      onClick={() => {
                        props.setStateLogin(false);
                        props.setShowDashboard(false);
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="nav-link customBtn"
                      onClick={loginBtn}
                      // onClick={() => se}
                    >
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

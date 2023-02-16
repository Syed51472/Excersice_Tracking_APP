import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer-section set-bg p-5"
        data-setbg="img/footer-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Location</h4>
                <div className="fw-info-box">
                  <i class="bi bi-geo-alt"></i>
                  <div className="fw-info-text">
                    <p>1525 MM Alam Road, Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Subscriptions</h4>
                <div className="fw-info-box">
                  <i class="bi bi-telephone-inbound"></i>
                  <div className="fw-info-text">
                    <p>+92 (603)535-4592</p>
                    <p>+92 (603)535-4556</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>E-mail</h4>
                <div className="fw-info-box">
                  <i class="bi bi-envelope"></i>
                  <div className="fw-info-text">
                    <p>Contact@xcersice.com</p>
                    <p>www.xcersice.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h4>Social Media</h4>
                <div className="fw-info-box">
                  <img src="img/icons/4.png" alt="" />
                  <div className="social-links">
                    <a href="#">
                      <i class="bi bi-pinterest"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              <div className="copyright">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Baqir
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            {/* <div className="col-md-6 order-1 order-md-2">
              <ul className="footer-menu">
                <li>
                  <a href>Home</a>
                </li>
                <li>
                  <a href>About Us</a>
                </li>
                <li>
                  <a href>Classes</a>
                </li>
                <li>
                  <a href>News</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

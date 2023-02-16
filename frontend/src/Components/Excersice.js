import React from "react";
// import tomata from "../Assests/tomato.png";
import running from "../Assests/running.jpg";
import bicycle from "../Assests/bicycle.jpg";
import swimming from "../Assests/swimming.jpg";
import walking from "../Assests/walking.jpg";
import hiking from "../Assests/hiking.jpg";
import "../App.css";

const Excersice = () => {
  return (
    <div className="m-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="exImg_Con">
              <img src={running} className="img-fluid setHeight" alt="" />
              <div className="conLayout">
                <div className="conLayout_inner_con">
                  <div className="row">
                    <div className="col-6">
                      <div className="name">
                        <h2>Running</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="btn-con text-end">
                        <a href="#link">
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="exImg_Con">
              <img src={bicycle} className="img-fluid setHeight" alt="" />
              <div className="conLayout">
                <div className="conLayout_inner_con">
                  <div className="row">
                    <div className="col-6">
                      <div className="name">
                        <h2>Cycling</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="btn-con text-end">
                        <a href="#link">
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="exImg_Con">
              <img src={swimming} className="img-fluid setHeight" alt="" />
              <div className="conLayout">
                <div className="conLayout_inner_con">
                  <div className="row">
                    <div className="col-6">
                      <div className="name">
                        <h2>Swimming</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="btn-con text-end">
                        <a href="#link">
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="exImg_Con">
              <img src={walking} className="img-fluid setHeight" alt="" />
              <div className="conLayout">
                <div className="conLayout_inner_con">
                  <div className="row">
                    <div className="col-6">
                      <div className="name">
                        <h2>Walking</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="btn-con text-end">
                        <a href="#link">
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="exImg_Con">
              <img src={hiking} className="img-fluid setHeight" alt="" />
              <div className="conLayout">
                <div className="conLayout_inner_con">
                  <div className="row">
                    <div className="col-6">
                      <div className="name">
                        <h2>Hiking</h2>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="btn-con text-end">
                        <a href="#link">
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4"></div>
      </div>
    </div>
  );
};

export default Excersice;

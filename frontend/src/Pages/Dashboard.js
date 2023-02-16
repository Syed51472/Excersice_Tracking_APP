import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import hero from "../Assests/hero-bg.jpg";
// import running from "../Assests/running.jpg";
// import bicycle from "../Assests/bicycle.jpg";
// import swimming from "../Assests/swimming.jpg";
// import walking from "../Assests/walking.jpg";
// import hiking from "../Assests/hiking.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid">
        <div className="row dashboard_row">
          <div className="col-lg-2 col-sm-12 sideBar">
            <div className="activitiesDiv">
              <button
                className="animated_link"
                onClick={() => navigate("/showActivity")}
              >
                Running
              </button>
              <button
                className="animated_link"
                onClick={() => navigate("/showActivity")}
              >
                Walking
              </button>
              <button
                className="animated_link"
                onClick={() => navigate("/showActivity")}
              >
                Bicycling
              </button>
              <button
                className="animated_link"
                onClick={() => navigate("/showActivity")}
              >
                Swimming
              </button>
              <button
                className="animated_link"
                onClick={() => navigate("/showActivity")}
              >
                Hiking
              </button>
            </div>
          </div>

          <div className="col-lg-8 col-sm-12 activityCard">
            <div className="stats_con row mx-3 mb-5">
              <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="icon_box">
                  <div className="content">
                    <div className="title text-primary">Total Excersices</div>
                    <div className="value">4</div>
                  </div>
                  <div className="icon">
                    <i class="bi bi-universal-access"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="icon_box two">
                  <div className="content">
                    <div className="title text-success">Your Activities</div>
                    <div className="value">12</div>
                  </div>
                  <div className="icon">
                    <i class="bi bi-graph-up-arrow"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="icon_box three">
                  <div className="content">
                    <div className="title text-info">
                      Calories Burned <small>/day</small>
                    </div>
                    <div className="value">
                      300 Cal <small>AVG</small>
                    </div>
                  </div>
                  <div className="icon">
                    <i class="bi bi-fire"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="icon_box four">
                  <div className="content">
                    <div className="title text-warning">Avg Status</div>
                    <div className="value">80 / 100</div>
                  </div>
                  <div className="icon">
                    <i class="bi bi-percent"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
              <div className="card shadow" style={{ width: "28rem" }}>
                <img src={hero} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Activities</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo vitae, consequuntur quae quaerat nam illum.
                  </p>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/activityform")}
                  >
                    Start Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="heroSection direcFlex">
        <div className="text-center heroInner">
          <p className="heroHeading">
            Physical Activity enhances{" "}
            <span className="positiveEnergy">positive energy!</span>
          </p>
          <button
            className="customBtn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

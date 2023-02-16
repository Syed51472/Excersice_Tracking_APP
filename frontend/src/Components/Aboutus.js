import React from "react";
import "../App.css";
import tomata from "../Assests/tomato.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <div>
        <h2 className="text-center aboutUs">About us</h2>
      </div>
      <div className="row justify-content-center">
        <p className="mt-5 aboutSubHead text-center">
          <span className="weCare mx-2">We Care </span>about your health
        </p>
      </div>
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-6 col-12">
            <div className="row">
              <div className="col-lg-6 col-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nisi, dignissimos enim magnam, recusandae consequuntur vitae
                culpa, ea aliquid impedit architecto mollitia incidunt! Quas
                tempora est ullam expedita nobis. Voluptatum. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Id necessitatibus
                reiciendis quae est voluptas explicabo, illo alias eos tempore
                excepturi. Sint mollitia commodi magni qui voluptatem, deleniti
                dolorem nobis eius!
              </div>
              <div className="col-lg-6 col-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                dolores cumque iure amet excepturi facilis eligendi voluptatem
                dolorum! Mollitia at accusantium possimus voluptatum asperiores
                excepturi voluptatem reiciendis. Dolorum, necessitatibus
                laudantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Saepe, perspiciatis voluptatem repellat reprehenderit ea
                placeat nam, non esse, dolorem porro optio asperiores
                necessitatibus? Maiores totam eveniet ducimus facilis deleniti
                enim.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col-12">
                <img src={tomata} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <button
              className="customBtn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

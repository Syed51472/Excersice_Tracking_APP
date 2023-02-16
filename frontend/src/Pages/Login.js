import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mainLogin">
        <div className="login_form_con shadow">
          <div className="mainHeadingLogin">
            <p className="text-center p-0 m-0 fs-6">Sign in</p>
          </div>
          <div className="innerform">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Username"
            />
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
            />
            <p className="text-end forgotPass">Forgot Username / Password?</p>
            <button
              className="signin w-100 btn signinBtn"
              onClick={() => {
                navigate("/dashboard");
                props.setStateLogin(true);
                props.setShowDashboard(true);
              }}
            >
              SIGN IN
            </button>
            <p className="p-0 m-0 text-center">Don't have an account?</p>
            <p className="p-0 m-0 text-center signupnow">SIGN UP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

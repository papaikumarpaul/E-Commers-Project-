import React from "react";
import "./Css/Loginsingup.css";

const LoginSignup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fildes">
          <input type="text" placeholder="enter  your   name" />
          <input type="email" placeholder="enter  your   email Address" />
          <input type="password" placeholder="enter  your password" />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">
          Already have an accout ? <span>Login here</span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms of use & privacypolicy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

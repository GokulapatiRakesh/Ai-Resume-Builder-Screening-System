import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginCandidate.css";

import loginLeft from "../assets/can-login-img.png";
import emailIcon from "../assets/email-icon.png";
import openEyeIcon from "../assets/open-eye.png";
import closeEyeIcon from "../assets/close-eye.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedIn.png";

const LoginCandidate = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.username.trim()) {
      alert("Please enter your User Name.");
      return;
    }

    if (!loginData.password) {
      alert("Please enter your Password.");
      return;
    }

    navigate("/email-verification");
  };

  const handleGoogleLogin = () => {
    alert("Google login will be connected here.");
  };

  const handleLinkedInLogin = () => {
    alert("LinkedIn login will be connected here.");
  };

  const handleRecruiter = () => {
    navigate("");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <div className="candidate-login-page">
      {/* LEFT SECTION */}
      <section className="candidate-login-left-section">
        <div className="candidate-login-left-content">
          <div className="candidate-login-brand">
            AI Resume Builder and Screening system
          </div>

          <img
            src={loginLeft}
            alt="AI Resume Builder"
            className="candidate-login-illustration"
          />

          <div className="candidate-login-quote-box">
            “Leadership is the capacity to translate vision into reality.”—
            Warren Bennis
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="candidate-login-right-section">
        <div className="candidate-login-auth">
          <h1 className="candidate-login-title">Login your account</h1>

      

          {/* LOGIN FORM */}
          <form className="candidate-login-form" onSubmit={handleLogin}>
            {/* USER NAME */}
            <div className="candidate-login-form-group">
              <label htmlFor="username">User Name</label>

              <div className="candidate-login-input-wrapper">
                <img
                  src={emailIcon}
                  alt=""
                  className="candidate-login-email-icon"
                />

                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter Your User Name"
                  value={loginData.username}
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="candidate-login-form-group">
              <label htmlFor="password">Password</label>

              <div className="candidate-login-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  value={loginData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="candidate-login-password-input"
                />

                <button
                  type="button"
                  className="candidate-login-eye-button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img src={showPassword ? closeEyeIcon : openEyeIcon} alt="" />
                </button>
              </div>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="candidate-login-options">
              <button
                type="button"
                className="candidate-login-remember"
                onClick={() => setRememberMe((prev) => !prev)}
              >
                <span
                  className={`candidate-login-checkbox ${
                    rememberMe ? "checked" : ""
                  }`}
                >
                  {rememberMe && "✓"}
                </span>

                <span>Remember me</span>
              </button>

              <a
                href="/forgot-password"
                onClick={handleForgotPassword}
                className="candidate-login-forgot"
              >
                Forget Password?
              </a>
            </div>

            {/* CONTINUE */}
            <button type="submit" className="candidate-login-continue">
              Continue
            </button>
          </form>

          {/* OR */}
          <div className="candidate-login-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="candidate-login-social-heading">CONTINUE WITH</div>

          <div className="candidate-login-social">
            <button type="button" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google" />
            </button>

            <button type="button" onClick={handleLinkedInLogin}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* ACCOUNT */}
          <div className="candidate-login-account">
            <span>Need help &</span>
            <a href="/register">Create account</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginCandidate;

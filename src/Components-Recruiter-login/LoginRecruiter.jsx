import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRecruiter.css";

import loginLeft from "../assets/can-login-img.png";
import emailIcon from "../assets/email-icon.png";
import openEyeIcon from "../assets/open-eye.png";
import closeEyeIcon from "../assets/close-eye.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedIn.png";

const LoginRecruiter = () => {
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

    navigate("/verify-email");
  };

  const handleGoogleLogin = () => {
    alert("Google login will be connected here.");
  };

  const handleLinkedInLogin = () => {
    alert("LinkedIn login will be connected here.");
  };

  const handleCandidate = () => {
    navigate("/Loginpage");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/rec-forgot-password");
  };

  const handleRememberMe = () => {
    setRememberMe((prev) => !prev);
  };

  return (
    <div className="recruiter-login-page">
      {/* LEFT SECTION */}
      <section className="recruiter-login-left-section">
        <div className="recruiter-login-brand">
          AI Resume Builder and Screening system
        </div>

        <img
          src={loginLeft}
          alt="AI Resume Builder"
          className="recruiter-login-illustration"
        />

        <div className="recruiter-login-quote-box">
          “Your role as a leader is to bring out the best in others, even when
          they know more than you.” — Wanda T. Wallace
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="recruiter-login-right-section">
        <div className="recruiter-login-auth">
          <h1 className="recruiter-login-title">Login your account</h1>

          {/* CANDIDATE / RECRUITER SWITCH */}
          <div className="recruiter-login-role-switch">
            <button
              type="button"
              className="recruiter-login-role"
              onClick={handleCandidate}
            >
              Candidate
            </button>

            <button type="button" className="recruiter-login-role active">
              Recruiter
            </button>
          </div>

          {/* LOGIN FORM */}
          <form className="recruiter-login-form" onSubmit={handleLogin}>
            {/* USER NAME */}
            <div className="recruiter-login-form-group">
              <label htmlFor="username">User Name</label>

              <div className="recruiter-login-input-wrapper">
                <img
                  src={emailIcon}
                  alt=""
                  className="recruiter-login-email-icon"
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
            <div className="recruiter-login-form-group">
              <label htmlFor="password">Password</label>

              <div className="recruiter-login-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  value={loginData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="recruiter-login-password-input"
                />

                <button
                  type="button"
                  className="recruiter-login-eye-button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img src={showPassword ? closeEyeIcon : openEyeIcon} alt="" />
                </button>
              </div>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="recruiter-login-options">
              <button
                type="button"
                className="recruiter-login-remember"
                onClick={handleRememberMe}
              >
                <span
                  className={`recruiter-login-checkbox ${
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
                className="recruiter-login-forgot"
              >
                Forget Password?
              </a>
            </div>

            {/* CONTINUE */}
            <button type="submit" className="recruiter-login-continue">
              Continue
            </button>
          </form>

          {/* OR DIVIDER */}
          <div className="recruiter-login-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="recruiter-login-social-heading">CONTINUE WITH</div>

          <div className="recruiter-login-social">
            <button type="button" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google" />
            </button>

            <button type="button" onClick={handleLinkedInLogin}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* CREATE ACCOUNT */}
          <div className="recruiter-login-account">
            <span>Need help &</span>
            <a href="/register">Create account</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginRecruiter;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import incorrectPasswordImage from "../assets/incorrect-pswd.png";
import eyeOffIcon from "../assets/close-eye.png";
import eyeOpenIcon from "../assets/open-eye.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedIn.png";

import "./IncorrectPassword.css";

const IncorrectPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("salmon@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();
    if (password !== "correctpassword") {
      setIsError(true);
    } else {
      setIsError(false);
      console.log("Success");
    }
  };

  return (
    <div className="can-ip-page">
      {/* ================= LEFT SECTION ================= */}
      <section className="can-ip-left">
        <div className="can-ip-left-content">
          <p className="can-ip-brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="can-ip-left-heading">
            Create professional, ATS-friendly resumes in minutes with Ai
          </h1>

          <div className="can-ip-illustration-wrap">
            <img
              src={incorrectPasswordImage}
              alt="AI Resume Builder"
              className="can-ip-illustration"
            />
          </div>

          <div className="can-ip-quote-box">
            <p>"We're here to put a dent in the universe."</p>
            <span>— Steve Jobs</span>
          </div>
        </div>
      </section>

      {/* ================= RIGHT SECTION ================= */}
      <section className="can-ip-right">
        <div className="can-ip-container">
          <h2 className="can-ip-title">Incorrect password</h2>

          <form onSubmit={handleContinue}>
            {/* Email */}
            <div className="can-ip-field">
              <label htmlFor="can-ip-email">Email Address</label>

              <input
                id="can-ip-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="salmon@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="can-ip-field can-ip-password-field">
              <label htmlFor="can-ip-password">Password</label>

              <div className="can-ip-password-wrapper">
                <input
                  id="can-ip-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (isError) setIsError(false);
                  }}
                  placeholder="Re-enter password"
                  className={`can-ip-password-input ${isError ? "can-ip-error-border" : ""}`}
                />

                <button
                  type="button"
                  className="can-ip-eye-button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img
                    src={showPassword ? eyeOpenIcon : eyeOffIcon}
                    alt={showPassword ? "Hide password" : "Show password"}
                  />
                </button>
              </div>
            </div>

            {/* Error + Forgot Password */}
            {isError && (
              <div className="can-ip-error-row">
                <span className="can-ip-error-message">
                  Incorrect password please try again
                </span>

                <button
                  type="button"
                  className="can-ip-forgot-link"
                  onClick={() => navigate("/Resume-builder/forgot-password")}
                >
                  Forget Password?
                </button>
              </div>
            )}

            {/* Continue */}
            <button type="submit" className="can-ip-continue-button">
              Continue
            </button>
          </form>

          {/* OR */}
          <div className="can-ip-or-section">
            <div className="can-ip-or-line"></div>

            <span>OR</span>

            <div className="can-ip-or-line"></div>
          </div>

          {/* Continue With */}
          <div className="can-ip-continue-with">CONTINUE WITH</div>

          {/* Social Login */}
          <div className="can-ip-social-section">
            <button type="button" className="can-ip-social-button">
              <img src={googleIcon} alt="Google" />
            </button>

            <button type="button" className="can-ip-social-button">
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* Help */}
          <p className="can-ip-help-text">
            Need help & <span>Contact admin</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default IncorrectPassword;

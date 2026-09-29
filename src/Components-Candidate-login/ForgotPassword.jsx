
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

import leftIllustration from "../assets/forgot-pswd.png";
import securityLock from "../assets/security-lock.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import arrowIcon from "../assets/arrow.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Reset link requested for:", email);

    // Navigate to Create Password page
    navigate("/create-password");
  };

  return (
    <div className="forgot-page">
      {/* ================= LEFT SECTION ================= */}
      <section className="forgot-left">
        <div className="left-content">
          <p className="brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="left-heading">
            AI-driven resume building and
            <br />
            intelligent candidate screening
          </h1>

          <img
            src={leftIllustration}
            alt="AI Resume Builder Illustration"
            className="left-illustration"
          />

          <div className="quote-box">
            <span>
              “My best successes came on the heels of failures.” — Barbara
              Corcoran
            </span>
          </div>
        </div>
      </section>

      {/* ================= RIGHT SECTION ================= */}
      <section className="forgot-right">
        <div className="forgot-container">
          {/* Security Lock */}
          <div className="security-icon-wrapper">
            <img
              src={securityLock}
              alt="Security"
              className="security-icon"
            />
          </div>

          {/* Heading */}
          <h2 className="forgot-title">Forgot Password?</h2>

          <p className="forgot-description">
            Enter the email address associated with your account
            <br />
            and we'll send you a link to reset your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="forgot-form">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="akhila@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <button type="submit">
              Send Reset Link
            </button>
          </form>

          {/* OR Divider */}
          <div className="or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="continue-text">CONTINUE WITH</p>

          {/* Social Login */}
          <div className="social-buttons">
            <button
              type="button"
              className="social-btn"
              aria-label="Continue with Google"
            >
              <img src={googleIcon} alt="Google" />
            </button>

            <button
              type="button"
              className="social-btn"
              aria-label="Continue with LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* Admin Help */}
          <p className="help-text">
            Need help &{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Contact Admin
            </a>
          </p>

          {/* Back to Login */}
          <a href="/login" className="back-login">
            <img src={arrowIcon} alt="Back" />
            <span>Back to Login</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;


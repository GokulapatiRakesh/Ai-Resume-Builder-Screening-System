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

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Reset link requested for:", email);
    navigate("/create-password");
  };

  return (
    <div className="candidate-fp-page">
      {/* ================= LEFT SECTION ================= */}
      <section className="candidate-fp-left">
        <div className="candidate-fp-left-content">
          <p className="candidate-fp-brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="candidate-fp-left-heading">
            AI-driven resume building and intelligent candidate screening
          </h1>

          <img
            src={leftIllustration}
            alt="AI Resume Builder Illustration"
            className="candidate-fp-left-illustration"
          />

          <div className="candidate-fp-quote-box">
            <span>
              “My best successes came on the heels of failures.” — Barbara
              Corcoran
            </span>
          </div>
        </div>
      </section>

      {/* ================= RIGHT SECTION ================= */}
      <section className="candidate-fp-right">
        <div className="candidate-fp-container">
          {/* Security Lock */}
          <div className="candidate-fp-security-icon-wrapper">
            <img
              src={securityLock}
              alt="Security"
              className="candidate-fp-security-icon"
            />
          </div>

          {/* Heading */}
          <h2 className="candidate-fp-title">Forgot Password?</h2>

          <p className="candidate-fp-description">
            Enter the email address associated with your account
            <br />
            and we'll send you a link to reset your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="candidate-fp-form">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="akhila@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <button type="submit">Send Reset Link</button>
          </form>

          {/* OR Divider */}
          <div className="candidate-fp-or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="candidate-fp-continue-text">CONTINUE WITH</p>

          {/* Social Login */}
          <div className="candidate-fp-social-buttons">
            <button
              type="button"
              className="candidate-fp-social-btn"
              aria-label="Continue with Google"
            >
              <img src={googleIcon} alt="Google" />
            </button>

            <button
              type="button"
              className="candidate-fp-social-btn"
              aria-label="Continue with LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* Admin Help */}
          <p className="candidate-fp-help-text">
            Need help &{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Contact Admin
            </a>
          </p>

          {/* Back to Login */}
          <a href="/Loginpage" className="candidate-fp-back-login">
            <img src={arrowIcon} alt="Back" />
            <span>Back to Login</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import "./CreatePassword.css";

import leftIllustration from "../assets/create-pwd.png";

import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import arrowIcon from "../assets/arrow.png";

const Createpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please enter both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Password created successfully");
  };

  return (
    <div className="can-create-password-page">
      {/* LEFT SECTION */}
      <section className="can-create-password-left">
        <div className="can-create-password-left-content">
          <p className="can-create-password-brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="can-create-password-left-heading">
            Where Talent Meets Intelligence AI Interglient{" "}
          </h1>

          <img
            src={leftIllustration}
            alt="AI Resume Builder Illustration"
            className="can-create-password-left-illustration"
          />

          <div className="can-create-password-quote-box">
            <span>
              “Coming together is a beginning. Keeping together is progress.
              Working together is success.” — Henry Ford
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="can-create-password-right">
        <div className="can-create-password-container">
          <h2 className="can-create-password-title">Create a new password</h2>

          <p className="can-create-password-description">
            Please enter and confirm your new password
          </p>

          <form onSubmit={handleSubmit} className="can-create-password-form">
            {/* NEW PASSWORD */}
            <label htmlFor="new-password">New Password</label>

            <div className="can-create-password-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <label
              htmlFor="confirm-password"
              className="can-create-password-confirm-label"
            >
              Confirm Password
            </label>

            <div className="can-create-password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="can-create-password-button">
              Create Password
            </button>
          </form>

          {/* LEFT ALIGNED LOGIN TEXT */}
          <p className="can-create-password-login-text">
            Remember your password? <a href="/Loginpage">Login</a>
          </p>

          <div className="can-create-password-or-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="can-create-password-continue-text">CONTINUE WITH</p>

          <div className="can-create-password-social-buttons">
            <button
              type="button"
              className="can-create-password-social-btn"
              aria-label="Continue with Google"
            >
              <img src={googleIcon} alt="Google" />
            </button>

            <button
              type="button"
              className="can-create-password-social-btn"
              aria-label="Continue with LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          <p className="can-create-password-help-text">
            Need help & <a href="#">Contact Admin</a>
          </p>

          <a href="/Loginpage" className="can-create-password-back-login">
            <img src={arrowIcon} alt="Back" />

            <span>Back to Login</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Createpassword;

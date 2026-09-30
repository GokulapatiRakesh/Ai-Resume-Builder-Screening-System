import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreatePassword.css";

import leftIllustration from "../assets/create-pswd.png";

import openEye from "../assets/open-eye.png";
import closeEye from "../assets/close-eye.png";

import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import arrowIcon from "../assets/arrow.png";

const CreatePassword = () => {
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
    <div className="create-password-page">
      {/* LEFT SECTION */}

      <section className="create-password-left">
        <div className="create-password-left-content">
          <p className="create-password-brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="create-password-left-heading">
            AI-driven resume building and intelligent candidate screening
          </h1>

          <img
            src={leftIllustration}
            alt="AI Resume Builder Illustration"
            className="create-password-left-illustration"
          />

          <div className="create-password-quote-box">
            <span>
              “My best successes came on the heels of failures.” — Barbara
              Corcoran
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}

      <section className="create-password-right">
        <div className="create-password-container">
          <h2 className="create-password-title">Create a new password</h2>

          <p className="create-password-description">
            Please enter and confirm your new password
          </p>

          {/* PASSWORD FORM */}

          <form onSubmit={handleSubmit} className="create-password-form">
            {/* NEW PASSWORD */}

            <label htmlFor="new-password">New Password</label>

            <div className="create-password-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                type="button"
                className="create-password-eye"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                <img
                  src={showNewPassword ? openEye : closeEye}
                  alt={showNewPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>

            {/* CONFIRM PASSWORD */}

            <label
              htmlFor="confirm-password"
              className="create-password-confirm-label"
            >
              Confirm Password
            </label>

            <div className="create-password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                className="create-password-eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                <img
                  src={showConfirmPassword ? openEye : closeEye}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                />
              </button>
            </div>

            {/* CREATE PASSWORD */}

            <button type="submit" className="create-password-button">
              Create Password
            </button>
          </form>

          {/* LOGIN */}

          <p className="create-password-login-text">
            Remember your password? <Link to="/Recruiter-login">Login</Link>
          </p>

          {/* OR DIVIDER */}

          <div className="create-password-or-divider">
            <span></span>

            <p>OR</p>

            <span></span>
          </div>

          {/* CONTINUE WITH */}

          <p className="create-password-continue-text">CONTINUE WITH</p>

          {/* SOCIAL BUTTONS */}

          <div className="create-password-social-buttons">
            <button
              type="button"
              className="create-password-social-btn"
              aria-label="Continue with Google"
            >
              <img src={googleIcon} alt="Google" />
            </button>

            <button
              type="button"
              className="create-password-social-btn"
              aria-label="Continue with LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>

          {/* HELP */}

          <p className="create-password-help-text">
            Need help & <a href="#">Contact Admin</a>
          </p>
          {/* BACK TO LOGIN */}

          <Link to="/Recruiter-login" className="create-password-back-login">
            <img src={arrowIcon} alt="Back" />

            <span>Back to Login</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CreatePassword;

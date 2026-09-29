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
    <div className="incorrect-password-page">
      {/* ================= LEFT SECTION ================= */}
      <section className="incorrect-left">
        <div className="incorrect-left-content">
          <p className="incorrect-brand-title">
            AI Resume Builder and Screening system
          </p>
 
          <h1 className="incorrect-left-heading">
            Create professional, ATS-friendly
            <br />
            resumes in minutes with Ai
          </h1>
 
          <div className="incorrect-illustration-wrap">
            <img
              src={incorrectPasswordImage}
              alt="AI Resume Builder"
              className="incorrect-illustration"
            />
          </div>
 
          <div className="incorrect-quote-box">
            <p>"We're here to put a dent in the universe."</p>
            <span>— Steve Jobs</span>
          </div>
        </div>
      </section>
 
      {/* ================= RIGHT SECTION ================= */}
      <section className="incorrect-right">
        <div className="incorrect-container">
          <h2 className="incorrect-title">Incorrect password</h2>
 
          <form onSubmit={handleContinue}>
            {/* Email */}
            <div className="incorrect-field">
              <label htmlFor="incorrect-email">Email Address</label>
 
              <input
                id="incorrect-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="salmon@gmail.com"
              />
            </div>
 
            {/* Password */}
            <div className="incorrect-field password-field">
              <label htmlFor="incorrect-password">Password</label>
 
              <div className="incorrect-password-wrapper">
                <input
                  id="incorrect-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (isError) setIsError(false);
                  }}
                  placeholder="Re-enter password"
                  className={`incorrect-password-input ${isError ? "error-border" : ""}`}
                />
 
                <button
                  type="button"
                  className="incorrect-eye-button"
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
              <div className="incorrect-error-row">
                <span className="incorrect-error-message">
                  Incorrect password please try again
                </span>
 
                <button
                  type="button"
                  className="incorrect-forgot-link"
                  onClick={() => navigate("/Resume-builder/forgot-password")}
                >
                  Forget Password?
                </button>
              </div>
            )}
 
            {/* Continue */}
            <button type="submit" className="incorrect-continue-button">
              Continue
            </button>
          </form>
 
          {/* OR */}
          <div className="incorrect-or-section">
            <div className="incorrect-or-line"></div>
 
            <span>OR</span>
 
            <div className="incorrect-or-line"></div>
          </div>
 
          {/* Continue With */}
          <div className="incorrect-continue-with">CONTINUE WITH</div>
 
          {/* Social Login */}
          <div className="incorrect-social-section">
            <button type="button" className="incorrect-social-button">
              <img src={googleIcon} alt="Google" />
            </button>
 
            <button type="button" className="incorrect-social-button">
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>
 
          {/* Help */}
          <p className="incorrect-help-text">
            Need help & <span>Contact admin</span>
          </p>
        </div>
      </section>
    </div>
  );
};
 
export default IncorrectPassword;
 
 
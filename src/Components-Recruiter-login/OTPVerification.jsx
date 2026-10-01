import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./OTPVerification.css";

import blueCircle from "../assets/blurcircle-img.png";
import leftImage from "../assets/IncorrectOtp-left-img.png";
import invalidOtpImage from "../assets/InvalidOtp-img.png";
import lockIcon from "../assets/lock-icon.png";
import backArrow from "../assets/arrow.png";

const CORRECT_OTP = "829749";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const previousOtp = location.state?.enteredOtp || "";

  const initialOtp = Array.from(
    { length: 6 },
    (_, index) => previousOtp[index] || "",
  );

  const [otp, setOtp] = useState(initialOtp);
  const [showInvalid, setShowInvalid] = useState(previousOtp.length === 6);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setShowInvalid(false);
    setSuccessMessage("");

    if (value && index < 5) {
      document.getElementById(`otp-verification-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-verification-${index - 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setSuccessMessage("");
      setShowInvalid(true);
      return;
    }

    if (enteredOtp === CORRECT_OTP) {
      setShowInvalid(false);
      setSuccessMessage("OTP verified successfully!");
      return;
    }

    setSuccessMessage("");
    setShowInvalid(true);
  };

  const handleResendOtp = () => {
    navigate("/login/recruiter/verifyemail");
  };

  const handleBackToLogin = () => {
    navigate("Recruiter-login");
  };

  return (
    <main className="otp-verification-page">
      {/* LEFT SIDE */}
      <section className="otp-verification-left">
        <div className="otp-verification-left-content">
          <p className="otp-brand-title">
            AI Resume Builder and Screening system
          </p>

          <h1 className="otp-hero-title">
            Recruitment, Reimagined with AI
            <br />
            Screen candidates faster.
          </h1>

          <div className="otp-illustration-wrapper">
            <img
              src={leftImage}
              alt="Recruitment illustration"
              className="otp-left-illustration"
            />
          </div>

          {/* QUOTE AS CODE/TEXT - NOT AN IMAGE */}
          <div className="otp-quote">
            <p className="otp-quote-text">
              “Coming together is a beginning. Keeping together is progress.
              Working together is success.”
            </p>

            <p className="otp-quote-author">— Henry Ford</p>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="otp-verification-right">
        <div className="otp-verification-card">
          {/* LOCK ICON */}
          <div className="otp-lock-wrapper">
            <img src={blueCircle} alt="" className="otp-blue-circle" />

            <img src={lockIcon} alt="Lock" className="otp-lock-icon" />
          </div>

          {/* MESSAGE */}
          <p className="otp-main-message">
            The OTP you entered is incorrect
            <br />
            Please try again.
          </p>

          {/* OTP INPUTS */}
          <div
            className={`otp-input-container ${
              showInvalid ? "otp-invalid" : ""
            }`}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-verification-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) => handleChange(event.target.value, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                aria-label={`OTP digit ${index + 1}`}
                autoComplete="off"
              />
            ))}
          </div>

          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <p className="otp-success-message">✓ {successMessage}</p>
          )}

          {/* INVALID MESSAGE */}
          {showInvalid && !successMessage && (
            <div className="otp-invalid-message">
              <img src={invalidOtpImage} alt="" className="otp-invalid-icon" />

              <span>Invalid OTP. Please check and try again.</span>
            </div>
          )}

          {/* RESEND OTP */}
          <div className="otp-resend-row">
            <span>Re-send OTP?</span>

            <button type="button" onClick={handleResendOtp}>
              Click here
            </button>
          </div>

          {/* VERIFY */}
          <button
            type="button"
            className="otp-verify-button"
            onClick={handleVerify}
          >
            Verify &amp; Continue
          </button>

          {/* BACK TO LOGIN */}
          <button
            type="button"
            className="otp-back-login"
            onClick={() => navigate("/Recruiter-login")}
          >
            <img src={backArrow} alt="" />

            <span>Back to Login</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default OTPVerification;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
 
import "./OTPVerification.css";
 
import blueCircle from "../assets/blurcircle-img.png";
import leftImage from "../assets/IncorrectOtp-left-img.png";
import quoteImage from "../assets/IncorrectOtp-quote.png";
import invalidOtpImage from "../assets/InvalidOtp-img.png";
import lockIcon from "../assets/lock-icon.png";
import backArrow from "../assets/arrow.png";
 
const CORRECT_OTP = "829749";
 
const IncorrectOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  const previousOtp = location.state?.enteredOtp || "";
 
  const initialOtp = Array.from(
    { length: 6 },
    (_, index) => previousOtp[index] || ""
  );
 
  const [otp, setOtp] = useState(initialOtp);
 
  const [showInvalid, setShowInvalid] = useState(
    previousOtp.length === 6
  );
 
  const [successMessage, setSuccessMessage] =
    useState("");
 
 
  /* =========================================
     OTP INPUT
  ========================================= */
 
  const handleChange = (value, index) => {
    /*
      Only numbers
    */
 
    if (!/^\d?$/.test(value)) {
      return;
    }
 
    const newOtp = [...otp];
 
    newOtp[index] = value;
 
    setOtp(newOtp);
 
    /*
      Remove messages while user is editing
    */
 
    setShowInvalid(false);
    setSuccessMessage("");
 
    /*
      Automatically move to next box
    */
 
    if (
      value &&
      index < 5
    ) {
      document
        .getElementById(
          `incorrect-otp-${index + 1}`
        )
        ?.focus();
    }
  };
 
 
  /* =========================================
     BACKSPACE
  ========================================= */
 
  const handleKeyDown = (event, index) => {
 
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      document
        .getElementById(
          `OTPVerification-${index - 1}`
        )
        ?.focus();
    }
  };
 
 
  /* =========================================
     VERIFY OTP
  ========================================= */
 
  const handleVerify = () => {
 
    const enteredOtp = otp.join("");
 
    /*
      Must enter all 6 digits
    */
 
    if (enteredOtp.length !== 6) {
 
      setSuccessMessage("");
 
      setShowInvalid(true);
 
      return;
    }
 
 
    /*
      CORRECT OTP
      508213
    */
 
    if (enteredOtp === CORRECT_OTP) {
 
      setShowInvalid(false);
 
      setSuccessMessage(
        "OTP verified successfully!"
      );
 
      return;
    }
 
 
    /*
      WRONG OTP
    */
 
    setSuccessMessage("");
 
    setShowInvalid(true);
  };
 
 
  /* =========================================
     RESEND OTP
  ========================================= */
 
  const handleResendOtp = () => {
 
    navigate(
      "/login/recruiter/verifyemail"
    );
  };
 
 
  /* =========================================
     BACK TO LOGIN
  ========================================= */
 
  const handleBackToLogin = () => {
 
    navigate("/login/recruiter");
  };
 
 
  return (
    <main className="incorrect-page">
 
      {/* =====================================
          LEFT SIDE
      ===================================== */}
 
      <section className="incorrect-left">
 
        <div className="incorrect-left-content">
 
          <p className="incorrect-brand-title">
            AI Resume Builder and Screening system
          </p>
 
 
          <h1>
            Recruitment, Reimagined with AI
            <br />
            Screen candidates faster.
          </h1>
 
 
          <div className="incorrect-illustration-wrapper">
 
            <img
              src={leftImage}
              alt="Recruitment illustration"
              className="incorrect-left-illustration"
            />
 
          </div>
 
 
          <img
            src={quoteImage}
            alt="Success quote"
            className="incorrect-quote-image"
          />
 
        </div>
 
      </section>
 
 
      {/* =====================================
          RIGHT SIDE
      ===================================== */}
 
      <section className="incorrect-right">
 
        <div className="incorrect-card">
 
 
          {/* =================================
              BLUE CIRCLE + LOCK
          ================================= */}
 
          <div className="incorrect-lock-wrapper">
 
            <img
              src={blueCircle}
              alt=""
              className="incorrect-blue-circle"
            />
 
            <img
              src={lockIcon}
              alt="Lock"
              className="incorrect-lock-icon"
            />
 
          </div>
 
 
          {/* =================================
              ERROR / INFO MESSAGE
          ================================= */}
 
          <p className="incorrect-main-message">
            The OTP you entered is incorrect
            <br />
            Please try again.
          </p>
 
 
          {/* =================================
              SIX OTP BOXES
          ================================= */}
 
          <div
            className={`incorrect-otp-container ${
              showInvalid
                ? "otp-invalid"
                : ""
            }`}
          >
 
            {otp.map((digit, index) => (
 
              <input
                key={index}
                id={`incorrect-otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(event) =>
                  handleChange(
                    event.target.value,
                    index
                  )
                }
                onKeyDown={(event) =>
                  handleKeyDown(
                    event,
                    index
                  )
                }
                aria-label={`OTP digit ${
                  index + 1
                }`}
                autoComplete="off"
              />
 
            ))}
 
          </div>
 
 
          {/* =================================
              SUCCESS MESSAGE
          ================================= */}
 
          {successMessage && (
 
            <p className="incorrect-success-message">
              ✓ {successMessage}
            </p>
 
          )}
 
 
          {/* =================================
              INVALID MESSAGE
          ================================= */}
 
          {showInvalid &&
            !successMessage && (
 
              <div className="invalid-otp-message">
 
                <img
                  src={invalidOtpImage}
                  alt=""
                  className="invalid-otp-icon"
                />
 
                <span>
                  Invalid OTP. Please check and try again.
                </span>
 
              </div>
 
            )}
 
 
          {/* =================================
              RESEND OTP
          ================================= */}
 
          <div className="incorrect-resend-row">
 
            <span>
              Re-send OTP?
            </span>
 
            <button
              type="button"
              onClick={handleResendOtp}
            >
              Click here
            </button>
 
          </div>
 
 
          {/* =================================
              VERIFY BUTTON
          ================================= */}
 
          <button
            type="button"
            className="incorrect-verify-button"
            onClick={handleVerify}
          >
            Verify &amp; Continue
          </button>
 
 
          {/* =================================
              BACK TO LOGIN
          ================================= */}
 
          <button
            type="button"
            className="incorrect-back-login"
            onClick={handleBackToLogin}
          >
 
            <img
              src={backArrow}
              alt=""
            />
 
            <span>
              Back to Login
            </span>
 
          </button>
 
        </div>
 
      </section>
 
    </main>
  );
};
 
export default IncorrectOtp;
 
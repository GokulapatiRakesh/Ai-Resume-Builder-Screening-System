import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Verifymail.css";

import leftImage from "../assets/verifymail-left-img.png";
import quoteImage from "../assets/verifymail-quote.png";
import backArrow from "../assets/arrow.png";

const CORRECT_OTP = "829749";
const INITIAL_TIME = 40;

const VerifyEmail = () => {
  const navigate = useNavigate();

  /* =========================================================
     STATE
     ========================================================= */

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Timer starts at 0.
  // It will start only after the user clicks "resend OTP".
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  const [successMessage, setSuccessMessage] = useState("");

  /* =========================================================
     TIMER
     ========================================================= */

  useEffect(() => {
    // Do not start the timer automatically.
    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  /* =========================================================
     FORMAT TIMER
     ========================================================= */

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  /* =========================================================
     OTP INPUT
     ========================================================= */

  const handleChange = (value, index) => {
    // Allow only one digit
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    // Clear success message when OTP changes
    setSuccessMessage("");

    // Move to next OTP input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  /* =========================================================
     OTP BACKSPACE
     ========================================================= */

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  /* =========================================================
     VERIFY OTP
     ========================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredOtp = otp.join("");

    // Check whether all six digits are entered
    if (enteredOtp.length !== 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    // Correct OTP
    if (enteredOtp === CORRECT_OTP) {
      setSuccessMessage("OTP verified successfully!");
      return;
    }

    // Incorrect OTP
    navigate("/otp-verification", {
      state: {
        enteredOtp: enteredOtp,
      },
    });
  };

  /* =========================================================
     RESEND OTP
     ========================================================= */

  const handleResendOtp = () => {
    // Do not allow resend while timer is running
    if (timeLeft > 0) {
      return;
    }

    alert("A new OTP has been sent to your email.");

    // Clear old OTP
    setOtp(["", "", "", "", "", ""]);

    // Clear success message
    setSuccessMessage("");

    // Start timer ONLY after clicking "resend OTP"
    setTimeLeft(INITIAL_TIME);

    // Focus first OTP input
    setTimeout(() => {
      document.getElementById("otp-0")?.focus();
    }, 100);
  };

  /* =========================================================
     BACK TO LOGIN
     ========================================================= */

  const handleBackToLogin = () => {
    navigate("/Recruiter-login");
  };

  /* =========================================================
     PAGE
     ========================================================= */

  return (
    <main className="verify-page">
      {/* =====================================================
          LEFT SIDE
          ===================================================== */}

      <section className="verify-left">
        <div className="left-content">
          {/* BRAND TITLE */}

          <p className="brand-title">AI Resume Builder and Screening system</p>

          {/* MAIN HEADING */}

          <h1>
            Recruitment, Reimagined with AI
            <br />
            Screen candidates faster.
          </h1>

          {/* ILLUSTRATION */}

          <div className="illustration-wrapper">
            <img
              src={leftImage}
              alt="AI recruitment illustration"
              className="left-illustration"
            />
          </div>

          {/* QUOTE */}

          <img src={quoteImage} alt="Success quote" className="quote-image" />
        </div>
      </section>

      {/* =====================================================
          RIGHT SIDE
          ===================================================== */}

      <section className="verify-right">
        <div className="verify-card">
          {/* VERIFY TITLE */}

          <h2>Verify Your Mail</h2>

          {/* DESCRIPTION */}

          <p className="verify-description">
            We've sent a 6-digit OTP to
            <br />
            <span>jhon.doe521@gmail.com</span>
            <br />
            Enter the code below to continue
          </p>

          {/* =================================================
              OTP FORM
              ================================================= */}

          <form onSubmit={handleSubmit}>
            {/* OTP INPUTS */}

            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(event.target.value, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            {/* =================================================
                SUCCESS MESSAGE
                ================================================= */}

            {successMessage && (
              <p className="success-message">✓ {successMessage}</p>
            )}

            {/* =================================================
                RESEND OTP
                ================================================= */}

            <p className="resend-text">
              Didn't receive the code?{" "}
              <button
                type="button"
                className="resend-button"
                onClick={handleResendOtp}
                disabled={timeLeft > 0}
              >
                resend OTP
              </button>
              {timeLeft > 0 && <span>({formatTime(timeLeft)})</span>}
            </p>

            {/* =================================================
                VERIFY BUTTON
                ================================================= */}

            <button type="submit" className="verify-button">
              Verify&nbsp; &amp; continue
            </button>
          </form>

          {/* =================================================
              BACK TO LOGIN
              ================================================= */}

          <button
            type="button"
            className="back-login"
            onClick={handleBackToLogin}
          >
            <img src={backArrow} alt="" />

            <span>Back to Login</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default VerifyEmail;

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

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // IMPORTANT: timer starts at 0
  const [timeLeft, setTimeLeft] = useState(0);

  const [successMessage, setSuccessMessage] = useState("");

  /* =========================================
     TIMER
  ========================================= */

  useEffect(() => {
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

    return () => clearInterval(timer);
  }, [timeLeft]);

  /* =========================================
     FORMAT TIMER
  ========================================= */

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  /* =========================================
     OTP INPUT
  ========================================= */

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    setSuccessMessage("");

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  /* =========================================
     BACKSPACE
  ========================================= */

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  /* =========================================
     VERIFY OTP
  ========================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    /* CORRECT OTP */

    if (enteredOtp === CORRECT_OTP) {
      setSuccessMessage("OTP verified successfully!");
      return;
    }

    /* WRONG OTP */

    navigate("/otp-verification", {
      state: {
        enteredOtp: enteredOtp,
      },
    });
  };

  /* =========================================
     RESEND OTP
  ========================================= */

  const handleResendOtp = () => {
    // If timer is already running
    if (timeLeft > 0) {
      return;
    }

    // User sees popup first
    alert("A new OTP has been sent to your email.");

    // Clear previous OTP
    setOtp(["", "", "", "", "", ""]);

    setSuccessMessage("");

    // Start timer ONLY after clicking resend
    setTimeLeft(INITIAL_TIME);

    // Focus first OTP box
    setTimeout(() => {
      document.getElementById("otp-0")?.focus();
    }, 100);
  };

  /* =========================================
     BACK TO LOGIN
  ========================================= */

  const handleBackToLogin = () => {
    navigate("/Recruiter-login");
  };

  return (
    <main className="verify-page">
      {/* LEFT SIDE */}

      <section className="verify-left">
        <div className="left-content">
          <p className="brand-title">AI Resume Builder and Screening system</p>

          <h1>
            Recruitment, Reimagined with AI
            <br />
            Screen candidates faster.
          </h1>

          <div className="illustration-wrapper">
            <img
              src={leftImage}
              alt="AI recruitment illustration"
              className="left-illustration"
            />
          </div>

          <img src={quoteImage} alt="Success quote" className="quote-image" />
        </div>
      </section>

      {/* RIGHT SIDE */}

      <section className="verify-right">
        <div className="verify-card">
          <h2>Verify Your Mail</h2>

          <p className="verify-description">
            We've sent a 6-digit OTP to
            <br />
            <span>jhon.doe521@gmail.com</span>
            <br />
            Enter the code below to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(event) => handleChange(event.target.value, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                />
              ))}
            </div>

            {/* SUCCESS MESSAGE */}

            {successMessage && (
              <p className="success-message">✓ {successMessage}</p>
            )}

            {/* RESEND OTP */}

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

            {/* VERIFY */}

            <button type="submit" className="verify-button">
              Verify&nbsp; &amp; continue
            </button>
          </form>

          {/* BACK TO LOGIN */}

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

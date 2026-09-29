import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verified from "../assets/verify.png";
import backIcon from "../assets/arrow.png";
import "./EmailVerification.css";
 
const EmailVerification = () => {
  const navigate = useNavigate();
 
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [seconds, setSeconds] = useState(40);
  const [error, setError] = useState("");
 
  const inputRefs = useRef([]);
  const DEFAULT_OTP = "829749";
 
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);
 
  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
 
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
 
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    setError("");
 
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
 
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
 
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
 
    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }
 
    if (enteredOtp === DEFAULT_OTP) {
      setError("");
      navigate();
    } else {
      setError(" Invalid OTP. Please check and try again.");
      navigate();
    }
  };
 
  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setSeconds(40);
    setError("");
    inputRefs.current[0]?.focus();
  };
 
  return (
    <div className="email-verification-page">
      {/* ================= LEFT SECTION ================= */}
      <section className="verification-left">
        <div className="ev-left-content">
          <p className="ev-brand-title">
            AI Resume Builder and Screening system
          </p>
 
          <h1 className="ev-left-heading">Recruitment, Reimagined with AI</h1>
          <p className="ev-left-subheading">
            Create impactful resumes and connect talent with the right
            opportunities.
          </p>
 
          <div className="ev-illustration-wrap">
            <img
              src={verified}
              alt="OTP Verification"
              className="verification-illustration"
            />
          </div>
 
          <div className="ev-quote-box">
            <p>
              "The best candidate on paper might be the worst bet for tomorrow."
            </p>
            <span>— Dhruv Mukherjee</span>
          </div>
        </div>
      </section>
 
      {/* ================= RIGHT SECTION ================= */}
      <section className="verification-right">
        <div className="verification-container">
          <h2>Verify Your Mail</h2>
 
          <p className="verification-text">
            We've sent a 6-digit OTP to
            <br />
            <strong>jhon.doe521@gmail.com</strong>
            <br />
            Enter the code below to continue
          </p>
 
          <form onSubmit={handleVerifyOtp}>
            <div className="ev-otp-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  className={`ev-otp-input ${error ? "ev-input-error" : ""}`}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  inputMode="numeric"
                />
              ))}
            </div>
 
            {error && <p className="ev-error-msg">{error}</p>}
 
            <p className="ev-resend-text">
              Didn't receive the code?{" "}
              {seconds > 0 ? (
                <span className="ev-timer-highlight">
                  resend OTP({formatTime(seconds)})
                </span>
              ) : (
                <button
                  type="button"
                  className="ev-resend-link"
                  onClick={handleResend}
                >
                  resend OTP
                </button>
              )}
            </p>
 
            <button type="submit" className="verify-button">
              Verify & Continue
            </button>
          </form>
 
          {/* Back to Login Button */}
        <div
  className="ev-back-container"
  onClick={() => navigate("/login")}
>
  <img src={backIcon} alt="back" className="ev-back-icon" />
  <span>Back to Login</span>
</div>
        </div>
      </section>
    </div>
  );
};
 
export default EmailVerification;
 
 
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CanOtpVerification.css";
import verified from "../assets/otp.png";
import lockIcon from "../assets/lock-icon.png";
import backIcon from "../assets/arrow.png";

const CanOtpVerification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
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
      setError("Invalid OTP. Please check and try again.");
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setSeconds(40);
    setError("");
    inputRefs.current[0]?.focus();
    console.log("OTP Resent successfully!");
  };

  return (
    <div className="otpv-page">
      {/* Left Section */}
      <div className="otp-left">
        <div className="otpv-brand-header">
          <p className="otpv-brand-tag">
            AI Resume Builder and Screening system
          </p>
          <h1 className="otpv-brand-heading">
            Recruitment, Reimagined with AI
          </h1>
          <p className="otpv-brand-subtext">
            Create impactful resumes and connect talent with the right
            opportunities.
          </p>
        </div>

        <div className="otpv-illustration-wrap">
          <img src={verified} alt="Verify Email" />
        </div>

        <div className="otpv-quote-box">
          <p>
            "Real leaders must be ready to sacrifice all for the freedom of
            their people."
          </p>
          <span>— Nelson Mandela</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="otp-right">
        <div className="otp-content">
          <div className="lock-circle">
            <img src={lockIcon} alt="Lock" className="lock-icon" />
          </div>

          <h4>The OTP you entered is incorrect</h4>
          <p>Please try again.</p>

          <form
            onSubmit={handleVerifyOtp}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  className={error ? "otp-error" : ""}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            {error && <div className="error-text">{error}</div>}

            <div className="resend">
              {seconds > 0 ? (
                <span>Re-send OTP in ({formatTime(seconds)})</span>
              ) : (
                <>
                  Re-send OTP?{" "}
                  <span
                    onClick={handleResend}
                    style={{
                      cursor: "pointer",
                      color: "#2563eb",
                      fontWeight: "600",
                    }}
                  >
                    Click here
                  </span>
                </>
              )}
            </div>

            <button type="submit" className="verify-btn">
              Verify & Continue
            </button>
          </form>

          <div className="back-btn" onClick={() => navigate("/Loginpage")}>
            <span>
              <img src={backIcon} alt="back" className="btn-icon-img" />
              Back to Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanOtpVerification;

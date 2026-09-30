import { useState } from "react";
import "./Loginpage.css";

import adminIllustration from "../assets/Adminimage.png";
import emailIcon from "../assets/ic_outline-email.png";
import passwordLockIcon from "../assets/lock-icon.png";
import passwordEyeIcon from "../assets/close-eye.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/skill-icons_linkedin.png";

function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      alert("Please enter your Admin Email.");
      return;
    }

    if (!formData.password) {
      alert("Please enter your Password.");
      return;
    }

    alert("Admin Login Successful");
  };

  return (
    <div className="admin-page">
      <main className="admin-container">
        {/* ================= LEFT SIDE ================= */}

        <section className="admin-left">
          <div className="admin-left-content">
            <div className="admin-brand">
              AI Resume Builder and Screening system
            </div>

            <h1 className="admin-left-title">
              resume building and intelligent
              <br />
              candidate screening.
            </h1>
          </div>

          <img
            src={adminIllustration}
            alt="Admin login illustration"
            className="admin-illustration"
          />

          <div className="admin-quote">
            “Believe you can and you’re halfway there.” — Theodore Roosevelt
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}

        <section className="admin-right">
          <div className="admin-auth">
            {/* LOCK */}

            <div className="admin-lock">
              <img src={passwordLockIcon} alt="Security" />
            </div>

            {/* TITLE */}

            <h2 className="admin-title">Admin Login</h2>

            {/* DESCRIPTION */}

            <p className="admin-description">
              Welcome Back! Access Your dashboard
            </p>

            {/* FORM */}

            <form className="admin-form" onSubmit={handleSubmit}>
              {/* EMAIL */}

              <label htmlFor="adminEmail">Admin Email</label>

              <div className="admin-input-wrapper">
                <img src={emailIcon} alt="" className="admin-input-icon" />

                <input
                  id="adminEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Admin Email"
                  autoComplete="email"
                />
              </div>

              {/* PASSWORD */}

              <label htmlFor="adminPassword">Password</label>

              <div className="admin-input-wrapper password-wrapper">
                <img
                  src={passwordLockIcon}
                  alt=""
                  className="admin-input-icon password-icon"
                />

                <input
                  id="adminPassword"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="admin-eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img src={passwordEyeIcon} alt="" />
                </button>
              </div>

              {/* OPTIONS */}

              <div className="admin-options">
                <label className="admin-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />

                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="admin-forgot"
                  onClick={() =>
                    alert("Forgot password feature will be connected here.")
                  }
                >
                  Forgot Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}

              <button type="submit" className="admin-login-button">
                Signup
              </button>
            </form>

            {/* OR */}

            <div className="admin-or">
              <span></span>

              <p>OR</p>

              <span></span>
            </div>

            {/* CONTINUE WITH */}

            <div className="admin-continue">CONTINUE WITH</div>

            {/* SOCIAL */}

            <div className="admin-social">
              <button type="button" className="admin-social-button">
                <img src={googleIcon} alt="Google" />
              </button>

              <button type="button" className="admin-social-button">
                <img src={linkedinIcon} alt="LinkedIn" />
              </button>
            </div>

            {/* HELP */}

            <div className="admin-help">
              <span>Need help &</span>

              <span className="admin-contact">Contact Admin</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Loginpage;

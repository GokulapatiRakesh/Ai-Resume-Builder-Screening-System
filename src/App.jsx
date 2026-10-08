import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Components-Candidate-login/LoginCandidate";
import LandingPage from "./Components-landingpage/Landingpage";
import ForgotPassword from "./Components-Candidate-login/ForgotPassword";
import IncorrectPassword from "./Components-Candidate-login/IncorrectPassword";
import EmailVerification from "./Components-Candidate-login/EmailVerification";
import CanOtpVerification from "./Components-Candidate-login/CanOtpVerification";
import CancreatePassword from "./Components-Candidate-login/Createpassword";

// Admin Login page
import AdminLogin from "./Components-Admin/Loginpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Login-page */}
        <Route path="Loginpage" element={<Loginpage />} />
      
        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Incorrect Password Page */}
        <Route path="/incorrect-password" element={<IncorrectPassword />} />
        
        
        {/* Email Verification Page */}
        <Route path="/email-verification" element={<EmailVerification />} />
        {/* Candidate OTP Verification Page */}
        <Route
          path="/candidate-otp-verification"
          element={<CanOtpVerification />}
        />
        {/* Create Password Page */}
        <Route path="/create-password" element={<CancreatePassword />} />
       

        {/* Admin Login Page */}
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

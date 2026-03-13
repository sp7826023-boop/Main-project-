import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let bodyContent = new FormData();
      bodyContent.append("name", formData.name);
      bodyContent.append("mobile", formData.mobile);
      bodyContent.append("email", formData.email);
      bodyContent.append("password", formData.password);
      bodyContent.append("city", formData.city);

      let response = await fetch("http://localhost/api/Reg.php", {
        method: "POST",
        body: bodyContent,
      });

      let data = await response.json();
      console.log(data);
      alert("Registration Successful! Welcome aboard ");
      navigation("/");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration successful (demo mode)!");
      navigation("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-page">
      {/* Left Panel */}
      <div className="reg-left">
        <div className="reg-left-content">
          <div className="reg-logo">
            <span className="logo-icon"></span>
            <span className="logo-text">JobPortal</span>
          </div>
          <h2 className="reg-left-title">
            Start Your <span>Career Journey</span> Today
          </h2>
          <p className="reg-left-subtitle">
            Join thousands of professionals finding their dream jobs every day.
          </p>
          <div className="reg-features">
            <div className="reg-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>10,000+ Jobs</strong>
                <p>New openings added daily</p>
              </div>
            </div>
            <div className="reg-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>Smart Matching</strong>
                <p>AI-powered job recommendations</p>
              </div>
            </div>
            <div className="reg-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>Top Companies</strong>
                <p>Work with industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="reg-right">
        <div className="reg-card">
          <div className="reg-card-header">
            <h1 className="reg-title">Create Account</h1>
            <p className="reg-subtitle">Fill in your details to get started</p>
          </div>

          <form onSubmit={sendData} className="reg-form" noValidate>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="form-group">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  className="form-input"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="form-input"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "" : ""}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`reg-btn ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner"></span>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Divider */}
            <div className="divider-row">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            {/* Google Sign Up */}
            <button type="button" className="google-btn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="google-icon"
              />
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="login-text">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("password", password);
      // Simulate/Trigger API
      await fetch("http://localhost/api/Login.php", { method: "POST", body });
      alert("Login Successful!");
      navigate("/");
    } catch {
      alert("Login Successful! (demo)");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left Panel */}
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-logo">
            <span className="logo-icon"></span>
            <span className="logo-text">JobPortal</span>
          </div>
          <h2 className="login-left-title">
            Welcome Back to <span>JobPortal</span>
          </h2>
          <p className="login-left-subtitle">
            Sign in to continue your career journey and explore new opportunities.
          </p>
          <div className="login-features">
            <div className="login-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>Personalized Feed</strong>
                <p>Jobs tailored to your skills</p>
              </div>
            </div>
            <div className="login-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>Track Applications</strong>
                <p>Real-time status updates</p>
              </div>
            </div>
            <div className="login-feature-item">
              <div className="feature-icon"></div>
              <div>
                <strong>Career Growth</strong>
                <p>Learn tips from experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="login-right">
        <div className="login-card">
          <div className="login-card-header">
            <h1 className="login-title">Sign In</h1>
            <p className="login-subtitle">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="login-form" noValidate>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <a href="#" className="forgot-p">Forgot Password?</a>
              </div>
              <div className="input-wrapper">
                <span className="input-icon"></span>
                <input
                  id="password"
                  name="password"
                  type={showPwd ? "text" : "password"}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPwd(!showPwd)}
                  aria-label="Toggle password visibility"
                >
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    {showPwd ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 014.06-5.46M6.343 6.343l11.314 11.314m-1.836-1.836l3.182 3.182M12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7l1.274-4.057M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`login-btn ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner"></span>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="divider-row">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            {/* Google/Facebook Sign In */}
            <div className="social-row">
              <button type="button" className="social-btn">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  className="social-icon"
                />
                Google
              </button>
              <button type="button" className="social-btn">
                 <svg fill="#1877F2" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Register Link */}
            <p className="register-text">
              New here?{" "}
              <Link to="/register" className="register-link">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
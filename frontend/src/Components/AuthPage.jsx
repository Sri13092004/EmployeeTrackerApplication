import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (isSignIn && role === "admin") {
      navigate("/Admin/LandingPage");
    } else {
      navigate("/User/Dashboard")
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form">
        <h2>{isSignIn ? "Sign in" : "Sign up"}</h2>

        {isSignIn && (
          <div className="auth-role-switch">
            <button
              className={`auth-role-button ${role === "admin" ? "active" : ""}`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
            <button
              className={`auth-role-button ${role === "employee" ? "active" : ""}`}
              onClick={() => setRole("employee")}
            >
              User
            </button>
          </div>
        )}

        <form onSubmit={handleSignIn}>
          <label className="auth-input-label">Enter Username</label>
          <input type="text" placeholder="Enter username" className="auth-input" required />

          {!isSignIn && (
            <>
              <label className="auth-input-label">Enter Email</label>
              <input type="email" placeholder="Enter email" className="auth-input" required />
            </>
          )}

          <label className="auth-input-label">Enter Password</label>
          <input type="password" placeholder="Enter Password" className="auth-input" required />

          {!isSignIn && (
            <>
              <label className="auth-input-label">Confirm Password</label>
              <input type="password" placeholder="Confirm password" className="auth-input" required />
            </>
          )}

          <button type="submit" className="auth-button">{isSignIn ? "Sign in" : "Sign up"}</button>
        </form>

        <div className="auth-toggle-container">
          {isSignIn ? (
            <p>Don't have an account? <span className="auth-link" onClick={() => setIsSignIn(false)}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span className="auth-link" onClick={() => setIsSignIn(true)}>Sign in</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;




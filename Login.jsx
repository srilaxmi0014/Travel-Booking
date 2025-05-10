import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
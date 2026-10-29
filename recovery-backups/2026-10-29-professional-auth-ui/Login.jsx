
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Frontend testing only; backend authentication is not connected.
    setError("Login form validated! Backend authentication is not connected yet.");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome to BookSwap</h1>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="login-options">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {error && <p className="login-message" role="status">{error}</p>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

        <button
          type="button"
          className="back-home"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;

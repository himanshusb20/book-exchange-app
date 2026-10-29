import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email.trim() || !password) {
      setMessage({ type: "error", text: "Please enter your email and password." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: "info",
        text: "Form validated successfully. Real login is unavailable because backend authentication is not connected yet.",
      });
    }, 500);
  };

  const clearMessage = () => {
    setMessage({ type: "", text: "" });
  };

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <button type="button" className="login-brand" onClick={() => navigate("/")}>
          <span aria-hidden="true">📚</span> BookSwap
        </button>

        <div className="login-heading">
          <h1 id="login-title">Welcome back to BookSwap</h1>
          <p>Log in to continue your book-sharing journey.</p>
        </div>

        <form className="login-form" onSubmit={handleLogin} noValidate>
          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearMessage();
              }}
              autoComplete="email"
              aria-describedby={message.type === "error" ? "login-message" : undefined}
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <div className="login-password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  clearMessage();
                }}
                autoComplete="current-password"
                aria-describedby={message.type === "error" ? "login-message" : undefined}
              />
              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

              <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <Link className="login-forgot-button" to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          {message.text && (
            <p
              id="login-message"
              className={`login-message ${message.type}`}
              role={message.type === "error" ? "alert" : "status"}
            >
              {message.text}
            </p>
          )}

          <button type="submit" className="login-submit-button" disabled={isLoading}>
            {isLoading ? "Signing in…" : "Log in"}
          </button>
        </form>

        <p className="login-footer-link">
          Don&apos;t have an account? <Link to="/register">Create account</Link>
        </p>

        <button type="button" className="login-back-home" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </section>
    </main>
  );
};

export default Login;

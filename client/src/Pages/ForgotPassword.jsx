import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setMessage({
      type: "info",
      text: "Password recovery is unavailable because an email service and backend are not connected yet.",
    });
  };

  return (
    <main className="forgot-password-page">
      <section className="forgot-password-card" aria-labelledby="forgot-password-title">
        <button type="button" className="forgot-password-brand" onClick={() => navigate("/")}>
          <span aria-hidden="true">📚</span> BookSwap
        </button>

        <div className="forgot-password-heading">
          <h1 id="forgot-password-title">Forgot your password?</h1>
          <p>Enter your email address to request password recovery.</p>
        </div>

        <form className="forgot-password-form" onSubmit={handleSubmit} noValidate>
          <div className="forgot-password-field">
            <label htmlFor="forgotEmail">Email address</label>
            <input
              id="forgotEmail"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage({ type: "", text: "" });
              }}
              autoComplete="email"
              aria-describedby={message.type === "error" ? "forgot-password-message" : undefined}
            />
          </div>

          {message.text && (
            <p
              id="forgot-password-message"
              className={`forgot-password-message ${message.type}`}
              role={message.type === "error" ? "alert" : "status"}
            >
              {message.text}
            </p>
          )}

          <button type="submit" className="forgot-password-submit-button">
            Submit
          </button>
        </form>

        <Link className="forgot-password-back-link" to="/login">Return to Login</Link>
      </section>
    </main>
  );
};

export default ForgotPassword;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fullName, email, phoneNumber, password, confirmPassword } = formData;

    if (!fullName.trim() || !email.trim() || !phoneNumber.trim() || !password || !confirmPassword) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    const digitsOnly = phoneNumber.replace(/\D/g, "");
    if (!/^\+?[0-9\s()-]+$/.test(phoneNumber) || digitsOnly.length < 10 || digitsOnly.length > 15) {
      setMessage({ type: "error", text: "Please enter a valid phone number with 10 to 15 digits." });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Password and confirm password must match." });
      return;
    }

    setMessage({
      type: "success",
      text: "Form validated successfully. Frontend testing only; no account has been created.",
    });
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <button type="button" className="register-brand" onClick={() => navigate("/")}>
          📚 BookSwap
        </button>

        <h1>Create your BookSwap account</h1>
        <p className="register-subtitle">
          Join fellow students to buy, sell and exchange books.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
          />

          <label htmlFor="registerEmail">Email</label>
          <input
            id="registerEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            autoComplete="tel"
          />

          <label htmlFor="registerPassword">Password</label>
          <div className="register-password-wrapper">
            <input
              id="registerPassword"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="register-toggle-password"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="register-password-wrapper">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="register-toggle-password"
              onClick={() => setShowConfirmPassword((current) => !current)}
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {message.text && (
            <p className={`register-message ${message.type}`} role={message.type === "error" ? "alert" : "status"}>
              {message.text}
            </p>
          )}

          <button type="submit" className="register-submit-button">
            Create Account
          </button>
        </form>

        <p className="register-login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <button type="button" className="register-back-home" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Register;

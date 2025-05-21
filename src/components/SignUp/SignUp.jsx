import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import "./SignUp.css";

// Define Yup schema

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username too short")
    .max(15, "Username too long")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change.
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(form, { abortEarly: false });
      setForm({ username: "", email: "", password: "" });
      setErrors({});
    } catch (err) {
      // Map Yup errors to object
      const newErrors = {};
      if (err.inner) {
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

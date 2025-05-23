import React from "react";
import { useState } from "react";
import * as Yup from "yup";

// Define Yup schema

const schema = Yup.object().shape({
  password: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*#?&]/, "Must contain a special character"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});

const PasswordReset = () => {
  const [passKey, setPassKey] = useState({
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setPassKey({ ...passKey, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(passKey, { abortEarly: false });
      setPassKey({ password: "", confirmpassword: "" });
      setError({});
    } catch (err) {
      // Map Yup errors to object
      const newErrors = {};
      if (err.inner) {
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
      }
      setError(newErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            value={passKey.password}
            onChange={handleChange}
          />
          {error.password && (
            <div style={{ color: "red" }}>{error.password}</div>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="password">Re-enter Your Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={passKey.confirmpassword}
            onChange={handleChange}
          />
          {error.confirmpassword && (
            <div style={{ color: "red" }}>{error.confirmpassword}</div>
          )}
        </div>
        <div className="mb-2">
          <button className="border rounded" type="submit">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;

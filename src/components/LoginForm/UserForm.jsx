import React from "react";

import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateUsername = () => {
    console.log("validateUsername called");
    // username validation //
    if (!username) {
      return "Username is required.";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters.";
    }
    if (username.length > 15) {
      return "Username must be under 15 characters.";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Only letters, numbers, and underscores allowed.";
    }

    return "";
  };

  const validatePassword = () => {
    // password validation //
    if (!password) {
      return "Password is required.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return "";
  };

  const validateTerm = () => {
    // checked validation //
    if (!checked) {
      return "You must accept the terms.";
    }
    return "";
  };

  const validation = () => {
    // username validation //
    if (!username) {
      return "Username is required.";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters.";
    }
    if (username.length > 15) {
      return "Username must be under 15 characters.";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Only letters, numbers, and underscores allowed.";
    }

    // password validation //
    if (!password) {
      return "Password is required.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    // checked validation //
    if (!checked) {
      return "You must accept the terms.";
    }
    return "";
  };

  //Handle form submit //
  const handleSubmit = (e) => {
    e.preventDefault();
    // const validationError = validation();
    // if (validationError) {
    //   setError(validationError);
    //   setSuccess("");
    // } else {
    //   setError("");
    //   setSuccess("Form submitted successfully!");
    // }
  };

  

  const handleBlurPassword = () => {
    return;
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <div className="mb-2">
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onBlur={() => {
              const error = validateUsername();
              setError(error);
            }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={() => {
              const error = validatePassword();
              setError(error);
            }}
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="checked"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            Accept Terms & Conditions
          </label>
        </div>
        <div>
          {error && <p className="field-error">{error}</p>}
          {success && <p className="field-success">{success}</p>}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

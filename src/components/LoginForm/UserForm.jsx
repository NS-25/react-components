import React from "react";
import { use } from "react";
import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter Username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            name="checked"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Accept Terms & Conditions
        </label>
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

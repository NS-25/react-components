import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import "./PasswordReset.css";
// Define Yup schema

const schema = Yup.object().shape({
  password: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*#?&]/, "Must contain a special character")
    .matches(/^\S*$/, "No spaces allowed"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const PasswordReset = () => {
  const [passKey, setPassKey] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  // password reset hide and show state

  const handleChange = (e) => {
    setPassKey({ ...passKey, [e.target.name]: e.target.value });
    console.log("setPassKey : ", { [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
    // Reset error for the field being changed
    // setError((prev) => ({ ...prev, [e.target.name]: "" }));
    console.log("handleChange error : ", error);
    console.log("handleChange error : ", { ...error, [e.target.name]: "" });
  };

  // handle blur state
  const handleBlur = async (e) => {
    console.log("handleBlur : ", e);
    const { name, value } = e.target;
    console.log(name, value);

    // // Prepare the object to validate: only the field being blurred
    let fieldToValidate = { [name]: value };

    if (name === "password" && !passKey.confirmPassword) {
      // If password is being validated and confirmPassword is empty,
      // we want to validate only the password field
      fieldToValidate = { password: value };
      try {
        await schema.fields.password.validate(value);
        setError((prev) => ({ ...prev, [name]: "" }));
      } catch (err) {
        console.log("error : ", err);
        setError((prev) => ({ ...prev, [name]: err.message }));
      }
    } else if (name === "confirmPassword" && passKey.password) {
      // If confirmPassword is being validated, we want to validate both fields
      fieldToValidate = { ...passKey, [name]: value };

      try {
        const res = await schema.validate(fieldToValidate);
        setError((prev) => ({ ...prev, [name]: "" }));
      } catch (err) {
        console.log("error : ", err);
        setError((prev) => ({ ...prev, [name]: err.message }));
      }
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(passKey, { abortEarly: false });
      setPassKey({ password: "", confirmPassword: "" });
      setError({});
    } catch (err) {
      console.log("err : ", err);
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
    <div className="reset-wrapper">
      <form onSubmit={handleSubmit} className="reset-form">
        <div className="mb-2">
          <label htmlFor="password" className="reset-label">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={passKey.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.password && (
            <div style={{ color: "red" }}>{error.password}</div>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="reset-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passKey.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.confirmPassword && (
            <div style={{ color: "red" }}>{error.confirmPassword}</div>
          )}
        </div>
        <div className="mb-2">
          <button className="reset-btn" type="submit">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;

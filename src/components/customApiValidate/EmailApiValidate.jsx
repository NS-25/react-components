import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import "./EmailApiValidate.css";

// Add a custom email method to Yup
Yup.addMethod(Yup.string, "email", function validateEmail(message) {
  // This regex requires domain extension
  const myEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return this.matches(myEmailRegex, {
    message:
      message || "Please enter a valid email address with domain extension",
    name: "email",
    excludeEmptyString: true,
  });
});

Yup.addMethod(Yup.string, "isCompanyEmail", function validateEmail(message) {
  // This regex requires domain extension
  const myEmailRegex = /^[a-zA-Z0-9._%+-]+@acorntech\.us$/;

  return this.matches(myEmailRegex, {
    message:
      message || "Please enter a valid company email (e.g., user@acorntech.us)",
    name: "isCompanyEmail",
    excludeEmptyString: true,
  });
});

// sann@acorntech.us
// @acorntech.us

const schema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .isCompanyEmail(),
  // .test(
  //   "isCompanyEmail",
  //   "Please enter a valid company email (e.g., user@acorntech.us)",
  //   (value) => {
  //     if (!value) return false;
  //     return value.endsWith("@acorntech.us");
  //   }
  // ),
});
const EmailValidate = () => {
  const [emailField, setEmailField] = useState({ email: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setEmailField({ ...emailField, email: e.target.value });
    // setError({ ...error, [e.target.name]: "" });
  };
  console.log("state error:  ", error);

  const handleBlur = async (e) => {
    const { name, value } = e.target;
    // console.log(" name :", name);
    try {
      await schema.fields.email.validate(value);
      setError((prev) => ({ ...prev, email: "" }));
    } catch (err) {
      console.log("err :", err.message);
      setError((prev) => ({ ...prev, email: err.message }));
    }
  };
  // console.log("error from state : ", error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(emailField, { abortEarly: false });
      setEmailField({ email: "" });
      setError({});
    } catch (err) {}
  };

  console.log("emailField : ", emailField);

  return (
    <div className="form-wrapper">
      <form className="form-field" onSubmit={handleSubmit}>
        <label htmlFor="email" className="email-label">
          Email*
        </label>
        <input
          type="email"
          name="email"
          value={emailField.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border"
        />
        {error.email && <div>{error.email}</div>}
        <div>
          <button className="email-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailValidate;

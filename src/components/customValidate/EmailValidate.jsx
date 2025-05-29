import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import "./EmailValidate.css";

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
      "Email must contain special character"
    ),
});
const EmailValidate = () => {
  const [emailField, setEmailField] = useState({ email: "" });
  const [error, setError] = useState({ email: "this is error message" });

  const handleChange = (e) => {
    setEmailField({ ...emailField, [e.target.name]: e.target.value });
    // setError({ ...error, [e.target.name]: "" });
  };
  console.log("state error:  ", error);

  const handleBlur = async (e) => {
    const { name, value } = e.target;
    // console.log(" name :", name);
    try {
      await schema.fields[name].validate(value);
      setError((prev) => ({ ...prev, email: "" }));
    } catch (err) {
      console.log("err :", err.message);
      setError((prev) => ({ ...prev, email: err.message }));
    }
  };
  console.log("error from state : ", error);
  const handleSubmit = async (e) => {};

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

import React from "react";

import { useState } from "react";

import { useFormContext } from "../context/FormContext";

const Form = () => {
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const { updateFormData } = useFormContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(inputData); // push data to global context
  };

  // const handleClick = () => {
  //   alert(`${inputData.name} ${inputData.email} `);
  // };

  // const handleFocus = (e) => {
  //   console.log(e);
  // };
  // const handleBlur = (e) => {
  //   console.log(e);
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="border ">
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={inputData.name}
            onChange={handleChange}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            className="border"
          />
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputData.email}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div>
          <button
            type="submit"
            className="border rounded"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

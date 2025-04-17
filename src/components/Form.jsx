import React from "react";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    alert(`${formData.name} ${formData.email} `);
  };

  const handleFocus = (e) => {
    console.log(e);
  };
    const handleBlur = (e) => {
       console.log(e);
  };


  return (
    <div className="container">
      <form>
        <div className="mb-2">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="border"
          />
        </div>
        <div>
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div>
          <button className="border rounded" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React from "react";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <Form>
        <div className="mb-2">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </Form>
    </div>
  );
};

export default Form;

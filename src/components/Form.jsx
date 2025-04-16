import React from "react";

const Form = () => {
  return (
    <div className="container">
      <Form>
        <div className="mb-2">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value="name"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value="email"
            placeholder="Enter your email"
          />
        </div>
      </Form>
    </div>
  );
};

export default Form;

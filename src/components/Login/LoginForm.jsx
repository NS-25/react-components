import React from "react";
import { useState } from "react";
const LoginForm = () => {
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
  });

  const FormChange = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <div className="container">
      <form className="border">
        <div className="mb-2">
          <label htmlFor="username">
            <b>Username:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            className="border"
            handleChange={FormChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="border"
            handleChange={FormChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="checkbox">
            <input type="checkbox" name="remember" className="border" />
            Remember
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="border rounded"
            onSubmit={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

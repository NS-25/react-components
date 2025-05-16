import React from "react";

const LoginForm = () => {
  return (
    <div className="container">
      <form className="border">
        <div className="mb-2">
          <label htmlFor="username">
            <b>Username:</b>
          </label>
          <input type="text" placeholder="Enter Username" name="username" />
        </div>
        <div className="mb-2">
          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input type="password" placeholder="Enter Password" name="password" />
        </div>
        <div className="mb-2">
          <label htmlFor="checkbox">
            <input type="checkbox" name="remember" />
            Remember
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

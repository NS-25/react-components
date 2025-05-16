import React from "react";

const LoginForm = () => {
  return (
    <div className="container">
      <form className="border">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="username" />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="password" />
        <label htmlFor="checkbox">
          <input type="checkbox" checked="checked" name="remember" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

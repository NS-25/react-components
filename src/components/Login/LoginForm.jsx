import React from "react";
import { useState, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
  });

  const [username, setUsername] = useState({
    value: "",
    hasError: false,
    errorMsg: "",
    isDirty: false,
  });

  const [usernameValidity, setUsernameValidity] = useState({});

  const [password, setPassword] = useState({
    value: "",
    hasError: false,
    errorMsg: "",
    isDirty: false,
  });

  const [remember, setRemember] = useState({
    value: false,
    hasError: false,
    errorMsg: "",
    isDirty: false,
  });

  useEffect(() => {
    if (username.isDirty) {
      const validity = isValidUsername(username.value);
      setUsernameValidity(validity);
    }
  }, [username]);

  // const FormChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputData);
  // };

  const isValidUsername = (username) => {
    if (username && (username == "" || username.length < 3)) {
      return {
        value: username,
        isValid: false,
        message: "Username must be at least 3 characters long.",
      };
    }

    if (username && username.includes(" ")) {
      return {
        value: username,
        isValid: false,
        message: "Username must not include space.",
      };
    }

    return {
      value: username,
      isValid: true,
      message: "",
    };
  };

  console.log("username : ", username);
  console.log("usernameValidity : ", usernameValidity);
  // console.log("password : ", password);
  return (
    <div className="login-form-wrapper container">
      <form className="login-form border">
        <div className="mb-2">
          <label htmlFor="username">Username</label>
          <input
            value={username.value}
            type="text"
            placeholder="Enter Username"
            name="username"
            className="border"
            onChange={(e) => {
              const value = e.target.value;
              setUsername({
                ...username,
                value: value,
              });
            }}
            onFocus={(e) => {
              console.log("we focus");
              setUsername({
                isDirty: true,
              });
            }}
            // onBlur={(e) => {
            //   console.log("we focuus");
            //   setUsername({
            //     isDirty: false,
            //   });
            // }}
          />
          {usernameValidity && !usernameValidity.isValid && (
            <span className="field-errror">{usernameValidity.message}</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            value={password.value}
            type="password"
            placeholder="Enter Password"
            name="password"
            className="border"
            onChange={(e) => {
              const value = e.target.value;
              setPassword({
                ...password,
                value: value,
              });
            }}
            onFocus={(e) => {
              console.log("we focuus");
              setPassword({
                isDirty: true,
              });
            }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="checkbox">
            <input
              checked={remember.value}
              type="checkbox"
              name="remember"
              className="border"
              onChange={(e) => {
                setRemember({
                  ...remember,
                  value: !remember.value,
                });
              }}
            />
            Remember
          </label>
        </div>
        <div>
          <button type="submit" className="rounded" onSubmit={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

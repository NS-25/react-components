import React from "react";
import { useState } from "react";

const UserProfile = ({ onSubmit }) => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "default",
  });

  // check validation
  const [errors, setErrors] = useState({}); // where we keep the warning message

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // validation fields

  const validate = () => {
    const newErrors = {};
    if (!userForm.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!userForm.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!userForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\. \S+/.test(userForm.email)) {
      newErrors.email = "Email is not valid";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(userForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={userForm.firstName}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={userForm.lastName}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userForm.email}
            onChange={handleChange}
            className="border"
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={userForm.gender}
            onChange={handleChange}
            className="border"
          >
            <option value="default">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="noAnswer">Not prefer to answer</option>
          </select>
        </div>
        <button type="submit" className="border rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

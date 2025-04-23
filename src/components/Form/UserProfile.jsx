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
    if (userForm.gender === "default") {
      newErrors.gender = "Please select a gender";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    onSubmit(userForm);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(userForm); // only submit if no errors
    }
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
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
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
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
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
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>
        <button type="submit" className="border rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

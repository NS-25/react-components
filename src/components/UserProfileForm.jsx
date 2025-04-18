import React from "react";
import { useState } from "react";

const UserProfileForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleFirstNameChange = (e) => {
    console.log(e.target.value);
    const updatedUserData = {
      ...userData,
      firstName: e.target.value,
    };

    setUserData(updatedUserData);
  };

  console.log("userData : ", userData);

  return (
    <>
      <div className="container mt-4">
        <h1>User Profile</h1>
        <form className="border">
          {/* firstname and lastname */}
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="border "
              onChange={handleFirstNameChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="border ml-2"
            />
          </div>
          {/* email portion */}
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border"
            />
          </div>
          {/* phone number */}
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="(000)-000-0000"
              className="border"
            />
          </div>
          {/* Gender portion */}
          <div className="mb-4 mt-2">
            <label htmlFor="gender">
              Gender:
              <label />
              <select name="gender" className="border">
                <option value=" "></option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">Other</option>
                <option value="not prefer to answer">
                  Not to prefer to answer
                </option>
              </select>
            </label>
          </div>
          {/* Date of Birth */}
          <div className="mt-2">
            <label htmlFor="date">DOB:</label>
            <input type="date" name="birthday" className="border" />
          </div>
          {/* Submit button portion */}
        </form>
      </div>
    </>
  );
};

export default UserProfileForm;

import React from "react";
import { useState } from "react";

const UserProfile = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "default",
  });
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" />
        </div>
      </form>
    </div>
  );
};

export default UserProfile;

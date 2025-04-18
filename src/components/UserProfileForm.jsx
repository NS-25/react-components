import React from "react";

const UserProfileForm = () => {
  return (
    <>
      <div className="container mt-4">
        <h1>User Profile</h1>
        <form className="border">
          {/* firstname and lastname */}
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="border"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="border"
            />
          </div>
          {/* email portion */}
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border"
            />
          </div>
          {/* phone number */}
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(000)-000-0000"
              className="border"
            />
          </div>
          {/* Gender portion */}
          <div className="mb-4">
            <label htmlFor="gender">
              Gender
              <label />
              <select name="gender" className="border">
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">Other</option>
                <option value="not prefer to answer">
                  Not to prefer to answer
                </option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfileForm;

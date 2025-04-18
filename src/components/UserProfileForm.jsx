import React from "react";

const UserProfileForm = () => {
  return (
    <>
      <div className="container">
        <h1>User Profile</h1>
        <form className="border">
          {/* firstname and lastname */}
          <div className="mb-4">
            <label className="form-label">Name</label>
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
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border"
            />
          </div>
          
        </form>
      </div>
    </>
  );
};

export default UserProfileForm;

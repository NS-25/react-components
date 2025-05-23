import React from "react";

const passwordReset = () => {
  return (
    <div>
      <form>
        <div className="mb-2">
          <label htmlFor="password">New Password</label>
          <input type="password" value={password} />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Re-enter Your Password</label>
          <input type="password" value={password} />
        </div>
        <div className="mb-2">
          <button className="border rounded">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default passwordReset;

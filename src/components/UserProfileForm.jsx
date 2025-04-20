import React from "react";
import { useState } from "react";
import RadioGroup from "./RadioGroup/RadioGroup";
import Select from "./Select/Select";

const UserProfileForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    grade: "1",
  });

  const [isOver, setIsOver] = useState(false);

  console.log("userData ", userData);

  const handleFirstNameChange = (e) => {
    // console.log(e.target.value);
    const updatedUserData = {
      ...userData,
      firstName: e.target.value,
    };

    setUserData(updatedUserData);
  };

  const handleLastNameChange = (e) => {
    // console.log(e.target.value);

    const updatedUserData = {
      ...userData,
      lastName: e.target.value,
    };
    setUserData(updatedUserData);
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);

    const updatedUserData = {
      ...userData,
      email: e.target.value,
    };
    setUserData(updatedUserData);
  };

  const handlePhoneChange = (e) => {
    // console.log(e.target.value);

    const updatedUserData = {
      ...userData,
      phone: e.target.value,
    };
    setUserData(updatedUserData);
  };

  // const handleGenderChange = (e) => {
  //   // console.log(e.target.value);

  //   const updatedUserData = {
  //     ...userData,
  //     gender: e.target.value,
  //   };
  //   setUserData(updatedUserData);
  // };

  const handleDobChange = (e) => {
    // console.log(e.target.value);

    const updatedUserData = {
      ...userData,
      dob: e.target.value,
    };
    setUserData(updatedUserData);
  };

  // const handleRadioChange = (e) => {
  //   // console.log(e.target.value);

  //   const updatedUserData = {
  //     ...userData,
  //     radio: e.target.value,
  //   };
  //   setUserData(updatedUserData);
  // };

  // if (isOver === true) {
  //   setIsOver(userData.name);
  // } else {
  //   setIsOver(isOver);
  // }
  // console.log("userData : ", userData);

  // const handleGradeChange = (e) => {
  //   console.log(e.target.value);
  //   const updatedUserData = {
  //     ...userData,
  //     grade: e.target.value,
  //   };
  //   setUserData(updatedUserData);
  // };

  const onGradeChange = (value) => {
    console.log(value);
  };

  const onSelectChange = (value) => {
    console.log(value);
  };

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
              onChange={handleLastNameChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePhoneChange}
            />
          </div>
          {/* Gender portion */}
          {/* <div className="mb-4 mt-2">
            <label htmlFor="gender">
              Gender:
              <label />
              <select
                name="gender"
                className="border"
                onChange={handleGenderChange}
              >
                <option value=" "></option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">Other</option>
                <option value="not prefer to answer">
                  Not to prefer to answer
                </option>
              </select>
            </label>
          </div> */}
          {/* Date of Birth */}
          <div className="mt-2">
            <label htmlFor="date">DOB:</label>
            <input
              type="date"
              name="birthday"
              className="border"
              onChange={handleDobChange}
            />
          </div>
          {/* radio portion */}
          {/* <div className="mt-2">
            <label htmlFor="radio">under 21:</label>
            <input
              type="radio"
              name="below the age"
              className="mr-2"
              value={userData.name}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio">over 21:</label>
            <input
              type="radio"
              name="eligible age"
              onChange={handleRadioChange}
              value={userData.name}
            />
          </div> */}

          <div className="mt-2">
            <RadioGroup
              values={["1", "2", "3", "4", "5"]}
              label="Select grade"
              name="grade"
              onUpdate={onGradeChange}
            />
          </div>

          {/* <div>
            <Select
              onUpdate={onSelectChange}
              label="Select Gender"
              name="Gender"
              values={[
                { key: "default", label: "" },
                { key: "male", label: "Male" },
                { key: "female", label: "Female" },
                { key: "noAnswer", label: "Not prefer to answer" },
                { key: "other", label: "Other" },
              ]}
            />
          </div> */}

          {/* Submit button portion */}
        </form>
      </div>
    </>
  );
};

export default UserProfileForm;

import React from "react";
import Form from "./components/Form";
import { FormProvider, useFormContext } from "./context/FormContext";
import UserProfileForm from "./components/UserProfileForm";
import UserProfile from "./components/Form/UserProfile";
import LoginForm from "./components/Login/LoginForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserForm from "./components/LoginForm/UserForm";
import SignUp from "./components/SignUp/SignUp";
import PasswordReset from "./components/PasswordReset/passwordReset";
import EmailValidate from "./components/customValidate/EmailValidate";
import EmailApiValidate from "./components/customApiValidate/EmailApiValidate";
import WithUseForm from "./components/withUseForm/WithUseForm";
const DisPlayForm = () => {
  const { formData } = useFormContext();

  if (!formData) return null;
  return (
    <div>
      <h5>User Form</h5>
      <p>
        <strong>Name:</strong>
        {formData.name}
      </p>
      <p>
        <strong>Email:</strong>
        {formData.email}
      </p>
    </div>
  );
};

// User profile

const App = () => {
  const handleUserSubmit = (data) => {
    console.log("User Profile Data: ", data);
    alert("Form submitted successfully!");
  };
  return (
    <>
      {/* <FormProvider>
        <div className="container mt-5">
          <h1>Reusable Form</h1>
          <Form />
          <DisPlayForm />
        </div>
      </FormProvider> */}
      {/* <div>
        <UserProfileForm />
      </div>
      <div className="mt-4">
        <h2>User Profile</h2>
        <UserProfile onSubmit={handleUserSubmit} />
      </div> */}
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/email" element={<EmailValidate />} />
        <Route path="/email-api-validate" element={<EmailApiValidate />} />
        <Route path="/with-use-form" element={<WithUseForm />} />
      </Routes>
    </>
  );
};

export default App;

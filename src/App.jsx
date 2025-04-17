import React from "react";
import Form from "./components/Form";
import { FormProvider, useFormContext } from "./context/FormContext";

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

const App = () => {
  return (
    <>
      <FormProvider>
        <div className="container mt-5">
          <h1>Reusable Form</h1>
          <Form />
          <DisPlayForm />
        </div>
      </FormProvider>
    </>
  );
};

export default App;

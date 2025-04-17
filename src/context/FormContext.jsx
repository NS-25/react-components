import { createContext, useContext, useState } from "react";

const FormContext = createContext({ children });

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const updateFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

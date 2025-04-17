import { createContext, useContext, useState } from "react";

const FormContext = createContext({ children });

export const FormProvider = ({ children }) => {
  return <FormContext.Provider>{children}</FormContext.Provider>;
};

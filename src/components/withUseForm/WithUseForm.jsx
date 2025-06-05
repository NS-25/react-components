import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import "./WithUseForm.css";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must include at least one letter")
    .matches(/\d/, "Password must include at least one number")
    .required("Password is required"),
});

const WithUseForm = () => {
  // const { register, handleSubmit , formState: {errors}} = useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="form-wrapper">
      <form className="form-field" onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="email" className="email-label">
          Email*
        </label>
        <Controller
          name="email"
          control={control}
          render={(field) => {
            <input type="email" {...field} className="border" />;
          }}
        />
        {errors.email && <p className="error-text">{errors.message}</p>}
        <label htmlFor="password">Password*</label>
        <Controller
          name="password"
          control={control}
          render={(field) => {
            <input type="password" {...field} className="border flex" />;
          }}
        />
        {errors.password && <p className="error-text">{errors.message}</p>}
        <div>
          <button className="email-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithUseForm;

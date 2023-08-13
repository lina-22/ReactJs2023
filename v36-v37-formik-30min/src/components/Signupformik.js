import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//name, email, password
export default function Signupformik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2, "name must have at least 2 characters"),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "name must have at least 6 characters")
        .required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  console.error(formik.errors);
  const renderNameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );

  const renderPasswordError = formik.touched.password &&
    formik.errors.password && (
      <span style={{ color: "red" }}>{formik.errors.password}</span>
    );
  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name"> Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      {renderNameError}
      <label htmlFor="email"> Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      {renderEmailError}
      <label htmlFor="password"> Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      {renderPasswordError}
      <button>Signup</button>
    </form>
  );
  return (
    <div>
      <h2>User signup</h2>
      {renderForm}
    </div>
  );
}

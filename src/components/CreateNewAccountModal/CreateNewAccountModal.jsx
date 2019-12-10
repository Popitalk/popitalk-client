import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input7 from "../Input7";
import "./CreateNewAccountModal.css";

export default function CreateNewAccountModal() {
  return (
    <div className="CreateNewAccountModal--container">
      <div className="CreateNewAccountModal--header">
        <h3>Create a New Account</h3>
        <h4>Add friends & upload videos & explore channels</h4>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "First name is too short.")
            .max(32, "First name is too long.")
            .required("First name is required."),
          lastName: Yup.string()
            .min(2, "Last name is too short.")
            .max(32, "Last name is too long.")
            .required("Last name is required."),
          email: Yup.string()
            .email("Email is invalid.")
            .required("Email is required."),
          username: Yup.string()
            .min(2, "Username is too short.")
            .max(32, "Username is too long.")
            .required("Username is required."),
          password: Yup.string()
            .min(6, "Password should be atleast 6 characters long.")
            .matches(
              /[a-z]/,
              "Password should have atleast one lowercase letter."
            )
            .matches(
              /[A-Z]/,
              "Password should have atleast one uppercase letter."
            )
            .matches(/\d+/, "Password should have atleast one number.")
            .required("New Password is required."),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required.")
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
          isSubmitting,
          dirty
        }) => (
          <form className="CreateNewAccountModal--form" onSubmit={handleSubmit}>
            <div className="CreateNewAccountModal--form--row">
              <Input7
                header="First Name"
                name="firstName"
                type="text"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={touched.firstName && errors.firstName}
              />
              <Input7
                header="Last Name"
                name="lastName"
                type="text"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={touched.lastName && errors.lastName}
              />
            </div>

            <Input7
              header="Email"
              name="email"
              type="email"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
            />
            <Input7
              header="Username"
              name="username"
              type="text"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username}
            />
            <Input7
              header="Password"
              name="password"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
            />
            <Input7
              header="Confirm New Password"
              name="confirmPassword"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="button pill lg"
            >
              Continue
            </button>
          </form>
        )}
      </Formik>
      <p>
        By clicking Sign Up, you agree to the{" "}
        <a href="https://google.com">Terms</a> and{" "}
        <a href="https://google.com">Policy</a>
      </p>
    </div>
  );
}

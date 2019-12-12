import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import "./CreateNewAccount.css";
import Input2 from "../Input2";

const registrationSchema = Yup.object().shape({
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
    .matches(/[a-z]/, "Password should have atleast one lowercase letter.")
    .matches(/[A-Z]/, "Password should have atleast one uppercase letter.")
    .matches(/\d+/, "Password should have atleast one number.")
    .required("Password is required."),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required.")
});

export default function CreateNewAccount({ modal }) {
  const loading = useSelector(({ apiState }) => apiState.userApiLoading);
  const error = useSelector(({ apiState }) => apiState.userApiError);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        password2: ""
      }}
      validationSchema={registrationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        //   dispatch(
        //     register({
        //       email: values.email,
        //       username: values.username,
        //       password: values.password
        //     })
        //   );
        // }
        console.log("VALUES", values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {formProps => (
        <form
          className={`CreateNewAccount--container${
            modal ? " CreateNewAccount--modal" : ""
          }`}
          onSubmit={formProps.handleSubmit}
        >
          <h2>Create a New Account</h2>
          <h4>Add friends &amp; upload videos &amp; explore channels</h4>
          {error && <p className="CreateNewAccount--apiError">{error}</p>}
          {formProps.touched.firstName && formProps.errors.firstName && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.firstName}
            </p>
          )}
          {formProps.touched.lastName && formProps.errors.lastName && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.lastName}
            </p>
          )}
          {formProps.touched.email && formProps.errors.email && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.email}
            </p>
          )}
          {formProps.touched.password && formProps.errors.password && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.password}
            </p>
          )}
          {formProps.touched.password2 && formProps.errors.password2 && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.password2}
            </p>
          )}
          {formProps.touched.username && formProps.errors.username && (
            <p className="CreateNewAccount--apiError">
              {formProps.errors.username}
            </p>
          )}
          <div className="CreateNewAccount--inputs">
            <div>
              <Input2
                type="text"
                name="firstName"
                onChange={formProps.handleChange}
                onBlur={formProps.handleBlur}
                value={formProps.values.firstName}
                placeholder="First name"
                disabled={formProps.isSubmitting || loading}
                required
                className={
                  formProps.touched.firstName && formProps.errors.firstName
                    ? "CreateNewAccount--inputError"
                    : ""
                }
              />
              <Input2
                type="text"
                name="lastName"
                onChange={formProps.handleChange}
                onBlur={formProps.handleBlur}
                value={formProps.values.lastName}
                placeholder="Last name"
                disabled={formProps.isSubmitting || loading}
                required
                className={
                  formProps.touched.lastName && formProps.errors.lastName
                    ? "CreateNewAccount--inputError"
                    : ""
                }
              />
            </div>
            <Input2
              type="email"
              name="email"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.email}
              placeholder="Email"
              disabled={formProps.isSubmitting || loading}
              required
              className={
                formProps.touched.email && formProps.errors.email
                  ? "CreateNewAccount--inputError"
                  : ""
              }
            />
            <Input2
              type="text"
              name="password"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.password}
              placeholder="Password"
              disabled={formProps.isSubmitting || loading}
              required
              className={
                formProps.touched.password && formProps.errors.password
                  ? "CreateNewAccount--inputError"
                  : ""
              }
            />
            <Input2
              type="text"
              name="password2"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.password2}
              placeholder="Confirm Password"
              disabled={formProps.isSubmitting || loading}
              required
              className={
                formProps.touched.password2 && formProps.errors.password2
                  ? "CreateNewAccount--inputError"
                  : ""
              }
            />
            <Input2
              type="text"
              name="username"
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              value={formProps.values.username}
              placeholder="Pick a Username (e.g user123)"
              disabled={formProps.isSubmitting || loading}
              required
              className={
                formProps.touched.username && formProps.errors.username
                  ? "CreateNewAccount--inputError"
                  : ""
              }
            />
          </div>
          <p className="CreateNewAccount--terms">
            By clicking Sign Up, you agree to the{" "}
            <a href="https://google.com">Terms</a> and{" "}
            <a href="https://google.com">Policy</a>
          </p>
          <button
            type="submit"
            disabled={formProps.isSubmitting || loading}
            className="button pill lg"
          >
            Continue
          </button>
        </form>
      )}
    </Formik>
  );
}

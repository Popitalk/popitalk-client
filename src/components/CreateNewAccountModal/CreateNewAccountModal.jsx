import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input7 from "../Input7";
import Select from "../Select";
import "./CreateNewAccountModal.css";

const currentYear = new Date().getFullYear();

let thirteenYearsAgo = new Date();
thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);

const days = new Array(31).fill(0).map((_, index) => index + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const years = new Array(100).fill(0).map((_, index) => currentYear - index);
export default function CreateNewAccountModal() {
  return (
    <div className="CreateNewAccountModal--container">
      <div className="CreateNewAccountModal--header">
        <h3>Create a New Account</h3>
        <h4>Add friends &amp; upload videos &amp; explore channels</h4>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          date: new Date()
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
          date: Yup.date()
            .max(
              thirteenYearsAgo,
              "You can't use Playnow if you are younger than 13"
            )
            .required(),
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
            .required("New Password is required.")
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
          dirty,
          setFieldValue
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
                onKeyDown={() => {
                  console.log("VALUES", values);
                }}
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
            <div className="CreateNewAccountModal--form--row2">
              <h4>
                Date of Birth <span>{errors.date}</span>
              </h4>
              <div>
                <Select
                  name="date"
                  placeholder="Day"
                  options={days}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  value={values.date.getDate()}
                  onChange={v => {
                    values.date.setDate(v.value);
                    setFieldValue("date", values.date);
                  }}
                />
                <Select
                  name="date"
                  placeholder="Month"
                  options={months}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  value={months[values.date.getMonth()]}
                  onChange={v => {
                    values.date.setMonth(months.indexOf(v.value));
                    setFieldValue("date", values.date);
                  }}
                />
                <Select
                  name="date"
                  placeholder="Year"
                  options={years}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  value={values.date.getFullYear()}
                  onChange={v => {
                    values.date.setFullYear(v.value);
                    setFieldValue("date", values.date);
                  }}
                />
              </div>
            </div>
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

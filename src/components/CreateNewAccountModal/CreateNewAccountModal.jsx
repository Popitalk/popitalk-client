import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/actions";
import Input7 from "../Input7";
import Select from "../Select";
import "./CreateNewAccountModal.css";

const Spinner = () => (
  <div className="CreateNewAccountModal--spinner">
    <div className="CreateNewAccountModal--spinner--circle">
      <div></div>
    </div>
  </div>
);

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
  const {
    registrationApiLoading: apiLoading,
    registrationApiError: apiError
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();

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
          dateOfBirth: new Date()
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
          dateOfBirth: Yup.date()
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
          // alert(JSON.stringify(values, null, 2));
          // setSubmitting(true);
          dispatch(register(values));
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
                disabled={apiLoading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={touched.firstName && errors.firstName}
              />
              <Input7
                header="Last Name"
                name="lastName"
                type="text"
                disabled={apiLoading}
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
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={
                (touched.email && errors.email) ||
                (apiError === "Email already in use" && "Email already in use")
              }
            />
            <Input7
              header="Username"
              name="username"
              type="text"
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={
                (touched.username && errors.username) ||
                (apiError === "Username already in use" &&
                  "Username already in use")
              }
            />
            <Input7
              header="Password"
              name="password"
              type="password"
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
            />
            <div className="CreateNewAccountModal--form--row2">
              <h4>
                Date of Birth <span>{errors.dateOfBirth}</span>
              </h4>
              <div>
                <Select
                  name="dateOfBirth"
                  placeholder="Day"
                  options={days}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={apiLoading}
                  value={values.dateOfBirth.getDate()}
                  onChange={v => {
                    values.dateOfBirth.setDate(v.value);
                    setFieldValue("dateOfBirth", values.dateOfBirth);
                  }}
                />
                <Select
                  name="dateOfBirth"
                  placeholder="Month"
                  options={months}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={apiLoading}
                  value={months[values.dateOfBirth.getMonth()]}
                  onChange={v => {
                    values.dateOfBirth.setMonth(months.indexOf(v.value));
                    setFieldValue("dateOfBirth", values.dateOfBirth);
                  }}
                />
                <Select
                  name="dateOfBirth"
                  placeholder="Year"
                  options={years}
                  isMulti={false}
                  isClearable={false}
                  isSearchable={false}
                  onBlur={handleBlur}
                  disabled={apiLoading}
                  value={values.dateOfBirth.getFullYear()}
                  onChange={v => {
                    values.dateOfBirth.setFullYear(v.value);
                    setFieldValue("dateOfBirth", values.dateOfBirth);
                  }}
                />
              </div>
            </div>
            <button type="submit" disabled={apiLoading || !isValid || !dirty}>
              {apiLoading ? <Spinner /> : "Continue"}
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

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import EditInformationForm from "./EditInformationForm";
import EditBirthdayForm from "./EditBirthdayForm";
import {
  getUserInformationSchema,
  getSetPasswordSchema,
  getInitialDatePickerValues
} from "../helpers/functions";

export default function CreateNewAccountForm({ handleSubmit, loading }) {
  const initialDoB = new Date();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: initialDoB,
          email: "",
          ...getInitialDatePickerValues(initialDoB),
          password: ""
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          ...getUserInformationSchema(),
          ...getSetPasswordSchema(),
          username: Yup.string()
            .min(6, "Minimum 6 characters*")
            .max(32, "Maximum 32 characters*")
            .required("Required*")
        })}
        onSubmit={values => {
          handleSubmit({
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: !values.dateOfBirth,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
          });
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
          dirty
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-full">
              <p className="text-center text-3xl font-bold">
                Create a new account
              </p>
              <p className="pb-8 text-center account-form-par">
                Get the full experience. It&apos;s FREE!
              </p>
              <EditInformationForm loading={loading} />
              <Input
                header="Username"
                name="username"
                type="text"
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={touched.username && errors.username}
                className="w-full"
              />
              <Input
                header="Password"
                name="password"
                type="password"
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password}
                className="w-full"
              />
              <EditBirthdayForm loading={loading} />
              <p className="pt-8 text-center text-sm account-form-par">
                By clicking Sign Up, you agree to the{" "}
                <a href="https://google.com">Terms</a> and{" "}
                <a href="https://google.com">Policy</a>.
              </p>
              <div className="mt-4">
                <Button type="submit" disabled={loading || !isValid || !dirty}>
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

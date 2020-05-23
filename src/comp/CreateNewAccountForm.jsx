import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
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
            .min(8, "Username is too short.")
            .max(32, "Username is too long.")
            .required("Username is required.")
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
              <Text variant="title2" className="text-center">
                Create a new account
              </Text>
              <Text variant="text2" className="pb-8 text-center">
                Get the full experience. It&apos;s FREE!
              </Text>
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
              <Text variant="small2" className="pt-8 text-center">
                By clicking Sign Up, you agree to the{" "}
                <a href="https://google.com">Terms</a> and{" "}
                <a href="https://google.com">Policy</a>.
              </Text>
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

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import ModalContainer from "./ModalContainer";
import EditInformationForm from "./EditInformationForm";
import {
  getUserInformationSchema,
  getSetPasswordSchema,
  getInitialDatePickerValues
} from "../helpers/functions";

export default function CreateNewAccountModal({ handleSubmit, loading }) {
  const initialDoB = new Date();

  return (
    <ModalContainer noHeader={true}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: initialDoB,
          email: "",
          ...getInitialDatePickerValues(initialDoB),
          password: "",
          confirmPassword: ""
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          ...getUserInformationSchema(),
          ...getSetPasswordSchema()
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
          dirty,
          setFieldValue,
          resetForm,
          setFieldTouched
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-full">
              <Text variant="title2" className="text-center">
                Create a new account
              </Text>
              <Text variant="text2" className="text-center pb-8">
                Get the full experience. It&apos;s FREE!
              </Text>
              <EditInformationForm loading={loading} />
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
              <Input
                header="Confirm Password"
                name="confirmPassword"
                type="password"
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                className="w-full"
              />
              <Text variant="small2" className="text-center pt-8">
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
    </ModalContainer>
  );
}

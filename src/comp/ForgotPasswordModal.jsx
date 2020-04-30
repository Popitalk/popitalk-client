import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import ControlHeader from "./ControlHeader";

export default function ForgotPasswordModal({
  loading,
  handleSubmit,
  confirmEmailSent
}) {
  return (
    <Formik
      initialValues={{ email: "" }}
      enableReinitialize={true}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email is invalid.")
          .required("Email is required.")
      })}
      onSubmit={values => {
        handleSubmit({
          email: values.email
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
            <div className="flex justify-center text-center">
              <ControlHeader
                header="Enter your email address to search for your account"
                error={touched.email && errors.email}
                size="md"
              />
            </div>
            <Input
              name="email"
              type="email"
              disabled={loading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              className="w-full"
            />
            {confirmEmailSent ? (
              <Text variant="small2" className="text-linkText py-2">
                An email has been sent to reset your password!
              </Text>
            ) : (
              <></>
            )}
            <Button type="submit" disabled={loading || !isValid || !dirty}>
              Confirm
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

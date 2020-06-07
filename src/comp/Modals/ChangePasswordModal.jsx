import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import Button from "../Button";
import { getSetPasswordSchema } from "../../helpers/functions";

export default function ChangePasswordModal({
  loading,
  handleSubmit,
  passwordUpdated
}) {
  return (
    <Formik
      initialValues={{
        oldPassword: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={Yup.object({
        ...getSetPasswordSchema(),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match.")
          .required("Confirm Password is required.")
      })}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          newPassword: values.password
        });
        resetForm();
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
        <form onSubmit={handleSubmit} className="p-4">
          <Input
            header="New Password"
            name="password"
            type="password"
            disabled={loading}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
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
          />
          {passwordUpdated ? (
            <p className="text-linkText py-2 pt-4 text-center">
              You have successfully updated your password!
            </p>
          ) : (
            <></>
          )}
          <div className="flex justify-center pt-4">
            <Button type="submit" disabled={loading || !isValid || !dirty}>
              Confirm
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

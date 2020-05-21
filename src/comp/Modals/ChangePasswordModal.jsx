import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import Button from "../Button";
import Text from "../Text";
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
        oldPassword: Yup.string().required("Old Password is required."),
        ...getSetPasswordSchema(true),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match.")
          .required("Confirm Password is required.")
      })}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          password: values.oldPassword,
          newPassword: values.password,
          confirmPassword: values.confirmPassword
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
            header="Old Password"
            name="oldPassword"
            type="password"
            disabled={loading}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.oldPassword}
            error={touched.oldPassword && errors.oldPassword}
          />
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
            header="Confirm New Password"
            name="confirmPassword"
            type="password"
            disabled={loading}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          {passwordUpdated ? (
            <Text variant="small2" className="text-linkText py-2 text-center">
              You have successfully updated your password!
            </Text>
          ) : (
            <></>
          )}
          <div className="flex justify-center">
            <Button type="submit" disabled={loading || !isValid || !dirty}>
              Confirm
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

/*import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

export default function ChangePasswordForm({
    loading,
    handleSubmit,
    handleBack
}) {
    <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object({
            oldPassword: Yup.string().required("Old Password is required."),
            newPassword: Yup.string()
                .min(6, "Password should be at least 6 characters long.")
                .matches(
                /[a-z]/,
                "Password should have at least one lowercase letter."
                )
                .matches(
                /[A-Z]/,
                "Password should have at least one uppercase letter."
                )
                .matches(/\d+/, "Password should have at least one number.")
                .notOneOf(
                [Yup.ref("oldPassword"), null],
                "Passwords must not match"
                )
                .required("New Password is required.")
        })}
        onSubmit={(values, { resetForm }) => {
            handleSubmit({
                password: values.oldPassword,
                newPassword: values.newPassword
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
          isSubmitting,
          dirty
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              header="Old Password"
              name="oldPassword"
              type="password"
              disabled={loading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.oldPassword}
              error={(touched.oldPassword && errors.oldPassword)}
            />
            <Input
              header="New Password"
              name="newPassword"
              type="password"
              disabled={loading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              error={touched.newPassword && errors.newPassword}
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
            {showSuccessMessage && (
              <p>You successfully changed your password!</p>
            )}
            <Button 
                type="submit"
                disabled={loading || !isValid || !dirty}
                >
                Confirm
            </Button>
          </form>
        )}
      </Formik>
}*/

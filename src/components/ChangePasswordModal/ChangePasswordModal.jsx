import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import Input7 from "../Input7";
import "./ChangePasswordModal.css";

export default function ChangePasswordModal() {
  const firstModal = useSelector(
    ({ modalState }) => modalState.open.length === 1
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  return (
    <div className="ChangePasswordModal--container">
      <div className="ChangePasswordModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h3>Change Password</h3>
      </div>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string().required("Old Password is required."),
          newPassword: Yup.string()
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
            .required("New Password is required."),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirm Password is required.")
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
          dirty
        }) => (
          <form className="ChangePasswordModal--form" onSubmit={handleSubmit}>
            <Input7
              header="Old Password"
              name="oldPassword"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.oldPassword}
              error={touched.oldPassword && errors.oldPassword}
            />
            <Input7
              header="New Password"
              name="newPassword"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              error={touched.newPassword && errors.newPassword}
            />
            <Input7
              header="Confirm New Password"
              name="confirmPassword"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="button lg"
            >
              Confirm
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

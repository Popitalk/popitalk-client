import React, { useState, useEffect, useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateUser } from "../../redux/actions";
import Input7 from "../Input7";
import "./ChangePasswordModal.css";

const Spinner = () => (
  <div className="ChangePasswordModal--spinner">
    <div className="ChangePasswordModal--spinner--circle"></div>
  </div>
);

export default function ChangePasswordModal() {
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const { userApiLoading: apiLoading, userApiError: apiError } = useSelector(
    state => state.apiState
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);

  useEffect(() => {
    if (mounted && !apiLoading && !apiError) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiError, apiLoading]);

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
          newPassword: ""
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
            .notOneOf(
              [Yup.ref("oldPassword"), null],
              "Passwords must not match"
            )
            .required("New Password is required.")
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            updateUser({
              password: values.oldPassword,
              newPassword: values.newPassword
            })
          );
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
          <form className="ChangePasswordModal--form" onSubmit={handleSubmit}>
            <Input7
              header="Old Password"
              name="oldPassword"
              type="password"
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.oldPassword}
              error={
                (touched.oldPassword && errors.oldPassword) ||
                (apiError === "The password is incorrect" &&
                  "Password is incorrect")
              }
            />
            <Input7
              header="New Password"
              name="newPassword"
              type="password"
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              error={touched.newPassword && errors.newPassword}
            />
            {showSuccessMessage && (
              <p>You successfully changed your password!</p>
            )}
            <button
              type="submit"
              disabled={apiLoading || !isValid || !dirty}
              className="button lg"
            >
              {apiLoading ? <Spinner /> : "Confirm"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

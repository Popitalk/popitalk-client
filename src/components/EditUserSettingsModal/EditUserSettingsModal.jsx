import React, { useState, useEffect, useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateUser } from "../../redux/actions";
import Input7 from "../Input7";
import ImageUpload from "../ImageUpload";
import Select from "../Select";
import "./EditUserSettingsModal.css";

const Spinner = () => (
  <div className="EditUserSettingsModal--spinner">
    <div className="EditUserSettingsModal--spinner--circle"></div>
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

export default function EditUserSettingsModal() {
  const firstModal = useSelector(
    ({ modalState }) => modalState.components.length === 1
  );
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    username,
    avatar
  } = useSelector(state => state.userState);
  const {
    userApiLoading: apiLoading,
    userApiError: apiError,
    userApiSuccess: apiSuccess
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);
  const [displayedAvatar, setDisplayedAvatar] = useState(avatar);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    if (apiSuccess) {
      dispatch(closeModal());
    }
  }, [apiSuccess, dispatch]);

  const handleUpload = e => {
    if (e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
      setDisplayedAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemove = () => {
    setDisplayedAvatar(false);
    setUploadedImage(null);
  };

  return (
    <div className="EditUserSettingsModal--container">
      <div className="EditUserSettingsModal--header">
        {!firstModal && (
          <i
            role="button"
            className="fas fa-chevron-left fa-2x"
            onClick={closeModalDispatcher}
          />
        )}
        <h3>Edit Settings</h3>
      </div>
      <Formik
        initialValues={{
          firstName,
          lastName,
          email,
          password: "",
          dateOfBirth: new Date(dateOfBirth)
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
          dateOfBirth: Yup.date()
            .max(
              thirteenYearsAgo,
              "You can't use Playnow if you are younger than 13"
            )
            .required(),
          email: Yup.string()
            .email("Email is invalid.")
            .required("Email is required."),
          password: Yup.string().required("Password is required.")
        })}
        onSubmit={(values, { setFieldValue, setFieldTouched }) => {
          dispatch(
            updateUser({
              ...values,
              dateOfBirth: values.dateOfBirth.toISOString(),
              avatar: uploadedImage,
              removeAvatar: !displayedAvatar
            })
          );
          setFieldValue("password", "");
          setFieldTouched("password", false);
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
          setFieldValue
        }) => (
          <form className="EditUserSettingsModal--form" onSubmit={handleSubmit}>
            <ImageUpload
              icon={displayedAvatar}
              onUpload={handleUpload}
              onRemove={handleRemove}
              disabled={apiLoading}
              user={true}
            />
            <h4>{username}</h4>
            <div className="EditUserSettingsModal--form--row">
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
            <div className="EditUserSettingsModal--form--row2">
              <h4>
                Date of Birth <span>{errors.dateOfBirth}</span>
              </h4>
              <div>
                <Select
                  name="date"
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
                  name="date"
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
                  name="date"
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
              header="Password"
              name="password"
              type="password"
              disabled={apiLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={
                (touched.password && errors.password) ||
                (apiError === "The password is incorrect" &&
                  "Password is incorrect")
              }
            />
            <button
              type="submit"
              disabled={apiLoading || !isValid || !dirty}
              className="button lg"
            >
              {apiLoading ? <Spinner /> : "Save"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

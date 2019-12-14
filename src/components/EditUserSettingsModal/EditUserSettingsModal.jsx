import React, { useState, useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import Input7 from "../Input7";
import ImageUpload from "../ImageUpload";
import Select from "../Select";
import "./EditUserSettingsModal.css";

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
  const [displayedIcon, setDisplayedIcon] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const firstModal = useSelector(
    ({ modalState }) => modalState.open.length === 1
  );
  const dispatch = useDispatch();
  const closeModalDispatcher = useCallback(() => dispatch(closeModal()), [
    dispatch
  ]);

  const handleUpload = e => {
    if (e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
      setDisplayedIcon(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemove = () => {
    setDisplayedIcon(false);
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
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          date: new Date()
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
          date: Yup.date()
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
          dirty,
          setFieldValue
        }) => (
          <form className="EditUserSettingsModal--form" onSubmit={handleSubmit}>
            <ImageUpload
              icon={displayedIcon}
              onUpload={handleUpload}
              onRemove={handleRemove}
              disabled={isSubmitting}
              user={true}
            />
            <h4>Djang16</h4>
            <div className="EditUserSettingsModal--form--row">
              <Input7
                header="First Name"
                name="firstName"
                type="text"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={touched.firstName && errors.firstName}
              />
              <Input7
                header="Last Name"
                name="lastName"
                type="text"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={touched.lastName && errors.lastName}
              />
            </div>
            <div className="EditUserSettingsModal--form--row2">
              <h4>
                Date of Birth <span>{errors.date}</span>
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
                  disabled={isSubmitting}
                  value={values.date.getDate()}
                  onChange={v => {
                    values.date.setDate(v.value);
                    setFieldValue("date", values.date);
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
                  disabled={isSubmitting}
                  value={months[values.date.getMonth()]}
                  onChange={v => {
                    values.date.setMonth(months.indexOf(v.value));
                    setFieldValue("date", values.date);
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
                  disabled={isSubmitting}
                  value={values.date.getFullYear()}
                  onChange={v => {
                    values.date.setFullYear(v.value);
                    setFieldValue("date", values.date);
                  }}
                />
              </div>
            </div>
            <Input7
              header="Email"
              name="email"
              type="email"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
            />
            <Input7
              header="Password"
              name="password"
              type="password"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
            />
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="button lg"
            >
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

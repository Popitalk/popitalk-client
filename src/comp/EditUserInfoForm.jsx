import React, { useState } from "react";
import Input from "./Input";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Select from "./Select";
import ImageUpload from "./ImageUpload";
import ControlHeader from "./ControlHeader";

export default function EditUserInfoForm({
  username,
  initial,
  handleSubmit,
  loading
}) {
  const [uploadedImage, setUploadedImage] = useState(undefined);

  const currentYear = new Date().getFullYear();

  let thirteenYearsAgo = new Date();
  thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);

  const days = new Array(31).fill(0).map((_, index) => {
    return { value: index + 1, label: index + 1 };
  });
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
  ].map((month, index) => {
    return { value: index + 1, label: month };
  });

  const years = new Array(100).fill(0).map((_, index) => {
    const year = currentYear - index;
    return { value: year, label: year };
  });

  return (
    <>
      <Formik
        initialValues={initial}
        enableReinitialize={true}
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
          avatar: Yup.mixed().notRequired()
        })}
        onSubmit={values => {
          handleSubmit({
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: !values.dateOfBirth,
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
          dirty,
          setFieldValue,
          resetForm,
          setFieldTouched
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-full">
              <ImageUpload
                name="avatar"
                icon={values.avatar}
                onUpload={e => {
                  if (e.target.files[0]) {
                    setUploadedImage(e.target.files[0]);
                    setFieldValue(
                      "avatar",
                      URL.createObjectURL(e.target.files[0])
                    );
                  }
                }}
                onRemove={() => {
                  setFieldValue("avatar", null);
                  setUploadedImage(null);
                }}
                disabled={loading}
                className=""
              />
              <div className="text-2xl font-bold my-4">{username}</div>
              <div className="w-full md:flex">
                <div className="w-full pr-0 flex-1 md:flex-1 md:pr-2">
                  <Input
                    header="First Name"
                    name="firstName"
                    type="text"
                    disabled={loading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={touched.firstName && errors.firstName}
                    className=""
                  />
                </div>
                <div className="w-full pl-0 flex-1 md:flex-1 md:pl-2">
                  <Input
                    header="Last Name"
                    name="lastName"
                    type="text"
                    disabled={loading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={touched.lastName && errors.lastName}
                    className=""
                  />
                </div>
              </div>
              <div className="w-full">
                <Input
                  header="Email"
                  name="email"
                  type="email"
                  disabled={loading}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email}
                  className=""
                />
              </div>
              <div className="w-full">
                <ControlHeader
                  header="Birthday"
                  error={
                    touched.day &&
                    touched.month &&
                    touched.year &&
                    errors.dateOfBirth
                  }
                  size="md"
                />
              </div>
              <div className="flex flex-row items-end w-full space-x-8">
                <div className="flex-1">
                  <Select
                    name="day"
                    placeholder="Day"
                    options={days}
                    isMulti={false}
                    isClearable={false}
                    isSearchable={false}
                    onBlur={handleBlur}
                    disabled={loading}
                    value={values.day}
                    onChange={v => {
                      values.day = v.value;
                      values.dateOfBirth.setDate(v.value);
                      setFieldValue("dateOfBirth", values.dateOfBirth);
                      setFieldTouched("day", true, false);
                    }}
                    className=""
                  />
                </div>
                <div className="flex-1 mx-4">
                  <Select
                    name="month"
                    placeholder="Month"
                    options={months}
                    isMulti={false}
                    isClearable={false}
                    isSearchable={false}
                    onBlur={handleBlur}
                    disabled={loading}
                    value={values.month}
                    onChange={v => {
                      values.month = v.value;
                      values.dateOfBirth.setMonth(v.value);
                      setFieldValue("dateOfBirth", values.dateOfBirth);
                      setFieldTouched("month", true, false);
                    }}
                    className=""
                  />
                </div>
                <div className="flex-1">
                  <Select
                    name="year"
                    placeholder="Year"
                    options={years}
                    isMulti={false}
                    isClearable={false}
                    isSearchable={false}
                    onBlur={handleBlur}
                    disabled={loading}
                    value={values.year}
                    onChange={v => {
                      values.year = v.value;
                      values.dateOfBirth.setFullYear(v.value);
                      setFieldValue("dateOfBirth", values.dateOfBirth);
                      setFieldTouched("year", true, false);
                    }}
                    className=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button type="submit" loading={loading}>
                  Confirm
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

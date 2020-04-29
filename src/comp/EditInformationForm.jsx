import React from "react";
import Input from "./Input";
import Select from "./Select";
import ControlHeader from "./ControlHeader";
import { connect, getIn } from "formik";
import { getDatePickerValues } from "../helpers/functions";

function EditInformationForm({ loading, formik }) {
  const datePicker = getDatePickerValues();

  return (
    <>
      <div className="w-full md:flex">
        <div className="w-full pr-0 flex-1 md:flex-1 md:pr-2">
          <Input
            header="First Name"
            name="firstName"
            type="text"
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={formik.touched.firstName && formik.errors.firstName}
            className=""
          />
        </div>
        <div className="w-full pl-0 flex-1 md:flex-1 md:pl-2">
          <Input
            header="Last Name"
            name="lastName"
            type="text"
            disabled={loading}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={formik.touched.lastName && formik.errors.lastName}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          className=""
        />
      </div>
      <div className="w-full">
        <ControlHeader
          header="Birthday"
          error={
            formik.touched.day &&
            formik.touched.month &&
            formik.touched.year &&
            formik.errors.dateOfBirth
          }
          size="md"
        />
      </div>
      <div className="flex flex-row items-end w-full space-x-8">
        <div className="flex-1">
          <Select
            name="day"
            placeholder="Day"
            options={datePicker.days}
            isMulti={false}
            isClearable={false}
            isSearchable={false}
            onBlur={formik.handleBlur}
            disabled={loading}
            value={formik.values.day}
            onChange={v => {
              formik.values.day = v.value;
              formik.values.dateOfBirth.setDate(v.value);
              formik.setFieldValue("dateOfBirth", formik.values.dateOfBirth);
              formik.setFieldTouched("day", true, false);
            }}
            className=""
          />
        </div>
        <div className="flex-1 mx-4">
          <Select
            name="month"
            placeholder="Month"
            options={datePicker.months}
            isMulti={false}
            isClearable={false}
            isSearchable={false}
            onBlur={formik.handleBlur}
            disabled={loading}
            value={formik.values.month}
            onChange={v => {
              formik.values.month = v.value;
              formik.values.dateOfBirth.setMonth(v.value);
              formik.setFieldValue("dateOfBirth", formik.values.dateOfBirth);
              formik.setFieldTouched("month", true, false);
            }}
            className=""
          />
        </div>
        <div className="flex-1">
          <Select
            name="year"
            placeholder="Year"
            options={datePicker.years}
            isMulti={false}
            isClearable={false}
            isSearchable={false}
            onBlur={formik.handleBlur}
            disabled={loading}
            value={formik.values.year}
            onChange={v => {
              formik.values.year = v.value;
              formik.values.dateOfBirth.setFullYear(v.label);
              formik.setFieldValue("dateOfBirth", formik.values.dateOfBirth);
              formik.setFieldTouched("year", true, false);
            }}
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default connect(EditInformationForm);

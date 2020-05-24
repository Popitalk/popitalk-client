import React from "react";
import Select from "./Select";
import ControlHeader from "./ControlHeader";
import { connect } from "formik";
import { getDatePickerValues } from "../helpers/functions";

function EditBirthdayForm({ loading, formik }) {
  const datePicker = getDatePickerValues();

  return (
    <>
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
      <div className="flex flex-row items-center w-full sm:space-x-8 md:space-x-4 lg:space-x-8">
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
            className="w-25 p-0"
          />
        </div>
        <div className="flex-1 m-0">
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
            className="w-25 p-0"
          />
        </div>
        <div className="flex-1 m-0">
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
            className="w-25 p-0"
          />
        </div>
      </div>
    </>
  );
}

export default connect(EditBirthdayForm);

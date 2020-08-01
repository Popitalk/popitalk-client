import React from "react";
import Input from "./Controls/Input";
import { connect } from "formik";

function EditInformationForm({ loading, formik }) {
  return (
    <>
      <div className="w-full sm:flex sm:pl-0 mb-2 pl-2">
        <div className="w-full flex-1 sm:flex-1 sm:pr-2 sm:pl-2 pr-2">
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
        <div className="w-full flex-1 md:flex-1 md:pl-2 pr-2">
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
      <div className="w-full mb-2 px-2">
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
    </>
  );
}

export default connect(EditInformationForm);

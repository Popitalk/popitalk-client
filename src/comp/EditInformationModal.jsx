import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  getInitialDatePickerValues,
  getUserInformationSchema
} from "../helpers/functions";
import Button from "./Button";
import Text from "./Text";
import ImageUpload from "./ImageUpload";
import EditInformationForm from "./EditInformationForm";
import EditBirthdayForm from "./EditBirthdayForm";

export default function EditInformationModal({
  username,
  initial,
  handleSubmit,
  loading,
  informationUpdated
}) {
  const [uploadedImage, setUploadedImage] = useState(undefined);

  return (
    <div className="p-4">
      <Formik
        initialValues={{
          ...initial,
          ...getInitialDatePickerValues(initial.dateOfBirth)
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          ...getUserInformationSchema(),
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
        {({ handleSubmit, values, isValid, dirty, setFieldValue }) => (
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
              <Text variant="title2" className="my-4">
                {username}
              </Text>
              <EditInformationForm loading={loading} />
              <EditBirthdayForm loading={loading} />
              {informationUpdated ? (
                <Text variant="small2" className="text-linkText pb-2 pt-8">
                  You have successfully updated your information!
                </Text>
              ) : (
                <></>
              )}
              <div>
                <Button type="submit" disabled={loading || !isValid || !dirty}>
                  Confirm
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

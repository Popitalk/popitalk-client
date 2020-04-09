import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import ImageUpload from "./ImageUpload";
import ToggleCheckbox from "./ToggleCheckbox";
import ChannelFormSubmit from "./ChannelFormSubmit";

export default function ChannelForm({ initial, handleSubmit, loading }) {
  const [uploadedImage, setUploadedImage] = useState(undefined);
  return (
    <Formik
      initialValues={initial}
      enableReinitialize={true}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Name is too short.")
          .max(20, "Name is too long.")
          .required("Name is required."),
        description: Yup.string()
          .min(1, "Description is too short.")
          .max(150, "Description is too long.")
          .required("Description is required."),
        private: Yup.boolean().required(),
        icon: Yup.mixed().notRequired()
      })}
      onSubmit={values => {
        handleSubmit({
          // channelId,
          name: values.name,
          description: values.description,
          public: !values.private,
          icon: uploadedImage
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
        resetForm
      }) => (
        <form className="flex flex-col max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center mb-12 w-full ">
            <ImageUpload
              name="icon"
              icon={values.icon}
              onUpload={e => {
                if (e.target.files[0]) {
                  setUploadedImage(e.target.files[0]);
                  setFieldValue("icon", URL.createObjectURL(e.target.files[0]));
                }
              }}
              onRemove={() => {
                setFieldValue("icon", null);
                setUploadedImage(null);
              }}
              disabled={loading}
              className="mb-8 md:mr-32"
              selectMessage="Select Channel Icon"
              changeMessage="Change Channel Icon"
            />
            <div className="">
              <Input
                variant="counter"
                name="name"
                header="Channel Name"
                type="text"
                placeholder="Name your channel"
                maxLength={20}
                spellCheck={false}
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
                className="mb-5"
              />
              <Input
                variant="textarea"
                name="description"
                header="Description"
                type="text"
                placeholder="Describe your channel"
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                error={touched.description && errors.description}
                maxLength={150}
                className="mb-8"
              />
              <div className="flex items-center">
                <div className="mr-8">
                  <div className="flex items-center mb-1">
                    <FontAwesomeIcon
                      icon="lock"
                      className="text-secondaryButtonText mr-1 -mt-1"
                    />
                    <h4 className="text-lg font-bold">Private Group</h4>
                  </div>
                  <p className="text-secondaryText max-w-xs">
                    Users will have to request to follow your group in order to
                    see your content
                  </p>
                </div>
                <ToggleCheckbox
                  name="private"
                  checked={values.private}
                  disabled={loading}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.private}
                  error={touched.private && errors.private}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
          <ChannelFormSubmit
            type="update"
            disabled={loading || !isValid || !dirty}
            loading={loading}
            handleReset={() => resetForm()}
            className="mt-auto w-full"
          />
        </form>
      )}
    </Formik>
  );
}

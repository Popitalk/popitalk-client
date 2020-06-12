import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, connect } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import ImageUpload from "../ImageUpload";
import ToggleCheckbox from "../ToggleCheckbox";
import ChannelFormSubmit from "./ChannelFormSubmit";
import TagInput from "../TagInput";
import ControlHeader from "../ControlHeader";

const CategoryInput = connect(
  ({ formik, loading, tags, handleCancel, handleEnter }) => {
    return (
      <TagInput
        input={formik.values.tags}
        tags={tags}
        handleCancel={id => handleCancel(formik, id)}
        handleEnter={() => handleEnter(formik)}
        name="tags"
        type="text"
        disabled={loading}
        onChange={formik.handleChange}
        onBlur={e => {
          handleEnter(formik);
          formik.handleBlur(e);
        }}
        value={formik.values.tags}
        error={formik.touched.tags && formik.errors.category}
      />
    );
  }
);

let tagID = 1;

const categoryToTags = category => {
  return category
    .split(",")
    .filter(c => c.trim().length > 0)
    .map(n => {
      return { id: tagID++, name: n.trim() };
    })
    .reduce((unique, t) => {
      return unique.find(u => u.name === t.name) ? unique : [...unique, t];
    }, []);
};

const tagsToCategory = tags => {
  return tags.reduce((c, t) => {
    return c.length > 0 ? `${c},${t.name}` : t.name;
  }, "");
};

export default function ChannelForm({ initial, handleSubmit, loading, error }) {
  const [uploadedImage, setUploadedImage] = useState(undefined);
  const [tags, setTags] = useState(categoryToTags(initial.category));

  const handleEnter = formik => {
    const newTags = categoryToTags(formik.values.tags.trim()).filter(
      n => !tags.find(t => t.name === n.name)
    );

    if (newTags.length > 0) {
      setTags([...tags, ...newTags]);

      const tempCategory = tagsToCategory(newTags);
      const newCategory =
        formik.values.category.length > 0
          ? `${formik.values.category},${tempCategory}`
          : tempCategory;

      formik.setFieldValue("category", newCategory);
      formik.values.category = newCategory;
    }

    formik.setFieldValue("tags", "");
    formik.values.tags = "";
  };

  const handleCancel = (formik, id) => {
    const newTags = tags.filter(t => t.id !== id);
    setTags(newTags);

    const newCategory = tagsToCategory(newTags);
    formik.setFieldValue("category", newCategory);
    formik.values.category = newCategory;
  };

  return (
    <Formik
      initialValues={{ ...initial, tags: "" }}
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
        icon: Yup.mixed().notRequired(),
        category: Yup.string().notRequired()
      })}
      onSubmit={values => {
        handleSubmit({
          name: values.name,
          description: values.description,
          public: !values.private,
          icon: uploadedImage
          // category: values.category
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
        <form
          className="flex flex-col md:w-3/4 lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center mb-12 w-full">
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
              className="mb-8"
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
              <ControlHeader
                header="Category"
                error={touched.tags && errors.category}
                size="md"
              />
              <CategoryInput
                loading={loading}
                tags={tags}
                handleCancel={handleCancel}
                handleEnter={handleEnter}
              />
              <div className="flex items-center mt-8">
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
          {error ? (
            <p className="text-errorText text-sm pt-4">{error}</p>
          ) : (
            <></>
          )}
          <ChannelFormSubmit
            type="update"
            disabled={loading || !isValid || !dirty}
            loading={loading}
            handleReset={() => resetForm()}
            className="mt-auto w-full mb-12"
          />
        </form>
      )}
    </Formik>
  );
}

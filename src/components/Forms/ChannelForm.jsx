import React, { useState } from "react";
import { Formik /*, connect*/ } from "formik";
import * as Yup from "yup";
import Input from "../Controls/Input";
import ImageUpload from "../Controls/ImageUpload";
import ChannelFormSubmit from "./ChannelFormSubmit";
// import TagInput from "../Controls/TagInput";
// import ControlHeader from "../Controls/ControlHeader";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";

// const CategoryInput = connect(
//   ({ formik, loading, tags, handleCancel, handleEnter }) => {
//     return (
//       <TagInput
//         input={formik.values.tags}
//         tags={tags}
//         handleCancel={id => handleCancel(formik, id)}
//         handleEnter={() => handleEnter(formik)}
//         name="tags"
//         type="text"
//         disabled={loading}
//         onChange={formik.handleChange}
//         onBlur={e => {
//           handleEnter(formik);
//           formik.handleBlur(e);
//         }}
//         value={formik.values.tags}
//         error={formik.touched.tags && formik.errors.category}
//       />
//     );
//   }
// );

// let tagID = 1;

// const categoryToTags = category => {
//   return category
//     .split(",")
//     .filter(c => c.trim().length > 0)
//     .map(n => {
//       return { id: tagID++, name: n.trim() };
//     })
//     .reduce((unique, t) => {
//       return unique.find(u => u.name === t.name) ? unique : [...unique, t];
//     }, []);
// };

// const tagsToCategory = tags => {
//   return tags.reduce((c, t) => {
//     return c.length > 0 ? `${c},${t.name}` : t.name;
//   }, "");
// };

export default function ChannelForm({
  initial,
  handleSubmit,
  type,
  loading,
  error,
  channelSettings
}) {
  // const [tags, setTags] = useState(categoryToTags(initial.category));

  // const handleEnter = formik => {
  //   const newTags = categoryToTags(formik.values.tags.trim()).filter(
  //     n => !tags.find(t => t.name === n.name)
  //   );

  //   if (newTags.length > 0) {
  //     setTags([...tags, ...newTags]);

  //     const tempCategory = tagsToCategory(newTags);
  //     const newCategory =
  //       formik.values.category.length > 0
  //         ? `${formik.values.category},${tempCategory}`
  //         : tempCategory;

  //     formik.setFieldValue("category", newCategory);
  //     formik.values.category = newCategory;
  //   }

  //   formik.setFieldValue("tags", "");
  //   formik.values.tags = "";
  // };

  // const handleCancel = (formik, id) => {
  //   const newTags = tags.filter(t => t.id !== id);
  //   setTags(newTags);

  //   const newCategory = tagsToCategory(newTags);
  //   formik.setFieldValue("category", newCategory);
  //   formik.values.category = newCategory;
  // };
  const paragraphClassName = "text-copy-secondary text-xs text-center";
  const [tipPressed, setTipPressed] = useState(true);

  const tipsComponent = (
    <div className="absolute right-0 top-0 items-end flex flex-col w-64 rounded-lg p-4 space-y-2 z-50">
      <Button
        hoverable
        styleNone
        icon="lightbulb"
        className={`${
          tipPressed === true
            ? "bg-copy-link text-copy-tertiary"
            : "bg-background-primary text-copy-secondary"
        } text-xl w-10 h-10 rounded-full`}
        onClick={() => setTipPressed(!tipPressed)}
      />
      <div
        className={`${
          tipPressed === false && "hidden"
        } shadow-md bg-background-primary space-y-4 rounded-md p-4`}
      >
        <h2 className="text-copy-secondary text-center">{strings.tipHeader}</h2>
        <p className={paragraphClassName}>{strings.tipParagraph1}</p>
        <p className={paragraphClassName}>{strings.tipParagraph2}</p>
        <p className={paragraphClassName}>{strings.tipParagraph3}</p>
        <p className={paragraphClassName}>{strings.tipParagraph4}</p>
      </div>
    </div>
  );

  return (
    <div className="relative flex w-full bg-background-secondary rounded-md justify-evenly py-12">
      <Formik
        initialValues={{ ...initial, tags: "" }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, strings.minCharacter1)
            .max(20, strings.maxCharacter1)
            .required(strings.nameRequired),
          description: Yup.string()
            .min(1, strings.minCharacter2)
            .max(150, strings.maxCharacter2)
            .required(strings.descRequired),
          private: Yup.boolean().required(),
          icon: Yup.mixed().notRequired(),
          category: Yup.string().notRequired()
        })}
        onSubmit={values => {
          console.log(values.icon);
          handleSubmit({
            name: values.name,
            description: values.description,
            public: !values.private,
            icon: values.icon,
            category: values.category
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
            className={`${
              channelSettings ? "md:w-3/4" : "md:w-1/2"
            } flex flex-col`}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center w-full text-copy-primary space-y-8">
              <ImageUpload
                name="icon"
                icon={values.icon}
                onUpload={url => {
                  setFieldValue("icon", url);
                }}
                onRemove={() => {
                  setFieldValue("icon", null);
                }}
                disabled={loading}
                selectMessage={strings.selectChannelIcon}
                changeMessage={strings.changeChannelIcon}
                channelPlaceholder
              />
              <Input
                variant="counter"
                name="name"
                header={strings.createChannelName}
                type="text"
                placeholder={strings.channelNameInput}
                maxLength={20}
                spellCheck={false}
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
              />
              <Input
                variant="textarea"
                name="description"
                header={strings.createChannelDesc}
                type="text"
                placeholder={strings.channelDescInput}
                disabled={loading}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                error={touched.description && errors.description}
                maxLength={150}
              />
              {/* --UNCOMMENT FOR CHANNEL CATEGORY */}
              {/* <ControlHeader
                header={strings.channelCatagory}
                error={touched.tags && errors.category}
                size="sm"
              />
              <CategoryInput
                loading={loading}
                tags={tags}
                handleCancel={handleCancel}
                handleEnter={handleEnter}
              /> */}
              {/* --UNCOMMENT FOR PRIVATE CHANNELS */}
              {/* <div className="flex items-center mt-8">
                <div className="mr-8">
                  <div className="flex items-center mb-1">
                    <FontAwesomeIcon
                      icon="lock"
                      className="text-secondaryButtonText mr-1 -mt-1"
                    />
                    <h4 className="text-lg font-bold">Private Group</h4>
                  </div>
                  <p className="text-copy-secondary max-w-xs">
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
              </div> */}
            </div>
            {error && <p className="text-copy-error text-sm pt-4">{error}</p>}
            <ChannelFormSubmit
              type={type}
              disabled={loading || !isValid || !dirty}
              loading={loading}
              handleReset={() => resetForm()}
            />
          </form>
        )}
      </Formik>
      {tipsComponent}
    </div>
  );
}

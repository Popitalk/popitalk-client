import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addChannel } from "../../redux/actions";
import Input4 from "../Input4";
import Textarea2 from "../Textarea2";
// import Select from "../Select";
import ToggleCheck from "../ToggleCheck";
import ImageUpload from "../ImageUpload";
import FormSubmitPopup from "../FormSubmitPopup";
import "./CreateChannel.css";

// const options = ["x1", "y2", "z2", "x3", "y3", "z3"];

export default function CreateChannel() {
  const apiLoading = useSelector(state => state.api.channel.loading);
  const apiError = useSelector(state => state.api.channel.error);
  const dispatch = useDispatch();
  // const [categories, setCategories] = useState(null);
  const [displayedIcon, setDisplayedIcon] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSubmit = () => {
    console.log("SUBMITTING");
  };

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
    <div className="CreateChannel--container">
      <div className="CreateChannel--top" />
      <section>
        <div className="CreateChannel--header">
          <h1>Create a Channel</h1>
          <h2>
            Create a channel to broadcast scheduled videos and create you own
            community on Playnows!
          </h2>
        </div>

        <Formik
          initialValues={{
            name: "",
            description: "",
            private: false,
            categories: []
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, "Name is too short.")
              .max(20, "Name is too long.")
              .required("Name is required."),
            description: Yup.string()
              .min(1, "Description is too short.")
              .max(150, "Description is too long.")
              .required("Description is required."),
            private: Yup.boolean().required()
            // categories: Yup.array()
            //   .of(
            //     Yup.string()
            //       .min(2)
            //       .max(20)
            //   )
            //   .min(1)
            //   .max(5)
            //   .required("Categories is required.")
          })}
          onSubmit={values => {
            dispatch(
              addChannel({
                name: values.name,
                description: values.description,
                public: !values.private,
                icon: uploadedImage
              })
            );
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
            <form className="CreateChannel--main" onSubmit={handleSubmit}>
              <div className="CreateChannel--icon">
                <ImageUpload
                  icon={displayedIcon}
                  onUpload={handleUpload}
                  onRemove={handleRemove}
                  disabled={apiLoading}
                />
              </div>
              <div className="CreateChannel--inputs">
                <Input4
                  name="name"
                  header="Channel Name"
                  type="text"
                  placeholder="Name your channel"
                  maxLength={20}
                  spellCheck={false}
                  disabled={apiLoading}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && errors.name}
                />
                <Textarea2
                  name="description"
                  header="Description"
                  placeholder="Describe your channel"
                  disabled={apiLoading}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  error={touched.description && errors.description}
                  maxLength={150}
                />
                {/* <Select
                  name="categories"
                  header="Category"
                  placeholder="Add a category to get discovered"
                  options={options}
                  value={values.categories}
                  onChange={s => {
                    if (!s) setFieldValue("categories", []);
                    else
                      setFieldValue(
                        "categories",
                        s.map(val => val.value)
                      );
                    // if (!s) setCategories([]);
                    // else setCategories(s.map(val => val.value));
                  }}
                  maxOptions={5}
                  onBlur={handleBlur}
                  disabled={apiLoading}
                /> */}
                <div className="CreateChannel--private">
                  <i className="fas fa-lock fa-lg" />
                  <div className="CreateChannel--private--info">
                    <h4>Private Group</h4>
                    <p>
                      Users will have to request to follow your group in order
                      to see your content
                    </p>
                  </div>
                  <ToggleCheck
                    name="private"
                    checked={values.private}
                    // checked={privateGroup}
                    // onChange={() => setPrivateGroup(!privateGroup)}
                    disabled={apiLoading}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.private}
                    error={touched.private && errors.private}
                  />
                </div>
              </div>
              <FormSubmitPopup
                type="create"
                disabled={apiLoading || !isValid || !dirty}
                loading={apiLoading}
              />
            </form>
          )}
        </Formik>
      </section>
    </div>
  );
}

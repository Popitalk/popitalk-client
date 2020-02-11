import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { updateChannel } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Input4 from "../Input4";
import Textarea2 from "../Textarea2";
import Select from "../Select";
import ToggleCheck from "../ToggleCheck";
import ImageUpload from "../ImageUpload";
import FormSubmitPopup from "../FormSubmitPopup";
import "./UpdateChannel.css";

const options = ["x1", "y2", "z2", "x3", "y3", "z3"];

export default function UpdateChannel() {
  const { channelId } = useParams();
  const { channels } = useSelector(state => state.generalState);
  const {
    channelCreateApiLoading: apiLoading,
    channelCreateApiError: apiError
  } = useSelector(state => state.apiState);
  const dispatch = useDispatch();
  // const [categories, setCategories] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(undefined);

  return (
    <div className="UpdateChannel--container">
      <Formik
        initialValues={{
          name: channels[channelId].name,
          description: channels[channelId].description,
          private: !channels[channelId].public,
          icon: channels[channelId].icon
          // categories: []
        }}
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
            updateChannel(channelId, {
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
          setFieldValue,
          resetForm
        }) => (
          <form className="UpdateChannel--main" onSubmit={handleSubmit}>
            <div className="UpdateChannel--icon">
              <ImageUpload
                name="icon"
                icon={values.icon}
                onUpload={e => {
                  if (e.target.files[0]) {
                    setUploadedImage(e.target.files[0]);
                    setFieldValue(
                      "icon",
                      URL.createObjectURL(e.target.files[0])
                    );
                  }
                }}
                onRemove={() => {
                  setFieldValue("icon", null);
                  setUploadedImage(null);
                }}
                disabled={apiLoading}
              />
            </div>
            <div className="UpdateChannel--inputs">
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
              <div className="UpdateChannel--private">
                <i className="fas fa-lock fa-lg" />
                <div className="UpdateChannel--private--info">
                  <h4>Private Group</h4>
                  <p>
                    Users will have to request to follow your group in order to
                    see your content
                  </p>
                </div>
                <ToggleCheck
                  name="private"
                  checked={values.private}
                  disabled={apiLoading}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.private}
                  error={touched.private && errors.private}
                />
              </div>
            </div>
            <FormSubmitPopup
              type="edit"
              disabled={apiLoading || !isValid || !dirty}
              loading={apiLoading}
              onReset={() => resetForm()}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

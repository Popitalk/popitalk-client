import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, connect } from "formik";
import * as Yup from "yup";

import Input from "../Controls/Input";
import ImageUpload from "../Controls/ImageUpload";
import ChannelFormSubmit from "./ChannelFormSubmit";
import TagInput from "../Controls/TagInput";
import ControlHeader from "../Controls/ControlHeader";
import strings from "../../helpers/localization";
import Button from "../Controls/Button";
import {
  getCategories,
  removeSelected,
  setSelected,
  createCategory,
  initCategories
} from "../../redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryInput = connect(
  ({
    formik,
    loading,
    disabled,
    tags,
    suggestions,
    handleSelect,
    handleCancel,
    handleNewCategory
  }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [options, setOptions] = useState([]);

    useEffect(() => {
      if (disabled) {
        setShowSuggestions(false);
      }
    }, [disabled]);

    useEffect(() => {
      setOptions(suggestions);
    }, [suggestions]);

    const SuggestionsList = showSuggestions
      ? options.map(({ name, count }) => (
          <div
            key={name}
            role="button"
            onMouseDown={() => handleSelect(formik, { name, count })}
            className="flex items-center justify-between p-2 hover:bg-background-secondary text-copy-primary text-sm rounded-md"
          >
            <span>{name}</span>
            <span>{count}</span>
          </div>
        ))
      : null;

    const CreateCategoryBtn =
      showSuggestions && options.length === 0 ? (
        <button
          onMouseDown={() => {
            handleNewCategory(formik, formik.values.tags.trim());
            setOptions(suggestions);
          }}
          className="flex items-center p-2 w-full hover:bg-background-secondary text-sm rounded-md space-x-2 text-copy-primary"
        >
          <span>Create Category</span>
          <FontAwesomeIcon icon="plus" className="text-xs" />
        </button>
      ) : null;

    return (
      <TagInput
        input={formik.values.tags}
        tags={tags}
        handleCancel={handleCancel}
        name="tags"
        type="text"
        disabled={disabled || loading}
        onChange={e => {
          const query = e.target.value.trim();

          setOptions(() =>
            suggestions.filter(({ name }) =>
              name.toLowerCase().startsWith(query.toLowerCase())
            )
          );

          formik.handleChange(e);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={e => {
          setShowSuggestions(false);
          formik.handleBlur(e);
        }}
        value={formik.values.tags}
        error={formik.touched.tags && formik.errors.category}
        SuggestionsList={SuggestionsList}
        CreateCategoryBtn={CreateCategoryBtn}
      />
    );
  }
);

export default function ChannelForm({
  initial,
  handleSubmit,
  type,
  loading,
  error,
  channelSettings,
  alreadySelected,
  openDeleteChannelModal,
  channelUpdate
}) {
  const { categories, selected } = useSelector(state => state.categories);
  const [tipPressed, setTipPressed] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories({ alreadySelected }));
  }, [alreadySelected, dispatch]);

  useEffect(() => {
    return () => dispatch(initCategories());
  }, [dispatch]);

  const paragraphClassName = "text-copy-secondary text-xs";
  const headerComponent = (
    <div className="flex-col w-full rounded-lg p-4 space-y-2 mb-12 z-20">
      <div className="relative flex space-x-4">
        <h1 className="text-copy-primary text-2xl font-bold">
          {type === "create" ? strings.createNewChannel : strings.editChannel}
        </h1>
        <div className="w-10 h-10">
          <div className="flex flex-col">
            <Button
              hoverable
              styleNone
              icon="lightbulb"
              className={`${
                tipPressed === true
                  ? "bg-copy-link text-copy-tertiary"
                  : "bg-background-primary text-copy-secondary"
              } text-xl w-10 h-10 rounded-full`}
              onMouseEnter={() => setTipPressed(true)}
              onMouseLeave={() => setTipPressed(false)}
            />
            <div
              className={`${
                tipPressed === false && "hidden"
              } absolute left-0 mt-12 -ml-12 md:ml-8 w-screen md:w-102 shadow-md bg-background-primary space-y-4 rounded-md p-4 flex flex-col`}
            >
              <h2 className="text-copy-secondary">{strings.tipHeader}</h2>
              <p className={paragraphClassName}>{strings.tipParagraph1}</p>
              <p className={paragraphClassName}>{strings.tipParagraph2}</p>
              <p className={paragraphClassName}>{strings.tipParagraph3}</p>
              <p className={paragraphClassName}>{strings.tipParagraph4}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-copy-secondary text-sm">
        {type === "create"
          ? strings.createNewChannelSubtitle
          : strings.editChannelSubtitle}
      </p>
    </div>
  );

  const isTagsUpdated =
    channelUpdate &&
    selected.map(({ name }) => name).join() !== alreadySelected.join();

  return (
    <div className="flex flex-col items-center w-full bg-background-secondary rounded-md p-8 overflow-y-auto">
      {headerComponent}
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
          handleSubmit({
            name: values.name,
            description: values.description,
            public: !values.private,
            icon: values.icon,
            categories: selected.map(({ name }) => name)
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
            className="flex flex-col w-full md:w-3/5 space-y-8"
            onSubmit={handleSubmit}
          >
            <div>
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
            </div>
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
              className="space-y-2"
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
              className="space-y-2"
            />
            {/* --UNCOMMENT FOR CHANNEL CATEGORY */}
            <div className="space-y-2">
              <ControlHeader
                header={strings.channelCatagory}
                error={touched.tags && errors.category}
                size="sm"
              />
              <CategoryInput
                loading={loading}
                tags={selected}
                suggestions={categories}
                handleCancel={category => dispatch(removeSelected(category))}
                disabled={selected.length >= 3}
                handleSelect={(formik, category) => {
                  dispatch(setSelected(category));
                  formik.setFieldValue("tags", "");
                  formik.values.tags = "";
                }}
                handleNewCategory={(formik, category) => {
                  dispatch(createCategory({ category }));
                  formik.setFieldValue("tags", "");
                  formik.values.tags = "";
                }}
              />
            </div>
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
            {error && <p className="text-copy-error text-sm pt-4">{error}</p>}
            <div className="py-20 space-y-12 flex flex-col items-end">
              <div className="justify-between w-full">
                <ChannelFormSubmit
                  type={type}
                  disabled={loading || !isValid || !(dirty || isTagsUpdated)}
                  loading={loading}
                  handleReset={() => resetForm()}
                />
              </div>
              {type !== "create" && (
                <Button
                  hoverable
                  styleNone
                  styleNoneContent={strings.deleteChannel}
                  onClick={openDeleteChannelModal}
                  styleNoneContentClassName="text-sm text-copy-error"
                />
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";
import classnames from "classnames";
import { getInputClasses } from "../../helpers/functions";

export function buildTagInput(tags, handleCancel) {
  const WrappedTagInput = (input, setInput, handleEnter) => {
    return (
      <TagInput
        input={input}
        tags={tags}
        handleCancel={handleCancel}
        handleEnter={handleEnter}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    );
  };

  return WrappedTagInput;
}

export default function TagInput({
  input,
  tags,
  handleCancel,
  SuggestionsList,
  CreateCategoryBtn,
  // handleEnter,
  ...rest
}) {
  const fakeInputClasses = classnames(
    "flex flex-col rounded-lg bg-background-primary",
    getInputClasses("regular")
  );

  // const detectKeyPress = e => {
  //   if (e.key === "Enter") {
  //     handleEnter();
  //     e.preventDefault();
  //   } else if (e.key === 8 && input.length === 0 && tags.length > 0) {
  //     handleCancel(tags[tags.length - 1]);
  //   }
  // };

  return (
    <div className={fakeInputClasses}>
      <div className="w-full bg-background-primary rounded-lg flex items-center">
        <div className="flex w-10 h-10 items-center rounded-full justify-center text-sm text-copy-secondary">
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="flex flex-wrap items-center content-start w-full rounded-lg">
          {tags.map(tag => (
            <div key={tag.name} className="p-1 rounded-lg">
              <Tag handleCancel={handleCancel} tag={tag} />
            </div>
          ))}
          <input
            autoComplete="off"
            // onKeyDown={detectKeyPress}
            className="flex flex-grow outline-none border-none py-2 px-2 text-sm bg-background-primary rounded-xl"
            {...rest}
          />
        </div>
      </div>
      {SuggestionsList !== null && (
        <div className="overflow-y-auto max-h-32 shadow-xs rounded-b-lg p-2">
          {SuggestionsList}
          {CreateCategoryBtn}
        </div>
      )}
    </div>
  );
}

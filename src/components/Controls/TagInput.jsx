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
  handleEnter,
  ...rest
}) {
  const fakeInputClasses = classnames(
    "bg-background-primary flex items-start overflow-y-auto max-h-32",
    getInputClasses("regular")
  );

  const detectKeyPress = e => {
    if (e.key === "Enter") {
      handleEnter();
      e.preventDefault();
    } else if (e.key === 8 && input.length === 0 && tags.length > 0) {
      handleCancel(tags[tags.length - 1]);
    }
  };

  return (
    <div className={fakeInputClasses}>
      <div className="w-8 h-8 mt-2 ml-2 self-start">
        <FontAwesomeIcon
          icon="search"
          className="text-sm text-copy-secondary"
        />
      </div>
      <div className="flex flex-wrap items-center content-start w-full">
        {tags.map(tag => (
          <div key={tag.name} className="p-1">
            <Tag handleCancel={handleCancel} tag={tag} />
          </div>
        ))}
        <input
          autoComplete="off"
          onKeyDown={detectKeyPress}
          className="flex flex-grow outline-none border-none py-2 px-2 text-sm bg-background-primary"
          {...rest}
        />
      </div>
    </div>
  );
}

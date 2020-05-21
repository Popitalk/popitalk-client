import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";
import classnames from "classnames";
import { getInputClasses } from "../helpers/functions";

export function buildTagInput(tags, handleCancel) {
  const WrappedTagInput = (input, setInput, handleEnter) => {
    return (
      <TagInput
        input={input}
        setInput={setInput}
        tags={tags}
        handleCancel={handleCancel}
        handleEnter={handleEnter}
      />
    );
  };

  return WrappedTagInput;
}

export default function TagInput({
  input,
  setInput,
  tags,
  handleCancel,
  handleEnter
}) {
  const fakeInputClasses = classnames(
    "bg-primaryBackground flex items-start overflow-y-auto max-h-32",
    getInputClasses("regular")
  );

  const detectKeyPress = e => {
    if (e.keyCode === 13) {
      handleEnter();
    } else if (e.keyCode === 8 && input.length === 0 && tags.length > 0) {
      handleCancel(tags[tags.length - 1].id);
    }
  };

  return (
    <div className={fakeInputClasses}>
      <div className="py-2 pl-3 pr-1 self-start">
        <FontAwesomeIcon icon="search" className="text-secondaryText" />
      </div>
      <div className="flex flex-wrap items-center content-start w-full">
        {tags.map(t => (
          <div key={t.id} className="p-1">
            <Tag handleCancel={handleCancel} {...t} />
          </div>
        ))}
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={detectKeyPress}
          className="flex flex-grow outline-none border-none py-2 px-4 text-base"
        />
      </div>
    </div>
  );
}

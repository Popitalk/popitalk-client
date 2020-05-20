import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";
import classnames from "classnames";
import { getInputClasses } from "../helpers/functions";

export default function TagInput({ filterSearch, tags, handleCancel }) {
  const [input, setInput] = useState("");

  const memoizedCallback = useCallback(() => {
    filterSearch(input);
  }, [filterSearch, input]);

  // Filter the search results when the input is updated
  useEffect(() => {
    memoizedCallback();
  }, [input, memoizedCallback]);

  const fakeInputClasses = classnames(
    "bg-primaryBackground flex items-start overflow-y-auto h-32",
    getInputClasses("regular")
  );

  return (
    <div className={fakeInputClasses}>
      <div className="py-2 pl-3 pr-1 self-start">
        <FontAwesomeIcon icon="search" className="text-secondaryText" />
      </div>
      <div className="flex flex-wrap items-center content-start">
        {tags.map(t => (
          <div key={t.id} className="p-1">
            <Tag handleCancel={handleCancel} {...t} />
          </div>
        ))}
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex flex-grow outline-none border-none py-2 px-4 text-base"
        />
      </div>
    </div>
  );
}

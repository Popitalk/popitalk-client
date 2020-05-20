import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getInputClasses } from "../helpers/functions";
import Tag from "./Tag";

export default function SearchHeader({
  title,
  tags,
  filterSearch,
  handleCancel
}) {
  const [input, setInput] = useState("");

  // Filter the search results when the input is updated
  useEffect(() => {
    filterSearch(input);
  }, [filterSearch, input]);

  const fakeInputClasses = classnames(
    "bg-primaryBackground flex items-start overflow-y-auto h-32",
    getInputClasses("regular")
  );

  return (
    <div className="inset-x-0 top-0 bg-secondaryBackground rounded-t-xl flex flex-col items-center shadow-search py-2 px-4">
      <h4 className="text-base font-bold pb-2">{title}</h4>
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
    </div>
  );
}

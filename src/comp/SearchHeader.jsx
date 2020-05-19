import React, { useState, useEffect } from "react";
import Input from "./Input";
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
  }, [input]);

  return (
    <div className="inset-x-0 top-0 bg-secondaryBackground rounded-t-xl flex flex-col items-center shadow-search py-2 px-4">
      <h4 className="text-base font-bold pb-2">{title}</h4>
      <Input
        variant="filter"
        size="md"
        value={input}
        placeholder="Search"
        onChange={e => setInput(e.target.value)}
        className="w-full"
      />
      <div className="w-full flex flex-wrap items-center content-start pt-2">
        {tags.map(t => (
          <div key={t.id} className="p-1">
            <Tag handleCancel={handleCancel} {...t} />
          </div>
        ))}
      </div>
    </div>
  );
}

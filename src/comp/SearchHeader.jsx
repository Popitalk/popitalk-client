import React, { useState, useEffect } from "react";
import Input from "./Input";

export default function SearchHeader({ title, filterSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    filterSearch(input);
  });

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
    </div>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import Input from "./Input";

export default function SearchInput({ filterSearch }) {
  const [input, setInput] = useState("");

  const memoizedCallback = useCallback(() => {
    filterSearch(input);
  }, [filterSearch, input]);

  // Filter the search results when the input is updated
  useEffect(() => {
    memoizedCallback();
  }, [input, memoizedCallback]);

  return (
    <Input
      variant="filter"
      size="md"
      value={input}
      placeholder="Search"
      onChange={e => setInput(e.target.value)}
      className="w-full"
    />
  );
}
